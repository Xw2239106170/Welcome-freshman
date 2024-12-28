<!-- campus-hot-news.vue -->
<template>
  <view class="campus-hot-news-container">
    <view class="hot-news-header">
      <view class="header-content">
        <view class="header-title">
          <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/f27824bf-a8a9-4b24-af03-187f96f6e01d.png"
            class="header-icon" mode="aspectFit"></image>
          <text class="title-text" @click="naveTo">校园热搜</text>
        </view>
        <view class="header-extra">
          <text class="update-time">实时更新</text>
        </view>
      </view>
    </view>

    <view class="hot-news-list">
      <view v-for="(news, index) in sortedNews" :key="news.id" class="hot-news-item" @click="onNewsItemClick(news.id)">
        <view class="news-ranking" :class="{
            'top-three': index < 3,
            'first': index === 0,
            'second': index === 1,
            'third': index === 2
          }">
          {{ index + 1 }}
        </view>
        <view class="news-content">
          <view class="news-title-container">
            <text class="news-title">{{ news.title }}</text>
            <view v-if="news.hot" class="hot-badge">
              热
            </view>
          </view>
          <view class="news-meta">
            <view class="news-trend">
              <view class="trend-icon" :class="{
                  'trend-up': news.trend === 'up',
                  'trend-down': news.trend === 'down',
                  'trend-stable': news.trend === 'stable'
                }">
                <text v-if="news.trend === 'up'">↑</text>
                <text v-else-if="news.trend === 'down'">↓</text>
                <text v-else>→</text>
              </view>
              <text class="news-heat">{{ formatHeat(news.heat) }}</text>
            </view>
            <text class="news-tag">{{ news.tag }}</text>
          </view>
        </view>
        <view class="news-right-icon">
          <text class="iconfont icon-right"></text>
        </view>
      </view>
    </view>

    <view class="news-footer">
      <text class="footer-text">数据由校园新闻中心提供</text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        hotNews: [{
            id: 1,
            title: '张家界学院国家奖学金名揭幕！',
            heat: 5000,
            trend: 'up',
            tag: '奖学金',
            hot: true
          },
          {
            id: 2,
            title: '寒假放假时间定了，就在1月7号！',
            heat: 2000,
            trend: 'up',
            tag: '假期'
          },
          {
            id: 3,
            title: '四六级考试，submission怎么又出现了！',
            heat: 700,
            trend: 'stable',
            tag: '考试'
          },
          {
            id: 4,
            title: '期末考试来袭，考试复习笔记！',
            heat: 1200,
            trend: 'down',
            tag: '学术'
          },
          {
            id: 5,
            title: '校园美食节本周末开幕，百家美食齐聚一堂',
            heat: 230,
            trend: 'up',
            tag: '生活'
          }
        ]
      }
    },
    computed: {
      sortedNews() {
        return [...this.hotNews].sort((a, b) => b.heat - a.heat)
      }
    },
    methods: {
      // 格式化热度数据
      formatHeat(heat) {
        if (heat >= 10000) {
          return `${(heat / 10000).toFixed(1)}万`
        }
        return heat.toString()
      },
      // 点击新闻项目的处理方法
      onNewsItemClick(id) {
        uni.navigateTo({
          url: '/subpkg/HotNewsDetail/HotNewsDetail?id=1',
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .campus-hot-news-container {
    background-color: #ffffff;
    border-radius: 16px;
    margin: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    overflow: hidden;
  }

  .hot-news-header {
    background: linear-gradient(to right, #ff6b6b, #ff8a5b);
    color: white;
    padding: 15px;

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header-title {
      display: flex;
      align-items: center;

      .header-icon {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }

      .title-text {
        font-size: 20px;
        font-weight: bold;
      }
    }

    .update-time {
      font-size: 12px;
      opacity: 0.8;
    }
  }

  .hot-news-list {
    padding: 0 15px;
  }

  .hot-news-item {
    display: flex;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
    transition: background-color 0.3s;

    &:active {
      background-color: #f5f5f5;
    }
  }

  .news-ranking {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #999;
    margin-right: 15px;
    border-radius: 8px;
    background-color: #f0f0f0;
    font-size: 16px;

    &.top-three {
      color: white;
    }

    &.first {
      background-color: #ff6b6b;
    }

    &.second {
      background-color: #4ecdc4;
    }

    &.third {
      background-color: #45b7d1;
    }
  }

  .news-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .news-title-container {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    .news-title {
      font-size: 16px;
      color: #333;
      font-weight: 500;
      flex: 1;
    }

    .hot-badge {
      background-color: #ff6b6b;
      color: white;
      font-size: 12px;
      padding: 2px 6px;
      border-radius: 4px;
      margin-left: 8px;
    }
  }

  .news-meta {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666;
  }

  .news-trend {
    display: flex;
    align-items: center;
    margin-right: 10px;

    .trend-icon {
      margin-right: 5px;
      font-weight: bold;

      &.trend-up {
        color: #07c160;
      }

      &.trend-down {
        color: #fa5151;
      }

      &.trend-stable {
        color: #888;
      }
    }
  }

  .news-tag {
    background-color: #f0f0f0;
    color: #666;
    padding: 2px 6px;
    border-radius: 10px;
  }

  .news-right-icon {
    color: #999;
    margin-left: 10px;
  }

  .news-footer {
    text-align: center;
    padding: 15px;
    background-color: #f8f8f8;

    .footer-text {
      font-size: 12px;
      color: #999;
    }
  }
</style>