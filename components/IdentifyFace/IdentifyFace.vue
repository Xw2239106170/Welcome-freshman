<template>
  <view class="container">
    <!-- 主要内容区 -->
    <view class="content-wrapper">
      <!-- 拍照卡片 -->
      <view class="photo-card">
        <view class="card-header">
          <text class="card-title">人脸验证</text>
          <text class="card-subtitle">请按照指引完成人脸采集</text>
        </view>

        <view class="camera-container">
          <!-- 相机组件或已拍摄的照片 -->
          <camera v-if="!photo" :device-position="devicePosition" flash="off" class="camera" @error="handleCameraError">
          </camera>
          <image v-else :src="photo" mode="aspectFill" class="camera"></image>

          <!-- 拍照成功遮罩 -->
          <view v-if="photo" class="success-overlay">
            <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/8e130601-0afe-4a97-bc39-8588de0f09f8.png"
              mode="aspectFit" class="success-icon"></image>
          </view>

          <!-- 拍照引导框 -->
          <view v-if="!photo" class="guide-frame"></view>
        </view>

        <!-- 拍照按钮 -->
        <button class="capture-btn" :class="{ 'processing': isProcessing, 'disabled': !!photo }"
          :disabled="isProcessing || !!photo" @tap="handleCapture">
          <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/f6ecc218-d965-4157-9446-1e7ad7ec56bb.png"
            mode="aspectFit" class="btn-icon"></image>
          <text>{{ isProcessing ? '处理中...' : '拍摄照片' }}</text>
        </button>

        <!-- 协议同意 -->
        <view class="agreement-box">
          <radio :checked="isAgreementAccepted" @tap="toggleAgreement" color="#4f46e5" />
          <text class="agreement-text">
            我已阅读并同意<text class="link">用户协议</text>
          </text>
        </view>
      </view>

      <!-- 注意事项卡片 -->
      <view class="notice-card">
        <view class="notice-header">
          <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/025ea4b5-1676-4be8-b3b0-cdc9ad470c50.png"
            mode="aspectFit" class="notice-icon"></image>
          <text class="notice-title">注意事项</text>
        </view>

        <view class="guidelines">
          <view v-for="(item, index) in guidelines" :key="index" class="guideline-item">
            <view class="guideline-number">{{ index + 1 }}</view>
            <text class="guideline-text">{{ item }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'FaceVerification',
    data() {
      return {
        photo: '',
        isProcessing: false,
        isAgreementAccepted: false,
        devicePosition: 'front',
        guidelines: [
          '请勿对着照片拍照，即使通过验证也无法使用',
          '摘下眼镜、梳起刘海、露出双耳',
          '表情自然，正面拍摄，面部占整个照片的3/4',
          '光线充足，照片清晰',
          '纯色背景（推荐蓝底或红底）',
          '苹果系统需要横屏拍照'
        ]
      }
    },

    methods: {
      handleCapture() {
        if (!this.isAgreementAccepted) {
          uni.showToast({
            title: '请先同意用户协议',
            icon: 'none'
          });
          return;
        }

        this.isProcessing = true;
        const ctx = uni.createCameraContext();

        ctx.takePhoto({
          quality: 'high',
          success: (res) => {
            // 模拟上传和验证过程
            console.log(res)
            setTimeout(() => {
              this.photo = res.tempImagePath;
              uni.setStorageSync('userPhoto', res.tempImagePath);
              // 上传照片
              wx.uploadFile({
                url: 'http://localhost:8083/upload', // 上传接口地址
                filePath: res.tempImagePath, // 使用res.tempImagePath
                name: 'file', // 服务器接收的文件字段名
                'image': res.tempImagePath, // 其他请求参数
                success: async (res) => {
                  let responseString = `${res.data}`;
                  let responseObject = JSON.parse(responseString);
                  this.img = responseObject.data;
                  const csc = await uni.$http.get('/stu', {
                    image1: this.img,
                    xuehao: '2212040252'
                  })
                  let response = JSON.parse(csc.data.data)
                  // 人脸验证
                  if (response.score > 0.67) {
                    uni.setStorageSync('userPhoto', this.photo)
                    // uni.navigateTo({
                    //   url: '/subpkg/persondetail/persondetail?id=' + 1
                    // })
                    return uni.$showMsg(`验证成功~`)
                  } else {
                    this.photo = ''
                    return uni.$showMsg(`验证不成功哦~`)
                  }

                }
              })

              // 可以在这里处理跳转
              // uni.navigateTo({
              //   url: '/pages/verification-success/index'
              // });
            }, 2000);
          },
          fail: (err) => {
            uni.showToast({
              title: '拍照失败，请重试',
              icon: 'none'
            });
          },
          complete: () => {
            this.isProcessing = false;
          }
        });
      },

      handleCameraError(error) {
        uni.showToast({
          title: '相机启动失败，请检查权限',
          icon: 'none'
        });
      },

      toggleAgreement() {
        this.isAgreementAccepted = !this.isAgreementAccepted;
      }
    }
  }
