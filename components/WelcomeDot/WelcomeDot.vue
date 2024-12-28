<template>
  <view class="ai-chat-window">
    <!-- 聊天头部 -->
    <view class="chat-header">
      <view class="header-left">
        <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/405b0c2c-a1de-4272-9b14-cf7cf4a69e5a.png"
          class="ai-icon"></image>
        <text class="header-title">Ai 张张</text>
      </view>
    </view>

    <!-- 消息区域 -->
    <scroll-view class="messages-container" scroll-y :scroll-into-view="scrollToView" enable-back-to-top>
      <view class="message-list">
        <block v-for="(msg, index) in messages" :key="index" style=" overflow-y: scroll;">
          <view :class="[
							'message-item', 
							msg.sender === 'user' ? 'user-message' : 'ai-message'
						]">
            <!-- 头像 -->
            <view class="message-avatar">
              <image
                :src="msg.sender === 'user' ? UserAvatar : 'https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/872b3a71-181f-458a-9bef-7ca7a2457d1f.png'"
                class="avatar-icon">
              </image>
            </view>

            <!-- 消息内容 -->
            <view :class="[
								'message-content', 
								msg.sender === 'user' ? 'user-content' : 'ai-content'
							]">
              <text user-select="text">{{ msg.text }}</text>

              <!-- 消息状态 -->
              <view class="message-status" v-if="msg.status">
                <!-- 发送中状态 -->
                <image v-if="msg.status === 'sending'"
                  src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/99b593db-559d-44a6-9e5c-2ece2814b601.gif"
                  class="status-icon"></image>

                <!-- 发送失败状态 -->
                <image v-if="msg.status === 'error'" src="/static/retry.png" class="status-icon"
                  @click="retryMessage(msg)"></image>
              </view>
            </view>
          </view>
        </block>
        <view id="scrollBottom"></view>
      </view>
    </scroll-view>

    <!-- 输入区域 -->
    <view class="input-container">
      <!-- 文本输入框 -->
      <textarea class="message-input" v-model="inputMessage" placeholder="输入消息..." @input="adjustInputHeight"
        :style="{ height: inputHeight + 'px' }" confirm-type="send" @confirm="sendMessage"></textarea>

      <!-- 发送按钮 -->
      <view class="send-button" :class="{'send-disabled': !inputMessage.trim() || isLoading}" @click="sendMessage">
        <image src="https://zhihuiyingxin.oss-cn-hangzhou.aliyuncs.com/1057621f-90ba-4fc2-b69a-83cd1cbfb992.png"
          class="send-icon"></image>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState
  } from 'vuex';
  export default {
    computed: {
      ...mapState('user', ['UserAvatar'])
    },
    data() {
      return {
        messages: [{
          id: 1,
          text: '你好！我是小助手张张，有什么可以帮你的吗？',
          sender: 'ai',
          timestamp: Date.now(),
          type: 'text'
        }],
        inputMessage: '',
        isLoading: false,
        isSpeechEnabled: false,
        scrollToView: '',
        inputHeight: 40 // 默认输入框高度
      }
    },
    methods: {
      // 发送消息
      sendMessage() {
        // 检查消息是否为空
        if (!this.inputMessage.trim()) {
          uni.showToast({
            title: '消息不能为空',
            icon: 'none'
          })
          return
        }

        // 添加用户消息
        const userMessage = {
          id: this.messages.length + 1,
          text: this.inputMessage,
          sender: 'user',
          timestamp: Date.now(),
          status: 'sending',
          type: 'text'
        }
        this.messages.push(userMessage)

        // 重置输入框
        const originalMessage = this.inputMessage
        this.inputMessage = ''
        this.inputHeight = 40 // 重置输入框高度
        this.isLoading = true

        // 模拟AI响应
        this.simulateAIResponse(originalMessage)
      },

      // 模拟AI响应
      async simulateAIResponse(userMessage) {
        const res = await uni.$http.get('/ai', {
          sentence: userMessage
        })
        const aiMessage = {
          id: this.messages.length + 1,
          text: res.data.data,
          sender: 'ai',
          timestamp: Date.now(),
          type: 'text'
        }

        this.messages.push(aiMessage)
        this.isLoading = false
        this.scrollToBottom()

        // 语音朗读
        if (this.isSpeechEnabled) {
          this.speakText(aiMessage.text)
        }
      },

      // 重试发送失败的消息
      retryMessage(message) {
        if (message.status === 'error') {
          this.sendMessage()
        }
      },

      // 滚动到底部
      scrollToBottom() {
        this.scrollToView = 'scrollBottom'
      },

      // 调整输入框高度
      adjustInputHeight(e) {
        // 动态调整输入框高度，最大高度为100px
        uni.createSelectorQuery().select('.message-input')
          .fields({
            scrollHeight: true
          }, (res) => {
            // this.inputHeight = Math.min(res.scrollHeight, 100)
          }).exec()
      },

      // 语音朗读功能
      speakText(text) {
        // uni-app 使用 plus.speech 进行语音朗读
        // 注意：需要在manifest.json中配置语音权限
        // #ifdef APP-PLUS
        if (plus.speech) {
          plus.speech.startSpeak({
            text: text,
            lang: 'zh-CN'
          })
        }
        // #endif
      },

      // 切换语音开关
      toggleVoice() {
        this.isSpeechEnabled = !this.isSpeechEnabled

        // 提示用户语音状态
        uni.showToast({
          title: this.isSpeechEnabled ? '语音已开启' : '语音已关闭',
          icon: 'none'
        })
      }
    }
  }
</script>

<style scoped>
  .ai-chat-window {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f5f5f5;
  }

  .chat-header {
    background: linear-gradient(to right, #4a90e2, #8e44ad);
    /* 左到右的渐变颜色 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #007AFF;
    color: white;
  }

  .header-left {
    display: flex;
    align-items: center;
  }

  .ai-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .header-title {
    font-weight: bold;
    font-size: 18px;
  }

  .voice-icon {
    width: 24px;
    height: 24px;
  }

  .messages-container {
    flex-grow: 1;
    padding: 15px 0;
    background-color: white;

  }

  .message-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 150rpx;
  }

  .message-item {
    display: flex;
    margin-bottom: 15px;
    align-items: flex-start;
  }

  .message-avatar {
    margin-right: 10px;
    margin-left: 10px;
  }

  .avatar-icon {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  .message-content {
    max-width: 70%;
    padding: 10px;
    border-radius: 10px;
    position: relative;
  }

  .user-message {
    flex-direction: row-reverse;
  }

  .user-content {
    background-color: #007AFF;
    color: white;
    margin-left: 10px;
  }

  .ai-content {
    background-color: #f0f0f0;
    color: black;
    margin-right: 10px;
  }

  .message-status {
    position: absolute;
    bottom: -10px;
    right: -10px;
  }

  .status-icon {
    width: 20px;
    height: 20px;
  }

  .input-container {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    padding: 10px;
    background-color: white;
    border-top-width: 1px;
    border-top-color: #e0e0e0;
  }

  .attach-button {
    margin-right: 10px;
  }

  .attach-icon {
    width: 30px;
    height: 30px;
  }

  .message-input {
    flex-grow: 1;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 10px;
    min-height: 40px;
    max-height: 80px;
    margin-right: 10px;
    width: 550rpx;
    /*    box-sizing: border-box;
    overflow: hidden; */
  }

  .send-button {
    background-color: #007AFF;
    border-radius: 25px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .send-icon,
  .loading-icon {
    width: 30px;
    height: 30px;
  }

  .send-disabled {
    opacity: 0.5;
  }
</style>