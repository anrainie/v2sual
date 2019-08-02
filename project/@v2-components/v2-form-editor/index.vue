<template>
     <div  class="v2-form-ctt v2-form-editor" :class="widgetClass" :style="model.commonStyle"> 
     <label
        :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
        :style="labelStyle"
      >
      <span class="must-input" v-if="model.isRequired">*</span>
      {{model.label}}</label>
     <div class="form-editor-ctn" :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}">

        <div ref="wEditor" class="w-e-warp-ctn"  :style="model.style && model.style.ctnStyle" style="text-align:left;height:100%"> <p>{{model.placeholder}}</p></div>
         
     </div>
  </div>
</template>

<script>
    import E from 'wangeditor'
    import "@/../node_modules/wangeditor/release/wangEditor.min.css"

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
        },
        'model.value':{
           handler(val){
               this.wEditor.txt.html(val);
          }
        }
      },
      methods: {
          $Enter(e) {
            console.log(e.keyCode)
            return false;
          }
      
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
   height: 100%;
  .w-e-warp-ctn{
    // height:100% !important;
  }
  .w-e-toolbar{
    display:block;
     .w-e-menu{
      display: inline-block;
    }
  }
  .w-e-text-container{
      
        height: 90% !important;
  }
  .w-e-toolbar .w-e-active i{
       color:$--color-primary;
  }
  a {
    text-decoration: underline;
    color:$--color-primary;
  }
  .w-e-text ul{
        list-style: disc;
  }
  .w-e-text ol {
      list-style: decimal;
  }
}

</style>
