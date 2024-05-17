<template>
  <view class="page-box">
    <!-- 头像 -->
    <view class="page-avatar">
      <image :src="UserAvatar || defaultPic" mode="" style="border-radius: 50%;"></image>
      <text class="text">Hi Welcome</text>
    </view>
    <cc-noticeBar :noticeList="noticeList" @click="itemClick"></cc-noticeBar>
    <!-- 打卡图片 -->
    <PageImage></PageImage>

    <!-- 弹出层广告 -->
    <uni-popup ref="popup" :mask-click="false">
      <view class="ad-total">
        <view class="test-ad">
          <image :src="adList[random]" mode=""></image>
        </view>
        <view class="delete-ad" @click="close">
          <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/500cd4d5-6967-420b-9bc1-3daec3f4afd9.png"
            mode=""></image>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex';

  export default {
    computed: {

      ...mapState('user', ['UserAvatar'])
    },
    onReady() {
      this.makeRandom()
      this.$refs.popup.open('centre')
    },
    data() {
      return {
        searchValue: '',
        defaultPic: '/static/defaultmobile.png', // 修正图片路径,
        adList: ['https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/e6e3fbd9-74ff-46a0-9e9b-4fd298e7178f.jpg',
          'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/ec470947-28c0-4ea3-9bb6-e4ced4643af8.jpg',
          'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/9ac362f7-e372-4e0c-bb87-980d8abcfec4.jpg',
          'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/3e38768a-431c-46a4-8784-add6b10ff147.jpg'
        ],
        random: 0
      }
    },
    methods: {
      search(res) {
        uni.showToast({
          title: '搜索：' + res.value,
          icon: 'none'
        })
      },
      close() {
        this.$refs.popup.close()
      },
      makeRandom() {
        const randomNum = Math.floor(Math.random() * 4);
        this.random = randomNum
      },
      blur(res) {},
      focus(e) {},
      cancel(res) {}
    }
  }
</script>

<style lang="scss">
  .page-box {
    // width: 100%;
    // height: 100vh;
    padding: 10px;
    background: linear-gradient(to bottom, #6cc4cb, white);
  }

  .page-avatar {
    display: flex;
    align-items: center;
    margin-top: 5rpx;
    margin-left: 10rpx;

    image {
      width: 90rpx;
      height: 90rpx;
      border-radius: 50%;
    }

    text {
      margin-left: 20px;
      font-size: 18px;
      color: #333;
      font-weight: bold;
      /* 加粗字体 */
    }
  }

  .page-search {
    margin-top: 10rpx;
    margin-bottom: 10rpx;
  }

  .ad-total {
    position: relative;

    .test-ad {
      width: 500rpx;
      height: 700rpx;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .delete-ad {
      position: absolute;
      top: 0;
      right: 0;
      width: 50rpx;
      height: 50rpx;

      image {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>