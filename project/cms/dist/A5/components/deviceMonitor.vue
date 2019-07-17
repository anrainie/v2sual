<template>
	<div class="deviceMonitor">
		<h1>设备监控</h1>
		<configure title="设备详情" width="430px" height="500px" icon="fa fa-edit" @store="store"  iconColor="#000" fontSize="18px">
             <div slot="dev">
             	 <dev_detail  :detailList="details" :cpu_details="cpu_details" :netCards="netCards" :net_details="net_details" marginLeft="20px"></dev_detail>
             </div>
		</configure>
		<configure title="项目列表" width="200px" height="500px" text="添加类型+" iconColor="skyblue"  @store="add" font-size="13px">
	<!-- 		<div slot="dev">
				<projectList :chargeList="chargeList[0]" :testList="chargeList[1]" :charge_list="gradeList1" :test_list="gradeList2" :info_charge="gradeList3" :info_test="gradeList4" marginLeft="30px" @getValue="getId"></projectList>
			</div> -->
			<div slot="dev">
                   <treeMenu  class="tree_container":model='chargeList' @getId="getId" :test="test" @checkId="checkId"></treeMenu>
			</div>
		</configure>
		<!-- <akTree :data="chargeList"></akTree>
 -->
		
	</div>
</template>
<script>
    // 导入多选框和echarts图组件
    import ak_echarts from './ak_echarts'
    // 导入设备配置组件
    import configure from './configure'
    //导入设备详情组件
    import dev_detail from './dev_detail'
   
    import akTree from './ak_tree'
    import treeMenu from './treeMenu'
	export default{
	    name:'deviceMonitor',
	    components:{
	    	ak_echarts,
	    	configure,
	    	dev_detail,
	    	akTree,
	    	treeMenu
	    },
	    data(){
	    	return {
	    		details:{
	    			address:{
						local_name:'地址',
						value:'10.9.1.8:80',
						// flag:true,
						infoDisp:true,
					},
				    userName:{
						local_name:'用户名',
						value:'admin',
						// flag:true,
						infoDisp:true,
					},
					password:{
						local_name:'密码',
						value:'admin',
						// flag:true,
						infoDisp:true,
					},
					free_mem:{
						local_name:'内存',
						value:'admin',
						// flag:true,
						infoDisp:true,
					},
					hard:{
						local_name:'硬盘',
						value:'200GB',
						infoDisp:true,
					},
					cpu:{
						local_name:'CPU',
						value:"",
						spreadIcon:true,
						infoDisp:true,
					},

				},
				// cpu详细信息
				cpu_details:{
					processor:{
						local_name:'逻辑处理器',
						value:'10',
						infoDisp:true
					},
					model:{
						local_name:'处理器类型',
						value:'Intel(R) Xeon(R) CPU E5-2630 v3 @ 2.40GHz',
						infoDisp:true,
					},
					slotCount:{
						local_name:'插槽数',
						value:'2',
						infoDisp:true,
					},
					cores:{
						local_name:'每个插槽的内核数',
						value:'1',
						infoDisp:true
					}
				},
				netCards:{
					net:{
						local_name:'网卡',
						value:'',
						infoDisp:true,
						spreadIcon:true
					}
					
				},
				net_details:{
					netcard_name:{
						local_name:'网卡名',
						value:'eth1',
						infoDisp:true
					},
					netcard_ip:{
						local_name:'地址',
						value:'10.9.1.28/24',
						infoDisp:true
					},
					netcard_bandwidth:{
						local_name:'带宽',
						value:'1000Mbps',
						infoDisp:true
					},
					// 是否支持多队列
					netcard_query:{
						local_name:'是否支持多队列',
						value:'是',
						infoDisp:true
					},
					// 状态
					netcard_status:{
						local_name:'状态',
						value:'正常',
						infoDisp:true
					},
				},
				// A5平台数据
			    chargeList:[
			    		{
			    			id:'AA',
					   	  	local_name:'Test',
					   	  	show:true,
					   	  	parentId:'',
					   	  	selectArr:false,
					   	  	children:[
						    	{
						    		id:'A_1',
							   	  	local_name:'A5管理平台',
							   	  	show:true,
							   	  	parentId:'AA',
							   	  	selectArr:false,
							   	    children:[
							   	  		{
							   	  		  id:"A_1_1",
					    		          local_name:'管理',
					    		          parentId:'A_1',
						   	  	          show:true,
						   	  	          selectArr:false,
						   	  	          children:[
						   	  	          	  {
						   	  	          	  	id:"A_1_1_1",
						   	  	          	  	local_name:"拓扑管理",
						   	  	          	 	show:true,	
						   	  	          	 	selectArr:false,
						   	  	          	 	parentId:'A_1_1',			   	  	          	  	
						   	  	          	  },
						   	  	          	  {
						   	  	          	  	id:"A_1_1_2",
						   	  	          	  	local_name:'设备管理',
						   	  	          	  	children:[],
						   	  	          	  	show:true,
						   	  	          	 	selectArr:false,
						   	  	          	  	parentId:'A_1_1',
						   	  	          	  },
						   	  	          	  {
						   	  	          	  	id:"A_1_1_3",
						   	  	          	  	local_name:'服务管理',
						   	  	          	  	children:[],
						   	  	          	  	show:true,
						   	  	          	    selectArr:false,
						   	  	          	  	parentId:'A_1_1',
						   	  	          	  					   	  	          	  
						   	  	          	  },
						   	  	          	  {
						   	  	          	  	id:"A_1_1_4",
						   	  	          	  	local_name:'上传管理',
						   	  	          	  	children:[],
						   	  	          	  	show:true,
						   	  	          	 	selectArr:false,
						   	  	          	  	parentId:'A_1_1',
						   	  	          	  				   	  	          	  
						   	  	          	  },
						   	  	          ]
						   	            },
									   	{
									   		  id:"A_1_2",
									   		  local_name:'运维',
									   		  children:[],
									   		  show:true,
									   		  selectArr:false,
									   		  parentId:'A_1',
									   		 
									   	},
									   	{
									   		  id:"A_1_3",
									   		  local_name:'监控',
									   		  children:[],
									   		  show:true,
				   	   	  	          	 	  selectArr:false,
									   		  parentId:'A_1',

							   	        },
							   	    ]
							   }
							   ]
							},

					   {
				    		id:'A_2',
					   	  	local_name:'测试平台管理接口',
					   	  	show:true,
					   	    selectArr:false,
					   	  	parentId:'',
					   	  	children:[
					   	  		{
					   	  		  id:"A_2_1",
			    		          local_name:'管理',
				   	  	          show:true,
				   	  	          selectArr:false,
				   	  	          parentId:'A_2',
				   	  	          children:[
				   	  	          	  {
				   	  	          	  	id:"A_2_1_1",
				   	  	          	  	local_name:"entertext",
				   	  	          	  	children:[],
				   	  	          	  	show:true,
                          				selectArr:false,
				   	  	          	  	parentId:'A_2_1',
				   	  	          	  },
				   	  	          	  {
				   	  	          	  	id:"A_2_1_2",
				   	  	          	  	local_name:'entertext',
				   	  	          	  	children:[],
				   	  	          	  	show:true,
				   	  	          	  	selectArr:false,
				   	  	          	  	parentId:'A_2_1',
				   	  	          	  },
				   	  	          	  {
				   	  	          	  	id:"A_2_1_3",
				   	  	          	  	local_name:'entertext',
				   	  	          	  	children:[],
				   	  	          	  	show:true,
				   	  	          	  	selectArr:false,
				   	  	          	  	parentId:'A_2_1',
				   	  	          	  }

				   	  	          ]
				   	            },
							   	{
							   		  id:"A_2_2",
							   		  local_name:'API测试',
							   		  children:[],
							   		  selectArr:false,
							   		  parentId:'A_2',
							   	},
							   
					   	    ]
					   } 	
			    
			    ],
			    gradeList1:[],
			    gradeList2:[],
			    gradeList3:[],
			    gradeList4:[],
			    node:{},
			    selectId:'',
			    // 转化之后的数据对象
			    test:{}
			}
	    },
	    mounted(){
		    // 数据转换
		    this.getLocalName(this.chargeList,0)
	    },

	    methods:{
	    	store(){
	    		console.log(111);
	    	},
	    	add(){
	    		var obj = this.node.children;
	    		console.log(obj);
	    		var addObj = {
	    			id:'A_2_2_4',
	    			local_name:"套餐管理",
	    			show:true,
	    			children:[],
	    		}
	    		obj.push(addObj);
	    		console.log(obj);
	    		console.log(this.chargeList);

	    	},
	        getLocalName(data,i){
				var value=data[i],name;
				name=value.id;
				this.$set(this.test,name,value)
			    // console.log(this.test);
			    if(value.children && value.children.length>0){
						this.getLocalName(value.children,0)
				}
				if(data[i+1])
				   this.getLocalName(data,i+1)
			},
	    	getId(cel,val){
	    		console.log(cel);
	    		this.selectId = cel.id;
	    		console.log(this.selectId);
	    	},
	    	// 多选id函数
	    	checkId(val){
	    			console.log(val);
	    	},
	    }
    }
</script>
<style scoped>
	
</style>
