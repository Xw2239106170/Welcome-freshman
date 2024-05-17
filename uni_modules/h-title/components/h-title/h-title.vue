<!-- 标题组件 -->

<template>
	<view>
		<view class="flex jbetween" :style="{
				background: !cover?colorRgba(color,0.1):''
			}" :class="!cover?'paddingTB10':''">
			<view class="paddingL5" v-if="!cover"
				:style="{borderLeft:'solid 8rpx ' + color,fontSize:size,color:titleColor}">
				{{title}}
			</view>
			<view class="line30 colorF paddingLR15" v-else :style="{
				color:titleColor,fontSize:size,boxShadow: !boxShadow ? '' : '2px 2px 2px 0 ' + color,
				background: !gradients ? color : 'linear-gradient(to bottom right, '+ color +', '+ colorRgba(color,0.2) +')',}">
				{{title}}
			</view>
			<view class="size13" v-if="!moreShow" @click="$emit('active')">
				{{ moreText }}
				<h-icon icon="h-youjiantou paddingL3" size="24rpx" :color="color"></h-icon>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * @description 标题导航
	 * @example <h-title title='标题'></h-title>
	 * 
	 * @property {String}			title				标题名称 （默认 标题 ）
	 * @property {String}			titleColor			标题字体颜色 （默认 #000000 ）
	 * @property {String}			color				主题颜色（默认 #f15723 ）
	 * @property {String}			size				字体大小（默认 28rpx ）
	 * @property {Boolean}			moreShow			是否显示更多More（默认 false ）
	 * @property {Boolean}			moreText			More展示文字（默认 More ）
	 * @property {Boolean}			cover				是否背景全覆盖（默认 false ）
	 * @property {Boolean}			boxShadow			背景全覆盖-是否有阴影（默认 false ）
	 * @property {Boolean}			gradients			背景全覆盖-是否开启渐变色（默认 false ）
	 * 
	 * @event {Function} active			点击More和箭头时触发
	 */

	export default {
		// 小程序样式穿透
		options: {
			styleIsolation: 'shared'
		},
		name: "h-title",
		props: {
			// 标题
			title: {
				type: String,
				default: '标题'
			},
			// 标题字体颜色
			titleColor: {
				type: String,
				default: '#000000'
			},
			// 主题颜色
			color: {
				type: String,
				default: '#f15723'
			},
			// 字体大小
			size: {
				type: String,
				default: '28rpx'
			},
			// 是否显示更多
			moreShow: {
				type: Boolean,
				default: false
			},
			// More展示文字
			moreText: {
				type: String,
				default: 'More'
			},
			// 是否背景全覆盖
			cover: {
				type: Boolean,
				default: false
			},
			// 背景全覆盖-是否有阴影
			boxShadow: {
				type: Boolean,
				default: false
			},
			// 背景全覆盖-是否开启渐变色
			gradients: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {};
		},
		methods: {
			// 颜色转换
			colorRgba(sHex, alpha = 1) {
				// 十六进制颜色值的正则表达式
				var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
				/* 16进制颜色转为RGB格式 */
				let sColor = sHex.toLowerCase()
				if (sColor && reg.test(sColor)) {
					if (sColor.length === 4) {
						var sColorNew = '#'
						for (let i = 1; i < 4; i += 1) {
							sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
						}
						sColor = sColorNew
					}
					//  处理六位的颜色值
					var sColorChange = []
					for (let i = 1; i < 7; i += 2) {
						sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
					}
					if (alpha == 1) {
						return sColorChange.join(',')
					} else {
						return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')'
					}
				} else {
					return sColor
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #f9f9f9;
		font-family: '微软雅黑', sans-serif;
		font-size: 28rpx;
		min-height: 100%;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
	}

	.paddingTB10 {
		padding: 20rpx 0;
	}

	.jbetween {
		justify-content: space-between;
	}

	.flex {
		display: flex;
	}

	.paddingL5 {
		padding-left: 10rpx;
	}

	.paddingLR15 {
		padding: 0 30rpx;
	}

	.line30 {
		line-height: 60rpx;
	}

	.colorF {
		color: #FFFFFF;
	}

	.size13 {
		font-size: 26rpx;
	}
</style>