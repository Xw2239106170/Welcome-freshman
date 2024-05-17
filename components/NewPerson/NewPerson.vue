<template>
  <view class="page">
    <!-- 个人信息页面 -->
    <view class="person-info">
      <view class="user-ava">
        <view class="avatar">
          <image :src="UserAvatar" mode=""></image>
        </view>
        <view class="avatar-rank-container">
          <view class="avatar-rank">
            <!-- 等级 -->
            Lv.{{rank}}
            <view class="experience-bar">
              <view class="experience-progress" :style="{ width: experience + '%' }"></view>
            </view>
          </view>
        </view>
      </view>
      <!-- 宝藏 -->
      <view class="activity" @click="changeShow">
        <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/bca7afdd-50f1-4bed-8f84-b98bc344b50d.png" mode=""
          class="shaking-icon">
        </image>
      </view>
      <view class="info-left">
        <view class="user-cloudy" v-for="(item, index) in toolList" :key="index" @click="goDeatilStudent(item.id)">
          <image :src="item.img" mode=""></image>
        </view>
      </view>
    </view>
    <view class="person-bottom">
      <!-- 图片 -->
      <view class="page-image">
        <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/e22902eb-7252-45c9-9645-37964b8acd4b.png" mode=""
          class="img">
        </image>
      </view>
      <view class="stu-centre">
        <view style="flex: 1;">

        </view>
        <view class="centre-item" v-for="(item,index) in centreList" :key="index" @click="goDeatilStudent(item.id)">
          <image :src="item.img" mode=""></image>
        </view>
      </view>
    </view>
    <!-- 隐藏式按钮 -->
    <HidenButton></HidenButton>
    <!-- <NoticeInfo></NoticeInfo> -->

    <uni-popup ref="popup" type="dialog">
      <TurnTable class="make-centre" v-if="isShow"></TurnTable>
    </uni-popup>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    name: "NewPerson",
    computed: {
      ...mapState('user', ['UserAvatar']),
      ...mapState('button', ['isShow', 'experience', 'rank'])
    },
    data() {
      return {
        // experience: 20,
        // isShow: false,
        toolList: [{
          id: 9,
          img: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/978af6f9-5922-48ed-83b1-c9ad84f2a425.png"
        }, {
          id: 7,
          img: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/2f02e8f0-e6c8-425a-97ed-e9233b0bd3dc.png'
        }, {
          id: 5,
          img: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/c23d8d18-89ee-401c-ab3a-38745e323ecb.png'
        }, {
          id: 10,
          img: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/0d273be1-6ef9-46eb-bc4e-7b98dee5b88b.png'
        }],
        centreList: [{
          id: 11,
          img: '/static/center2/crown-fill.png'
        }, {
          id: 12,
          img: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/4d5b66cc-7989-4950-ba16-8d9fabad53ec.png'
        }, {
          id: 13,
          img: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/ee8c68b1-0a4c-4825-8d74-a1d617bd0901.png'
        }, {
          id: 14,
          img: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/d66d41b3-ae40-4461-9774-d822e6250d06.png'
        }, {
          id: 2,
          img: '/static/center2/reload-time.png'
        }]

      };
    },
    methods: {
      ...mapMutations('button', ['changeShow']),
      ...mapActions('test', ['getTasksList']),
      goDeatilStudent(id) {
        uni.navigateTo({
          url: '/subpkg/persondetail/persondetail?id=' + id
        })
      },
      changeShow() {
        this.$refs.popup.open()
      }
    },
    // onReady() {
    //   this.getTasksList()
    // }
  }
</script>

<style lang="scss">
  .page {
    background-color: #f4f4f4;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10rpx;

    .person-bottom {
      display: flex;
      justify-content: space-around;

      .page-image {
        margin-top: 400rpx;
        height: 700rpx;
        width: 650rpx;

        image {
          width: 100%;
          height: 100%;
        }
      }

      // 右侧
      // 右边测页面
      .stu-centre {
        position: absolute;
        bottom: 0;
        right: 20px;

        width: 50px;
        height: 300px;
        // background-color: skyblue;
        // margin-left: 10rpx;
        display: flex;
        // justify-content: space-between;
        /* 将内容推到两端 */
        // align-items: center;
        // flex-direction: column;
        flex-wrap: wrap;

        .centre-item {
          width: 100%;
          height: 40px;
          background-color: #fff;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

          image {
            width: 70%;
            height: 70%;
          }
        }
      }
    }

    // 个人头像
    .person-info {
      width: 100%;
      height: 100rpx;
      // background-color: skyblue;
      position: fixed;
      top: 10rpx;
      display: flex;

      .user-ava {
        width: 50%;
        height: 100%;
        display: flex;
        // background-color: #fff;


        .avatar {
          width: 50px;
          height: 100%;
          margin-left: 10px;



          image {
            border-radius: 50%;
            width: 100%;
            height: 100%;
          }
        }
      }

      .info-left {
        padding-right: 10px;
        width: 50%;
        height: 100%;
        display: flex;

        // 天气
        .user-cloudy {
          // line-height: 90rpx;
          width: 80px;
          height: 85%;
          background-color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

          image {
            width: 60%;
            height: 60%;
          }
        }
      }
    }
  }

  .avatar-rank-container {
    display: flex;
    align-items: center;
    margin-left: 10rpx;
    // border: 1px solid #fff;
    // border-radius: 20px;
    /* 垂直居中对齐 */
  }

  .avatar-rank {
    display: flex;
    align-items: center;
    /* 垂直居中对齐 */
  }

  .rank-img {
    width: 30px;
    height: 30px;
  }


  .experience-bar {
    width: 75px;
    height: 10px;
    background-color: #f0f0f0;
    background-color: #fff;
    border-radius: 5px;
    margin-left: 10px;
    /* 适当调整与图标的间距 */
    overflow: hidden;
    /* 隐藏超出部分 */
  }

  .experience-progress {
    height: 100%;
    background-color: #66cdaa;
    border-radius: 5px;
  }

  .activity {
    width: 100rpx;
    height: 100rpx;
    position: absolute;
    top: 70px;
    left: 10px;

    .shaking-icon {
      width: 100%;
      height: 100%;
      animation: shake 0.5s infinite;
      /* 应用名为 shake 的动画，无限循环 */
    }

    @keyframes shake {
      0% {
        transform: rotate(-10deg);
      }

      /* 初始状态，向左旋转 10 度 */
      50% {
        transform: rotate(10deg);
      }

      /* 中间状态，向右旋转 10 度 */
      100% {
        transform: rotate(-10deg);
      }

      /* 最终状态，再次向左旋转 10 度 */
    }
  }

  .make-centre {
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    color: #fff;
    border-radius: 4px;
  }
</style>