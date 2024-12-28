<template>
  <view class="container">
    <!-- Search Bar -->
    <view class="search-bar">
      <input type="text" placeholder="请输入搜索内容" />
      <text class="more-icon">...</text>
      <text class="target-icon">◎</text>
    </view>

    <!-- Banner Image -->
    <!-- Swiper Banner -->
    <swiper class="banner" circular autoplay interval="3000" duration="500" indicator-dots
      indicator-active-color="#fff">
      <swiper-item v-for="(item, index) in bannerList" :key="index">
        <view class="swiper-item">
          <image :src="item.iconPath" mode="aspectFill" class="banner-img" />
        </view>
      </swiper-item>
    </swiper>

    <!-- Navigation Icons -->
    <view class="nav-icons">
      <view class="nav-item" v-for="(item, index) in navItems" :key="index" @click="goDetailFunction(item.id)">
        <image :src="item.icon" mode="aspectFit" class="nav-icon" />
        <text class="nav-text">{{ item.text }}</text>
      </view>
    </view>

    <!-- News Section -->
    <view class="news-section">
      <view class="section-header">
        <text class="section-title">最新资讯</text>
        <text class="more-link">更多 ></text>
      </view>

      <view class="news-list">
        <view class="news-item" v-for="(item, index) in newsItems" :key="index" @click="goDetailNews">
          <image :src="item.image" mode="aspectFill" class="news-image" />
          <view class="news-content">
            <text class="news-title">{{ item.title }}</text>
            <text class="news-desc">{{ item.description }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    banner,
    news,
    nav
  } from '../../utils/mock'
  export default {
    data() {
      return {
        bannerList: [],
        // 功能分区
        navItems: [],
        newsItems: []
      }
    },
    onReady() {
      this.bannerList = banner
      this.newsItems = news
      this.navItems = nav
    },
    methods: {
      goDetailNews() {
        uni.navigateTo({
          url: '/subpkg/detailNews/detailNews'
        })
      },
      goDetailFunction(id) {
        if (id == '0') {
          uni.navigateTo({
            url: '/subpkg/schoolCalender/schoolCalender'
          })
        }
        if (id == '1') {
          uni.navigateTo({
            url: '/subpkg/detailCET/detailCET'
          })
        }
        if (id == '2') {
          uni.navigateTo({
            url: '/subpkg/schoolInfo/schoolInfo'
          })
        }
        if (id == '3') {
          uni.navigateTo({
            url: '/subpkg/collecthonor/collecthonor'
          })
        }
      }
    }
  }
</script>

<style>
  .container {
    padding: 20rpx;
    background-color: #f5f5f5;
  }

  .search-bar {
    display: flex;
    align-items: center;
    background-color: #f0f0f0;
    padding: 10rpx 20rpx;
    border-radius: 30rpx;
    margin-bottom: 20rpx;
  }

  .search-bar input {
    flex: 1;
    font-size: 28rpx;
    color: #999;
  }

  .banner {
    position: relative;
    margin-bottom: 30rpx;
  }

  .banner-img {
    width: 100%;
    height: 300rpx;
    border-radius: 10rpx;
  }

  .banner-text {
    position: absolute;
    right: 20rpx;
    top: 50%;
    color: white;
    font-size: 36rpx;
  }

  .nav-icons {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 0;
    margin-bottom: 30rpx;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav-icon {
    width: 80rpx;
    height: 80rpx;
    margin-bottom: 10rpx;
  }

  .nav-text {
    font-size: 24rpx;
    color: #333;
  }

  .news-section {
    background-color: white;
    border-radius: 10rpx;
    padding: 20rpx;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
  }

  .section-title {
    font-size: 32rpx;
    font-weight: bold;
  }

  .more-link {
    color: #999;
    font-size: 24rpx;
  }

  .news-item {
    display: flex;
    margin-bottom: 20rpx;
    padding-bottom: 20rpx;
    border-bottom: 1rpx solid #eee;
  }

  .news-image {
    width: 200rpx;
    height: 140rpx;
    border-radius: 8rpx;
    margin-right: 20rpx;
  }

  .news-content {
    flex: 1;
  }

  .news-title {
    font-size: 28rpx;
    color: #333;
    margin-bottom: 10rpx;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .news-desc {
    font-size: 24rpx;
    color: #999;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    padding: 10rpx 0;
    background-color: white;
    border-top: 1rpx solid #eee;
  }

  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tab-icon {
    width: 48rpx;
    height: 48rpx;
    margin-bottom: 6rpx;
  }

  .tab-text {
    font-size: 20rpx;
    color: #666;
  }
</style>