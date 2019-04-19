<template>
  <div :style="flexStyle" class="av-form-input">
     <label
        :class="model.data.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
        :style="{width:model.data.labelWitdh}"
      >{{model.data.label}}</label>
     <div class="form-input-ctn" :style="model.data.titleMode ==='row'?{}:{marginLeft:model.data.labelWitdh}">
    <el-input
      v-model="model.data.value"
      :placeholder="model.data.placeholder"
    ></el-input>
     </div>
  </div>
</template>

<script>
export default {
  name: "av-form-input",
  props: {
    model: Object
  },
  mounted() {},
  computed: {},
  methods: {
    flexStyle() {
      let self = this;
      if (self.model.data.titleMode === "col") {
        return $.extend({}, self.model.data.style, { display: "flex" });
      } else if (self.model.data.titleMode === "row") {
        return self.model.data.style;
      }
    },
    $ArrowRight() {
      return true;
    },
    $ArrowLeft() {
      return true;
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
.form-input-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>
