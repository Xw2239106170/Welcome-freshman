<template>
  <view>
    <view class="face-box">
      <view class="face-top">
        <image :src="newImage || defaultPic" mode="aspectFill" class="face-image" @click="upload">
        </image>
      </view>
      <view class="desc-image" style="border-top: 2px solid black;">
        <textarea name="" id="" cols="30" rows="10" v-model="content" placeholder="这一刻的想法..." class="pioner"></textarea>
      </view>
      <!-- 发布 -->
      <button @click="postTest(['fade', 'slide-top'])" class="upload-button">
        <image src="../../static/center2/photo.png" mode="" class="upload-icon"></image>发布精彩时刻
      </button>
    </view>
    <view class="example">
      <uni-transition ref="ani" custom-class="transition" mode-class="fade" :styles="styles" :show="show"
        class="middle">
        <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/9bcfc0cb-5a2a-4ed7-ac1c-0afdded8ce20.gif"
          mode=""></image>
      </uni-transition>
    </view>
  </view>
</template>

<script>
  import {
    mapMutations,
    mapState,
    mapGetters
  } from 'vuex'
  const img = '../../static/location.png';
  export default {
    name: "FinishTest",
    computed: {
      ...mapState('test', ['newImage']),
      // ...mapGetters('test', ['backImage'])
      ...mapState('user', ['UserAvatar'])
    },
    data() {
      return {
        defaultPic: '/static/center2/add.png',
        id: '',
        content: '',
        styles: {},
        show: false
      };
    },
    methods: {
      ...mapMutations('test', ['getAddImage', 'backImage', 'disImage', 'postImage', 'finishTest', 'addMarkers']),
      ...mapMutations('user', ['addLottery']),
      ...mapMutations('button', ['addexperience']),
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
        // this.backImage(this.id)
      },
      // 发布打卡
      async postTest(type) {
        this.show = !this.show
        this.modeClass = type
        if (this.content === '') return uni.$showMsg('发表你的感想哦~')
        if (this.newImage === '') return uni.$showMsg('留下此刻精彩瞬间~')
        // 获取时间
        // 获取当前时间
        const currentDate = new Date();

        // 获取月份（注意月份从0开始计数，所以要加1）
        const month = currentDate.getMonth() + 1;

        // 获取日期
        const date = currentDate.getDate();

        // 获取小时和分钟
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();

        // 将月份、日期、小时和分钟格式化为字符串
        const formattedDateTime = `${month}月${date}日 ${hours}:${minutes}`;
        this.postImage({
          image: this.newImage,
          text: this.content,
          time: formattedDateTime,
          avatar: this.UserAvatar,
          name: '徐多多',
          commentList: [],
          love: 0
        })
        this.finishTest(this.id)
        uni.showLoading({
          title: '审核需一会~',
          mask: true
        })
        const randomNumber = Math.random() * 0.00000000000234;
        setTimeout(() => {
          uni.hideLoading()
          // 地标
          this.addMarkers(randomNumber)
          // 抽奖机会
          this.addLottery()
          // 增加经验
          this.addexperience()
          uni.switchTab({
            url: '/pages/test/test'
          })
          this.content = ''
          const res = uni.$http.get('/done', {
            id: this.id
          })
          // console.log(res)
          uni.$http.get('/score', {
            xuehao: '2212040252'
          })
          // console.log(res)

          this.addMarkers(0.0000012)
          uni.$showMsg('审核通过！！')
        }, 5000);
      },
    },
    onLoad(option) {
      this.disImage()
      this.id = option.Testid
    },
    onReady() {
      this.$refs.ani.step({
        duration: 1000,
        timingFunction: 'linear',
        delay: 500,
      })
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

  .pioner {
    margin-top: 10rpx;
    caret-color: green;
  }

  .example {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
    align-items: center;
    height: 150px;
  }

  .middle {
    justifyContent: 'center';
    alignItems: 'center';
    width: '100px';
    height: '100px';
    borderRadius: '5px';
    textAlign: 'center';
    backgroundColor: '#4cd964';
    boxShadow: '0 0 5px 1px rgba(0,0,0,0.2)';
  }
</style>