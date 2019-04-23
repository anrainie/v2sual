<template>
  <div class="scriptManager">
    <dataTables :options="option" ref="tables" id="scriptManager"></dataTables>
    <div class="deviceAdd" v-on:click="showModal">
      <img src="../../assets/add.svg">
    </div>
    <modal width="500px" height="630px" v-show="showAddModal" :title="title" @hide="closeAddModal" @submit="submitData">
      <template slot="main">
        <akInput col_left="col-md-2" col_right="col-md-10" type="text" label="名称" placeholder="请输入名称" :value="input_data.name" @getValue="updateName" ></akInput>
        <akSelect col_left="col-md-2" col_right="col-md-10" label="类型" :value="input_data.type" @getValue="updateType" :seoptions="select_option"></akSelect>
       <!--  <akSelect col_left="col-md-2" col_right="col-md-10" label="目标服务" :value="input_data.serverDeviceName" @getValue="updateServerName" :seoptions="select_server"></akSelect> -->
        <akInput col_left="col-md-2" col_right="col-md-10" type="text" label="服务地址" placeholder="服务地址" :value="input_data.address" @getValue="updateAddress"></akInput>
        <akSelect v-show="showMethod" col_left="col-md-2" col_right="col-md-10" label="请求方法" :value="input_data.method" @getValue="updateMethod" :seoptions="select_Method"></akSelect>
        <div class="row rowCtn" v-show="showMethod">
          <div class="columns col-md-2" ><label>HEAD</label></div>
          <div class="columns col-md-10">
            <dataTables id="httpHead" ref="httpTable" :options="httpOption"></dataTables>
            <div class="addRow"><div class="addButton" @click="addTableRow">+添加</div></div>
          </div>
        </div>
        <akInput v-show="showMethod" col_left="col-md-2" col_right="col-md-10" type="textarea" label="BODY" placeholder="请输入BODY" 
        :value="input_data.body" @getValue="updateBody"></akInput>
        <akInput col_left="col-md-2" col_right="col-md-10" label="描述" type="textarea" placeholder="请输入描述" :value="input_data.description" @getValue="updateDesc"></akInput>
      </template>
    </modal>
    <modal width="500px" height="250px" v-show="showDeleteModal" title="删除脚本" @hide="closeDeleteModal" @submit="deleteDevice">
      <template slot="main">
        <div class="deleteInfo">删除之后无法恢复，确定删除该脚本吗</div>
      </template>
    </modal>
    <modal width="500px" height="320px" v-show="showCheckModal" title="测试连通性" @hide="closeCheckModal" @submit="checkScript">
      <template slot="main">
          <akSelect  col_left="col-md-2" col_right="col-md-10" label="客户端" :value="checkClient" @getValue="updateClient" :seoptions="select_Client"></akSelect>
          <div class="row rowCtn">
            <div class="columns col-md-2"><label>检测结果</label></div>
            <div class="columns col-md-10" :style="result_color">
              {{result_info}}
            </div>
          </div>
      </template>
    </modal>
    <modal width="400px" height="280px" v-show="showDetailModal" title="脚本详情" display="none" @hide="closeDetailModal">
      <template slot="main">
         <dataTables id="scriptDetail" ref="scriptDetail" :options="detailOption"></dataTables>
      </template>
    </modal>
  </div>
</template>

<script>
 import dataTables from '../dataTable'
 import modal from '../modal'
 import akInput from '../akInput'
 import akSelect from '../akSelect'
 import infoList from '../info_list'
