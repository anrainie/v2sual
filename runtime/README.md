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
        │      identifyInput.vue    
        ├─less               项目less文件
        │      aweb-variables.less
        │      aweb.less      
        ├─router            路由
        │      index.js
        │      _import_development.js    开发阶段
        │      _import_production.js     生产环境
        ├─utils
        │      app.js                  平台级通用app接口，如open(打开页面)
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
在views文件夹下新增自己的页面，当然如果项目页面多，可以分模块，在模块里加自己的页面。每个vue页面已经有平台级接口如open、close，通过this.open()访问。每个vue页面文件结构最好都按以下格式：

```javascript
<template>
 <!-- 页面主容器类名命名规范 ： 项目前缀-页面功能-ctn -->
  <div class="a-add-ctn">
		我是table页面
		<async-component page="example/table" ref="tablepage" :params="subPageParams"></async-component> //vue页面里面嵌套vue页面，只需要引用异步组件，并配置vue页面路径和需要传递的参数
  </div>
</template>

<script> 
import asyncComponent from '@/components/asyncComponent'

	export default {
	  data() {
		return {
		}
		},
	  created() {},
	  mounted(){},
	  methods: {},
	  components:{
			asyncComponent
		}
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
这里配置的路由表主要还是供侧边导航使用，对于那些不需要通过菜单点击打开的页面，可以通过this.open()接口动态添加路由并打开页面。

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

#### 5.使用平台级公用this.open接口打开页面
> ##### 接口主要参数：

- **page**： 填写vue页面组件的路径，从views文件夹往下。

- **path**： 填写页面的指定路由，相当于页面的id。

- **type**：填写页面打开的类型，有BLANK、SUB、WINDOW、SELF

- **title**：填写页面打开对应的标题

- **params**：传递的页面参数，跟vue-router获取参数方法一致。用户可以在新打开的页面的$router.params里面访问到


1. 打开新窗口页面
```javascript
	this.open({
            status:true,
            title:'新增页面',
            path:'example/add', //相当于页面的id，也是页面的路由
            page:'example/newPage',//vue页面组件的路径
            type:'BLANK',
            params:{
                role:'tab页面'
            }
        })
```
2. 打开子弹窗页面
```javascript
	this.open({
	  status:true,
		title:'子页面',
		path:'example/sub',
		page:'example/newPage',
		type:'SUB',
		params:{id:'12'},
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
	this.open({
		status:true,
		title:'window页面',
		page:'example/newPage',
		type:'WINDOW'
	})
```
4. 打开新浏览器窗口页面
```javascript
	 this.open({
		 status:true,
		 title:'自身页面',
		 path:'example/self',
		 page:'example/newPage',
		 type:'SELF'
	 })
```
5. 打开第三方系统页面
```javascript
	 this.open({
            status:true,
            title:'第三方页面',
            path:'example/tablePage', //相当于页面的id，也是页面的路由
            page:'https://vue.awebide.com/js/table.umd.min.js',//vue页面组件的路径
            other:true,//是否是第三方页面
            type:'BLANK'            
        })
```
#### 6.使用平台级this.close接口关闭页面
> ##### 接口主要参数：

- **path**： 非必填。若不填则默认关闭当前页面。若填写指定页面路由的路径，则关闭指定页面。


```javascript
	 this.close({
		 path:'example/add'//非必填,不填即关闭当前页
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

let base = process.env.NODE_ENV ==='production'?'https://npm.awebide.com':'';//这里运行环境中base的值与你vue-config.js的代理配置前缀一致

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

##  四、构建vue页面目标

构建vue单文件页面，直接热部署到生成环境。这里使用到了`vue-cli-service build`。详情参考vue-cli官方文档
- [构建目标](https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%94%E7%94%A8)
- [vue快速原型开发](https://cli.vuejs.org/zh/guide/prototyping.html "vue快速原型开发")
参考以上两个文档的内容，操作步骤如下：

#### **1.校验vue是否为全局指令**
在控制台输入`vue`,验证vue是否全局安装。
情况一：显示`vue: command not found`，
解决方法一：配置相关的环境变量[配置环境变量](https://www.cnblogs.com/chongyou/p/9353248.html "配置环境变量")
情况二：'无法将“vue”项识别为 cmdlet、函数、脚本文件或可运行程序的名称' 或 'vue不是内部或外部命令' 的解决方法。
解决方法：全局安装vue-cli。`npm install -g @vue/cli` [安装vue-cli](https://cli.vuejs.org/zh/guide/installation.html "安装vue-cli")

####  **2.构建vue页面文件**

 - **单独构建**
   
```
 vue  build --target lib --name table ./src/views/example/table.vue --dest pages


```
这里单独对这个table.vue文件构建为一个独立的库，这个库会输出：

 - pages/table.common.js：一个给打包器用的 CommonJS 包 (不幸的是，webpack 目前还并没有支持 ES modules 输出格式的包)

 - pages/table.umd.js：一个直接给浏览器或 AMD loader 使用的 UMD 包 

 - **pages/table.umd.min.js**：压缩后的 UMD 构建版本，默认我们只需要将这个文件放到我们已经部署到服务器上的项目文件里就可以了

 - **批量构建**

 给package.json 的 `buildfolder`配置项配置需要打包页面的文件夹路径，如 `   "buildfolder": "./src/views/example"`。执行以下命令
 ```
 vue  run buildP


```
就会把example文件夹下面的vue页面构建到pages文件夹下。


##  五、增量更新服务器上的页面

注：假设一开始打包了整个项目放到服务器上，我们称这个叫`初始项目`（初始项目主要包括一些共用的库）。我们将后面通过构建指令构建的页面叫做`增量页面`。
更新原则：
1. 初始项目的文件如果要更新,需要把整个项目重新打包再部署上去
2. 增量页面部署上去，后期更新可以单独替换更新
