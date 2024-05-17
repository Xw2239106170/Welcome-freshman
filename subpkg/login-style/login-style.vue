<template>
  <view class="style-box">
    <!-- 图标 -->
    <view class="shcool-logo">
      <image src="../../static/images/school-logo.jpg" mode="" class="logo"></image>
    </view>
    <!-- 本科生 -->
    <view class="style-graduate" v-if="indicate">
      <uni-forms :modelValue="formData" label-position="top" :rules="rules" ref="form">
        <uni-forms-item label="姓名" name="userName">
          <uni-easyinput type="text" v-model="formData.userName" placeholder="请输入姓名" />
        </uni-forms-item>
        <uni-forms-item label="身份证号" name="userId">
          <uni-easyinput type="text" v-model="formData.userId" placeholder="请输入身份证" />
        </uni-forms-item>
        <uni-forms-item label="密码" name="password">
          <uni-easyinput type="text" v-model="formData.password" placeholder="请输入密码" />
        </uni-forms-item>
      </uni-forms>
    </view>
    <!-- 研究生 -->
    <view class="style-graduate" v-else>
      <uni-forms :modelValue="formData" label-position="top" :rules="rules">
        <uni-forms-item label="研究生编号" name="userNumber">
          <uni-easyinput type="text" v-model="formData.userNumber" placeholder="请输入编号" />
        </uni-forms-item>
        <uni-forms-item label="密码" name="password">
          <uni-easyinput type="text" v-model="forData.password" placeholder="请输入密码" />
        </uni-forms-item>
      </uni-forms>
    </view>
    <button type="primary" class="submit-login" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">登录</button>

    <!-- 进度条 -->
    <!-- <loginProgress></loginProgress> -->

    <view class="login-bottom">
      <view class="word-ch">
        张家界学院迎新服务系统
      </view>
      <view class="word-en">
        Zhangjiajie University Service System
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters('user', ['backToken'])
    },
    data() {
      return {
        indicate: true,
        formData: {
          // 本科生姓名
          userName: '',
          // 研究生编号
          userNumber: '',
          // 统一的名字
          password: '',
          userId: ''
        },
        avatar: ''
      };
    },
    onLoad(option) {
      // 选中显示的东西
      if (option.style === '2') {
        this.indicate = false
      }
    },
    methods: {
      ...mapMutations('user', ['getUserAvatar', 'getToken']),
      async onChooseAvatar(e) {
        if (!e) return
        // 存头像
        this.getUserAvatar(e.detail.avatarUrl)
        // 登录
        // console.log(this.formData.userName)
        // console.log(this.formData.password)
        const res = await uni.$http.post('/login', {
          name: this.formData.userName,
          id: this.formData.userId,
          password: this.formData.password
        })
        console.log(res)
        uni.setStorageSync('userInfo', {
          name: this.formData.userName,
          id: this.formData.userId,
          password: this.formData.password
        })
        // console.log(res)
        if (res.data.code === 0) {
          return uni.$showMsg(res.data.msg)
        }
        this.getToken(res.data.data)
        uni.switchTab({
          url: '/pages/test/test'
        })
        uni.showToast({
          title: "登录成功！！",
          icon: 'none'
        })
      },
      // async userLogin() {
      //   const res = await uni.$http.post('/login')
      //   console.log(res)
      // }
    }
  }
</script>

<style lang="scss">
  .style-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    .style-graduate {
      margin-top: 20px;
      border-top: 1px solid #efefef;
      border-bottom: 1px solid #efefef;
      width: 100%;
    }

    // 按钮
    .submit-login {
      width: 100%;
      margin-top: 30px;
      border-radius: 50px;
    }

    // 学校校徽
    .shcool-logo {
      height: 300rpx;
      width: 310rpx;

      .logo {
        width: 100%;
        height: 100%;
      }
    }

    // 底部样式
    // 底部信息
    .login-bottom {
      width: 100%;
      color: #ccc;
      position: fixed;
      bottom: 5px;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>