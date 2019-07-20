

//获取配置
const getConfig = () => {

  let params = {
    publicPath: '/runtime/',
    port: 7007,
    mockPort: 7008
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

console.log(config);

module.exports = {
  publicPath: config.publicPath,
  devServer: {
    port: config.port,
    sockPort: config.sockPort,
    sockPath: config.sockPath,
    disableHostCheck: true,
    hotOnly: false,
    proxy: {
      //假数据
      '/': {
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