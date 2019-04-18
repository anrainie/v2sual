<template>
  <div :style="model.style" class="av-form-select">
     <div v-if="model.data.titleMode==='row'">
        <label class="av-form-select-label">{{model.data.label}}</label>
    </div>
        <label  v-if="model.data.titleMode==='col'" class="av-form-select-label">{{model.data.label}}</label>
    <el-select v-model="model.data.value" :placeholder="model.data.placeholder">
      <el-option v-for="item in model.data.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "av-form-select",
  props: {
    model: Object
  },
  data() {
    return {
    };
  },
  mounted() {}
};
</script>

<style>
.select {
  display: flex;
}
.select .el-select {
  padding-left: 10px;
}
.select-label {
  padding: 0 10px;
}
</style>
