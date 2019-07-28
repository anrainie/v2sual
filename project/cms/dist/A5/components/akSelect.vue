<template>
	<div class="row rowCtn">
		<div :class="['columns','label',col_left]" ><slot name="label"><label>{{label}}</label></slot></div>
		<div  :class="['columns',col_right]" style="height:32px;">
			<el-select :placeholder="placeholder" v-model="selectValue" :value="changeValue" clearable>
			    <el-option
			      v-for="item in seoptions"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		</div>
	</div>
</template>
<script>
	import '../dependence/css/user_input.css'
	export default {
		name:'akSelect',
		data(){
			return{
				
				selectValue:this.value
			}
		},
		computed:{
			changeValue(){
				this.selectValue=this.value
				//return this.selectValue
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
			seoptions:{
				type:Array,
				default:() => []
			},
			col_right:String,
			col_left:String,
			value:String
		},
		watch:{
			selectValue(val,oldVal){
				// console.log(val);
				this.$emit('getValue',val)
				// console.log(val)
			}
		}
		
	}
</script>
<style scoped>
    .label{
    	text-align:left;
    }
</style>