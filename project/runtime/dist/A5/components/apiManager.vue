<template>
	<div class="apiManager">
	     <!-- 按名称查找 -->
	     <div class="search">
	           <div class="name">
	           	   <akInput col_left="col-md-4" col_right="col-md-8" type="text" label="Api名称查找" placeholder="请输入Api名称" @getValue="searchName" ></akInput>
	           </div>
	           <div class="potocol">
	           	     <!-- 协议类型查找 -->
	     			<akSelect  col_left="col-md-4" col_right="col-md-8" label="协议类型查找" placeholder="选择类型" :seoptions="protocol_option" @getValue="protoType"></akSelect>
	           </div>
	          <div class="method">
	          	  <!-- 按请求方式查找 -->
	      			<akSelect col_left="col-md-4" col_right="col-md-8" label="请求方式" placeholder="选择类型" :seoptions="select_option" @getValue="methodType" ></akSelect>
	          </div>
	          <akButton  name="搜索" font-size="12px" width="40px" height="35px" background="#00ABF6" border="1px solid #000"  @save="methodData"></akButton>
	     	  
	     </div>
	    
	    
	      
		<apiTable id="apiManager" :options="option" ref="tables"></apiTable>
		<modal v-show="showEditModal" width="500px" height="630px" title="编辑脚本" @hide="colseEditModal"  @submit="submitData">
		    <template slot="main">
		        <akInput col_left="col-md-2" col_right="col-md-10" type="text" label="Api名称" placeholder="请输入Api名称" :value="input_data.name" @getValue="updateName" ></akInput>
		        <akRadio v-if="input_data.potocol" col_left="col-md-2" col_right="col-md-10" :lists="list" text_name="协议" @get-value="getValue" :value="input_data.potocol"></akRadio>
		        <akSelect v-if="input_data.method" col_left="col-md-2" col_right="col-md-10" label="方法" placeholder="选择类型" :seoptions="select_option" @getValue="updateType" :value="input_data.method"></akSelect>
		        <akInput col_left="col-md-2" col_right="col-md-10" type="text" label="URL" placeholder="请输入url" :value="input_data.uri" @getValue="updateUrl" ></akInput>
		        <akInput col_left="col-md-2" col_right="col-md-10" type="textarea" label="描述" placeholder="请输入描述" :value="input_data.description" @getValue="descripte" ></akInput>
      </template>
		</modal>
	</div>
