<template>
  <div :style="model.style" ref="wrap" :class="model.layoutClass">
   <div class="table-wrapper"  >
       <div class="table-tool-ctn">
           <el-form ref="form" label-width="100px">
<el-row :gutter="20">
             <template v-for="item in filterConfig">
                 <el-col :span="6" v-if="item.columnType ==='text'" :key="item.name">
            <el-form-item :label="item.desp"  >
              <avInput :model="{'data':item}" ></avInput>
            </el-form-item>
                 </el-col>
                   <el-col :span="6" v-else-if="item.columnType ==='date'"  :key="item.name">
            <el-form-item :label="item.desp" >
              <avDatePicker :model="{'data':item}" ></avDatePicker>
            </el-form-item>
             </el-col>
                   <el-col :span="6"  v-else-if="item.columnType ==='dropdown'" :key="item.name" >
            <el-form-item :label="item.desp">
              <avSelect :model="{'data':item}" ></avSelect>
            </el-form-item>
             </el-col>
                   <el-col :span="6" v-else-if="item.columnType ==='numeric'"  :key="item.name" >
              <el-form-item :label="item.desp" >
              <avNumber :model="{'data':item}" ></avNumber>
            </el-form-item>
             </el-col>
                   <el-col :span="6" v-else-if="item.columnType ==='checkbox'"  :key="item.name">
               <el-form-item :label="item.desp" >
              <avCheckbox :model="{'data':item}" ></avCheckbox>
            </el-form-item>
             </el-col>
                 
            </template>
           <el-col :span="6">
            <el-form-item>
              <el-button type="primary" ref="searchBtn">查询</el-button>
            </el-form-item>
           </el-col>
</el-row>
           </el-form>
         
           <!-- <input type="text" name="search" ref="searchInput"><input type="button" value="查询"> -->
           <!-- <input type="button" value="新增"><input type="button" value="删除" class="etable-delete-btn"><input type="button" value="修改" class="etable-edit-btn"> -->
           </div>
        <div :id="hotTableID" class="hotTable">
        <HotTable  ref="hotTable" :settings="hotSettings"></HotTable>
        </div>
   </div>
  </div>
</template>
<script>

import { HotTable } from '@handsontable/vue';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';
import axios from 'axios';
import avInput from '../v2-form-input/index.vue'
import avDatePicker from '../v2-form-datepicker/index.vue'
import avSelect from '../v2-form-select/index.vue'
import avNumber from '../v2-form-inputnumber/index.vue'
import avCheckbox from '../v2-form-checkbox/index.vue'

let lastChangeRow ='';
let isAfterSelect='';
const EDM_TYP_MAP={
  "String":'text',
  "Date":'date',
  "Integer":'numeric',
  "dropdown":'dropdown'
};


