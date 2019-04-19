<template>
  <div :style="model.style" class="av-form-timePicker">
    <label
      :class="model.data.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
      :style="{width:model.data.labelWitdh}"
    >{{model.data.label}}</label>
    <div class="form-timePicker-ctn" :style="model.data.titleMode ==='row'?{}:{marginLeft:model.data.labelWitdh}">
      <el-time-select
        v-if="model.data.type==='select'"
        v-model="model.data.value"
        :picker-options="model.data.options"
        :placeholder="model.data.placeholder"
        :arrow-control="model.data.arrow"
      ></el-time-select>

      <el-time-picker
        v-if="model.data.type==='picker'"
        v-model="model.data.value"
        :picker-options="model.data.options"
        :placeholder="model.data.placeholder"
        :is-range="model.data.range"
        :range-separator="model.data.rangeSeparator"
        :start-placeholder="model.data.startPlaceholder"
        :end-placeholder="model.data.endPlaceholder"
      ></el-time-picker>
    </div>
  </div>
</template>
<script>
export default {
  name: "av-form-timePicker",
  props: {
    model: Object
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {}
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
