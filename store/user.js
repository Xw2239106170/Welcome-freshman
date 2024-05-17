export default {
  // 为当前模块开启命名空间
  namespaced: true,

  // 模块的 state 数据
  state: () => ({
    lottery: 1,
    token: uni.getStorageSync('token') || '',
    userInfo: {
      name: '徐多多',
      num: '2212040252',
      age: '20',
      college: '计算机学院',
      pro: '软件工程二班',
      score: 120
    },
    UserAvatar: uni.getStorageSync('userAvatar') || '',
    giftNum: 0,
    faceImage: uni.getStorageSync('userFace') || '',
    payNeed: [{
      project: '书本费',
      money: 2000,
      money_state: false,
      id: 0,
      pay_state: false
    }, {
      project: '住宿费',
      money: 1200,
      money_state: false,
      id: 1,
      pay_state: false
    }, {
      project: '空调费',
      money: 800,
      money_state: false,
      id: 2,
      pay_state: false
    }],
    userDorm: uni.getStorageSync('userDorm') || '{}',
    userPhoto: ''
  }),

  // 模块的 mutations 方法
  mutations: {
    getUserPhoto(state, value) {
      console.log("user" + value)
      this.userPhoto = value
    },
    addLottery(state) {
      state.lottery += 1
    },
    subLottery(state) {
      if (state.lottery === 0) return
      state.lottery -= 1
    },
    getUserAvatar(state, value) {
      console.log(value)
      state.UserAvatar = value
      uni.setStorageSync('userAvatar', state.UserAvatar)
    },
    changeGiftNum(state) {
      state.giftNum += 1
    },
    // 全选按钮
    changeRadio(state) {
      const allSelected = state.payNeed.every(item => item.money_state === true);
      if (allSelected) {
        state.payNeed.forEach(item => {
          item.money_state = false;
        });
      } else {
        state.payNeed.forEach(item => {
          item.money_state = true;
        });
      }
    },
    // 切换部分按钮
    tabRadio(state, id) {
      const res = state.payNeed.find(item => item.id === id)
      res.money_state = !res.money_state
    },
    // 获得人脸头像
    getFaceImage(state, value) {
      state.faceImage = value
      uni.setStorageSync('userFace', state.faceImage)
    },
    // 存储用户选的宿舍的信息
    userDormInfo(state, obj) {
      state.userDorm = obj
      uni.setStorageSync('userDorm', state.userDorm)
    },
    getToken(state, value) {
      state.token = value
      uni.setStorageSync('token', state.token)
    },
    // 退出登录板块
    clearToken(state) {
      state.token = ''
      uni.setStorageSync('token', state.token)
    },
    // 更新缴费信息
    changeMoneyState(state) {
      state.payNeed.forEach(item => {
        item.pay_state = true
      })
    }

  },

  // 模块的 getters 属性
  getters: {
    // 总按钮的属性
    allRadio(state) {
      return state.payNeed.every(item => item.money_state === true)
    },
    sumTuition(state) {
      const sum = state.payNeed.reduce((total, item) => {
        if (item.money_state === true) {
          return total + item.money
        }
        return total
      }, 0)
      return sum
    },
    backToken(state) {
      return state.token
    },
    backStated(state) {
      return state.payNeed.filter(item => item.pay_state == true)
    },
    todoNeed(state) {
      return state.payNeed.filter(item => item.pay_state === false)
    },
    doneNeed(state) {
      return state.payNeed.every(item => item.pay_state == true)
    }
  },
}