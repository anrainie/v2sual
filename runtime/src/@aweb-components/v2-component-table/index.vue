<template>

    <el-table
    :class="model.layoutClass"
    ref="awebTable"
    :data="model.tableData || fakeData"
    tooltip-effect="dark"
    style="width: 100%"
    border
    highlight-current-row
    @current-change="handleCurrentChange" 
    @selection-change="handleSelectionChange">
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
        <el-button  v-for="(item,idx) in model.toolBtns" @click="`${item.func}(scope.row)`" :key="idx" type="text" size="small">{{item.btnName}}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name:'v2-component-table',
  data(){
    return {
      fakeData: [{
          USR_CREATETIME: '2018-06-03',
          USR_USERNAME: '王小虎',
          USR_UPDATETIME: '2019-05-03'
        },{
          USR_CREATETIME: '2018-06-03',
          USR_USERNAME: '王小名',
          USR_UPDATETIME: '2019-05-03'
        }, {
          USR_CREATETIME: '2018-06-03',
          USR_USERNAME: '王小红',
          USR_UPDATETIME: '2019-05-03'
        }, {
          USR_CREATETIME: '2018-06-03',
          USR_USERNAME: '王小花',
          USR_UPDATETIME: '2019-05-03'
        }]
    }
  },
  methods:{
       handleSelectionChange(val) {
    
        this.model.selectedRow = val;
      },
      handleCurrentChange(val){

          this.model.selectedRow = val;
      }
  }

}
</script>
