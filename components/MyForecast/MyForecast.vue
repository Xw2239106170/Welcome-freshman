<template>
  <view class="container">
    <!-- 顶部状态栏占位 -->
    <view class="status-bar"></view>

    <!-- 顶部个人信息 -->
    <view class="header">
      <view class="user-info">
        <text class="nickname">Hi, 小徐同学</text>
        <text class="dept">软件工程 · 2024级</text>
      </view>
    </view>

    <!-- 虚拟卡片 -->
    <view class="card">
      <view class="card-header">
        <view class="card-title">
          <text>校园通</text>
          <text class="card-no">No. 20240001</text>
        </view>
        <view class="qr-wrapper" @tap="showQRCode">
          <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/0a2ec970-ee92-4ccc-bc9a-49576a931c3f.png"
            mode="aspectFit" class="qr-icon"></image>
        </view>
      </view>
      <view class="card-footer">
        <view class="balance">
          <text class="amount">￥168.50</text>
          <text class="label">卡余额</text>
        </view>
        <view class="user">
          <text class="name">徐多多</text>
          <text class="expire">有效期至 2026.06</text>
        </view>
      </view>
    </view>

    <!-- 功能网格 -->
    <view class="grid">
      <view class="grid-item" v-for="(item, index) in functions" :key="index" @tap="handleTap(item)">
        <view class="icon-wrapper" :style="{ backgroundColor: item.bgColor }">
          <uni-icons :type="item.icon" size="30"></uni-icons>
        </view>
        <view class="text-wrapper">
          <text class="title">{{item.title}}</text>
          <text class="desc">{{item.desc}}</text>
        </view>
      </view>
    </view>

    <!-- 二维码弹出层 -->
    <view class="qr-popup" v-if="showQR" @tap="hideQRCode">
      <view class="qr-content" @tap.stop>
        <view class="qr-header">
          <text class="qr-title">身份验证码</text>
          <text class="qr-desc">请向工作人员出示此二维码</text>
        </view>
        <view class="qr-image-wrapper">
          <image :src="qrCode" mode="aspectFit" class="qr-image"></image>
        </view>
        <view class="qr-refresh">
          <view class="refresh-timer">
            <text class="timer-text">{{countdown}}s</text>
            <text class="timer-label">后刷新</text>
          </view>
          <view class="refresh-progress" :style="{ transform: `rotate(${360 * (countdown/60)}deg)` }"></view>
        </view>
        <button class="close-btn" @tap="hideQRCode">关闭</button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        showQR: false,
        countdown: 60,
        timer: null,
        qrCode: "",
        functions: [{
            icon: 'wallet',
            title: '充值',
            desc: '快速充值饭卡',
            bgColor: '#EBF5FF',
            path: '/pages/topup/index'
          },
          {
            icon: 'home',
            title: '图书馆',
            desc: '借阅信息',
            bgColor: '#F3E8FF',
            path: '/pages/library/index'
          },
          {
            icon: 'calendar',
            title: '考勤',
            desc: '上课打卡',
            bgColor: '#DCFCE7',
            path: '/pages/attendance/index'
          },
          {
            icon: 'shop',
            title: '食堂',
            desc: '消费记录',
            bgColor: '#FFF7ED',
            path: '/pages/canteen/index'
          },
          {
            icon: 'vip',
            title: '校车',
            desc: '实时查询',
            bgColor: '#FEF9C3',
            path: '/pages/bus/index'
          }
        ]
      }
    },
    methods: {
      showQRCode() {
        this.showQR = true;
        this.countdown = 60;
        this.startCountdown();
        wx.request({
          url: "http://localhost:8080/api/qr/generate",
          method: 'GET',
          success: res => {
            this.qrCode = 'data:image/png;base64,' + res.data.data.qrImage
          }
        })
      },
      hideQRCode() {
        this.showQR = false;
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
      },
      startCountdown() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
          if (this.countdown > 0) {
            this.countdown--;
          } else {
            this.showQRCode()
            // 这里可以调用刷新二维码的接口
            this.countdown = 60;
          }
        }, 1000);
      },
      handleTap(item) {
        uni.navigateTo({
          url: item.path
        })
      }
    },
    destroyed() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }
