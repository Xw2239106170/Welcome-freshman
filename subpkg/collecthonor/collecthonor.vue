<!-- pages/card-collection/index.vue -->
<template>
  <view class="container">
    <!-- 顶部统计 -->
    <view class="status-card">
      <view class="status-header">
        <text class="status-title">我的卡片收藏</text>
        <text class="status-count">{{collectedCount}}/{{cardList.length}}</text>
      </view>
      <view class="progress-bar">
        <view class="progress-inner" :style="{width: progress + '%'}"></view>
      </view>
    </view>

    <!-- 分类过滤 -->
    <view class="category-filter">
      <text v-for="item in categories" :key="item"
        :class="['category-item', selectedCategory === item ? 'category-active' : '']"
        @tap="selectCategory(item)">{{item}}</text>
    </view>

    <!-- 卡片列表 -->
    <view class="card-grid">
      <view class="card-item" v-for="card in filteredCards" :key="card.id"
        :class="{'card-uncollected': !card.collected}" @tap="handleCardTap(card)">
        <!-- 卡片图片 -->
        <view class="card-image-wrapper">
          <image :src="card.image" mode="aspectFill" class="card-image" />
          <view class="card-overlay"></view>
          <!-- 收集状态图标 -->
          <image
            :src="card.collected ? 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/b70575cf-0cc1-4a9d-9d70-9d2703d4aa25.png' : 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/bc64acc1-a51a-4fd5-b83c-923190077a51.png'"
            class="status-icon" mode="aspectFit" />
        </view>

        <!-- 卡片内容 -->
        <view class="card-content">
          <view class="card-header">
            <text class="card-title">{{card.title}}</text>
            <text :class="['card-rarity', 'rarity-' + card.rarity]">{{card.rarity}}</text>
          </view>
          <text class="card-desc">{{card.description}}</text>
          <text class="card-date" v-if="card.collected">收集于 {{card.collectedDate}}</text>
          <text class="card-hint" v-else>完成任务解锁</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    card
  } from '../../utils/mock'
  export default {
    data() {
      return {
        selectedCategory: '全部',
        categories: ['全部', '文化', '建筑'],
        cardList: []
      }
    },
    onReady() {
      this.cardList = card
    },
    computed: {
      // 已收集数量
      collectedCount() {
        return this.cardList.filter(card => card.collected).length
      },
      // 收集进度
      progress() {
        return (this.collectedCount / this.cardList.length) * 100
      },
      // 过滤后的卡片列表
      filteredCards() {
        if (this.selectedCategory === '全部') {
          return this.cardList
        }
        return this.cardList.filter(card => card.category === this.selectedCategory)
      }
    },
    methods: {
      // 选择分类
      selectCategory(category) {
        this.selectedCategory = category
      },
      // 点击卡片
      handleCardTap(card) {
        if (!card.collected) {
          uni.showToast({
            title: '完成相关任务即可解锁',
            icon: 'none'
          })
          return
        }
        // 显示卡片详情
        // uni.navigateTo({
        //   url: '/subpkg/persondetail/persondetail?id=' + 1
        // })
      }
    }
  }
</script>

<style lang="scss">
  .container {
    min-height: 100vh;
    padding: 30rpx;
    background: linear-gradient(to bottom, #f5f5f5, #fff);
  }

  // 顶部统计卡片
  .status-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20rpx;
    padding: 30rpx;
    margin-bottom: 40rpx;
    box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.06);

    .status-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20rpx;
    }

    .status-title {
      font-size: 36rpx;
      font-weight: bold;
      background: linear-gradient(to right, #6366f1, #8b5cf6);
      -webkit-background-clip: text;
      color: transparent;
    }

    .status-count {
      font-size: 32rpx;
      color: #6366f1;
      font-weight: bold;
    }
  }

  // 进度条
  .progress-bar {
    height: 12rpx;
    background: #f0f0f0;
    border-radius: 10rpx;
    overflow: hidden;

    .progress-inner {
      height: 100%;
      background: linear-gradient(to right, #6366f1, #8b5cf6);
      border-radius: 10rpx;
      transition: width 0.3s ease;
    }
  }

  // 分类过滤器
  .category-filter {
    display: flex;
    gap: 20rpx;
    margin-bottom: 40rpx;
    padding: 0 10rpx;

    .category-item {
      padding: 12rpx 30rpx;
      border-radius: 30rpx;
      font-size: 28rpx;
      background: #fff;
      color: #666;
      border: 2rpx solid #eee;
      transition: all 0.3s ease;
    }

    .category-active {
      background: linear-gradient(to right, #6366f1, #8b5cf6);
      color: #fff;
      border: none;
      box-shadow: 0 4rpx 12rpx rgba(99, 102, 241, 0.3);
    }
  }

  // 卡片网格
  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30rpx;
  }

  // 卡片样式
  .card-item {
    background: #fff;
    border-radius: 20rpx;
    overflow: hidden;
    box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;

    &.card-uncollected {
      .card-image {
        // filter: grayscale(100%) brightness(0.7);
      }
    }

    // 卡片图片区域
    .card-image-wrapper {
      position: relative;
      height: 300rpx;
    }

    .card-image {
      width: 100%;
      height: 100%;
    }

    .card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3));
    }

    .status-icon {
      position: absolute;
      top: 20rpx;
      right: 20rpx;
      width: 40rpx;
      height: 40rpx;
    }

    // 卡片内容区域
    .card-content {
      padding: 20rpx;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10rpx;
    }

    .card-title {
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
    }

    .card-rarity {
      font-size: 24rpx;
      padding: 4rpx 16rpx;
      border-radius: 20rpx;

      &.rarity-epic {
        background: linear-gradient(to right, #9333ea, #d946ef);
        color: #fff;
      }

      &.rarity-rare {
        background: linear-gradient(to right, #eab308, #f97316);
        color: #fff;
      }

      &.rarity-normal {
        background: linear-gradient(to right, #3b82f6, #0ea5e9);
        color: #fff;
      }
    }

    .card-desc {
      font-size: 26rpx;
      color: #666;
      margin-bottom: 10rpx;
    }

    .card-date,
    .card-hint {
      font-size: 24rpx;
      color: #999;
    }
  }

  // 点击态
  .card-item:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
</style>