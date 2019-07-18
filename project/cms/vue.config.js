module.exports = {
  publichPath:'/cms/',
  devServer: {
    port: 7009,
    sockPort:443,
    sockPath:'/cms/sockjs-node',
    disableHostCheck: true,
    hotOnly: false,
    proxy: {
      //假数据
      '/mock': {
        target: 'http://localhost:7011',
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
        pathRewrite: {
          '/mock': '/'
        }
      }
    }
  },
  productionSourceMap: false,
  filenameHashing: false,
  css: {
    modules: false,
    extract: false,
  sourceMap: false,
    loaderOptions: {
      sass: {
        // 向全局sass样式传入共享的全局变量
        data: '@import "./element-variables.scss";'
      }
    }
  }
}
