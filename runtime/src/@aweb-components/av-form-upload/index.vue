<template>
  <div :style="flexStyle" class="av-form-updload">
     <div v-if="model.data.titleMode==='row'">
        <label class="av-form-updload-label">{{model.data.label}}</label>
    </div>
        <label  v-if="model.data.titleMode==='col'" class="av-form-updload-label">{{model.data.label}}</label>
    <el-upload
      class="upload-demo"
      :action="model.data.action"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="parseInt(model.data.limit)"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">{{model.data.btnText}}</el-button>
      <div slot="tip" class="el-upload__tip">{{model.data.prompt}}</div>
    </el-upload>
  </div>
</template>
<script>

  export default {
    name: 'av-form-updload',
    props: {
      model: Object
    },
    mounted () {
    },
    data () {
      return {
        fileList:[]
      }
    },
    methods: {
      
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    },
    computed:{
      flexStyle(){
        let self = this;
        if(self.model.data.titleMode==='col'){
          return $.extend({}, self.model.data.style, {display:"flex"})
        }else if(self.model.data.titleMode==='row'){
          return self.model.data.style;
        }
      },
    }
  }
</script>
