<template>
	<div class="header">
		<div class="left-title">
			<img src='../assets/test.svg' style="width:26%;height:97%;float:left;margin-top:1px;border:1px solid #bdbdbd"/>
			<span>Akuning压测平台</span>
		</div>
		<div class="right-title" >
			<ul>
			<!-- 	<li v-for="title in titles" v-bind:id="title.id" v-on:click="getCurrentTitle(title)"><i :class="title.icon"></i>{{ title.name }}</li> -->
				<li id="warning" v-on:click="getCurrentTitle">
					<i class="fa fa-bell-o"></i>
					<img  src='../assets/square.svg' style="width:25px;height:25px;vertical-align:baseline"><span style="position:absolute;left:68px;bottom:6px;font-size:12px;">76</span>
				</li>
				<li id="logger" v-on:click="getCurrentTitle">日志管理</li>
				<li id="helper" v-on:click="getCurrentTitle">帮助与支持</li>
				<li id="user_name" v-on:click="getCurrentTitle">欢迎您admin</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
  name: 'ak_header',
  data (){
    return {
    }
  },
  methods:{
  	getCurrentTitle(title){}
  }
}
</script>
<style>
	.header{
		height:60px;
		width:100%;
		top:0px;
	    left:0;
	    position:absolute;
	    z-index:3;
	    background:#616161;
	    color:#fff;
	}
	.header .left-title{
		width:220px;
		height:58px;
		font-weight:bold;
		line-height:60px;
		font-size:18px;
		float:left;
	}
	.header .right-title{
		float:right;
		position:relative;
		margin-right:1px;
	}
	.header .right-title>ul{
		list-style:none;
		margin-top:0;
		font-size:14px;
		cursor:pointer;
	}
	.header .right-title>ul>li{
		float:left;
		position:relative;
		width:120px;
		height:60px;
		text-align:center;
		line-height:57px;
		border:1px solid #bdbdbd;
	}
	.header .right-title>ul>li>i{
		font-size:2em;
		margin-top:13px
	}
</style>