const convert = require('koa-connect')
const proxy = require('http-proxy-middleware')
const path =require('path');

module.exports = (app,configs) => {

  configs.proxy.map(config => {
    console.log(path.join(configs.base,config.source));
    app.use(convert(proxy(path.join(configs.base,config.source), config)))
  });
};