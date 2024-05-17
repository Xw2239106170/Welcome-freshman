# chat聊天uni-app前端页面
> **组件名：tianxie-chat**
> 代码块： `uDataPicker`
> 关联组件：`uni-list`、``。
> 使用组件需安装scss

### uni.scss添加变量属性
	$uni-bg-color-red:#dd524d;
	$uni-bg-color-eee:#eee;
	$uni-bg-color-95e:#95ec69;

### manifest.json配置
```javaScript
	"app-plus" : {
		"ios" : {
			"urlschemewhitelist": [
				"baidumap",
				"iosamap",
				"qqmap"
			]
		},
	},
	"mp-weixin" : {
		"requiredPrivateInfos": [
			"getLocation",
			"onLocationChange",
			"startLocationUpdateBackground",
			"chooseAddress",
			"chooseLocation"
		]
	},
```

### 使用教程
	1、导入插件
	2、在项目更目录下创建分包chat，分包里创建文件chat/vue/chat-list.vue、chat/vue/chat-room.vue、创建文件static
	3、将插件里的static下的emoji表情包剪切到chat/static里
	4、在根目录pages.json里写入分包路径
```javaScript
	"subPackages": [{  // 模块分包
		"root": "chat",
		"name": "chat",
		"pages": [
			{
				"path": "vue/chat-list",
				"style": {
					"navigationBarTitleText": "人员列表"
				}
			},{
				"path": "vue/chat-room",
				"style": {
					"navigationBarTitleText": "聊天室"
				}
			}
		]
	},{
		"root": "imageCut",
		"name": "imageCut",
		"pages": [
			{
				"path": "vue/cover-img",
				"style": {
					"navigationBarTitleText": "拍照"
				}
			},{
				"path": "vue/image-cut",
				"style": {
					"navigationBarTitleText": "图片裁剪"
				}
			}
		]
	}],
```
	5、chat-list.vue代码
