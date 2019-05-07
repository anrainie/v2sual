<template>
  <div :style="model.style" class="av-form-select">
    <label
      :class="model.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
      :style="{width:model.labelWitdh}"
    >{{model.label}}</label>
    <div
      class="form-select-ctn"
      :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}"
    >
      <el-select
        v-model="model.value"
        :clearable="model.clearable"
        :placeholder="model.placeholder"
        :filterable="model.filterable"
      >
        <el-option
          v-for="item in model.options"
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

  data() {
    return {};
  },
  mounted() {},
  computed:{
      model() {
        return (
          this.$store.getters.model(this.wid) || {}
        );
      }
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
.form-select-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>
