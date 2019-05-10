const convert = require('koa-connect')
const proxy = require('http-proxy-middleware')
const configs = require('./config');
const path =require('path');

module.exports = (app) => {

  configs.proxy.map(config => {
    console.log(path.join(configs.base,config.source));
    app.use(convert(proxy(path.join(configs.base,config.source), config)))
  });
};