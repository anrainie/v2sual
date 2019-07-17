<template>
  <div  class="v2-form-ctt v2-form-select" :class="widgetClass" :style="model.commonStyle">
    <label
      :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
      :style="labelStyle"
    >
    <span class="must-input" v-if="model.isRequired">*</span>
    {{model.label}}</label>
    <div
      class="form-select-ctn"
      :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}"
    >
      <el-select
        ref="_op_formSelect_select"
        v-model="model.value"
        :clearable="model.clearable"
        :placeholder="model.placeholder"
        :filterable="model.filterable"
         :disabled="model.disabled"
      >
        <el-option
          v-for="item in (model.dataType==='def'?model.optionConfig: model.options)"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>


export default {
  name: "v2-form-select",

  data() {
    return {};
  },
  mounted() {
    
  },
  computed:{
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
.form-select-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
.el-select {
    width: 100% !important;
}

</style>
