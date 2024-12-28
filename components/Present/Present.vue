# pages/checkin-rank/index.vue
<template>
  <view class="container">
    <!-- 我的打卡状态 -->
    <view class="my-status">
      <view class="status-card">
        <view class="user-info">
          <image class="avatar" :src="UserAvatar" mode="aspectFill"></image>
          <view class="info-right">
            <text class="nickname">{{userInfo.nickname}}</text>
            <text class="college">{{userInfo.college}}</text>
          </view>
        </view>
        <view class="status-grid">
          <view class="status-item">
            <text class="num">{{userInfo.checkInCount}}</text>
            <text class="label">已打卡</text>
          </view>
          <view class="status-item">
            <text class="num">{{userInfo.ranking}}</text>
            <text class="label">当前排名</text>
          </view>
          <view class="status-item">
            <text class="num">{{userInfo.continuous}}天</text>
            <text class="label">连续打卡</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 排行榜分类切换 -->
    <view class="rank-tabs">
      <view class="tab-item" v-for="(tab, index) in tabs" :key="index" :class="{ active: currentTab === index }"
        @tap="switchTab(index)">
        {{tab.name}}
      </view>
    </view>

    <!-- 排行榜列表 -->
    <scroll-view class="rank-list" scroll-y @scrolltolower="loadMore">
      <view class="rank-item" v-for="(item, index) in rankList" :key="item.id" :class="{ 'top3': index < 3 }">
        <!-- 排名 -->
        <view class="rank-num" :class="'rank-' + (index + 1)">
          <view v-if="index < 3" class="iconfont icon-crown">
            <image :src="rank[index].icon" mode="" style="height: 70rpx;
width: 70rpx;"></image>
          </view>
          <text v-else>{{index + 1}}</text>
        </view>

        <!-- 用户信息 -->
        <image class="user-avatar" :src="item.avatar" mode="aspectFill"></image>
        <view class="user-detail">
          <text class="user-name">{{item.nickname}}</text>
          <text class="user-desc">{{item.college}}</text>
        </view>

        <!-- 打卡数据 -->
        <view class="check-info">
          <text class="check-num">{{item.checkInCount}}次</text>
          <text class="check-label">已打卡</text>
        </view>
      </view>

      <!-- 加载更多 -->
      <view class="loading" v-if="isLoading">
        <text class="loading-text">加载中...</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'
  import {
    ranks,
    rankModel
  } from '../../utils/mock.js'
  export default {
    computed: {
      ...mapState('user', ['UserAvatar']),
    },
    data() {
      return {
        rank: [],
        userInfo: {
          avatar: '',
          nickname: '小徐同学',
          college: '软件工程',
          checkInCount: 12,
          ranking: 1,
          continuous: 5
        },
        tabs: [{
            name: '总榜',
            type: 'all'
          },
          {
            name: '学院榜',
            type: 'college'
          },
          {
            name: '连续打卡榜',
            type: 'continuous'
          }
        ],
        currentTab: 0,
        rankList: [],
        page: 1,
        isLoading: false
      }
    },
    onLoad() {
      this.loadRankData()
      this.rankList = [...ranks]
    },
    onReady() {
      this.rankList = [...ranks]
      this.rank = rankModel
      ranks[0].avatar = this.UserAvatar
      console.log(rankModel)
    },
    methods: {
      // 切换排行榜类型
      switchTab(index) {
        if (this.currentTab === index) return
        this.currentTab = index
        this.page = 1
        this.rankList = [...ranks]
        // this.loadRankData()
      },

      // 加载排行榜数据
      async loadRankData() {
        if (this.isLoading) return
        this.isLoading = true

        // 模拟数据，实际项目中应该调用API
        const mockData = Array(10).fill(0).map((_, i) => ({
          id: this.page * 100 + i,
          avatar: '',
          nickname: `用户${this.page * 10 + i}`,
          college: '计算机科学与技术',
          checkInCount: 100 - (this.page * 10 + i),
          continuous: 20 - (this.page * 10 + i)
        }))

        setTimeout(() => {
          this.rankList = [...this.rankList, ...mockData]
          this.isLoading = false
        }, 500)
      },

      // 加载更多
      loadMore() {
        this.page++
        this.loadRankData()
      }
    }
  }
</script>

<style lang="scss">
  .container {
    min-height: 100vh;
    background-color: #f5f7fa;
    padding-bottom: env(safe-area-inset-bottom);
  }

  .my-status {
    padding: 30rpx;

    .status-card {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border-radius: 24rpx;
      padding: 30rpx;
      color: #fff;

      .user-info {
        display: flex;
        align-items: center;
        margin-bottom: 30rpx;

        .avatar {
          width: 100rpx;
          height: 100rpx;
          border-radius: 50%;
          border: 4rpx solid rgba(255, 255, 255, 0.3);
        }

        .info-right {
          margin-left: 20rpx;

          .nickname {
            font-size: 32rpx;
            font-weight: 500;
          }

          .college {
            font-size: 24rpx;
            opacity: 0.8;
            margin-top: 4rpx;
          }
        }
      }

      .status-grid {
        display: flex;
        justify-content: space-around;
        text-align: center;

        .status-item {
          .num {
            font-size: 40rpx;
            font-weight: bold;
            display: block;
          }

          .label {
            font-size: 24rpx;
            opacity: 0.8;
            margin-top: 8rpx;
          }
        }
      }
    }
  }

  .rank-tabs {
    display: flex;
    padding: 0 30rpx;
    margin-bottom: 20rpx;

    .tab-item {
      padding: 16rpx 40rpx;
      font-size: 28rpx;
      color: #666;
      background: #fff;
      border-radius: 100rpx;
      margin-right: 20rpx;

      &.active {
        background: #6366f1;
        color: #fff;
      }
    }
  }

  .rank-list {
    height: calc(100vh - 400rpx);

    .rank-item {
      margin: 20rpx 30rpx;
      padding: 30rpx;
      background: #fff;
      border-radius: 16rpx;
      display: flex;
      align-items: center;

      &.top3 {
        background: linear-gradient(to right, #fff5f5, #fff);

        .rank-num {
          color: #f43f5e;
        }
      }

      .rank-num {
        width: 60rpx;
        font-size: 32rpx;
        font-weight: bold;
        color: #666;
        margin-right: 30rpx;

        .icon-crown {
          font-size: 40rpx;
        }

        &.rank-1 {
          color: #f59e0b;
        }

        &.rank-2 {
          color: #94a3b8;
        }

        &.rank-3 {
          color: #d97706;
        }
      }

      .user-avatar {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
        margin-right: 20rpx;
        border: 1px solid #efefef;
      }

      .user-detail {
        flex: 1;

        .user-name {
          font-size: 28rpx;
          color: #333;
          font-weight: 500;
        }

        .user-desc {
          font-size: 24rpx;
          color: #666;
          margin-top: 4rpx;
        }
      }

      .check-info {
        text-align: right;

        .check-num {
          font-size: 32rpx;
          color: #6366f1;
          font-weight: bold;
        }

        .check-label {
          font-size: 24rpx;
          color: #666;
          margin-top: 4rpx;
        }
      }
    }
  }

  .loading {
    text-align: center;
    padding: 30rpx;

    .loading-text {
      font-size: 24rpx;
      color: #999;
    }
  }
</style>