```html
	<template>
		<view class="container">
			<tianxie-chat-list :pageUrl="pageUrl" :userList="userList" @scrollBnt="scrollBnt"></tianxie-chat-list>
		</view>
	</template>
```
```javascript
	<script>
		export default{
			data(){
				return{
					//pageUrl跳转到聊天室路径
					pageUrl:"/chat/vue/chat-room",
					//新增加的聊天人员列表，请求完数据后需清空，等待下次数据请求在赋值
					userList:[{
						uid:1,
						chatName:"蝎子",
						unreadNum:"103",
						newMsg:"",
						msgType:"img",
						newMsgTime:"2023-9-20 20:38:35",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_02.png",
						setTopPerson:"0",
					},{
						uid:2,
						chatName:"幺妹",
						unreadNum:"3",
						newMsg:"",
						msgType:"voice",
						newMsgTime:"2023-9-20 20:40:02",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_03.png",
						setTopPerson:"0",
					},{
						uid:3,
						chatName:"二弟",
						unreadNum:"4",
						newMsg:"",
						msgType:"voido",
						newMsgTime:"2023-9-20 20:44:20",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_04.png",
						setTopPerson:"0",
					},{
						uid:4,
						chatName:"肖肖",
						unreadNum:"1",
						newMsg:"",
						msgType:"meme",
						newMsgTime:"2023-9-20 20:16:33",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_01.png",
						setTopPerson:"1",
					},{
						uid:5,
						chatName:"老表",
						unreadNum:"0",
						newMsg:"在js中将时间戳转换为常用的时间格式,有三种主要的方式1、使用JS中已有的函数,例如getFullYear(),getMonth()等,将时间戳直接转换成对应的年月",
						msgType:"text",
						newMsgTime:"2023-9-20 20:55:10",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_05.png",
						setTopPerson:"1",
					},{
						uid:1,
						chatName:"蝎子",
						unreadNum:"103",
						newMsg:"",
						msgType:"img",
						newMsgTime:"2023-9-20 20:38:35",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_02.png",
						setTopPerson:"0",
					},{
						uid:2,
						chatName:"幺妹",
						unreadNum:"3",
						newMsg:"",
						msgType:"voice",
						newMsgTime:"2023-9-20 20:40:02",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_03.png",
						setTopPerson:"0",
					},{
						uid:3,
						chatName:"二弟",
						unreadNum:"4",
						newMsg:"",
						msgType:"voido",
						newMsgTime:"2023-9-20 20:44:20",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_04.png",
						setTopPerson:"0",
					},{
						uid:4,
						chatName:"肖肖",
						unreadNum:"1",
						newMsg:"",
						msgType:"meme",
						newMsgTime:"2023-9-20 20:16:33",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_01.png",
						setTopPerson:"1",
					},{
						uid:5,
						chatName:"老表",
						unreadNum:"0",
						newMsg:"在js中将时间戳转换为常用的时间格式,有三种主要的方式1、使用JS中已有的函数,例如getFullYear(),getMonth()等,将时间戳直接转换成对应的年月",
						msgType:"text",
						newMsgTime:"2023-9-20 20:55:10",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_05.png",
						setTopPerson:"1",
					},{
						uid:1,
						chatName:"蝎子",
						unreadNum:"103",
						newMsg:"",
						msgType:"img",
						newMsgTime:"2023-9-20 20:38:35",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_02.png",
						setTopPerson:"0",
					},{
						uid:2,
						chatName:"幺妹",
						unreadNum:"3",
						newMsg:"",
						msgType:"voice",
						newMsgTime:"2023-9-20 20:40:02",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_03.png",
						setTopPerson:"0",
					},{
						uid:3,
						chatName:"二弟",
						unreadNum:"4",
						newMsg:"",
						msgType:"voido",
						newMsgTime:"2023-9-20 20:44:20",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_04.png",
						setTopPerson:"0",
					},{
						uid:4,
						chatName:"肖肖",
						unreadNum:"1",
						newMsg:"",
						msgType:"meme",
						newMsgTime:"2023-9-20 20:16:33",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_01.png",
						setTopPerson:"1",
					},{
						uid:5,
						chatName:"老表",
						unreadNum:"0",
						newMsg:"在js中将时间戳转换为常用的时间格式,有三种主要的方式1、使用JS中已有的函数,例如getFullYear(),getMonth()等,将时间戳直接转换成对应的年月",
						msgType:"text",
						newMsgTime:"2023-9-20 20:55:10",
						chatHeadImg:"/uni_modules/tianxie-chat/static/head-img/head_05.png",
						setTopPerson:"1",
					}],
				}
			},
			methods:{
				//列表滑动到底部
				scrollBnt(val){
					if(val){
						uni.showToast({
							title:"到底部了!",
							icon:'none',
							duration:3000,
						})
						console.log("到底部了!");
					}
				},
			}
		}
	</script>
```
	6、chat-room.vue代码
```html
	<template>
		<view class="container">
			<tianxie-chat-room :chatUser="chatUser" @saveData="saveData" :timeInterval="timeInterval" :memeFile="memeFile" :acceptScokData="acceptScokData"></tianxie-chat-room>
		</view>
	</template>
```
```javascript
	<script>
		export default{
			data(){
				return{
					chatUser:{},//从聊天列表接收别人的信息
					timeInterval:5,//发送时间间隔，默认为5分钟
					memeFile:'/chat/static/emoji/',//表情包所在的路径
					acceptScokData:{},//sockt接收到的数据
				}
			},
			onLoad(options) {
				this.chatUser = JSON.parse(options.userItem);
				this.acceptScokData = this.chatUser;
				uni.setNavigationBarTitle({
					title:this.chatUser.chatName,
				})
			},
			methods:{
				//数据类型返回存储
				saveData(obj){
					//msgType消息类型text为文字，img为图片，voice为语音，voido为视频，meme为表情包，time为时间数据，voidoCall为视频通话，place为地址，timeValue为时间间隔值
					console.log(obj);
					//视频通话根据需求有多种情况接入，此处不做处理，但可接收到视频数据传输到聊天窗中
					if(obj.msgType == "voidoCall"){
						obj.newMsg = "当前通话01:20:05";
						this.acceptScokData = obj;
					}
					
				}
			}
		}
	</script>
```
	
