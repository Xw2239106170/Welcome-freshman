<template>
  <view class="task-management-container">
    <!-- 顶部导航栏 -->
    <view class="nav-header">
      <text class="nav-title">任务管理</text>
    </view>

    <!-- 状态切换 -->
    <view class="tabs">
      <view class="tab-item" :class="{ 'active': currentTab === '0' }" @tap="switchTab('0')">
        未完成
      </view>
      <view class="tab-item" :class="{ 'active': currentTab === '1' }" @tap="switchTab('1')">
        已完成
      </view>
    </view>

    <!-- 任务列表 -->
    <scroll-view scroll-y class="task-list">
      <!-- 空状态处理 -->
      <view v-if="filteredTasks.length === 0" class="empty-state">
        <view class="empty-cart">
          <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/60f0c100-86fb-4726-9b03-804ab5ccfbc6.png"
            class="empty-img"></image>
          <text class="tip-text">任务都完成啦，真棒~</text>
        </view>
      </view>

      <!-- 任务卡片 -->
      <view v-for="task in filteredTasks" :key="task.id" class="task-card">
        <view class="task-header">
          <text class="task-type">{{ task.name }}</text>

          <!-- 截止时间提醒 -->
          <view v-if="task.done === '0'" class="deadline-tag">
            <uni-icons type="calendar" size="12" color="#fff" />
            <text class="deadline-text">
              {{calculateDeadlineText(task.endlineTime)}}
            </text>
          </view>
        </view>

        <view class="task-content">
          <text class="task-description">{{ task.neirong }}</text>
          <text class="task-date">{{ task.endlineTime }}</text>
        </view>

        <!-- 完成按钮 -->
        <view v-if="task.done === '0'" class="complete-btn" @tap="completeTask(task.id)">
          <uni-icons type="checkmarkempty" size="16" color="#fff" />
          <text>完成</text>
        </view>
      </view>
    </scroll-view>
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
        currentTab: '0',
        tasks: []
      }
    },
    computed: {
      filteredTasks() {
        return this.tasks.filter(task => task.done === this.currentTab);
      }
    },
    methods: {
      ...mapMutations('test', ['changeTask']),
      goTestDetail(id) {
        this.img = uni.getStorageSync('userPhoto')
        // if (!this.userPhoto) return uni.$showMsg('请先上传人脸哦~')
        // console.log(this.todoTasks)
        uni.navigateTo({
          url: '/subpkg/detaitest/detaitest?Testid=' + id
        })
      },
      // 切换Tab
      switchTab(tab) {
        this.currentTab = tab;
      },

      // 完成任务
      completeTask(taskId) {
        this.goTestDetail(taskId)
        console.log(taskId)
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
          this.$set(this.tasks[index], 'done', '1');
        }
      },

      // 计算截止时间文本
      calculateDeadlineText(endlineTime) {
        const now = new Date();
        const deadlineDate = new Date(endlineTime);
        const timeDiff = deadlineDate.getTime() - now.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if (daysDiff <= 0) return '已超时';
        if (daysDiff <= 1) return '今日到期';
        if (daysDiff <= 3) return `${daysDiff}天内到期`;
        return `${daysDiff}天剩余`;
      },

      // 获取截止时间样式
      getDeadlineStyle(deadline) {
        const daysDiff = this.calculateDeadlineText(deadline);

        if (daysDiff === '已超时') return 'deadline-overdue';
        if (daysDiff === '今日到期' || daysDiff.includes('天内到期')) return 'deadline-soon';
        return 'deadline-normal';
      },
      async getTest() {
        const res = await uni.$http.get('/task')
        this.tasks = res.data.data
        this.changeTask(this.tasks)
        console.log(this.taskList)
      },
    },
    onReady() {
      this.getTest()
    }
  }
</script>

<style lang="scss" scoped>
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

  .task-management-container {
    background-color: #f5f5f5;
    min-height: 100vh;
  }

  .nav-header {
    background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    padding: 20rpx;
    text-align: center;
  }

  .nav-title {
    color: white;
    font-size: 36rpx;
    font-weight: bold;
  }

  .tabs {
    display: flex;
    background-color: white;

    .tab-item {
      flex: 1;
      text-align: center;
      padding: 20rpx;
      color: #666;

      &.active {
        color: #4facfe;
        border-bottom: 4rpx solid #4facfe;
      }
    }
  }

  .task-list {
    padding: 20rpx;
    max-height: calc(100vh - 200rpx);
  }

  .empty-state {
    text-align: center;
    color: #999;
    padding: 50rpx;
  }

  .task-card {
    background-color: white;
    border-radius: 16rpx;
    padding: 30rpx;
    margin-bottom: 20rpx;
    position: relative;
    box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
  }

  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;
  }

  .task-type {
    color: #666;
    font-size: 28rpx;
  }

  .deadline-tag {
    display: flex;
    align-items: center;
    padding: 8rpx 16rpx;
    border-radius: 30rpx;
    font-size: 24rpx;
  }

  .deadline-overdue {
    background-color: #f54d4d;
    color: white;
  }

  .deadline-soon {
    background-color: #ffa500;
    color: white;
  }

  .deadline-normal {
    background-color: #4facfe;
    color: white;
  }

  .task-content {
    margin-bottom: 20rpx;
  }

  .task-description {
    font-size: 32rpx;
    color: #333;
    display: block;
    margin-bottom: 10rpx;
  }

  .task-date {
    font-size: 24rpx;
    color: #999;
  }

  .complete-btn {
    position: absolute;
    right: 30rpx;
    bottom: 30rpx;
    background-color: #4facfe;
    color: white;
    display: flex;
    align-items: center;
    padding: 10rpx 20rpx;
    border-radius: 30rpx;
    font-size: 28rpx;
  }
</style>