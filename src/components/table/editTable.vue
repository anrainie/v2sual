<template>
  <div :style="model.style" ref="wrap" :class="wrapClass">
   <div class="table-wrapper"  >
       <div class="table-tool-ctn">
           <input type="text" name="search"><input type="button" value="查询"><input type="button" value="新增">
           <!-- <input type="button" value="删除" class="etable-delete-btn"><input type="button" value="修改" class="etable-edit-btn"> -->
           </div>
        <div id="hotTable" class="hotTable">
        <HotTable  ref="hotTable" :settings="hotSettings" @keyup.up="saveData" @keyup.down ="saveData"></HotTable>
        </div>
   </div>
  </div>
</template>
<script>
import { widget, composite } from "../../assets/js/v2-view.js";
import { edit} from "../../assets/js/edit.js";
import { HotTable } from '@handsontable/vue';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css';
import axios from 'axios';


let lastChangeRow ='';
export default {
  name: "editTable",
  mixins: [widget,edit],
  data: function () {
    return {
      root: 'test-hot',
      hotSettings: {
        data: [        //数据可以是二维数组，也可以是数组对象
          [ 10,'20080101', 11, 12, 13,'文本'],
          [ 20,'20090101', 11, 14, 13,'文本'],
          [ 30,'20010101', 15, 12, 13,'文本'],
          [ 32,'20010101', 213, 21, 312,'文本'],
          [ 32, '20010201',213, 21, 312,'文本'],
          [ 32, '20010301',213, 21, 312,'文本'],
          [ 32, '20010401',213, 21, 312,'文本'],
          [ 32, '20010501',213, 21, 312,'文本'],
          [ 32, '20010601',213, 21, 312,'文本']
        ],
        rowHeaders: true,//行表头，可以使布尔值（行序号），可以使字符串（左侧行表头相同显示内容，可以解析html），也可以是数组（左侧行表头单独显示内容）。
        colHeaders:   ['ID', 'A选项', 'B选项', 'C选项', 'D选项','答案'],//自定义列表头or 布尔值
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
            {
              type: 'numeric',           
              readOnly: true 
            },
           {        
            //data: 'title', 此设置标识，数组对象数据格式时的列字段           
            type: 'date',   //时间格式           
            dateFormat: 'YYYYMMDD',           
            correctFormat: true,           
            defaultDate: '19000101'           
          },
          {
            type: 'dropdown', //下拉选择
            source: ['BMW', 'Chrysler', 'Nissan', 'Suzuki', 'Toyota', 'Volvo'],        
            strict: false   //是否严格匹配        
          },
          {type: 'numeric'},  //数值                    
          { type: 'numeric', format: '$ 0,0.00'},  //指定的数据格式         
           //   {type: 'checkbox'},  //多选框
          {type: 'text'},  //文本 
        ],
        afterChange: function (changes, source) { //数据改变时触发此方法
           
              console.log('chan',changes);
             if (source === 'loadData') {
                return; //don't save this change
              }
              lastChangeRow = changes;
    
        },
        columnSorting: true,//排序
        stretchH: 'all',//根据宽度横向扩展，last:只扩展最后一列，none：默认不扩展
      }
     }
   },
    methods: {
        saveData (){
        var examData = this.$refs.hotTable.table.getData(); //这里要注意，如果使用this.hotSettings.data 保存表格数据，拖拽完以后数据的顺序将不会更新，因此使用 this.$refs.testHot.table.getData(); 来获取数据，获取的数据格式为二维数组。
          console.log('key',examData);
        }
    },
    mounted(){
          axios.get('v1/dictTest/table').then((res)=>{
              
          })


         
           Handsontable.dom.addEvent(this.$refs.hotTable.$el, 'keyup', function(e) {
                   let  theEvent = e || window.event,
　               　     code = theEvent.keyCode || theEvent.which || theEvent.charCode;
                   if(code===38 || code===40){
                     console.log('ld',lastChangeRow)

                     
                   }
              
          })
     
    },
    components: {
        HotTable
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
