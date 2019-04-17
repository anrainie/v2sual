<template>
  <div :style="model.style" class="av-form-updload">
    <el-upload
      class="upload-demo"
      :action="model.data.action"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="model.data.limit"
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
  }
</script>
