const convert = require('koa-connect')
const proxy = require('http-proxy-middleware')
const path = require('path');


module.exports = (app, configs, prefix) => {
  configs.proxy.map(config => {
    //console.log(configs.base+config.source);
    app.use(convert(proxy((prefix ? prefix : '') + configs.base+config.source, config)))
  });
};
