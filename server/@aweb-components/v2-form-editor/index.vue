<template>
     <div  class="v2-form-ctt v2-form-editor" :class="widgetClass" :style="model.commonStyle"> 
     <label
        :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
        :style="labelStyle"
      >
      <span class="must-input" v-if="model.isRequired">*</span>
      {{model.label}}</label>
     <div class="form-editor-ctn" :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}">

        <div ref="wEditor" style="text-align:left" :style="model.style && model.style.ctnStyle"> <p>{{model.placeholder}}</p></div>
         
     </div>
  </div>
</template>

<script>
    import E from 'wangeditor'
    import "wangeditor/release/wangEditor.min.css"

    export default {
      name: 'v2-form-editor',
      data () {
        return {
          editorContent: '',
          wEditor:null
        }
      },
      watch:{
        'model.disabled':{
          handler(val){
             this.wEditor.$textElem.attr('contenteditable', !val)
          }
        }
      },
      methods: {
      
      },
      mounted() {
        this.wEditor = new E(this.$refs.wEditor)
        this.wEditor.customConfig.onchange = (html) => {
          this.editorContent = html;
          this.model.value = html;
        }
        this.wEditor.customConfig.zIndex = 1;
        this.wEditor.create();
      }
    }
</script>


<style lang="scss" >

.form-label-col {
  float: left;
}
.v2-form-label {
  text-align: right;
  vertical-align: middle;
  font-size: 14px;
  line-height: 40px;
  padding-right: 12px;
  box-sizing: border-box;
}
.form-editor-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
  .w-e-toolbar{
    flex-wrap: wrap;
  }
  .w-e-text-container{
    height: auto !important;
  }
  .w-e-toolbar .w-e-active i{
       color:$--color-primary;
  }
  a {
    text-decoration: underline;
    color:$--color-primary;
  }
}

</style>
