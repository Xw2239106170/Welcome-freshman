<template>
  <view class="container">
    <view class="section-header">
      <text class="header-title">消息通知</text>
    </view>

    <view class="message-list" v-if="message.length > 0">
      <view class="message-card" :class="{ 'read': !item.state }" v-for="(item, index) in message" :key="index"
        @click="goDetailInfo(item)">
        <view class="content-wrapper">
          <!-- 图标区域 -->
          <view class="icon-container" :class="{ 'read': !item.state }">
            <view class="notification-icon"></view>
            <view class="status-dot" v-if="item.state"></view>
          </view>

          <!-- 内容区域 -->
          <view class="content">
            <view class="title-row">
              <text class="title">{{ item.title }}</text>
              <text class="time">{{ item.time }}</text>
            </view>
            <text class="preview">{{ item.desc }}</text>
            <view class="info-row">
              <text class="date">{{ item.surface }}日</text>
              <view class="badge" v-if="!item.state">
                <text>已读</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 优化的空状态设计 -->
    <view class="empty-state" v-else>
      <view class="empty-card">
        <view class="empty-icon">
          <image src="/static/money/empty.png" mode="aspectFit"></image>
        </view>
        <text class="empty-title">暂无新消息</text>
        <text class="empty-subtitle">有新的通知时会第一时间提醒您</text>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'

  export default {
    computed: {
      ...mapState('message', ['message'])
    },
    methods: {
      ...mapMutations('message', ['changeState']),
      goDetailInfo(item) {
        uni.showModal({
          title: item.title,
          content: item.desc,
          showCancel: false,
          confirmText: '我知道了',
          success: (res) => {
            if (res.confirm) {
              item.state = false;
              this.changeState(item.id)
            }
          }
        });
      }
    }
  };
</script>

<style lang="scss">
  .container {
    min-height: 100vh;
    background: linear-gradient(180deg, #f6f6f7 0%, #ffffff 100%);
    padding: 24rpx;
    background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%);
  }

  .section-header {
    padding: 32rpx 24rpx;
    margin-bottom: 24rpx;

    .header-title {
      font-size: 44rpx;
      font-weight: 600;
      color: #1c1c1e;
      letter-spacing: -0.5px;
    }
  }

  .message-list {
    display: flex;
    flex-direction: column;
    gap: 24rpx;
  }

  .message-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border-radius: 24rpx;
    padding: 24rpx;
    box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.03);
    border: 1rpx solid rgba(255, 255, 255, 0.4);
    transition: all 0.3s ease;

    &:active {
      transform: scale(0.98);
      background: rgba(255, 255, 255, 0.8);
    }

    &.read {
      background: rgba(255, 255, 255, 0.5);
    }
  }

  .content-wrapper {
    display: flex;
    gap: 20rpx;
  }

  .icon-container {
    position: relative;
    width: 88rpx;
    height: 88rpx;
    background: linear-gradient(135deg, #007AFF 0%, #5856D6 100%);
    border-radius: 22rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    &.read {
      background: #e5e5ea;
    }

    .notification-icon {
      width: 40rpx;
      height: 40rpx;
      border: 3rpx solid #ffffff;
      border-radius: 50%;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 16rpx;
        height: 16rpx;
        background: #ffffff;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .status-dot {
      position: absolute;
      top: -6rpx;
      right: -6rpx;
      width: 20rpx;
      height: 20rpx;
      background: #FF3B30;
      border-radius: 50%;
      border: 3rpx solid #ffffff;
    }
  }

  .content {
    flex: 1;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8rpx;

    .title {
      font-size: 32rpx;
      font-weight: 600;
      color: #1c1c1e;
    }

    .time {
      font-size: 24rpx;
      color: #8e8e93;
    }
  }

  .preview {
    font-size: 28rpx;
    color: #48484a;
    line-height: 1.5;
    margin-bottom: 16rpx;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .date {
      font-size: 24rpx;
      color: #8e8e93;
    }

    .badge {
      padding: 4rpx 16rpx;
      background: rgba(142, 142, 147, 0.1);
      border-radius: 100rpx;

      text {
        font-size: 24rpx;
        color: #8e8e93;
      }
    }
  }

  .empty-state {
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48rpx;
  }

  .empty-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border-radius: 32rpx;
    padding: 48rpx;
    width: 100%;
    max-width: 600rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.03);
    border: 1rpx solid rgba(255, 255, 255, 0.4);

    .empty-icon {
      width: 240rpx;
      height: 240rpx;
      margin-bottom: 32rpx;
      opacity: 0.5;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .empty-title {
      font-size: 36rpx;
      font-weight: 600;
      color: #1c1c1e;
      margin-bottom: 12rpx;
    }

    .empty-subtitle {
      font-size: 28rpx;
      color: #8e8e93;
      text-align: center;
    }
  }
</style>