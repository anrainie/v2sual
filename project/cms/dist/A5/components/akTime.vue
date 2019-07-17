<template>
	<div class="akTime rowCtn">
		<div :class="['columns','label',col_left]"><slot name="text_name"><label>{{text_name}}</label></slot></div>
		<div :class="['columns','right',col_right]">
			    <div class="block col-md-3" >
				    <el-date-picker  value-format="yyyy-MM-dd HH:mm:ss" 
				      v-model="value1"
				      type="datetime"
				      placeholder="选择开始日期时间"
				      default-time="12:00:00">
				    </el-date-picker>
  				</div>
  				<div>——</div>
  				<div class="block col-md-3">
				    <el-date-picker value-format="yyyy-MM-dd HH:mm:ss"
				      v-model="value2"
				      type="datetime"
				      placeholder="选择结束日期时间"
				      default-time="12:00:00">
				    </el-date-picker>
  				</div>
		</div>
	</div>
</template>
<script>
	export default{
	   props:{
      	text_name:String,
      	col_left:String,
      	col_right:String,
      },
	  data(){
	  	return {
	  		   pickerOptions1: {
		          shortcuts: [{
		            text: '今天',
		            onClick(picker) {
		              picker.$emit('pick', new Date());
		            }
		          }, {
		            text: '昨天',
		            onClick(picker) {
		              const date = new Date();
		              date.setTime(date.getTime() - 3600 * 1000 * 24);
		              picker.$emit('pick', date);
		            }
		          }, {
		            text: '一周前',
		            onClick(picker) {
		              const date = new Date();
		              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
		              picker.$emit('pick', date);
		            }
		          }]
		        },
		        value1: '',
		        value2: ''
			  	}
			  },
			  watch:{
			  	value1(newVal,oldVal){
			  		console.log(newVal);
			  		this.$emit('startTime',newVal);
			  	},
			  	value2(newVal,oldVal){
			  		console.log(newVal);
			  		this.$emit('endTime',newVal);
			  	}
			  },

	}
</script>
<style>
	.right{
		display:flex;
		flex-flow:row nowrap;
		align-items:center;
	}
	.label{
		text-align:left;
	}
</style>