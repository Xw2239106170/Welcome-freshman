<template>
  <view class="container">
    <!-- 顶部导航 -->
    <view class="header">
      <text class="welcome-message">你好，欢迎来到</text>
      <text class="major-name">{{ majorName }}</text>
    </view>

    <!-- 课程推荐模块 -->

    <view class="section resources-section" style="margin-bottom: 50rpx; margin-top: 50rpx;">
      <text class="section-title">课程推荐</text>
      <view class="resource-grid">
        <view class="resource-card" v-for="(course, index) in recommendedCourses" :key="index">
          <image :src="course.image" class="resource-image" mode="aspectFill"></image>
          <view class="resource-text">
            <text class="resource-title">{{ course.name }}</text>
            <navigator :url="resource.url" class="resource-link">查看详情</navigator>
          </view>
        </view>
      </view>
    </view>

    <!-- 学习资源模块 -->
    <view class="section resources-section">
      <text class="section-title">学习资源</text>
      <view class="resource-grid">
        <view class="resource-card" v-for="(resource, index) in learningResources" :key="index">
          <image :src="resource.image" class="resource-image" mode="aspectFill"></image>
          <view class="resource-text">
            <text class="resource-title">{{ resource.title }}</text>
            <navigator :url="resource.url" class="resource-link">查看详情</navigator>
          </view>
        </view>
      </view>
    </view>

    <!-- 每日知识模块 -->
    <view class="section daily-knowledge-section">
      <text class="section-title">每日知识</text>
      <view class="knowledge-card">
        <text class="knowledge-content">{{ dailyKnowledge }}</text>
      </view>
    </view>

    <!-- 底部交互按钮 -->
    <view class="footer">
      <button class="footer-button" @tap="goToMyCourses">我的课程</button>
      <button class="footer-button" @tap="goToMyFavorites">我的收藏</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        majorName: "软件工程",
        recommendedCourses: [{
            id: 1,
            name: "前端开发技术",
            image: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/ad4dae8b-a6ef-4216-87c4-019301c10521.png"
          },
          {
            id: 2,
            name: "人工智能基础",
            image: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/4148106d-984b-4a52-b1d6-3b2b495a8e37.jpg"
          },
          {
            id: 3,
            name: "算法与数据结构",
            image: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/e4a4c4b7-321a-45d4-a769-6c61523e80e2.jpg"
          },
        ],
        learningResources: [{
            image: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/7c149a6b-e71b-4b15-9660-7249315e05fb.png",
            title: "Java 编程实战",
            url: "/pages/resource-detail?id=1",
          },
          {
            image: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/e58cf601-3d3b-4b77-b1fc-04c7cc867374.jpg",
            title: "机器学习入门",
            url: "/pages/resource-detail?id=2",
          },
          {
            image: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/8872fa2d-ec71-4660-b686-7bee58c648f9.jpg",
            title: "Python 快速上手",
            url: "/pages/resource-detail?id=3",
          },
        ],
        dailyKnowledge: "你知道吗？在计算机领域，第一位程序员是 Ada Lovelace，她是 19 世纪的数学家。",
      };
    },
    methods: {
      navigateToCourse(courseId) {
        uni.navigateTo({
          url: `/pages/course-detail?id=${courseId}`,
        });
      },
      goToMyCourses() {
        uni.navigateTo({
          url: "/pages/my-courses",
        });
      },
      goToMyFavorites() {
        uni.navigateTo({
          url: "/pages/my-favorites",
        });
      },
    },
  };
</script>

<style scoped>
  /* 容器样式 */
  .container {
    background-color: #f8fafc;
    padding: 20rpx;
  }

  /* 顶部导航 */
  .header {
    text-align: center;
    padding: 30rpx 0;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: #fff;
    border-radius: 20rpx;
  }

  .welcome-message {
    font-size: 28rpx;
  }

  .major-name {
    font-size: 36rpx;
    font-weight: bold;
    margin-top: 10rpx;
  }

  /* 模块标题 */
  .section-title {
    font-size: 30rpx;
    font-weight: bold;
    margin: 20rpx 0;
    color: #333;
    margin-bottom: 20rpx;
  }

  /* 课程推荐 */
  .courses-section {
    margin-bottom: 50rpx;
  }

  .courses-scroll {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    gap: 20rpx;
  }

  .course-card {
    width: 300rpx;
    background-color: #fff;
    border-radius: 20rpx;
    box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
  }

  .course-image {
    width: 100%;
    height: 160rpx;
    border-top-left-radius: 20rpx;
    border-top-right-radius: 20rpx;
  }

  .course-name {
    font-size: 26rpx;
    margin: 10rpx;
    color: #333;
  }

  /* 学习资源 */
  .resource-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20rpx;
  }

  .resource-card {
    width: 48%;
    background-color: #fff;
    border-radius: 20rpx;
    box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
  }

  .resource-image {
    width: 100%;
    height: 140rpx;
    border-top-left-radius: 20rpx;
    border-top-right-radius: 20rpx;
  }

  .resource-text {
    padding: 10rpx;
  }

  .resource-title {
    font-size: 24rpx;
    font-weight: bold;
    color: #333;
  }

  .resource-link {
    font-size: 22rpx;
    color: #4a90e2;
    margin-top: 5rpx;
    display: inline-block;
  }

  /* 每日知识 */
  .knowledge-card {
    background: #ffe082;
    padding: 20rpx;
    border-radius: 20rpx;
    color: #333;
    font-size: 24rpx;
    text-align: center;
    margin-top: 20rpx;
    box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
  }

  /* 底部交互按钮 */
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 0;
  }

  .footer-button {
    flex: 1;
    margin: 0 10rpx;
    padding: 20rpx;
    background: #2575fc;
    color: #fff;
    border-radius: 30rpx;
    text-align: center;
    font-size: 26rpx;
  }
</style>