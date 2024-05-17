<template>
  <view class="notice">

    <image class="left_icon" mode="aspectFit"
      src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/d9236567-f79b-4598-bd0d-598d318cb7c3.png">

    </image>
    <view class="right_notice">
      <swiper class="notice_swiper" vertical easing-function="easeInOutCubic" autoplay interval="5000" circular="true">
        <swiper-item v-for="(item,index) in notice" :key="index" class="sw_item">
          <text class="sw_text" :style="{color:colors}">{{item}}</text>
          <image class="sw_image"
            src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/9bcfc0cb-5a2a-4ed7-ac1c-0afdded8ce20.gif"></image>
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
    computed: {
      ...mapState('message', ['notice'])
    },
    data() {
      return {};
    },

    components: {},
    props: {
      colors: {
        type: String,
        default: '#333'
      },
      noticeList: {
        type: Array
      }
    },
    methods: {
      itemClick(item) {

        this.$emit('click', item);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .notice {
    height: 80upx;
    line-height: 80upx;
    margin: 0 3%;
    margin-top: 15upx;
    padding: 0 10upx;
    box-shadow: 0upx 0upx 10upx #eee;
    border-radius: 8upx;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 5px;
  }

  .left_icon {

    width: 10%;
    height: 24px;
    float: left;
    padding-top: 18upx;
  }

  .left_icon .iconfont {
    display: inline-block;
    font-size: 44upx;
  }

  .right_notice {
    float: left;
    width: 90%;

  }

  .right_notice .notice_swiper {
    height: 80upx;
  }

  .notice_swiper .sw_item {
    height: 80upx;
  }

  .notice_swiper .sw_item .sw_text {
    font-size: 24upx;
    color: #333;
    display: inline-block;
  }

  .notice_swiper .sw_image {
    width: 80upx;
    height: 80upx;
    float: right;
    margin-top: 20upx;
  }
</style>