</script>

<style lang="scss">
  .container {
    min-height: 100vh;
    padding: 30rpx;
    background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%);
  }

  .content-wrapper {
    max-width: 750rpx;
    margin: 0 auto;
  }

  .photo-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 24rpx;
    padding: 40rpx;
    margin-bottom: 30rpx;
    box-shadow: 0 4rpx 30rpx rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10rpx);

    .card-header {
      text-align: center;
      margin-bottom: 30rpx;

      .card-title {
        font-size: 36rpx;
        font-weight: bold;
        color: #1E1B4B;
        display: block;
      }

      .card-subtitle {
        font-size: 26rpx;
        color: #6B7280;
        margin-top: 10rpx;
        display: block;
      }
    }
  }

  .camera-container {
    position: relative;
    width: 100%;
    height: 800rpx;
    border-radius: 20rpx;
    overflow: hidden;
    background: linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%);
    margin-bottom: 30rpx;

    .camera {
      width: 100%;
      height: 100%;
    }

    .success-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(79, 70, 229, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;

      .success-icon {
        width: 120rpx;
        height: 120rpx;
      }
    }

    .guide-frame {
      position: absolute;
      top: 20rpx;
      left: 20rpx;
      right: 20rpx;
      bottom: 20rpx;
      border: 4rpx dashed rgba(79, 70, 229, 0.3);
      border-radius: 16rpx;
      pointer-events: none;
    }
  }

  .capture-btn {
    width: 100%;
    height: 88rpx;
    background: #4F46E5;
    border-radius: 16rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 32rpx;
    font-weight: 500;
    border: none;
    margin-bottom: 30rpx;

    &.processing {
      background: #C7D2FE;
      color: #6366F1;
    }

    &.disabled {
      opacity: 0.5;
    }

    .btn-icon {
      width: 40rpx;
      height: 40rpx;
      margin-right: 10rpx;
    }
  }

  .agreement-box {
    display: flex;
    align-items: center;
    padding: 20rpx;
    background: #EEF2FF;
    border-radius: 16rpx;

    .agreement-text {
      font-size: 26rpx;
      color: #1E1B4B;
      margin-left: 10rpx;

      .link {
        color: #4F46E5;
      }
    }
  }

  .notice-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 24rpx;
    padding: 40rpx;
    box-shadow: 0 4rpx 30rpx rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10rpx);

    .notice-header {
      display: flex;
      align-items: center;
      margin-bottom: 30rpx;

      .notice-icon {
        width: 40rpx;
        height: 40rpx;
        margin-right: 10rpx;
      }

      .notice-title {
        font-size: 32rpx;
        font-weight: bold;
        color: #1E1B4B;
      }
    }
  }

  .guidelines {
    .guideline-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20rpx;

      .guideline-number {
        width: 40rpx;
        height: 40rpx;
        background: #EEF2FF;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24rpx;
        color: #4F46E5;
        font-weight: 500;
        flex-shrink: 0;
        margin-right: 20rpx;
      }

      .guideline-text {
        font-size: 26rpx;
        color: #4B5563;
        flex: 1;
      }
    }
  }
</style>