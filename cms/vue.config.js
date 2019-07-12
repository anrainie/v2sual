

module.exports = {
  baseUrl: './',
  devServer: {
    // open: true,
    // host: '0.0.0.0',
    port: 7010,
    //  https: true,
    disableHostCheck: true,
    hotOnly: false,
    proxy: {
      //假数据
      '/mock':{
        target: 'http://localhost:7011',
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
        ws:false,
        pathRewrite: {
          '/mock': '/'
        }
      }
    }
  },
  productionSourceMap: false,
  filenameHashing: false,
  transpileDependencies:['element-ui/src/utils/dom.js'],
  // chainWebpack: config => {
  //   // 指定入口  es6转es5
  //   config.entry.app = ['babel-polyfill', './src/main.js'];
  // },
  css: {

    modules: false,
    extract: false,
    sourceMap: false,
    loaderOptions: {
      sass: {
        // 向全局sass样式传入共享的全局变量
        data: `@import "./element-variables.scss";`
      }
    }
  }
}