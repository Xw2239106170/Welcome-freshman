<template>
  <view class="container">
    <!-- 顶部导航栏 -->
    <view class="nav-bar">
      <view class="left" @tap="goBack">

      </view>
      <!-- <view class="title">发布动态</view> -->
      <view class="right">
        <button class="publish-btn" type="primary" @tap="publishPost" :disabled="!canPublish">发布</button>
      </view>
    </view>

    <!-- 主体内容区 -->
    <view class="content-box">
      <!-- 文本输入区 -->
      <textarea class="content-input" v-model="content" placeholder="分享新鲜事..." maxlength="500"
        show-confirm-bar="false"></textarea>

      <!-- 图片上传网格 -->
      <view class="image-grid">
        <view class="image-item" v-for="(image, index) in images" :key="index">
          <image :src="image" mode="aspectFill"></image>
          <view class="delete-btn" @tap="deleteImage(index)">
            <uni-icons type="close" size="20" color="#fff"></uni-icons>
          </view>
        </view>

        <!-- 上传按钮 -->
        <view class="upload-btn" @tap="chooseImage" v-if="images.length < 9">
          <uni-icons type="camera-filled" size="32" color="#999"></uni-icons>
          <text>{{images.length}}/9</text>
        </view>
      </view>

      <!-- 选项设置区 -->
      <view class="options-box">
        <!-- 话题选择 -->
        <view class="option-item" @tap="showTopicPicker">
          <view class="option-left">
            <uni-icons type="flag" size="20" color="#666"></uni-icons>
            <text>选择话题</text>
          </view>
          <view class="option-right">
            <text v-if="selectedTopic">{{selectedTopic}}</text>
            <text v-else class="placeholder">添加话题</text>
            <uni-icons type="right" size="16" color="#999"></uni-icons>
          </view>
        </view>

        <!-- 位置信息 -->
        <view class="option-item" @tap="chooseLocation">
          <view class="option-left">
            <uni-icons type="location" size="20" color="#666"></uni-icons>
            <text>所在位置</text>
          </view>
          <view class="option-right">
            <text v-if="location">{{location}}</text>
            <text v-else class="placeholder">添加位置</text>
            <uni-icons type="right" size="16" color="#999"></uni-icons>
          </view>
        </view>

        <!-- 谁可以看 -->
        <view class="option-item" @tap="showVisibilityPicker">
          <view class="option-left">
            <uni-icons type="eye" size="20" color="#666"></uni-icons>
            <text>谁可以看</text>
          </view>
          <view class="option-right">
            <text>{{visibility}}</text>
            <uni-icons type="right" size="16" color="#999"></uni-icons>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        content: '',
        images: [],
        selectedTopic: '',
        location: '',
        visibility: '所有人可见',
        topicList: ['学习资料', '校园美食', '失物招领', '二手交易', '校园活动'],
        visibilityOptions: ['所有人可见', '仅好友可见', '仅自己可见']
      }
    },
    computed: {
      canPublish() {
        return this.content.trim().length > 0 || this.images.length > 0
      }
    },
    methods: {
      goBack() {
        if (this.content || this.images.length) {
          uni.showModal({
            title: '提示',
            content: '是否放弃发布？',
            success: (res) => {
              if (res.confirm) {
                uni.navigateBack()
              }
            }
          })
        } else {
          uni.navigateBack()
        }
      },
      chooseImage() {
        uni.chooseImage({
          count: 9 - this.images.length,
          sizeType: ['compressed'],
          sourceType: ['album', 'camera'],
          success: (res) => {
            this.images = [...this.images, ...res.tempFilePaths]
          }
        })
      },
      deleteImage(index) {
        this.images.splice(index, 1)
      },
      showTopicPicker() {
        uni.showActionSheet({
          itemList: this.topicList,
          success: (res) => {
            this.selectedTopic = this.topicList[res.tapIndex]
          }
        })
      },
      chooseLocation() {
        uni.chooseLocation({
          success: (res) => {
            this.location = res.name
          }
        })
      },
      showVisibilityPicker() {
        uni.showActionSheet({
          itemList: this.visibilityOptions,
          success: (res) => {
            this.visibility = this.visibilityOptions[res.tapIndex]
          }
        })
      },
      publishPost() {
        if (!this.canPublish) return

        uni.showLoading({
          title: '发布中...'
        })

        // 这里添加实际的发布逻辑
        setTimeout(() => {
          uni.hideLoading()
          uni.showToast({
            title: '发布成功',
            icon: 'success'
          })
          uni.navigateBack()
        }, 1500)
      }
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    background-color: #fff;
  }

  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx 30rpx;
    border-bottom: 1rpx solid #f0f0f0;
  }

  .nav-bar .left {
    font-size: 28rpx;
    color: #333;
  }

  .nav-bar .right {
    justify-content: flex-end;
  }

  .nav-bar .title {
    font-size: 32rpx;
    font-weight: 500;
  }

  .publish-btn {
    font-size: 28rpx;
    color: #999;
    background: none;
    padding: 12rpx 30rpx;
    border-radius: 30rpx;
  }

  .publish-btn.active {
    color: #fff;
    background-color: #007AFF;
  }

  .content-box {
    padding: 30rpx;
  }

  .content-input {
    width: 100%;
    height: 300rpx;
    font-size: 30rpx;
    line-height: 1.6;
    padding: 0;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20rpx;
    margin-top: 30rpx;
  }

  .image-item {
    position: relative;
    aspect-ratio: 1;
    border-radius: 12rpx;
    overflow: hidden;
  }

  .image-item image {
    width: 100%;
    height: 100%;
  }

  .delete-btn {
    position: absolute;
    top: 10rpx;
    right: 10rpx;
    width: 40rpx;
    height: 40rpx;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .upload-btn {
    aspect-ratio: 1;
    background-color: #f8f8f8;
    border-radius: 12rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10rpx;
  }

  .upload-btn text {
    font-size: 24rpx;
    color: #999;
  }

  .options-box {
    margin-top: 40rpx;
  }

  .option-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30rpx 0;
    border-bottom: 1rpx solid #f0f0f0;
  }

  .option-left {
    display: flex;
    align-items: center;
    gap: 16rpx;
  }

  .option-left text {
    font-size: 28rpx;
    color: #333;
  }

  .option-right {
    display: flex;
    align-items: center;
    gap: 10rpx;
  }

  .option-right text {
    font-size: 28rpx;
    color: #333;
  }

  .option-right .placeholder {
    color: #999;
  }
</style>