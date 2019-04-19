<template>
  <div :style="model.style" ref="wrap" :class="wrapClass">
   <div class="table-wrapper"  >
       <div class="table-tool-ctn">
           <!-- <el-form ref="form" label-width="80px">
             <template v-for="item in filterConfig">
            <el-form-item :label="item.desp" v-if="item.type ==='text'" :key="item.name">
              <avInput v-model="item.value" ></avInput>
            </el-form-item>
            <el-form-item :label="item.desp" v-else-if="item.type ==='date'"  :key="item.name">
              <avDatePicker v-model="item.value"></avDatePicker>
            </el-form-item>
            <el-form-item :label="item.desp" v-else-if="item.type ==='dropdown'" :key="item.name">
              <avSelect v-model="item.value"></avSelect>
            </el-form-item>
              <el-form-item :label="item.desp" v-else-if="item.type ==='numeric'"  :key="item.name">
              <avNumber v-model="item.value"></avNumber>
            </el-form-item>
            </template>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
           </el-form>
          -->
           <input type="text" name="search" ref="searchInput"><input type="button" value="查询">
           <!-- <input type="button" value="新增"><input type="button" value="删除" class="etable-delete-btn"><input type="button" value="修改" class="etable-edit-btn"> -->
           </div>
        <div :id="hotTableID" class="hotTable">
        <HotTable  ref="hotTable" :settings="hotSettings" @keyup.up="saveData" @keyup.down ="saveData"></HotTable>
        </div>
   </div>
  </div>
</template>
<script>

import { HotTable } from '@handsontable/vue';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';
import axios from 'axios';
// import avInput from '../av-form-input/index.vue'
// import avDatePicker from '../form/av-form-datePicker/index.vue'
// import avSelect from '../form/av-form-select/index.vue'
// import avNumber from '../form/av-form-inputNumber/index.vue'

let lastChangeRow ='';
const EDM_TYP_MAP={
  "String":'text',
  "Date":'date',
  "Integer":'numeric',
  "dropdown":'dropdown'
};

