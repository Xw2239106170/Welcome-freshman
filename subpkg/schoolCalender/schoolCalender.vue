<template>
  <view class="calendar-page">
    <!-- 导航栏 -->
    <view class="nav-bar">
      <view class="nav-back" @click="goBack">
        <text class="back-icon">←</text>
      </view>
      <view class="nav-title">校历</view>
      <view class="nav-action">
        <text class="action-icon" @click="downloadCalendar">⭳</text>
      </view>
    </view>

    <!-- 学年选择 -->
    <view class="semester-select">
      <picker mode="selector" :range="yearList" @change="onYearChange">
        <view class="year-picker">
          {{ currentYear }}学年
          <text class="picker-arrow">▼</text>
        </view>
      </picker>
      <view class="semester-tabs">
        <view v-for="(sem, index) in semesters" :key="index"
          :class="['semester-tab', { active: currentSemester === sem.value }]" @click="changeSemester(sem.value)">
          {{ sem.label }}
        </view>
      </view>
    </view>

    <!-- 日历主体 -->
    <scroll-view class="calendar-content" scroll-y>
      <!-- 学期概览 -->
      <view class="overview-card">
        <view class="card-title">学期概览</view>
        <view class="date-item">
          <text class="date-label">学期开始</text>
          <text class="date-value">{{ semesterInfo.startDate }}</text>
        </view>
        <view class="date-item">
          <text class="date-label">学期结束</text>
          <text class="date-value">{{ semesterInfo.endDate }}</text>
        </view>
        <view class="date-item">
          <text class="date-label">教学周数</text>
          <text class="date-value">{{ semesterInfo.totalWeeks }}周</text>
        </view>
      </view>

      <!-- 重要日期 -->
      <view class="important-dates">
        <view class="card-title">重要日期</view>
        <view class="event-item" v-for="(event, index) in importantDates" :key="index">
          <view class="event-date">
            <text class="date-month">{{ event.month }}</text>
            <text class="date-day">{{ event.day }}</text>
          </view>
          <view class="event-info">
            <text class="event-name">{{ event.name }}</text>
            <text class="event-desc">{{ event.description }}</text>
          </view>
        </view>
      </view>

      <!-- 教学周历 -->
      <view class="week-calendar">
        <view class="card-title">教学周历</view>
        <view class="week-item" v-for="(week, index) in weekList" :key="index">
          <view class="week-header">
            <text class="week-name">第{{ week.week }}周</text>
            <text class="week-date">{{ week.startDate }} - {{ week.endDate }}</text>
          </view>
          <view class="week-events" v-if="week.events.length">
            <view class="week-event-item" v-for="(event, eventIndex) in week.events" :key="eventIndex">
              <text class="event-tag" :style="{ backgroundColor: event.tagColor }">{{ event.tag }}</text>
              <text class="event-title">{{ event.title }}</text>
            </view>
          </view>
        </view>
      </view>

      <!-- 校历图示 -->
      <view class="calendar-legend">
        <view class="card-title">图示说明</view>
        <view class="legend-list">
          <view class="legend-item">
            <view class="legend-color" style="background-color: #FF9800;"></view>
            <text class="legend-text">课程时间</text>
          </view>
          <view class="legend-item">
            <view class="legend-color" style="background-color: #4CAF50;"></view>
            <text class="legend-text">考试周</text>
          </view>
          <view class="legend-item">
            <view class="legend-color" style="background-color: #2196F3;"></view>
            <text class="legend-text">实践周</text>
          </view>
          <view class="legend-item">
            <view class="legend-color" style="background-color: #9C27B0;"></view>
            <text class="legend-text">假期</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        yearList: ['2023-2024', '2022-2023', '2021-2022'],
        currentYear: '2023-2024',
        semesters: [{
            label: '第一学期',
            value: 1
          },
          {
            label: '第二学期',
            value: 2
          }
        ],
        currentSemester: 1,
        semesterInfo: {
          startDate: '2024年2月26日',
          endDate: '2024年7月12日',
          totalWeeks: 20
        },
        importantDates: [{
            month: '2月',
            day: '26',
            name: '开学典礼',
            description: '全体新生参加开学典礼'
          },
          {
            month: '3月',
            day: '15',
            name: '运动会',
            description: '为期两天的春季运动会'
          },
          {
            month: '5月',
            day: '1',
            name: '劳动节放假',
            description: '5月1日-5日放假'
          },
          {
            month: '7月',
            day: '8',
            name: '期末考试周',
            description: '7月8日-12日'
          }
        ],
        weekList: [{
            week: 1,
            startDate: '2024-02-26',
            endDate: '2024-03-03',
            events: [{
              tag: '教学',
              title: '开学第一周',
              tagColor: '#FF9800'
            }]
          },
          {
            week: 2,
            startDate: '2024-03-04',
            endDate: '2024-03-10',
            events: [{
              tag: '活动',
              title: '社团招新',
              tagColor: '#2196F3'
            }]
          },
          {
            week: 15,
            startDate: '2024-06-03',
            endDate: '2024-06-09',
            events: [{
              tag: '考试',
              title: '期末考试周',
              tagColor: '#4CAF50'
            }]
          }
        ]
      }
    },
    methods: {
      goBack() {
        uni.navigateBack()
      },
      downloadCalendar() {
        uni.showToast({
          title: '校历下载中...',
          icon: 'loading'
        })
        // 实现下载逻辑
      },
      onYearChange(e) {
        this.currentYear = this.yearList[e.detail.value]
        // 加载对应学年数据
      },
      changeSemester(semester) {
        this.currentSemester = semester
        // 加载对应学期数据
      }
    }
  }
