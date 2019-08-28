const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('styles', resolve('src/assets/styles'))
  },
  devServer: {
    // 设置默认端口
    port: 8081,
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    }
  }
}
