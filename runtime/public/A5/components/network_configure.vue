<template>
	<div class="network_configure">
		<akRadio text_name="开启网卡虚拟化" col_left="col-md-1" col_right="col-md-11 dv-right" :lists="list" :value="networkData.isabled" @get-value="updateIsabled"></akRadio>
		<div class="row rowCtn">
			<div class="columns col-md-1">测试网络管理</div>
			<div class="columns col-md-11 dv-right">
				<tables :options="option" id="testTable" ref="netTab"></tables>
			</div>
			<div class="addTestNetwork" @click="showTestModal">
			   <img src="../assets/add.svg">
			</div>
		</div>
		<div class="row rowCtn">
			<div class="columns col-md-1" style="margin-top:10px">网卡管理</div>
			<div class="columns col-md-11 dv-right" style="margin-top:10px">
				<tables :options="netOption" ref="networkTable" id="networkTable"></tables>
			</div>
			<div class="addNetwork" @click="showNetModal">
			   <img src="../assets/add.svg">
			</div>
		</div>
		<modal width="450px" height="400px" v-show="testNetwork" title="新增测试网络" @hide="closeTestModal" @submit="saveTestData">
			<template slot="main">
				<akInput col_left="col-md-2" col_right="col-md-10" type="text" label="网络名" :value="testNetworkName" @getValue="updateTestNetworkName"></akInput>
				<akSelect col_left="col-md-2" col_right="col-md-10" type="text" label="网卡" :value="testSelect" :seoptions="netcardsOption" @getValue="updateTestSelect"></akSelect>
				<akInputTab col_left="col-md-2" col_right="col-md-10" type="text" label="地址" @getResult="getNameResult"></akInputTab>
			</template>
		</modal>
		<modal width="450px" height="350px" v-show="networkFlag" title="新增网卡" @hide="closNetworkModal" @submit="saveNetworkData">
			<template slot="main">
				<akInput col_left="col-md-2" col_right="col-md-10" type="text" label="名称" :value="networkName" @getValue="updateNetworkName"></akInput>
				<akInput col_left="col-md-2" col_right="col-md-10" type="text" label="地址" :value="networkAddr" @getValue="updateNetworkAddr"></akInput>
				<akInput col_left="col-md-2" col_right="col-md-10" type="text" label="掩码" :value="networkMask" @getValue="updateNetworkMask"></akInput>
				<akSelect col_left="col-md-2" col_right="col-md-10" type="text" label="网卡" :seoptions="sel_option"  @getValue="updateNetworkSelect" :value="networkSelect"></akSelect>
			</template>
		</modal>
	</div>
