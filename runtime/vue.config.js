var nodeServer = require('./proxy/proxy.node.js')
module.exports = {
    baseUrl: './',
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 7007,
        disableHostCheck: true,
        hotOnly: false,
        proxy: {

            ...nodeServer
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
              data: `@import "./element-variables.scss";`
            }
          }
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            console.log(args)
            // args.chunksSortMode = 'none';
            return args;
        });
    }
}