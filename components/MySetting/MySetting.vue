<!-- feedback.vue -->
<template>
  <view class="feedback-page">
    <!-- 渐变背景 -->
    <view class="gradient-bg"></view>

    <!-- 内容区域 -->
    <view class="content">
      <!-- 标题区域 -->
      <view class="header">
        <text class="title">我们期待您的反馈</text>
        <text class="subtitle">选择反馈类型，让我们更了解您的需求</text>
      </view>

      <!-- 反馈选项卡片 -->
      <view class="feedback-cards">
        <view class="card" v-for="(item, index) in feedbackOptions" :key="index" @tap="handleFeedback(item.type)"
          :style="{ animation: `slideIn ${0.2 + index * 0.1}s ease-out` }">
          <view class="icon-wrapper" :class="item.iconClass">
            <image :src="item.icon" mode="aspectFit" class="icon"></image>
          </view>
          <view class="card-content">
            <text class="card-title">{{ item.title }}</text>
            <text class="card-desc">{{ item.description }}</text>
          </view>
        </view>
      </view>

      <!-- 退出登录按钮 -->
      <view class="logout-btn" @tap="handleLogout">
        <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/af02dcad-4dc3-4777-97fe-34240c040eb4.png"
          mode="aspectFit" class="logout-icon"></image>
        <text>退出登录</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        feedbackOptions: [{
            icon: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/1242ed7d-0293-4bb4-976c-a12e3daef1ec.png',
            title: '功能意见',
            description: '告诉我们功能如何改进',
            type: '功能意见',
            iconClass: 'icon-orange'
          },
          {
            icon: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/28cdca00-3b26-4a4e-b371-de15dbc8e74a.png',
            title: '功能异常',
            description: '帮助我们修复小程序中的问题',
            type: '功能异常',
            iconClass: 'icon-red'
          },
          {
            icon: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/ba6e243b-6a3c-41c8-a49a-ddedeccb061d.png',
            title: '违规举报',
            description: '举报色情、诈骗等违法行为',
            type: '违规举报',
            iconClass: 'icon-green'
          }
        ]
      }
    },
    methods: {
      handleFeedback(type) {
        uni.navigateTo({
          url: `/subpkg/detailmessage/detailmessage?meId=${type}`
        })
      },
      handleLogout() {
        try {
          uni.clearStorageSync()
          uni.navigateTo({
            url: '/pages/login/login'
          })
        } catch (e) {
          console.error('退出登录失败:', e)
        }
      }
    }
  }
</script>

<style lang="scss">
  .feedback-page {
    min-height: 100vh;
    background-color: #f5f7fa;
    position: relative;
    overflow: hidden;
  }

  .gradient-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 480rpx;
    background: linear-gradient(135deg, #60a5fa, #6366f1);
    border-radius: 0 0 40rpx 40rpx;
  }

  .content {
    position: relative;
    padding: 60rpx 40rpx;
    z-index: 1;
  }

  .header {
    text-align: center;
    margin-bottom: 60rpx;

    .title {
      font-size: 40rpx;
      font-weight: bold;
      color: #ffffff;
      display: block;
      margin-bottom: 16rpx;
    }

    .subtitle {
      font-size: 28rpx;
      color: rgba(255, 255, 255, 0.9);
      display: block;
    }
  }

  .feedback-cards {
    display: flex;
    flex-direction: column;
    gap: 30rpx;
  }

  .card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 24rpx;
    padding: 30rpx;
    display: flex;
    align-items: center;
    box-shadow: 0 8rpx 30rpx rgba(0, 0, 0, 0.06);
    transform: translateY(0);
    transition: all 0.3s ease;

    &:active {
      transform: translateY(2rpx);
      box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.04);
    }
  }

  .icon-wrapper {
    width: 88rpx;
    height: 88rpx;
    border-radius: 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 24rpx;

    &.icon-orange {
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
    }

    &.icon-red {
      background: linear-gradient(135deg, #f87171, #ef4444);
    }

    &.icon-green {
      background: linear-gradient(135deg, #34d399, #10b981);
    }
  }

  .icon {
    width: 44rpx;
    height: 44rpx;
  }

  .card-content {
    flex: 1;

    .card-title {
      font-size: 32rpx;
      font-weight: 600;
      color: #1f2937;
      display: block;
      margin-bottom: 8rpx;
    }

    .card-desc {
      font-size: 24rpx;
      color: #6b7280;
      display: block;
    }
  }

  .logout-btn {
    margin: 80rpx auto 0;
    background: linear-gradient(135deg, #f43f5e, #ef4444);
    width: 320rpx;
    height: 88rpx;
    border-radius: 44rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8rpx 30rpx rgba(239, 68, 68, 0.2);
    transition: all 0.3s ease;

    &:active {
      transform: translateY(2rpx);
      box-shadow: 0 4rpx 15rpx rgba(239, 68, 68, 0.15);
    }

    .logout-icon {
      width: 36rpx;
      height: 36rpx;
      margin-right: 12rpx;
    }

    text {
      text-align: center;
      color: #ffffff;
      font-size: 28rpx;
      font-weight: 600;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20rpx);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>