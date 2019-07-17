<template>
  <div class="senceManager">
    <senceTable :options="option" ref="tables" id="senceManager">
    </senceTable>
    <div class="senceAdd" v-on:click="showModal">
      <img src="../../assets/add.svg">
    </div>
    <modal width="500px" height="550px" v-show="showAddModal" :title="title" @hide="closeAddModal" @submit="submitData">
      <template slot="main">
          <addSence :clientList="select_client" :scriptList="select_script" ref="senceChild" @inputData="updateInput" :fatherData="input_data"></addSence>
      </template>
    </modal>
    <modal width="500px" height="250px" v-show="showDeleteModal" title="删除场景" @hide="closeDeleteModal" @submit="deleteDevice">
      <template slot="main">
        <div class="deleteInfo">删除之后无法恢复，确定删除该场景吗</div>
      </template>
    </modal>
    <modal width="500px" height="250px" v-show="showDetailModal" title="场景详情" display="none" @hide="closeDetailModal">
      <template slot="main">
        <senceTable id="senceDetail" ref="senceDetail" :options="detailOption"></senceTable>
      </template>
    </modal>
  </div>
</template>

<script>
 import senceTable from '../dataTable'
 import modal from '../modal'
 import akInput from '../akInput'
 import akSelect from '../akSelect'
 import addSence from './addSence'
