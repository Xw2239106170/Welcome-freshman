<template>
	<view class="container">
		<scroll-view
		 v-show="!openCamera"
		 :scroll-into-view="'scroll_id' + scorllIndex"
		 :scroll-with-animation="isScrollAnimation"
		 scroll-y="true" 
		 :style="{
			 'height':scorllMarginLeg>46?'calc(100vh - 46px)':'calc(100vh - ' + (openFunAtear||openMoreFun?keyboardHeight:46) + 'px)',
			 'marginTop':openFunAtear||openMoreFun? - (scorllMarginLeg - 46) + 'px' : 0,
		 }"
		 class="scroll-view_back"
		 @scrolltoupper="upper"
		 @scrolltolower="lower"
		 :lower-threshold="keyboardHeight">
			<view
			 :id="'scroll_id' + index" 
			 :class="[item.uid==myInfo.uid?'right_chat_conter':'left_chat_conter','chat_conter']" 
			 v-for="(item,index) in chatMsgList" :key="index">
				<view class="left_chat_person" v-if="item.msgType != 'time'">
					<image :src="elInfo.chatHeadImg" class="chat_header left_head_img"></image>
				</view>
				<view class="chat_info">
					<!-- 文字类型 -->
					<view v-if="item.msgType == 'text'" class="chat_conter_msg chat_conter_text">{{item.newMsg}}</view>
					<!-- 图片类型 -->
					<image v-else-if="item.msgType == 'img'" class="chat_conter_msg chat_conter_img" :style="{
						'width':item.showW + 'rpx',
						'height':item.showH + 'rpx',
					}" :src="item.newMsg" mode="" @click="previewImg(chatMsgList, item.newMsg)"></image>
					<!-- 语音类型 -->
					<view v-else-if="item.msgType == 'voice'" class="chat_conter_msg chat_conter_voice">
						<view style="display: flex;" v-if="item.uid==myInfo.uid" @click="playVoice(item)">
							<text style="margin-right: 10px;">{{item.secondTime}}</text>
							<image v-show="!item.isPlayVoice" src="../../static/voice/right_voice_icon.png" class="voice_image"></image>
							<image v-show="item.isPlayVoice" src="../../static/gif/right_voice_gif.gif" class="voice_image"></image>
						</view>
						<view style="display: flex;" v-else @click="playVoice(item)">
							<image v-show="!item.isPlayVoice" src="../../static/voice/left_voice_icon.png" class="voice_image"></image>
							<image v-show="item.isPlayVoice" src="../../static/gif/left_voice_gif.gif" class="voice_image"></image>
							<text style="margin-left: 10px;">{{item.secondTime}}</text>
						</view>
					</view>
					<!-- 视频类型 -->
					<view v-else-if="item.msgType == 'voido'" class="chat_conter_msg chat_conter_voido">
						<video :src="item.newMsg" :poster="item.thumbTempFilePath" objectFit="fill" :style="{
							'width':item.showW + 'rpx',
							'height':item.showH + 'rpx',
							'borderRadius': '10rpx'
						}"></video>
						<!-- <video :src="item.newMsg" :poster="item.thumbTempFilePath" objectFit="fill" style="width: 100%;height: 100%;border-radius: 10rpx;"></video> -->
					</view>
					<!-- 表情包类型 -->
					<view v-else-if="item.msgType == 'meme'" class="chat_conter_msg chat_conter_meme">
						<image :src="memeFile + item.newMsg" class="conter_meme"></image>
					</view>
					<!-- 视频通话类型 -->
					<view v-else-if="item.msgType == 'voidoCall'" class="chat_conter_msg chat_conter_voice">
						<view style="display: flex;" v-if="item.uid==myInfo.uid">
							<text style="margin-right: 10px;">{{item.newMsg}}</text>
							<text class="iconfont icon-shipin voice_image" style="transform: rotate(180deg);"></text>
						</view>
						<view style="display: flex;" v-else>
							<text class="iconfont icon-shipin voice_image" style="margin-bottom: -6px;"></text>
							<text>{{item.newMsg}}</text>
						</view>
					</view>
					<!-- 地址类型 -->
					<view v-else-if="item.msgType == 'place'"
					 style="display: inline-block;width: 400rpx;" 
					 class="chat_conter_msg chat_conter_place" @click="openLocal(item)">
						<view class="">
							<view class="loca_info">{{item.locaName}}</view>
							<view class="loca_info" style="color: #999;">{{item.newMsg}}</view>
						</view>
						<map style="width: 100%; height: 200rpx;" :latitude="item.latitude" :longitude="item.longitude" :markers="covers"></map>
					</view>
					<!-- 时间间隔 -->
					<view v-else-if="item.msgType == 'time'" class="chat_conter_msg chat_conter_time">
						{{item.newMsg}}
					</view>
				</view>
				<view class="right_chat_person" v-if="item.msgType != 'time'">
					<image :src="myInfo.chatHeadImg" class="chat_header right_head_img"></image>
				</view>
			</view>
		</scroll-view>
		<view class="send_msg_box" :style="{'display':!openCamera?'flex':'none'}">
			<view class="voice_icon">
				<text :class="['iconfont',isVoiceIcon?'icon-yuyin':'icon-wenzishuru',lineCount == 1?'':'bottom_icon']" @click="changeVoice()"></text>
			</view>
			<view class="text_msg">
				<textarea
				 v-if="isVoiceIcon"
				 class="text_area" 
				 :cursor-spacing="10" 
				 :auto-height="true" 
				 :show-confirm-bar="false"
				 :cursor="999"
				 @linechange="lineChange"
				 v-model="sendMsg"
				 @focus="focusArea"
				 @blur="blurArea"
				 :adjust-position="adjustPosition"></textarea>
				 <view class="press_box" v-else @longpress="longpress" @touchstart="touchStart" @touchmove="touchMove" @touchend="endRecord">
				 	<text style="margin-right: 10px;">按住</text>
				 	<text>说话</text>
				 </view>
			</view>
			<view class="meme_conceal">
				<view :class="[lineCount == 1?'':'bottom_icon']">
					<text v-if="changeSendBnt" :class="['iconfont',isMemeIcon?'icon-xiaolian':'icon-wenzishuru']" style="margin-right: 10rpx;" @click="openMeme()"></text>
					<text v-if="changeSendBnt" class="iconfont icon-jiahao" @click="moreFunIcon()"></text>
					<text v-if="!changeSendBnt" class="send_bnt" @click="sendBnt">发 送</text>
				</view>
			</view>
		</view>
		<view v-if="openPop" class="pop_box" @click="closeVoice">
			<view class="voice_box">
				<view class="transcribe_box">
					<view style="padding: 10px;">
						正在录制音频
					</view>
					<view style="text-align: center;">
						<image v-if="recording" src="../../static/gif/transcribe_gif.gif" class="gif_icon"></image>
						<view v-else class="cancel_voice">×</view>
					</view>
					<view class="transcribe_hit">
						<text v-if="recording">松开完成录音</text>
						<text v-else>松开取消录音</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部表情包 -->
		<view class="fun_atear" v-if="openFunAtear" :style="{'height':keyboardHeight+'px'}">
			<view class="meme_box">
				<scroll-view
				 :scroll-top="0"
				 scroll-y="true" 
				 :style="{'height':keyboardHeight+'px'}">
					<image v-for="(item,index) in memeList" :key="index" :src="memeFile + item" class="el_meme_image" @click="memeFun(item)"></image>
				</scroll-view>
			</view>
		</view>
		<!-- 视频通话 不要 -->
		<view v-if="openCamera" style="z-index: 1000;">
			<camera style="width: 100vw;height: 100vh;">
				<cover-view class="controls" style="width: 100%;height: 100%;">
					<cover-image @click="voideHangUp" src="/uni_modules/tianxie-chat/static/voice/take_camera_btn_icon.png" class="cover_image" />
				</cover-view>
			</camera>
		</view>
		<!-- 底部功能区 -->
		<view class="fun_atear" v-if="openMoreFun" :style="{'height':keyboardHeight+'px'}">
			<view class="more_fun_box">
				<view class="el_fun_box" v-for="(item,index) in moreFunList" :key="index" @click="selectFun(item)">
					<view style="text-align: center;">
						<text :class="['iconfont',item.iconClass,'el_fun_icon']"></text>
						<text style="margin-top: 10px;">{{item.text}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import publicFun from "../../utils/public.js";
	import "../../static/iconfont/iconfont.css";
	import "../../utils/public.scss";
	const recorderManager = uni.getRecorderManager(); // 录音实例对象
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	const queryView = uni.createSelectorQuery().in(this);
	export default{
		props:{
			chatUser:{
				type: Object,
				default () {
					return {}
				}
			},
			timeInterval:{
				type: Number,
				default:5
			},
			//表情包所在文件路径
			memeFile:{
				type: String,
				default:'/chat/static/emoji/'
			},
			//sockt接收到的数据
			acceptScokData:{
				type: Object,
				default(){
					return{}
				}
			},
		},
		data(){
			return{
				scorllMarginLeg:46,
				changeTextAreatHeight:46,
				baseAreatHeight:0,
				lineCount:1,
				timeValue:this.timeInterval,
				myInfo:{
					uid:10,
					chatName:"自己",
					newMsg:"你好",
					msgType:"meme",//消息类型text为文字，img为图片，voice为语音，voido为视频，meme为表情包，time为时间数据timeValue为时间间隔值
					newMsgTime:"2023-9-20 20:16:33",
					chatHeadImg:"../../static/head-img/my_header.png",
				},
				elInfo:this.chatUser,
				chatMsgList:[],
				sendMsg:"",//发送的内容
				changeSendBnt:true,
				isVoiceIcon:true,//语音图标
				isMemeIcon:true,//语音图标
				openPop:false,
				//手指触摸参数
				startTouchData:{},
				//手指滑动放向，向上为false,向下为true
				recording:true,
				//录音参数
				voiceObj:{},
				//表情包
				memeList:[],
				keyboardHeight:279,
				openFunAtear:false,
				openMoreFun:false,
				adjustPosition:true,
				isScrollAnimation:true,
				scorllIndex:0,
				socketDate:{},
				moreFunList:[{
					iconClass:"icon-xiangce1",
					type:"photo_album",
					text:"相册",
				},{
					iconClass:"icon-paishe",
					type:"film",
					text:"拍摄",
				},{
					iconClass:"icon-shipin",
					type:"video",
					text:"视频",
				},{
					iconClass:"icon-weizhi",
					type:"place",
					text:"位置",
				}],
				openCamera:false,
				videoTime:"",
				isReceptionDate:false,
				covers: [{
					width:26,
					height:30,
					latitude: 39.909,
					longitude: 116.39742,
				}]
			}
		},
		watch:{
			chatUser(val){
				this.elInfo = this.chatUser;
				this.getChatMsgList();
			},
			acceptScokData:{
				jure:true,
				handler(obj){
					this.openCamera = false;
					this.isReceptionDate = true;
					this.sendMsgFun(obj, obj.msgType);
				}
			},
		},
		created() {
			let that = this;
			//获取某个文件夹下的文件数量（表情包数量）
			uni.getFileSystemManager().readdir({
				dirPath:that.memeFile,
				success(res){
					that.memeList = res.files;
				}
			})
			//监听键盘高度
			uni.onKeyboardHeightChange(res => {
				if(res.height > 10){
					that.keyboardHeight = res.height;
					that.scorllMarginLeg = res.height;
				}
			})
		},
		methods:{
			//数据处理
			getChatMsgList(){
				this.chatMsgList.forEach(item=>{
					if(item.msgType == 'img'){
						let objOption = publicFun.analysisString(item.newMsg);
						let imageW = objOption['w'];
						let imageH = objOption['h'];
						let imageWH = publicFun.setImageRatio(imageW, imageH);
						item.showW = imageWH.newW;
						item.showH = imageWH.newH;
					}
				})
				this.scorllIndex = this.chatMsgList.length - 1;
			},
			//滚动到顶部时触发函数
			upper(){},
			lower(e){
				this.scorllMarginLeg = 279;
			},
			//输入框行数发生变化时
			lineChange(event){
				this.lineCount = event.detail.lineCount;
				if(!this.isVoiceIcon){
					if(event.detail.lineCount == 1){
						//输入框初始化时的高度
						this.baseAreatHeight = event.detail.height;
						this.setChangeTextAreatHeight(false, 1);
					}else{
						//计算出scoll-view的变化高度
						let changeHeight = event.detail.height - this.baseAreatHeight;
						this.setChangeTextAreatHeight(true, changeHeight);
					}
				}
			},
			//输入框聚焦
			focusArea(event){
				// this.openFunAtear = false;
				this.changeSendBnt = false;
				this.isVoiceIcon = true;
				this.isMemeIcon = true;
				this.adjustPosition = true;
			},
			//输入框失焦
			blurArea(event){
				this.openFunAtear = false;
				this.openMoreFun = false;
				if(!event.detail.value){
					this.changeSendBnt = true;
				}
				this.setChangeTextAreatHeight(false, 1);
			},
			//发送按钮
			sendBnt(){
				this.openFunAtear = false;
				this.openMoreFun = false;
				this.isVoiceIcon = true;
				this.myInfo.newMsg = this.sendMsg;
				this.sendMsgFun(this.myInfo, 'text');
			},
			//统一发送信息方法
			sendMsgFun(obj, type){
				let newTime = publicFun.getNowDate("yy-mm-dd hh:mm:ss", null);
				let listLastTime = newTime;
				if(this.chatMsgList.length > 0){
					listLastTime = this.chatMsgList[this.chatMsgList.length-1]['newMsgTime'];
				}
				let changeTime = publicFun.getDateDiff(listLastTime, 'minute');
				let msgInfo = {
					msgType:"time",
					newMsgTime:newTime
				};
				if(parseInt(changeTime) > this.timeValue){
					msgInfo.newMsg = publicFun.returnDiyDate(listLastTime);
					this.chatMsgList.push(msgInfo);
					this.$emit("saveData",msgInfo);
				}
				msgInfo = JSON.parse(JSON.stringify(obj));
				msgInfo.msgType = type;
				msgInfo.newMsgTime = newTime;
				msgInfo.newMsg = msgInfo.newMsg;
				if(type == "text"){
					this.changeSendBnt = true;
					this.sendMsg = "";
				}else if(type == "voice"){
				}
				this.chatMsgList.push(msgInfo);
				this.scorllIndex = this.chatMsgList.length - 1;
				if(!this.isReceptionDate){
					this.$emit("saveData",msgInfo);
				}
				this.isReceptionDate = false;
			},
			//切换语音时检测权限
			changeVoice(){
				let that = this;
				this.openFunAtear = false;
				this.openMoreFun = false;
				this.setChangeTextAreatHeight(false, 1);
				publicFun.isOpenVioceJurisdiction((val)=>{
					if(val){
						//开始录音
						that.isVoiceIcon =! that.isVoiceIcon;
					}
				})
			},
			//长按说话
			longpress(e){
				let that = this;
				setTimeout(()=>{
					publicFun.onFeedTap();
					that.openPop = true;
					// 检测是否开启录音权限
					publicFun.isOpenVioceJurisdiction((val)=>{
						if(val){
							//开始录音
							recorderManager.start();
						}
					})
				},200)
			},
			//记录触摸点
			touchStart(e){
				// 无论你是否绑定longpress，只要手指触摸这个view，就触发start
				// 这里我们需要记录此时的坐标
				this.startTouchData.clientX = e.changedTouches[0].clientX; //手指按下时的X坐标
				this.startTouchData.clientY = e.changedTouches[0].clientY; //手指按下时的Y坐标
			},
			//手指移动
			touchMove(e){
				// 触摸后继续移动手指时，将触发这个事件
				// 这里我们根据每次移动的坐标变化判断是向上还是向下滑动
				let touchData = e.touches[0]; //滑动过程中，手指滑动的坐标信息 返回的是Objcet对象
				let moveX = touchData.clientX - this.startTouchData.clientX;
				let moveY = touchData.clientY - this.startTouchData.clientY;
				if (moveY < -50) {
					// 向上滑动
					this.recording = false;
				} else {
					// 向下滑动
					this.recording = true;
				}
			},
			//手指松手
			endRecord(){
				// 最后就是松手、结束触摸
				// 这里分为两种情况
				// 也就是当已经监听到你向上滑动时，松手则取消录音
				// 当监听到没有移动、或是向下滑动时，则完成录音
				let that = this;
				recorderManager.stop(); // 录音结束
				if (this.recording) {
					// 完成录音
					// innerAudioContext.src = this.voiceObj.tempFilePath;
					// innerAudioContext.play();
					let myInfoObj = JSON.parse(JSON.stringify(this.myInfo)),secondTime;
					recorderManager.onStop(function (res) {
						that.voiceObj = res;
						myInfoObj.newMsg = res.tempFilePath;
						myInfoObj.duration = res.duration;
						myInfoObj.fileSize = res.fileSize;
						secondTime = parseInt(res.duration/1000)>0?parseInt(res.duration/1000):1;
						myInfoObj.secondTime = secondTime + "``";
						myInfoObj.isPlayVoice = false;
						that.sendMsgFun(myInfoObj, 'voice');
					});
				} else {
					// 此时松手后响应的是取消录音
				}
				this.recording = true;
				this.openPop = false;
			},
			//播放语音
			playVoice(item){
				let that = this,timeNum = 0;
				if(!item.isPlayVoice){
					item.isPlayVoice = true;
					innerAudioContext.src = item.newMsg;
					innerAudioContext.play();
					innerAudioContext.onEnded((res) => {
						item.isPlayVoice = false;
					});
					innerAudioContext.onError((res) => {
						uni.showToast({
							title:"播放出错!",
							icon:"error",
							duration:2000,
						})
						console.log("音频播放出错:" + JSON.stringify(res.errMsg),"错误码:" + JSON.stringify(res.errCode));
					});
				}else{
					innerAudioContext.stop();
					innerAudioContext.startTime = 0;
					innerAudioContext.src = item.newMsg;
					innerAudioContext.play();
				}
			},
			//表情包事件
			openMeme(){
				this.isVoiceIcon = true;
				this.openMoreFun = false;
				this.openFunAtear = !this.openFunAtear;
				this.setChangeTextAreatHeight(this.openFunAtear, this.keyboardHeight);
			},
			//更多功能
			moreFunIcon(){
				this.isVoiceIcon = true;
				this.openFunAtear = false;
				this.openMoreFun = !this.openMoreFun;
				this.setChangeTextAreatHeight(this.openMoreFun, this.keyboardHeight);
			},
			//发送表情包
			memeFun(item){
				let myInfoObj = JSON.parse(JSON.stringify(this.myInfo));
				myInfoObj.newMsg = item;
				this.sendMsgFun(myInfoObj, 'meme');
			},
			//聊天类容高度变化设置
			setChangeTextAreatHeight(jure,val){
				if(jure){
					this.changeTextAreatHeight = 46 + val;
				}else{
					this.changeTextAreatHeight = 46;
				}
				this.scorllIndex = this.chatMsgList.length - 1;
			},
			//预览图片
			previewImg(list, src){
				let imgList = [];
				let imgIndex = 0;
				list.forEach(item=>{
					if(item.msgType == "img"){
						imgList.push(item.newMsg);
					}
				})
				imgList.forEach((el,i)=>{
					if(el == src){
						imgIndex = i;
					}
				})
				uni.previewImage({
					urls: imgList,
					current:imgIndex,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			},
			//功能选择发送
			selectFun(item){
				let that = this;
				let myInfoObj = JSON.parse(JSON.stringify(this.myInfo));
				if(item.type == "photo_album" || item.type == "film"){
					//相册功能和拍摄
					//'album'从本地选择, 'camera'拍摄
					let sourceType;
					if(item.type == "photo_album"){
						sourceType = ['album'];
					}else{
						sourceType = ['camera'];
					}
					publicFun.chooseMedia(sourceType, null, (list)=>{
						list.forEach((item,i)=>{
							myInfoObj.newMsg = item.tempFilePath;
							if(item.fileType == "image"){
								myInfoObj.msgType = "img";
							}else{
								myInfoObj.msgType = "voido";
							}
							myInfoObj = publicFun.objConcat([myInfoObj,item]);
							this.sendMsgFun(myInfoObj, myInfoObj.msgType);
						})
						
					})
				}else if(item.type == "video"){
					//视频功能
					myInfoObj.msgType = "voidoCall";
					this.$emit("saveData",myInfoObj);
				}else if(item.type == "place"){
					//位置功能
					uni.getLocation({
						type: 'gcj02', //返回可以用于uni.openLocation的经纬度
						success: function (res) {
							const latitude = res.latitude;
							const longitude = res.longitude;
							uni.chooseLocation({
								latitude: latitude,
								longitude: longitude,
								success: function (choose) {
									myInfoObj.msgType = "place";
									myInfoObj.newMsg = choose.address;
									myInfoObj.locaName = choose.name;
									myInfoObj.latitude = choose.latitude;
									myInfoObj.longitude = choose.longitude;
									that.covers[0]["latitude"] = choose.latitude;
									that.covers[0]["longitude"] = choose.longitude;
									that.sendMsgFun(myInfoObj, myInfoObj.msgType);
								}
							});
						}
					});
				}
			},
			//打开地图
			openLocal(item){
				uni.openLocation({
					latitude:item.latitude,
					longitude:item.longitude,
					success: function () {
						console.log('success');
					}
				})
			},
			//视频挂断
			voideHangUp(){
				// let nowTime = publicFun.getNowDate("yy-mm-dd hh:mm:ss", null);
				// let sce = publicFun.getDateDiff(nowTime, );
				// myInfoObj.msgType = "voidoCall";
				// publicFun.countVideoCallTime(60);
				// myInfoObj.newMsg = item.tempFilePath;
				this.openCamera = false;
			},
		}
	}
</script>
<style lang="scss">
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
</style>
<style lang="scss" scoped>
	.scroll-view_back{
		background-color: $uni-bg-color-grey;
		height: calc(100vh - 46px);
	}
	.right_chat_conter{
		.left_head_img{
			display: none;
		}
		.chat_info{
			flex: 1;
			text-align: right;
		}
		.chat_conter_msg{
			margin-right: $uni-spacing-row-sm;
		}
		.chat_conter_text,.chat_conter_voice{
			padding: $uni-spacing-row-base $uni-spacing-row-base;
			background-color: $uni-bg-color-95e;
			display: inline-block;
		}
		.chat_conter_meme,.chat_conter_place{
			padding: $uni-spacing-row-base $uni-spacing-row-base;
			background-color: $uni-bg-color;
			display: inline-block;
		}
	}
	.left_chat_conter{
		.right_head_img{
			display: none;
		}
		.chat_info{
			flex: 1;
			text-align: left;
		}
		.chat_conter_msg{
			margin-left: $uni-spacing-row-sm;
		}
		.chat_conter_text,.chat_conter_voice,.chat_conter_meme,.chat_conter_place{
			padding: $uni-spacing-row-base $uni-spacing-row-base;
			background-color: $uni-bg-color;
			display: inline-block;
		}
	}
	.chat_conter{
		display: flex;
		padding: $uni-spacing-col-sm $uni-spacing-col-sm;
		.left_chat_person,.right_chat_person{
			width: 76rpx;
			height: 76rpx;
		}
		.right_chat_person{
			text-align: right;
		}
		.chat_header{
			width: 100%;
			height: 100%;
			border-radius: $uni-border-radius-lg;
		}
		.chat_conter_msg{
			border-radius: $uni-border-radius-lg;
		}
		.chat_conter_img{
			width: 150rpx;
			height: 300rpx;
		}
		.chat_conter_time{
			font-size: $uni-font-size-sm;
			color: #999;
			text-align: center;
		}
		.conter_meme{
			width: 40rpx;
			height: 40rpx;
		}
		.chat_conter_voido{
			border-radius: 10rpx;
		}
		.loca_info{
			font-size: 20rpx;
			text-align: left;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin-bottom: 8rpx;
		}
	}
	.send_msg_box{
		display: flex;
		padding: 8px 10px;
		min-height: 30px;
		.iconfont{
			font-size: 24px;
		}
		.voice_icon{
			width: 46rpx;
			line-height: 30px;
			position: relative;
		}
		.text_msg{
			flex: 1;
			margin: 0 10rpx;
		}
		.meme_conceal{
			width: 100rpx;
			line-height: 30px;
			position: relative;
		}
		.text_area{
			background-color: #fff;
			height: 100%;
			text-decoration: 10px;
			border: 1rpx solid #eee;
			border-radius: 8rpx;
			width: 95%;
			padding: 6px;
		}
		.press_box{
			background-color: #fff;
			border: 1rpx solid #eee;
			border-radius: 8rpx;
			width: 95%;
			padding: 0 6px;
			text-align: center;
			line-height: 30px;
		}
		.bottom_icon{
			position: absolute;
			left: 0;
			bottom: 0;
		}
		.send_bnt{
			background-color: #95ec69;
			padding: 10rpx 16rpx;
			border-radius: 8rpx;
		}
	}
	.pop_box{
		background-color: $uni-bg-color-mask;
		z-index: 10000;
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		.voice_box{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
			width: 100vw;
		}
		.transcribe_box{
			width: 80vw;
			background-color: #fff;
			border-radius: 10rpx;
			text-align: center;
		}
		.gif_icon{
			width: 200px;
			height: 60px;
		}
		.transcribe_hit{
			color: #999;
			padding: 10px;
		}
		.cancel_voice{
			height: 60px;
			width: 60px;
			border-radius: 50%;
			color: #fff;
			line-height: 60px;
			background-color: #fc5531;
			display: inline-block;
			font-size: 30px;
		}
	}
	.voice_image{
		width: 46rpx;
		height: 46rpx;
	}
	.meme_box{
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 10px;
		.el_meme_image{
			width: 50rpx;
			height: 50rpx;
			margin: 10rpx 30rpx 0 30rpx;
			padding-bottom: 10px;
		}
	}
	.more_fun_box{
		display: flex;
		.el_fun_box{
			margin-top: 10px;
			width: 20%;
			padding: 10px;
		}
		.el_fun_icon{
			padding: 20px 20px;
			border-radius: 20rpx;
			font-size: 30px;
			background-color: $uni-bg-color-grey;
			display: inline-block;
		}
	}
	.cover_image{
		width: 120rpx;
		height: 120rpx;
		position: absolute;
		bottom: 48px;
		left: 50%;
		margin-left: -60rpx;
	}
</style>
