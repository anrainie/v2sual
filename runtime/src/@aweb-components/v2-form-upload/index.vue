<template>
  <div class="v2-form-ctt v2-form-updload" :class="model.layoutClass">
     <label
      :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
      :style="labelStyle"
    >
    <span class="must-input" v-if="model.isRequired">*</span>
    {{model.label}}</label>
    <div :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}">
          <el-upload
            ref="_op_formUpload_upload"
            class="upload-demo"
            :action="model.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :disabled="model.disabled"
            multiple
            :limit="parseInt(model.limit)"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">{{model.btnText}}</el-button>
            <div slot="tip" class="el-upload__tip">{{model.prompt}}</div>
          </el-upload>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'v2-form-updload',
 
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
    }
  }
</script>
