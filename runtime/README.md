# vue-spa


## 一、启动运行初始项目

#### 1.配置项目依赖
```
npm install

```

#### 2.编译运行和热加载项目
```
npm run serve

```
#### 3.启动虚拟后台，获取动态路由
起这个服务是为了提供一个动态的路由表，供初始项目使用。当项目接入实际后台后，可以把服务换成自己的路由服务
```
npm run mock

```
执行以上命令后，就可以打开我们的初始项目了。

## 二、项目目录结构

    ├─public                 
    │      favicon.ico
    │      index.html   
    └─src  
        │  App.vue
        │  main.js
        │  promission.js     动态路由配置
        │  store.js          状态管理器
        ├─api
        │      api.js        与后台交互的接口合集
        │      index.js     
        ├─assets             静态资源
        │      logo.png    
        ├─components         项目中自定义的组件
        │      HelloWorld.vue
        │      identifyInput.vue    
        ├─less               项目less文件
        │      aweb-variables.less
        │      aweb.less      
        ├─router            路由
        │      index.js
        │      _import_development.js    开发阶段
        │      _import_production.js     生产环境
        ├─utils
        │      app.js                  平台级通用app接口，如app.open
        │      global.js               全局变量
		    │      common.js               项目级通用接口
        └─views    项目所有页面
					│  404.vue
					│  Layout.vue   首页
					│  Login.vue
					│
					├─example  案例模块
					│      changepw.vue
					│      table.vue
					│      tree.vue
					│
					├─form    表单模块
					│      form.vue
					│
					└─spa    某模块
									spa.vue
				   
    │  babel.config.js
    │  package-lock.json
    │  package.json
    │  postcss.config.js       配置autoprefix插件
    │  README.md
    │  server.js               虚拟后台
    │  vue.config.js           打包编译的配置文件


## 三、开发页面

#### 1.添加vue页面
在views文件夹下新增自己的页面，当然如果项目页面多，可以分模块，在模块里加自己的页面。每个vue页面文件结构最好都按以下格式：

```javascript
<template>
 <!-- 页面主容器类名命名规范 ： 项目前缀-页面功能-ctn -->
  <div class="a-add-ctn">
    我是table
  </div>
</template>
import { app } from '@/utils/app.js'
<script> 
	export default {
	  data() {
		return {
		}
	  },
	  created() {},
	  mounted(){},
	  methods: {},
	  components:{}
	}
</script>

<style lang="less">
 .a-add-ctn{

 }
</style>

```

#### 2.添加自定义组件
默认情况下，应用全局导入了element-ui，可以在页面上使用element-ui的所有组件。如果需要自定义一些组件，可以在components目录下新增，建议是先去找一些轮子参考再进行二次加工。组件功能比较复杂的可以组件内部分模块分文件存储并引用。

#### 3.添加公共接口
如果项目自行整理了一些通用的接口，可以放到utils/common.js 文件里面。

#### 4.配置基本路由表
这里配置的路由表主要还是供侧边导航使用，对于那些不需要通过菜单点击打开的页面，可以通过app.open()接口动态添加路由并打开页面。

```json
[
	{
		"path": "spa",
		"name":"spa",
		"component": "spa/spa",//vue页面组件路径
		"meta": {
			"title": "SPA",  //菜单标题
			"icon": "el-icon-goods"//图标
		}
	},
	{
		"path": "table",
		"name": "table",
		"meta": {
			"title": "表格",
			"icon": "el-icon-tickets"
		},
		"children": [
			{
				"path": "subPage",
				"name": "subPage",
				"component": "example/table",
				"meta": {
					"title": "表格",
					"icon": "el-icon-goods"
				}
			},
			{
				"path": "newPage",
				"name": "newPage",
				"component": "example/newPage",
				"meta": {
					"title": "子节点",
					"icon": "el-icon-goods"
				}
			}
		]
	}
]
```

#### 5.使用平台级app.open接口打开页面
> ##### 接口主要参数：

- **page**： 填写vue页面组件的路径，从views文件夹往下。

- **path**： 填写页面的指定路由，相当于页面的id。

- **type**：填写页面打开的类型，有BLANK、SUB、WINDOW、SELF

- **title**：填写页面打开对应的标题

- **vm**： type为BLANK和SUB的时候必填,传递当前调用的页面上下文。

- **params**：传递的页面参数，跟vue-router获取参数方法一致。用户可以在新打开的页面的$router.params里面访问到


1. 打开新窗口页面
```javascript
	app.open({
						status:true,
						title:'新增页面',
						path:'example/add', //相当于页面的id，也是页面的路由
						page:'example/newPage',//vue页面组件的路径
						type:'BLANK',
						vm:this,//必填,子页面需要附带传递当前调用的页面上下文
						params:{
							role:'tab页面'
						}
					})
```
2. 打开子弹窗页面
```javascript
	app.open({
	  status:true,
		title:'子页面',
		path:'example/sub',
		page:'example/newPage',
		type:'SUB',
		params:{id:'12'},
		vm:this,//必填,子页面需要附带传递当前调用的页面上下文
		confirmCallback:() => { 
			console.log('点击确定')
		},
		cancelCallback:(e) => {
			console.log('点击取消')
		}
	})
```
3. 在当前窗口打开页面
```javascript
	app.open({
		status:true,
		title:'window页面',
		page:'example/newPage',
		type:'WINDOW'
	})
```
4. 打开新浏览器窗口页面
```javascript
	 app.open({
		 status:true,
		 title:'自身页面',
		 path:'example/self',
		 page:'example/newPage',
		 type:'SELF'
	 })
```

#### 6.使用平台级app.close接口关闭页面
> ##### 接口主要参数：

- **path**： 非必填。若不填则默认关闭当前页面。若填写指定页面路由的路径，则关闭指定页面。

- **vm**： 必填,子页面需要附带传递当前调用的页面上下文


```javascript
	 app.close({
		 path:'example/add',//非必填
		 vm:this
	 })
```

##  三、webpack配置

项目的打包配置文件主要在vue-config.js里面。

#### 1.跨域配置

如果项目是前后端分离，应该也就会遇到跨域请求的问题。初始应用里预留了后台服务代理的位置(devServer)，只需改成对应后台地址就可以了。

```javascript

module.exports = {
    baseUrl: './',
    devServer: {
        proxy: 'http://18.7.9.21:8086'  后台服务地址
    }
}
```
在根据vue-cli的默认打包配置，该代理会把页面上的以`/`开头的请求路径都转换成往指定后台服务器上请求。

#### 2.与后台交互

本初始应用通过建立统一的请求api列表，然后通过各个页面自己导入引用的机制，统一放到api/api.js里面管理与后台交互的接口，同时也方便团队协作开发。如以下api列表：

```javascript
import axios from 'axios';

axios.defaults.withCredentials = true

let base = process.env.NODE_ENV ==='production'?'https://www.awebide.com:7001':'';//这里运行环境中base的值与你vue-config.js的代理配置前缀一致

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getRoutersList = params => { return axios.get(`${base}/router/get`, { params: params }); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };
```

##  三、打包生产环境的项目

执行以下命令，在dist目录下生成项目静态文件。

```
npm run build

```