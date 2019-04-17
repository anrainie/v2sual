<template>
	<div class="row rowCtn">
		<div :class="['columns',col_left]"><slot name="label"><label>{{label}}</label></slot></div>
		<div :class="['columns',col_right]">
			<!-- <el-input :type="type" :placeholder="placeholder" :value="changeValue" v-model="currentValue" clearable></el-input> -->
			<el-input :type="type" :placeholder="placeholder" v-model="currentValue" :value="changeValue" clearable></el-input>

		</div>
	</div>
</template>
<script>
	import '../dependence/css/user_input.css'
	export default{
		name:'akInput',
		data(){
			return{
				//currentValue: ''
				currentValue: this.value
			}
		},
		props:{
			label:{
				type:String,
				default:''
			},
			placeholder:{
				type:String,
				default:''
			},
			type:String,
			value:[String,Number],
			col_left:String,
			col_right:String
		},
		watch:{
			currentValue(newValue,oldValue){
				this.$emit('getValue',newValue)
			}
		},
		computed:{
			changeValue(){
				this.currentValue=this.value
			}
		},
	}
</script>
<style scoped>
 	
</style>