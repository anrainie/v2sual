<template>
  <div class="agent">
  	<div class="agent_title">
  		<div class="device_name">
	  		<akselect label="设备名" col_left="col-md-2" col_right="col-md-10" placeholder="请选择设备"
	        :seoptions="select_option" :value="device_name" @getValue="updateType"></akselect>
    	</div>
    	<div class="tag">{{tag}}
    	</div>
    	<div class="device_button">
    		<akbutton name="一键部署" background="#f5f5f5" border='1px solid #bdbdbd' @save="deploy"></akbutton>
    		<akbutton name="系统还原" background="#f5f5f5" border='1px solid #bdbdbd' @save="restore"></akbutton>
    		<akbutton name="克隆" background="#f5f5f5" border='1px solid #bdbdbd' @save="clone"></akbutton>
    	</div>
    </div>
    <div class="agent_content">
    	<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane  label="设备管理" name="1">
				<dev_details :device_info="basic" :device_mem="details" 
				:cpu_details="cpu_details" :network_cards="network_cards"
				:network_details="network_details" :id="device_id" @updateDevice="updateBasic"></dev_details>
			</el-tab-pane>
			<el-tab-pane  label="服务部署" name="2" >
				<serverConfig @getServer="getServerData" ref="servers" :serverConfig="serverConfig"></serverConfig>
			</el-tab-pane>
			<el-tab-pane  label="网络管理" name="3">
				<networkConfig @getNetwork="getNetworkData" :network="networkConfig"></networkConfig>
			</el-tab-pane>
			<el-tab-pane  label="系统参数优化" name="4">
				<systemConfig @getSystem="getSystemData" :system="systemConfig"></systemConfig>
			</el-tab-pane>
		</el-tabs>
		<div class="agent_button">
			<akbutton name="上一步" background="#f5f5f5" border='1px solid #bdbdbd' @save="back"></akbutton>
	    	<akbutton name="下一步" background="#f5f5f5" border='1px solid #bdbdbd' @save="next"></akbutton>
	    	<akbutton name="提交" background="#03a9f4" border='1px solid #03a9f4' color='#fff' @save="showSaveModal=true"></akbutton>
	    </div>
	    <modal width="500px" height="250px" v-show="showSaveModal" title="保存配置" @hide="closeSaveModal" @submit="submit">
	      <template slot="main">
	        <div class="deleteInfo">确定保存当前配置信息吗</div>
	      </template>
    </modal>
    </div>
  </div>
