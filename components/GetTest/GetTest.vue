<template>
  <view style='width: 100%;' v-if="todoTasks.length > 0">
    <view class="tab-bar">
      <view class="tab-item" :class="{ 'active': currentTab === 'todo' }" @click="changeTab('todo')">
        未完成
      </view>
      <view class="tab-item" :class="{ 'active': currentTab === 'done' }" @click="changeTab('done')">
        已完成
      </view>
    </view>
    <view class="task-list" style="background-color: #efefef; margin-top: 20rpx;">
      <view v-if="currentTab === 'todo'" style="margin-top: 20rpx;">
        <view v-for="task in todoTasks" :key="task.id" class="task-item"
          style="margin-top: 20rpx; background-color: #fff;" :class="{'add-glow': task.name === '主线任务'}">
          <view class="task-left">
            <view class="task-name">{{ task.name }}</view>
            <view class="task-description">{{ task.neirong }}</view>
          </view>
          <view class="task-time">
            截止时间：{{task.endlineTime}}
          </view>
          <view class="task-right">
            <button type="primary" class="task-button" @click="goTestDetail(task.id)">打卡</button>
          </view>
        </view>

      </view>
      <view v-else>
        <view v-for="task in doneTasks" :key="task.id" class="task-item done">
          <view class="task-left">
            <view class="task-name">{{ task.name }}</view>
            <view class="task-description">{{ task.neirong }}</view>
          </view>
          <view class="task-right">
            <image src="../../static/center2/get.png" mode=""></image>
          </view>
        </view>

      </view>
    </view>
  </view>
  <!-- 空空如也 -->
  <view class="empty-cart" v-else>
    <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/60f0c100-86fb-4726-9b03-804ab5ccfbc6.png"
      class="empty-img"></image>
    <text class="tip-text">任务都完成啦，真棒~</text>
  </view>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {

    data() {
      return {
        currentTab: 'todo', // 当前选中的tab，默认为未完成任务
        taskList: [],
        img: ''
      };
    },
    computed: {
      // ...mapState('test', ['tasks', 'addImage']),
      ...mapGetters('test', ['todoTasks', 'doneTasks', 'backTask']),
      ...mapState('user', ['faceImage', 'userPhoto'])
    },
    methods: {
      ...mapMutations('test', ['changeTask']),
      changeTab(tab) {
        this.currentTab = tab;
      },
      // 去任务详细页面
      goTestDetail(id) {
        this.img = uni.getStorageSync('userPhoto')
        // if (!this.userPhoto) return uni.$showMsg('请先上传人脸哦~')
        // console.log(this.todoTasks)
        uni.navigateTo({
          url: '/subpkg/detaitest/detaitest?Testid=' + id
        })
      },
      // 获取打卡任务
      async getTest() {
        const res = await uni.$http.get('/task')
        this.taskList = res.data.data
        this.changeTask(this.taskList)
        console.log(this.taskList)
      }
    },
    onReady() {
      this.getTest()
      console.log(this.todoTasks)
      console.log(this.doneTasks)
    }
  };
</script>

<style scoped>
  .tab-bar {
    display: flex;
    justify-content: space-around;
    background-color: #f0f0f0;
    padding: 10px 0;
  }

  .tab-item {
    width: 50%;
    text-align: center;
    color: #666;
    font-size: 16px;
    cursor: pointer;
  }

  .tab-item.active {
    color: #333;
    font-weight: bold;
  }

  .task-list {
    width: 100%;
    height: 100vh;
    margin-top: 20px;
  }

  .task-item {
    border-radius: 20px;
    margin: 0 auto;
    width: 90%;
    padding: 10px;
    box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .task-item.done {
    text-decoration: line-through;
    color: #999;
  }

  .task-left {
    flex: 1;
    padding-right: 10px;
  }

  .task-time {
    font-size: 12px;
    margin-top: 50rpx;
    margin-right: 50rpx;
    color: #D63423;
  }

  .task-right {
    display: flex;
    align-items: center;
  }

  .task-button {
    background-color: #409eff;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  .task-name {
    font-weight: bold;
  }

  .task-description {
    margin-top: 20rpx;
    color: #0081CF;
  }

  image {
    width: 24px;
    height: 24px;
    margin-left: 10px;
  }

  /* 空空如也 */
  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
  }

  .empty-cart .empty-img {
    width: 90px;
    height: 90px;
  }

  .empty-cart .tip-text {
    font-size: 12px;
    color: gray;
    margin-top: 15px;
  }

  .add-glow {
    animation: glow 2s linear infinite;
    /* 添加动画效果，名称为 glow，时长为 2s，线性变化，无限循环 */
    border: 1px solid transparent;
    /* 添加一个边框，使动画可见 */
  }


  // 流光效果
  @keyframes glow {

    0%,
    100% {
      border-color: transparent;
      /* 透明边框 */
    }

    50% {
      border-color: #7FFFD4;
      /* 流光颜色 */
    }
  }
</style>