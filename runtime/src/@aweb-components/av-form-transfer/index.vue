<template>
  <div :style="model.style" class="av-form-transfer">
    <label
      :class="model.data.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
      :style="{width:model.data.labelWitdh}"
    >{{model.data.label}}</label>
    <div
      class="form-transfer-ctn"
      :style="model.data.titleMode ==='row'?{}:{marginLeft:model.data.labelWitdh}"
    >
      <el-transfer
        v-model="model.data.value"
        :filterable="Boolean(model.data.filterable)"
        :titles="[model.data.titleLeft, model.data.titleRight]"
        :button-texts="[model.data.btnLeft,model.data.btnRight ]"
        @change="handleChange"
        :data="model.data.options"
      ></el-transfer>
    </div>
  </div>
</template>

<script>
export default {
  name: "av-form-transfer",
  props: {
    model: Object
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {
    handleChange(e) {}
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
.form-transfer-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>
