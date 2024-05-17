<template>
  <view class="weather-box">
    <view class="box-item">
      <view class="city">
        <view class="area">
          张家界市永定区
        </view>
        <view class="week">
          星期{{nowWeather.weekday === 7 ? day : nowWeather.weekday}}
        </view>
      </view>
      <!-- 温度 -->
      <view class="weather-detail">
        <view class="temp">
          {{nowWeather.day_air_temperature}}℃
        </view>
        <view class="item-detail">
          <view class="cloudy">
            {{nowWeather.day_weather}}
            <view class="weather-image">
              <image :src="nowWeather.day_weather_pic" mode=""></image>
            </view>
          </view>
          <view class="cloudy" style="font-size: 14px;">
            湿度 {{weather.sd}}
            <view class="weather-image">
              <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/b16083ea-ff00-4c0a-b571-de111aec53cb.png"
                mode=""></image>
            </view>
          </view>

          <view class="cloudy" style="font-size: 14px;">
            {{nowWeather.day_wind_direction}} {{nowWeather.day_wind_power}}
            <view class="weather-image">
              <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/e8c7987d-f90c-48b4-b089-ef2e6aced108.png"
                mode=""></image>
            </view>
          </view>
          <view class="cloudy" style="font-size: 14px;">
            降雨量：{{nowWeather.jiangshui}}mm
            <view class="weather-image" style="height: 30px;width: 60rpx; margin-left: 10rpx;">
              <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/22548da1-4ae4-4f3e-94c0-6ab7c175273a.png"
                mode=""></image>
            </view>
          </view>
          <view class="cloudy" style="font-size: 14px;">
            空气指数：{{nowWeather.air_press}}
            <view class="weather-image" style="height: 40px;width: 70rpx; margin-left: 20rpx;">
              <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/33637559-787e-436a-a472-49f7b847ee42.png"
                mode=""></image>
            </view>
          </view>
        </view>
      </view>
      <view class="weather-time">
        数据更新时间：{{weather.temperature_time}}
      </view>
      <view class="tips">
        <view class="tips-title" style="color: #666666;">
          温馨提示
        </view>
        <view class="tips-desc" v-for="(item, index) in tips" :key="index">
          {{item.desc}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "MyForecast",
    data() {
      return {
        showapi: '1557628',
        showsign: '17648cb8094d40a6b7ae705bd506237f',
        area: '张家界',
        weather: uni.getStorageSync('weather') || '',
        nowWeather: uni.getStorageSync('nowweather') || '',
        tips: [],
        day: '日'
      };
    },
    methods: {
      onPullDownRefresh() {
        // 在这里执行刷新逻辑，比如重新获取数据
        this.getWeatherData();
      },
      // 获取天气数据
      getWeatherData() {
        const time = Date.now();
        const res = wx.request({
          url: 'https://route.showapi.com/9-2?showapi_appid=1557628&showapi_sign=a71ad3b496854012a2d4f79e7c4f105b',
          data: {
            area: this.area,
            needIndex: 1,
            showapi_timestamp: Date.now()
          },
          method: 'GET',
          success: (res) => {
            uni.stopPullDownRefresh()
            console.log(res.data.showapi_res_body)
            this.nowWeather = res.data.showapi_res_body.f1
            this.weather = res.data.showapi_res_body.now
            // console.log(this.nowWeather)
            this.tips.push(res.data.showapi_res_body.f2.index.clothes)
            this.tips.push(res.data.showapi_res_body.f2.index.travel)
            this.tips.push(res.data.showapi_res_body.f2.index.uv)
            this.tips.push(res.data.showapi_res_body.f2.index.zs)
            this.tips.push(res.data.showapi_res_body.f2.index.cold)
            console.log(this.tips)
          },
          fail: (err) => {
            console.log(err)
          }
        })
        console.log(res);
      }
    },
    onReady() {
      console.log("你好")
      this.getWeatherData()
    }
  }
</script>

<style lang="scss">
  .weather-box {
    padding: 0 20rpx;
    background-color: #efefee;
    height: 100vh;
    background: linear-gradient(to bottom, #6cc4cb, white);


    .box-item {
      width: 100%;
      // height: 500px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 10px;
      // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .city {
      width: 100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: center;

      .area {
        margin-left: 20rpx;
        font-size: 20px;
        margin-right: 20px;
      }
    }

    // 温度
    .weather-detail {
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
      height: 250px;
      display: flex;
      background-color: #E2F4FB;

      .temp {
        height: 100%;
        width: 40%;
        font-size: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item-detail {
        height: 100%;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 14px;

        .cloudy {
          width: 100%;
          height: 50px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          font-size: 18px;

          .weather-image {
            height: 50px;
            width: 90rpx;

            image {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

    // 事件
    .weather-time {
      color: #666666;
    }

    .tips {
      width: 100%;
      height: 190px;
      display: flex;
      flex-direction: column;
      // justify-content: space-around;
      // align-items: center;

      .tips-desc {
        width: 100%;
        height: 40px;
        font-size: 12px;
        margin-top: 20rpx;
        margin-left: 20rpx;
        color: #666666;
      }
    }
  }
</style>