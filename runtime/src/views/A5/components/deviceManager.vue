<template>
  <div class="deviceManager">
    <dataTables :options="option" ref="tables" id="deviceManager"></dataTables>
    <div class="deviceAdd" v-on:click="showModal">
      <img src="../assets/add.svg">
    </div>
    <modal width="500px" height="500px" v-show="showAddModal" title="新增设备" @hide="closeAddModal" @submit="submitData">
      <template slot="main">
        <akInput col_left="col-md-2" col_right="col-md-10" type="text" label="名称" placeholder="请输入名称" :value="input_data.name" @getValue="updateName" ></akInput>
        <akInput col_left="col-md-2" col_right="col-md-10" type="text" label="地址" placeholder="请输入IP地址" :value="input_data.ip" v-model="input_data.ip" @getValue="updateIp">
        </akInput>
        <akInput col_left="col-md-2" col_right="col-md-10" type="text" label="用户名" placeholder="请输入用户名" :value="input_data.userName" @getValue="updateUserName"></akInput>
        <akInput col_left="col-md-2" col_right="col-md-10" type="password" label="用户密码" placeholder="请输入密码" :value="input_data.userPwd" @getValue="updateUserPwd"></akInput>
        <akSelect col_left="col-md-2" col_right="col-md-10" label="类型" placeholder="请选择类型"
        :seoptions="select_option" @getValue="updateType"></akSelect>
        <akInput col_left="col-md-2" col_right="col-md-10" label="描述" type="textarea" placeholder="请输入描述" :value="input_data.description" @getValue="updateDesc"></akInput>
      </template>
    </modal>
    <modal width="500px" height="250px" v-show="showDeleteModal" title="删除设备" @hide="closeDeleteModal" @submit="deleteDevice">
      <template slot="main">
        <div class="deleteInfo">删除之后无法恢复，确定删除该设备吗</div>
      </template>
    </modal>
  </div>
</template>

<script>
 import dataTables from './dataTable'
 import modal from './modal'
 import akInput from './akInput'
 import akSelect from './akSelect'
