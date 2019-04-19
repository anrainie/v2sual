<template>
  <div :style="model.style" ref="wrap" :class="wrapClass" class="v2Upload">
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
  import {widget, composite} from '../../assets/js/v2-view.js'
  import {edit} from '../../assets/js/edit.js'

  export default {
    name: 'v2Upload',
    mixins: [widget, edit],
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
