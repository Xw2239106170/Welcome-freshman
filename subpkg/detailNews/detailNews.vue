<template>
  <view class="news-detail">
    <!-- Navigation Bar -->
    <view class="nav-bar">
      <view class="nav-back" @click="goBack">
        <text class="back-icon">←</text>
      </view>
      <view class="nav-title">新闻详情</view>
      <view class="nav-action">
        <text class="share-icon">⋮</text>
      </view>
    </view>

    <!-- News Content -->
    <scroll-view class="content-scroll" scroll-y>
      <!-- Title Section -->
      <view class="header-section">
        <text class="news-title">{{ newsData.title }}</text>
        <view class="news-meta">
          <text class="meta-item">{{ newsData.department }}</text>
          <text class="meta-divider">|</text>
          <text class="meta-item">{{ newsData.publishTime }}</text>
          <text class="meta-divider">|</text>
          <text class="meta-item">阅读 {{ newsData.readCount }}</text>
        </view>
      </view>

      <!-- Cover Image -->
      <view class="cover-section" v-if="newsData.coverImage">
        <image :src="newsData.coverImage" mode="widthFix" class="cover-image" />
      </view>

      <!-- Content -->
      <view class="content-section">
        <rich-text :nodes="newsData.content"></rich-text>
      </view>

      <!-- Attachments -->
      <view class="attachments-section" v-if="newsData.attachments && newsData.attachments.length">
        <view class="section-title">附件下载</view>
        <view class="attachment-item" v-for="(item, index) in newsData.attachments" :key="index"
          @click="downloadFile(item)">
          <text class="file-icon">📎</text>
          <text class="file-name">{{ item.name }}</text>
          <text class="file-size">{{ item.size }}</text>
        </view>
      </view>

      <!-- Related News -->
      <view class="related-section">
        <view class="section-title">相关新闻</view>
        <view class="related-item" v-for="(item, index) in newsData.relatedNews" :key="index"
          @click="navigateToNews(item.id)">
          <text class="related-dot">•</text>
          <text class="related-title">{{ item.title }}</text>
        </view>
      </view>
    </scroll-view>

    <!-- Bottom Action Bar -->
    <view class="action-bar">
      <view class="action-item">
        <text class="action-icon">👍</text>
        <text class="action-text">{{ newsData.likes }}</text>
      </view>
      <view class="action-item">
        <text class="action-icon">💬</text>
        <text class="action-text">{{ newsData.comments }}</text>
      </view>
      <view class="action-item">
        <text class="action-icon">⭐</text>
        <text class="action-text">收藏</text>
      </view>
      <view class="share-btn">
        分享
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        newsData: {
          id: 1,
          title: '请2024级新生及时填报信息',
          department: '教务处',
          publishTime: '2024-03-17 14:30',
          readCount: 1234,
          coverImage: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/8c2ea2d6-2d7d-453f-995b-5094f88df2ab.jpg',
          content: `
          <div style="font-size: 28rpx; line-height: 1.8; color: #333;">
            <p>各位2024级新生：</p>
            <p>为做好新生入学准备工作，请大家在完成新生服务网站或张院APP注册后，及时填报相关信息。现将有关事项通知如下：</p>
            <p style="font-weight: bold;">一、填报时间</p>
            <p>2024年3月18日-3月25日</p>
            <p style="font-weight: bold;">二、填报方式</p>
            <p>1. 登录新生服务网站(https://freshman.xbmu.edu.cn)</p>
            <p>2. 通过张院APP填报</p>
            <p style="font-weight: bold;">三、填报内容</p>
            <p>1. 基本信息</p>
            <p>2. 学籍信息</p>
            <p>3. 住宿信息</p>
            <p>4. 其他需求</p>
            <p style="color: #ff4444;">请务必认真核对填报信息，确保信息准确无误。</p>
          </div>
        `,
          attachments: [{
              name: '2024级新生信息填报说明.pdf',
              size: '2.3MB'
            },
            {
              name: '入学须知.doc',
              size: '1.1MB'
            }
          ],
          relatedNews: [{
              id: 2,
              title: '2024级新生入学报到流程'
            },
            {
              id: 3,
              title: '关于组织新生开学典礼的通知'
            },
            {
              id: 4,
              title: '2024级新生军训相关安排'
            }
          ],
          likes: 256,
          comments: 48
        }
      }
    },
    methods: {
      goBack() {
        uni.navigateBack()
      },
      downloadFile(file) {
        uni.showToast({
          title: '开始下载：' + file.name,
          icon: 'none'
        })
        // 实际下载逻辑
      },
      navigateToNews(newsId) {
        uni.navigateTo({
          url: `/pages/news/detail?id=${newsId}`
        })
      }
    },
    onLoad(options) {
      // 实际应用中，这里需要根据options.id请求新闻详情数据
      console.log('News ID:', options.id)
    }
  }
</script>

<style>
  .news-detail {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #fff;
  }

  .nav-bar {
    display: flex;
    align-items: center;
    height: 90rpx;
    padding: 0 30rpx;
    background-color: #fff;
    border-bottom: 1rpx solid #eee;
  }

  .nav-back {
    width: 60rpx;
  }

  .back-icon {
    font-size: 40rpx;
  }

  .nav-title {
    flex: 1;
    text-align: center;
    font-size: 32rpx;
    font-weight: 500;
  }

  .nav-action {
    width: 60rpx;
    text-align: right;
  }

  .content-scroll {
    flex: 1;
    overflow: hidden;
  }

  .header-section {
    padding: 30rpx;
  }

  .news-title {
    font-size: 40rpx;
    font-weight: bold;
    line-height: 1.4;
    color: #333;
  }

  .news-meta {
    margin-top: 20rpx;
    font-size: 24rpx;
    color: #999;
  }

  .meta-item {
    margin: 0 10rpx;
  }

  .meta-divider {
    color: #ddd;
  }

  .cover-section {
    padding: 0 30rpx;
  }

  .cover-image {
    width: 100%;
    border-radius: 12rpx;
  }

  .content-section {
    padding: 30rpx;
  }

  .attachments-section {
    padding: 30rpx;
    background-color: #f8f8f8;
  }

  .section-title {
    font-size: 32rpx;
    font-weight: 500;
    margin-bottom: 20rpx;
  }

  .attachment-item {
    display: flex;
    align-items: center;
    padding: 20rpx;
    background-color: #fff;
    border-radius: 8rpx;
    margin-bottom: 20rpx;
  }

  .file-icon {
    margin-right: 10rpx;
  }

  .file-name {
    flex: 1;
    font-size: 28rpx;
  }

  .file-size {
    font-size: 24rpx;
    color: #999;
  }

  .related-section {
    padding: 30rpx;
  }

  .related-item {
    display: flex;
    align-items: center;
    padding: 16rpx 0;
  }

  .related-dot {
    margin-right: 10rpx;
    color: #666;
  }

  .related-title {
    flex: 1;
    font-size: 28rpx;
    color: #666;
  }

  .action-bar {
    display: flex;
    align-items: center;
    height: 100rpx;
    padding: 0 30rpx;
    background-color: #fff;
    border-top: 1rpx solid #eee;
  }

  .action-item {
    display: flex;
    align-items: center;
    margin-right: 40rpx;
  }

  .action-icon {
    margin-right: 6rpx;
  }

  .action-text {
    font-size: 24rpx;
    color: #666;
  }

  .share-btn {
    margin-left: auto;
    padding: 12rpx 30rpx;
    background-color: #1a73e8;
    color: #fff;
    font-size: 28rpx;
    border-radius: 30rpx;
  }
</style>