export default {
  name: "v2-component-etable",

  data: function () {
    return {
      hotTableID:'hot-table',
      hot:{},
      config:{},
      filterConfig:[],
      selectOptionAtProp:{},
      propAtSelectOption:{},
      colName:[],
      colType:[],
      IDColIdx:'',
      selectProps:[],
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
       // fillHandle: true, //选中拖拽复制 possible values: true, false, "horizontal", "vertical"       
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
               console.log('afterSelection');
              //  this.$nextTick(()=>{
              //     this.saveData(lastChangeRow);
              //  })
               isAfterSelect = true;
                 
              }
        
        },
        afterChange(changes, source){
             console.log('afterChange');
            if(source=='loadData'){
              return;
            }
           if(lastChangeRow !== 'hasSave' && changes[0][0]!==lastChangeRow){
               console.log('afterChange');
                this.saveData(lastChangeRow);
                
                 lastChangeRow = changes[0][0];
              }else if(isAfterSelect){

                this.saveData(lastChangeRow);
                isAfterSelect = false;

              }else{
                lastChangeRow = changes[0][0];
              }
        },
        beforeRemoveRow(index,amount,physicalRows){
            
            let rowData = this.$refs.hotTable.hotInstance.getData()[physicalRows[0]];
            let that = this;
              console.log('删除',rowData);
             console.log('id下标',that.IDColIdx);
              axios.get(that.config.url,{
               params:{
                    action:that.config.del,
                    id:rowData[that.IDColIdx]
               }
             }).then((res)=>{
            
                if(res.data.status){
                     console.log('删除成功');
                }
               
             })
        },
        saveData (row){
       
           lastChangeRow = 'hasSave';
            let config = this.config;
            let that = this;
             
           let rowData = this.$refs.hotTable.hotInstance.getDataAtRow(row);
           
         
         
           console.log(that.dataArrToMap(rowData));

           if(!rowData[0]){ //新增,假设新增行后返回行id
             axios.get(config.url,{
               params:{
                    action:config.add,
                    ...that.dataArrToMap(rowData)
               }
             }).then((res)=>{
               
                if(res.data.status){
                     console.log('新增成功',res.data.content.newId);
                    let prop=this.$refs.hotTable.hotInstance.colToProp(0);
                    this.$refs.hotTable.hotInstance.setDataAtRowProp(row, prop, res.data.content.newId)
                }
               
             })

           }else{ //修改
             axios.get(config.url,{
                params:{
                  action:config.update,
                  ...that.dataArrToMap(rowData)
                }
             }).then((res)=>{
                 if(res.data.status){
                       console.log('修改成功');
                 }
             })
          
           }
          
        },
        updateHotSetting(data){
            let that = this;
            let filterMap ={};
            this.hotTableID = data.context;
            that.config = data; 
   
            data.dict.forEach((ele,idx) => {
              let colOption = {};
              that.colName.push(ele.__edm_collection.name);
              that.colType.push(ele.columnType);
              that.hotSettings.colHeaders.push(ele.__edm_collection.PUBCODECNAME||ele.__edm_collection.name);
              if(ele.pk){
                that.IDColIdx = idx;
              }
              switch(ele.columnType){
                case 'dropdown':
                  if(ele.source && ele.source.length){                    
                      colOption.source =  that.selectOption(ele.source||[],ele.__edm_collection.name);
                      that.selectProps.push(ele.__edm_collection.name);
                  }
                  break;
                case 'date':
                 colOption.correctFormat = true;
                 colOption.dateFormat = "YYYY-MM-DD";
                 break;
                case 'numberic':
                  ele.numericFormat && (colOption.numericFormat = ele.numericFormat)
                 break;
              }

              colOption.data = ele.__edm_collection.name;
              colOption.type = ele.columnType;
              colOption.readOnly = ele.readonly ;

              that.hotSettings.columns.push(colOption);

          
              
              filterMap[ele.__edm_collection.name]={
                columnType:ele.columnType,
                desp:ele.__edm_collection.PUBCODECNAME||ele.__edm_collection.name,
                name:ele.__edm_collection.name,
                value:''
              };

            });
            if(data.filter && data.filter.length){
               data.filter.forEach((item)=>{
                 that.filterConfig.push(filterMap[item]);
               })
            }
            
             // 初始加载请求数据
       
            this.$nextTick(()=>{
                 axios.get(data.url,{params:{"action":data.query}}).then((res)=>{
                  console.log(res);
                 
                    if(res.data.status){
                      console.log('hoinstance',that.$refs.hotTable.hotInstance);
                      //that.filterSelectOption(res.data.content.data)
                       that.$refs.hotTable.hotInstance.loadData(res.data.content.data);
                    } 
              })
           })
              //假设请求到一行数据
             // this.$refs.hotTable.hotInstance.loadData([{'GTU_ID':'id12','APP_NAME':'某某','TASK_CREATE_USER':'某某','USR_USERTYPE':'某某','AMV_CREATE_TIME':'15/04/2019','COINS_NUM':'100'}])
           if(data.filter && data.filter.length){
                  console.log(this.$refs.searchBtn);
                  Handsontable.dom.addEvent(this.$refs.searchBtn.$el, 'click', function (event) {  
                   
                      let queryData={}
                      that.filterConfig.forEach((item) => {
                         queryData[item.name] = item.value;
                      })
                      axios.get(data.url,{params:{
                        "action":data.query,
                        ...queryData
                        }}).then((res)=>{
                          console.log('搜索结果',res);
                            if(res.data.status){
                              that.$refs.hotTable.hotInstance.loadData(res.data.content.data)
                            } 
                      })
                      
                  
                      // that.hot.render();  
                  }); 
            }
        },
        selectOption(source,prop){
          let result =[];
           this.selectOptionAtProp[prop]={};
           this.propAtSelectOption[prop]={};
           source.forEach((ele) => {
              this.selectOptionAtProp[prop][ele.name]=ele.value;
              this.propAtSelectOption[prop][ele.value]=ele.name;
              result.push(ele.name);
           })
           return result;
        },
        dataArrToMap(dataArr){
                var colName = this.colName, colType = this.colType,j, i, item, dataMap, result = [];
             
                    dataMap = {};
                    for (i = -1; item = colName[++i];) {
                        if (dataArr[i] === false) {
                            dataArr[i]= 'false';
                        } else if (dataArr[i]=== true) {
                            dataArr[i] = 'true';
                        }
                        if(colType[i]==='dropdown'){   
                          dataMap[item] = this.selectOptionAtProp[item][dataArr[i]]||'';
                        }else{
                           dataMap[item] = dataArr[i] || '';
                        }
                      
                    }

                return dataMap;
        },
        filterSelectOption(data){
               let that = this;
               console.log(this.selectProps);
               console.log(this.propAtSelectOption);
          data.map((item)=>{
              that.selectProps.forEach((ele)=>{
                  item[ele] = that.propAtSelectOption[ele][item[ele]];
              })
          })
          console.log(data);
          return data;
        }
    },
  mounted(){
         
           let that = this;
          console.log('filterConfig',this.filterConfig);

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

        console.log(this.model);

    },
    components: {
        HotTable,
        avInput,
        avDatePicker,
        avSelect,
        avNumber,
        avCheckbox
    }
 }

</script>
<style lang="scss">
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
     .v2-form-input > div{
       width: 220px;
     }
  // .el-date-editor.el-input{
  //     width: 100%;
  //   }
 }

</style>
