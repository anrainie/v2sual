<template>
	<div class="akProgress">
		<el-progress :percentage="percentage" :stroke-width="10" color="#03a9f4"></el-progress>
		<div class="desc">
			<span>准备中</span>
			<span>启动中</span>
			<span>执行中</span>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				percentage:this.value,
			}
		},
		props:{
			value:[String,Number]
		},
		watch:{
			value(newVal,oldVal){
				this.percentage=newVal
			}
		}
	}
</script>
<style>
	.akProgress{
		font-size:12px;
	}
	.akProgress .el-progress-bar{
		margin-right:0;
	}
	.akProgress .el-progress__text{
		display:none;
	}
	.akProgress .desc{
		margin:5px;
	}
	.akProgress .desc>span{
		margin-right:20%;
	}
</style>