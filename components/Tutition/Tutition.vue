<template>
  <view class="container">
    <!-- 页面背景 -->
    <view class="header-bg"></view>

    <!-- 主要内容区 -->
    <view class="content">
      <!-- 顶部信息 -->
      <view class="page-header">
        <text class="page-title">缴费中心</text>
        <text class="page-desc">2024学年学费缴纳</text>
      </view>

      <!-- 表单区域 -->
      <view class="form-box">
        <!-- 学生信息 -->
        <view class="form-item">
          <text class="form-label">学生姓名</text>
          <input type="text" v-model="formData.studentName" placeholder="请输入姓名" placeholder-style="color: #999"
            class="form-input" />
        </view>

        <view class="form-item">
          <text class="form-label">学号</text>
          <input type="text" v-model="formData.studentId" placeholder="请输入学号" placeholder-style="color: #999"
            class="form-input" />
        </view>

        <view class="form-item">
          <text class="form-label">年级</text>
          <picker @change="handleGradeChange" :value="gradeIndex" :range="grades" class="picker-box">
            <view class="picker-value">
              <text :class="formData.grade ? 'selected-text' : 'placeholder-text'">
                {{ formData.grade || '请选择年级' }}
              </text>
              <text class="picker-arrow">></text>
            </view>
          </picker>
        </view>

        <view class="form-item">
          <text class="form-label">学期</text>
          <picker @change="handleSemesterChange" :value="semesterIndex" :range="semesters" class="picker-box">
            <view class="picker-value">
              <text class="selected-text">{{ formData.semester }}</text>
              <text class="picker-arrow">></text>
            </view>
          </picker>
        </view>

        <!-- 金额展示 -->
        <view class="amount-section">
          <view class="amount-title">应缴金额</view>
          <view class="amount-value">
            <text class="amount-symbol">¥</text>
            <text class="amount-number">{{ formData.amount.toLocaleString() }}</text>
          </view>
        </view>

        <!-- 支付方式选择 -->
        <view class="payment-section">
          <text class="section-title">选择支付方式</text>
          <view class="payment-options">
            <view v-for="(item, index) in paymentMethods" :key="index" class="payment-item"
              :class="{'payment-item-active': formData.paymentMethod === item.method}"
              @tap="selectPayment(item.method)">
              <image :src="item.image" class="payment-icon"></image>
              <text class="payment-name">{{ item.method }}</text>
            </view>
          </view>
        </view>

        <!-- 缴费说明 -->
        <view class="notice-box">
          <view class="notice-item">
            <text class="dot">•</text>
            <text class="notice-text">请认真核对个人信息及缴费金额</text>
          </view>
          <view class="notice-item">
            <text class="dot">•</text>
            <text class="notice-text">支付完成后将自动生成电子收据</text>
          </view>
          <view class="notice-item">
            <text class="dot">•</text>
            <text class="notice-text">如有问题请联系财务处</text>
          </view>
        </view>
      </view>

      <!-- 底部按钮 -->
      <view class="bottom-btn-area">
        <button class="submit-btn" @tap="handleSubmit">
          确认支付 ¥{{ formData.amount.toLocaleString() }}
        </button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          studentName: '',
          studentId: '',
          grade: '',
          semester: '第一学期',
          amount: 0,
          paymentMethod: '微信支付'
        },
        grades: ['大一', '大二', '大三', '大四'],
        gradeIndex: -1,
        semesters: ['第一学期', '第二学期'],
        semesterIndex: 0,
        paymentMethods: [{
            method: "微信支付",
            image: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/14dd8ad9-385c-4594-838f-93b0e37bd460.png'
          },
          {
            method: "支付宝",
            image: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/1f402a1d-312b-4311-b02f-5328a2c1f748.png'
          }, {
            method: "银行卡",
            image: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/cf4af982-64f0-4f16-a030-3d6e38ee7b5b.png'
          }
        ],
        tuitionRates: {
          '大一': 3000,
          '大二': 4000,
          '大三': 5000,
          '大四': 8000
        }
      }
    },
    methods: {
      handleGradeChange(e) {
        const grade = this.grades[e.detail.value]
        this.gradeIndex = e.detail.value
        this.formData.grade = grade
        this.formData.amount = this.tuitionRates[grade] || 0
      },
      handleSemesterChange(e) {
        this.semesterIndex = e.detail.value
        this.formData.semester = this.semesters[e.detail.value]
      },
      selectPayment(method) {
        this.formData.paymentMethod = method
      },
      handleSubmit() {
        if (!this.formData.studentName || !this.formData.studentId || !this.formData.grade) {
          uni.showToast({
            title: '请填写完整信息',
            icon: 'none'
          })
          return
        }

        uni.showLoading({
          title: '处理中...'
        })

        setTimeout(() => {
          uni.hideLoading()
          uni.showToast({
            title: '支付成功',
            icon: 'success'
          })
        }, 1500)
      }
    }
  }
