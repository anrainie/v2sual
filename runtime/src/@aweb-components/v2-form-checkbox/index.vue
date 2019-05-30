<template>
  <div :style="flexStyle" class="v2-form-checkbox" :class="model.layoutClass" >
    <label
      :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
      :style="labelStyle"
    >{{model.label}}</label>
    <div
      class="form-checkbox-ctn"
      :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}"
    >
      <el-checkbox-group v-model="checkList">
        <el-checkbox  
        v-for="(item,index) in model.options" 
        :label="item.value" 
        :key="index" 
        :disabled="item.disabled"
        ></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>

export default {
  name: "v2-form-checkbox",

  data() {
    return {
      options: ["备选项"],
      checkList: []
    };
  },
  methods: {
    $Enter() {
      this.model.checked = !this.model.checked;
      return false;
    },
  },
  computed: {
    flexStyle() {
      let self = this;
      if (self.model.titleMode === "col") {
        return $.extend({}, self.model.style.position, { display: "flex" });
      } else if (self.model.titleMode === "row") {
        return self.model.style;
      }
    },
    checkboxStyle(){

    },
  },
  mounted() {
    console.log('mo',this.model)
  }
};
</script>

<style lang="less">
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
.form-checkbox-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>

