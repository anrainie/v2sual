<template>
	<div>
		<div class="device_details">
			<div class="device_img">
				<img src="../assets/server.svg" style="width:60%;height:100%"/>
			</div>
			<div class="info">
				<infoList v-for="(val,key) in device_info" :key="key" :name="val.local_name" :infoDisp="val.infoDisp" :value="val.value"  :enable="val.enable" :spreadIcon='undefined' :id="val.id"  @modal="edit"></infoList>
			</div>
		</div>
		<div class="device_details">
			<div class="device_img">
				<img src="../assets/cpu.svg" style="width:50%;height:90%"/>
			</div>
			<div class="info">
				<infoList v-for="(val,key) in device_mem" :key="key" :name="val.local_name" :value="val.value" :spreadIcon="val.spread_icon" :infoDisp="val.infoDisp" @spread="getCpuDetail"></infoList>
				<infoList v-if="!cpu_flag" marginLeft="15px" v-for="(val,key) in cpu_details" :key="key" :name="val.local_name" :value="val.value" :infoDisp="val.infoDisp" :spreadIcon='undefined'></infoList>
				<infoList :name="network_cards.local_name" :value="network_cards.value" :spreadIcon="network_cards.spread_icon" :infoDisp="network_cards.infoDisp" @spread="getNetDetail"></infoList>
				<infoList v-if="!network_flag" marginLeft="15px" v-for="(val,key) in network_details" :key="key" :name="val.local_name" :value="val.value" :infoDisp="val.infoDisp" :spreadIcon='undefined'></infoList>
			</div>
		</div>
		<div class="device_details">
			<div class="device_img" style="height:40px">
				<img  src="../assets/envirment_check.svg" style="width:50%;height:90%"/>
			</div>
			<div class="info">
				<infoList name="环境检查" :spreadIcon='undefined' id="check" @modal="edit"></infoList>
			</div>
		</div>
		<modal width="500px" height="230px" v-show="showSwitchModal" title="修改开关" @hide="closeSwitchModal" @submit="updateSwitch">
	      <template slot="main">
	        <div class="switchInfo">确定修改设备连接开关吗</div>
	      </template>
	    </modal>
	    <modal width="500px" height="350px" v-show="showEditModal" title="编辑设备" @hide="closeEditModal" @submit="saveDevice">
	      <template slot="main">
	        <akInput col_left="col-md-2" col_right="col-md-10" type="text" label="名称" placeholder="请输入名称" :value="input_data.name" @getValue="updateName" ></akInput>
	        <akInput col_left="col-md-2" col_right="col-md-10" type="text" label="地址" placeholder="请输入IP地址" :value="input_data.ip" @getValue="updateIp">
	        </akInput>
	     <!--     <akInput col_left="col-md-2" col_right="col-md-10" type="text" label="端口" placeholder="请输入port" :value="input_data.port" @getValue="updatePort">
	        </akInput> -->
	        <akInput col_left="col-md-2" col_right="col-md-10" type="text" label="用户名" placeholder="请输入用户名" :value="input_data.userName" @getValue="updateUserName"></akInput>
	        <akInput col_left="col-md-2" col_right="col-md-10" type="password" label="用户密码" placeholder="请输入密码" :value="input_data.userPwd" @getValue="updateUserPwd"></akInput>
	      </template>
	    </modal>
	    <modal width="500px" height="230px" v-show="showCheckModal" title="环境检查" @hide="closeCheckModal" @submit="updateCheck">
	      <template slot="main">
	        <div class="switchInfo">确定进行一键检查吗</div>
	      </template>
	    </modal>
	</div>
