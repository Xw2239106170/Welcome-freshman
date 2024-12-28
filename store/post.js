export default {
  // 为当前模块开启命名空间
  namespaced: true,

  // 模块的 state 数据
  state: () => ({
    postList: []
  }),

  // 模块的 mutations 方法
  mutations: {
    AssignPostList(state, array) {
      state.postList = array
    }
  },

  // 模块的 getters 属性
  getters: {},
  actions: {
    async getPostList(context) {
      const res = await uni.$http.get('/api/resources')
      context.commit("AssignPostList", res.data)
    }
  }
}