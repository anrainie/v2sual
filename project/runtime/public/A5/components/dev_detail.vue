<template>
	<div class="dev_detail">
		<div class="info" :style="style">
		        <slot name="dev" >
		            <!-- 地址,用户名,cpu等数据 -->
		        	<infoList v-for="(val,key) in detailList" :key="key" :name="val.local_name" :spreadIcon="val.spreadIcon" :value="val.value" :infoDisp="val.infoDisp"  @spread="getCpuDetail"></infoList>
			        <!-- cpu详细信息 -->
					<infoList v-if="!cpu_flag" v-for="(val,key) in cpu_details" :key="key" :name="val.
					local_name" :spreadIcon="undefined" :value="val.value" :infoDisp="val.infoDisp"></infoList>
		            <!-- 网卡 -->
					<infoList v-for="(val,key) in netCards" :key="key" :name="val.local_name" :value="val.value" :spreadIcon="val.spreadIcon" :infoDisp="val.infoDisp"  @spread="getNetDetail"></infoList>
                     <!-- 网卡详细信息 -->
					<infoList v-if="!net_flag" v-for="(val,key) in net_details" :key="key" :name="val.
					local_name" :spreadIcon="undefined" :value="val.value" :infoDisp="val.infoDisp"></infoList>

		        </slot>	
				
		</div>
	</div>
</template>
<script>
	// 导入infoList
    import infoList from "./info_list"
	export default {
		name:"dev_detail",
		data(){
			return {
				cpu_flag:true,
				net_flag:true
			}
		},
		props:{
           detailList:{
           	 type:Object,
           },
           cpu_details:{
				type:Object,
				default:''
			},
		   netCards:{
		   	    type:Object,
		   	    default:''
		   },
		   net_details:{
		   		type:Object,
		   		default:''
		   },
		   marginLeft:String

		},
		components:{
			infoList
		},
		mounted(){
             console.log(this.marginLeft)
		},
		computed:{
			style(){
				var style = {};
				if(this.marginLeft){
					style.marginLeft = this.marginLeft;
				}
				return style;
			}
		},
		methods:{
			// 获取cup的详细信息
			getCpuDetail(info){
				console.log(this.detailList)
				if(info.name=='CPU'){
					this.cpu_flag = info.flag
				}
			},
			getNetDetail(info){
				if(info.name =="网卡"){
					this.net_flag = info.flag
				}
			}
		}
		

	}
</script>