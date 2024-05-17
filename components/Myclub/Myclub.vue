<template>
  <view class="club-list">
    <view v-for="(club, index) in clubs" :key="index" class="club-item" @click="goDetailClub(club.id)">
      <image class="club-logo" :src="club.logoUrl"></image>
      <view class="club-details">
        <view class="club-name">{{ club.name }}</view>
        <view class="club-description">{{ club.description }}</view>
      </view>
    </view>
  </view>
  <!-- <image src="../../static/club/find-ring.png" mode=""></image> -->
</template>

<script>
  export default {
    data() {
      return {
        clubs: [{
            id: 0,
            name: '篮球社',
            logoUrl: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/854f2fa8-d29c-4ea6-83d0-840748759ad0.png',
            description: '欢迎加入我们的篮球社，一起打球、交流！',
          },
          {
            id: 1,
            name: '音乐社',
            logoUrl: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/7e3cf480-a463-4579-9240-d549c0b8eb86.png',
            description: '音乐社欢迎喜爱音乐的同学加入，一起分享音乐的快乐！',
          },
          {
            id: 2,
            name: '羽毛球社',
            logoUrl: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/%E7%BE%BD%E6%AF%9B%E7%90%83%E5%9B%BE%E6%A0%87',
            description: '羽毛球社欢迎喜爱羽毛球的同学加入，一起分享羽毛球的快乐！',
          },
          {
            id: 3,
            name: '街舞社',
            logoUrl: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/a6acc715-e18a-4647-88f9-c55e4c749537.png',
            description: '再街舞社遇见有趣的灵魂，喜欢街舞，就来参加我们的社团吧!',
          },
          {
            id: 4,
            name: '计算机协会',
            logoUrl: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/4d99236e-d35a-4b31-a5fa-f5620f85b753.png',
            description: '遇见飞天，相遇计算机，有梦你就来，一起完成男孩子的梦想！',
          },
          {
            id: 5,
            name: '书法社',
            logoUrl: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/df3a5372-33c4-48fa-b470-ee3668ccda4e.png',
            description: '华夏五千年，文字永流传，一笔一划皆是情怀，加入书法社感受不同的中华文化！',
          },
          {
            id: 6,
            name: '乒乓社',
            logoUrl: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/7255a142-e7d5-4e29-867e-b460157b9998.png',
            description: '小球转大球，如果你也热爱乒乓球，就来加入我们，我们再乒乓球社等你！',
          },

        ],
      };
    },
    methods: {
      goDetailClub(id) {
        uni.navigateTo({
          url: '/subpkg/detailclub/detailclub?clubId=' + id
        })
      }
    }
  };
</script>

<style scoped>
  .club-list {
    padding: 20rpx;
  }

  .club-item {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    padding: 20rpx;
    background-color: #f5f5f5;
    border-radius: 10rpx;
  }

  .club-logo {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    margin-right: 20rpx;
  }

  .club-details {
    flex: 1;
  }

  .club-name {
    font-size: 32rpx;
    font-weight: bold;
    margin-bottom: 10rpx;
  }

  .club-description {
    font-size: 28rpx;
    color: #666;

  }
</style>