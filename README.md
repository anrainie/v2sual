# WEB IDE - AWEB IDE

## 安装
```
    npm i
```


## 使用

```
    npm run test
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
|- server
    |- config 配置
    |- util 工具类
    |- module 模块
    |- server.js 服务器入口
|- runtime
    |- src
        |- @aweb-components 组件
    |- v2sual  配置时，资源打包位置
    |- dist
        |- static 预览窗口位置，方便配置预览时与真实环境一致
|- pipe 管道
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
log:
4月30号，修改element-ui 的lib/util/popper.js 和vue-popper.js ,在editor.vue 文件添加window.editRoot 定义