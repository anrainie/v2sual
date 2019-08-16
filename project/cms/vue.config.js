
const path=require("path");
//获取配置
const getConfig = () => {

  let params = {
    publicPath: '/cms/',
    port: 7009,
    mockPort: 7008,
    sockPort: 7007,
    sockPath: '/sockjs-node',

  };

  process.argv.filter(e => e.startsWith('--')).forEach(e => {
    const f = e.replace(/^--/, '');
    const parts = f.split('=');
    params[params[0]] = parts.slice(1).join('=');
    if (parts.length && parts[0]) {
      params[parts[0]] = parts.slice(1).join('=')
    }
  });

  return params;
};

const config = getConfig();


module.exports = {
  publicPath: config.publicPath,
  configureWebpack:{
    resolve: {
      alias: {
        '@v2-lib/v2sual': path.resolve(__dirname,'../v2sual')
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload') 
    config.plugins.delete('prefetch') 
  },
  devServer: {
    port: config.port || 7009,
    sockPort: config.sockPort,
    sockPath: config.sockPath,
    sockHost: config.sockHost,
    disableHostCheck: true,
    hotOnly: false,
    proxy: {
      //假数据
      '/': {
        target: `http://localhost:${config.mockPort}`,
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
        ws:false,
        pathRewrite: {
          '/mock': ''
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
