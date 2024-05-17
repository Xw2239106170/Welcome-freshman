export default {
  // 为当前模块开启命名空间
  namespaced: true,

  // 模块的 state 数据
  state: () => ({
    message: JSON.parse(uni.getStorageSync('goods_news') || '[]'),
    notice: ['每天登录都可以领取一次抽奖机会哦~', '积分榜第一名开学后可以获取神秘大礼包一份哦~', '完成打卡任务也可也获得抽奖机会宝~']
  }),

  // 模块的 mutations 方法
  mutations: {
    pushMessage(state, obj) {
      console.log(obj)
      state.message.unshift(obj)
      uni.setStorageSync('goods_news', JSON.stringify(state.message))
    },
    changeState(state, id) {
      const res = state.message.find(item => item.id === id)
      if (!res) return
      res.state = false
      uni.setStorageSync('goods_news', JSON.stringify(state.message))
    },
    pushNotice(state, value) {
      console.log(value)
      state.notice.unshift(value)
    }
  },

  // 模块的 getters 属性
  getters: {},
}