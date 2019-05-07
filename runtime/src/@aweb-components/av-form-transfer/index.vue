<template>
  <div :style="model.style" class="av-form-transfer">
    <label
      :class="model.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
      :style="{width:model.labelWitdh}"
    >{{model.label}}</label>
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
  name: "av-form-transfer",

  mounted() {},
  data() {
    return {};
  },
  methods: {
    handleChange(e) {}
  },
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
.form-transfer-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>
