<template>
	<div class="akCheckbox row rowCtn">
		<div :class="['columns',col_left]"><slot name="text_name"><label>{{text_name}}</label></slot></div>
		<div :class="['columns',col_right]">
			<el-checkbox-group  v-model="checkboxValue" >
				<el-checkbox v-for="list in lists" :key="list.value" :label="list.label"></el-checkbox>
			</el-checkbox-group>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				checkboxValue:[]
				// checkboxValue:this.checkValue===undefined || this.checkValue===null?'[]':this.checkValue
			}
		},
		props:{
			lists:{
				type:Array,
				default:()=>[]
			},
			text_name:String,
			col_left:String,
			col_right:String,
		//	checkValue:[]
		},
		watch:{
			checkboxValue(newValue,oldValue){
				this.$emit('getValue',newValue)
			}
		}
	}
</script>
<style>
	.akCheckbox{

	}
	.row{
		margin-left:0;
		margin-right:0;
	}
	.akCheckbox .el-checkbox__label{
		font-size:12px;
	}
	.akCheckbox .el-checkbox__inner{
		width:12px;
		height:12px;
	}
	.akCheckbox label{
		font-weight:normal;
	}
</style>