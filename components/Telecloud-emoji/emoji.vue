<template>
	<view class="emoji_blur"   @click="emiji_blur" v-if="show">
		<view class="emoji_box"  >
			<scroll-view class="scrool" scroll-y="true">
				<view class="emojis">
					<text @click.stop="tap(item)" v-for="(item,index) in list">{{item}}</text>
				</view>
			</scroll-view>
		</view>
	</view>
	
</template>

<script setup>
	const emit = defineEmits(["emoji",'emojiblur'])
		const props = defineProps(['show'])
	let list = [
		'๐', '๐', '๐', '๐คฃ', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅฐ', '๐', '๐คฉ', '๐', '๐', 'โบ๏ธ', '๐', '๐',
		'๐', '๐', '๐', '๐คช', '๐', '๐ค', '๐ฉ', '๐', '๐จ', '๐ญ', '๐', '๐ค', '๐ค ', '๐', '๐ฅณ', '๐ต', '๐คง', '๐ค',
		'๐ค', '๐คญ', '๐คซ', '๐ค', '๐ค', '๐คจ', '๐', '๐', '๐ถ', '๐', '๐', '๐', '๐ฌ', '๐คฅ', '๐ถโ๐ซ๏ธ', '๐ฎโ๐, '๐ด',
		'๐คฎ', 'โค๏ธ', '๐ฏ', '๐', '๐ฉ', '๐คก', '๐ค', '๐ป', '๐', '๐', '๐', '๐ฃ', '๐', '๐ก', '๐คฌ', '๐ '
	]
	const tap = (e) => {
		emit('emoji', e)
	}
	const emiji_blur = ()=>{ 
		emit('emojiblur')
	}
</script>

<style lang="less" scoped>
	.emoji_blur{
		height: 100vh;
		width: 100%;
		position: absolute;
		top: 0;
		background: red;
		.emoji_box {
			height: 430rpx;
			background: #f6f6f6;
			position: fixed;
			bottom: 0;
		}
	}
	.scrool {
		height: 400rpx;
		width: 100%;
		margin-top: 30rpx;
	}

	.emojis {
		width: 95%;
		margin: 0 auto;
		font-size: 40rpx;
		display: flex;
		flex-wrap: wrap;
		gap: 10rpx 25rpx;
		flex-shrink: 3;
		padding-bottom: 50rpx;
	}

	
</style>