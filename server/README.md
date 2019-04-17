# AWEB-Koa2 静态服务器

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

## API 接口

1. 获取页面列表

    >URL

    <keymap>GET</keymap> v1/page/list

    >返回
    
    ```
        [pagename,...,pagename]
    ```

2. 获取文件 AST

    > URL

    <keymap>content</keymap> v1/page/content/:filepath

    ```
        AST 内容
    ```


## Vue 文件格式

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