</script>

<style lang="scss">
  .container {
    min-height: 100vh;
    background: linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%);
    padding: 0 30rpx;
  }

  .status-bar {
    height: var(--status-bar-height);
  }

  .header {
    padding: 30rpx 0;

    .user-info {
      .nickname {
        font-size: 40rpx;
        font-weight: bold;
        color: #1F2937;
      }

      .dept {
        font-size: 28rpx;
        color: #6B7280;
        margin-top: 10rpx;
      }
    }
  }

  .card {
    background: linear-gradient(135deg, #2563EB 0%, #7C3AED 100%);
    border-radius: 24rpx;
    padding: 40rpx;
    margin: 30rpx 0;
    color: #FFFFFF;
    box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.1);

    .card-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 60rpx;

      .card-title {
        font-size: 32rpx;
        font-weight: 500;

        .card-no {
          display: block;
          font-size: 24rpx;
          opacity: 0.8;
          margin-top: 10rpx;
        }
      }

      .qr-wrapper {
        .qr-icon {
          width: 48rpx;
          height: 48rpx;
        }
      }
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .balance {
        .amount {
          font-size: 40rpx;
          font-weight: bold;
        }

        .label {
          display: block;
          font-size: 24rpx;
          opacity: 0.8;
          margin-top: 10rpx;
        }
      }

      .user {
        text-align: right;

        .name {
          font-size: 32rpx;
          font-weight: 500;
        }

        .expire {
          display: block;
          font-size: 24rpx;
          opacity: 0.8;
          margin-top: 10rpx;
        }
      }
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30rpx;

    .grid-item {
      background: #FFFFFF;
      border-radius: 20rpx;
      padding: 30rpx;
      display: flex;
      align-items: center;
      box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);

      .icon-wrapper {
        width: 80rpx;
        height: 80rpx;
        border-radius: 16rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20rpx;

        .icon {
          width: 40rpx;
          height: 40rpx;
        }
      }

      .text-wrapper {
        flex: 1;

        .title {
          font-size: 30rpx;
          font-weight: 500;
          color: #1F2937;
        }

        .desc {
          font-size: 24rpx;
          color: #6B7280;
          margin-top: 6rpx;
        }
      }
    }
  }

  // 二维码弹出层样式
  .qr-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;

    .qr-content {
      width: 600rpx;
      background: #FFFFFF;
      border-radius: 24rpx;
      padding: 40rpx;
      position: relative;
    }

    .qr-header {
      text-align: center;
      margin-bottom: 40rpx;

      .qr-title {
        font-size: 36rpx;
        font-weight: bold;
        color: #1F2937;
        display: block;
      }

      .qr-desc {
        font-size: 28rpx;
        color: #6B7280;
        margin-top: 10rpx;
        display: block;
      }
    }

    .qr-image-wrapper {
      width: 400rpx;
      height: 400rpx;
      margin: 0 auto;
      padding: 20rpx;
      background: #F3F4F6;
      border-radius: 16rpx;

      .qr-image {
        width: 100%;
        height: 100%;
      }
    }

    .qr-refresh {
      margin-top: 30rpx;
      position: relative;
      width: 120rpx;
      height: 120rpx;
      margin: 40rpx auto;
      display: flex;
      align-items: center;
      justify-content: center;

      .refresh-timer {
        text-align: center;
        z-index: 1;

        .timer-text {
          font-size: 36rpx;
          font-weight: bold;
          color: #2563EB;
          display: block;
        }

        .timer-label {
          font-size: 24rpx;
          color: #6B7280;
          margin-top: 4rpx;
          display: block;
        }
      }

      .refresh-progress {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 6rpx solid #E5E7EB;
        border-top-color: #2563EB;
        border-radius: 50%;
        transition: transform 1s linear;
      }
    }

    .close-btn {
      width: 100%;
      height: 88rpx;
      background: #2563EB;
      color: #FFFFFF;
      border-radius: 44rpx;
      font-size: 32rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40rpx;
    }
  }
</style>