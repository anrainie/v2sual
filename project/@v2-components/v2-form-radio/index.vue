<template>
  <div  class="v2-form-ctt v2-form-radio" :class="widgetClass" :style="model.commonStyle">
    <label
      :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
      :style="labelStyle"
    >
    <span class="must-input" v-if="model.isRequired">*</span>
    {{model.label}}</label>
    <div
      class="form-radio-ctn"
      :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}"
    >
      <el-radio-group v-model="model.value" ref="_op_formRadio_group">
   


      <template   v-if="model.theme && model.theme.boxType !=='btn'">
               <el-radio
                v-for="(item,index) in model.options"
                :key="'radio-'+index"
                :disabled="item.disabled"
                :border="model.theme && model.theme.boxType==='border'"
                :label="item.label"
                :size="model.theme && model.theme.size"
               >{{item.text}}</el-radio>
         </template>
         <template  v-if="model.theme && model.theme.boxType ==='btn'">
            <el-radio-button
                v-for="(item,index) in model.options"
                :key="'radio-'+index"
                :disabled="item.disabled"
                :label="item.label"
                :size="model.theme && model.theme.size"
              >{{item.text}}</el-radio-button>
         </template>


      </el-radio-group>
    </div>
  </div>
</template>
<script>

export default {
  name: "v2-form-radio",
  data() {
    return {
      options: [
        {
          disabled: false,
          border: false,
          label: 3,
          text: "选项3"
        },
        {
          disabled: true,
          border: false,
          label: 2,
          text: "选项2"
        },
        {
          disabled: false,
          border: true,
          label: 1,
          text: "选项1"
        }
      ],
      value:""
    };
  }
};
</script>
<style lang="scss">
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
.form-radio-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
    .el-radio__label{
          line-height: 40px;
    }
    .is-bordered{
        .el-radio__label{
            line-height: unset;
      }
    }
   
}
</style>
