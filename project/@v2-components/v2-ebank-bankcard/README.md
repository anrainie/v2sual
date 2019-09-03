# [网银组件] 银行卡

## 概述

展示银行卡相关信息，可添加按钮组进行路由跳转


## 安装及使用方法

### 安装

```
npm install @v2-components/v2-ebank-bankcard
```

### 使用


1. 在 webide 中找到安装的银行卡组件

![](http://www.awebide.com:48000/showdoc/Public/Uploads/2019-08-21/5d5ccd98cf3c9.png)

2. 拖拽银行卡组件到布局中

![](http://www.awebide.com:48000/showdoc/Public/Uploads/2019-08-21/5d5ccdaa3c5b8.png)


3. 配置相关参数

![](http://www.awebide.com:48000/showdoc/Public/Uploads/2019-08-21/5d5ccdbdd73cb.png)

分别填入卡别名、银行卡类型、银行卡图片路径以及银行卡号，这四种参数都为字符串类型。
图片路径根据图片资源所在文件路径得到，一般为 `/img/xxx.png(jpg)`

4. 配置参数中需要绑定的数据

* 在数据篮子中新增数据变量

![](http://www.awebide.com:48000/showdoc/Public/Uploads/2019-08-21/5d5ccec5dbfe8.png)

按照参数要求的绑定数据格式新增数据变量：


```
//银行卡金额概况(funds)：
[
    {title: '定期', sum: '1000.00'},
    {title: '活期', sum: '1000.00'},
]
//按钮组(shortcuts)：
[
    {
        id: '0', 
        title: '转账汇款',
        route: {
            page: "spa/index",
            path: "/index",
            type: "BLANK",
            status: !0,
            params: { cardID: '1234 xxxx xxxx 2222' }
        }
    },
    {
        id: '1', 
        title: '生活缴费',
        route: {
            page: "spa/pwdManager",
            path: "/pwdManager",
            type: "BLANK",
            status: !0,
            params: { cardID: '1234 xxxx xxxx 2222' }
        }
    },
    {
        id: '2', 
        title: '交易查询',
        route: {
            page: "spa/queryTransaction",
            path: "/queryTransaction",
            type: "BLANK",
            status: !0,
            params: { cardID: '1234 xxxx xxxx 2222' }
        }
    },
]
```

* 为组件参数应用数据变量

![](http://www.awebide.com:48000/showdoc/Public/Uploads/2019-08-21/5d5ccfe4beccb.png)

在对应的参数中填入数据变量，并点击输入框后的按钮，应用为数据变量

* 完成数据绑定

![](http://www.awebide.com:48000/showdoc/Public/Uploads/2019-08-21/5d5cd04712fa4.png)



## 效果展示

![v2-ebank-bankcard 银行卡组件预览图](http://www.awebide.com:48000/showdoc/Public/Uploads/2019-08-21/5d5cb3c743d7a.png)


## 更新日志

### v6.0.0 - 新增银行卡组件

* 新增属性 `alias`、`cardType`、`imgSrc`、`cardID`、`funds`、`shortcuts`