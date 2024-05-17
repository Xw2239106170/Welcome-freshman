<template>
  <view class="profile">
    <view class="user-avatar">
      <view class="avatar-image">
        <image :src="UserAvatar || defaultPic" mode="" style="border-radius: 50%;"></image>
      </view>
    </view>

    <view class="profile-info">
      <view class="user-name" style="border-top: none;">
        <view class="left">
          姓名
        </view>
        <view class="right">
          {{userList.name || ''}}
        </view>
      </view>
      <!-- 学号 -->
      <view class="user-name" style="border-top: none;">
        <view class="left">
          学号
        </view>
        <view class="right" style="margin-left: 150px;">
          {{userList.xuehao || ''}}
        </view>
      </view>
      <!-- 年龄 -->
      <view class="user-name" style="border-top: none;">
        <view class="left">
          年龄
        </view>
        <view class="right" style="margin-left: 200px;">
          {{userList.age || ''}}
        </view>
      </view>
      <view class="user-name" style="border-top: none;">
        <view class="left">
          所属学院
        </view>
        <view class="right" style="margin-left: 140px;">
          {{userList.collage || ''}}
        </view>
      </view>
      <view class="user-name" style="border-top: none;">
        <view class="left">
          专业班级
        </view>
        <view class="right" style="margin-left: 140px;">
          {{userList.banji || ''}}
        </view>
      </view>
      <!-- 积分 -->
      <view class="user-name" style="border-top: none;">
        <view class="left">
          积分
        </view>
        <view class="right" style="margin-left: 180px;">
          {{userList.score || ''}}
        </view>
      </view>
      <!-- 宿舍 -->
      <view class="user-name" style="border-bottom: none; border-top: none;">
        <view class="left">
          宿舍信息
        </view>
        <view class="right" style="margin-left: 150px;">
          菊园b座613
        </view>
      </view>

    </view>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    computed: {
      ...mapState('user', ['UserAvatar', 'userDorm', 'userInfo']),
      // ...mapState('test', ['userDorm'])
    },
    data() {
      return {
        defaultPic: '/static/defaultmobile.png', // 修正图片路径,
        userList: []
      };
    },
    methods: {
      async getInfo() {
        const res = await uni.$http.get('/getstu', {
          xuehao: '2212040252'
        })
        this.userList = res.data.data
        console.log(this.userList)
        console.log(res)
      }
    },
    onReady() {
      this.getInfo()
    }
  };
</script>

<style lang="scss">
  .profile {
    display: flex;
    flex-direction: column;
    background-color: #efefef;
    padding: 10rpx;
    height: 100vh;
    background: linear-gradient(to bottom, #6cc4cb, white);

    .user-avatar {
      border-radius: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
      height: 300rpx;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      .avatar-image {
        width: 200rpx;
        height: 200rpx;
        // background-color: pink;

        image {
          width: 100%;
          height: 100%;
        }
      }
    }

    // 个人详情信息板块
    .profile-info {
      border-radius: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin-top: 10px;
      width: 100%;
      // height: 700rpx;
      background-color: pink;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;

      .user-name {
        border-top: 2px solid #efefef;
        border-bottom: 2px solid #efefef;
        margin-top: 10rpx;
        height: 100rpx;
        width: 95%;
        // background-color: skyblue;
        display: flex;
        color: #D8B774;

        .left {
          line-height: 100rpx;
          width: 50%;
          height: 100%;
          margin-left: 10rpx;
        }

        .right {
          line-height: 100rpx;
          width: 50%;
          height: 100%;
          margin-left: 180px;
        }
      }
    }
  }
</style>