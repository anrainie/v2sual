<template>
	<div class="akInputTab">
		<div class="row rowCtn">
			<div :class="['columns',col_left]"><slot name="label"><label>{{label}}</label></slot></div>
			<div :class="['columns',col_right]">
				<div class="edit" @click="setEdit">
					<li v-for="item in inputList">{{item}}<i class="fa fa-times-circle-o"></i></li>
					<input type="test" v-model="currentValue" @keyup.enter="setTab" v-show="inputShow"/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				currentValue:'',
				inputShow:false,
				valueList:''
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
			inputList:Array,
			col_left:String,
			col_right:String
		},
		watch:{
			currentValue(newValue,oldValue){
				this.$emit('getValue',newValue)
			},
			valueList(newVal,oldVal){
				this.$emit('getResult',newVal)
			}
		},
		methods:{
			setTab(event){
				var value = this.currentValue
				this.valueList=value
				$('.akInputTab .edit').find('input').before('<li>'+value+'<i class="fa fa-times-circle-o"></i></li>')
				this.currentValue=''
				this.registerEvent()
			},
			clear(){
				$('.akInputTab .edit').find('li').remove()
			},
			setEdit(){ 
				this.inputShow=true
			},
			registerEvent(){ 
				$('.akInputTab .edit i').off('click','.akInputTab .edit i').on('click',function(){
					$(this).closest('li').remove()
				})
			}
		}
	}
</script>
<style>
	.akInputTab .edit {
	    border:1px solid #ccc;
	    border-radius:4px;
	    min-height:80px;
	    overflow-y:auto;
	    width: 100%; 
    }
    .akInputTab .edit>input{
    	height: auto;
	    width: auto; 
	    border:none;
	    float:left;
	    margin:3px;
    }
    .akInputTab .edit>input:focus{
  		outline: none !important;
    	border:none;
    }
    .akInputTab .edit>li{
    	float:left;
    	border:1px solid #ccc;
    	margin:3px;
    	border-radius:6px;
    	width:auto;
    	list-style-type:none;
    	padding:0 5px;
    	background-color:#f5f5f5;
    }
    .akInputTab .edit>li>i{
    	margin-left:5px;
    	font-size:18px;
    	height:23px;
    	line-height:20px;
    }
</style>