</template>
<script>
	import akRadio from './akRadio'
	import tables from './dataTable'
	import modal from './modal'
	import akSelect from './akSelect'
	import akInputTab from './akInputTab'
	import akInput from './akInput'
	export default{
		data(){
			return{
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
				testNetwork:false,
				testNetwork_default:[],
				networkFlag:false,
				testNetworkName:'',
				networkAddr:'',
				networkMask:'',
				networkName:'',
				networkSelect:'',
				testSelect:'',
				netcardsOption:[],
				testAddr:'',
				sel_option:this.network.networkList,
				networkData:this.network,
				option:{
			        scrollCollapse:false,
			        paging:true,
			        ordering:false,
			        bInfo:true,
			        searching:true,
			        columns:[
			          {"title":"名称"},
			          {"title":"地址"},
			          {"title":"上行网卡"},
			          {"title":"操作"},
			        ],  
			        columnDefs: [],  
			        dom:''
			    },
			    netOption:{
			        scrollCollapse:false,
			        paging:true,
			        ordering:false,
			        bInfo:true,
			        searching:true,
			        columns:[
			          {"title":"名称"},
			          {"title":"地址"},
			          {"title":"物理网卡"},
			          {"title":"操作"},
			        ],  
			        columnDefs: [],  
			        dom:''
			    },
			}
		},
		props:{
			network:Object
		},
		watch:{
			networkData:{
				handler(newVal,oldVal){
					//this.sel_option=newVal.networkList
					this.refreshData(newVal)
				},
				deep:true
			}
		},
		methods:{
			updateIsabled(val){
				this.networkData.isabled = val
				this.$emit('getNetwork',this.networkData)
			},
			closeTestModal(){
				this.testNetwork = false
			},
			saveTestData(){
				var value={
					vnet_name:this.testNetworkName,
					vnet_netcard:this.testSelect,
					vnet_address:this.testAddr
				}
				this.networkData.testNetwork[value.vnet_name]=value
				this.$emit('getNetwork',this.networkData)
				this.testNetwork = false
				var data=[value.vnet_name,value.vnet_address,value.vnet_netcard,'<span class="delete net"><i class="fa fa-trash-o"></i></span>']
				this.$refs.netTab.addRow(data)
				this.registerEvent()
			},
			showTestModal(){
				this.testNetwork = true
				this.testSelect=this.netcardsOption.length>0?this.netcardsOption[0].value:''
				this.testNetworkName=''
				this.testNetwork_default=[]
				this.testAddr=''
			},
			showNetModal(){
				if(this.network.networkList.length>0){
					this.networkSelect=this.network.networkList[0].value
				}
				this.networkFlag = true
				this.networkName=''
				this.networkAddr=''
				this.networkMask=''
			},
			closNetworkModal(){
				this.networkFlag = false
			},
			updateNetworkAddr(val){
				this.networkAddr = val
			},
			updateNetworkMask(val){
				this.networkMask = val
			},
			updateNetworkName(val){
				this.networkName = val
			},
			updateTestNetworkName(val){
				this.testNetworkName = val
			},
			updateNetworkSelect(val){
				this.networkSelect = val
			},
			updateTestSelect(val){
				this.testSelect = val
			},
			getNameResult(val){	
				if(val){
					if(this.testAddr=='')
						this.testAddr = val
					else
						this.testAddr = this.testAddr+','+val
				}else{
					this.testAddr=''
				}
			},
			saveNetworkData(){ 
				var value={
					vnetcard_name:this.networkName,
					vnetcard_ip:this.networkAddr,
					vnetcard_mask:this.networkMask,
					vnetcard_netcard:this.networkSelect,
				}
				this.networkData.network_card[value.vnetcard_name]=value
				this.$emit('getNetwork',this.networkData)

				this.networkFlag = false
				var data=[value.vnetcard_name,value.vnetcard_ip+'/'+value.vnetcard_mask,value.vnetcard_netcard,'<span class="delete netcards"><i class="fa fa-trash-o"></i></span>']
				this.$refs.networkTable.addRow(data)
				this.registerEvent()
				this.netcardsOption.push({
					value:value.vnetcard_name,
					label:value.vnetcard_name
				})
			},
			registerEvent(){
				var $this = this
				$('.network_configure .net').off('click').on('click',function(){
			        var $row = $(this).closest('tr'),
			            rowData = $this.$refs.netTab.getRowValue($row)
			       	let name=rowData[0]
			        $this.$refs.netTab.deleteRow($(this))
			        delete $this.networkData.testNetwork[name]
		      	})
		      	$('.network_configure .netcards').off('click').on('click',function(){
			        var $row = $(this).closest('tr'),
			            rowData = $this.$refs.networkTable.getRowValue($row)
			        let name=rowData[0],testList = $this.network.testNetwork
			        for(var key in testList){
			        	if(name==testList[key].vnet_netcard){
			        		alert('当前网卡正在网络中使用，请先删除网络')
			        		return;
			        	}

			        }
			        var value = $this.netcardsOption
			        for(var i=0;i<value.length;i++){
			        	if(name==value[i].label){
			        		value.splice(i,1)
			        	}
			        }
			      $this.$refs.networkTable.deleteRow($(this))
			      delete $this.networkData.network_card[name]
			       
		      	})
			},
			refreshData(dataList){
				var net=dataList.testNetwork,value=[],
				netcards=dataList.network_card,data=[]
				for(var key in net){
					let content = []
					if(!net[key].vnet_name){
						break;
					}
					content.push(net[key].vnet_name)
					content.push(net[key].vnet_address)
					content.push(net[key].vnet_netcard)
					content.push('<span class="delete net"><i class="fa fa-trash-o"></i></span>')
					value.push(content)
				}
				this.$refs.netTab.refresh(value)
				for(var key in netcards){
					let content = [],ctn=netcards[key]
					if(!ctn.vnetcard_name){
						break;
					}
					content.push(ctn.vnetcard_name)
					content.push(ctn.vnetcard_ip+'/'+ctn.vnetcard_mask)
					content.push(ctn.vnetcard_netcard)
					content.push('<span class="delete netcards"><i class="fa fa-trash-o"></i></span>')
					data.push(content)
					this.netcardsOption.push({
						value:ctn.vnetcard_name,
						label:ctn.vnetcard_name
					})
				}
				this.$refs.networkTable.refresh(data)
				this.registerEvent()
			}
		},
		components:{
			akRadio,
			tables,
			modal,
			akSelect,
			akInputTab,
			akInput
		},
		mounted(){
			var dataList=this.network,netList=dataList.networkList
			this.refreshData(dataList)
			for(var i=0;i<netList.length;i++){
				this.netcardsOption.push(netList[i])
			}
		},
	}
</script>
<style>
	.network_configure{
		padding:0 30px;
		font-size:12px;
	}
	.network_configure .dv-right{
		width:400px;
		max-height:300px;
		overflow-y:auto;
		margin-left:30px;
	}
	.network_configure .dv-right table{
		border-top:1px solid #424242;
		border-left:1px solid #424242;
		border-right:1px solid #424242;
	}
	.network_configure .dv-right td{
		width:120px;
		word-break:break-all;
		word-wrap:break-word;
	}
	.network_configure .dv-right th{
		font-size:12px;
		background-color:#fff;
	}
	.network_configure  .addTestNetwork,
	.network_configure  .addNetwork{
	    opacity:0.8;
	}
  .network_configure .addTestNetwork>img{
    width:30px;
    height:30px;
    margin-left: -35px;
    margin-top: -16px;
  }
  .network_configure .addNetwork>img{
    width:30px;
    height:30px;
    margin-left: -35px;
    margin-top: -5px;
  }
  .network_configure .delete{
  	color:#e51c23;
    font-size:1.5em;
  }
</style>