<template>

    <el-table
    :class="model.layoutClass"
    :data="(typeof model.tableData !=='string' && model.tableData ) || fakeData"
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
</template>
<script>
export default {
  name:'v2-component-table',
  data(){
    return {

    }
  },
  computed:{
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
    }
  },
  methods:{

  },
  mounted(){

  }

}
</script>
