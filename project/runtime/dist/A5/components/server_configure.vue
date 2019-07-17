<template>
	<div class="server_configure">
		<akRadio text_name="部署服务" col_left="col-md-1" col_right="col-md-11" :lists="list" :value="isabled" @get-value="updateIsabled"></akRadio>
		<akRadio v-if="isabled==1" col_left="col-md-1" col_right="col-md-11" text_name="服务类型" :value="flag" :lists="server_list"  @get-value="updateValue"></akRadio>
		<div v-if="isabled==1" class="config_content">
			<div class="http" v-if="flag==true">
				<akRadio text_name="HTTP服务器配置："  col_left="col-md-3" col_right="col-md-9"></akRadio>
				<akRadio text_name="开启会话保持" :lists="list" col_left="col-md-3" col_right="col-md-9" @get-value="updateHttpKeepalive" :value="server_configure.HTTP.keepalived"></akRadio>
				<akInput col_left="col-md-3" col_right="col-md-9" type="text" label="超时时间" placeholder="请输入超时时间" @getValue="updateHttpTimeout" :value="server_configure.HTTP.keepalivedtimout"></akInput>
				<akInput col_left="col-md-3" col_right="col-md-9" type="text" label="端口" placeholder="请输入端口" @getValue="updatePort" :value="server_configure.HTTP.port"></akInput>
			</div>
			<div class="tcp" v-if="flag==false">
				<akRadio text_name="TCP服务器配置：" col_left="col-md-3" col_right="col-md-9"></akRadio>
				<akInput col_left="col-md-3" col_right="col-md-9" type="text" label="端口" placeholder="请输入端口" @getValue="updateTcpPort" :value="server_configure.TCP.port"></akInput>
				<akRadio text_name="开启会话保持" :lists="list" col_left="col-md-3" col_right="col-md-9" @get-value="updateTcpKeepalive" :value="server_configure.TCP.keepalived"></akRadio>
				<akInput col_left="col-md-3" col_right="col-md-9" type="text" label="超时时间" placeholder="请输入超时时间" @getValue="updateTcpTimeout" :value="server_configure.TCP.keepalivedtimout"></akInput>
				<akInput col_left="col-md-3" col_right="col-md-9" type="text" label="发送侦测包间隔" placeholder="请输入时间" @getValue="updateTcpIntvl" :value="server_configure.TCP.keepalivedintvl"></akInput>
				<akInput col_left="col-md-3" col_right="col-md-9" type="text" label="尝试连接次数" placeholder="请输入时间" @getValue="updateTcpProbes" :value="server_configure.TCP.keepalivedprobes"></akInput>
			</div>
		</div>
	</div>
</template>
<script>
	import akRadio from './akRadio'
	import akCheckBox from './akCheckBox'
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
				isabled:this.serverConfig.isabled,
				flag:this.serverConfig.serverType.length>0?this.serverConfig.serverType[0]:0,
				server_list:[{name:'HTTP服务',label:true},{name:'TCP服务',
							label:false}],
				server_configure:this.serverConfig
			}
		},
		props:{
			serverConfig:Object
		},
		watch:{
			server_configure:{
				handler(newVal,oldVal){
					this.isabled = newVal.isabled
					this.flag = newVal.serverType[0]
				},
				deep:true
			}
		},
		methods:{
			updateValue(val){
				this.flag = !this.flag
				this.server_configure.serverType=[]
				// if(val==false){
				// 	this.server_configure.TCP.keepalived = false
				// 	this.server_configure.TCP.keepalivedtimout=''
				// }else{
				// 	this.server_configure.HTTP.keepalived = false
				// 	this.server_configure.HTTP.keepalivedtimout=''
				// 	this.server_configure.HTTP.port=''
				// }
				this.server_configure.serverType.push(val)
				this.$emit('getServer',this.server_configure)
			},
			updateIsabled(val){
				this.isabled = val
				this.server_configure.isabled = val
				console.log('val',val)
				this.$emit('getServer',this.server_configure)
			},
			updateHttpKeepalive(val){
				this.server_configure.HTTP.keepalived = val
				this.$emit('getServer',this.server_configure)
			},
			updateHttpTimeout(val){
				this.server_configure.HTTP.keepalivedtimout = val
				console.log(this.server_configure)
				this.$emit('getServer',this.server_configure)
			},
			updatePort(val){
				this.server_configure.HTTP.port = val
				this.$emit('getServer',this.server_configure)
			},
			updateTcpPort(val){
				this.server_configure.TCP.port=val
				this.$emit('getServer',this.server_configure)
			},
			updateTcpTimeout(val){
				this.server_configure.TCP.keepalivedtimout = val
				this.$emit('getServer',this.server_configure)
			},
			updateTcpIntvl(val){
				this.server_configure.TCP.keepalivedintvl=val
				this.$emit('getServer',this.server_configure)
			},
			updateTcpProbes(val){
				this.server_configure.TCP.keepalivedprobes = val
				this.$emit('getServer',this.server_configure)
			},
			updateTcpKeepalive(val){
				this.server_configure.TCP.keepalived = val
				this.$emit('getServer',this.server_configure)
			},
		},
		components:{
			akRadio,
			akCheckBox,
			akInput
		}
	}
</script>
<style>
	.server_configure{
		padding:0 30px;
	}
	.server_configure .config_content{
		border:1px solid #ccc;
		width:550px;
		height:300px;
		padding:20px 30px;
	}
	.server_configure .config_content .row{
		margin-left:0;
		margin-right:0;
	}
</style>