</template>
<script>
	import infoList from './info_list'
	import modal from './modal'
	import akInput from './akInput'
	export default{
		data(){
			return{
				cpu_flag:true,
				network_flag:true,
				showSwitchModal:false,
				device_id:this.id,
				showEditModal:false,
				showCheckModal:false,
				deviceResult:'',
				currentData:this.device_info,
				token:'',
				input_data:{
					name:'',
					ip:'',
					userName:'',
					userPwd:'',
					port:this.device_info.port.value
				},
				switch_enable:'',
			}
		},
		created(){
			var info = this.device_info
			for(var key in info){
				this.input_data[key] = info[key].value
			}
			this.token=window.localStorage.user_token
		},
		components:{
			infoList,
			modal,
			akInput
		},
		watch:{
			deviceResult:{
				handler(newVal, oldVal) {
			　　　　this.$emit('updateDevice',newVal)
			　　},
			　　deep: true
			},
			currentData:{
				handler(newVal, oldVal) {
			　　　　 for(var key in newVal){
						this.input_data[key] = newVal[key].value
					}
			　　},
			　　deep: true
			},
			id(nVal,oVal){
				this.device_id=nVal
				console.log(nVal)
			}
		},
		props:{
			device_info:{
				type:Object,
				default:''
			},
			device_mem:{
				type:Object,
				default:''
			},
			cpu_details:{
				type:Object,
				default:''
			},
			network_details:{
				type:Object,
				default:''
			},
			network_cards:{
				type:Object,
				default:''
			},
			id:[String,Number],
		},
		methods:{
			edit(info){
				if(info.id=='switch'){
					this.showSwitchModal = true
					this.switch_enable = info.enable
				}else if(info.id=='device'){
					this.showEditModal = true
				}else{
					this.showCheckModal = true
				}
			},
			refreshData(result){

			},
			saveDevice(){
				var $this =this
				$this.input_data.id =this.device_id
		      	var option={
			        type:'PUT',
			        url:'/AKuning/v1.0/device/manager/update_device',
			        dataType:'json',
			        contentType:'application/json',
			        data:[
			          {
			            name:'',
			            value:$this.input_data,
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
			          	$this.deviceResult = response.result
			            $this.showEditModal=false
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
			updateCheck(){
				var $this = this,
					option={
				        type:'POST',
				        url:'/AKuning/v1.0/device/manager/check_env',
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
				            console.log(response)
				            $this.showCheckModal=false
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
			updateName(val){
				this.input_data.name = val
			},
			updateIp(val){
				this.input_data.ip = val
			},
			updatePort(val){
				this.input_data.port = val
			},
			updateUserName(val){
				this.input_data.userName = val
			},
			updateUserPwd(val){
				this.input_data.userPwd = val
			},
			getCpuDetail(info){
				if(info.name='CPU'){
					this.cpu_flag = info.flag
				}
			},
			getNetDetail(info){
				if(info.name='网卡'){
					this.network_flag = info.flag
				}
			},
			closeSwitchModal(){
				this.showSwitchModal=false
			},
			closeEditModal(){
				this.showEditModal=false
			},
			closeCheckModal(){
				this.showCheckModal=false
			},
			updateSwitch(){
				var $this =this
		      	var option={
			        type:'PUT',
			        url:'/AKuning/v1.0/device/manager/update_dev_connect_status',
			        dataType:'json',
			        data:[
			          {
			            name:'device_id',
			            value:$this.device_id,
			            urlExternal:false,
			            queryString:true
			          },
			          {
			            name:'device_status',
			            value:$this.switch_enable,
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
			           	$this.deviceResult = response.result
			            $this.showSwitchModal=false
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
		}
	}
</script>
<style>
	.device_details{
		width:100%;
		display:flex;
	}
	.device_details .info{
		border-bottom:1px solid #ccc;
		margin-left:20px;
		width:90%;
		max-height:210px;
		overflow-y:auto;
	}
	.device_details .device_img{
		width:103px;
		height:100px;
	}
	.device_details .switchInfo{
	    height:60px;
	    line-height:60px;
	    margin:0 -15px;
	    font-size:12px;
  }
</style>