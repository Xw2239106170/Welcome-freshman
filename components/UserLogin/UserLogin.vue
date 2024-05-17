<template>
  <view class="page">
    <view class="user">
      <view class="user-info" @click="getUserAvatar">
        <image :src="UserAvatar || defaultPic" class="avatar"></image>
      </view>
      <text>徐多多</text>
      <view class="scan">
        <image src="/static/center2/scan.png"></image>
      </view>
    </view>
    <view class="member">
      <view class="title">
        <text>学生中心</text>
      </view>
      <view class="tab">
        <view class="item" v-for="(item, index) in menus3" :key="index" @click="goDeatilStudent(item.id)">
          <image :src="item.icon"></image>
          <text>{{item.name}}</text>
        </view>
      </view>
    </view>
    <view class="card">
      <view class="item" v-for="v in menus1" :key="v.id" @click="goDeatilStudent(v.id)">
        <image :src="v.icon"></image>
        <text>{{v.name}}</text>
      </view>
    </view>

    <view class="card">
      <view class="title">常用工具</view>
      <view class="item" v-for="v in menus2" :key="v.id" @click="goDeatilStudent(v.id)">
        <image :src="v.icon"></image>
        <text>{{v.name}}</text>
      </view>
    </view>
    <view class="person-botton" @click="outLogin">
      <view class="out-botton">
        退出登录
      </view>
    </view>
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
      ...mapState('user', ['UserAvatar']),
    },
    data() {
      return {
        menus1: [{
            id: 1,
            name: '任务',
            icon: '/static/center2/solution.png'
          },
          {
            id: 2,
            name: '宿舍',
            icon: '/static/center2/reload-time.png'
          },
          {
            id: 3,
            name: '社团',
            icon: '../../static/center2/club.png'
          },
          {
            id: 4,
            name: '足迹',
            icon: '/static/center2/Field-time.png'
          }
        ],
        menus2: [{
            id: 5,
            name: '个人资料',
            icon: '/static/center2/idcard.png'
          },
          // {
          //   id: 6,
          //   name: '我的咨询',
          //   icon: '/static/center2/comment.png'
          // },
          {
            id: 7,
            name: '我的消息',
            icon: '/static/center2/bell.png'
          },
          {
            id: 8,
            name: '迎新站点',
            icon: '../../static/center2/welcome.png'
          },
          {
            id: 9,
            name: '天气预测',
            icon: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/978af6f9-5922-48ed-83b1-c9ad84f2a425.png"
          },
          {
            id: 10,
            name: '信息反馈',
            icon: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/0d273be1-6ef9-46eb-bc4e-7b98dee5b88b.png'
          }
        ],
        menus3: [{
            id: 11,
            name: '专业预览',
            icon: '/static/center2/crown-fill.png'
          },
          {
            id: 12,
            name: '新生礼包',
            icon: '/static/center2/gift-fill.png'
          },
          {
            id: 13,
            name: '线上缴费',
            icon: '../../static/center2/tutition.png'
          },
          {
            id: 14,
            name: '人脸上传',
            icon: '../../static/center2/face.png'
          }
        ],
        defaultPic: '/static/center2/avatar.png'
      }
    },
    onLoad() {

    },
    methods: {
      ...mapMutations('user', ['clearToken']),
      goDeatilStudent(id) {
        uni.navigateTo({
          url: '/subpkg/persondetail/persondetail?id=' + id
        })
      },
      // 退出登录
      outLogin() {
        this.clearToken()
        uni.navigateTo({
          url: '/pages/login/login'
        })
      }
    }
  }
</script>

<style lang="scss">
  .page {
    background: #f0f0f0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 150rpx;
      background: #fff;
      width: 750rpx;

      .avatar {
        height: 80rpx;
        width: 80rpx;
        border-radius: 50%;
        margin-left: 25rpx;
        margin-right: 20rpx;
      }

      text {
        display: block;
        font-size: 16px;
        flex-grow: 1;
      }

      .scan {
        width: 120rpx;
        background: #D8B774;
        border-radius: 30rpx 0% 0% 30rpx;
        box-sizing: border-box;
        padding-left: 20rpx;
        height: 60rpx;
        align-items: center;
        display: flex;

        &:active {
          background: #9e8655;
        }

        image {
          height: 50rpx;
          width: 50rpx;
        }
      }
    }

    .member {
      background: #182D4E;
      height: 230rpx;
      width: 700rpx;
      border-radius: 16rpx;
      margin-top: 20rpx;
      color: #D8B774;

      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15rpx;

        text {
          font-weight: bold;

          &:nth-child(1) {
            font-size: 16px;
          }

          &:nth-child(2) {
            font-size: 12px;
          }
        }
      }

      .tab {
        display: flex;
        justify-content: space-between;
        padding: 20rpx;

        .item {
          width: 130rpx;
          height: 100rpx;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 10rpx;

          &:active {
            background: #112139;
          }

          image {
            width: 60rpx;
            height: 60rpx;
          }

          text {
            &:first-child {
              font-size: 16px;
              font-weight: bold;
              display: block;
              height: 60rpx;
              line-height: 60rpx;
            }

            &:last-child {
              margin-top: 10rpx;
              font-size: 12px;
              font-weight: 100;
            }
          }
        }
      }
    }

    .card {
      display: flex;
      flex-wrap: wrap;
      width: 700rpx;
      background: #fff;
      border-radius: 16rpx;
      padding: 20rpx;
      box-sizing: border-box;
      margin-top: 20rpx;

      .title {
        width: 700rpx;
        font-size: 16px;
        font-weight: bold;
      }

      .item {
        display: flex;
        color: #50525A;
        flex-direction: column;
        align-items: center;
        width: 165rpx;
        height: 150rpx;
        justify-content: center;
        border-radius: 8rpx;

        &:active {
          background: #f0f0f0;
        }

        image {
          width: 70rpx;
          height: 70rpx;
          margin-bottom: 10rpx;
        }

        text {
          font-size: 12px;
        }
      }
    }

    .person-botton {
      width: 500rpx;
      height: 100rpx;
      margin-top: 90px;
      border-radius: 20px;
      background-color: #fff;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      .out-button {

        border: none;
        background-color: #fff;
        color: #112139;
        border-radius: 20px;
      }
    }
  }
</style>
<!-- D8B774  -->