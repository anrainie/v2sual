<template>
	<div class="addSence">
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane  label="场景配置" name="2" >
				<akInput col_left="col-md-2" col_right="col-md-10" type="text" label="名称" placeholder="请输入名称" :value="input_data.name" @getValue="updateName" ></akInput>
				<!-- <akInput col_left="col-md-2" col_right="col-md-10" type="text" label="持续时间" placeholder="请输入时间" :value="input_data.keeptime" @getValue="updateKeeptime" ></akInput> -->
				<div class="row rowCtn">
					<div class="columns col-md-2"><label>持续时间</label></div>
					<div class="columns col-md-9" >
						<el-input type="text" placeholder="请输入时间" v-model="input_data.keeptime" clearable></el-input>
					</div>
					<div class="columns col-md-1" style="text-align:center;margin-top:7px;">s</div>
				</div>
				<div class="row rowCtn">
					<div class="columns col-md-2"><label>预热并发</label></div>
					<div class="columns col-md-4" >
						<el-input type="text" placeholder="请输入并发数" v-model="input_data.startIntervalCount" clearable></el-input>
					</div>
					<div class="columns col-md-2" style="text-align:center"><label>requires</label></div>
					<div class="columns col-md-3" >
						<el-input type="text" placeholder="请输入时间范围" v-model="input_data.startIntervalTime" clearable></el-input>
					</div>
					<div class="columns col-md-1" style="text-align:center;margin-top:7px;">s</div>
				</div>
				<div class="row rowCtn">
					<div class="columns col-md-2"><label>结束并发</label></div>
					<div class="columns col-md-4" >
						<el-input type="text" placeholder="请输入并发数" v-model="input_data.endIntervalCount" clearable></el-input>
					</div>
					<div class="columns col-md-2" style="text-align:center"><label>requires</label></div>
					<div class="columns col-md-3" >
						<el-input type="text" placeholder="请输入时间范围" v-model="input_data.endIntervalTime" clearable></el-input>
					</div>
					<div class="columns col-md-1" style="text-align:center;margin-top:7px;">s</div>
				</div>
				<akInput col_left="col-md-2" col_right="col-md-10" type="text" label="并发数" placeholder="请输入总并发数" :value="input_data.concurrentCount" @getValue="updateCount" ></akInput>
				<div class="row rowCtn">
					<div class="columns col-md-2 dv-left" style="margin-top:6px;">活跃度</div>
					<div class="columns col-md-10 dv-right">
						<el-slider v-model="input_data.activelevel" show-input>
						</el-slider>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane  label="并发配置" name="1">
				<dataTables ref="scriptTable" id="concurrency" :options="option"></dataTables>
				<div class="addRow"><div class="addButton" @click="addTableRow">+添加</div></div>
			</el-tab-pane>
		</el-tabs>    
	</div> 
