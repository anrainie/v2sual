const mysql = require('mysql'); //导入mysql模块
const Result = require('../Result/Result');


class DB {
  constructor(config) {
    this.config = config || {};
    this.client = mysql.createConnection({ //配置连接参数
      host: '10.8.6.38',
      user: 'root',
      password: '123456',
      database: 'aweb_social',
      ...this.config,
    });
    try{
      this.client.connect(); //连接
      console.log('数据库初始化成功', this.config.database);
    }catch(e){
      console.log(e);
    }
  }
  select() {
    let self = this;
    return async function (ctx) {

      try {
        let {
          tableName
        } = ctx.request.query;
        console.log('select ', tableName);

        
        await new Promise((res,rej)=>{
          self.client.query(
            'SELECT * FROM ' + tableName,
            function selectCb(err, results, fields) {
              if (err) {
                Result.error(ctx, err);
                rej();
                return;
              }
              if (results) {
                for (var i = 0; i < results.length; i++) {
                  console.log(results[i]);
                }
              }
              Result.success(ctx, results)
              res();
            }
          );
        })

      } catch (e) {
        Result.error(ctx, e);
      }
    }


  }
  close() {
    this.client.end();
  }
}
module.exports = DB;