export default {
  name: 'scriptManager',
  data() {
    return {
      result_color:'color:#a6a6a6;margin-top:7px;',
      result_info:'未检测',
      checkClient:'',
      select_Client:[],
      showCheckModal:false,
      showDetailModal:false,
      token:'',
      detailOption:{
        scrollCollapse:false,
        paging:true,
        ordering:false,
        bInfo:true,
        searching:true,
        columns:[
          {"title":''},
          {"title":''}
        ],  
        columnDefs:[],  
        dom:''
      },
      option:{
        paging:true,
        ordering:false,
        bInfo:true,
        searching:true,
        columns:[
          {"title":""},
          {"title":"名称"},
          {"title":"类型"},
          // {"title":"目的服务"},
          {"title":"目的地址"},
          {"title":"使用状态"},
          {"title":"描述"},
          {"title":""},
          {"title":""},
          {"title":""},
          {"title":"操作"},
        ],  
        columnDefs: [{
          "targets":[ 0,6,7,8 ],
          "visible": false,          
        }],  
        dom:'<"float_left margin_bottom"f>rti<"float_right margin_top"l>p<"clear">'
      },
      httpOption:{
        scrollCollapse:false,
        paging:true,
        ordering:false,
        bInfo:true,
        searching:true,
        columns:[
          {"title":"KEY"},
          {"title":"VALUE"},
          {"title":""},
        ],
        columnDefs: [{
          "targets":[ 0,1 ],
          "createdCell":function(td,cellData,rowData,rowIndex, colIndex){
            var _this
            $(td).click(function(){
              var text = $(this).text()
              $(this).html('<input type="text"value="" size="10"/>');
              var Input = $(this).find(":input");
              Input.focus().val(text);
            });
            $(td).on("blur",":input",function(){
              var text = $(this).val();
              $(td).html(text)
              //$('#httpTable').DataTable().cell(td).data(text)
            })
          }
        }], 
        dom:''
      },
      showHeadModal:false,
      showAddModal:false,
      showDeleteModal:false,
      deletId:'',
      operaitionType:'add',
      timer:null,
      input_data:{
        id:'',
        name:'',
        type:'1',
        serverDeviceName:'',
        address:'',
        method:'GET',
        body:'',
        head:{},
        description:''
      },
      select_option:[
        {
          value:1,
          label:'TCP'
        },
        {
          value:0,
          label:'HTTP'
        },
      ],
      select_Method:[
        {
          value:'GET',
          label:'GET'
        },
        {
          value:'POST',
          label:'POST'
        },
        {
          value:'PUT',
          label:'PUT'
        },
        {
          value:'DELETE',
          label:'DELETE'
        },
      ],
      select_server:[],
      showMethod:false,
      title:'新增脚本'
    }
  },
  components:{
    dataTables,
    modal,
    akInput,
    akSelect,
    infoList
  },
  mounted(){
    var data=[
      ['1','脚本-2','1','server-2','10.2.3.4:80','<i class="use_status fa fa-circle-o"></i>','设备描述信息','','','','<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="check"><i class="fa fa-sign-in"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'],
       ['2','脚本-1','1','server-2','10.2.3.4:80','<i class="use_status fa fa-circle-o"></i>','设备描述信息','','','','<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="check"><i class="fa fa-sign-in"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>']
    ]
    // this.$refs.tables.refresh(data)
    // this.registerEvent()
    this.token=window.localStorage.user_token
    this.getList()
  },
  methods:{
    addTableRow(){
      var _this = this
      var value=['<input type="text"value="" size="10"/>','<input type="text"value="" size="10"/>','<span class="deleteRow"><i class="fa fa-trash-o"></i></span>']
      _this.$refs.httpTable.addRow(value)
      $('.deleteRow').off('click .deleteRow').on('click',function(){
        _this.$refs.httpTable.deleteRow($(this))
      })
    },
    closeCheckModal(){
      this.showCheckModal=false
    },
    closeDetailModal(){
      this.showDetailModal=false
    },
    getList(){
        var $this =this
        var option={
          type:'GET',
          url:'/AKuning/v1.0/testing/script/list_scripts',
          dataType:'json',
          data:[
            {
              name:'user_token',
              value:$this.token,
              urlExternal:false,
              queryString:true
            }
          ],
          success:function(response){
            if(response.code==0){
              var result = response.result,
                  list = $this.convertData(result)
              $this.$refs.tables.refresh(list)
              $this.registerEvent()
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
    checkScript(){
      var _this =this,
        option={
          type:'POST',
          url:'/AKuning/v1.0/testing/script/check_script_host',
          dataType:'json',
          contentType:'application/json',
          data:[
            {
              name:'script_id',
              value:_this.input_data.id,
              urlExternal:false,
              queryString:true
            },
            {
              name:'device_id',
              value:_this.checkClient,
              urlExternal:false,
              queryString:true
            },
            {
              name:'user_token',
              value:_this.token,
              urlExternal:false,
              queryString:true
            }
          ],
          success:function(response){
            if(response.code==0){
              if(response.result){
                _this.result_color="color:#259b25;margin-top:7px;"
                _this.result_info="该脚本在当前设备上是连通的"
              }else{
                _this.result_color="color:#e51c23;margin-top:7px;"
                _this.result_info="该脚本目标在当前设备上不能连通"
              }
            }else{
              _this.$akMessage({
                type:'error',
                message:response.localizedMessage
              })
            }
          }
        }
        apiAjax(option)
    },
    getServerList(){
      this.select_server=[]
      this.select_Client=[]
      var _this =this,
        option={
          type:'GET',
          url:'/AKuning/v1.0/device/manager/list_devices',
          dataType:'json',
          data:[
            {
              name:'user_token',
              value:_this.token,
              urlExternal:false,
              queryString:true
            }
          ],
          success:function(response){
            if(response.code==0){
              var result = response.result
              for(var i=0;i<result.length;i++){
                if(result[i].type==1){
                  _this.select_server.push({
                    label:result[i].name,
                    value:result[i].name,
                    address:result[i].ip+':'+result[i].port
                  })
                }else if(result[i].type==0){
                  _this.select_Client.push({
                    label:result[i].name,
                    value:result[i].id
                  })
                }
              }
              // _this.$akMessage({
              //   type:'success',
              //   message:response.localizedMessage
              // })
            }else{
              _this.$akMessage({
                type:'error',
                message:response.localizedMessage
              })
            }
          }
        }
        apiAjax(option)
    },
    registerEvent(){
      var _this = this
      this.$forceUpdate()
      $('.scriptManager .delete').on('click',function(){
        var $row = $(this).closest('tr'),
            rowData = _this.$refs.tables.getRowValue($row)
        _this.deletId=rowData[0]
        _this.showDeleteModal=true
      })
      $('.scriptManager .edit').on('click',function(){
        _this.operaitionType='edit'
        var $row = $(this).closest('tr'),
            rowData = _this.$refs.tables.getRowValue($row),
            data={}
        data.id=rowData[0]
        data.name=rowData[1]
        data.type=rowData[2]=='HTTP'?0:1
       // data.serverDeviceName=rowData[3]
        data.method=rowData[6]
        data.address=rowData[3]
        data.description=rowData[5]
        data.head=rowData[7]
        data.body=rowData[8]
        _this.showAddModal=true;
        _this.title="编辑脚本"
        _this.getServerList()
        _this.showEditData(data)
      })
      $('.scriptManager .check').on('click',function(){
        var $row = $(this).closest('tr'),
            rowData = _this.$refs.tables.getRowValue($row)
          _this.showCheckModal = true
          _this.input_data.id=rowData[0]
          _this.getServerList()
      })
      $('.scriptManager .detail').on('click',function(){
        var $row = $(this).closest('tr'),
            rowData = _this.$refs.tables.getRowValue($row)
          _this.showDetailModal = true
          var method=rowData[6],head=rowData[7],
              body=rowData[8],list=[],content=[],value=''
              content.push('方法')
              content.push(method)
              list.push(content)
              content=[]
              content.push('Head')
              for(var key in head){
                value=value+'<p>'+key +'：'+head[key]+'</p>'
              }
              content.push(value)
              list.push(content)
              content=[]
              content.push('Body')
              content.push(body)
              list.push(content)
           _this.$refs.scriptDetail.refresh(list)
      })
    },
    showEditData(data){
      $.extend(this.input_data,data)
      var head=this.input_data.head,list=[],_this=this
      if(this.input_data.type=='0'){
        this.showMethod=true
      }else{
        this.showMethod=false
      }
      for(var key in head){
        var content=[]
        content.push(key)
        content.push(head[key])
        content.push('<span class="deleteRow"><i class="fa fa-trash-o"></i></span>')
        list.push(content)
      }
      this.$refs.httpTable.refresh(list)
      $('.deleteRow').off('click .deleteRow').on('click',function(){
        _this.$refs.httpTable.deleteRow($(this))
      })
    },
    getTableData(){
      this.input_data.head={}
      var tr=$('#httpHead tbody tr'),value
      for(var i=0;i<tr.length;i++){
        var td=$(tr[i]).find('td')
        value=$(td[0]).text()
        if(value=='无数据'){
          return
        }
        this.input_data.head[value]=$(td[1]).text()
      }
    },
    showModal(){
      this.operaitionType='add'
      this.showAddModal=true;
      this.title="新增脚本"
      this.input_data.id=''
      this.input_data.name=''
      this.input_data.type=1
      this.input_data.serverDeviceName=''
      this.input_data.address=''
      this.input_data.method='GET'
      this.input_data.body=''
      this.input_data.head={}
      this.input_data.description=''
      this.getServerList()
    },
    updateName(val){
      this.input_data.name=val
    },
    updateType(val){
      this.input_data.type=val
      if(val=='0'){
        this.showMethod=true
      }else{
        this.showMethod=false
      }
    },
    updateClient(val){
      this.checkClient = val
    },
    updateAddress(val){
      this.input_data.address=val
    },
    updateBody(val){
      this.input_data.body=val
    },
    updateServerName(val){ 
      var server=this.select_server
      //if(server.length==0){
      this.input_data.serverDeviceName=val
      // }
      // else{
      //   this.input_data.address=val
      if(server.length>0){
        for(var i=0;i<server.length;i++){
          if(val==server[i].label){
            this.input_data.address=server[i].address
            break;
          }
        }
      } 
    },
    updateMethod(val){
      this.input_data.method=val
    },
    updateDesc(val){
      this.input_data.description=val
    },
    submitData(){
      var _this =this,value,urlType='',method=''
      _this.getTableData()
      value=this.input_data
     // value.type=='HTTP'?value.type=0:value.type=1
      if(_this.operaitionType=='add'){
        urlType='/AKuning/v1.0/testing/script/add_script'
        method='POST'
      }else{
        urlType='/AKuning/v1.0/testing/script/update_script'
        method='PUT'
      }
      var option={
          type:method,
          url:urlType,
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
              value:_this.token,
              urlExternal:false,
              queryString:true
            }
          ],
          success:function(response){
            if(response.code==0){
              _this.showAddModal=false
              _this.getList()
              _this.$akMessage({
                type:'success',
                message:response.localizedMessage
              })
            }else{
              _this.$akMessage({
                type:'error',
                message:response.localizedMessage
              })
            }
          }
        }
        apiAjax(option)
    },
    deleteDevice(){
       var $this =this,value=this.deletId
      var option={
        type:'DELETE',
        url:'/AKuning/v1.0/testing/script/delete_script',
        dataType:'json',
        data:[
          {
            name:'script_id',
            value:value,
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
            $this.getList()
            $this.showDeleteModal=false
            _this.$akMessage({
                type:'success',
                message:response.localizedMessage
            })
          }else{
            _this.$akMessage({
                type:'error',
                message:response.localizedMessage
            }) 
          }
        }
      }
      apiAjax(option)
    },
    closeAddModal(){
      this.showAddModal=false
    },
    closeDeleteModal(){
      this.showDeleteModal=false
    },
    convertData(result){
      var list=[]
      for(var i=0;i<result.length;i++){
        var content=[],type=result[i].type
        content.push(result[i].id)
        content.push(result[i].name)
        content.push(type==0?'HTTP':'TCP')
       // content.push(result[i].serverDeviceName)
        content.push(result[i].address)
        if(!result[i].used){
          content.push('<i class="use_status fa fa-circle-o"></i>')
        }else{
          content.push('<i class="status fa fa-circle"></i>')
        }
        content.push(result[i].description)
        content.push(result[i].method)
        content.push(result[i].head)
        content.push(result[i].body)
        content.push('<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="check"><i class="fa fa-sign-in"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>')
        list.push(content)
      }
      return list
    }
  }
}
</script>

<style>
  .el-textarea__inner{
    padding:5px 3px;
  }
  .scriptManager{
  }
  .scriptManager .deviceAdd{
    position:absolute;
    top:45px;
    right:40px;
    opacity:0.8;
  }
  .scriptManager .deviceAdd>img{
    width:40px;
    height:40px;
  }
  .scriptManager .status{
    color:#e51c23;
    font-size:1.1em;
  }
  .scriptManager .normal_status{
    color:#259b25;
    font-size:1.1em;
  }
  .scriptManager .use_status{
    color:#259b25;
    font-size:1.1em;
  }
  .scriptManager .edit{
    color:#259b25;
    font-size:1.8em;
    margin-right:0.2em;
  }
  .scriptManager .delete,
  .scriptManager .deleteRow{
    color:#e51c23;
    font-size:1.8em;
    margin-right:0.2em;
  }
  .scriptManager .check{
    color:#03a9f4;
    font-size:1.8em;
  }
  .scriptManager .detail{
    color:#aaa;
    font-size:1.6em;
    float:right;
    margin-right:5px;
    margin-top:2px;
  }
  .scriptManager .deleteInfo{
    height:60px;
    line-height:60px;
    margin:0 -15px;
    font-size:12px;
  }
  .scriptManager .success{
    color:#259b25;
    margin-right:2px;
    font-size:1.3em;
  }
  .scriptManager .fail{
    color:#e51c23;
    font-size:1.3em;
    margin-right:2px;
  }
  .scriptManager .modal table{
    border:1px solid #ccc;
  }
  .scriptManager .modal #scriptDetail thead{
    display:none
  }
  .scriptManager .modal #scriptDetail td:first-child{
    background-color:#eee;
     width:100px;
  }
  .scriptManager .modal td{
    padding:0px 10px;
    height:30px;
  }
  .scriptManager .modal .row{
    margin-right:0;
  }
  .scriptManager .addRow{
    border-top:none;
    border-left:1px solid #ccc;
    border-right:1px solid #ccc;
    border-bottom:1px solid #ccc;
    height:32px;
  }
  .scriptManager .modal table input{
    height:85%;
    border-radius:4px;
    border:1px solid #a6a6a6;
  }
  .scriptManager .addRow .addButton{
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
</style>

