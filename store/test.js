export default {
  // 为当前模块开启命名空间
  namespaced: true,

  // 模块的 state 数据
  state: () => ({
    marker: [{
      id: 1,
      latitude: 29.151725947778164,
      longitude: 110.45437886984101,
      iconPath: '../../static/location.png',
      width: 20,
      height: 20,
      joinCluster: true, // 指定了该参数才会参与聚合
      label: {
        width: 50,
        height: 30,
        borderWidth: 1,
        borderRadius: 10,
        bgColor: '#ffffff',
        content: `多多打卡`
      }
    }],
    myTask: [],
    // JSON.parse(uni.getStorageSync('tasks') || '[]') ||
    tasks: [],
    addImage: [],
    newImage: '',
    // 打卡展示JSON.parse(uni.getStorageSync('postImage') || '') || 
    pageList: [{
        love: 10,
        commentList: [{
          avatar: "https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/6aa49696-9544-424e-8670-895c49b49310.png",
          name: '小徐',
          comment: "当樱花盛开时，仿佛春天的精灵在张家界学院的校园里起舞。打卡张院樱花路",
          time: '9-11 12.22'
        }, {
          avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.dGVDL6c7BMZisHshtYWQzgHaEo?w=295&h=184&c=7&r=0&o=5&dpr=2&pid=1.7',
          name: '小猫',
          comment: '这么好看不要命啦😀',
          time: ' 3-30 17:04'
        }],
        iconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/9256794b-a49f-4664-add4-6d680c91171d.jpg',
        text: '报道完成啦，从今天开始我也是大学生啦',
        index: 0,
        current: '9月11日 8:20',
        avatar: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/6aa49696-9544-424e-8670-895c49b49310.png',
        name: '小徐'
      },
      {
        commentList: [],
        love: 2,
        iconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/274e065f-1827-446d-8cbc-578598a3c173.jpg',
        text: '校园内散落着各式各样的建筑，有现代化的教学楼、图书馆、实验室，也有古典的楼宇和庭院，每一处都散发着浓厚的文化气息。',
        index: 1,
        current: '9月11日 9:20',
        avatar: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/c937836a-bc8d-4338-adb5-42e556ef6f27.png',
        name: '小李'
      },
      {
        commentList: [],
        love: 4,
        iconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/da5f0dd2-2fd0-404b-a90c-bf893a878e46.jpg',
        text: '张家界学院的小路宁静而美丽。阳光透过树叶的缝隙洒在路面上，投下斑驳的光影，树荫下凉爽宜人。',
        index: 2,
        current: '9月12日 8:21',
        avatar: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/9a285c52-b144-41c5-9a8a-847f2e91b2fd.png',
        name: '小明'
      },
      {
        commentList: [],
        love: 0,
        iconPath: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/cad62dd2-02bd-4512-897d-c296d1b74849.jpg',
        text: '夜幕降临，张家界学院的校园变得格外迷人。灯火辉煌，星星点点的灯光点缀在树梢上，照亮了整个校园',
        index: 3,
        current: '9月16日 7:20',
        avatar: 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/5eb91b17-d957-4100-9178-c6d4d434951b.png',
        name: '小周'
      },
    ]
  }),

  // 模块的 mutations 方法
  mutations: {
    changeTask(state, value) {
      // console.log(value)
      state.tasks = value
      console.log(state.tasks)
      uni.setStorageSync('tasks', JSON.stringify(state.tasks))
    },
    // 上传打卡照片
    getAddImage(state, obj) {
      // console.log(obj)
      state.addImage.push(obj)
      state.newImage = obj.image
      // uni.setStorageSync('TestImage', JSON.stringify(state.addImage))
    },
    // 获取图片
    backImage(state, id) {
      // const res = JSON.parse(uni.getStorageSync('TestImage') || '')
      // console.log(res.find(item => item.id === id))

      const csc = res.find(item => item.id === id)
      if (!csc) return
      console.log(csc)
      state.newImage = res.find(item => item.id === id).image
    },
    // 清空之前的image图片

    disImage(state) {
      state.newImage = ''
    },
    // 发布打卡任务
    postImage(state, obj) {
      // console.log(obj)
      const res = {
        iconPath: obj.image,
        text: obj.text,
        index: Math.floor(Math.random() * 100),
        current: obj.time,
        avatar: obj.avatar,
        name: obj.name,
        commentList: obj.commentList,
        love: obj.love
      }
      // console.log(res)
      state.pageList.unshift(res)
      // 自己的足迹
      state.myTask.unshift(res)
      uni.setStorageSync('myTask', JSON.stringify(state.myTask))
      uni.setStorageSync('postImage', JSON.stringify(state.pageList))
      // console.log(state.pageList)
    },
    // 完成任务开始修改
    finishTest(state, value) {
      const id = Number(value)
      const res = state.tasks.find(item => item.id === id)
      res.done = 1
      console.log(state.tasks.find(item => item.id === id))
      // uni.setStorageSync('tasks', JSON.stringify(state.tasks))
    },
    addMarkers(state, value) {
      console.log(value)
      state.marker.push({
        id: 2 + value,
        latitude: 29.150243132278238 + value,
        longitude: 110.45587916835063 + value,
        iconPath: '../../static/location.png',
        width: 20,
        height: 20,
        joinCluster: true, // 指定了该参数才会参与聚合
        label: {
          width: 50,
          height: 30,
          borderWidth: 1,
          borderRadius: 10,
          bgColor: '#ffffff',
          content: `小徐打卡`
        }
      })
    }
  },

  // 模块的 getters 属性
  getters: {
    todoTasks(state) {
      return state.tasks.filter(task => task.done !== '1');
    },
    doneTasks(state) {
      return state.tasks.filter(task => task.done === '1');
    },
    backTask(state) {
      return state.tasks.length
    }
  },
  actions: {
    async getTasksList(context) {
      const res = await uni.$http.get('/task')
      const taskList = res.data.data
      context.commit('changeTask', taskList)
    }
  }
}