<template>
	<div class="configure" :style=style>
		<div class="title"  :style="titleBack">
			<span class="text">{{title}}</span>
			<span class="icon" @click="store" :style="color">{{text}}<i :class="icon"></i></span>
		</div>
		<slot name="dev"></slot>
	</div>

</template>
<script>
	export default {
		name:"configure",
		data(){
			return {
				
			}
		},
		props:{
           title:String,
           width:String,
           height:String,
           icon:String,
           text:String,
           background:String,
           iconColor:String,
           fontSize:String 
		},
		mounted(){
		   // console.log(this.iconColor);
		},
		computed:{
			style(){
				var style = {};
				if(this.width) {
            		style.width = this.width;
            	}
            	if(this.height){
            		style.height = this.height;
            	}
            	return style
			},
			titleBack(){
				var style = {};
				if(this.background){
            		style.background = this.background;
            	}
            	return style
			},
			color(){
				var style = {};
				if(this.iconColor){
            		style.color = this.iconColor;
            	}
            	if(this.fontSize){
            		style.fontSize = this.fontSize;
            	}
            	return style
			}
			
		},
		methods:{
			store(){
				this.$emit('store');
			}
		}
	}
</script>
<style scoped>
	.configure{
		width:500px;
		height:500px;
		border-radius:4px;
		text-align:left;
		background:#fff;
		border:1px solid #e5e5e5;
		display:block;
	}
	.configure .title{
		background:#EEEEEE;
		height:35px;
		line-height:35px;
		padding-left:20px;
		border-bottom:1px solid #bdbdbd;
	}
	.configure .title>span{
		height:35px;
		line-height:35px;
	}
	.configure .title .text{
		float:left;
	}
    .configure .title .icon{
  	      width:70px;
  	      height:35px;
		  float:right;
		  color:#000;
		  font-size:13px;
	  	}
</style>