<template>
	<div class="system_configure">
		<div class="row rowCtn">
			<div class="columns col-md-1 dv-left">CPU利用率限制</div>
			<div class="columns col-md-11 dv-right">
				<el-slider v-model="value" show-input>
				</el-slider>
			</div>
		</div>
		<akRadio text_name="网卡与中断绑定"  col_left="col-md-1" col_right="col-md-11 dv-right" :lists="list" :value="system_configure.interrupt" @get-value="updateIsabled"></akRadio>
		<div class="row rowCtn">
			<div class="columns col-md-1">内核参数优化</div>
			<div class="columns col-md-11 dv-right">
				<a href="#" @click="showKernel">查看内核参数</a>
			</div>
		</div>
		<modal width="570px" height="500px"  v-show="showModal" title="内核参数配置" @hide="closeModal" @submit="submitData">
			<template slot="main">
				<tables :options="option" id="kernel" ref="kernelTable"></tables> 
			</template>
		</modal>
	</div>
</template>
<script>
	import akRadio from './akRadio'
	import modal from './modal'
	import tables from './dataTable'
	export default{
		data(){
			return{
				value:this.system.cpuLimit,
				list:[
					{
						label:true,
						name:'是'
					},
					{
						label:false,
						name:'否'
					}
				],
				showModal:false,
				system_configure:this.system,
				option:{
			        scrollCollapse:false,
			        paging:true,
			        ordering:false,
			        bInfo:true,
			        searching:true,
			        columns:[
			          {"title":""},
			          {"title":"参数名"},
			          {"title":"建议值"},
			          {"title":"默认值"},
			          {"title":"参数值<span class='edit'><i class='fa fa-pencil'></i></span>"},
			          {"title":"描述"},
			        ],  
			        columnDefs: [
				        {
				          "targets":[ 0 ],
				          "visible": false,          
				        },
				        {
                        	"targets":[ 4 ],
                           "createdCell":function(td,cellData,rowData,rowIndex, colIndex){
		                        $(td).click(function(){
		                        	var text = $(this).text()
		                            $(this).html('<input type="text" size="4"/>');
		                            var Input = $(this).find(":input");
		                            Input.focus().val(text);
		                        });
		                        $(td).on("blur",":input",function(){
		                            var text = $(this).val();
		                            $(td).html(text)
		                            $('#kernel').DataTable().cell(td).data(text)
		                        })
                    		}
                    	}
			        ],  
			        dom:''
			    },
			}
		},
		props:{
			system:Object
		},
		watch:{
			value(newVal,oldVal){
				this.system_configure.cpuLimit = newVal
				this.$emit('getSystem',this.system_configure)
			},
			system_configure:{
				handler(newVal,oldVal){
					this.value = newVal.cpuLimit
				},
				deep:true
			}
		},
		components:{
			akRadio,
			modal,
			tables
		},
		methods:{
			updateIsabled(val){
				this.system_configure.interrupt = val
				this.$emit('getSystem',this.system_configure)
			},
			closeModal(){
				this.showModal=false
			},
			submitData(){
				var tabValue = this.$refs.kernelTable.getValue(),value,
					kernel=[]
				for(var i=0;i<tabValue.length;i++){
					value = tabValue[i]
					kernel.push({
						id:value[0],
						name:value[1],
						adviseValue:value[2],
						defaultValue:value[3],
						value:value[4],
						description:value[5]
					})
				}
				this.system_configure.kernel = kernel
				this.$emit('getSystem',this.system_configure)
				this.showModal=false
			},
			showKernel(){
				this.showModal = true
				var value = this.system_configure.kernel,data=[]
				console.log(value)
				for(var i=0;i<value.length;i++){
					let content=[]
					content.push(value[i].id)
					content.push(value[i].name)
					content.push(value[i].adviceValue==null?'':value[i].adviceValue)
					content.push(value[i].defaultValue==null?'':value[i].defaultValue)
					content.push(value[i].value==null?'':value[i].value)
					content.push(value[i].description)
					data.push(content)
				}
				this.$refs.kernelTable.refresh(data)
			}
		},
		mounted(){
		}
	}
</script>
<style>
	.system_configure{
		padding:0 30px;
	}
	.system_configure .edit{
		margin-left:3px;
		color:#03a9f4;
	}
	.system_configure table{
		border-right:1px solid #111;
		border-left:1px solid #111;
	}
	.system_configure th{
		font-size:12px;
		border-right:1px solid #a6a6a6;
		background-color:#fff;
	}
	.system_configure th:last-child{
		border-right:none;
	}
	.system_configure td{
		border-right:1px solid #a6a6a6;
	}
	.system_configure td:first-child{
		width:120px;
		word-wrap:break-word;
		word-break:break-all;
	}
	.system_configure td:nth-child(4){
		width:70px;
	}
	.system_configure td:last-child{
		border-right:none;
	}
	.system_configure .dv-left{
		margin-top:10px;
	}
	.system_configure .dv-right{
		width:350px;
		margin-left:30px;
	}
	.system_configure a{
		color:#03a9f4;
	}
	.system_configure .el-slider__runway {
	    height: 8px;
	    margin: 12px 0;
	    background-color: #e4e7ed;
	    border-radius: 3px;
	    position: relative;
	    cursor: pointer;
	    vertical-align: middle;
	    margin-right: 130px;
	}
	.system_configure .el-slider__runway .show-input {
	    margin-right: 130px;
	    width: auto;
	}
	.system_configure .el-slider__bar {
	    height: 8px;
	    background-color: #03a9f4;
	    border-top-left-radius: 3px;
	    border-bottom-left-radius: 3px;
	    position: absolute;
	}
	.system_configure .el-slider__button {
	    width: 13px;
	    height: 22px;
	    border: 2px solid #03a9f4;
	    background-color: #fff;
	    border-radius: 45%;
	    -webkit-transition: .2s;
	    transition: .2s;
	    -webkit-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
	}
	.system_configure .el-slider__input {
	    float: right;
	    width: 110px;
	    margin-top:0;
	}
	.system_configure .el-input-number--small .el-input-number__decrease, 
	.system_configure .el-input-number--small .el-input-number__increase {
	    width: 25px;
	    font-size: 13px;
	}
</style>