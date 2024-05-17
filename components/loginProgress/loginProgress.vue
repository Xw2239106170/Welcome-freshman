<template>
  <view>
    <button @click="startLoading">开始加载</button>
    <view class="progress" v-if="loading">
      <view class="progress-bar" :style="{ width: progress + '%' }"></view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "loginProgress",
    data() {
      return {
        loading: false,
        progress: 0
      };
    },
    methods: {
      startLoading() {
        this.loading = true;
        this.progress = 0;
        const interval = setInterval(() => {
          if (this.progress < 100) {
            this.progress += 10;
          } else {
            clearInterval(interval);
            this.loading = false;
          }
        }, 1000);
      }
    }
  }
  }
</script>

<style lang="scss">
  .progress {
    width: 100%;
    height: 10px;
    background-color: #333;
    border-radius: 5px;
    overflow: hidden;

    &-inner {
      height: 100%;
      background-color: #4CAF50;
      @include progressAnimation;
    }

    &-bar {
      height: 100%;
      transform-origin: left;
    }
  }

  @mixin progressAnimation {
    animation: progressAnimation 1s linear infinite;
  }

  @keyframes progressAnimation {
    0% {
      transform: scaleX(0);
    }

    100% {
      transform: scaleX(1);
    }
  }
</style>