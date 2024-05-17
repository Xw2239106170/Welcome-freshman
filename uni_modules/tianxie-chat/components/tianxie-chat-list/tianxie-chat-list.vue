<template>
	<view class="container">
		<scroll-view
		 :scroll-top="scrollTop" 
		 :scroll-with-animation="true"
		 scroll-y="true" 
		 style="height: 100vh"
		 class="scroll-view_back"
		 @scrolltolower="lower">
			<uni-list :border="true">
				<uni-list-chat
				 v-for="(item,index) in chatList" :key="index"
				 :title="item.chatName" 
				 :avatar="item.chatHeadImg" 
				 :note="item.msgType=='text'||item.msgType == 'meme'?item.newMsg:item.msgType=='img'?'[图片]':item.msgType=='voice'?'[语音]':item.msgType=='voido'?'[视频]':''" 
				 :time="item.changeNewMsgTime" 
				 :ellipsis="1"
				 :showBadge="true"
				 :clickable="true"
				 @click="chatPage(item)"
				 badge-positon="left">
					<view class="chat-custom-right">
						<text class="chat-custom-text">{{item.changeNewMsgTime}}</text>
						<!-- 需要使用 uni-icons 请自行引入 -->
						<uni-badge class="uni-badge-left-margin" :text="item.unreadNum" :max-num="99" size="14" :custom-style="{
							backgroundColor:'#ff5a5f'
						}" />
					</view>
				</uni-list-chat>
		 	</uni-list>
		</scroll-view>
	</view>
</template>

<script>
	import publicFun from "../../utils/public.js";
	export default{
		props:{
			pageUrl:{
				type:String,
				default:"/chat/vue/chat-room"
			},
			userList:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		data(){
			return{
				/**
				 * {
					uid:1,//聊天列表用户id
					chatName:"肖肖",//姓名
					unreadNum:"200",//未读条数
					newMsg:"你好",//新消息
					msgType:"1",//消息类型text为文字，img为图片，voice为语音，voido为视频，meme为表情包，time为时间数据timeValue为时间间隔值
					newMsgTime:"2023-9-20 20:16:33",//新消息时间
					chatHeadImg:"",//人物头像
					setTopPerson:"1",//设为置顶
				}
				 */
				chatList:[],
				pageChange:"chat_list",//chat_list为聊天列表chat_room为聊天室
			}
		},
		watch:{
			userList:{
				handler(list) {
					let addList = JSON.parse(JSON.stringify(list));
					this.chatList = this.chatList.concat(addList);
					this.getChatList(addList);
				},
				deep: true
			}
		},
		created() {
			this.getChatList(this.userList);
		},
		methods:{
			//聊天列表数据请求方法
			getChatList(addList){
				/**
				 * 聊天列表请求函数在此
				 * 由于无数据请求，故而处理死数据，使用者可在此处请求数据然后赋值即可
				 */
				let notSetTopUser = [];
				let isSetTopUser = addList.filter((item,i)=>{
					item.unreadNum = parseInt(item.unreadNum);
					item.changeNewMsgTime = publicFun.returnDiyDate(item.newMsgTime);
					if(item.setTopPerson == 1){
						return item;
					}else{
						notSetTopUser.push(item);
					}
				});
				this.chatList = isSetTopUser.concat(notSetTopUser);
			},
			/**
			 * @param {Object} item
			 * 携带参数跳转chat聊天室
			 */
			chatPage(item){
				console.log(item)
				item.unreadNum = 0;
				uni.navigateTo({
					url: this.pageUrl + "?userItem=" + JSON.stringify(item),
				})
			},
			lower(){
				this.$emit("scrollBnt",true);
			},
		}
	}
</script>
<style lang="scss" scoped>
	@import url("../../utils/public.scss");
	.set_top_item{
		background-color: $uni-bg-color-eee;
	}
	.head_image_msg_num{
		.msg_num{
			border-radius: 40rpx;
			padding: 4rpx 12rpx;
			background-color: $uni-bg-color-red;
			color: $uni-text-color-inverse;
			font-size: 10px;
		}
	}
	.chat-custom-right {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}
	
	.chat-custom-text {
		font-size: 12px;
		color: #999;
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
</style>