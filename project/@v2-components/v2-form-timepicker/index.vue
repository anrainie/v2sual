<template>
  <div class="v2-form-ctt v2-form-timePicker" :class="widgetClass" :style="model.commonStyle">
    <label
      :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
      :style="labelStyle"
    >
    <span class="must-input" v-if="model.isRequired">*</span>
    {{model.label}}</label>

    <div class="form-timePicker-ctn" :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}">
      <el-time-select
       ref="_op_formTimePicker_picker"
        v-if="model.type==='select'"
        v-model="model.value"
        :picker-options="model.options"
        :placeholder="model.placeholder"
        :arrow-control="model.arrow"
        :disabled="model.disabled"
        :size="model.theme && model.theme.size"
      ></el-time-select>

      <el-time-picker
        ref="_op_formTimePicker_picker"
        v-if="model.type==='picker'"
        v-model="model.value"
        :picker-options="model.options"
        :placeholder="model.placeholder"
        :is-range="model.range"
        :disabled="model.disabled"
        :range-separator="model.rangeSeparator"
        :start-placeholder="model.startPlaceholder"
        :end-placeholder="model.endPlaceholder"
        :size="model.theme && model.theme.size"
      ></el-time-picker>
    </div>
  </div>
</template>
<script>


export default {
  name: "v2-form-timepicker",

  mounted() {},
  data() {
    return {};
  },
  methods: {},
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
.form-timePicker-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
  .el-date-editor.el-input, 
  .el-date-editor.el-input__inner{
    width: 100%;
  }
}
</style>
