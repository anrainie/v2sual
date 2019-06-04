<template>
  <div :style="model.style" class="v2-form-radio" :class="model.layoutClass">
    <label
      :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
      :style="labelStyle"
    >
    <span class="must-input" v-if="model.isRequired">*</span>
    {{model.label}}</label>
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
  name: "v2-form-radio",

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
    
  },
  computed:{

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
.form-radio-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
    .el-radio__label{
          line-height: 40px;
    }
}
</style>