</template>
<script>
	import akselect from './akSelect'
	import akbutton from './akButton'
	import dev_details from './device_details'
	import serverConfig from './server_configure'
	import networkConfig from './network_configure'
	import systemConfig from './system_configure'
	import modal from './modal'
	export default{
		name:'agent',
		data(){
			return{
				device_id:'',
				device_name:'',
				device_type:1,
				select_option:[],
				token:'',
				tag:'当前设备',
				activeName:'1',
				systemConfig:{
					cpuLimit:'',
					interrupt:false,
					kernel:[],
				},
				networkConfig:{
					networkList:[],
					isabled:false,
					testNetwork:{},
					network_card:{}
				},
				serverConfig:{
					'HTTP':{},
					'TCP':{},
					isabled:false,
					serverType:[]
				},
				deviceDetails:{},
				showSaveModal:false,
				basic:{
					name:{
						local_name:'设备名',
						value:'',
						id:'switch',
						infoDisp:true,
						enable:false
					},
					ip:{
						local_name:'地址',
						value:'',
						id:'device',
						infoDisp:true
					},
					port:{
						local_name:'端口',
						value:'',
						infoDisp:true
					},
					userName:{
						local_name:'用户名',
						value:'',
						infoDisp:true
					},
					userPwd:{
						local_name:'密码',
						value:'',
						infoDisp:true
					}
				},
				details:{
					free_mem:{
						local_name:'内存',
						value:'',
						flag:true,
						infoDisp:true,
					},
					hard:{
						local_name:'硬盘',
						value:'',
						infoDisp:true,
					},
					model:{
						local_name:'CPU',
						value:'',
						infoDisp:true,
						spread_icon:true,
					}	
				},
				cpu_details:{
					processor:{
						local_name:'逻辑处理器',
						value:'',
						infoDisp:true
					},
					model:{
						local_name:'处理器类型',
						value:'',
						infoDisp:true,
					},
					slotCount:{
						local_name:'插槽数',
						value:'',
						infoDisp:true,
					},
					cores:{
						local_name:'每个插槽的内核数',
						value:'',
						infoDisp:true
					}
				},
				network_cards:{
					local_name:'网卡',
					value:'',
					infoDisp:true,
					spread_icon:true,
				},
				network_details:{
					netcard_name:{
						local_name:'网卡名',
						value:'',
						infoDisp:true
					},
					netcard_ip:{
						local_name:'地址',
						value:'',
						infoDisp:true
					},
					netcard_bandwidth:{
						local_name:'带宽',
						value:'',
						infoDisp:true
					}
				}
			}
		},
		components:{
			akselect,
			akbutton,
			dev_details,
			serverConfig,
			networkConfig,
			systemConfig,
			modal
		},
		created(){
			this.getParams()
		},
		watch:{
	    	'$route':'getParams',
	    },
		methods:{
			updateBasic(val){
				var items = this.basic
				for(var key in items){
					if(key=='name'){
						items[key].enable=val.enable
					}
					items[key].value = val[key]
				}
			},
			deploy(){
				var $this=this,
				option={
		          type:'POST',
		          url:'/AKuning/v1.0/device/manager/deploy_config',
		          dataType:'json',
		          contentType:'application/json',
		          data:[
		            {
		              name:'device_id',
		              value:$this.device_id,
		              urlExternal:false,
		              queryString:true
		            },
		            {
		              name:'user_token',
		              value:$this.token,
		              urlExternal:false,
		              queryString:true
		            }
		          ],
		          success:function(response){
		          	if(response.code==0){
			            $this.$akMessage({
			                type:'success',
			                message:response.localizedMessage
			            })
			        }else{
			        	$this.$akMessage({
			                type:'error',
			                message:response.localizedMessage
			            })
			        }
		          }
		        }
		        apiAjax(option)
			},
			restore(){
				var $this=this,
				option={
		          type:'POST',
		          url:'/AKuning/v1.0/device/manager/device_restore',
		          dataType:'json',
		          contentType:'application/json',
		          data:[
		            {
		              name:'device_id',
		              value:$this.device_id,
		              urlExternal:false,
		              queryString:true
		            },
		            {
		              name:'user_token',
		              value:$this.token,
		              urlExternal:false,
		              queryString:true
		            }
		          ],
		          success:function(response){
		          	if(response.code==0){
			            $this.$akMessage({
			                type:'success',
			                message:response.localizedMessage
			            })
			        }else{
			        	$this.$akMessage({
			                type:'error',
			                message:response.localizedMessage
			            })
			        }
		          }
		        }
		        apiAjax(option)
			},
			clone(){

			},
			closeSaveModal(){
				this.showSaveModal=false
			},
			getParams(value){
				var info
	    		info=this.$route.params.value
	    		if(info){
	    			if(info.type==undefined){
	    				return
	    			}
		    	    this.device_id = info.id
		    	    this.device_name = info.name
		    	    var type= info.type==0?'客户端':(info.type==1?'服务器':'其他类型')
		    	    this.tag = '当前设备为'+type
		    	    this.getData(info)
		    	}
	    	},
	    	updateType(val){
	    		this.device_name=val
	    	},
	    	getData(result){
	    		var basic_value = this.basic,details_value = this.details
	    		for(var key in basic_value){
	    			basic_value[key].value = result[key]
	    		}
	    		basic_value.name.enable = result.enable
	    		for(var key in details_value){
	    			details_value[key].value = result[key]
	    		}
	    		if(result.cpu){
		    		for(var key in this.cpu_details){
		    			this.cpu_details[key].value = result.cpu[key]
		    		}
		    		details_value.model.value=result.cpu.model
		    	}else{
		    		for(var key in this.cpu_details){
		    			this.cpu_details[key].value = ''
		    		}
		    		details_value.model.value=''
		    	}
	    		var network = result.netcards,child={}
	    		if(network.length>0){
		    		for(var i=0;i<network.length;i++){
		    			if(network[i].management){
		    				this.network_cards.value = network[i].netcard_ip+'/'+network[i].netcard_mask
		    				child = network[i]
		    			}else{
		    				this.networkConfig.networkList.push({
		    					value:network[i].netcard_name,
		    					label:network[i].netcard_name
		    				})
		    			}
		    		}
		    	}else{
		    		this.networkConfig.networkList=[]
		    		this.network_cards.value=''
		    	}
	    		for(var key in this.network_details){
	    			this.network_details[key].value = child[key]==undefined?'':child[key]
	    		}
	    		var config = result.connectConfigs
	    		if(config.length>0){
		    		for(var i=0;i<config.length;i++){
		    			let name = config[i].type
		    			this.serverConfig[name]=config[i]
		    			if(name=='HTTP'){
		    				this.serverConfig.serverType=[true]
		    				this.serverConfig['TCP']={
		    					type:'TCP',
		    					keepalived:false,
		    					keepalivedtimout:'0',
		    					port:'80',
		    					keepalivedprobes:0,
		    					keepalivedintvl:0
		    				}
		    			}else{
		    				this.serverConfig.serverType=[false]
		    				this.serverConfig['HTTP']={
		    					type:'HTTP',
		    					keepalived:false,
		    					keepalivedtimout:'0',
		    					port:'8080',
		    					keepalivedprobes:0,
		    					keepalivedintvl:0
		    				}
		    			}	
		    		}
		    	}else{
		    		this.serverConfig.serverType=[false]
		    		this.serverConfig['TCP']={
		    			type:'TCP',
		    			keepalived:false,
		    			keepalivedtimout:'0',
		    			port:'80',
		    			keepalivedprobes:0,
		    			keepalivedintvl:0
		    		}
		    		this.serverConfig['HTTP']={
		    			type:'HTTP',
		    			keepalived:false,
		    			keepalivedtimout:'0',
		    			port:'8080',
		    			keepalivedprobes:0,
		    			keepalivedintvl:0
		    		}
		    	}
	    		this.serverConfig.isabled=result.connectConfigEnable
	    		this.networkConfig.isabled=result.venable
	    		this.networkConfig.testNetwork={}
	    		this.networkConfig.network_card={}
	    		if(result.vNets.length>0){
		    		for(var i=0;i<result.vNets.length;i++){	
		    			var name = result.vNets[i].vnet_name
						this.networkConfig.testNetwork[name]=result.vNets[i]
					}
				}
				if(result.vNetcards.length>0){
					for(var i=0;i<result.vNetcards.length;i++){	
		    			var name = result.vNetcards[i].vnetcard_name 
						this.networkConfig.network_card[name]=result.vNetcards[i]
					}
				}
				this.systemConfig.cpuLimit=0
				this.systemConfig.interrupt=false
				this.systemConfig.kernel=[]
				if(result.cpuOptimizationItems &&result.cpuOptimizationItems.length>0){
					this.systemConfig.cpuLimit=result.cpuOptimizationItems[0].value
				}
				if(result.interruptOptimizationItems &&result.interruptOptimizationItems.length>0){
					this.systemConfig.interrupt=result.interruptOptimizationItems[0].value
				}
				this.systemConfig.kernel=result.kernelOptimizationItems
	    	},
	    	handleClick(tab, event) {
		       console.log(tab, event);
		    },
		    back(){
		    	let count =parseInt(this.activeName)
		    	if(count==1){
		    		return
		    	}else{	
		    		count = count-1
		    	}
		    	this.activeName = count.toString()
		    },
		    next(){
		    	let count = parseInt(this.activeName),
		    		length = 4
		    	if(count==length){
		    		return
		    	}else{
		    		count = count+1
		    	}
		    	this.activeName = count.toString()
		    },
		    convertSubmitData(){
		    	// this.deviceData=this.$refs.servers.getConfig()
		    	// console.log(this.deviceData)
		    	var data={},
		    		system=this.systemConfig,
			    	server=this.serverConfig,
			    	net=this.networkConfig
		    	data.id = this.device_id
		    	data.cpuOptimizationItems=[]
		    	data.interruptOptimizationItems=[]
		    	data.kernelOptimizationItems=[]
		    	data.connectConfigs=[]
		    	data.vNets=[]
		    	data.vNetcards=[]
		    	data.cpuOptimizationItems.push({
		  			name:"cpu.cpu_limit",
			        value:system.cpuLimit,
			   		localName:'CPU利用率限制'
			    })
			    data.interruptOptimizationItems.push({
			    	name:"interrupt.interrupt_bind",
			        value:system.interrupt,
			   		localName:'网卡中断与绑定'
			    })
			    data.kernelOptimizationItems=system.kernel
			    data.connectConfigEnable=server.isabled
			    if(server.isabled){
				    var value
				    if(server.serverType.length>0 && server.serverType[0]){
				    	value = {
					    	type:'HTTP',
					    	port:server.HTTP.port,
					    	keepalived:server.HTTP.keepalived,
					    	keepalivedtimout:server.HTTP.keepalivedtimout,
					    }
				    }else{
				    	value = {
					    	type:'TCP',
					    	port:server.TCP.port,
					    	keepalived:server.TCP.keepalived,
					    	keepalivedtimout:server.TCP.keepalivedtimout,
					    	keepalivedintvl:server.TCP.keepalivedintvl,
					    	keepalivedprobes:server.TCP.keepalivedprobes
					    }  
				    }
				    data.connectConfigs.push(value)
				}else{
					data.connectConfigs=[]
				}
			    data.venable=net.isabled
			    for(var key in net.testNetwork){
			    	data.vNets.push(net.testNetwork[key])
			    }
			    var tab = net.network_card
			    for(var key in tab){
			    	data.vNetcards.push(tab[key])
			    }
			    return data
		    },
		    submit(){
		    	var $this =this,value=this.convertSubmitData()
		        var option={
		          type:'POST',
		          url:'/AKuning/v1.0/device/manager/save_config',
		          dataType:'json',
		          contentType:'application/json',
		          data:[
		            {
		              name:'',
		              value:value,
		              urlExternal:false,
		              queryString:false
		            },
		            {
		              name:'user_token',
		              value:$this.token,
		              urlExternal:false,
		              queryString:true
		            }
		          ],
		          success:function(response){
		            if(response.code==0){
		            	//更新本地数据
		            	$this.showSaveModal=false
		            	$this.$akMessage({
			                type:'success',
			                message:response.localizedMessage
			             })
		            }else{
		           		$this.$akMessage({
			                type:'error',
			                message:response.localizedMessage
			             })
		           	}
		          }
		        }
		        apiAjax(option)
		    },
		    getServerData(val){
		    	this.serverConfig=val
		    },
		    getNetworkData(val){
		    	this.networkConfig=val
		    },
		    getSystemData(val){
		    	this.systemConfig = val
		    }
		},
		mounted(){
			this.token=window.localStorage.user_token
		}
	}
