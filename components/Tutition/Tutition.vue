<template>
  <view class="page-box">
    <!-- 学生个人信息 -->
    <view class="info">
      <view class="student-info">
        <text>学号：2212040252</text>
        <text>班级：软件工程二班</text>
        <text>姓名：徐多多</text>
        <text>身份证：1234567890</text>
      </view>
      <view class="avatar">
        <image :src="UserAvatar || defaultPic" mode=""></image>
      </view>
    </view>

    <!-- Tab 导航 -->
    <view class="tab-nav">
      <text :class="{ active: currentTab === 'unpaid' }" @tap="currentTab = 'unpaid'">未缴费项目</text>
      <text :class="{ active: currentTab === 'paid' }" @tap="currentTab = 'paid'">已缴费项目</text>
    </view>
    <!-- Tab 内容 -->
    <view v-show="currentTab === 'unpaid'" class="tab-content">
      <Payment v-for="(item, index) in todoNeed" :key="index" :item='item' v-if='todoNeed.length > 0'></Payment>
      <view class="empty-cart" v-else>
        <image src="/static/money/empty.png" class="empty-img"></image>
        <text class="tip-text">空空如也~</text>
      </view>
    </view>

    <view v-show="currentTab === 'paid'" class="tab-content">
      <Payment v-for="(item, index) in backStated" :key="index" :item='item' v-if="backStated.length > 0"></Payment>
      <view class="empty-cart" v-else>
        <image src="/static/money/empty.png" class="empty-img"></image>
        <text class="tip-text">空空如也~</text>
      </view>
    </view>

    <view class="pay-sum">
      <view class="sum-left" v-if='!doneNeed'>
        <radio :checked="allRadio" @click="changeAllRadio"></radio>
        <text>全选</text>
      </view>
      <view class="sum-right">
        <text style="font-weight: bold; font-size: 20px; margin-top: 30rpx;">需缴：{{sumTuition | fixed}} </text>
        <button type="primary" @click="submitMoney" :disabled="doneNeed">缴费</button>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex';
  export default {
    name: "Tutition",
    computed: {
      ...mapState('user', ['UserAvatar', 'payNeed']),
      ...mapGetters('user', ['allRadio', 'sumTuition', 'backStated', 'todoNeed', 'doneNeed'])
    },
    data() {
      return {
        currentTab: 'unpaid', // 默认选中未缴费项目,
        defaultPic: '/static/defaultmobile.png' // 修正图片路径
      };
    },
    onLoad() {},
    methods: {
      ...mapMutations('user', ['changeRadio', 'changeMoneyState']),
      changeAllRadio() {
        this.changeRadio()
      },
      submitMoney() {
        if (!this.allRadio) return uni.$showMsg('还有未选择的缴费项目')

        uni.showModal({
          title: "提示",
          content: '是否办理生源地贷款？',
          showCancel: true, // 是否显示取消按钮
          confirmText: '办理了',
          cancelText: "没有办理",
          success: (res) => {
            this.changeMoneyState()
            uni.$showMsg('缴费成功！')
          }
        })
      }
    },
    filters: {
      fixed(value) {
        return value.toFixed(2)
      }
    }
  }
</script>

<style lang="scss">
  .page-box {
    background-color: #efefef;
    padding: 20rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to bottom, #6cc4cb, white);

    .pay-sum {
      display: flex;
      margin-top: 20rpx;
      width: 100%;
      height: 120rpx;
      background-color: #efefef;
      border-radius: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: fixed;
      bottom: 20rpx;
      left: 0;

      .sum-left {
        height: 100%;
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .sum-right {
        height: 100%;
        width: 70%;
        display: flex;
        align-content: center;
        justify-content: space-around;

        button {
          margin-top: 10rpx;
          height: 100rpx;
          width: 200rpx;
          line-height: 100rpx;
        }
      }
    }
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
  }

  .student-info {
    width: 50%;
    height: 200rpx;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .avatar image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .tab-nav {
    display: flex;
    margin-bottom: 10rpx;

    text {
      padding: 10rpx 20rpx;
      margin-right: 10rpx;
      background-color: #fff;
      border-radius: 10px;
      color: #333;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .active {
      background-color: #333;
      color: #fff;
    }

    text:hover {
      background-color: #ccc;
    }
  }

  .tab-content {
    padding: 20rpx;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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