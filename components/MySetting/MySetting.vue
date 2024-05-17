<template>
  <view class="message-box">
    <!-- 标题 -->
    <view class="title">
      <h1>请选择反馈类型</h1>
    </view>
    <view class="box-fun">
      <view class="fun-title">
        向开发者反馈
      </view>
      <view class="fun-improve" @click="goDetailMessage('功能意见')">
        <view class="improve-title">
          功能意见
        </view>
        <view class="improve-detail">
          请向开发中反馈程序中需要改进的地方和问题
        </view>
        <view class="arrow">
          >
        </view>
      </view>
      <!-- 功能反馈 -->
      <view class="fun-improve" @click="goDetailMessage('功能异常')">
        <view class="improve-title">
          功能异常
        </view>
        <view class="improve-detail">
          请向开发中反馈小程序功能异常问题
        </view>
        <view class="arrow">
          >
        </view>
      </view>
      <!-- 暴力色情信息反馈 -->
      <view class="fun-improve" style="height: 80px;" @click="goDetailMessage('违规举报')">
        <view class="improve-title">
          违规举报
        </view>
        <view class="improve-detail" style="width: 300px;">
          若遇色情、诱导、骚扰、欺诈、恶意营销、违法犯罪等情况，可向微信举报
        </view>
        <view class="arrow">
          >
        </view>
      </view>
    </view>
    <view class="person-botton" @click="outLogin">
      <view class="out-botton">
        退出登录
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    name: "MySetting",
    data() {
      return {};
    },
    methods: {
      ...mapMutations('user', ['clearToken']),
      goDetailMessage(value) {
        uni.navigateTo({
          url: '/subpkg/detailmessage/detailmessage?meId=' + value
        })
      },
      // 退出登录
      outLogin() {
        this.clearToken()
        uni.navigateTo({
          url: '/pages/login/login'
        })
      }
    }
  }
</script>

<style lang="scss">
  .message-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20rpx;
    background: linear-gradient(to bottom, #6cc4cb, white);

    .title {
      margin-top: 40px;
      font-weight: bold;
      font-size: 20px;
    }

    // 详情标题
    .box-fun {
      margin-top: 60px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;

      .fun-title {
        padding-bottom: 10px;
        height: 20px;
        width: 100%;
        font-size: 16px;
        color: #666666;
        border-bottom: 1px solid #efefef;
      }

      .fun-improve {
        padding: 10px 0;
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #efefef;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;

        .improve-title {
          font-weight: bold;
          font-size: 18px;
        }

        .improve-detail {
          // margin-top: 10px;
          color: #666666;
          font-size: 15px;
        }

        .arrow {
          position: absolute;
          right: 0;
          bottom: 30px;
        }

        &:hover {
          background-color: #efefef;
        }
      }
    }
  }

  .person-botton {
    width: 500rpx;
    height: 100rpx;
    margin-top: 90px;
    border-radius: 20px;
    background-color: #ccc;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .out-button {

      border: none;
      background-color: #fff;
      color: #112139;
      border-radius: 20px;
    }
  }
</style>