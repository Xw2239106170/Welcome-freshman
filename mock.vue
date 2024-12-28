<template>
  <view class="container">
    <!-- 顶部状态栏占位 -->
    <view class="status-bar"></view>

    <!-- 顶部个人信息 -->
    <view class="header">
      <view class="user-info">
        <text class="nickname">Hi, 小徐同学</text>
        <text class="dept">软件工程 · 2022级</text>
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
          <text class="name">张小明</text>
          <text class="expire">有效期至 2028.06</text>
        </view>
      </view>
    </view>

    <!-- 功能网格 -->
    <view class="grid">
      <view class="grid-item" v-for="(item, index) in functions" :key="index" @tap="handleTap(item)">
        <view class="icon-wrapper" :style="{ backgroundColor: item.bgColor }">
          <!-- <image :src="item.icon" mode="aspectFit" class="icon"></image> -->
          <uni-icons :type="item.icon" size="30"></uni-icons>
        </view>
        <view class="text-wrapper">
          <text class="title">{{item.title}}</text>
          <text class="desc">{{item.desc}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
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
        this.$refs.popup.open('center')
        uni.navigateTo({
          url: '/pages/qrcode/index'
        })
      },
      handleTap(item) {
        uni.navigateTo({
          url: item.path
        })
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
</style>