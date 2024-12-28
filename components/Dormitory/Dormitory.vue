<template>
  <view class="container">
    <!-- 顶部进度条 -->
    <view class="progress-box">
      <view class="progress-text">
        <text>{{ currentStep + 1 }}/{{ questions.length }}</text>
        <text>{{ progress }}%</text>
      </view>
      <view class="progress-bar">
        <view class="progress-inner" :style="{ width: progress + '%' }"></view>
      </view>
    </view>

    <!-- 问题卡片 -->
    <view class="question-card">
      <view class="question-header">
        <text class="emoji">{{ currentQuestion.emoji }}</text>
        <text class="title">{{ currentQuestion.title }}</text>
        <text class="subtitle">{{ currentQuestion.subtitle }}</text>
      </view>

      <!-- 选项列表 -->
      <view class="options-list">
        <view class="option-item" v-for="(option, index) in currentQuestion.options" :key="index"
          :class="{ active: answers[currentQuestion.id] === option.value }" @tap="selectOption(option.value)">
          <text class="option-label">{{ option.label }}</text>
          <text class="option-desc">{{ option.desc }}</text>
        </view>
      </view>
    </view>

    <!-- 底部按钮 -->
    <view class="bottom-btns" v-if="currentStep === questions.length - 1">
      <button class="submit-btn" :disabled="!isComplete" @tap="handleSubmit">找到我的室友</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        currentStep: 0,
        answers: {},
        questions: [{
            id: 'sleep',
            emoji: '🌙',
            title: '你的作息时间',
            subtitle: '选择最符合的睡觉时间',
            options: [{
                value: 'early',
                label: '养生派',
                desc: '22:00前睡觉'
              },
              {
                value: 'normal',
                label: '规律派',
                desc: '22:00-23:00睡觉'
              },
              {
                value: 'late',
                label: '夜猫子',
                desc: '23:00-24:00睡觉'
              },
              {
                value: 'veryLate',
                label: '熬夜王',
                desc: '00:00后睡觉'
              }
            ]
          },
          {
            id: 'study',
            emoji: '📚',
            title: '学习习惯',
            subtitle: '你平时在哪里学习？',
            options: [{
                value: 'dorm',
                label: '宿舍派',
                desc: '喜欢在宿舍学习'
              },
              {
                value: 'library',
                label: '图书馆派',
                desc: '主要在图书馆'
              },
              {
                value: 'mix',
                label: '混合派',
                desc: '哪里都可以'
              }
            ]
          },
          {
            id: 'clean',
            emoji: '✨',
            title: '整洁程度',
            subtitle: '选择符合的整理习惯',
            options: [{
                value: 'neat',
                label: '极简主义',
                desc: '保持整洁干净'
              },
              {
                value: 'normal',
                label: '正常水平',
                desc: '基本整理整洁'
              },
              {
                value: 'casual',
                label: '随性派',
                desc: '不太在意整洁'
              }
            ]
          },
          {
            id: 'social',
            emoji: '👥',
            title: '社交风格',
            subtitle: '你期望的室友互动方式',
            options: [{
                value: 'active',
                label: '社交达人',
                desc: '经常交流互动'
              },
              {
                value: 'moderate',
                label: '平衡派',
                desc: '适度交流'
              },
              {
                value: 'quiet',
                label: '安静派',
                desc: '喜欢独处'
              }
            ]
          }
        ]
      }
    },

    computed: {
      currentQuestion() {
        return this.questions[this.currentStep]
      },
      progress() {
        return Math.round(((this.currentStep + 1) / this.questions.length) * 100)
      },
      isComplete() {
        return Object.keys(this.answers).length === this.questions.length
      }
    },

    methods: {
      selectOption(value) {
        this.$set(this.answers, this.currentQuestion.id, value)

        // 延迟后自动进入下一题
        if (this.currentStep < this.questions.length - 1) {
          setTimeout(() => {
            this.currentStep++
          }, 300)
        }
      },

      handleSubmit() {
        if (!this.isComplete) return

        // 这里添加提交逻辑
        uni.showLoading({
          title: '正在匹配...'
        })

        // 模拟请求
        setTimeout(function() {
          uni.hideLoading();
          // 提示信息
          uni.showModal({
            title: "分配情况",
            content: '宿舍：菊园b座613，推荐舍友：小周，小廖，小刘',
            showCancel: false, // 是否显示取消按钮
            confirmText: '确定', // 确认按钮的文字，可根据实际情况修改
            success: (res) => {
              if (res.confirm) {

                // 在这里添加跳转到领取小礼物页面的逻辑
              }
            }
          });
        }, 3000);
      }
    }
  }
</script>

<style lang="scss">
  .container {
    min-height: 100vh;
    background: linear-gradient(135deg, #e0e7ff 0%, #ede9fe 100%);
    padding: 30rpx;
  }

  .progress-box {
    margin-bottom: 40rpx;

    .progress-text {
      display: flex;
      justify-content: space-between;
      color: #666;
      font-size: 28rpx;
      margin-bottom: 16rpx;
    }

    .progress-bar {
      height: 8rpx;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 4rpx;
      overflow: hidden;

      .progress-inner {
        height: 100%;
        background: linear-gradient(90deg, #818cf8 0%, #a78bfa 100%);
        transition: width 0.3s ease;
      }
    }
  }

  .question-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 24rpx;
    padding: 40rpx;
    margin-bottom: 40rpx;

    .question-header {
      text-align: center;
      margin-bottom: 40rpx;

      .emoji {
        font-size: 80rpx;
        margin-bottom: 20rpx;
        display: block;
      }

      .title {
        font-size: 40rpx;
        font-weight: bold;
        color: #333;
        margin-bottom: 12rpx;
        display: block;
      }

      .subtitle {
        font-size: 28rpx;
        color: #666;
        display: block;
      }
    }
  }

  .options-list {
    .option-item {
      background: #fff;
      border-radius: 16rpx;
      padding: 30rpx;
      margin-bottom: 20rpx;
      transition: all 0.2s ease;

      &.active {
        background: #818cf8;
        transform: scale(1.02);

        .option-label,
        .option-desc {
          color: #fff;
        }
      }

      .option-label {
        font-size: 32rpx;
        font-weight: bold;
        color: #333;
        margin-bottom: 8rpx;
        display: block;
      }

      .option-desc {
        font-size: 26rpx;
        color: #666;
      }
    }
  }

  .submit-btn {
    background: linear-gradient(90deg, #818cf8 0%, #a78bfa 100%);
    color: #fff;
    border: none;
    border-radius: 100rpx;
    font-size: 32rpx;
    padding: 24rpx;
    width: 100%;

    &:disabled {
      opacity: 0.5;
    }
  }
</style>