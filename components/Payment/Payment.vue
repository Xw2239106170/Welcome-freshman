<template>
  <view class="pay-box">
    <view class="pay-item" v-if="Object.keys(item).length > 0">
      <view class="item-left">
        <radio :checked="item.money_state" @click="tabRadio(item.id)"></radio>
      </view>
      <view class="item-right">
        <view class="right-info">
          <image src="/static/money/book.png" mode=""></image>
          <text>{{item.project}}</text>
        </view>
        <view class="right-money">
          {{item.money }}
        </view>
      </view>
    </view>
    <!-- 空空如也 -->
    <view class="empty-cart" v-else>
      <image src="/static/money/empty.png" class="empty-img"></image>
      <text class="tip-text">空空如也~</text>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex';
  export default {
    name: "Payment",
    computed: {

    },
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {

      };
    },
    methods: {
      ...mapMutations('user', ['tabRadio']),
      change() {
        console.log(item)
      }
    }
  }
</script>

<style lang="scss">
  .pay-box {
    display: flex;
    justify-content: center;
    // padding: 20rpx;
    flex-direction: column;
    margin-bottom: 20rpx;
  }

  .pay-item {
    display: flex;
    align-items: center;
    width: 700rpx;
    height: 120rpx;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20rpx;
  }

  .item-left {
    width: 100rpx;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #ccc;
  }

  .item-left radio {
    margin-right: 10rpx;
  }

  .item-right {
    padding: 0 20rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
  }

  .right-info {
    display: flex;
    align-items: center;
  }

  .right-info image {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .right-money {
    font-weight: bold;
    font-size: 16px;
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