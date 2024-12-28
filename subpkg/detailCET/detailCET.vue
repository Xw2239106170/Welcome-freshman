<template>
  <view class="cet-container">
    <!-- Header Section -->
    <view class="header">
      <text class="header-title">英语等级考试</text>
      <text class="header-subtitle">CET Examination</text>
    </view>

    <!-- Main Content -->
    <view class="content">
      <!-- Quick Stats -->
      <view class="stats-card">
        <view class="stats-item">
          <text class="stats-num">138</text>
          <text class="stats-label">练习题目</text>
        </view>
        <view class="stats-item">
          <text class="stats-num">24</text>
          <text class="stats-label">考试真题</text>
        </view>
        <view class="stats-item">
          <text class="stats-num">12</text>
          <text class="stats-label">模拟测试</text>
        </view>
      </view>

      <!-- Main Navigation Cards -->
      <view class="cards-container">
        <!-- CET-4 Card -->
        <view class="card" @tap="navigateToCET4">
          <view class="card-content">
            <view class="card-icon-wrapper blue">
              <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/245e0678-eddb-46e1-b46d-df8f654039f1.png"
                mode="aspectFit" class="card-icon"></image>
            </view>
            <view class="card-text">
              <text class="card-title">四级考试</text>
              <text class="card-subtitle">CET-4 Exam</text>
            </view>
          </view>
          <view class="card-info">
            <text class="info-text">下次考试：2024年12月</text>
            <view class="arrow-right"></view>
          </view>
        </view>

        <!-- CET-6 Card -->
        <view class="card" @tap="navigateToCET6">
          <view class="card-content">
            <view class="card-icon-wrapper green">
              <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/83c2c075-af20-4a2c-bb0f-86678d362494.png"
                mode="aspectFit" class="card-icon"></image>
            </view>
            <view class="card-text">
              <text class="card-title">六级考试</text>
              <text class="card-subtitle">CET-6 Exam</text>
            </view>
          </view>
          <view class="card-info">
            <text class="info-text">下次考试：2024年12月</text>
            <view class="arrow-right"></view>
          </view>
        </view>
      </view>

      <!-- Quick Access Tools -->
      <view class="tools-grid">
        <view class="tool-item" @tap="navigateToMockExam">
          <view class="tool-icon-wrapper purple">
            <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/6f0e61fc-2dc4-4079-b57f-70dffdeb2c30.png"
              mode="aspectFit" class="tool-icon"></image>
          </view>
          <text class="tool-text">模拟考试</text>
        </view>
        <view class="tool-item" @tap="navigateToResources">
          <view class="tool-icon-wrapper orange">
            <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/338e33d7-ef4c-4e78-8047-0a25b7de3b49.png"
              mode="aspectFit" class="tool-icon"></image>
          </view>
          <text class="tool-text">学习资源</text>
        </view>
        <view class="tool-item" @tap="navigateToWordList">
          <view class="tool-icon-wrapper cyan">
            <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/e3c467c1-61c0-49db-95dc-f40656bbff0f.png"
              mode="aspectFit" class="tool-icon"></image>
          </view>
          <text class="tool-text">词汇表</text>
        </view>
        <view class="tool-item" @tap="navigateToProgress">
          <view class="tool-icon-wrapper red">
            <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/80640cfa-d7e4-43b0-ba73-5552e83f4ff4.png"
              mode="aspectFit" class="tool-icon"></image>
          </view>
          <text class="tool-text">学习进度</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'CETExamSection',
    methods: {
      navigateToCET4() {
        uni.navigateTo({
          url: '/pages/cet/cet4/index'
        })
      },
      navigateToCET6() {
        uni.navigateTo({
          url: '/pages/cet/cet6/index'
        })
      },
      navigateToMockExam() {
        uni.navigateTo({
          url: '/pages/cet/mock/index'
        })
      },
      navigateToResources() {
        uni.navigateTo({
          url: '/pages/cet/resources/index'
        })
      },
      navigateToWordList() {
        uni.navigateTo({
          url: '/pages/cet/vocabulary/index'
        })
      },
      navigateToProgress() {
        uni.navigateTo({
          url: '/pages/cet/progress/index'
        })
      }
    }
  }
</script>

<style lang="scss">
  .cet-container {
    min-height: 100vh;
    background-color: #f5f7fa;
    padding: 30rpx;
  }

  .header {
    padding: 20rpx 0 40rpx;

    .header-title {
      font-size: 40rpx;
      font-weight: 600;
      color: #333;
      margin-bottom: 8rpx;
    }

    .header-subtitle {
      font-size: 28rpx;
      color: #666;
    }
  }

  .content {
    .stats-card {
      background: linear-gradient(135deg, #6b8dff, #4466ee);
      border-radius: 20rpx;
      padding: 30rpx;
      display: flex;
      justify-content: space-around;
      margin-bottom: 30rpx;
      box-shadow: 0 4rpx 20rpx rgba(100, 102, 238, 0.2);

      .stats-item {
        text-align: center;
        color: #fff;

        .stats-num {
          font-size: 36rpx;
          font-weight: 600;
          display: block;
          margin-bottom: 8rpx;
        }

        .stats-label {
          font-size: 24rpx;
          opacity: 0.9;
        }
      }
    }
  }

  .cards-container {
    margin-bottom: 30rpx;

    .card {
      background: #fff;
      border-radius: 16rpx;
      padding: 24rpx;
      margin-bottom: 20rpx;
      box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.08);

      .card-content {
        display: flex;
        align-items: center;
        margin-bottom: 20rpx;
      }

      .card-icon-wrapper {
        width: 80rpx;
        height: 80rpx;
        border-radius: 16rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20rpx;

        &.blue {
          background: rgba(100, 102, 238, 0.1);
        }

        &.green {
          background: rgba(72, 187, 120, 0.1);
        }
      }

      .card-icon {
        width: 48rpx;
        height: 48rpx;
      }

      .card-text {
        flex: 1;
      }

      .card-title {
        font-size: 32rpx;
        font-weight: 600;
        color: #333;
        margin-bottom: 4rpx;
      }

      .card-subtitle {
        font-size: 24rpx;
        color: #666;
      }

      .card-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 16rpx;
        border-top: 2rpx solid #f5f5f5;

        .info-text {
          font-size: 24rpx;
          color: #999;
        }

        .arrow-right {
          width: 16rpx;
          height: 16rpx;
          border-top: 4rpx solid #999;
          border-right: 4rpx solid #999;
          transform: rotate(45deg);
        }
      }
    }
  }

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20rpx;

    .tool-item {
      background: #fff;
      border-radius: 16rpx;
      padding: 24rpx;
      display: flex;
      align-items: center;
      box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);

      .tool-icon-wrapper {
        width: 60rpx;
        height: 60rpx;
        border-radius: 12rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16rpx;

        &.purple {
          background: rgba(159, 122, 234, 0.1);
        }

        &.orange {
          background: rgba(237, 137, 54, 0.1);
        }

        &.cyan {
          background: rgba(56, 178, 172, 0.1);
        }

        &.red {
          background: rgba(245, 101, 101, 0.1);
        }
      }

      .tool-icon {
        width: 32rpx;
        height: 32rpx;
      }

      .tool-text {
        font-size: 28rpx;
        color: #333;
        font-weight: 500;
      }
    }
  }
</style>