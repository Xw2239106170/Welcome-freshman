<template>
  <view class="club-details">
    <!-- 社团简介 -->
    <view class="club-introduction">
      <view class="title">社团简介</view>
      <view class="content">
        篮球社是一个由热爱篮球的学生组成的社团，致力于推广篮球运动、促进校园篮球文化的发展。社团成立于2004年，至今已有多年历史，是校园中备受欢迎的社团之一。</view>
    </view>

    <!-- 社团成员介绍 -->
    <swiper class="member-slider" :autoplay="true" :interval="3000" circular="true"
      style="height: 180px; margin-bottom: 20px; background-color: #fff;">
      <swiper-item v-for="(member, index) in members" :key="index"
        style="display: flex; justify-content: center; align-items: center;">
        <view class="member">
          <image :src="member.avatar" class="avatar"></image>
          <view class="name">{{ member.name }}</view>
          <view class="position">{{ member.position }}</view>
        </view>
      </swiper-item>
    </swiper>

    <!-- 社团活动照片 -->
    <view class="activity-photos">
      <view class="title">社团活动照片</view>
      <view class="photos">
        <image v-for="(photo, index) in photos" :key="index" :src="photo" class="photo"></image>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        members: [{
            name: '小猫',
            position: '主席',
            avatar: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/0277b7f6-dfd9-4a2f-86ad-89215d939a6f.png'
          },
          {
            name: '小狗',
            position: '副主席',
            avatar: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/20096a6b-8cd0-4eeb-8292-6f53c63a0e60.png'
          },
          {
            name: '小猪',
            position: '秘书长',
            avatar: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/f77992d6-0ab0-4770-8ab4-24738d3311e1.png'
          }
        ],
        photos: [
          'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/99a12336-d6d7-4382-8c6f-916b5e7148cd.jpg',
          'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/eae216ec-bccb-40ed-8be9-ba41801676c2.jpg',
          'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/58ad7d3e-dba0-47a6-8e5f-96560f23f609.jpg'
        ]
      };
    },
    methods: {},
    onLoad(option) {
      console.log(option)
    }
  };
</script>

<style lang="scss">
  .club-details {
    padding: 20rpx;
    background-color: #efefef;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }

  .club-introduction {
    padding: 10rpx;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .content {
    color: #D8B774;
    font-size: 16px;
    line-height: 1.5;
  }

  .member-introduction {
    // display: flex;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .member-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .member {
    // width: 150px;
    width: 100%;
    margin: 20px;
    text-align: center;
    transition: transform 0.3s ease;
    display: flex;
    // background-color: pink;

  }

  .member:hover {
    transform: translateY(-10px);
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .name {
    margin-top: 10px;
    font-weight: bold;
    font-size: 18px;
    color: #333;
  }

  .position {
    color: #666;
    font-size: 14px;
  }

  .photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .photo {
    width: 400px;
    height: 200px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .photo:hover {
    transform: scale(1.05);
    transform: translateY(-30px);
  }


  .member-slider {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }

  .member-slider .swiper-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .member {
    text-align: center;
    margin: 0 10px;
  }

  .member .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .member .name {
    margin-top: 10px;
    font-weight: bold;
    font-size: 18px;
    color: #333;
  }

  .member .position {
    color: #666;
    font-size: 14px;
  }
</style>