var mysql = require( 'mysql');  //导入mysql模块

var connection = mysql.createConnection({   //配置连接参数
      host : 'localhost',
      user : 'root',
      password : 'root',
      database : 'testdb'
});

connection.connect();     //连接