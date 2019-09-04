<template>
  <div :class="widgetClass" :style="model.commonStyle">
    <el-table
    :data="tableData"
    ref="_op_table_table"
    tooltip-effect="dark"
    style="width: 100%"
    :height="model.tHeight||null"
    :max-height="model.tMaxHeight||null"
    :border="model.theme && model.theme.tableType==='border'?true:false"
    :stripe="model.theme && model.theme.tableType==='stripe'?true:false"
    highlight-current-row  
    :size="model.theme && model.theme.size"
  >
   <el-table-column
     v-if="model.openIndex"
      type="index"
    >
    </el-table-column>

    <el-table-column
      v-if="model.selection==='multi'"
      type="selection"
      width="55">
    </el-table-column>
     <el-table-column type="expand" v-if="model.expand">
          <el-form label-position="left" inline class="v2-table-expand"   >
          <el-form-item v-for="(ele,idx) in model.expandMap" v-if="ele.label" :label="ele.label" :key="idx">
            <span>{{scope.row[ele.name]}}</span>
          </el-form-item>   
          </el-form>
     </el-table-column>
    <el-table-column
      v-for="item in model.columns"
      v-if="item.prop && item.label"
      :prop="item.prop"
      :label="item.label||(item.__edm_collection && (item.__edm_collection.PUBCODECNAME ||item.__edm_collection.description))"
      :key="item.prop"
      :fixed="item.fixed"
      :width ="item.width"
      :sortable ="item.sortable"
      :filters="item.openFilter? item.filterMap:null"
      :filter-method="item.openFilter?filterhandler:null"
      filter-placement="bottom-end">
    
        <template slot-scope="scope">
          <el-tag
             v-if="item.type ==='tag'"
            :type="getTagType(scope.row[item.prop],item.tagMap)"
            disable-transitions>{{getTagText(scope.row[item.prop],item.tagMap)}}</el-tag>

         <i v-else-if="item.type ==='icon'" :class="getTagText(scope.row[item.prop],item.iconMap)"></i>

          <template v-else>{{scope.row[item.prop]}}</template>

        </template>
     
    </el-table-column>

     <el-table-column
      v-if="model.toolBtns.length"
      :fixed="model.toolBar && model.toolLocation"
      :label="model.toolTitle"
      :width="model.toolWidth">
      <template slot-scope="scope">
        <el-button  v-for="(item,idx) in model.toolBtns" :ref="`_op_table_btn_${idx}`"  @click="clickHandler(item.handler,scope.$index,scope.row)" :key="idx" :type="item.type" size="small">{{item.btnName}}</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    :style="`text-align:right`"
    v-if="model.openPage"
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
               fakeRowData[element.prop] = 'rol'+i+'col'+idx
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
    },
    clickHandler(eventHandler,index,row){
    
      this.$store.state.root[eventHandler](index,row);
      
    },
    filterhandler(value,row,column){

        const property = column['property'];
        return row[property] === value;
      
    },
    getTagType(value,tagMap){

         return tagMap.filter(item=>item.value==value)[0].type
    },
    getTagText(value,tagMap){
  
         return tagMap.filter(item=>item.value==value)[0].text
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
<style lang="scss">
  .v2-table-expand {
    font-size: 0;
  }
  .v2-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .v2-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
