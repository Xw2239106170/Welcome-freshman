<template>
  <view class="container">
    <view class="face-box">
      <!--      <view class="face-top">
        <image :src="faceImage || defaultPic" mode="aspectFill" class="face-image"></image>
      </view> -->
      <camera id="camera" style="width: 100%; height: 300px;" class="face-top" device-position="front" v-if="!photo">
      </camera>
      <image :src="photo" mode="aspectFill" style="width: 100%; height: 300px;" v-else></image>


      <button @click="upload" class="upload-button" :disabled="photo">
        <image src="../../static/center2/photo.png" mode="" class="upload-icon"></image>上传人脸
      </button>
    </view>
    <view class="face-bottom">
      <radio :checked="isRead" @click="changeRadio"></radio>
      <text>
        <text style="color: #D8B774; font-size: 18px;">我已阅读并同意使用协议</text>
      </text>
      <h1 style="color: red; font-size: 18px; margin-top: 20rpx;">人脸采集注意事项：</h1>
      <view class="bottom-item">
        <text>1、请勿对着照片拍照，即使通过验证也无法使用；</text>
        <text>2、摘下眼镜、梳起刘海、露出双耳</text>
        <text>3、表情正常，正面照，面部占整个照片的3/4;</text>
        <text>4、光线充足，照片清晰;</text>
        <text>5、纯色背景（推荐蓝底或红底）;</text>
        <text>6、苹果系统需要横屏拍照</text>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex';

  export default {
    name: "IdentifyFace",
    computed: {
      ...mapState('user', ['faceImage', 'userPhoto'])
    },
    data() {
      return {
        defaultPic: '/static/center2/avatar.png',
        isRead: false,
        photo: uni.getStorageSync('userPhoto') || '',
        img: '',
        similarity: 0,
        show: true
      };
    },
    onReady() {
      this.cameraContext = wx.createCameraContext();
    },
    methods: {
      ...mapMutations('user', ['getFaceImage', 'getUserPhoto']),
      async judgePerson(image) {
        const csc = await uni.$http.get('/stu', {
          image1: this.img,
          xuehao: '2212040252'
        })
        return csc
      },
      async upload() {
        if (!this.isRead) {
          return uni.$showMsg('请勾选阅读协议！')
        }
        this.cameraContext.takePhoto({
          quality: 'high',
          success: (res) => {
            // this.photo = res.tempImagePath
            console.log('拍照成功', res.tempImagePath);
            // this.img = res.tempImagePath
            // 上传图片
            wx.uploadFile({
              url: 'http://192.168.14.54:8080/upload', // 上传接口地址
              filePath: res.tempImagePath, // 使用res.tempImagePath
              name: 'file', // 服务器接收的文件字段名
              'image': res.tempImagePath, // 其他请求参数
              success: function(res) {
                var data = res.data
                // 上传成功后的处理逻辑
                console.log(res)
                // console.log(res.data);
                let responseString = `${res.data}`;
                let responseObject = JSON.parse(responseString);
                this.img = responseObject.data;
                // console.log('img' + this.img)
                const csc = uni.$http.get('/stu', {
                  image1: this.img,
                  xuehao: '2212040252'
                })
                csc.then(data => {
                  let response = JSON.parse(data.data.data)
                  this.similarity = response.score
                  if (this.similarity > 0.67) {
                    this.photo = this.img
                    uni.setStorageSync('userPhoto', this.photo)
                    uni.navigateTo({
                      url: '/subpkg/persondetail/persondetail?id=' + 1
                    })
                    return uni.$showMsg(`验证成功~`)
                  } else {
                    this.photo = ''
                    return uni.$showMsg(`验证不成功哦~`)
                  }
                }, )
              },
              fail: function(err) {
                // 上传失败后的处理逻辑
                console.log('上传失败', err);
              }
            });
          },
          fail: (err) => {
            console.log('拍照失败', err);
          }
        });
        this.getUserPhoto(this.photo)
        uni.$showMsg('上传成功，审核需等待几分钟哦~')
        uni.showLoading({
          title: '人脸比对中~',
          mask: true
        })
        setTimeout(() => {
          uni.hideLoading()
          // uni.$showMsg('审核通过！！')
        }, 5000);
      },
      changeRadio() {
        this.isRead = true
      },
    },
    watch: {
      photo(newVal, oldVal) {
        // 在photo变化时执行逻辑
        this.getUserPhoto(newVal)
        console.log('photo 发生变化', newVal);
      }
    },

  };
</script>

<style lang="scss">
  .container {
    padding: 20rpx;
    background-color: #f5f5f5;
  }

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
    border-radius: 50%;
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

  .face-bottom {
    margin-top: 20rpx;
    width: 100%;

    .bottom-item {
      display: flex;
      flex-direction: column;
      margin-left: 20rpx;
      margin-top: 10rpx;

      text {
        margin-bottom: 10rpx;
        color: red;
      }
    }
  }

  /* 可以继续添加其他样式 */
</style>