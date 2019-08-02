<template>
  <div class="v2-form-ctt v2-form-updload" :class="widgetClass" :style="model.commonStyle">
     <label
      :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
      :style="labelStyle"
    >
    <span class="must-input" v-if="model.isRequired">*</span>
    {{model.label}}</label>
    <div :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}" >
          <el-upload
            v-if="model.type==='normal'||model.type==='picList'"
            ref="_op_formUpload_upload"
            :name="model.fileName"
            :data="model.data||{}"
            :action="model.action||'/-/upload'"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :disabled="model.disabled"
             :auto-upload="model.autoUpload"
             multiple
            :list-type="model.type==='picList'?'picture':null"
            :limit="parseInt(model.limit)"
            :on-exceed="handleExceed"
            :before-upload="beforeAvatarUpload"
            :file-list="model.fileList||[]">
            <el-button size="small" type="primary">{{model.btnText}}</el-button>
            <div slot="tip" class="el-upload__tip">{{model.prompt}}</div>
          </el-upload>

          <el-upload
            v-if="model.type==='avatar'"
            class="v2-avatar-uploader"
             ref="_op_formUpload_upload"
             :name="model.fileName"
            :action="model.action||'/-/upload'"
             :data="model.data||{}"
              :auto-upload="model.autoUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
             :file-list="model.fileList||[]"
            >
            <img v-if="imageUrl" :src="imageUrl" class="v2-avatar">
            <i v-else class="el-icon-plus v2-avatar-uploader-icon"></i>
          </el-upload>

          <el-upload
            v-if="model.type==='picture'"
             ref="_op_formUpload_upload"
             :name="model.fileName"
            :action="model.action||'/-/upload'"
             :auto-upload="model.autoUpload"
            :data="model.data||{}"
            list-type="picture-card"
            :before-upload="beforeAvatarUpload"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
             :file-list="model.fileList||[]"
            >
            <i class="el-icon-plus"></i>
          </el-upload>


          <el-upload
            v-if="model.type==='thumbnail'"
             ref="_op_formUpload_upload"
            :action="model.action||'/-/upload'"
            :data="model.data||{}"
            :name="model.fileName"
            list-type="picture-card"
            :auto-upload="model.autoUpload"
             :file-list="model.fileList||[]"
            >
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt=""
                  >
                  <span class="el-upload-list__item-actions">
                    <span
                      class="el-upload-list__item-preview"
                      @click="handlePictureCardPreview(file)"
                    >
                      <i class="el-icon-zoom-in"></i>
                    </span>
                
                    <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
          </el-upload>
          <el-dialog :visible.sync="dvshow" v-if="model.type==='picture'||model.type==='thumbnail'">
            <img width="100%" :src="imageUrl" alt="">
          </el-dialog>

          <el-upload
           v-if="model.type==='drag'"
            :data="model.data||{}"
            :name="model.fileName"
            ref="_op_formUpload_upload"         
            drag
            :action="model.action||'/-/upload'"     
            :before-upload="beforeAvatarUpload"
            multiple
             :auto-upload="model.autoUpload"
              :file-list="model.fileList||[]"
            >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">{{model.prompt}}</div>
          </el-upload>

          <el-upload
            v-if="model.type==='hand'"
             :name="model.fileName"
            :data="model.data||{}"
             ref="_op_formUpload_upload"
             :action="model.action||'/-/upload'"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="model.fileList||[]"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success"  ref="_op_formUpload_upload_btn" @click="submitUpload">{{model.btnText}}</el-button>
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
        imageUrl:'',
        dvshow:false
      }
    },
    methods: {
      
      handleRemove(file, fileList) {
         this.$store.state.root.handleRemove(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 ${parseInt(this.model.limit)}个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG=true;
        const isLt2M = file.size / 1024 / 1024 < parseFloat(this.model.limitSize);
        let types = this.model.limitType.slipt(',');
       
          isJPG = types.includes(file.type)

        if (!isJPG) {
          if(this.model.type !=='normal' && this.model.type !=='drag' && this.model.type !=='hand'){
            this.$message.error(`上传的图片只能是 ${this.model.limitType.replace(/image\//g,'')} 格式!`);
          }else{
             this.$message.error(`上传文件只能是 ${this.model.limitType.replace(/image\//g,'')} 格式!`);
          }
         
        }
        if (!isLt2M) {
          
          this.$message.error(`上传的文件大小不能超过 ${this.model.limitSize}MB!`);
        }
        return isJPG && isLt2M;
      },
      handlePictureCardPreview(file) {
        this.imageUrl = file.url;
        this.dvshow = true;
      },
       submitUpload() {
        this.$refs._op_formUpload_upload.submit();
      }
    },
    computed:{
    }
  }
</script>
<style lang="scss">
.v2-form-updload{
  .v2-avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .v2-avatar-uploader .el-upload:hover {
    border-color: $--color-primary;
  }
  .v2-avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .v2-avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}

</style>
