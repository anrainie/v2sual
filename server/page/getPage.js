const reader = require('filelist_reader');
const path= require('path');

module.exports = function (pagePath) {
  return async function (ctx, next) {
    ctx.response.type = 'json';

    try {
        console.log(pagePath);
        ctx.response.body = await new Promise(
            (resolve,reject) => reader(pagePath)
            .then((result) => {
              debugger;
              resolve(JSON.stringify(result))
            })
            .catch(e => {
              debugger;
              ctx.throw(500)
            }))
    } catch (e) {
        debugger;
    }
    
  }
};
