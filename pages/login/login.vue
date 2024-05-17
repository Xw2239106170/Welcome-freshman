<template>
  <view class="login-box">

    <view class="login-school-logo">
      <image src="../../static/images/school-logo.jpg" mode="" class="school-logo"></image>
    </view>

    <view class="login-button-box">
      <button type="primary" class='login-button' @click="goDetailLogin(1)">
        <view class="button-ch">
          我是本科生
        </view>
        <view class="button-en">
          Undergraduate
        </view>
      </button>
      <button type="primary" class='login-button' @click="goDetailLogin(2)" style="background-color: #2C73D2;
       box-shadow: 0 4px #2C73D2;">
        <view class="button-ch">
          我是研究生
        </view>
        <view class="button-en" style="left: 105px;">
          Postgraduate
        </view>
      </button>
    </view>
    <!-- 底部信息 -->
    <view class="login-bottom">
      <view class="word-ch">
        张家界学院迎新服务系统
      </view>
      <view class="word-en">
        Zhangjiajie University Service System
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters('user', ['backToken'])
    },
    data() {
      return {
        isHidden: false
      };
    },
    onLoad() {
      if (!this.userLogin()) return uni.$showMsg('登录已过期，请重新登录')
      if (this.backToken) {
        uni.switchTab({
          url: '/pages/test/test'
        })
      }
    },
    methods: {
      // 登录处理
      async userLogin() {
        const user = uni.getStorageSync('userInfo')
        const res = await uni.$http.post('/login', {
          name: user.name,
          password: user.password
        })
        // console.log(res)
        if (!res.data.data === this.backToken) return false
        if (res.data.msg === "用户名或密码错误") return false
      },
      goDetailLogin(item) {
        // 本科生
        if (item === 1) {
          uni.navigateTo({
            url: '/subpkg/login-style/login-style?style=' + item
          })
        }
        if (item === 2) {
          uni.navigateTo({
            url: '/subpkg/login-style/login-style?style=' + item
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  .login-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    // 校徽样式
    .login-school-logo {
      height: 300rpx;
      width: 310rpx;

      .school-logo {
        width: 100%;
        height: 100%;
      }
    }

    // 登录按钮样式
    .login-button-box {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 170px;
      width: 300px;
      margin-top: 150rpx;
    }

    .login-button {
      width: 300px;
      height: 50px;
      font-size: 14px;
      position: relative;

      background-color: #4CAF50;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 8px;
      box-shadow: 0 4px #3e8e41;

      &:active {
        box-shadow: 0 2px #3e8e41;
        transform: translateY(4px);
      }

      &:hover {
        background-color: darken(#4CAF50, 10%);
      }

      .button-ch {
        position: absolute;
        top: 0;
        left: 110px;
      }

      .button-en {
        position: absolute;
        bottom: -8px;
        left: 100px;
        font-size: 14px;
      }
    }

    // 底部信息
    .login-bottom {
      width: 100%;
      color: #ccc;
      position: fixed;
      bottom: 5px;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>