export default {
  name: "av-editable-table",
  props: {
    model: Object
  },
  data: function () {
    return {
      root: 'test-hot',
      hotTableID:'hot-table',
      hot:{},
      config:{},
      filterConfig:[],
      selectOptionAtProp:{},
      hotSettings: {
        // data: [        //数据可以是二维数组，也可以是数组对象
        //   [ 10,'20080101', 11, 12, 13,'文本'],
        //   [ 20,'20090101', 11, 14, 13,'文本'],
        //   [ 30,'20010101', 15, 12, 13,'文本'],
        //   [ 32,'20010101', 213, 21, 312,'文本'],
        //   [ 32, '20010201',213, 21, 312,'文本'],
        //   [ 32, '20010301',213, 21, 312,'文本'],
        //   [ 32, '20010401',213, 21, 312,'文本'],
        //   [ 32, '20010501',213, 21, 312,'文本'],
        //   [ 32, '20010601',213, 21, 312,'文本']
        // ],
        rowHeaders: true,//行表头，可以使布尔值（行序号），可以使字符串（左侧行表头相同显示内容，可以解析html），也可以是数组（左侧行表头单独显示内容）。
        search: true,
        colHeaders:[],//自定义列表头or 布尔值['ID', 'A选项', 'B选项', 'C选项', 'D选项','答案']
        minSpareCols: 2, //列留白
        minSpareRows: 2,//行留白
        currentRowClassName: 'currentRow', //为选中行添加类名，可以更改样式
        currentColClassName: 'currentCol',//为选中列添加类名
        autoWrapRow: true, //自动换行
        contextMenu: {   //自定义右键菜单，可汉化，默认布尔值
          items: {
            "row_above": {
              name:'上方插入一行'
            },
            "row_below": {
              name:'下方插入一行'
            },
            "col_left": {
              name:'左方插入列'
            },
            "col_right": {
              name:'右方插入列'
            },
            "hsep1": "---------", //提供分隔线
            "remove_row": {
              name: '删除行',
            },
            "remove_col": {
              name: '删除列',
            },
            "make_read_only": {
              name: '只读',
            }
          }
        },
        fillHandle: true, //选中拖拽复制 possible values: true, false, "horizontal", "vertical"       
        fixedColumnsLeft: 0,//固定左边列数       
        fixedRowsTop: 0,//固定上边列数        
        columns: [     //添加每一列的数据类型和一些配置
          //   {
          //     type: 'numeric',           
          //     readOnly: true 
          //   },
          //  {        
          //   //data: 'title', 此设置标识，数组对象数据格式时的列字段           
          //   type: 'date',   //时间格式           
          //   dateFormat: 'YYYYMMDD',           
          //   correctFormat: true,           
          //   defaultDate: '19000101'           
          // },
          // {
          //   type: 'dropdown', //下拉选择
          //   source: ['BMW', 'Chrysler', 'Nissan', 'Suzuki', 'Toyota', 'Volvo'],        
          //   strict: false   //是否严格匹配        
          // },
          // {type: 'numeric'},  //数值                    
          // { type: 'numeric', format: '$ 0,0.00'},  //指定的数据格式         
          //  //   {type: 'checkbox'},  //多选框
          // {type: 'text'},  //文本 
        ],
        afterChange:this.afterChange,
        afterSelection:this.afterSelection,
        beforeRemoveRow:this.beforeRemoveRow,
        columnSorting: true,//排序
        stretchH: 'all',//根据宽度横向扩展，last:只扩展最后一列，none：默认不扩展
      }
     }
   },
    methods: {
        afterSelection(row, column, row2, column2, preventScrolling, selectionLayerLevel){
    
               if(!lastChangeRow && lastChangeRow!==0){
                 lastChangeRow = row;
               }
               
             if(lastChangeRow !== 'hasSave' && row!==lastChangeRow){
               
                this.saveData(lastChangeRow);
                 
              }
        
        },
        afterChange(changes, source){
           
            if(source=='loadData'){
              return;
            }
           if(lastChangeRow !== 'hasSave' && changes[0][0]!==lastChangeRow){
               
                this.saveData(lastChangeRow);
                 lastChangeRow = changes[0][0];
              }else{
                lastChangeRow = changes[0][0];
              }
        },
        beforeRemoveRow(index,amount,physicalRows){
            
            let rowData = this.$refs.hotTable.hotInstance.getData()[physicalRows[0]];
            console.log('删除',rowData);
        },
        saveData (row){
            console.log('save'+row);
           lastChangeRow = 'hasSave';
            let config = this.config;
             
           let rowData = this.$refs.hotTable.hotInstance.getDataAtRow(row);
           
         
           console.log(rowData);
           

           if(!rowData[0]){ //新增,假设新增行后返回行id
            //  axios(config.url,{
            //    action:config.add,
            //    data:rowData
            //  }).then((res)=>{
            //     console.log(res);
            //  })
           
            let prop=this.$refs.hotTable.hotInstance.colToProp(0);
             this.$refs.hotTable.hotInstance.setDataAtRowProp(row, prop, Number(Math.random().toString().substr(3,length) + Date.now()).toString(36))
            console.log(prop)
           }else{ //修改
            //  axios(config.url,{
            //    action:config.update,
            //    data:rowData
            //  }).then((res)=>{
            //     console.log(res);
            //  })
            console.log('修改')
           }
          
        },
        updateHotSetting(data){
            let that = this;
            let filterMap ={};
            console.log(data);
            this.hotTableID = data.context;
            that.config = data;
    
            data.dict.forEach((ele) => {
              that.hotSettings.colHeaders.push(ele.PUBCODECNAME||ele.name);
              if(ele.type==='String' && ele.source && ele.source.length){
                ele.type = 'dropdown'
              }
        
              that.hotSettings.columns.push({
                data:ele.name,
                type:EDM_TYP_MAP[ele.type],
                source: that.selectOption(ele.source,ele.name) || [],
                readOnly: ele.readonly     
              })
              
              filterMap[ele.name]={
                type:EDM_TYP_MAP[ele.type],
                desp:ele.PUBCODECNAME||ele.name,
                name:ele.name,
                value:''
              };

            });
             data.filter.forEach((item)=>{
                 that.filterConfig.push(filterMap[item]);
             })
              //初始加载请求数据
              //  axios(data.url,{
              //    action:config.query
              //     }).then((res)=>{
              //     console.log(res);
              // })
              //假设请求到一行数据
              this.$refs.hotTable.hotInstance.loadData([{'GTU_ID':'id12','APP_NAME':'某某','TASK_CREATE_USER':'某某','USR_USERTYPE':'某某','AMV_CREATE_TIME':'某某','COINS_NUM':'100'}])
               console.log(that.filterConfig)
        },
        selectOption(source,prop){
          let result =[];
           this.selectOptionAtProp[prop]={};
           source.forEach((ele) => {
              this.selectOptionAtProp[prop][ele.name]=ele.value;
              result.push(ele.value);
           })
           return result;
        }
    },
    beforeMount(){
      
    },
    mounted(){
         
           let that = this;
    
        axios.get('v1/dictTest/table').then((res)=>{
         
              if(res.data.status){
                that.updateHotSetting(res.data.content);
              }
          })   
     
           Handsontable.dom.addEvent(this.$refs.hotTable.$el, 'keyup', function(e) {
                   let  theEvent = e || window.event,
　               　    code = theEvent.keyCode || theEvent.which || theEvent.charCode;
                   if(code===38 || code===40){
                    
                     if(lastChangeRow !== 'hasSave'){
                         that.saveData(lastChangeRow);
                     }
                     
                   }
          })

           this.hot = this.$refs.hotTable.hotInstance;
 

            Handsontable.dom.addEvent(this.$refs.searchInput, 'keyup', function (event) {  
             
                      var search = that.hot.getPlugin('search'),
                          queryResult = search.query(this.value);

                    
                      that.hot.render();  
           }); 
     
    },
    components: {
        HotTable,
        // avInput,
        // avDatePicker,
        // avSelect,
        // avNumber
    }
 }

</script>
<style lang="less" scoped>
    .table-wrapper{
        width: 100%;
        height: 100%;
    }
 .hotTable{
     height: 300px;
     overflow: auto;
 }
 .table-tool-ctn{
     width: 100%;
     text-align: left;
     >input[type="text"]{
       width: 200px;
       border: 1px solid #ccc;
       padding: .5em 1em;
       font-size: 12px;
       border-radius: 32px;
       margin-bottom: 1em;
       margin-right: 1em;
     }
     >input[type="button"]{
        padding: .5em 2em;
        margin-bottom: 1em;
        border: 1px solid #04bebd;
        background: #04bebd;
        color: #fff;
        border-radius: 4px;
        margin-right: 1em;
        &.etable-delete-btn{
              background: #fff;
              color: #04bebd; 
             
        }
     }
 }
</style>
