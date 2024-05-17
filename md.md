### 安装教程

1.  下载组件导入项目」
2.  核心使用代码
				<template>
					<view class="container">
						<cu-custom bgColor="bg-blue" :isBack="true">
							<block slot="backText"></block>
							<block slot="content">系统设置</block>
						</cu-custom>

						<view class="bg-top bg-blue">
							 
				 
				 
							<!-- 车主信息 -->
							<view class="center-box shadow">
								<view class="cu-list menu">
									<view class="cu-bar bg-white margin-top-xs u-border-bottom">
										<view class="action sub-title">
											<text class="text-xl text-bold text-blue text-shadow">个人信息</text>
											<text class="text-ABC text-blue">Personal</text>
										</view>
									</view>
									<view class="cu-item" style="padding: 0;">
										<view class="content">
											<text class="cuIcon-myfill text-blue"></text>
											<text class="text-lg">头像</text>
										</view>
										<view class="action">
											<text class="text-grey text-sm">{{user.nick_name}}</text>
										</view>
									</view>
									<view class="cu-item" style="padding: 0;">
										<view class="content">
											<text class="cuIcon-myfill text-blue"></text>
											<text class="text-lg">ID</text>
										</view>
										<view class="action">
											<text class="text-grey text-sm">{{user.id}}</text>
										</view>
									</view>
									<view class="cu-item" style="padding: 0;">
										<view class="content">
											<text class="cuIcon-myfill text-blue"></text>
											<text class="text-lg">昵称</text>
										</view>
										<view class="action">
											<text class="text-grey text-sm">{{user.nick_name}}</text>
										</view>
									</view>

									<view class="cu-item" style="padding: 0;">
										<view class='content'>
											<text class="cuIcon-mobilefill text-blue"></text>
											<text class='text-lg'>联系方式</text>
										</view>
										<view class="action">
											<view class="cu-tag round bg-blue light" v-if="user.mobile">
												{{user.mobile}}
											</view>
											<view class="cu-tag round bg-blue light" v-else @click="getUserInfo">
												点击获取授权
											</view>
										</view>
									</view>

								</view>
							</view>

					 
							
						</view>
						<wk-wxlogin :zheshow='zheshow' />
					</view>
				</template>

				<script>
					import request from '@/common/request.js';
					import wkWxlogin from '@/components/wk-wxlogin/wk-wxlogin.vue';
					export default {
						components:{
							wkWxlogin
						},
						data() {
							return {
								user: {},
								zheshow:false, // 控制弹窗显示隐藏
							}
						},
						onShow() {
							
						},
						onLoad() {
							
						},
						mounted() {
							 this.getUser()
						},
						onReachBottom() {

						},
						onShareAppMessage() {
							return {
								title: '分享'
							}
						},
						methods: {
							login_zheshow(){
								this.zheshow = !this.zheshow
							},
							loset(Logon_Credentials){
								let that = this
								let opts = {
									url: 'api/User/avatar',
									method: 'post', 
								};
								let param = Logon_Credentials 
								request.httpTokenRequest(opts,param).then(res => { 
									if (res.statusCode == 200) {
										that.user = res.data.body; 
									}  
								});
								console.log(Logon_Credentials,'登录信息')
							},
							getUserInfo() {  
								this.zheshow = true;
							} ,
							getUser(){
								let that = this
								let opts = {
									url: 'api/User/info',
									method: 'get', 
								};
								let param = {} 
								request.httpTokenRequest(opts,param).then(res => { 
									if (res.statusCode == 200) {
										that.user = res.data.body; 
									}  
								});
							}, 
						}
					}
				</script>
				<style lang="scss" scoped>
					.container {
						width: 750rpx;
						color: #333333;

						.bg-top {
							margin-top: -1rpx;
							width: 750rpx;
							height: 220rpx;
							padding-top: 50rpx;
							border-radius: 0 0 20% 20%;

							.top-box {
								width: 700rpx;
								background-color: #FFFFFF;
								margin: 0 auto;
								border-radius: 20rpx;
								padding: 20rpx 30rpx 0rpx;
								position: relative;

								.qh-pic {
									position: absolute;
									right: 64rpx;
									top: -50rpx;
									border-radius: 12rpx;
								}

								.qh-title {
									width: 100%;
									height: 60rpx;
									line-height: 65rpx;
									padding-right: 190rpx;
								}

								.bxBox {
									position: relative;
									display: flex;
									/* padding: 0 30rpx; */
									min-height: 100rpx;
									/* background-color: #ffffff; */
									/* justify-content: space-between; */
									align-items: center;
									font-size: 30rpx;
									line-height: 1.6em;
									flex: 1;

									.bxImg {
										display: inline-block;
										margin-right: 10rpx;
										width: 1.6em;
										text-align: center;
									}
								}

							}
						}

						.center-box {
							color: #333333;
							width: 700rpx;
							background-color: #FFFFFF;
							margin: 0 auto;
							border-radius: 20rpx;
							padding: 0rpx 30rpx 0rpx;
							position: relative;
							margin-top: 20rpx;
						}
					}
				</style>

3.  将对应的函数和变量添加上
4.  项目index.vue有现成的示例，可进行修改
5.  一定要在web中设置地图参数
 
 