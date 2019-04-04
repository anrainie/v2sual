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
    
    <keymap>GET</keymap> v1/page

    >返回
    ```
        [pagename,...,pagename]
    ```