</script>

<style lang="scss">
  page {
    background-color: #f5f6fa;
  }

  .container {
    min-height: 100vh;
    position: relative;
  }

  .header-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 400rpx;
    background: linear-gradient(180deg, #4080ff 0%, #466dff 100%);
    border-radius: 0 0 50rpx 50rpx;
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 40rpx 30rpx;
  }

  .page-header {
    padding: 40rpx 0;
    text-align: center;
    color: #fff;

    .page-title {
      font-size: 48rpx;
      font-weight: bold;
      display: block;
      margin-bottom: 16rpx;
    }

    .page-desc {
      font-size: 28rpx;
      opacity: 0.9;
    }
  }

  .form-box {
    background: #fff;
    border-radius: 24rpx;
    padding: 40rpx 30rpx;
    margin-top: 40rpx;
    box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
  }

  .form-item {
    margin-bottom: 40rpx;

    .form-label {
      font-size: 28rpx;
      color: #333;
      margin-bottom: 16rpx;
      display: block;
      font-weight: 500;
    }
  }

  .form-input {
    width: 100%;
    height: 90rpx;
    background: #f8f9fc;
    border-radius: 12rpx;
    padding: 0 30rpx;
    font-size: 30rpx;
    color: #333;
  }

  .picker-box {
    .picker-value {
      height: 90rpx;
      background: #f8f9fc;
      border-radius: 12rpx;
      padding: 0 30rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .selected-text {
        font-size: 30rpx;
        color: #333;
      }

      .placeholder-text {
        font-size: 30rpx;
        color: #999;
      }

      .picker-arrow {
        color: #999;
        font-family: "宋体";
        transform: rotate(90deg);
      }
    }
  }

  .amount-section {
    margin: 50rpx 0;
    text-align: center;

    .amount-title {
      font-size: 28rpx;
      color: #666;
      margin-bottom: 20rpx;
    }

    .amount-value {
      .amount-symbol {
        font-size: 40rpx;
        color: #333;
        margin-right: 8rpx;
      }

      .amount-number {
        font-size: 60rpx;
        color: #333;
        font-weight: bold;
      }
    }
  }

  .payment-section {
    margin-bottom: 50rpx;

    .section-title {
      font-size: 28rpx;
      color: #333;
      margin-bottom: 30rpx;
      display: block;
      font-weight: 500;
    }

    .payment-options {
      display: flex;
      justify-content: space-between;
    }

    .payment-item {
      flex: 1;
      height: 140rpx;
      background: #f8f9fc;
      margin: 0 10rpx;
      border-radius: 12rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &-active {
        background: #edf3ff;
        border: 2rpx solid #4080ff;
      }

      .payment-icon {
        width: 60rpx;
        height: 60rpx;
        margin-bottom: 12rpx;
      }

      .payment-name {
        font-size: 24rpx;
        color: #666;
      }
    }
  }

  .notice-box {
    background: #f8f9fc;
    padding: 30rpx;
    border-radius: 12rpx;

    .notice-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 16rpx;

      &:last-child {
        margin-bottom: 0;
      }

      .dot {
        color: #666;
        margin-right: 12rpx;
      }

      .notice-text {
        font-size: 24rpx;
        color: #666;
        flex: 1;
      }
    }
  }

  .bottom-btn-area {
    margin-top: 60rpx;
    padding: 0 30rpx 40rpx;
  }

  .submit-btn {
    width: 100%;
    height: 90rpx;
    line-height: 90rpx;
    background: linear-gradient(90deg, #4080ff 0%, #466dff 100%);
    border-radius: 45rpx;
    color: #fff;
    font-size: 32rpx;
    font-weight: 500;

    &:active {
      opacity: 0.9;
    }
  }
</style>