</template>
<script>
    import apiTable from './dataTable'
    // 导入modal
    import modal from './modal'
    // 导入输入框
    import akInput from './akInput'
    // 导入单选框
    import akRadio from './akRadio'
    //导入选择框
    import akSelect from './akSelect'
    // 导入搜索框
    import akButton from './akButton'
	export default{
		name:'apiManager',
		data(){
			return {
				// 名称搜索
				nameSearch:"",
				searchPotocol:"",
				searchMethod:"",
				token:"",
				// 编辑页面显示
				showEditModal:false,

				//协议选择框
					list:[
					  {
					  	label:"HTTP",
					  	name:"HTTP"
					  },
					  {
					  	label:"Abus",
					  	name:"Abus"
					  }
					  
					],
				input_data:{
					// 点击的行号
				    id:"",
					// api名称
					name:"",
					// 协议类型
					potocol:"",
					// 初始请求类型
				    method:"",
					// 地址
					uri:"",
					// 描述
					description:""
				},
				// 请求类型
				select_option:[
				   {
				   	value:"GET",
				   	label:"GET",
				   },
				   {
				   	value:"PUT",
				   	label:"PUT"
				   }
				],
				protocol_option:[
				   {
				   	value:"HTTP",
				   	label:"HTTP"
				   },
				   {
				   	value:"Abus",
				   	label:"Abus"
				   }

				],
				option:{
					//scrollCollapse:false,
			        paging:true,
			        ordering:false,
			        bInfo:true,
			        searching: true,
			        columns:[
			          {"title":""},
			          {"title":"api名称"},
			          {"title":"协议"},
			          {"title":"请求方法"},
			          {"title":"URL"},
			          {"title":"描述"},
			          {"title":"操作"}
			        ],
			        "columnDefs": [{
			          "targets":[ 0 ],
			          "visible":false

			        }], 
        			dom:'rti<"float_right margin_top"l>p<"clear">'
				}
			}
		},
		components:{
			apiTable,
			modal,
			akInput,
			akRadio,
			akSelect,
			akButton
		},
		mounted(){
			var data = [
			   
			    [
			      '1','detail','HTTP','PUT','localhost:8080/A5','更新用户接口信息',
			        '<span class="edit" v-show="showEditModal"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'
			    ],
			    [
			       '2','detail','Abus','GET','localhost:8080/A5','更新用户接口信息', '<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'
			    ],
			    [
			       '3','updateUser','HTTP','GET','localhost:8080/A5','更新用户接口信息', '<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'
			    ],
			    [
			       '4','user','HTTP','PUT','localhost:8080/A5','更新用户接口信息', '<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'
			    ],
			    [
			       '5','user','Abus','GET','localhost:8080/A5','更新用户接口信息', '<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'
			    ],
			    [
			       '6','detail','Abus','PUT','localhost:8080/A5','更新用户接口信息', '<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'
			    ],
			     [
			       '7','updateUser','Abus','PUT','localhost:8080/A5','更新用户接口信息', '<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'
			    ],
			     [
			       '8','updateUser','Abus','PUT','localhost:8080/A5','更新用户接口信息', '<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'
			    ],
			     [
			       '9','updateUser','Abus','PUT','localhost:8080/A5','更新用户接口信息', '<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'
			    ],
			    [
			       '10','updateUser','Abus','PUT','localhost:8080/A5','更新用户接口信息', '<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'
			    ],
			    [
			       '11','updateUser','Abus','PUT','localhost:8080/A5','更新用户接口信息', '<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'
			    ],
			    [
			       '12','updateUser','Abus','PUT','localhost:8080/A5','更新用户接口信息', '<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'
			    ]
			   
			];
			this.$refs.tables.refresh(data);
			this.registerEvent();
		},
		methods:{
			registerEvent(){
			    var _this = this;
				$('.edit').off('click').on('click',function(){
					_this.showEditModal=true;
					_this.input_data.id = $(this).parents('tr')[0].rowIndex;
					var rowData = _this.$refs.tables.getRowValue(_this.input_data.id);
					console.log(rowData);
					_this.input_data.name = rowData[1];
					_this.input_data.potocol = rowData[2];
					_this.input_data.method = rowData[3];
					_this.input_data.uri = rowData[4];
					_this.input_data.description = rowData[5];

			
				})
			},
			//关闭编辑框
			colseEditModal(){
				this.showEditModal = false;
			},
			// 编辑api名称
			updateName(val){
              this.input_data.name = val;
              // console.log(val);
			},
			// 协议单选框选择值
			getValue(val){
			  this.input_data.potocol= val;
			  // console.log(val);
			},
			// 更新请求类型
			updateType(val){
				this.input_data.method = val;
				// console.log(this.input_data.method);
			},
			// url输入框
		    updateUrl(val){
                this.input_data.uri = val;
                // console.log(input_data.url);
		    },
		    //描述
		    descripte(val){
		    	this.input_data.description = val;
		    	// console.log(val);
		    },
			// 提交编辑内容
			submitData(){
				var $this =this,value=this.input_data;
				console.log(value);
				var project_id =value.id;
				console.log(project_id);
				// 行号
				var option = {
					 type:'PUT',
			         url:"/ApiAutoTest/apidoc/update_api",
			         contentType:"application/json;charset=UTF-8",
                     dataType: "json",
			         data:[
			             {
				            name:'',
				            value:value,
				            urlExternal:false,
				            queryString:false
				         },
				         {
				            name:'project_id',
				            value:project_id,
				            urlExternal:false,
				            queryString:true
			            }
			         ],
			         success:function(response){
			         	console.log(response);
			         }

				}
				// console.log(option.data);
				apiAjax(option)

			},
			// 取消按钮
			colseEditModal(){
				this.showEditModal = false;
			},
			// 按名称查找
			searchName(val){
				this.nameSearch = val;
				// console.log(this.nameSearch);
			},
			// 按协议类型查找
			protoType(val){
				// console.log(val);
				this.searchPotocol = val;
			},
			//按请求类型查找
			methodType(val){
                this.searchMethod = val;
				// console.log(val);
			},
			methodData(){
			   console.log(this.searchMethod);
			   var data1 = this.nameSearch;
			   var data2 = this.searchPotocol;
			   var data3 = this.searchMethod;
			   console.log(data1,data2);
			   if(data1!=null || data2 !=null){
			   	 this.$refs.tables.searchValue(data1+" "+data2+" "+data3);
			   }
			   var option = {
					 // type:'PUT',
			         // url:"",
			         contentType:"application/json;charset=UTF-8",
                     dataType: "json",
			         data:[],
			         success:function(response){
			         	console.log(response);
			         }

				}
				apiAjax(option)

			   // this.$refs.tables.searchValue(this.searchMethod);
			}



		}
	}
</script>
<style >
.apiManager .edit{
    color:#259b25;
    font-size:1.8em;
    margin-right:0.2em;
  }
.apiManager .delete,
  .apiManager .deleteRow{
    color:#e51c23;
    font-size:1.8em;
  }
  .apiManager .detail{
    color:#aaa;
    font-size:1.6em;
    float:right;
    margin-right:5px;
    margin-top:2px;
  }
  .apiManager .search{
  	display:flex;
    padding-left: 15px;
  	margin:20px 0;
  }
  .apiManager .search>.name,.potocol,.method{
  	display:flex;
  	width:320px;
  	flex-flow:row wrap;
  	height:35px;
  	/*border:1px solid #000;*/
  }
</style>