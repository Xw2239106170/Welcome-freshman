<!-- pages/news-detail/news-detail.vue -->
<template>
  <view class="news-detail">

    <!-- 文章内容区 -->
    <scroll-view scroll-y class="content-scroll">
      <!-- 标题区域 -->
      <view class="header-section">
        <text class="news-title">{{ newsDetail.title }}</text>
        <view class="news-meta">
          <view class="meta-item">
            <text class="department">{{ newsDetail.department }}</text>
          </view>
          <view class="meta-item">
            <text class="publish-time">{{ newsDetail.publishTime }}</text>
          </view>
        </view>
        <view class="stats-bar">
          <view class="stat-item">
            <text class="iconfont">👁</text>
            <text class="stat-text">{{ formatNumber(newsDetail.views) }}阅读</text>
          </view>
          <view class="stat-item">
            <text class="iconfont">👍</text>
            <text class="stat-text">{{ formatNumber(newsDetail.likes) }}</text>
          </view>
        </view>
      </view>

      <!-- 正文内容 -->
      <view class="news-content">
        <block v-if="newsDetail.cover">
          <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
            <swiper-item v-for="(item, index) in newsDetail.cover" style="height: 100%;
width: 100%;" :key="index">
              <view class="swiper-item">
                <image :src="item" mode="widthFix" class="cover-image" @click="previewImage(item)">
                </image>
              </view>
            </swiper-item>
          </swiper>
        </block>

        <view class="content-text">
          <text class="paragraph" v-for="(para, index) in newsDetail.content" :key="index">
            {{ para }}
          </text>
        </view>
      </view>

      <!-- 底部信息 -->
      <view class="footer-section">
        <text class="source-text">{{ newsDetail.source }}</text>
        <text class="copyright">本文内容归{{ newsDetail.department }}所有</text>
      </view>
    </scroll-view>

    <!-- 底部操作栏 -->
    <view class="action-bar">
      <view class="action-input">
        <input type="text" placeholder="写下你的评论..." class="comment-input" />
      </view>
      <view class="action-buttons">
        <view class="action-btn like" :class="{ active: isLiked }" @tap="toggleLike">
          <text class="iconfont">👍</text>
          <text class="btn-text">{{ isLiked ? '已点赞' : '点赞' }}</text>
        </view>
        <view class="action-btn collect" :class="{ active: isCollected }" @tap="toggleCollect">
          <text class="iconfont">⭐</text>
          <text class="btn-text">{{ isCollected ? '已收藏' : '收藏' }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        newsId: '',
        isLiked: false,
        isCollected: false,
        newsDetail: {
          title: '【张院热点】张家界学院2023-2024学年国家奖学金公示名单',
          department: '学生资助管理中心',
          publishTime: '2024-12-19 10:30',
          views: 95000,
          likes: 3280,
          cover: ['https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/59a3d5cf-c37f-404e-8e14-20b04e1c52df.jpg',
            'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/395ef0e8-3bb7-4ccd-9242-e04435426579.jpg'
          ],
          content: [
            "根据《关于做好2024年普通高校国家奖助学金评审工作的通知》（湘学助﹝2024﹞30号）文件精神，经学生本人申请、各二级学院确定初步推荐名单、学生工作处审核、学院国家奖学金评审领导小组审定，最终评定出2024年张家界学院本科生国家奖学金获奖者36名，具体名单详见以下表格。"
          ],
          source: '校园新闻中心',
        }
      }
    },
    onLoad(options) {
      // 获取页面参数中的新闻ID
      this.newsId = options.id
      // 实际应用中这里应该根据ID请求后端API获取新闻详情
      this.getNewsDetail()
    },
    methods: {
      // 获取新闻详情
      getNewsDetail() {
        // 这里模拟API请求，实际使用时替换为真实的API调用
        uni.showLoading({
          title: '加载中...'
        })

        setTimeout(() => {
          uni.hideLoading()
        }, 500)
      },


      // 分享新闻
      shareNews() {
        uni.share({
          provider: "weixin",
          scene: "WXSceneSession",
          type: 0,
          title: this.newsDetail.title,
          success: function(res) {
            console.log("success:" + JSON.stringify(res));
          },
          fail: function(err) {
            console.log("fail:" + JSON.stringify(err));
          }
        });
      },

      previewImage(value) {
        const randomInt = Math.floor(Math.random() * 100);
        uni.previewImage({
          current: randomInt,
          urls: [value]
        })
      },

      // 格式化数字
      formatNumber(num) {
        if (num >= 10000) {
          return (num / 10000).toFixed(1) + '万'
        }
        return num
      },

      // 点赞操作
      toggleLike() {
        this.isLiked = !this.isLiked
        if (this.isLiked) {
          this.newsDetail.likes++
          uni.showToast({
            title: '点赞成功',
            icon: 'success'
          })
        } else {
          this.newsDetail.likes--
        }
      },

      // 收藏操作
      toggleCollect() {
        this.isCollected = !this.isCollected
        uni.showToast({
          title: this.isCollected ? '收藏成功' : '取消收藏',
          icon: 'success'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .news-detail {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #fff;
  }

  .nav-bar {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background-color: #fff;
    position: relative;
    z-index: 100;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

    .back-btn {
      padding: 10px;
      margin-left: -10px;
    }

    .nav-actions {
      display: flex;
      align-items: center;

      .share-btn {
        padding: 10px;
        margin-right: -10px;
      }
    }
  }

  .content-scroll {
    flex: 1;
    overflow: hidden;
  }

  .header-section {
    padding: 20px 15px;

    .news-title {
      font-size: 22px;
      font-weight: bold;
      color: #333;
      line-height: 1.4;
      margin-bottom: 15px;
    }

    .news-meta {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      .meta-item {
        margin-right: 15px;
        font-size: 14px;
        color: #666;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .stats-bar {
      display: flex;
      align-items: center;

      .stat-item {
        display: flex;
        align-items: center;
        margin-right: 20px;
        font-size: 14px;
        color: #999;

        .iconfont {
          margin-right: 5px;
        }
      }
    }
  }

  .news-content {
    padding: 0 15px;

    .cover-image {
      width: 100%;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .content-text {
      .paragraph {
        font-size: 16px;
        color: #333;
        line-height: 1.8;
        margin-bottom: 20px;
        text-align: justify;
      }
    }
  }

  .footer-section {
    padding: 20px 15px;
    border-top: 1px solid #f0f0f0;

    .source-text {
      font-size: 14px;
      color: #666;
      margin-bottom: 10px;
    }

    .copyright {
      font-size: 12px;
      color: #999;
    }
  }

  .action-bar {
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border-top: 1px solid #f0f0f0;
    background-color: #fff;

    .action-input {
      flex: 1;
      margin-right: 15px;

      .comment-input {
        height: 36px;
        background-color: #f5f5f5;
        border-radius: 18px;
        padding: 0 15px;
        font-size: 14px;
      }
    }

    .action-buttons {
      display: flex;
      align-items: center;

      .action-btn {
        display: flex;
        align-items: center;
        padding: 8px 12px;
        border-radius: 16px;
        margin-left: 10px;
        background-color: #f5f5f5;

        &.active {
          color: #ff6b6b;
          background-color: #fff2f2;
        }

        .iconfont {
          margin-right: 5px;
        }

        .btn-text {
          font-size: 14px;
        }
      }
    }
  }
</style>