<template>
  <view class="preview-box">
    <!-- 标题 -->
    <view class="title">软件工程专业预览</view>
    <!-- 简介 -->
    <view class="intro">
      软件工程是一门研究和应用如何以系统化、规范化、可定量的过程化方法开发和维护软件的学科。
      学习软件工程需要掌握编程、数据库、系统设计等技能，是信息技术领域的重要学科之一。
    </view>
    <!-- 课程 -->
    <view class="course">
      <view class="course-title">主要课程：</view>
      <swiper class="course-list" :indicator-dots="false" :autoplay="true" :interval="3000">
        <swiper-item v-for="(course, index) in courseList" :key="index">
          <view class="course-item" :style="{ 'background-color': getColor(index) }">{{ course }}</view>
        </swiper-item>
      </swiper>
    </view>
    <!-- 就业方向 -->
    <view class="employment">
      <view class="employment-title">就业方向：</view>
      <swiper class="employment-list" :indicator-dots="false" :autoplay="true" :interval="3000">
        <swiper-item v-for="(employment, index) in employmentList" :key="index">
          <view class="employment-item" :style="{ 'background-color': getColor(index) }">{{ employment }}</view>
        </swiper-item>
      </swiper>
    </view>
    <!-- 学习网站 -->
    <view class="study-websites">
      <view class="study-title">学习网站推荐：</view>
      <view class="website-list">
        <view class="website-item" v-for="(website, index) in websiteList" :key="index">
          <!--    <navigator :url="website.url">{{ website.name }}</navigator> -->
          <uni-link :href='website.url'>{{website.name}}</uni-link>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        courseList: [
          '软件需求工程',
          '软件设计与架构',
          '软件测试与质量保证',
          '软件项目管理',
          '人机交互技术'
        ],
        employmentList: [
          '软件工程师',
          '系统架构师',
          '软件测试工程师',
          '项目经理',
          'UI/UX设计师'
        ],
        colors: ['#FFC0CB', '#FFA07A', '#F08080', '#90EE90', '#ADD8E6'],
        websiteList: [{
            name: 'GitHub',
            url: 'https://github.com/'
          },
          {
            name: 'Stack Overflow',
            url: 'https://stackoverflow.com/'
          },
          {
            name: 'Coursera',
            url: 'https://www.coursera.org/'
          },
          {
            name: 'edX',
            url: 'https://www.edx.org/'
          },
          {
            name: 'Udemy',
            url: 'https://www.udemy.com/'
          }
        ]
      };
    },
    methods: {
      getColor(index) {
        return this.colors[index % this.colors.length];
      }
    }
  }
</script>

<style lang="scss">
  .preview-box {
    padding: 20px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    background: linear-gradient(to bottom, #6cc4cb, white);
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .intro {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }

  .course-title,
  .employment-title,
  .study-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .course-list,
  .employment-list {
    height: 100px;
    margin-bottom: 20px;
  }

  .course-item,
  .employment-item {
    font-size: 14px;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.5s ease-in;
  }

  .study-websites {
    margin-bottom: 20px;
  }

  .website-list {
    display: flex;
    flex-wrap: wrap;
  }

  .website-item {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  uni-link {
    color: #333;
    text-decoration: none;
    transition: color 0.3s;
  }

  uni-link:hover {
    color: #007bff;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>