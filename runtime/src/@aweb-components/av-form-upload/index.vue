<template>
  <div :style="flexStyle" class="av-form-updload">
     <div v-if="model.titleMode==='row'">
        <label class="av-form-updload-label">{{model.label}}</label>
    </div>
        <label  v-if="model.titleMode==='col'" class="av-form-updload-label">{{model.label}}</label>
    <el-upload
      class="upload-demo"
      :action="model.action"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="parseInt(model.limit)"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">{{model.btnText}}</el-button>
      <div slot="tip" class="el-upload__tip">{{model.prompt}}</div>
    </el-upload>
  </div>
</template>
<script>

  export default {
    name: 'av-form-updload',
 
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
        if(self.model.titleMode==='col'){
          return $.extend({}, self.model.style, {display:"flex"})
        }else if(self.model.titleMode==='row'){
          return self.model.style;
        }
      },
      model() {
        return (
          this.$store.getters.model(this.wid) || {}
        );
      }
    }
  }
</script>
