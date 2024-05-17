<template>
  <view class="welcome-page">
    <view class="welcome-speed" v-for="(item, index) in transport" :key="index">
      <view class="item-title">
        <view class="title-name">
          {{item.title}}
        </view>
        <view class="train">
          <image :src="item.img" mode=""></image>
        </view>
      </view>
      <view class="item-detail">
        <map name="map-name" style="height: 100%;width: 100%;" :latitude="item.latitude" :longitude="item.longitude"
          scale="16.8" enable-3D='true' enable-traffic='true' enable-overlooking='true' show-location="true"
          enable-rotate='true' :markers="item.marker"></map>
      </view>
    </view>
  </view>
</template>

<script>
  const imgs = '../../static/location.png';
  export default {
    name: "WelcomeDot",
    data() {
      return {
        transport: [{
          title: "张家界高铁西站",
          img: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/299ae8ca-0997-47e8-a5d7-f28b8b1ffbb2.png",
          latitude: 29.167140567826547,
          longitude: 110.46261105063165,
          marker: [{
            id: 1,
            latitude: 29.167140567826547,
            longitude: 110.46261105063165,
            iconPath: imgs,
            width: 20,
            height: 20,
            joinCluster: true, // 指定了该参数才会参与聚合
            label: {
              width: 50,
              height: 30,
              borderWidth: 1,
              borderRadius: 10,
              bgColor: '#ffffff',
              content: `迎新位置`
            }
          }]
        }, {
          title: "张家界站",
          img: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/f82ccf78-126e-4f8a-9917-8d541846e24b.png',
          latitude: 29.104948761480074,
          longitude: 110.4865271994179,
          marker: [{
            id: 1,
            latitude: 29.104948761480074,
            longitude: 110.4865271994179,
            iconPath: imgs,
            width: 20,
            height: 20,
            joinCluster: true, // 指定了该参数才会参与聚合
            label: {
              width: 50,
              height: 30,
              borderWidth: 1,
              borderRadius: 10,
              bgColor: '#ffffff',
              content: `迎新位置`
            }
          }]

        }, {
          title: "张家界荷花国际机场",
          img: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/f0ba31b3-8433-4faa-89e5-23debd7e04df.png',
          latitude: 29.10536133148906,
          longitude: 110.44454653675673,
          marker: [{
            id: 1,
            latitude: 29.10536133148906,
            longitude: 110.44454653675673,
            iconPath: imgs,
            width: 20,
            height: 20,
            joinCluster: true, // 指定了该参数才会参与聚合
            label: {
              width: 50,
              height: 30,
              borderWidth: 1,
              borderRadius: 10,
              bgColor: '#ffffff',
              content: `迎新位置`
            }
          }]

        }]
      };
    },
    mounted() {
      const key = 'YQWBZ-WFZH5-LEGIS-IYODB-LFF27-BQBB4';
      const start = '29.1675,110.4656'; // 例如：'28.1871,112.9836'
      const end = '29.1485,110.4576'; // 例如：'28.1973,113.0333'
      uni.request({
        url: 'https://apis.map.qq.com/ws/direction/v1/transit',
        data: {
          key: key,
          from: start,
          to: end
        },
        success: (res) => {
          console.log(res)
          if (res.data.status === 0 && res.data.result.routes.length > 0) {
            const route = res.data.result.routes[0];
            const polyline = [];

            route.steps.forEach((step) => {
              if (step.mode === 'TRANSIT') {
                // 步行路线
                step.polyline.forEach((pointStr) => {
                  // const point = pointStr.split(',');
                  polyline.push({
                    latitude: parseFloat(point[1]),
                    longitude: parseFloat(point[0])
                  });
                });
              } else if (step.mode === 'WALKING') {
                // 公交路线
                step.lines.forEach((line) => {
                  line.polyline.forEach((pointStr) => {
                    // const point = pointStr.split(',');
                    polyline.push({
                      latitude: parseFloat(point[1]),
                      longitude: parseFloat(point[0])
                    });
                  });
                });
              }
            });

            this.polyline = [{
              points: polyline,
              color: '#0000FF',
              width: 2,
              dottedLine: false
            }];
          }
        },
        fail: (err) => {
          console.error(err);
        }
      });
    }

  }
</script>

<style lang="scss">
  .welcome-page {
    width: 100%;
    height: 100vh;
    background-color: #efefef;
    padding: 10rpx;

    .welcome-speed {
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
      height: 300px;
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background-color: #fff;

      .item-detail {
        width: 100%;
        height: 250px;
        // background-color: pink;
      }

      // https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/cd38bbbc-32eb-4ba7-b603-8dd336b94f94.jpg
      .item-title {
        line-height: 50px;
        width: 100%;
        height: 50px;
        font-size: 25px;
        font-weight: bold;
        display: flex;

        .train {
          margin-top: 4px;
          margin-left: 5px;
          height: 30px;
          width: 30px;

          image {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>