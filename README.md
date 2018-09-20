# 工作中台基础UI

#### 项目介绍
[SeedWorkbenchUi](https://github.com/ruyangit/seed-workbench-ui) 简洁的中台UI，vuejs 开发，组件化，模块化 See: <a href="https://ruyangit.gitee.io/seed-workbench-ui">demo</a>

<p align="center">
  <!-- <a><img src="https://img.shields.io/github/release/ruyangit/seed-workbench-ui.svg"/></a>
  <a><img src="https://badge.fury.io/js/%40seed-workbench-ui%2Fice-scaffold.svg"/></a> -->
  <a><img src="https://img.shields.io/github/last-commit/ruyangit/seed-workbench-ui.svg"/></a>
  <a><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"/></a>
  <a><img src="https://img.shields.io/github/forks/ruyangit/seed-workbench-ui.svg"/></a>
<a><img src="https://img.shields.io/github/stars/ruyangit/seed-workbench-ui.svg"/></a>
</p>

#### 先来波图

![banner](https://ruyangit.gitee.io/bgcdn/analysis.jpg)
![banner](https://ruyangit.gitee.io/bgcdn/workplace.jpg)
![banner](https://ruyangit.gitee.io/bgcdn/list.jpg)
![banner](https://ruyangit.gitee.io/bgcdn/setting.jpg)
![banner](https://ruyangit.gitee.io/bgcdn/phone_login.jpg)
![banner](https://ruyangit.gitee.io/bgcdn/register.jpg)

#### 预览
[预览地址](https://ruyangit.gitee.io/seed-workbench-ui)

> 预览部署在 Github Page ，如果您访问时由于网络原因卡在载入界面或者白屏，请克隆或者下载本仓库在本地运行查看效果。


#### 软件架构
* [vue/cli3](https://cli.vuejs.org)
* vue 2.5.17 
* vue-router 3.0.1
* vuex 3.0.1
* vuex-router-sync 5.0.5
* vue-i18n 8.1.0
* numeral 2.0.6
* axios 0.18.0
* [ant-design-vue 1.1.2 组件库](https://vuecomponent.github.io/ant-design-vue)
* [antv/g2 3.2.7 图表库](http://g2.alipay.com/)


#### 安装教程
```
npm install
```

### 运行包含热加载的开发环境
```
npm run serve
```

### 打包压缩后的生产文件
```
npm run build
```

### 本地如何运行打包后的生产文件
```
npm install serve -g  安装serve服务 -g 安装到全局

serve -s dist 运行打包后的生产文件 dist 打包后的文件夹
```

### Lints and fixes files
```
npm run lint
```

#### 使用说明

1. 运行文件配置 [vue.config.js](https://github.com/ruyangit/seed-workbench-ui/blob/dev/vue.config.js)
```
// 基础路径 注意发布之前要先修改这里
const baseUrl = '/'
if (process.env.NODE_ENV === 'production') {
  baseUrl = '/seed-workbench-ui/'
}

// 主题样式全局修改替换
css: {
  loaderOptions: {
    less: {
      modifyVars: {
        'ai-prefix': 'ai',
        'primary-color': '#42b983'
      },
      paths: [
        resolve('node_modules'),
        resolve('src')
      ],
      javascriptEnabled: true
    }
  }
}

// 过滤掉moment其它国家，只保留中文和英文
configureWebpack: {
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(zh-cn|en-us)$/),
  ]
}

// 配置本地svg优化方案 ，重新设置src别名@
chainWebpack: config => {
  const svgRule = config.module.rule('svg')
  svgRule.uses.clear()
  svgRule
    .include
    .add(resolve('src/assets/svg-icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'ai-[name]'
    })
    .end()
  // image exclude
  const imagesRule = config.module.rule('images')
  imagesRule
    .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
    .exclude
    .add(resolve('src/assets/svg-icons'))
    .end()
  // 重新设置 alias
  config.resolve.alias.set('@', resolve('src'))
}
```
2. 编译文件配置 [babel.config.js](https://github.com/ruyangit/seed-workbench-ui/blob/dev/babel.config.js)
```
// 设置ant-design-vue 按需加载方案
"plugins": [
  ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": true }]
]
```
3. 组件及页面API说明待后续时间充裕补充上来。

#### 计划
* 后续完善UI中所需的组件
* 对接完成自己开发的后台系统
  [SpringbootSeed](https://gitee.com/ruyangit/springboot-seed)
* 关于阿里的g2 或者百度的 echarts 对于我来说感觉有点大，之后看看图表相关的简化一下
* 代码的规范及API文档的编写
* 代码的CI，CD测试


#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


#### 人家都喝咖啡，我就喝瓶水就行，谢谢支持！