# AWEB-Koa2 静态服务器

## 安装
```
    npm i
```


## 使用

```
    //启动v2sual
    npm run server

    //启动项目预览、模拟数据
    cd ./project/项目名 
    npm run serve
    npm run mock
```

### 单独提起各个项目

```
//提起v2sual
v2sual/ node ./server/server.js

//提起项目 
v2sual/project/项目名 npm run serve

//提起项目模拟数据
v2sual/project/项目名 npm run mock
```



## 调试
在 VSCode 中配置
```sh
    {
        // 使用 IntelliSense 了解相关属性。 
        // 悬停以查看现有属性的描述。
        // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "type": "node",
                "request": "launch",
                "name": "nodemon",
                "runtimeExecutable": "nodemon",
                "program": "${workspaceFolder}/server/server.js",
                "restart": true,
                "console": "integratedTerminal",
                "internalConsoleOptions": "neverOpen"
            }
        ]
    }
```

## 目录结构
```
|- server v2sual 服务端
    |- config 配置
    |- util 工具类
    |- module 模块
    |- server.js 服务器入口
|- config 配置
|- project 项目
    |- runtime
        |- src
            |- @aweb-components 组件
            |- v2sual  配置时，资源打包位置
        |- dist
            |- static 预览窗口位置，方便配置预览时与真实环境一致
    |- pipe 管道
    |- cms 管理端
```

## API 接口

见  `server/config/config.json`


## Runtime Vue 文件格式

```vue
<!--
    @desp       描述
    @author     作者
    @version    版本
    @prefix     页面前缀
    @props      属性
-->
<template></template>
<script>
    import * from 'module';

    export default {

        methods:{
            /**
            * @desp 方法描述
            * @params name 方法入参1
            * @params name 方法入参2
            */
            methodName(){
                //do something
            }
        }
    }
</script>
```