<template>
  <view class="image-page">
    <view class="image-top">
      <image :src="detail.iconPath" mode=""></image>
    </view>
    <view class="image-bottom">
      <view class="bottom-desc">
        <view class="desc-item">
          {{detail.text}}
        </view>
        <view class="desc-time">
          {{detail.current}}
        </view>
      </view>
    </view>
    <!-- 评论主体 -->
    <view class="image-middle" style="margin-bottom: 500px;" v-if="backLength > 0">
      <view class="bottom-remark" v-for="(item, index) in comList" :key="index">
        <view class="bottom-left">
          <view class="left-item">
            <image :src="item.avatar" mode="" style="border-radius: 50%;"></image>
          </view>
        </view>
        <view class="bottom-right">
          <view class="bottom-name">
            {{item.name}}
          </view>
          <view class="bottom-total">
            <view class="right-item">
              {{item.comment}}
              <text class="right-time">{{item.time}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="empty-cart" v-else>
      <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/4d47e92e-f370-4f19-98e2-33ebb7a605cd.png"
        class="empty-img"></image>
      <text class="tip-text">没有评论，抢占沙发~</text>
    </view>

    <!-- 评论发布 -->
    <view class="submit-remark">
      <view class="remark-left">
        <input type="text" class="remark-inp" placeholder="说点什么..." v-model="comment" @change="change" />
      </view>
      <view class="remark-right">
        <view class="right-image" @click="sendComment">
          <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/6d535d5b-f2f3-4c49-b5cc-32cd1b3119b9.png"
            mode=""></image>
        </view>
        <view class="right-image">
          <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/0359f1bf-4d34-49a8-9b8b-9a24ef0081a1.png"
            mode=""></image>
          <text style="font-size: 10px; font-weight: bold; margin-left: 5rpx;">{{backLength}}</text>
        </view>
        <view class="right-image">
          <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/ad1697b8-536c-4347-b0a4-91eecabc541f.png"
            mode="" @click="changeHeart" v-if="heart"></image>
          <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/79ebebda-6405-4baa-94aa-bf6f8481dad3.png"
            mode="" v-else @click="redHeart"></image>
          <text style="font-size: 10px; font-weight: bold; margin-left: 5rpx;">{{ comLove|| 0}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    computed: {
      ...mapState('comment', [, 'listLength']),

      ...mapState('test', ['pageList']),
      comList() {
        // 评分赋值
        const res = this.pageList.find(item => item.index === this.detail.index)
        return res.commentList
      },
      comLove() {
        return this.pageList.find(item => item.index === this.detail.index).love
      },
      backLength() {
        return this.pageList.find(item => item.index === this.detail.index).commentList.length
      }
    },
    onReady() {
      this.LoveNumber(this.comLove)
    },
    data() {
      return {
        detail: {},
        heart: true,
        comment: ''
      }
    },
    methods: {
      ...mapActions('comment', ['pushCommentList', 'addLoveNumber']),
      ...mapMutations('comment', ['LoveNumber']),
      change(e) {
        this.comment = this.comment.trim()
      },
      changeHeart() {
        this.heart = false
        console.log("你好")
        if (!this.heart) {
          this.addLoveNumber({
            id: this.detail.index,
            value: 1
          })
        }
      },
      redHeart() {
        this.heart = true
        if (this.heart) {
          this.addLoveNumber({
            id: this.detail.index,
            value: -1
          })
        }
      },
      // 发送评论
      sendComment() {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const date = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        const currentDateTime = `${month}-${date} ${hours}:${minutes}`;
        if (this.comment === '') return
        this.pushCommentList({
          id: this.detail.index,
          value: {
            avatar: this.detail.avatar,
            name: this.detail.name,
            comment: this.comment,
            time: currentDateTime
          }
        })
        this.comment = ''
      }
    },
    onLoad(query) {
      let obj = JSON.parse(decodeURIComponent(query.obj));
      this.detail = obj
      console.log(this.detail)
    }
  }
</script>


<style lang="scss">
  .image-page {
    width: 100%;
    height: 100vh;
    // padding: 20px;

    .image-top {
      width: 100%;
      height: 500rpx;

      image {
        width: 100%;
        height: 100%;
      }
    }

    // 下面的图片描述
    .image-bottom {
      margin-top: 20rpx;
      width: 100%;
      display: flex;
      flex-direction: column;

      .bottom-desc {
        width: 100%;
        height: 200rpx;
        // background-color: pink;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-bottom: 1px solid #efefef;
        margin-bottom: 20px;

        .desc-item {
          padding: 0 20rpx;
          font-size: 14px;
        }

        .desc-time {
          padding: 0 20rpx;
          color: #ccc;
          font-size: 13px;

        }
      }
    }

    // 评论
    .bottom-remark {
      width: 100%;
      display: flex;
      margin-bottom: 20rpx;
      padding-bottom: 20rpx;


      .bottom-left {
        width: 15%;
        // background-color: pink;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10rpx;

        .left-item {
          width: 100rpx;
          height: 100rpx;
          // background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          // border-radius: 50%;
          // border: 1px solid #efefef;

          image {
            width: 80rpx;
            height: 80rpx;
          }
        }
      }

      .bottom-right {
        border-bottom: 1px solid #efefef;
        width: 80%;
        // background-color: pink;
        margin-left: 10rpx;
        padding-bottom: 20rpx;

        .bottom-name {
          font-size: 13px;
          color: #ccc;

        }

        .bottom-total {


          .right-time {
            margin-top: 10rpx;
            font-size: 12px;
            color: #ccc;
            margin-left: 20px;

          }

          .right-item {
            font-size: 14px;
          }
        }
      }
    }

    // 底部发布评论
    .submit-remark {
      position: fixed;
      bottom: 0;
      left: 0;
      padding-top: 20rpx;
      padding-bottom: 20rpx;

      width: 100%;
      // height: 100rpx;
      display: flex;


      background-color: #fff;
      border-top: 1px solid #efefef;

      .remark-left {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 20rpx;
        // background-color: pink;

        .remark-inp {
          width: 150px;
          height: 35px;
          border-radius: 20px;
          border: 1px solid #efefef;
          padding-left: 30px;
          font-size: 12px;
          background-color: #efefef;
          background-image: url('https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/bb1d6935-df80-470a-9c8f-2b69c8ecf74f.png');
          background-size: 16px 16px;
          /* 图标大小 */
          background-repeat: no-repeat;

          /* 不重复 */
          background-position: left 8px center;

          &:focus {
            width: 300px;
            /* 聚焦时的宽度 */
          }
        }

      }

      .remark-right {
        height: 100%;
        width: 50%;
        display: flex;
        // flex-direction: column;
        justify-content: space-around;
        align-items: center;
        // background-color: pink;

        .right-image {
          margin-top: 10rpx;
          display: flex;
          align-items: center;

          image {
            width: 50rpx;
            height: 50rpx;
          }
        }
      }
    }
  }


  /* 空空如也 */
  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    height: 200px;
  }

  .empty-cart .empty-img {
    width: 90px;
    height: 90px;
  }

  .empty-cart .tip-text {
    font-size: 12px;
    color: gray;
    margin-top: 15px;
  }

  .image-middle {
    height: 100vh;
  }
</style>