export default {
  name: 'deviceManager',
  data() {
    return {
      option:{
        scrollCollapse:false,
        paging:true,
        ordering:false,
        bInfo:true,
        searching:true,
        columns:[
          {"title":""},
          {"title":"名称"},
          {"title":"地址"},
          {"title":"类型"},
          {"title":"使用状态"},
          {"title":"描述"},
          {"title":"操作"},
        ],  
        columnDefs: [{
          "targets":[ 0 ],
          "visible": false,          
        }],  
        dom:'<"float_left margin_bottom"f>rti<"float_right margin_top"l>p<"clear">'
      },
      showAddModal:false,
      showDeleteModal:false,
      deletId:'',
      token:'',
      input_data:{
        name:'',
        ip:'',
        port:'8765',
        type:'',
        userName:'',
        userPwd:'',
        description:''
      },
      select_option:[
        {
          value:'0',
          label:'客户端'
        },
        {
          value:'1',
          label:'服务器'
        },
        {
          value:'2',
          label:'其他'
        }
      ],
      device_info:{}
    }
  },
  components:{
    dataTables,
    modal,
    akInput,
    akSelect
  },
  mounted(){
    var data=[
      ['1','<span class="device"><i class="fa fa-television"></i><a href="#">客户端-1</a></span>','10.2.3.4:80','客户端','<i class="use_status fa fa-circle-o"></i>','设备描述信息','<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span>'],
       ['2','<span class="device"><i class="fa fa-server"></i><a href="#">服务端-1</a></span>','10.2.3.4:80','服务器','<i class="use_status fa fa-circle"></i>','设备描述信息','<span class="edit"><i class="fa fa-edit"></i></span><span class="delete"><i class="fa fa-trash-o"></i></span>']
    ]
    // this.$refs.tables.refresh(data)
    // this.registerEvent()
    this.token=window.localStorage.user_token
    this.getDeviceList()
  },
  methods:{
    getDeviceList(){
        var $this =this,
            user_token=this.token 
        var option={
          type:'GET',
          url:'/AKuning/v1.0/device/manager/list_devices',
          dataType:'json',
          data:[
            {
              name:'user_token',
              value:user_token,
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
                type:'success',
                message:response.localizedMessage
              })
            }
          }
        }
        apiAjax(option)
    },
    registerEvent(){
      var $this = this
      $('.deviceManager .delete').on('click',function(){
        var $row = $(this).closest('tr'),
            rowData = $this.$refs.tables.getRowValue($row)
        $this.deletId=rowData[0]
        $this.showDeleteModal=true
      })
      $('#deviceManager a').off('click').on('click',function(){
        var $row = $(this).closest('tr'),
            rowData = $this.$refs.tables.getRowValue($row)
        var id=rowData[0],name=$(rowData[1]).text(),
            type=rowData[3]
        $this.getDeviceInfo(id)
      })
    },
    getDeviceInfo(id){
      var $this = this,user_token=this.token,
          option={
            type:'GET',
            url:'/AKuning/v1.0/device/manager/get_device',
            dataType:'json',
            data:[
              {
                name:'device_id',
                value:id,
                urlExternal:false,
                queryString:true
              },
              {
                name:'user_token',
                value:user_token,
                urlExternal:false,
                queryString:true
              }
            ],
            success:function(response){
              if(response.code==0){
                var result = response.result
                console.log($this.$router)
                $this.$router.push({name:'agent',
                             params:{value:result}
                          })
              }
            }
          }
      apiAjax(option)
    },
    showModal(){
      this.showAddModal=true;
      this.input_data.name=''
      this.input_data.ip=''
      this.input_data.port='8765'
      this.input_data.type=''
      this.input_data.userName=''
      this.input_data.userPwd=''
      this.input_data.description=''
    },
    updateName(val){
      this.input_data.name=val
    },
    updateIp(val){
      this.input_data.ip=val
    },
    updateUserName(val){
      this.input_data.userName=val
    },
    updateUserPwd(val){
      this.input_data.userPwd=val
    },
    updateType(val){
      this.input_data.type=val
    },
    updateDesc(val){
      this.input_data.description=val
    },
    submitData(){
      var $this =this,value=this.input_data,user_token=this.token
        var option={
          type:'POST',
          url:'/AKuning/v1.0/device/manager/add_device',
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
              value:user_token,
              urlExternal:false,
              queryString:true
            }
          ],
          success:function(response){
            if(response.code==0){
              $this.getDeviceList()
              $this.showAddModal=false
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
    deleteDevice(){
       var $this =this,value=this.deletId,user_token = this.token
       console.log(value,user_token);
       var option={
        type:'DELETE',
        url:'/AKuning/v1.0/device/manager/delete_device',
        dataType:'json',
        data:[
          {
            name:'device_id',
            value:value,
            urlExternal:false,
            queryString:true
          },
          {
              name:'user_token',
              value:user_token,
              urlExternal:false,
              queryString:true
          }
        ],
        success:function(response){
          if(response.code==0){
            $this.getDeviceList()
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
        var content=[],type=result[i].type
        type=type==0?'客户端':(type==1?'服务器':'其他')
        content.push(result[i].id)
        if(type=='客户端'){
          content.push('<span class="device"><i class="fa fa-television"></i><a href="#">'+result[i].name+'</a></span>')
        }else if(type=='服务器'){
          content.push('<span class="device"><i class="fa fa-server"></i><a href="#">'+result[i].name+'</a></span>')
        }else{
          content.push('<span class="device"><i class="fa fa-hdd-o"></i><a href="#">'+result[i].name+'</a></span>')
        }
        content.push(result[i].ip+':'+result[i].port)
        content.push(type)
        
        if(result[i].status==0){
          content.push('<i class="use_status fa fa-circle-o"></i>')
        }else{
          content.push('<i class="status fa fa-circle"></i>')
        }
        content.push(result[i].description)
        content.push('</span><span class="delete"><i class="fa fa-trash-o"></i></span>')
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
  .deviceManager{
  }
  .deviceManager .deviceAdd{
    position:absolute;
    top:45px;
    right:40px;
    opacity:0.8;
  }
  .deviceManager .deviceAdd>img{
    width:40px;
    height:40px;
  }
  .deviceManager .device>i{
    font-size:1.7em;
    margin-right:0.4em;
    opacity:0.8
  }
  .deviceManager .dv-content{
    display:flex;
  }
  .deviceManager .dv-content>div{
    margin-right:20px;
  }
  .deviceManager .device>a{
    color:#03a9f4;
  }
  .deviceManager .status{
    color:#e51c23;
    font-size:1.1em;
  }
  .deviceManager .normal_status{
    color:#259b25;
    font-size:1.1em;
  }
  .deviceManager .use_status{
    color:#259b25;
    font-size:1.1em;
  }
  .deviceManager .edit{
    color:#259b25;
    font-size:1.8em;
    margin-right:0.2em;
  }
  .deviceManager .delete{
    color:#e51c23;
    font-size:1.8em;
  }
  .deviceManager .deleteInfo{
    height:60px;
    line-height:60px;
    margin:0 -15px;
    font-size:12px;
  }
</style>
