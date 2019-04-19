<template>
  <div :style="model.style" class="av-form-select">
    <label
      :class="model.data.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
      :style="{width:model.data.labelWitdh}"
    >{{model.data.label}}</label>
    <div
      class="form-select-ctn"
      :style="model.data.titleMode ==='row'?{}:{marginLeft:model.data.labelWitdh}"
    >
      <el-select
        v-model="model.data.value"
        :clearable="model.data.clearable"
        :placeholder="model.data.placeholder"
        :filterable="model.data.filterable"
      >
        <el-option
          v-for="item in model.data.options"
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
  name: "av-form-select",
  props: {
    model: Object
  },
  data() {
    return {};
  },
  mounted() {}
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
.form-select-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>
