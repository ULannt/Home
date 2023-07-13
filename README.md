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
