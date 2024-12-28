<!-- student-card.vue -->
<template>
  <view class="container">
    <view class="card">
      <!-- 顶部渐变背景 -->
      <view class="header">
        <view class="avatar-container">
          <view class="avatar-outer">
            <view class="avatar-inner">
              <image class="avatar-icon" :src="UserAvatar"></image>
            </view>
          </view>
        </view>
      </view>

      <!-- 内容区域 -->
      <view class="content">
        <!-- 姓名学号部分 -->
        <view class="user-info">
          <text class="name">{{studentInfo.name}}</text>
          <text class="student-id">{{studentInfo.studentId}}</text>
        </view>

        <!-- 信息网格 -->
        <view class="info-grid">
          <!-- 年龄卡片 -->
          <view class="info-card half">
            <view class="info-card-inner">
              <view class="icon-container blue-gradient">
                <image class="icon"
                  src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/fce350fb-b7d8-4864-8e47-81b95848a2ad.png">
                </image>
              </view>
              <view class="info-text">
                <text class="label">年龄</text>
                <text class="value">{{studentInfo.age}}</text>
              </view>
            </view>
          </view>

          <!-- 积分卡片 -->
          <view class="info-card half">
            <view class="info-card-inner">
              <view class="icon-container orange-gradient">
                <image class="icon"
                  src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/86fd3385-c9d8-4e61-b662-84fd75342c51.png">
                </image>
              </view>
              <view class="info-text">
                <text class="label">积分</text>
                <text class="value">{{studentInfo.points}}</text>
              </view>
            </view>
          </view>

          <!-- 学院卡片 -->
          <view class="info-card full">
            <view class="info-card-inner">
              <view class="icon-container blue-gradient">
                <image class="icon"
                  src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/dd94167d-da1a-4e88-b19f-877cb1609507.png">
                </image>
              </view>
              <view class="info-text">
                <text class="label">所属学院</text>
                <text class="value">{{studentInfo.college}}</text>
              </view>
            </view>
          </view>

          <!-- 班级卡片 -->
          <view class="info-card full">
            <view class="info-card-inner">
              <view class="icon-container blue-gradient">
                <image class="icon"
                  src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/c6154d72-eba7-4564-b4bc-fb51c1e77e7d.png">
                </image>
              </view>
              <view class="info-text">
                <text class="label">专业班级</text>
                <text class="value">{{studentInfo.className}}</text>
              </view>
            </view>
          </view>

          <!-- 宿舍卡片 -->
          <view class="info-card full">
            <view class="info-card-inner">
              <view class="icon-container blue-gradient">
                <image class="icon"
                  src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/65a609cb-6576-46f0-b42f-f0140df309c8.png">
                </image>
              </view>
              <view class="info-text">
                <text class="label">宿舍信息</text>
                <text class="value">{{studentInfo.dormitory}}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    computed: {
      ...mapState('user', ['UserAvatar', 'userDorm', 'userInfo'])
    },
    data() {
      return {
        studentInfo: {
          name: "徐多多",
          studentId: "2212040252",
          age: "20",
          college: "软件工程学院",
          className: "软件工程二班",
          points: "69",
          dormitory: "菊园D座613"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    min-height: 100vh;
    padding: 30rpx;
    background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%);
  }

  .card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 30rpx;
    overflow: hidden;
    box-shadow: 0 8rpx 30rpx rgba(0, 0, 0, 0.1);
  }

  .header {
    height: 200rpx;
    background: linear-gradient(to right, #3B82F6, #4F46E5);
    position: relative;
  }

  .avatar-container {
    position: absolute;
    left: 50%;
    bottom: -60rpx;
    transform: translateX(-50%);
    width: 120rpx;
    height: 120rpx;
    background: #fff;
    border-radius: 50%;
    padding: 6rpx;
    box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.1);
  }

  .avatar-outer {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar-icon {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }

  .content {
    padding: 80rpx 40rpx 40rpx 40rpx;
  }

  .user-info {
    text-align: center;
    margin-bottom: 40rpx;

    .name {
      font-size: 40rpx;
      font-weight: bold;
      color: #1F2937;
      display: block;
    }

    .student-id {
      font-size: 28rpx;
      color: #3B82F6;
      margin-top: 10rpx;
      display: block;
    }
  }

  .info-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20rpx;
  }

  .info-card {
    &.half {
      width: calc(50% - 10rpx);
    }

    &.full {
      width: 100%;
    }
  }

  .info-card-inner {
    background: #fff;
    border-radius: 20rpx;
    padding: 20rpx;
    display: flex;
    align-items: center;
    border: 2rpx solid #F3F4F6;
    transition: all 0.3s;

    &:active {
      transform: scale(0.98);
      border-color: #BFDBFE;
    }
  }

  .icon-container {
    width: 80rpx;
    height: 80rpx;
    border-radius: 16rpx;
    display: flex;
    align-items: center;
    justify-content: center;

    &.blue-gradient {
      background: linear-gradient(135deg, #3B82F6, #4F46E5);
    }

    &.orange-gradient {
      background: linear-gradient(135deg, #F59E0B, #EA580C);
    }
  }

  .icon {
    width: 40rpx;
    height: 40rpx;
  }

  .info-text {
    margin-left: 20rpx;
    flex: 1;

    .label {
      font-size: 24rpx;
      color: #6B7280;
      display: block;
    }

    .value {
      font-size: 28rpx;
      color: #1F2937;
      font-weight: 600;
      margin-top: 4rpx;
      display: block;
    }
  }
</style>