</script>
<style>
	.agent{
	}
	.agent .agent_title{
		margin-bottom:20px;
		margin-left:15px;
		height:35px;
	}
	.agent .agent_title .device_name{
		width:300px;
		float:left;
	}
	.agent .agent_title .tag{
		font-size:10px;
		height:35px;
		width:100px;
		line-height:35px;
		color:#e51c23;
		float:left;
		margin:0 20px;
	}
	.agent .agent_title .device_button{
		float:right;
	}
	.agent .agent_content{
		border:1px solid #ccc;
		padding:5px 0;
		height:500px;
		position:absolute;
		width:97%;
	}
	.agent .agent_content .agent_button{
		position:absolute;
		bottom:20px;
		right:20px;
	}
	.agent .el-tabs__item{
		padding: 0 20px;
	    height: 40px;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    line-height: 40px;
	    display: inline-block;
	    list-style: none;
	    font-size: 14px;
	    font-weight: 500;
	    color: #303133;
	    position: relative;
	    width: 150px;
	}
	.agent .el-tabs__item.is-active {
  		 color: #03a9f4 !important;
	}
	.agent .el-tabs__item.is-disabled{
		cursor: default;
		color:#ccc !important;
	}
	.agent .el-tabs__active-bar {
	    position: absolute;
	    bottom: 0;
	    left: 0;
	    height: 2px;
	    background-color: #03a9f4;
	    z-index: 1;
	    -webkit-transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: transform .3s cubic-bezier(.645,.045,.355,1), -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
	    list-style: none;
	    width: 150px;
	}
</style>
