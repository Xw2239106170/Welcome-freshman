<template>
  <view class="wen-home">
    <image class="wen-bg"
      src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/ffb23bb3-4a03-4cbb-b729-4c402222593e.png"></image>
    <view class="wen-box">
      <view class="boxtitle1">
        <view class="slicon"></view>
        <text>{{dataObj.title}}</text>
        <view class="sricon"></view>
      </view>
      <view class="boxtitle2" v-if="dataObj.desc" v-html="dataObj.desc"></view>
      <view class="wentibox-c">
        <text class="title" v-if="dataObj.desc">开始填写</text>
        <view class="progressbox">{{comnum}}/<span>{{totalnum}}</span></view>
      </view>
      <view class="itembox" v-for="(item,index) in questionsAnswer" :key="index">
        <view class="boxtitle">
          <text class="textl">{{index+1}}、</text>
          <text class="textr">{{item.title}}</text>
        </view>
        <view v-if="item.questionType == 'SINGLE'">
          <view class="boxbody" v-for="(items,idxs) in item.children" :key="idxs">
            <view class="chooseitem" @click="singChoose(index,idxs)">
              <view class="bodyl">
                <image class="sinchoose-on" v-if="items.state == 1"
                  src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/5afb178f-c2cc-46b2-9d1c-4833237304d8.png"
                  mode=""></image>
                <view class="sinchoose" v-else></view>
              </view>
              <view class="bodyr">{{items.serial}}、{{items.content}}</view>
            </view>
          </view>
        </view>
        <view v-if="item.questionType == 'MULTY'">
          <view class="boxbody" v-for="(self,idxm) in item.children" :key="idxm">
            <view class="chooseitem" @click="multyChoose(index,idxm)">
              <view class="bodyl">
                <image class="manychoose-on" v-if="self.state == 1"
                  src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/d8cd8456-f40c-4ffa-946b-d4d3f0268933.png"
                  mode="">
                </image>
                <view class="manychoose" v-else></view>
              </view>
              <view class="bodyr">{{self.serial}}、{{self.content}}</view>
            </view>
          </view>
        </view>
      </view>
      <view class="sumitbtn" @click="submitData">提交</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        dataObj: {},
        totalnum: 0,
        comnum: 0,
        questionsAnswer: [], //问卷问题列表数据
        formSubmitData: [], //答题完成的数据
      };
    },
    methods: {
      //初始化数据结构
      initObj(obj) {
        this.dataObj = obj
        this.questionsAnswer = this.dataObj.questions
        this.totalnum = this.dataObj.number
        for (var i = 0; i < this.totalnum; i++) {
          let arr = {
            questionType: this.questionsAnswer[i].questionType, //每个问题类型(单选:SINGLE  多选:MULTY  简答:QUESTION)
            questionId: this.questionsAnswer[i].questionId, //每个问题ID
            userAnswer: 'SINGLE', //每个问题用户选择的答案(逗号拼接)
          }
          this.formSubmitData.push(arr)
        }
      },
      //单选题
      singChoose(j, e) {
        // console.log(j, e)
        // console.log(this.questionsAnswer)
        // console.log(this.formSubmitData)
        if (this.questionsAnswer[j].children[e].state == 1) {
          this.questionsAnswer[j].children[e].state = 0
          this.formSubmitData[j].userAnswer = ''
        } else {
          this.questionsAnswer[j].children.forEach(res => {
            if (res.state == 1) res.state = 0
          })
          this.questionsAnswer[j].children[e].state = 1
          this.formSubmitData[j].userAnswer = this.questionsAnswer[j].children[e].id
        }
        this.countNum()
      },
      //多选题
      multyChoose(j, e) {
        this.questionsAnswer[j].children[e].state = this.questionsAnswer[j].children[e].state ^ 1
        let obj = []
        this.questionsAnswer[j].children.forEach(res => {
          if (res.state == 1) obj.push(res.id)
        })
        this.formSubmitData[j].userAnswer = obj.toString()
        this.countNum()
      },
      //计算已答题目数量
      countNum() {
        this.comnum = 0
        this.formSubmitData.forEach(res => {
          if (res.userAnswer !== 'SINGLE') this.comnum += 1
        })
      },
      //问卷结果提交
      submitData() {
        // const res = this.formSubmitData.every(item => item.userAnswer !== "SINGLE")
        // if (!res) return uni.showToast({
        //   title: "还有题目未填写哦~",
        //   icon: 'none'
        // })
        let num = ''
        for (var i = 0; i < this.formSubmitData.length; i++) {
          if (this.formSubmitData[i].userAnswer === 'SINGLE') {
            num = i + 1
            break
          }
        }
        // console.log('==========:' + this.formSubmitData)
        // console.log('==========:' + JSON.stringify(this.formSubmitData))
        if (num) {
          uni.showToast({
            title: '请完成第' + num + '题',
            icon: 'none'
          })
          return
        }
        let obj = {
          pkId: this.dataObj.pkId, //问卷Id,
          userAnswerList: this.formSubmitData //用户答案
        }
        // console.log(obj)
        uni.showToast({
          title: "填写成功！！",
          icon: 'none'
        })
        this.$emit('submit', obj)

      },
    }
  };
