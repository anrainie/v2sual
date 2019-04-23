<template>
	<div class="akRadio row rowCtn">
		<div :class="['columns',col_left]"><slot name="text_name"><label>{{text_name}}</label></slot></div>
		<div :class="['columns',col_right]">
			<el-radio-group v-model="radioValue" :value="changeValue">
				<el-radio v-for="list in lists" :key="list.label" :label="list.label">{{list.name}}</el-radio>
			</el-radio-group>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				radioValue: this.value
			}
		},
		props:{
			lists:{
				type:Array,
				default:()=>[]
			},
			text_name:{
				type:String,
				default:''
			},
			col_right:String,
			col_left:String,
			value:String
		},
		computed:{
			changeValue(){
				this.radioValue=this.value
				//return this.selectValue
			}
		},
		watch:{
			radioValue(newValue,oldValue){
				console.log(newValue);
				this.$emit('get-value',newValue)
			}
		}
	}
</script>
<style>
	.akRadio{

	}
	.akRadio .el-radio__label{
		font-size:12px;
	}
	.akRadio .el-radio__inner{
		width:12px;
		height:12px;
	}
	.akRadio label{
		font-weight:normal;
	}
</style>