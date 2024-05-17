## 标题组件
> **组件名：h-title**

### 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。

### 基本用法

在 ``template`` 中使用组件

```html
<!-- 全背景模式 -->

<!-- 基本用法 -->
<h-title title="基本用法" :cover="true" more></h-title>
<h-title title="基本用法" :cover="true" more color="#0079fe"></h-title>
<h-title title="基本用法" :cover="true" more color="#30b6a2"></h-title>

<!-- 标题颜色 -->
<h-title title="标题颜色" :cover="true" moreShow titleColor="#ffffff"></h-title>
<h-title title="标题颜色" :cover="true" moreShow color="#0079fe" titleColor="#ffffff"></h-title>
<h-title title="标题颜色" :cover="true" moreShow color="#30b6a2" titleColor="#ffffff"></h-title>

<!-- 有阴影 -->
<h-title title="有阴影" :cover="true" more boxShadow></h-title>
<h-title title="有阴影" :cover="true" more boxShadow color="#0079fe"></h-title>
<h-title title="有阴影" :cover="true" more boxShadow color="#30b6a2"></h-title>

<!-- 渐变背景 -->
<h-title title="渐变背景" :cover="true" more gradients></h-title>
<h-title title="渐变背景" :cover="true" more gradients color="#0079fe"></h-title>
<h-title title="渐变背景" :cover="true" more gradients color="#30b6a2"></h-title>

<!-- 渐变背景 + 阴影 -->
<h-title title="渐变背景 + 阴影" :cover="true" more gradients boxShadow></h-title>
<h-title title="渐变背景 + 阴影" :cover="true" more gradients boxShadow color="#0079fe"></h-title>
<h-title title="渐变背景 + 阴影" :cover="true" more gradients boxShadow color="#30b6a2"></h-title>

<!-- 标题模式 -->

<!-- 自定义标题 -->
<h-title title="标题名称"></h-title>
<!-- 自定义标题字体颜色 -->
<h-title title="标题字体颜色" titleColor="red"></h-title>
<!-- 自定义主题颜色 -->
<h-title title="主题颜色" color="#0079fe"></h-title>
<h-title title="主题颜色" color="#30b6a2"></h-title>
<!-- 自定义字体大小 -->
<h-title title="字体大小" size="32rpx"></h-title>
<!-- 自定义More展示文字 -->
<h-title title="More文字" moreText="更多"></h-title>
<!-- 是否存在More -->
<h-title title="无More" more></h-title>
```

组件中图标使用了自己的h-icon 组件，小程序不支持网络链接，使用时需要下载自己的图标库，使用本地地址；h-icon文档链接：https://ext.dcloud.net.cn/plugin?id=13216

## API

### Props

|  属性名	|  类型		| 默认值	|           说明			|
| :-------:	| :-----:	| :-----:	| :-----------------------:	|
|   title	| String	|  标题		|         标题名称			|
| titleColor	| String	| #000000 | 标题字体颜色	|
|   color	| String	| #f15723	|         主题颜色			|
|   size	| String	|  28rpx	|         字体大小			|
| moreShow	| Boolean	|  false	|     是否显示更多More		|
| moreText	| String	|  More		|       More展示文字		|
|   cover	| Boolean	|  false	|      是否背景全覆盖		|
| boxShadow	| Boolean	|  false	|   背景全覆盖-是否有阴影	|
| gradients	| Boolean	|  false	| 背景全覆盖-是否开启渐变色	|



### Events

| 事件名 | 类型     | 回调参数 | 说明         |
| ------ | -------- | -------- | ------------ |
| active | function | 无       | more点击事件 |



