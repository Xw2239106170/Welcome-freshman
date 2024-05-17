<template>
  <view class="detail-box">
    <view class="detail-title" style="margin-left: 10rpx;">{{ title }}</view>

    <!-- 问题描述 -->
    <view class="detail-text">
      <textarea v-model="description" @input="handleInput" cols="30" rows="10"
        placeholder="请填写10个字以上的问题描述以便帮助我们提供更好的帮助"></textarea>
      <view class="word-count">{{ remainingCharacters }}/200</view>
    </view>

    <!-- 图片上传 -->
    <view class="detail-image">
      <view class="image-title">截图</view>
      <text></text>
      <uni-section title="只选择图片" type="line">
        <view class="example-body">
          <uni-file-picker limit="3" title="最多选择3张图片" ref="files"></uni-file-picker>
        </view>
      </uni-section>
    </view>

    <!-- 联系电话 -->
    <view class="detail-tel">
      <uni-section title="联系方式" type="line" padding>
        <uni-easyinput class="uni-mt-5" trim="all" v-model="userTel" placeholder="邮箱/手机号"></uni-easyinput>
      </uni-section>
    </view>
    <view class="submit-image">
      <view class="radio">
        <radio @click="permitRadio" :checked="radio2"></radio>
        <text>允许开发者在48小时内通过预留信息联系我</text>
      </view>
      <button type="primary" @click="upLoad" :disabled="permit">提交</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        images: [], // 存储已选择的图片信息,
        permit: true,
        radio2: false,
        userTel: ''
      };
    },
    computed: {
      remainingCharacters() {
        // return Math.max(0, 200 - this.description.trim().length);
        return this.description.trim().length
      }
    },
    methods: {
      upLoad() {
        console.log(this.$refs.files.files)
        const im = this.$refs.files.files
        im.forEach(item => {
          this.images.push(item.path)
        })
        console.log(this.images)
      },
      handleInput() {
        if (this.description.length > 200) {
          this.description = this.description.slice(0, 200);
        }
      },
      handleFileChange(e) {
        const files = e.detail;
        console.log(e)
        console.log("你好")
      },
      permitRadio() {
        this.radio2 = !this.radio2
        this.permit = !this.permit
        console.log(this.userTel)
        console.log(this.description)
      }
    },
    onLoad(option) {
      this.title = option.meId;
    }
  };
</script>

<style lang="scss">
  .detail-box {
    width: 100%;
    // padding: 20rpx;
    // padding: 0 20rpx;

    .detail-title {
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #efefef;
    }

    .detail-text {
      position: relative;
      padding: 10rpx;
      width: 100%;
      height: 100px;
    }

    .word-count {
      position: absolute;
      bottom: 5px;
      right: 40px;
      color: #666;
    }

    .detail-image {
      padding-top: 10px;
      border-top: 1px solid #efefef;
      width: 100%;
      height: 400rpx;
      display: flex;
      flex-direction: column;

      .image-title {
        margin-left: 20rpx;
        margin-bottom: 10rpx;
        font-weight: bold;
      }

      .example-body {
        padding: 10px;

        .images {
          margin-top: 10px;
          height: 100px;
          width: 100px;
          border: 1px solid #efefef;
          position: relative;

          .preview-image {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .detail-tel {
      border-top: 1px solid #efefef;
      margin-top: 40px;
      height: 100px;
      width: 300px;
    }

    .submit-image {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 200rpx;


      .radio {
        text {
          font-size: 12px;
          color: #666666;
        }
      }

      button {
        width: 400rpx;
      }
    }
  }
</style>