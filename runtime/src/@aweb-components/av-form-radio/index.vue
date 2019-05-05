<template>
  <div :style="model.style" class="av-form-radio">
    <label
      :class="model.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
      :style="{width:model.labelWitdh}"
    >{{model.label}}</label>
    <div
      class="form-radio-ctn"
      :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}"
    >
      <el-radio-group v-model="model.value">
        <el-radio
          v-for="(item,index) in model.options"
          :key="'radio-'+index"
          :disabled="item.disabled"
          :border="item.border"
          :label="item.label"
        >{{item.text}}</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "av-form-radio",
  props: {
    model: Object
  },
  mounted() {},
  data() {
    return {
      options: [
        {
          disabled: false,
          border: false,
          label: 3,
          text: "选项3"
        },
        {
          disabled: true,
          border: false,
          label: 2,
          text: "选项2"
        },
        {
          disabled: false,
          border: true,
          label: 1,
          text: "选项1"
        }
      ],
      value:""
    };
  },
  methods: {
    
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
.form-radio-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>