</script>

<style>
  .calendar-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f5f5f5;
  }

  .nav-bar {
    display: flex;
    align-items: center;
    height: 90rpx;
    padding: 0 30rpx;
    background-color: #fff;
    border-bottom: 1rpx solid #eee;
  }

  .nav-back {
    width: 60rpx;
  }

  .back-icon {
    font-size: 40rpx;
  }

  .nav-title {
    flex: 1;
    text-align: center;
    font-size: 32rpx;
    font-weight: 500;
  }

  .nav-action {
    width: 60rpx;
    text-align: right;
  }

  .semester-select {
    background-color: #fff;
    padding: 20rpx 30rpx;
    margin-bottom: 20rpx;
  }

  .year-picker {
    text-align: center;
    font-size: 32rpx;
    color: #333;
    margin-bottom: 20rpx;
  }

  .picker-arrow {
    font-size: 24rpx;
    margin-left: 10rpx;
    color: #999;
  }

  .semester-tabs {
    display: flex;
    border: 2rpx solid #1a73e8;
    border-radius: 8rpx;
    overflow: hidden;
  }

  .semester-tab {
    flex: 1;
    text-align: center;
    padding: 16rpx 0;
    font-size: 28rpx;
    color: #1a73e8;
    background-color: #fff;
  }

  .semester-tab.active {
    color: #fff;
    background-color: #1a73e8;
  }

  .calendar-content {
    flex: 1;
    padding: 20rpx;
  }

  .overview-card,
  .important-dates,
  .week-calendar,
  .calendar-legend {
    background-color: #fff;
    border-radius: 12rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;
  }

  .card-title {
    font-size: 32rpx;
    font-weight: bold;
    margin-bottom: 20rpx;
    padding-left: 16rpx;
    border-left: 8rpx solid #1a73e8;
  }

  .date-item {
    display: flex;
    justify-content: space-between;
    padding: 16rpx 0;
    border-bottom: 1rpx solid #f5f5f5;
  }

  .date-label {
    color: #666;
    font-size: 28rpx;
  }

  .date-value {
    color: #333;
    font-size: 28rpx;
  }

  .event-item {
    display: flex;
    padding: 20rpx 0;
    border-bottom: 1rpx solid #f5f5f5;
  }

  .event-date {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100rpx;
    margin-right: 20rpx;
  }

  .date-month {
    font-size: 24rpx;
    color: #999;
  }

  .date-day {
    font-size: 40rpx;
    font-weight: bold;
    color: #333;
  }

  .event-info {
    flex: 1;
  }

  .event-name {
    font-size: 28rpx;
    color: #333;
    margin-bottom: 8rpx;
  }

  .event-desc {
    font-size: 24rpx;
    color: #999;
  }

  .week-item {
    margin-bottom: 20rpx;
    padding: 20rpx;
    background-color: #f8f8f8;
    border-radius: 8rpx;
  }

  .week-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16rpx;
  }

  .week-name {
    font-size: 28rpx;
    font-weight: 500;
    color: #333;
  }

  .week-date {
    font-size: 24rpx;
    color: #999;
  }

  .week-event-item {
    display: flex;
    align-items: center;
    margin-top: 10rpx;
  }

  .event-tag {
    padding: 4rpx 12rpx;
    border-radius: 4rpx;
    font-size: 24rpx;
    color: #fff;
    margin-right: 10rpx;
  }

  .event-title {
    font-size: 26rpx;
    color: #666;
  }

  .legend-list {
    display: flex;
    flex-wrap: wrap;
  }

  .legend-item {
    display: flex;
    align-items: center;
    width: 50%;
    margin-bottom: 16rpx;
  }

  .legend-color {
    width: 32rpx;
    height: 32rpx;
    border-radius: 4rpx;
    margin-right: 10rpx;
  }

  .legend-text {
    font-size: 26rpx;
    color: #666;
  }
</style>