<template>
  <view class="club-list" v-if="message.length > 0">
    <view class="club-item" @click="goDetailInfo(item)" v-for="(item, index) in message" :key="index">
      <image class="club-logo"
        src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/1f63de50-b1ec-4c57-a2c3-033cefb95d5d.png"
        v-if="item.state">
      </image>
      <image v-else src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/3e0b29d7-afd0-4ccc-8407-2513fac18426.png"
        mode="" class="club-logo"></image>
      <view class="club-details">
        <view class="club-name">{{item.title}}</view>
        <view class="club-description">{{item.surface}}日</view>
      </view>
      <view class="time">
        <text style="font-size: 12px; margin-right: 20px; color: #ccc;" v-if="!item.state">已读</text>
        {{item.time}}
      </view>
    </view>
  </view>
  <view class="empty-cart" v-else>
    <image src="/static/money/empty.png" class="empty-img"></image>
    <text class="tip-text">空空如也~</text>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    computed: {
      ...mapState('message', ['message'])
    },
    data() {
      return {
        // message: [{
        //   state: true,
        //   title: '系统发来一条消息',
        //   surface: '3.20日小tips',
        //   desc: '解锁开学必备物品：行李箱',
        //   time: '12:45'
        // }]
      };
    },
    methods: {
      ...mapMutations('message', ['changeState']),
      goDetailInfo(item) {
        uni.showModal({
          title: item.title,
          content: item.desc,
          showCancel: false, // 是否显示取消按钮
          confirmText: '收下了', // 确认按钮的文字，可根据实际情况修改
          success: (res) => {
            if (res.confirm) {
              item.state = false; // 修改item.state的值为false，使得图片显示切换
              this.changeState(item.id)
              // 在这里添加跳转到领取小礼物页面的逻辑
            }
          }
        });
      }
    }
  };
</script>

<style scoped>
  .club-list {
    padding: 20rpx;
    background: linear-gradient(to bottom, #6cc4cb, white);
  }

  .club-item {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    padding: 20rpx;
    background-color: #f5f5f5;
    border-radius: 10rpx;
  }

  .club-logo {
    width: 100rpx;
    height: 100rpx;
    /* border-radius: 50%; */
    margin-right: 20rpx;
  }

  .club-details {
    flex: 1;
  }

  .club-name {
    font-size: 32rpx;
    font-weight: bold;
    margin-bottom: 10rpx;
  }

  .club-description {
    font-size: 28rpx;
    color: #666;
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