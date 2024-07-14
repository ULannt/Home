import{_ as u}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as d,f as m,c as b,e as o,w as a,a as g,b as n,d as s}from"./app-P7nEa-JX.js";const h={};function _(k,v){const c=r("FontIcon");return d(),m(c,{icon:"ts",color:"#007acc"})}const i=u(h,[["render",_],["__file","Ts.vue"]]),f={};function y(k,v){const c=r("FontIcon");return d(),m(c,{icon:"vue",color:"#42b883"})}const l=u(f,[["render",y],["__file","Vue.vue"]]),x=g(`<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── .nuxt                  nuxt dev 创建的应用程序
├── .output                nuxt build 创建的生产文件
├── assets                 构建工具处理的资源
├── components             组件
├── composables            组合式函数
├── layouts                布局
├── middleware             中间件
├── pages                  页面
├── plugins                插件
├── public                 静态资源
├── server                 服务器
├── utils                  工具函数
├── .env                   环境变量
├── app.vue                主文件
├── app.config.ts          应用配置
├── nuxt.config.ts         脚手架配置
├── package.json           依赖管理
└── tsconfig.json          TS 配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h2><h3 id="nuxtlayout" tabindex="-1"><a class="header-anchor" href="#nuxtlayout" aria-hidden="true">#</a> NuxtLayout</h3><p>显示 <code>layouts</code> 中的布局。</p><p>默认显示 <code>layouts/default.vue</code> 布局。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- app.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtLayout</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以自定义布局文件的名称。</p><p>显示 <code>layouts/custom.vue</code> 布局。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtLayout</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="页面" tabindex="-1"><a class="header-anchor" href="#页面" aria-hidden="true">#</a> 页面</h2><h3 id="nuxtpage" tabindex="-1"><a class="header-anchor" href="#nuxtpage" aria-hidden="true">#</a> NuxtPage</h3><p>显示 <code>pages</code> 中的页面。</p><p>它是对 <code>&lt;RouterView&gt;</code> 的封装。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- layouts/default.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtPage</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="definepagemeta" tabindex="-1"><a class="header-anchor" href="#definepagemeta" aria-hidden="true">#</a> definePageMeta</h3><p>定义页面的 meta 数据。</p>`,17),w=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token function"},"definePageMeta"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"isHideHeader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Header")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("!$route.meta.isHideHeader"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("NuxtPage")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Footer")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h2",{id:"请求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#请求","aria-hidden":"true"},"#"),s(" 请求")],-1),F=n("h3",{id:"usefetch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usefetch","aria-hidden":"true"},"#"),s(" useFetch")],-1),q=n("p",null,"请求数据。",-1),U=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" UseFetchOptions "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"nuxt/app"'),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"request"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s(`
  url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(`
  options`),n("span",{class:"token operator"},":"),s(" UseFetchOptions"),n("span",{class:"token operator"},"<"),s("ResponseResult"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">>"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 设置请求头"),s(`
  `),n("span",{class:"token comment"},"// options.headers = ..."),s(`
  
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" data"),n("span",{class:"token punctuation"},","),s(" pending"),n("span",{class:"token punctuation"},","),s(" error"),n("span",{class:"token punctuation"},","),s(" refresh "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"useFetch"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},","),s(" options"),n("span",{class:"token punctuation"},")"),s(`
  
  `),n("span",{class:"token keyword"},"return"),s(" data"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"&&"),s(" data"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),s("code "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"200"),s(`
    `),n("span",{class:"token operator"},"?"),s(" data"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),s(`data
    `),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"||"),s(" data"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"."),s("message"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" UseFetchOptions "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"nuxt/app"'),s(`
`),n("span",{class:"token keyword"},"import"),s(" request "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"utils/request"'),s(`

`),n("span",{class:"token keyword"},"const"),s(" baseURL "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"VITE_BASE_URL"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" apiGet "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s(`
  url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(`
  options`),n("span",{class:"token operator"},":"),s(" UseFetchOptions"),n("span",{class:"token operator"},"<"),s("ResponseResult"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"GET"'),n("span",{class:"token punctuation"},","),s(`
    baseURL
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},","),s(" options"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" apiPost "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s(`
  url`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(`
  body`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},","),s(`
  options`),n("span",{class:"token operator"},":"),s(" UseFetchOptions"),n("span",{class:"token operator"},"<"),s("ResponseResult"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">>"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"POST"'),n("span",{class:"token punctuation"},","),s(`
    body`),n("span",{class:"token punctuation"},","),s(`
    baseURL
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},","),s(" options"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"const"),s(" categories "),n("span",{class:"token operator"},"="),s(" ref"),n("span",{class:"token operator"},"<"),s("Category"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
  categories`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" apiGet"),n("span",{class:"token operator"},"<"),s("Category"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s("url"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("h2",{id:"服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#服务","aria-hidden":"true"},"#"),s(" 服务")],-1),N=n("h3",{id:"defineeventhandler",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#defineeventhandler","aria-hidden":"true"},"#"),s(" defineEventHandler")],-1),j=n("p",null,"注册 API 模拟数据。",-1),H=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineEventHandler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
    code`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(`
    data`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" imageUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/images/banner1.jpg"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(" imageUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/images/banner2.jpg"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(" id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(" imageUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/images/banner3.jpg"'),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    message`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ok"'),n("span",{class:"token punctuation"},","),s(`
    success`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"setup"),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" data"),n("span",{class:"token punctuation"},","),s(" error "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useFetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/banners"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"baseURL"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"/api"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E={__name:"nuxt.html",setup(k){return(v,c)=>{const p=r("Tabs");return d(),b("div",null,[x,o(p,{id:"44",data:[{id:"<Vue /> pages/login.vue"},{id:"<Vue /> layouts/default.vue"}],"tab-id":"definePageMeta"},{title0:a(({value:e,isActive:t})=>[o(l),s(" pages/login.vue")]),title1:a(({value:e,isActive:t})=>[o(l),s(" layouts/default.vue")]),tab0:a(({value:e,isActive:t})=>[w]),tab1:a(({value:e,isActive:t})=>[T]),_:1},8,["data"]),A,F,q,o(p,{id:"61",data:[{id:"<Ts /> utils/request.ts"},{id:"<Ts /> api/index.ts"},{id:"<Vue /> *.vue"}],"tab-id":"useFetch"},{title0:a(({value:e,isActive:t})=>[o(i),s(" utils/request.ts")]),title1:a(({value:e,isActive:t})=>[o(i),s(" api/index.ts")]),title2:a(({value:e,isActive:t})=>[o(l),s(" *.vue")]),tab0:a(({value:e,isActive:t})=>[U]),tab1:a(({value:e,isActive:t})=>[R]),tab2:a(({value:e,isActive:t})=>[V]),_:1},8,["data"]),P,N,j,o(p,{id:"81",data:[{id:"<Ts /> server/api/banners.ts"},{id:"<Vue /> *.vue"}],"tab-id":"defineEventHandler"},{title0:a(({value:e,isActive:t})=>[o(i),s(" server/api/banners.ts")]),title1:a(({value:e,isActive:t})=>[o(l),s(" *.vue")]),tab0:a(({value:e,isActive:t})=>[H]),tab1:a(({value:e,isActive:t})=>[L]),_:1},8,["data"])])}}},B=u(E,[["__file","nuxt.html.vue"]]);export{B as default};
