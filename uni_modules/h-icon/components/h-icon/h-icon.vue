<!-- 图标组件 -->

<template>
  <i class="iconfont" :class="[icon,extraClass]" :style="[iconStyle,{color:color,fontSize:size}]"
    @click="$emit('active')"></i>
</template>

<script>
  /**
   * @description 阿里矢量图
   * @example <h-icon icon"图标样式class" iconStyle="图标样式style"></h-icon>
   * 
   * @property {String}			icon				矢量图标代码 （默认 h-tubiao ）
   * @property {String}			extraClass			图标样式class
   * @property {Object}			iconStyle			图标样式style
   * @property {String}			size				图标大小（默认 32rpx ）
   * @property {String}			color				图标颜色（默认 #fff ）
   * 
   * @event {Function} active			点击图标时触发
   */

  export default {
    // 小程序样式穿透
    options: {
      styleIsolation: 'shared'
    },
    name: 'h-icon',
    props: {
      icon: { //矢量图标代码
        type: String,
        default: "h-tubiao",
      },
      extraClass: { // 样式
        type: String,
        default: ''
      },
      iconStyle: { // 样式
        type: Object,
        default: () => {}
      },
      size: { // 图标大小
        type: String,
        default: ''
      },
      color: { // 图标颜色
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  page {
    background: #f9f9f9;
    font-family: '微软雅黑', sans-serif;
    font-size: 28rpx;
    min-height: 100%;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

  // 网络地址
  @import "https://at.alicdn.com/t/c/font_4155143_zi0sjgb58jp.css";

  // 本地地址，需从阿里矢量图中下载相关文件
  // @import url('../../static/iconfont.css');

  .iconfont {
    font-size: 32rpx;
  }
</style>