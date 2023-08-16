# HTML

## H5 新特性有哪些

语义化标签

表单控件

音频视频标签

canvas

本地存储

多线程操作：Web Worker

## 谈谈标签语义化

语义化标签有 header、main、footer、nav、aside

合理使用语义化标签，可以使 html 结构更清晰，便于团队开发和维护；还可以做 SEO 搜索引擎优化。

搜索引擎优化的作用就是提高网站在搜索引擎的排名。

优化方式可以使用语义化标签，例如图片的 alt 属性、title 标签、h 标签；

还可以建立更多跳转到自己网站的链接，让爬虫多次访问；提高网站加载速度，让爬虫在一定时间内访问更多网页；

还可以设置 meta 标签的 keword 和 description 属性；

或者使用服务端渲染

## src 和 href 的区别

资源类型与作用结果不同：

在请求 src 资源时会将其指向的资源下载并应用到文档中，替换当前元素。例如 script、img、iframe 标签

href 会指向网络资源所在位置，建立资源和文档之间的链接。例如 link 或 a 标签

浏览器解析方式不同：

当浏览器解析到 src，会暂停其他资源的下载和处理，阻塞当前页面的渲染。所以建议把 script 标签放在底部

如果在文档中添加 href，浏览器会识别该文档为 css 文件，就会并行下载资源并且不会停止对当前文档的处理

## 说说块元素和行内元素

常见的块元素有 div、p、ul、table、form

块元素独占一行，可以设置宽高和内外边距，且宽度默认为父元素的 100%；

块元素可以嵌套块元素和行内元素，但是 p、h、dt标签不行



常见的行内元素有 span、a、strong、em

行内元素不独占一行，不能设置宽高，可以设置水平方向的内外边距，宽度默认为内容的宽度

行内元素只能嵌套行内元素，但是 a 标签可以嵌套除了 a 标签块元素和行内元素



常见的行内块元素有 input、textarea

行内块元素不独占一行，可以设置宽高和内外边距，宽度默认为内容的宽度



img 是行内替换元素，可以设置宽高

## 谈谈 iframe





# CSS

## C3 新特性有哪些

新增了属性名选择器、伪类选择器和伪元素选择器

圆角边框

不透明度

文本阴影和盒子阴影

2D 转换：平移、旋转、缩放

过渡和动画

媒体查询（@media 用来做响应式布局）

## 谈谈 BFC

BFC 称为块级格式化上下文。是一个独立的渲染区域，让处于 BFC 内部的元素与外部元素相互隔离，互不影响

开启 BFC 可以解决父元素外边距塌陷问题，和浮动导致的父元素高度塌陷问题

开启 BFC 的方式有：浮动、绝对定位或固定定位、设置 overflow、设置为行内块元素

## CSS 预处理器

CSS 预处理器有 Sass、Less 和 Stylus，它们为 CSS 添加了一些编程特性，让我们可以对 CSS 进行复用

我在项目中使用过 Sass，它可以定义变量或者常量，在项目中可以定义一些主题颜色和字体大小；

Sass 还允许代码嵌套，可读性高；

还可以通过 @mixin 定义一些混入，例如用省略号代替多行文本溢出，它有点类似于函数，提高样式的可复用性；

还可以通过 @extend 实现继承

## 谈谈 Flex 布局

Flex 布局又称为弹性布局。容器中存在主轴和侧轴，默认情况下，主轴水平向右，侧轴垂直向下

容器的属性：

`flex-direction` 设置主轴方向

`flex-wrap` 设置是否换行

`justify-content` 设置弹性元素在主轴的排列方式

`align-items` 设置弹性元素在侧轴的排列方式

`align-content` 设置换行的弹性元素在侧轴的排列方式

弹性元素的属性：

`align-self` 设置弹性元素自身的排列方式

`order` 设置弹性元素的排列顺序

`flex-grow` 给弹性元素按比例分配富余空间，默认为 0

`flex-shrink` 按比例压缩弹性元素，默认为 1

`flex-basis` 设置弹性元素被压缩时最小的大小，默认为 auto

`flex: 1` 是 `flex-grow: 1` `flex-shrink: 1` `flex-basis: 0` 的简写；表示弹性元素会等比例分配富余空间或等比例压缩，且被压缩时最小的大小为 0

## 如何让元素水平垂直居中

给父元素设置相对定位，给子元素设置绝对定位，给子元素设置 left 和 top 为 50%，并水平和垂直平移 -50%；

将容器设置为弹性容器，设置弹性元素在主轴和侧轴上居中





# Vue

## computed 与 methods

- computed 是基于它们的响应式依赖进行缓存的，只在相关响应式依赖发生改变时它们才会重新求值

- 每当触发重新渲染时，调用 methods 总会再次执行函数

## computed 与 watch

- 当我们有一些数据需要随着其它数据变动而变动时，使用 computed 更好

- watch 可以监听数据的变化，当需要在数据变化时执行异步或开销较大的操作时，使用 watch 最合适

## v-if 与 v-show

- `v-if` 是真正的条件渲染，因为它会确保元素在切换过程中被销毁和重建

- `v-if` 也是惰性的，如果在初始渲染时条件为假，则什么也不做，直到条件第一次变为真时，才会开始渲染

- `v-show` 不管初始条件是什么，元素都会被渲染，并且只是简单地基于 CSS 进行切换

- `v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销

- 如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好

## v-if 与 v-for 一起使用

当 `v-if` 与 `v-for` 一起使用时，`v-for` 具有比 `v-if` 更高的优先级

## key

当 Vue 更新使用 `v-for` 渲染的列表时，它默认使用 “就地更新” 的策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染

这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出

为了让 Vue 能够跟踪每个节点的身份，从而复用和重新排序现有元素，我们需要为每项提供一个唯一的 `key`

## 用的组件库实现不了怎么办



## 封装过哪些模块



## 页面白屏的原因

- 打包后的 JS 和 CSS 文件太大，导致浏览器加载时间变长，加载完成之后才进行页面渲染，从而导致白屏

- 解决：

  - 如果白屏时间不是很长，可以添加一个 loading 效果
  
  - 使用路由懒加载，分开打包文件，访问路由时才加载对应的文件
  
  - CDN 资源优化，把 vue 等第三方资源，改为通过 CDN 链接获取，在 index.html 插入相应的链接
  
  - 静态资源缓存：资源长期不会修改，使用强制缓存；资源随时变化，使用协商缓存
  
  - *服务端渲染：在服务端将渲染逻辑处理好，将处理好的 html 返回给前端