</script>

<style lang="scss" scoped>
  .wen-home {
    width: 100%;
    height: 100%;
    background-color: #4098FF !important;
    padding: 120rpx 32rpx 30rpx 32rpx;
    box-sizing: border-box;

    .wen-bg {
      margin-bottom: 20px;
      margin-left: 75px;
      width: 200px;
      height: 280rpx;
    }

    .wen-box {
      margin-top: -24rpx;
      padding: 32rpx 24rpx 10rpx;
      background: #FFFFFF;

      .boxtitle1 {
        font-size: 32rpx;
        color: #2175FF;
        line-height: 48rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        .slicon,
        .sricon {
          width: 50rpx;
          height: 34rpx;
        }

        .slicon {
          background: linear-gradient(90deg, #BDE9FF 0%, #ffffff 100%);
        }

        .sricon {
          background: linear-gradient(270deg, #BDE9FF 0%, #ffffff 100%);
        }
      }

      .boxtitle2 {
        margin-top: 32rpx;
        padding: 12rpx 20rpx;
        background: #F7FBFF;
        border-radius: 6rpx;
        border: solid #BBD5FF 1px;
        font-size: 28rpx;
        color: #666666;
        line-height: 38rpx;
        text-indent: 56rpx;
        text-align: justify;
      }

      .wentibox-c {
        text-align: center;
        margin: 36rpx 0 16rpx 0;

        .title {
          font-size: 32rpx;
          color: #2175FF;
          line-height: 48rpx;
        }

        .progressbox {
          font-size: 30rpx;
          text-align: right;
          color: #2175FF;

          span {
            color: #333333;
          }
        }
      }


      .itembox {
        font-size: 30rpx;
        color: #333333;

        .boxtitle {
          .textl {
            width: 50rpx;
            height: 34rpx;
            background: linear-gradient(90deg, #BDE9FF 0%, #ffffff 100%);
          }
        }

        .boxbody {
          padding-left: 40rpx;
          line-height: 64rpx;
          margin: 16rpx 0;
        }

        .chooseitem {
          display: flex;
          align-items: center;

          .bodyl {
            margin-right: 16rpx;

            .sinchoose {
              width: 28rpx;
              height: 28rpx;
              border-radius: 50%;
              background: #FFFFFF;
              border: 2rpx solid #BFBDBD;
            }

            .sinchoose-on {
              width: 32rpx;
              height: 32rpx;
            }

            .manychoose {
              width: 28rpx;
              height: 28rpx;
              background: #FFFFFF;
              border: 2rpx solid #BFBDBD;
            }

            .manychoose-on {
              width: 32rpx;
              height: 32rpx;
            }
          }
        }

        .writeitem textarea {
          min-height: 164rpx;
          margin: 24rpx auto;
          padding: 16rpx;
          border: 2rpx solid #EBEBEB;
          border-radius: 4px;
        }
      }

      .sumitbtn {
        width: 50%;
        height: 72rpx;
        line-height: 72rpx;
        text-align: center;
        border-radius: 8rpx;
        background: linear-gradient(90deg, #2178FF 100%, #BDE9FF 0%);
        font-size: 32rpx;
        color: #FFFFFF;
        margin: 48rpx auto 48rpx auto;
      }
    }
  }
</style>