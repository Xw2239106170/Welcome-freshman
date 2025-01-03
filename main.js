import App from './App'
import {
  $http
} from '@escook/request-miniprogram'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import store from './store/store.js'

// 配置网络请求
uni.$http = $http
// 配置请求根路径
// $http.baseUrl = 'http://192.168.7.54:8083'
$http.baseUrl = 'http://localhost:8083'
// 172.20.10.8

uni.$showMsg = function(title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}
// 请求开始之前做一些事情
$http.beforeRequest = function(options) {
  uni.showLoading({
    title: '数据加载中...',
  })
}
// 请求完成之后做一些事情
$http.afterRequest = function() {
  uni.hideLoading()
}

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App,
  store,
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif