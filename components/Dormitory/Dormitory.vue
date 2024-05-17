<template>
  <view class="page-main">
    <liu-clean-time ref="liuCleanTime" @submit="submit"></liu-clean-time>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        isEdit: true,
        dataObj: {
          pkId: '1', //问卷ID
          title: '宿舍习惯调查表', //问卷标题
          desc: '描述：填写的信息将会作为匹配舍友的依据，请认真填写', //问卷描述
          number: 7, //问卷总题目数量
          questions: [{
              questionId: '11',
              questionType: 'SINGLE',
              title: '在周末起床时间？',
              children: [{
                  id: '111',
                  state: 0,
                  serial: 'A',
                  content: '早起：6-7点'
                },
                {
                  id: '222',
                  state: 0,
                  serial: 'B',
                  content: '正常：7-8点'
                },
                {
                  id: '333',
                  state: 0,
                  serial: 'C',
                  content: '晚起：8点以后'
                }
              ]
            }, {
              questionId: '22',
              questionType: 'SINGLE',
              title: '晚上几点睡觉？',
              children: [{
                  id: '111',
                  state: 0,
                  serial: 'A',
                  content: '10点就睡了'
                },
                {
                  id: '222',
                  state: 0,
                  serial: 'B',
                  content: '熬一会，11点就睡了'
                },
                {
                  id: '333',
                  state: 0,
                  serial: 'C',
                  content: '夜猫子，凌晨再睡'
                }
              ]
            },
            {
              questionId: '33',
              questionType: 'SINGLE',
              title: '是否有午睡习惯？',
              children: [{
                  id: '111',
                  state: 0,
                  serial: 'A',
                  content: '有'
                },
                {
                  id: '222',
                  state: 0,
                  serial: 'B',
                  content: '没有'
                }
              ]
            },
            {
              questionId: '44',
              questionType: 'SINGLE',
              title: '你的睡眠质量怎么样？',
              children: [{
                  id: '111',
                  state: 0,
                  serial: 'A',
                  content: '睡得呼呼香，一般吵不醒'
                },
                {
                  id: '222',
                  state: 0,
                  serial: 'B',
                  content: '比较敏感，一有声音就醒'
                },
                {
                  id: '333',
                  state: 0,
                  serial: 'C',
                  content: '其他'
                }
              ]
            },
            {
              questionId: '55',
              questionType: 'SINGLE',
              title: '你会定期打扫卫生吗？',
              children: [{
                  id: '111',
                  state: 0,
                  serial: 'A',
                  content: '会'
                },
                {
                  id: '222',
                  state: 0,
                  serial: 'B',
                  content: '宿舍有人打扫就会一起'
                },
                {
                  id: '333',
                  state: 0,
                  serial: 'C',
                  content: '不拘小节，不怎么打扫'
                }
              ]
            },
            {
              questionId: '66',
              questionType: 'SINGLE',
              title: '你会抽烟吗？',
              children: [{
                  id: '111',
                  state: 0,
                  serial: 'A',
                  content: '抽不了一点'
                },
                {
                  id: '222',
                  state: 0,
                  serial: 'B',
                  content: '不抽，但能接受'
                },
                {
                  id: '333',
                  state: 0,
                  serial: 'C',
                  content: '闻到烟味就会咳嗽'
                }
              ]
            },
            {
              questionId: '77',
              questionType: 'SINGLE',
              title: '使用手机会外放声音吗？',
              children: [{
                  id: '111',
                  state: 0,
                  serial: 'A',
                  content: '会'
                },
                {
                  id: '222',
                  state: 0,
                  serial: 'B',
                  content: '不会'
                },
                {
                  id: '333',
                  state: 0,
                  serial: 'C',
                  content: '舍友提醒可以关闭'
                }
              ]
            }
          ]
        },
        totalnum: 0,
        comnum: 0,
        questionsAnswer: [],
        formSubmitData: [],
        userAnswerList: []
      };
    },

    mounted() {
      this.$nextTick(res => {
        this.init()
      })
    },
    methods: {
      //问卷初始化
      init() {
        this.$refs.liuCleanTime.initObj(this.dataObj)
      },
      //提交回调
      submit(e) {
        console.log(e)
        if (!this.isEdit) return uni.$showMsg('不可以重复提交哦~')
        this.isEdit = false
        this.userAnswerList = e.userAnswerList
        const res = this.matchRoom()
        uni.showLoading({
          title: '舍友分配中...',
          mask: true,
          success() {

          }
        })
        setTimeout(function() {
          uni.hideLoading();
          // 提示信息
          uni.showModal({
            title: "分配情况",
            content: '宿舍：菊园b座613，推荐舍友：小周，小廖，小刘',
            showCancel: false, // 是否显示取消按钮
            confirmText: '确定', // 确认按钮的文字，可根据实际情况修改
            success: (res) => {
              if (res.confirm) {

                // 在这里添加跳转到领取小礼物页面的逻辑
              }
            }
          });
        }, 3000);
      },
      matchRoom() {
        let sumA = 0
        let sumB = 0
        let sumC = 0
        this.userAnswerList.forEach(item => {
          // console.log(item)
          if (item.questionId === '11') {
            sumA += 1
          }
          if (item.questionId === '22') {
            sumB += 1
          }
          if (item.questionId === '33') {
            sumC += 1
          }
        })
        sumA = sumA / 7
        sumB = sumB / 7
        sumC = sumC / 7
        // console.log(sumA, sumB, sumC)
        let max = Math.max(sumA, sumB, sumC)
        if (max === sumA) {
          return {
            value: sumA,
            id: '111'
          }
        }
        if (max === sumB) {
          return {
            value: sumB,
            id: '222'
          }
        }
        if (max === sumC) {
          return {
            value: sumC,
            id: '333'
          }
        }
      }
    }
  }
</script>