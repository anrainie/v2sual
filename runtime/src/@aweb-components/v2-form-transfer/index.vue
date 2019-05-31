<template>
  <div :style="model.style" class="v2-form-transfer" :class="model.layoutClass">
    <label
      :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
      :style="labelStyle"
    >
     <span class="must-input" v-if="model.isRequired">*</span>
    {{model.label}}</label>
    <div
      class="form-transfer-ctn"
      :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}"
    >
      <el-transfer
        v-model="model.value"
        :filterable="Boolean(model.filterable)"
        :titles="[model.titleLeft, model.titleRight]"
        :button-texts="[model.btnLeft,model.btnRight ]"
        @change="handleChange"
        :data="model.options"
      ></el-transfer>
    </div>
  </div>
</template>

<script>
export default {
  name: "v2-form-transfer",

  mounted() {},
  data() {
    return {};
  },
  methods: {
    handleChange(e) {}
  },
  computed: {}
};
</script>

<style>
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
.form-transfer-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>
