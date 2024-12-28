<template>
  <view>
    <uni-fab :pattern="pattern" :content="content" horizontal="left" vertical="bottom" @trigger="trigger"></uni-fab>

    <uni-popup ref="popup" type="dialog" class="uni-popup" animation="true">
      <uni-popup-dialog mode="base" message="成功消息" :duration="2000" :before-close="true" @close="close"
        @confirm="confirm" title="未完成任务">
        <view class="popup-item">
          <view v-for="task in todoTasks" :key="task.id" class="task-item"
            style="margin-top: 20rpx; background-color: #fff;">
            <view class="task-left">
              <view class="task-name">{{ task.name }}</view>
              <view class="task-description">{{ task.neirong }}</view>
            </view>
            <view class="task-right">
              <button type="primary" class="task-button" @click="goTestDetail(task.id)">打卡</button>
            </view>
          </view>
        </view>
      </uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
  export default {
    computed: {
      ...mapState('button', ['content']),
      ...mapGetters('test', ['todoTasks', 'doneTasks', 'backTask']),
      ...mapState('user', ['faceImage'])
    },
    data() {
      return {
        isDropdownOpen: false,
        pattern: {
          buttonColor: '#D8B774',
          backgroundColor: '#DBF2FB',
          icon: 'paperplane'
        },
        tasks: [{
            name: '任务1',
            completed: false
          },
          {
            name: '任务2',
            completed: true
          },
          {
            name: '任务3',
            completed: false
          }
        ]
      };
    },
    onReady() {
      // console.log(this.'todoTasks)
      this.getTasksList()
    },
    onLoad() {
      // console.log(this.todoTasks)
      this.getTasksList()
    },
    methods: {
      ...mapMutations('button', ['triggerChange']),
      ...mapMutations('test', ['changeTask']),
      // ...mapActions('test', ['getTasksList']),
      async getTasksList() {
        const res = await uni.$http.get('/task')
        const taskList = res.data.data
        this.changeTask(taskList)
      },
      // 去任务详细页面
      goTestDetail(id) {
        console.log(this.todoTasks)
        if (!this.faceImage) return uni.$showMsg('请先上传人脸哦~')
        // console.log(this.todoTasks)
        uni.navigateTo({
          url: '/subpkg/detaitest/detaitest?Testid=' + id
        })
        this.close()
      },
      trigger(e) {
        this.triggerChange(e)

        if (e.item.text === '闯关') {
          // this.$refs.popup.open()
          uni.navigateTo({
            url: '/subpkg/persondetail/persondetail?id=' + '1'
          })
          return
        }
        if (e.item.text === '地图') {
          uni.navigateTo({
            url: '/subpkg/schoolmap/schoolmap?id=' + '0'
          })
          return
        }
        if (e.item.text === '帮派') {
          uni.navigateTo({
            url: '/subpkg/persondetail/persondetail?id=' + '3'
          })
          return
        }
        if (e.item.text === '咨询') {

          uni.navigateTo({
            url: '/subpkg/persondetail/persondetail?id=' + '8'
          })
          return
        }
      },
      confirm(value) {
        console.log(this.todoTasks)
        this.$refs.popup.close()
      },
      close() {
        this.$refs.popup.close()
      },
    }
  };
</script>

<style lang="scss">
  .popup-content {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    /* 添加边框样式 */
    border-radius: 10px;
    /* 添加边框圆角 */
  }

  .uni-popup {
    // width: 400px;
    // height: 500px;
    // background-color: pink;
  }

  .task-list {
    margin-top: 20px;
  }

  .task-item {
    padding: 10px;
    box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .task-item.done {
    text-decoration: line-through;
    color: #999;
  }

  .task-left {
    flex: 1;
    padding-right: 10px;
  }

  .task-right {
    display: flex;
    align-items: center;
  }

  .task-button {
    background-color: #409eff;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  .task-name {
    font-weight: bold;
  }

  .task-description {
    color: #666;
  }

  /* 空空如也 */
  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    height: 200px;
  }

  .empty-cart .empty-img {
    width: 90px;
    height: 90px;
  }

  .empty-cart .tip-text {
    font-size: 12px;
    color: gray;
    margin-top: 15px;
  }
</style>