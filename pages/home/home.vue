<template>
  <view class="home-box">
    <!-- 顶部个人信息 -->
    <view class="person-info">
      <!-- 个人头像 -->
      <view class="person-avatar">
        <view class="item-avatar">
          <image :src="UserAvatar || defaultPic" mode="" class="avatar" style="border-radius: 50%;"></image>
        </view>
      </view>
      <!-- 个人宠物 -->
      <view class="person-class">
        <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/424baf59-908c-441b-b17f-ce1925d3dce4.gif"
          mode=""></image>
      </view>

    </view>
    <!-- 隐藏式按钮 -->
    <!-- <HidenButton></HidenButton> -->

    <!-- 轮播图 -->
    <SchoolSwiper></SchoolSwiper>
    <!--    <carousel :img-list="imgList" url-key="url" @selected="selectedBanner" /> -->

    <!-- 排行榜信息 -->
    <TestList></TestList>
  </view>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    computed: {
      ...mapState('user', ['UserAvatar'])
    },
    data() {
      return {

        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
      };
    },
    methods: {
      change() {
        // console.log('点击')
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      // 获取头像
      chooseAvatar(e) {
        // console.log("你好 ")
      }
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  .home-box {
    background: linear-gradient(to bottom, #6cc4cb, white);
    width: 100%;
    height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    .person-info {
      width: 100%;
      height: 180rpx;
      display: flex;
      // border-bottom: 2rpx solid #efefef;
      margin-bottom: 20px;
      background-color: #6cc4cb;

      // 头像
      .person-avatar {
        height: 200rpx;
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;

        // 流光效果
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

        .item-avatar {
          height: 120rpx;
          width: 120rpx;
          border-radius: 50%;
          border: 5rpx solid #efef;
          // background-color: skyblue;
          animation: glow 2s linear infinite;

          .avatar {
            width: 100%;
            height: 100%;
          }
        }
      }

      // 信息班级页面
      .person-class {
        width: 75%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        font-size: 10px;
        justify-content: space-around;
        align-items: center;

        image {
          width: 30%;
          height: 100%;
        }

        .item-name {
          height: 58rpx;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 8rpx;
          // border: 2px solid #efefef;
          border-radius: 20rpx;
          background-color: rgba(0, 0, 0, 0.2);

          // 字体样式
          .name-word {
            margin-bottom: 3rpx;
            color: #ffff;
          }

          // 图片样式
          .name-image {
            width: 60rpx;
            height: 100%;

            .word-image {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }

  .hidden-info {
    flex: 1;
    font-size: 16px;
    color: #333;
    white-space: nowrap; // 不换行
    overflow: hidden; // 隐藏超出部分
    text-overflow: ellipsis; // 显示省略号

    &:hover {
      white-space: normal; // 恢复换行
      overflow: visible; // 显示所有内容
      text-overflow: clip; // 不显示省略号
    }
  }
</style>