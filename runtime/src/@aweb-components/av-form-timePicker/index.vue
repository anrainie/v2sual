<template>
  <div :style="model.style" class="av-form-timePicker">
    <label
      :class="model.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
      :style="labelStyle"
    >{{model.label}}</label>
    <div class="form-timePicker-ctn" :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}">
      <el-time-select
        v-if="model.type==='select'"
        v-model="model.value"
        :picker-options="model.options"
        :placeholder="model.placeholder"
        :arrow-control="model.arrow"
      ></el-time-select>

      <el-time-picker
        v-if="model.type==='picker'"
        v-model="model.value"
        :picker-options="model.options"
        :placeholder="model.placeholder"
        :is-range="model.range"
        :range-separator="model.rangeSeparator"
        :start-placeholder="model.startPlaceholder"
        :end-placeholder="model.endPlaceholder"
      ></el-time-picker>
    </div>
  </div>
</template>
<script>


export default {
  name: "av-form-timePicker",

  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed:{
  }
};
</script>
<style>
.form-label-col {
  float: left;
}
.av-form-label {
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
}
</style>