export default {
  name: 'senceManager',
  data() {
    return {
      result_color:'color:#a6a6a6;margin-top:7px;',
      result_info:'未检测',
      checkClient:'',
      select_client:[],
      select_script:[],
      token:'',
      showDetailModal:false,
      detailOption:{
        scrollCollapse:false,
        paging:true,
        ordering:false,
        bInfo:true,
        searching:true,
        columns:[
          {"title":"脚本名"},
          {"title":"客户端"},
          {"title":"并发数"}
        ],  
        columnDefs: [],  
        dom:''
      },
      option:{
        scrollCollapse:false,
        paging:true,
        ordering:false,
        bInfo:true,
        searching:true,
        columns:[
          {"title":""},
          {"title":"名称"},
          {"title":"并发数"},
          {"title":"预热并发(s)"},
          {"title":"结束并发(s)"},
          {"title":"持续时间(s)"},
          {"title":"活跃度(%)"},
          {"title":"使用状态"},
          {"title":""},
          {"title":"操作"},
        ],  
        columnDefs: [{
          "targets":[ 0,8 ],
          "visible": false,          
        }],  
        dom:'<"float_left margin_bottom"f>rti<"float_right margin_top"l>p<"clear">'
      },
      showHeadModal:false,
      showAddModal:false,
      showDeleteModal:false,
      deletId:'',
      operaitionType:'add',
      input_data:{
        id:'',
        activelevel:0,
        concurrentCount:'',
        startIntervalTime:'',
        startIntervalCount:'',
        endIntervalTime:'',
        endIntervalCount:'',
        keeptime:'',
        name:'',
        stresses:[],
      },
      showMethod:false,
      title:'新增脚本'
    }
  },
  components:{
    senceTable,
    modal,
    akInput,
    akSelect,
    addSence
  },
  mounted(){
    var data=[
      ['1','<span class="device"><a href="#">场景-1</a></span>','1000','200 req 10','200 req 10',10,20,'<i class="use_status fa fa-circle-o"></i>','[{scriptName:"script-1",deviceName:"client-1",concurrentnum:"1000"}]','<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'],
       ['2','<span class="device"><a href="#">场景-2</a></span>','1000','200 req 10','200 req 10',10,20,'<i class="use_status fa fa-circle-o"></i>','[{scriptName:"script-1",deviceName:"client-1",concurrentnum:"1000"}]','<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa fa-ellipsis-v"></i></span>'],
    ]
    // this.$refs.tables.refresh(data)
    // this.registerEvent()
    this.token=window.localStorage.user_token
    this.getList()

  },
  methods:{
    updateInput(val){
      this.input_data=val
    },
    closeCheckModal(){
      this.showCheckModal=false
    },
    getList(){
        var $this =this
        var option={
          type:'GET',
          url:'/AKuning/v1.0/testing/scene/list_scenes',
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
      var _this =this
    },
    getServerList(){
      this.select_client=[]
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
                if(result[i].type==0){
                  _this.select_client.push({
                    name:result[i].name,
                    id:result[i].id
                  })
                }
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
    getScriptList(){
      this.select_script=[]
      var _this =this,
        option={
          type:'GET',
          url:'/AKuning/v1.0/testing/script/list_scripts',
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
                _this.select_script.push({
                  name:result[i].name,
                  id:result[i].id
                })
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
    registerEvent(){
      var _this = this
      $('.senceManager .delete').on('click',function(){
        var $row = $(this).closest('tr'),
            rowData = _this.$refs.tables.getRowValue($row)
        _this.deletId=rowData[0]
        _this.showDeleteModal=true
        _this.showDetailModal=false
        _this.showAddModal=false
      })
      $('.senceManager .edit').on('click',function(){
        _this.operaitionType='edit'
        var $row = $(this).closest('tr'),
            rowData = _this.$refs.tables.getRowValue($row)
        _this.input_data.id=rowData[0]
        _this.input_data.name=$(rowData[1]).text()
        _this.input_data.concurrentCount=rowData[2]
        var rowTree=rowData[3],rowForth=rowData[4]
        rowTree=rowTree.split(' ')
        rowForth=rowForth.split(' ')
        _this.input_data.startIntervalCount=rowTree[0]
        _this.input_data.startIntervalTime=rowTree[2]

        _this.input_data.endIntervalCount=rowForth[0]
        _this.input_data.endIntervalTime=rowForth[2]

        _this.input_data.keeptime=rowData[5]
        _this.input_data.activelevel=rowData[6]
        _this.input_data.stresses=rowData[8]
        _this.showAddModal=true;
        _this.title="编辑场景"
        _this.getServerList()
        _this.getScriptList()
      })
      $('.senceManager .detail').on('click',function(){
        var $row = $(this).closest('tr'),
            rowData = _this.$refs.tables.getRowValue($row)
          _this.showDetailModal = true
          var value =rowData[8],list=[]
          for(var i=0;i<value.length;i++){
            var content=[]
            content.push(value[i].scriptName)
            content.push(value[i].deviceName)
            content.push(value[i].concurrentnum)
            list.push(content)
          }
          _this.$refs.senceDetail.refresh(list)
      })
      $('#senceManager a').off('click').on('click',function(){
        var $row = $(this).closest('tr'),
            rowData = _this.$refs.tables.getRowValue($row)
        var info={}
        info.id=rowData[0]
        info.name=$(rowData[1]).text()
        info.status=rowData[7]=='空闲中'?0:(rowData[7]=='执行中'?'1':-1)
        console.log(info)
        _this.$router.push({name:'testManager',
                            params:{value:info}
                          })
      })
    },
    showModal(){
      this.operaitionType='add'
      this.showAddModal=true;
      this.showDetailModal=false
      this.showDeleteModal=false
      this.title="新增场景"
      this.getServerList()
      this.getScriptList()
      this.input_data.activelevel=0 
      this.input_data.stresses=[]
      this.input_data.startIntervalTime=''
      this.input_data.startIntervalCount=''
      this.input_data.endIntervalCount=''
      this.input_data.endIntervalTime=''
      this.input_data.keeptime=''
      this.input_data.concurrentCount=''
      this.input_data.name=''
      this.input_data.id=''
    },
    closeDetailModal(){
      this.showDetailModal=false
    },
    submitData(){
      var tableData=this.$refs.senceChild.getTableData()
      this.input_data.stresses=tableData
      var _this =this,value=this.input_data,
      urlType='',method=''
      if(_this.operaitionType=='add'){
        urlType='/AKuning/v1.0/testing/scene/add_scene'
        method='POST'
      }else{
        urlType='/AKuning/v1.0/testing/scene/update_scene'
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
              _this.getList()
              _this.showAddModal=false
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
        url:'/AKuning/v1.0/testing/scene/delete_scene',
        dataType:'json',
        data:[
          {
            name:'scene_id',
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
    closeAddModal(){
      this.showAddModal=false
    },
    closeDeleteModal(){
      this.showDeleteModal=false
    },
    convertData(result){
      var list=[]
      for(var i=0;i<result.length;i++){
        var content=[]
        content.push(result[i].id)
        content.push('<span><a href="#">'+result[i].name+'</a></span>')
        //content.push(result[i].name)
        content.push(result[i].concurrentCount)
        content.push(result[i].startIntervalCount+' req '+result[i].startIntervalTime)
        content.push(result[i].endIntervalCount+' req '+result[i].endIntervalTime)
        content.push(result[i].keeptime)
        content.push(result[i].activelevel)
        if(!result[i].status){
          content.push('空闲中')
        }else if(result[i].status==1){
          content.push('执行中')
        }else{
          content.push('已暂停')
        }
        content.push(result[i].stresses)
        content.push('<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span><span class="detail"><i class="fa  fa-ellipsis-v"></i></span>')
        list.push(content)
      }
      return list
    }
  }
}
</script>

<style>
  .senceManager{
  }
  .senceManager .senceAdd{
    position:absolute;
    top:45px;
    right:40px;
    opacity:0.8;
  }
  .senceManager .senceAdd>img{
    width:40px;
    height:40px;
  }
  .senceManager .status{
    color:#e51c23;
    font-size:1.1em;
  }
  .senceManager .normal_status{
    color:#259b25;
    font-size:1.1em;
  }
  .senceManager .use_status{
    color:#259b25;
    font-size:1.1em;
  }
  .senceManager .edit{
    color:#259b25;
    font-size:1.8em;
    margin-right:0.2em;
  }
  .senceManager .delete,
  .senceManager .deleteRow{
    color:#e51c23;
    font-size:1.8em;
  }
  .senceManager .detail{
    color:#aaa;
    font-size:1.6em;
    float:right;
    margin-right:5px;
    margin-top:2px;
  }
  .senceManager .deleteInfo{
    height:60px;
    line-height:60px;
    margin:0 -15px;
    font-size:12px;
  }
  .senceManager .success{
    color:#259b25;
    margin-right:2px;
    font-size:1.3em;
  }
  .senceManager .fail{
    color:#e51c23;
    font-size:1.3em;
    margin-right:2px;
  }
  .senceManager .modal table{
    border:1px solid #ccc;
  }
  .senceManager .modal table>thead>tr>th{
    background-color:#fff;
    font-size:12px;
  }
  .senceManager .modal .row{
    margin-right:0;
  }

</style>