</template>
<script>
	import dataTables from '../dataTable'
	import akInput from '../akInput'
	export default{
		data(){
			return{
				option:{
					scrollCollapse:false,
			        paging:true,
			        ordering:false,
			        bInfo:true,
			        searching:true,
			        columns:[
			          {"title":"脚本"},
			          {"title":"客户端"},
			          {"title":"并发百分比(%)"},
			          {"title":"操作"},
			        ],  
			        columnDefs:[
				        {
				          "targets":[ 0,1,2 ],
				          "createdCell":function(td,cellData,rowData,rowIndex, colIndex){
				            var _this=this

				            $(td).on("blur",":input",function(){
				              var text = $(this).val();
				              $(td).html(text)
				            })
				            $(td).on("blur","select",function(){
				            	var select = $(this)[0].selectedOptions,
				            		text=$(select).text(),
				            		value=$(select).val()
				              	$(td).html(text)
				              	$(td).attr('data-id',value)
				            })
				          }
				        }
			        ],  
			        dom:''
				},
				input_data:this.fatherData,
				activeName:'2',
				clientOption:'',
			}
		},
		wacth:{
			input_data:{
				handler(newVal,oldVal){
					this.$emit('inputData',newVal)
				},
				deep:true
			},
		},
		created(){
			var value = this.input_data.stresses
			console.log(value)
			this.setTable(value)
			this.registerEvent() 
		},
		methods:{
			handleClick(tab,event){
				if(tab.name==1){
					var value = this.input_data.stresses
					this.setTable(value)
					this.registerEvent() 
				}
			},
			setTable(value){
				if(value.length>0){
					var list=[]
					for(var i=0;i<value.length;i++){
						var content=[]
						content.push(value[0].scriptName)
						content.push(value[0].deviceName)
						content.push(value[0].concurrentnum)
						content.push('<span class="deleteRow"><i class="fa fa-trash-o"></i></span>')
						list.push(content)
					}
					this.$refs.scriptTable.refresh(list)
				}
			},
			updateName(val){
				this.input_data.name=val
			},
			updateKeeptime(val){
				this.input_data.keeptime=val
			},
			updateCount(val){
				this.input_data.concurrentCount=val
			},
			addTableRow(){
				$('.addSence .scriptOption').empty()
				$('.addSence .clientOption').empty()
				var _this = this,
		      		value=['','','','<span class="deleteRow"><i class="fa fa-trash-o"></i></span>']
		      	//_this.input_data.stresses.push('1')
		     	_this.$refs.scriptTable.addRow(value)
		     	let client=_this.clientList,script=_this.scriptList
		     	//_this.getOption(client,script) 
		     	_this.registerEvent() 
			},
			getOption(client,script){
				for(let i=0;i<client.length;i++){
		     		let option=$('<option value='+client[i].id+'>'+client[i].name+'</option>')
		     		$('.clientOption').append(option)
		     	}
		     	for(let i=0;i<script.length;i++){
		     		let option=$('<option value='+script[i].id+'>'+script[i].name+'</option>')
		     		$('.scriptOption').append(option)
		     	}
			},
			registerEvent(){
				var _this=this
				$('.addSence table tbody tr td').off('click').on('click',function(){
					var cell = $(this)[0].cellIndex
					if(cell==2){
						var text = $(this).text()
						$(this).html('<input type="text" size="8"/>');
					    var Input = $(this).find(":input");
					    Input.focus().val(text);
					}else if(cell==0){
						var select= $(this).find("select");
				        if(select.length==0){
				            var text = $(this).text(),
				            	value = $(this).attr('data-id')
							$(this).html('<select class="scriptOption"></select>');
							var Input = $(this).find("select")
							Input.focus().append('<option value='+value+'>'+text+'</option>');
							var script=_this.scriptList
							for(var i=0;i<script.length;i++){
							    var item=script[i],option
							    if(item.id!=value){
							    	option='<option value='+item.id+'>'+item.name+'</option>'
							    	Input.focus().append(option)
							    }
							}
				        }
					}else if(cell==1){
						var select= $(this).find("select");
				        if(select.length==0){
				            var text = $(this).text(),
				            	value = $(this).attr('data-id')
							$(this).html('<select class="clientOption"></select>');
							var Input = $(this).find("select")
							Input.focus().append('<option value='+value+'>'+text+'</option>');
							var script=_this.clientList
							for(var i=0;i<script.length;i++){
							    var item=script[i],option
							    if(item.id!=value){
							    	option='<option value='+item.id+'>'+item.name+'</option>'
							    	Input.focus().append(option)
							    }
							}
				        }
					}
				})
				$('.addSence .deleteRow').off('click .deleteRow').on('click',function(){
		        	_this.$refs.scriptTable.deleteRow($(this))
		      	})
			},
			getTableData(){
				var tr=$('#concurrency tbody tr'),scriptId,deviceId,num,value_col0,value_col1,value_col2,content=[]
			    for(var i=0;i<tr.length;i++){
			        var td=$(tr[i]).find('td')
			        value_col0=$(td[0]).text()
			        value_col1=$(td[1]).text()
			        value_col2=$(td[2]).text()
			        if(value_col0=='无数据'){
			          return
			        }
			        if(value_col0=='' || value_col1=='' || value_col2==''){
			        	break;
			        }
			        deviceId=$(td[1]).attr('data-id')
			        scriptId=$(td[0]).attr('data-id')
			        num=$(td[2]).text()
			        content.push({
			        	scriptId:scriptId=='undefined'?'':scriptId,
			        	deviceId:deviceId=='undefined'?'':deviceId,
			        	concurrentnum:num=='undefined'?'':num,
			        	scriptName:value_col0,
			        	deviceName:value_col1
			        })
			    }
			    return content
			}
		},
		components:{
			dataTables,
			akInput
		},
		props:{
			clientList:Array,
			scriptList:Array,
			fatherData:Object,
		}
	}
</script>
<style>
	.addSence .el-tabs__item{
		font-size:12px;
	}
	.addSence table>thead>tr>th{
		font-size:12px;
	}
	.addSence .addRow{
	    border-top:none;
	    border-left:1px solid #ccc;
	    border-right:1px solid #ccc;
	    border-bottom:1px solid #ccc;
	    height:32px;
	    font-size:12px;
	  }
	.addSence .addRow .addButton{
	    float:right;
	    border:1px solid #a6a6a6;
	    background-color:#eee;
	    height:80%;
	    line-height:25px;
	    width:60px;
	    text-align:center;
	    border-radius:4px;
	    margin:3px 5px 0 0;
	    cursor:default;
	}
	
	.addSence table>tbody>tr>td{
	    padding:0px 10px;
	    height:30px;
	    line-height:30px;
	}
	.addSence table input{
	    height:75%;
	    border-radius:4px;
	    border:1px solid #a6a6a6;
  	}
  	.addSence table select{
  		height:75%;
	    border-radius:4px;
	    border:1px solid #a6a6a6;
	    width:85px;
  	}
	.addSence .row{
		margin-left:0;
	}
	.addSence .el-slider__runway {
	    height: 6px;
	    margin: 12px 0;
	    background-color: #e4e7ed;
	    border-radius: 3px;
	    position: relative;
	    cursor: pointer;
	    vertical-align: middle;
	    margin-right: 130px;
	}
	.addSence .el-slider__runway .show-input {
	    margin-right: 130px;
	    width: auto;
	}
	.addSence .el-slider__bar {
	    height: 6px;
	    background-color: #03a9f4;
	    border-top-left-radius: 3px;
	    border-bottom-left-radius: 3px;
	    position: absolute;
	}
	.addSence .el-slider__button {
	    width: 13px;
	    height: 20px;
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
	.addSence .el-slider__input {
	    float: right;
	    width: 105px;
	    margin-top:0;
	}
	.addSence .el-input-number--small .el-input-number__decrease, 
	.addSence .el-input-number--small .el-input-number__increase {
	    width: 25px;
	    font-size: 13px;
	}
	.addSence table .selectedOptions{
		position:absolute;
		z-index:10;
		border:1px solid #ccc;
		height:30px;
		width:80px;
	}
</style>