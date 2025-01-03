// 1. 导入 Vue 和 Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import button from "./button.js"
import user from './user.js'
import test from './test.js'
import message from './message.js'
import comment from './comment.js'
import post from './post.js'

// 2. 将 Vuex 安装为 Vue 的插件
Vue.use(Vuex)

// 3. 创建 Store 的实例对象
const store = new Vuex.Store({
  // TODO：挂载 store 模块
  modules: {
    button,
    user,
    test,
    message,
    comment,
    post
  },
})

// 4. 向外共享 Store 的实例对象
export default store