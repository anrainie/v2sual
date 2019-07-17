<template>
	<div class="akButton">
		<button :style="style" @click="save">{{name}}</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{}
		},
		props:{
			name:String,
			width:String,
			height:String,
			background:String,
			border:String,
			color:String,
			fontSize:String
		},
		computed:{
			style(){
				let style={}
				if(this.width) {
            		style.width = this.width;
            	}
            	if(this.height){
            		style.height = this.height;
            	}
            	if(this.background){
            		style.background = this.background
            	}
            	if(this.border){
            		style.border = this.border
            	}
            	if(this.color){
            		style.color = this.color
            	}
            	if(this.fontSize){
            		style.fontSize=this.fontSize
            	}
            	return style
			}
		},
		methods:{
			save(){
				this.$emit('save')
			}
		}
	}
</script>
<style>
	.akButton{
		margin-left: 20px;
		font-size:12px;
		float:left;
	}
	.akButton button{
		width:100px;
		height: 35px;
		line-height: 30px;
		text-align: center;
		border-radius:4px;
	}
</style>