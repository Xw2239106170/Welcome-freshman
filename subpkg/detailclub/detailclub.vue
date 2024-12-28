<!-- pages/club/index.vue -->
<template>
  <view class="container">
    <!-- 顶部大图 -->
    <view class="banner">
      <image class="banner-bg"
        src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/9eb14030-c297-4ea3-b307-046d6931ae53.jpg"
        mode="aspectFill"></image>
      <view class="banner-content">
        <text class="banner-tag">创建于 2010 年的摄影社团</text>
        <text class="banner-title">摄影爱好者协会</text>
        <text class="banner-desc">在这里，每一帧都是艺术，每一刻都值得铭记</text>
        <button class="join-btn" @tap="handleJoin">加入我们</button>
      </view>
    </view>

    <!-- 关于我们 -->
    <view class="about-section">
      <text class="section-title">关于我们</text>
      <text class="about-desc">我们不仅仅是一个社团，更是一个充满激情的创作社区。</text>
      <view class="features">
        <view class="feature-item" v-for="(item, index) in features" :key="index">
          <text class="iconfont icon-arrow-right"></text>
          <text class="feature-text">{{item}}</text>
        </view>
      </view>
    </view>

    <!-- 活动展示 -->
    <view class="activities-section">
      <text class="section-title">精彩活动</text>
      <view class="activities-grid">
        <view class="activity-card" v-for="(activity, index) in activities" :key="index">
          <view class="iconfont" :class="activity.icon">
            <uni-icons :type="activity.icon" size="30" color='#4f46e5'></uni-icons>
          </view>
          <text class="activity-title">{{activity.title}}</text>
          <text class="activity-desc">{{activity.desc}}</text>
        </view>
      </view>
    </view>

    <!-- 联系我们 -->
    <view class="contact-section">
      <text class="section-title">加入我们</text>
      <view class="contact-grid">
        <view class="contact-item" v-for="(contact, index) in contacts" :key="index">
          <view class="iconfont" :class="contact.icon">
            <uni-icons :type="contact.icon" size="30"></uni-icons>

          </view>
          <view class="contact-info">
            <text class="contact-label">{{contact.label}}</text>
            <text class="contact-value">{{contact.value}}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        features: [
          '与志同道合的摄影爱好者交流技术',
          '参与专业摄影师指导的实践课程',
          '获得校园摄影比赛的参展机会',
          '体验最新的摄影器材和技术'
        ],
        activities: [{
            icon: 'image',
            title: '月度摄影大赛',
            desc: '每月不同主题，让创意自由绽放'
          },
          {
            icon: 'color',
            title: '大师课堂',
            desc: '邀请专业摄影师分享经验'
          },
          {
            icon: 'shop',
            title: '创意工作坊',
            desc: '定期举办后期处理工作坊'
          }
        ],
        contacts: [{
            icon: 'phone',
            label: '联系电话',
            value: '123-4567-8900'
          },
          {
            icon: 'email',
            label: '邮箱地址',
            value: 'photo_club@example.com'
          },
          {
            icon: 'location',
            label: '活动地点',
            value: '学生活动中心306室'
          },
          {
            icon: 'calendar',
            label: '活动时间',
            value: '每周六下午2:00-5:00'
          }
        ]
      }
    },
    methods: {
      handleJoin() {
        uni.showModal({
          title: '提示',
          content: '确认要加入摄影爱好者协会吗？',
          success: (res) => {
            if (res.confirm) {
              // 处理加入逻辑
              uni.showToast({
                title: '申请已提交',
                icon: 'success'
              })
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .container {
    min-height: 100vh;
    background-color: #f5f5f5;
  }

  .banner {
    position: relative;
    height: 600rpx;

    .banner-bg {
      width: 100%;
      height: 100%;
    }

    .banner-content {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 40rpx;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);

      .banner-tag {
        display: inline-block;
        padding: 8rpx 20rpx;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 30rpx;
        font-size: 24rpx;
        color: #fff;
      }

      .banner-title {
        display: block;
        margin: 20rpx 0;
        font-size: 48rpx;
        font-weight: bold;
        color: #fff;
      }

      .banner-desc {
        font-size: 28rpx;
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }

  .join-btn {
    margin-top: 30rpx;
    padding: 20rpx 60rpx;
    background: #4f46e5;
    color: #fff;
    border-radius: 40rpx;
    font-size: 28rpx;
  }

  .section-title {
    display: block;
    margin: 60rpx 0 30rpx;
    padding: 0 30rpx;
    font-size: 36rpx;
    font-weight: bold;
    color: #333;
  }

  .about-section {
    padding: 0 30rpx;

    .about-desc {
      font-size: 28rpx;
      color: #666;
    }

    .features {
      margin-top: 30rpx;

      .feature-item {
        display: flex;
        align-items: center;
        margin-bottom: 20rpx;

        .iconfont {
          margin-right: 20rpx;
          color: #4f46e5;
        }

        .feature-text {
          font-size: 28rpx;
          color: #333;
        }
      }
    }
  }

  .activities-grid {
    padding: 0 30rpx;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30rpx;

    .activity-card {
      padding: 40rpx;
      background: #fff;
      border-radius: 20rpx;
      box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);

      .iconfont {
        display: block;
        margin-bottom: 20rpx;
        font-size: 48rpx;
        color: #4f46e5;
      }

      .activity-title {
        display: block;
        margin-bottom: 10rpx;
        font-size: 32rpx;
        font-weight: bold;
        color: #333;
      }

      .activity-desc {
        font-size: 26rpx;
        color: #666;
      }
    }
  }

  .contact-section {
    padding: 0 30rpx 60rpx;

    .contact-grid {
      background: #fff;
      border-radius: 20rpx;
      padding: 30rpx;

      .contact-item {
        display: flex;
        align-items: center;
        padding: 20rpx 0;

        .iconfont {
          width: 80rpx;
          height: 80rpx;
          margin-right: 20rpx;
          background: #f0f0ff;
          border-radius: 40rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36rpx;
          color: #4f46e5;
        }

        .contact-info {
          flex: 1;

          .contact-label {
            display: block;
            font-size: 24rpx;
            color: #999;
          }

          .contact-value {
            font-size: 28rpx;
            color: #333;
          }
        }
      }
    }
  }
</style>