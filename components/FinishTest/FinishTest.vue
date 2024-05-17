<template>
  <view>
    <view class="face-box">
      <view class="face-top">
        <image :src="addImage || defaultPic" mode="aspectFill" class="face-image" @click="upload"></image>
      </view>
      <!--      <button @click="upload" class="upload-button">
        <image src="../../static/center2/photo.png" mode="" class="upload-icon"></image>打卡上传
      </button> -->
    </view>

    <!--    <view class="face-bottom">
      <view class="">

      </view>
    </view> -->

  </view>
</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'
  export default {
    name: "FinishTest",
    computed: {
      ...mapState('test', ['addImage'])
    },
    data() {
      return {
        defaultPic: '/static/center2/add.png',
        id: ''
      };
    },
    methods: {
      ...mapMutations('test', ['getAddImage']),
      async upload() {
        const res = await uni.chooseMedia({
          count: 1,
          mediaType: ['image'],
          sourceType: ['album', 'camera']
        });
        console.log(res)
        this.getAddImage({
          image: res.tempFiles[0].tempFilePath,
          id: this.id
        });
      },
    },
    onLoad(option) {
      console.log(option)
    }
  }
</script>

<style lang="scss">
  .face-box {
    background-color: #fff;
    border-radius: 10rpx;
    padding: 20rpx;
    box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
  }

  .face-top {
    height: 500rpx;
    width: 100%;
    text-align: center;
    margin-bottom: 20rpx;
  }

  .face-image {
    width: 400rpx;
    height: 400rpx;
    // border-radius: 50%;
  }

  .upload-button {
    background-color: #007aff;
    color: #fff;
    border: none;
    padding: 10rpx 20rpx;
    border-radius: 5rpx;
    cursor: pointer;
    font-size: 14px;
    height: 100rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .upload-icon {
    width: 40rpx;
    height: 40rpx;
    margin-right: 10rpx;
  }
</style>