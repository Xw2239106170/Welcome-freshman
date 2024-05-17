<template>
  <view class="list-box">
    <view class="list-title">
      <view class="ranking">
        <image src='https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/2a2cefba-1642-4924-96ff-0dcd1c7ae125.png'
          class="ranking-image">
        </image>
      </view>
      <h1>打卡榜单</h1>
    </view>
    <!-- 榜单展示 -->
    <view class="scroll-view-container">
      <scroll-view class="left-scroll-view" scroll-y='true'>
        <view class="left-scroll-view-item" v-for="(item, index) in list" :key="index"
          :class="{ 'highlight': index < 3 }">
          <!-- 奖牌信息 -->
          <view v-if="index < 3" class="ranking">
            <image :src="`/static/rank/rank-${index + 1}.png`" mode="aspectFill" class="ranking-image">
            </image>
          </view>
          <!-- 头像信息 -->
          <view class="scroll-avatar">
            <image :src="item.image" mode="aspectFill" class="avatar-size"></image>
          </view>
          <!-- 具体信息 -->
          <view class="scroll-info" style="color: black;">
            <h1>{{ item.name }}</h1>
          </view>
          <view class="scroll-info" style="color: black; margin-left: 100px;">
            <h1>{{ item.score }}</h1>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: "TestList",
    data() {
      return {
        list: []
      };
    },
    methods: {
      async getList() {
        const res = await uni.$http.post('/toplist')
        this.list = res.data.data
        console.log(res)
      }
    },
    onReady() {
      this.getList()
    }
  }
</script>

<style lang="scss">
  .list-box {
    .list-title {
      width: 130px;
      padding: 10rpx;
      font-size: 20px;
      color: #333;
      background-color: #fff;
      margin-bottom: 20rpx;
      margin-left: 10rpx;
      // background-color: #9e8655;
      color: #9e8655;
      font-family: 'Chewy', cursive;
      border-radius: 20px;
      display: flex;
      align-items: center;
      background-color: #6cc4cb;
      background-color: #e0f3f5;
    }

    .scroll-view-container {
      display: flex;
      background-color: #f7f7f7;
      background-color: #6cc4cb;
      background-color: #e0f3f5;

      .left-scroll-view {
        width: 100%;
        height: 600rpx;
        padding: 10rpx;

        .left-scroll-view-item {
          border-radius: 20px;
          margin-bottom: 10rpx;
          background-color: #fff;
          display: flex;
          align-items: center;
          border: 2px solid #ccc;
          padding: 10px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          background-color: #e0f3f5;

          &.highlight {
            animation: glow 2s linear infinite;
            border-color: #7FFFD4;
            /* 高亮项边框颜色 */
            background-color: #ffffcc;
            /* 高亮项背景色 */

            &:before {
              content: "";
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              // background: linear-gradient(45deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
              animation: glow 2s linear infinite;
            }
          }

          .scroll-avatar {
            width: 100rpx;
            height: 100rpx;
            margin-right: 10rpx;
            border-radius: 50%;
            overflow: hidden;

            image {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }

          .scroll-info {
            flex: 1;
            font-size: 16px;
            // color: #333;
            color: black;
          }
        }
      }
    }
  }

  @keyframes glow {

    0%,
    100% {
      border-color: transparent;
      /* 透明边框 */
    }

    50% {
      border-color: #7FFFD4;
      /* 流光颜色 */
    }
  }

  .ranking {
    width: 80rpx;
    height: 80rpx;
    margin-right: 10rpx;
    border-radius: 50%;
    overflow: hidden;

    .ranking-image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  @font-face {
    font-family: 'Chewy';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/chewy/v14/uK_94ruUb-k-wk5xIDMfO-ed.ttf') format('truetype');
  }
</style>