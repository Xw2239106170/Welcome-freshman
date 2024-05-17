<template>
  <uni-popup ref="confirm" type="bottom" mask-background-color="rgba(0, 0, 0, 0)" :isMaskClick="true">
	  <view style="height: 600rpx;background-color: #F0F0F0;" class="flex flex-column align-start justify-center flex-1 border-top">
		<swiper @change="onSwiperChange" :current="current" class="flex-1" style="width: 750rpx;">
			<swiper-item>
				<!-- <text class="emojiicon">&#xC001;</text> -->
				<scroll-view  :scroll-y="true" :show-scrollbar="false" class="flex flex-row justify-start flex-wrap flex-1 px-2" style="">
					<text class="emojifont px-1 py-1" style="font-size: 35px;" v-for="(val,index) in [...emojis]" :key="index">{{val}}</text>
					<view style="height: 100rpx;width: 600rpx;"></view>
				</scroll-view>
			</swiper-item>
		</swiper>
	  </view>
  </uni-popup>
</template> 

<script>
const dom = uni.requireNativePlugin('dom')
dom.addRule('fontFace', {
	'fontFamily': 'emojifont',
	'src': `url('http://emojifont.5gtc.net/emojifont/6372ea70-f0f4-4649-8ac7-d3647af6e63f/emojifont.ttf')`
})	 	
import emojis from './emojis.js';
  let timer = null
  export default {
    name: 'em-header',
    props: {
    },
    data() {
      return {
        styles: {},
		confirm:null,
		menus:[],
		title:"",
		emojis:emojis,
		current:0,
		favor_face_list:[],
		menusList:[]
      }
    },
    watch: {
    },
	computed: {
	 
	},
	async created() {
		let emojisList = [];
		for (let i = 0; i <= 82; i++) {
		  emojisList.push(`/uC${this.transformnum(i)}`)
		}
		console.log(emojisList)
	},
    methods: {
		transformnum(num){
			let len = 3 //显示的长度，如果以0001则长度为4
			num = parseInt(num, 10) + 1//转数据类型，以十进制自增
			num = num.toString()//转为字符串
			while (num.length < len) {//当字符串长度小于设定长度时，在前面加0
			  num = "0" + num
			}
			return num     
		},
	  open(){
		this.$refs.confirm.open()
		this.$refs.confirm.closeMask()
	  },
	  onClose(e){},
    }
  }
</script>

<style>
.camera-icon{
	padding: 60rpx;
	border-radius: 30rpx;
	font-size: 32px;
}
.border-bottom{
	border-bottom-width: 1px;
	border-style: solid;
	border-color: #EBEBEB;
}
.list-item-left-icon-text {
	font-size: 26px;
}
 .emojifont {
    font-family: emojifont !important;
    font-style: normal;
  }
.flex {
	display: flex;
	flex-direction: row;
}

.flex-row {
	flex-direction: row;
}

.flex-column {
	flex-direction: column;
}
.flex-wrap {
	flex-wrap: wrap;
}
.px-2 {
	padding-left: 20rpx;
	padding-right: 20rpx;
}
.flex-1 {
	flex: 1;
}
.px-1 {
	padding-left: 10rpx;
	padding-right: 10rpx;
}

.py-1 {
	padding-top: 10rpx;
	padding-bottom: 10rpx;
}
</style>
