

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

//console.log(config);

console.log('代理地址', `http://localhost:${config.mockPort}`)

module.exports = {
  publicPath: config.publicPath,
  devServer: {
    port: config.port || 7009,
    sockPort: config.sockPort,
    sockPath: config.sockPath,
    disableHostCheck: true,
    hotOnly: false,
    proxy: {
      //假数据
      '/mock': {
        target: `http://localhost:${config.mockPort}`,
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
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
