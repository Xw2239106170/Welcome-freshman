<template>
  <view class="main">
    <view class="page-image" v-for="(item, index) in pageList" :key="index" @click="goDetailSite(index)">
      <view class="image-item">
        <image :src="item.iconPath" mode="aspectFill" @click="previewImage(item.iconPath)"></image>
      </view>
      <view class="image-word" @click="goDetailImage(item)">
        <view class="image-locate">
          <view class="icon" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid #efefef;">
            <image :src="item.avatar" mode="" style="width: 80%; height: 80%; border-radius: 50%;"></image>
          </view>
          <view class="contain">
            <text class="locate-word" style="font-weight: bold; color: black;">{{item.name.substring(0, 2)}}*</text>
            <view class="icon">
              <image src="/static/location.png" mode=""></image>
            </view>
            <view class="locate-word" style="position: absolute; left: 20px; top: 17px;">
              张家界学院 {{item.current}}
            </view>
          </view>
          <!-- 点赞 -->
          <view class="commentouter">
            <view class="icon">
              <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/0359f1bf-4d34-49a8-9b8b-9a24ef0081a1.png"
                mode=""></image>
            </view>
            <text style="font-size: 10px; font-weight: bold; margin-left: 5rpx;">{{item.commentList.length}}</text>
          </view>
          <view class="commentouter" style="margin-left: 10px;">
            <view class="icon">
              <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/ad1697b8-536c-4347-b0a4-91eecabc541f.png"
                mode=""></image>
            </view>
            <text style="font-size: 10px; font-weight: bold; margin-left: 5rpx;">{{item.love || 0}}</text>
          </view>
        </view>
        <view class="locate-intro">
          {{item.text}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapState('test', ['pageList']),
      ...mapState('user', ['UserAvatar']),
      ...mapGetters('comment', ['backCommentLength']),
      // ...mapState('comment', ['listLength']),
      ...mapState('test', ['pageList']),
    },
    data() {
      return {};
    },
    methods: {
      goDetailImage(obj) {
        // console.log(obj)
        uni.navigateTo({
          url: '/subpkg/detailimage/detailimage?obj=' + encodeURIComponent(JSON.stringify(obj))
        })
      },
      goDetailSite(id) {
        // uni.navigateTo({
        //   url: '/subpkg/SchoolSite/SchoolSite?id=' + id
        // })
      },
      previewImage(value) {
        const randomInt = Math.floor(Math.random() * 100);
        uni.previewImage({
          current: randomInt,
          urls: [value]
        })
      }
    }
  }
</script>

<style lang="scss">
  .page-image {
    width: 100%;
    // height: 600rpx;
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

  .contain {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 200px;
  }

  .commentouter {
    display: flex;
    align-items: center;
    // background-color: pink;
  }
</style>