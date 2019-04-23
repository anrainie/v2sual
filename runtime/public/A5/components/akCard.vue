<template>
		<div class="akCard" :style="style">
			<div class="imgTitle" :style="imgStyle"><img v-bind:src="icon"></div>
			<div class="dv-cont" :style="contStyle">
				<div class="dv-top">{{content.label}}</div>
				<div class="dv-bottom">{{content.desc}}</div>
			</div>
		</div>
</template>
<script>
	export default{
		name:'akCard',
		props:{
			width:String,
			height:String,
			backgroundColor:String,
			icon:String,
			content:Object,
			display:String,
		},
		computed:{
			style(){
				let style={}
				if(this.width){
					style.width=this.width
				}
				if(this.height){
					style.height=this.height
				}
				if(this.backgroundColor){
					style.backgroundColor=this.backgroundColor
				}
				return style
			},
			imgStyle(){
				let style={}
				if(this.display=='none'){
					style.display=this.display
				}
				return style
			},
			contStyle(){
				let style={}
				if(this.display=='none'){
					style.margin='0 auto'
				}else{
					style.margin='0'
				}
				return style
			}
		}
	}
</script>
<style>
	.akCard{
		min-width:150px;
		min-height:80px;
		border-radius:4px;
		background-color:#eee;
		display:flex;
		margin:0 20px 20px 0;
		padding:20px;
		float:left;
		font-size:14px;
	}
	.akCard .imgTitle{
		margin:auto 10px;
		width:35px;
		height:35px;
	}
	.akCard .imgTitle>img{
		width:100%;
		height:100%;
	}
	.akCard .dv-cont .dv-top .dv-bottom{
		margin:0px 0 0px 0px;
		font-size:12px;
		color:#838383;
	}
	.akCard .dv-cont .dv-top{
		margin:5px 0 10px 0px;
	}
</style>