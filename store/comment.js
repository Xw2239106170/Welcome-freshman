export default {
  namespaced: true,
  state: () => ({
    backCommentLength: 0,
    commentList: [],
    listLength: 0
  }),
  mutations: {
    LoveNumber(state, value) {
      console.log(value)
      state.loveOuter = value;
    },
    getListLength(state, value) {
      state.listLength = value
    }
  },
  getters: {
    backCommentLength(state) {
      return state.commentList.length;
    },
  },
  actions: {
    pushCommentList({
      state,
      rootState
    }, obj) {
      // state.commentList.push(obj.value);
      const res = rootState.test.pageList.find(item => item.index === obj.id);
      res.commentList.push(obj.value);
      this.commit('comment/getListLength', res.commentList.length);
    },
    addLoveNumber({
      state,
      rootState
    }, obj) {
      const res = rootState.test.pageList.find(item => item.index === obj.id);
      res.love += obj.value;
      // this.commit('comment/LoveNumber', state.love);
    }
  }
};