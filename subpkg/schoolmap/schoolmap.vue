<template>
  <view class="content">
    <view class="tabs">
      <text class="tab" @click="showModelView">模型视图</text>
      <text class="tab" @click="showSatelliteView">卫星视图</text>
    </view>
    <map id="map" v-show="showSatellite" class="map" :show-location="true" :latitude="latitude" :longitude="longitude"
      scale="16.8" enable-3D='true' skew=40 enable-traffic='true' enable-overlooking='true' show-location="true"
      enable-rotate='true' enable-satellite='true' :markers="marker"></map>
    <view v-show="showModel" class="model-view">
      <map style="width: 100%;height: 100vh;" :latitude="latitude" :longitude="longitude" scale="16.8" enable-3D='true'
        skew=60 enable-traffic='true' enable-overlooking='true' show-location="true" enable-rotate='true'
        :markers="marker"></map>
    </view>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  const img = '../../static/location.png';

  export default {
    computed: {
      ...mapState('test', ['marker'])
    },
    data() {
      return {
        scale: 16.8,
        latitude: 29.151725947778164,
        longitude: 110.45437886984101,
        showSatellite: false,
        showModel: true,
        markers: []
      }
    },
    mounted() {},
    onLoad() {
      uni.onLocationChange(function(res) {
        console.log('纬度：' + res.latitude);
        console.log('经度：' + res.longitude);
      });
    },
    onReady() {
      this._mapContext = uni.createMapContext("map", this);

      // 仅调用初始化，才会触发 on.("markerClusterCreate", (e) => {})
      this._mapContext.initMarkerCluster({
        enableDefaultStyle: false,
        zoomOnClick: true,
        gridSize: 60,
        accuracy: 'high',
        complete(res) {
          console.log('initMarkerCluster', res)
        }
      });

      this._mapContext.on("markerClusterCreate", (e) => {
        console.log("markerClusterCreate", e);
      });

      this.addMarkers();
      this.Location()
      this.getUserLocation()
    },
    methods: {
      showSatelliteView() {
        this.showSatellite = true;
        this.showModel = false;
      },
      showModelView() {
        this.showSatellite = false;
        this.showModel = true;
      },
      getUserLocation() {
        uni.onLocationChange(function(res) {
          console.log('纬度：' + res.latitude);
          console.log('经度：' + res.longitude);
        });
      },
      Location() {
        uni.getLocation({
          type: 'gcj02',
          altitude: true,
          isHighAccuracy: true,
          success(res) {
            this.userLatitude = res.latitude
            this.userLongitude = res.longitude
            // console.log(res.latitude)
            // console.log(res.longitude)
            // console.log(res)
          },
          fail(err) {
            console.log(err)
          }
        })
      },
      addMarkers() {
        const positions = [{
          latitude: 29.150243132278238,
          longitude: 110.45587916835063,
        }]

        const markers = []

        positions.forEach((p, i) => {
          // console.log(i)
          markers.push(
            Object.assign({}, {
              id: i + 1,
              iconPath: img,
              width: 20,
              height: 20,
              joinCluster: true, // 指定了该参数才会参与聚合
              label: {
                width: 50,
                height: 30,
                borderWidth: 1,
                borderRadius: 10,
                bgColor: '#ffffff',
                content: `小徐打卡`
              }
            }, p)
          )
        })
        this.markers = markers
        uni.setStorageSync('markers', JSON.stringify(this.markers))
        this._mapContext.addMarkers({
          markers,
          clear: false,
          complete(res) {
            console.log('addMarkers', res)
          }
        })
      }
    }
  }
</script>

<style>
  .content {
    flex: 1;
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }

  .tab {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
  }

  .map,
  .model-view {
    /* display: none; */
    width: 100%;
    height: 100vh;
    /* 40px 是 tab 的高度和下边距 */
  }

  .model-view {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
  }
</style>