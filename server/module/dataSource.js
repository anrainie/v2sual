const convert = require('koa-connect')
const proxy = require('http-proxy-middleware')
const path = require('path');


module.exports = (app, configs) => {
  configs.proxy.map(config => {
    setTimeout(() => {
      console.log('dataSource:', configs.base, config.source);
    }, 3000)
    console.log(configs.base + config.source);
    app.use(convert(proxy(configs.base + config.source, config)))
  });
};
