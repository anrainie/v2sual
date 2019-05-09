const convert = require('koa-connect')
const proxy = require('http-proxy-middleware')
const configs = require('./config');
const path =require('path');

module.exports = (app) => {

  configs.proxy.map(config => {
    
    app.use(convert(proxy(path.resolve(configs.base,config.source), config)))
  });
};