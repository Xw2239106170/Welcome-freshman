export default {
  // 为当前模块开启命名空间
  namespaced: true,

  // 模块的 state 数据
  state: () => ({
    rank: 1,
    experience: 20,
    isShow: true,
    content: [{
        iconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/b0590a2c-37a3-44a7-88f9-137477b98198.png',
        selectedIconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/b0590a2c-37a3-44a7-88f9-137477b98198.png',
        text: '地图',
        active: false
      },
      {
        iconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/4d7ac5ac-896f-4900-994f-4a9367bf4bae.png',
        selectedIconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/4d7ac5ac-896f-4900-994f-4a9367bf4bae.png',
        text: '闯关',
        active: false
      }, {
        iconPath: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/63c0c3da-2268-473b-b0f2-c46ff2ce6a22.png",
        selectedIconPath: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/63c0c3da-2268-473b-b0f2-c46ff2ce6a22.png",
        text: '帮派',
        active: false
      }, {
        iconPath: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/47b0f3b4-d426-4512-afa9-284ed58707fc.png",
        selectedIconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/47b0f3b4-d426-4512-afa9-284ed58707fc.png',
        text: '迎新',
        active: false
      }
    ],
  }),

  // 模块的 mutations 方法
  mutations: {
    // 修改按钮的方法
    triggerChange(state, e) {
      state.content.forEach(item => {
        if (item.text === e.item.text) {
          item.active = true; // 切换当前按钮为选中状态
        } else {
          item.active = false; // 其他按钮为非选中状态
        }
      })
    },
    changeShow(state) {
      state.isShow = true
    },
    addexperience(state) {
      state.experience += 5
      if (state.experience >= 100) {
        state.rank += 1
        state.experience = 0
      }
    }
  },

  // 模块的 getters 属性
  getters: {},
}