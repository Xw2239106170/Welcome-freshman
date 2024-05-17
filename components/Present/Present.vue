<template>
  <view class="gift-page">
    <view class="title">
      <text>领取新生礼包</text>
      <image src="../../static/present/gift.png" class="gift-icon"></image>
    </view>
    <view class="form">
      <view class="form-item">
        <image src="/static/present/yuanlingTxu.png" class="gift-item-icon"></image>
        <text class="label">文化衫尺码：</text>
        <!--        <input class="input" v-model="shirtSize" type="text" placeholder="请输入尺码" /> -->
        <uni-data-select v-model="shirtSize" :localdata="range" class="input"></uni-data-select>
      </view>
      <view class="form-item">
        <image src="../../static/present/kuzi.png" class="gift-item-icon"></image>
        <text class="label">裤子尺码：</text>
        <uni-data-select v-model="pantsSize" :localdata="range" class="input"></uni-data-select>

      </view>
      <view class="form-item">
        <image src="../../static/present/shubao.png" class="gift-item-icon"></image>
        <text class="label">书包：</text>
        <text class="info">已包含</text>
      </view>
      <view class="form-item">
        <image src="../../static/present/maozi.png" class="gift-item-icon"></image>
        <text class="label">帽子：</text>
        <text class="info">已包含</text>
      </view>
      <view class="form-item">
        <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/1a9a45bb-db84-41dc-847c-4558d20e1835.png"
          class="gift-item-icon"></image>
        <text class="label">三件套：</text>
        <text class="info">已包含</text>
      </view>
      <view class="submit-button" @click="submitForm">领取礼包</view>
    </view>
    <uni-popup title="礼包内容" ref="popup" type="dialog">
      <uni-popup-dialog mode="base" :duration="2000" :before-close="true" @confirm="confirm" showClose="false"
        @close="close" type="info">
        <view class="popup-content">
          <h1 style="font-size: 24px; margin-bottom: 20rpx; font-weight: bold; color: #9e8655;">领取礼品包括</h1>
          <text class="popup-text">文化衫尺码：{{ shirtSize }}</text>
          <text class="popup-text">裤子尺码：{{ pantsSize }}</text>
          <text class="popup-text">书包：已包含</text>
          <text class="popup-text">帽子：已包含</text>
          <text class="popup-text">三件套：已包含</text>
          <text class="popup-text" style="color: #9e8655;">地点：学校一食堂门口</text>

        </view>
      </uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex';
  export default {
    computed: {
      ...mapState('user', ['giftNum'])
    },
    data() {
      return {
        candidates: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
        range: [{
          value: 'XS',
          text: 'XS'
        }, {
          value: 'S',
          text: 'S'
        }, {
          value: 'M',
          text: 'M'
        }, {
          value: 'L',
          text: 'L'
        }, {
          value: 'XL',
          text: 'XL'
        }, {
          value: '2XL',
          text: '2XL'
        }],
        shirtSize: '',
        pantsSize: '',
        showPopup: false
      };
    },
    methods: {
      ...mapMutations('user', ['changeGiftNum']),
      submitForm() {
        if (!this.confirmSize()) {
          return
        }
        console.log(this.confirmSize())
        if (this.giftNum === 0) {
          this.$refs.popup.open()
          // 提交表单逻辑，这里假设提交成功
          // 显示弹窗
          this.showPopup = true;

          // 更新领取状态
          this.changeGiftNum()

          // 提示用户
          uni.showToast({
            title: '领取成功',
            icon: 'success'
          });
          return
        }
        // 已经领取过
        uni.showToast({
          title: '不可重复领取哦~',
          icon: 'error'
        });
      },
      // 下面是对提示框的处理
      confirm(value) {
        this.$refs.popup.close()
      },
      close() {
        this.$refs.popup.close()
      },
      confirmSize() {
        if (this.shirtSize === '') {
          uni.$showMsg('请填写衣服尺码~')
          return false
        }
        if (this.pantsSize === '') {
          uni.$showMsg('请填写裤子尺码~')
          return false
        }
        return true
      }
    }
  };
</script>

<style lang="scss">
  .gift-page {
    padding: 20px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom, #6cc4cb, white);
  }

  .title {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    display: flex;
    align-items: center;
  }

  .gift-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .form {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .form-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-right: 10px;
  }

  .input {
    flex: 1;
    padding: 10px;
    // border: 1px solid #ccc;
    border-radius: 5px;
    // font-size: 12px;
  }

  .info {
    color: #888;
  }

  .submit-button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  .uni-popup {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 400px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .popup-text {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .gift-item-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
</style>