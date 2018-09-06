'use strict'
// 基础配置文件
const path = require('path')
module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'ai-prefix': 'ai',
          // 'icon-url ': '"https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i"',
        },
        paths: [
          path.resolve(__dirname, 'node_modules')
        ],
        javascriptEnabled: true
      }
    }
  }
}