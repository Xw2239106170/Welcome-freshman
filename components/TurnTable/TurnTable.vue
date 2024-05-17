<template>
  <view>

    <q-turntable ref="turntable" @start="turntableStart" @success="turntableSuccess"></q-turntable>
  </view>
</template>
<script>
  import {
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {
        award: 1,
        awardList: [{
            title: '特等奖'
          },
          {
            title: '一等奖'
          },
          {
            title: '二等奖'
          },
          {
            title: '三等奖'
          },
          {
            title: '四等奖'
          },
          {
            title: '啥也没有'
          }
        ] // 顺时针对应每个奖项 

      };
    },

    methods: {
      ...mapMutations('message', ['pushMessage', 'pushNotice']),
      // 用户点击开始抽奖
      turntableStart() {
        let index = Math.floor(Math.random() * 6 + 1) //前端随机数，这里应该后台返回中奖结果
        this.award = index
        this.$refs.turntable.begin(this.award);
      },

      // 抽奖完成后操作
      turntableSuccess() {
        const index = this.award - 1;
        console.log('bind:success', this.awardList[index]);
        // if (this.awardList[index].title === '啥也没有') {
        //   ubi.showToast({
        //     title: '很遗憾，没有中奖，再接再厉哦~',
        //     icon: 'none'
        //   })
        //   return
        // }
        uni.showToast({
          title: `恭喜你获得${this.awardList[index].title}`,
          icon: 'none'
        });

        // 日期
        const now = new Date();
        const month = now.getMonth() + 1; // 月份是从 0 开始计数的，所以要加 1
        const date = now.getDate();
        const monthAndDate = month + "-" + date;
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        // 奖品
        let res = ''
        if (this.awardList[index].title === '一等奖') {
          res = '军训自由选择'
        }
        if (this.awardList[index].title === '二等奖') {
          res = '开学专人接送'
        }
        if (this.awardList[index].title === '三等奖') {
          res = '专人带领了解学校'
        }
        if (this.awardList[index].title === '四等奖') {
          res = '优先择偶权'
        }
        if (this.awardList[index].title === '特等奖') {
          res = 'ipad一个'
        }

        this.pushMessage({
          id: 1,
          state: true,
          title: '中奖信息！！',
          surface: monthAndDate,
          desc: `恭喜你获得${this.awardList[index].title} ${res}`,
          time: formattedTime
        })
        this.pushNotice(`恭喜徐**获得${this.awardList[index].title}`)
      },

    }
  }
</script>