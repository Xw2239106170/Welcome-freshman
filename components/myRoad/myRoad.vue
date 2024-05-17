<template>
  <view class="main" v-if="myTask.length > 0">
    <view class="page-image" v-for="(item, index) in myTask" :key="index" @click="goDetailSite(index)">
      <view class="image-item">
        <image :src="item.iconPath" mode=""></image>
      </view>
      <view class="image-word">
        <view class="image-locate">
          <view class="icon">
            <image src="/static/location.png" mode=""></image>
          </view>
          <view class="locate-word">
            张家界学院
          </view>
        </view>
        <view class="locate-intro">
          {{item.text}}
        </view>
      </view>
    </view>
  </view>

  <!-- 空空如也 -->
  <view class="empty-cart" v-else>
    <image src="/static/money/empty.png" class="empty-img"></image>
    <text class="tip-text">空空如也~</text>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    computed: {
      ...mapState('test', ['myTask']),
    },
    data() {
      return {};
    },
    methods: {
      goDetailSite(id) {
        // uni.navigateTo({
        //   url: '/subpkg/SchoolSite/SchoolSite?id=' + id
        // })
      }
    }
  }
</script>

<style lang="scss">
  .main {
    width: 100%;
    background-color: #efefef;
  }

  .page-image {
    width: 100%;
    height: 600rpx;
    // background-color: pink;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  .image-item {
    width: 100%;
    height: 400rpx;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .image-item image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-word {
    font-size: 14px;
    color: #666;
    // text-align: center;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 0 0 10px 10px;
    width: 680rpx;
    // height: 100rpx;
  }

  .image-locate {
    display: flex;
    align-items: center;
    padding: 5px;
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;

    image {
      width: 100% !important;
      height: 100% !important;
    }

  }

  .locate-word {
    font-size: 12px;
    color: #999;
  }

  /* 空空如也 */
  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
  }

  .empty-cart .empty-img {
    width: 90px;
    height: 90px;
  }

  .empty-cart .tip-text {
    font-size: 12px;
    color: gray;
    margin-top: 15px;
  }
</style>