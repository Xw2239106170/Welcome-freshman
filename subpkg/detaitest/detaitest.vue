<!-- pages/publish/publish.vue -->
<template>
  <view class="publish-container">
    <view class="publish-content">
      <!-- 文本输入区 -->
      <textarea class="content-textarea" v-model="content" placeholder="分享你此刻的想法..." maxlength="500"
        :focus="textareaFocus" @focus="textareaFocus = true" @blur="textareaFocus = false"></textarea>

      <!-- 图片上传区域 -->
      <view class="image-upload-area">
        <view v-for="(image, index) in images" :key="index" class="image-preview-item">
          <image :src="image" mode="aspectCover" />
          <view class="delete-image-btn" @tap="deleteImage(index)">
            ×
          </view>
        </view>

        <!-- 添加图片按钮 -->
        <view v-if="images.length < 9" class="add-image-btn" @tap="chooseImage">
          <text class="iconfont icon-add">+</text>
        </view>
      </view>

      <!-- 标签选择区域 -->
      <view class="tags-container">
        <view class="tags-label">选择标签：</view>
        <scroll-view scroll-x class="tags-scroll">
          <view class="tags-wrapper">
            <view v-for="tag in availableTags" :key="tag" class="tag-item"
              :class="{ 'tag-selected': selectedTags.includes(tag) }" @tap="toggleTag(tag)">
              {{ tag }}
            </view>
          </view>
        </scroll-view>
      </view>

      <!-- 发布操作区 -->
      <view class="publish-actions">
        <view class="action-left" @click="chooseLocation">
          <text class="iconfont icon-location" v-if="!location">📍</text>
          <text v-else>{{location}}</text>
        </view>
        <view class="action-right">
          <text class="char-count">{{ content.length }}/500</text>
          <button class="publish-btn" @click="postTest(['fade', 'slide-top'])" :disabled="!canPublish">
            发布
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    card,
    ranks
  } from '../../utils/mock'
  import {
    mapMutations,
    mapState,
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        id: '',
        content: '',
        images: [],
        location: '',
        textareaFocus: false,
        availableTags: [
          '日常', '旅行', '美食',
          '技术', '音乐', '摄影',
          '电影', '运动', '艺术', '游戏'
        ],
        selectedTags: []
      }
    },
    computed: {
      ...mapState('test', ['newImage']),
      // ...mapGetters('test', ['backImage'])
      ...mapState('user', ['UserAvatar']),
      canPublish() {
        return this.content.trim().length > 0
      }
    },
    methods: {
      ...mapMutations('test', ['getAddImage', 'backImage', 'disImage', 'postImage', 'finishTest', 'addMarkers']),
      ...mapMutations('user', ['addLottery']),
      ...mapMutations('button', ['addexperience']),
      chooseImage() {
        uni.chooseImage({
          count: 9 - this.images.length,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: (res) => {
            this.images = [...this.images, ...res.tempFilePaths],
              console.log(res.tempFilePaths)
            this.getAddImage({
              image: res.tempFilePaths[0],
              id: this.id
            });
          }
        })
      },
      deleteImage(index) {
        this.images.splice(index, 1)
      },
      toggleTag(tag) {
        const index = this.selectedTags.indexOf(tag)
        if (index > -1) {
          this.selectedTags.splice(index, 1)
        } else {
          this.selectedTags.push(tag)
        }
      },
      chooseLocation() {
        uni.chooseLocation({
          success: (res) => {
            this.location = res.name
            console.log(this.location)
          }
        })
      },
      // 发布打卡
      async postTest(type) {
        // card[3].collected = true
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
      console.log(this.id)
    },
  }
</script>

<style lang="scss" scoped>
  .publish-container {
    background-color: #F5F5F5;
    min-height: 100vh;
    padding: 20rpx;
  }

  .publish-content {
    background-color: #FFFFFF;
    border-radius: 20rpx;
    padding: 30rpx;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.08);
  }

  .content-textarea {
    width: 100%;
    min-height: 250rpx;
    background-color: #F9F9F9;
    border-radius: 16rpx;
    padding: 20rpx 0;
    margin-bottom: 20rpx;
    font-size: 28rpx;
  }

  .image-upload-area {
    display: flex;
    flex-wrap: wrap;
    gap: 20rpx;
    margin-bottom: 30rpx;

    .image-preview-item {
      position: relative;
      width: 180rpx;
      height: 180rpx;
      border-radius: 16rpx;
      overflow: hidden;

      image {
        width: 100%;
        height: 100%;
      }

      .delete-image-btn {
        position: absolute;
        top: 10rpx;
        right: 10rpx;
        background-color: rgba(255, 0, 0, 0.7);
        color: white;
        width: 40rpx;
        height: 40rpx;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .add-image-btn {
      width: 180rpx;
      height: 180rpx;
      border: 2rpx dashed #E0E0E0;
      border-radius: 16rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      font-size: 60rpx;
    }
  }

  .tags-container {
    margin-bottom: 30rpx;

    .tags-scroll {
      white-space: nowrap;
      width: 100%;
    }

    .tags-wrapper {
      display: inline-flex;
      gap: 20rpx;
    }

    .tag-item {
      display: inline-block;
      padding: 10rpx 20rpx;
      background-color: #F0F0F0;
      border-radius: 30rpx;
      font-size: 26rpx;
      color: #666;
      transition: all 0.3s;
    }

    .tag-selected {
      background-color: #4B9DFE;
      color: white;
    }
  }

  .publish-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .action-left {
      display: flex;
      gap: 30rpx;
      color: #999;
    }

    .action-right {
      display: flex;
      align-items: center;
      gap: 20rpx;

      .char-count {
        color: #999;
        font-size: 24rpx;
      }

      .publish-btn {
        background-color: #4B9DFE;
        color: white;
        padding: 10rpx 30rpx;
        border-radius: 30rpx;
        font-size: 28rpx;
      }
    }
  }
</style>