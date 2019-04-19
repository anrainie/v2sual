<template>
  <div :style="flexStyle" class="av-form-checkbox">
    <label
      :class="model.data.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
      :style="{width:model.data.labelWitdh}"
    >{{model.data.label}}</label>
    <div
      class="form-checkbox-ctn"
      :style="model.data.titleMode ==='row'?{}:{marginLeft:model.data.labelWitdh}"
    >
      <el-checkbox-group v-model="checkList">
        <el-checkbox v-for="(item,index) in model.data.options" :label="item.value" :key="index" @chang="hi"></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "av-form-checkbox",
  props: {
    model: Object
  },
  data() {
    return {
      options: ["备选项"],
      checkList: []
    };
  },
  methods: {
    $Enter() {
      this.model.data.checked = !this.model.data.checked;
      return false;
    },
    hi(){
      console.log(this.data.model.options)
    }
  },
  computed: {
    flexStyle() {
      let self = this;
      if (self.model.data.titleMode === "col") {
        return $.extend({}, self.model.data.style, { display: "flex" });
      } else if (self.model.data.titleMode === "row") {
        return self.model.data.style;
      }
    }
  },
  mounted() {}
};
</script>

<style lang="less">
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
.form-checkbox-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>

