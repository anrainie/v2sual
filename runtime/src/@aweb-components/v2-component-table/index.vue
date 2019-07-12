<template>
  <div :class="widgetClass" :style="model.commonStyle">
    <el-table
    
    :data="tableData"
    ref="_op_table_table"
    tooltip-effect="dark"
    style="width: 100%"
    border
    highlight-current-row  
  >
    <el-table-column
      v-if="model.selection==='multi'"
      type="selection"
      width="55">
    </el-table-column>
    
    <el-table-column
      v-for="item in model.columns"
      v-if="item.__edm_collection"
      :prop="item.sTitle"
      :label="item.__edm_collection && (item.__edm_collection.PUBCODECNAME ||item.__edm_collection.description)"
      :key="item.sTitle">
    </el-table-column>

     <el-table-column
      v-if="model.toolBar"
      :fixed="model.toolLocation"
      :label="model.toolTitle"
      :width="model.toolWidth">
      <template slot-scope="scope">
        <el-button  v-for="(item,idx) in model.toolBtns" :ref="`_op_table_btn_${idx}`"  :key="idx" type="text" size="small">{{item.btnName}}</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    :style="`text-align:right`"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="pageSize"
    :pager-count="5"
    layout="total, sizes, prev, pager, next, jumper"
    :total="totalCount"
    background>
  </el-pagination>
  </div>
</template>
<script>
export default {
  name:'v2-component-table',
  data(){
    return {
      pageSize:10,
      currentPage:1
    }
  },
  computed:{
    tableData(){
      if(typeof this.model.tableData !=='string' && this.model.tableData){
        let size = this.model.tableData.length-this.currentPage*this.pageSize;
        size = size > 0? this.pageSize : size+this.pageSize;
        let result = new Array(size);
        for(let i=0 ; i<size ; i++){
          result[i] = this.model.tableData[(this.currentPage-1)*this.pageSize+i];
        }
        return result;
      }else{
        let size = this.fakeData.length-this.currentPage*this.pageSize;
        size = size > 0? this.pageSize : size+this.pageSize;
        let result = new Array(size);
        for(let i=0 ; i<size ; i++){
          result[i] = this.fakeData[(this.currentPage-1)*this.pageSize+i];
        }
        return result;
      }
      // return (typeof this.model.tableData !=='string' && this.model.tableData ) || this.fakeData;
    },
    fakeData(){
       let columns =[],fakeData=[];
       if(this.model && this.model.columns){
          columns = this.model.columns;
          for(let i=0;i<10;i++){
            let fakeRowData = {};
            columns.forEach((element,idx) => {
               fakeRowData[element.sTitle] = 'rol'+i+'col'+idx
            });
            fakeData.push(fakeRowData);
          }
          console.log(fakeData);
       }
       return fakeData;
    },
    totalCount(){
      if(typeof this.model.tableData !=='string' && this.model.tableData){
        return this.model.tableData.length;
      }else{
        return this.fakeData.length;
      }
    }
  },
  methods:{
    handleCurrentChange(value){
      this.currentPage = value;
    },
    handleSizeChange(value){
      this.pageSize = value;
      this.currentPage = 1;
    }
  },
  mounted(){

  },
  watch:{
    'model.tableData':{
      handler(val){    
        this.pageSize = 10;
        this.currentPage = 1;
      }
    }
  },

}
</script>
