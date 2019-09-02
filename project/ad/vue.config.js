

//获取配置
const getConfig = () => {

  let params = {
    publicPath: './',
    port: 7009,
    mockPort: 7008,
    // sockPort: 7007,
    // sockPath: '/sockjs-node',
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


let sockConfig = {
  sockPort: process.env.WEBPACK_SOCKJS_PROT || config.sockPort || config.port,
  sockHost: process.env.WEBPACK_SOCKJS_HOST  || config.sockHost || 'localhost',
  sockPath: process.env.WEBPACK_SOCKJS_PATH || config.sockPath || '/sockjs-node'
}

module.exports = {
  publicPath: config.publicPath,
  devServer: {
    port: config.port || 7009,
    sockPort: sockConfig.sockPort,
    sockPath: sockConfig.sockPath,
    sockHost: sockConfig.sockHost,
    disableHostCheck: true,
    hotOnly: false,
    compress: true,
    proxy: {
      //假数据
      '/': {
        target: `http://localhost:${config.mockPort}`,
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
        ws: false,
        pathRewrite: {
          [config.publicPath === './'? `/mock`:`${config.publicPath}mock`] : ''
        }
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload') 
    config.plugins.delete('prefetch') 
  },
  
  productionSourceMap: false,
  filenameHashing: false,
  css: {
    modules: false,
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        // 向全局sass样式传入共享的全局变量
        data: '@import "./element-variables.scss";'
      }
    }
  }
}
