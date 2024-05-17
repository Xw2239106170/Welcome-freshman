<template>
  <view class="swiper-box">
    <!-- 轮播图 -->
    <view class="box-item">
      <swiper :indicator-dots="false" :autoplay="true" :interval="2000" :duration="1000" circular="true">
        <swiper-item v-for="(item, index) in swiperList" :key="index">
          <view class="swiper-item">
            <image :src="item.iconPath" mode=""></image>
          </view>
          <view class="introduce">
            {{item.text}}
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: "SchoolSwiper",
    computed: {},
    data() {
      return {
        swiperList: [{
          iconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/3842caa6-abb4-462c-8bdf-220a44350499.jpg',
          text: '当樱花盛开时，仿佛春天的精灵在张家界学院的校园里起舞。'
        }, {
          iconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/394804e8-0834-4b99-8797-b272e0f91f75.jpg',
          text: '校园内散落着各式各样的建筑，有现代化的教学楼、图书馆、实验室，也有古典的楼宇和庭院，每一处都散发着浓厚的文化气息。'
        }, {
          iconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/01d86411-e726-4358-a3a7-d847da052daf.jpg',
          text: '张家界学院的小路宁静而美丽。阳光透过树叶的缝隙洒在路面上，投下斑驳的光影，树荫下凉爽宜人。'
        }, {
          iconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/f6024151-0622-4cf2-bdbc-f0b0309c7756.jpg',
          text: '夜幕降临，张家界学院的校园变得格外迷人。灯火辉煌，星星点点的灯光点缀在树梢上，照亮了整个校园'
        }]
      };
    }
  }
</script>

<style lang="scss">
  .swiper-box {
    margin-top: 20px;
    width: 100%;
    position: relative;
    height: 500rpx;
    // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #6cc4cb;

    .box-item {
      margin: 0 auto;
      width: 100%;
      border-radius: 20px;

      height: 460rpx;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      background-color: #6cc4cb;

      swiper {

        height: 460rpx;
      }

      .swiper-item {
        border-radius: 20px;

        height: 380rpx;
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        image {
          height: 100%;
          width: 100%;
        }
      }

      .introduce {
        height: 100rpx;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-family: 'Chewy', cursive;
        background-color: #e0f3f5;
      }
    }
  }

  @font-face {
    font-family: 'Chewy';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/chewy/v14/uK_94ruUb-k-wk5xIDMfO-ed.ttf') format('truetype');
  }
</style>