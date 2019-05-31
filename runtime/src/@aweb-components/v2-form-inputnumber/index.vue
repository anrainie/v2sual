<template>
  <div :style="model.style" class="v2-form-inputNumber" :class="model.layoutClass">
      <label
        :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
        :style="labelStyle"
      >
      <span class="must-input" v-if="model.isRequired">*</span>
      {{model.label}}</label>
       <div class="form-inputNumber-ctn" :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}">
    <el-input-number
      v-model="model.value"
      ref="__op_el-input-number_1"
      events="change,click"
      @change="handleChange"
      :min="parseFloat(model.min)"
      :max="parseFloat(model.max)"
      :step="parseFloat(model.step)"
      :precision="parseInt(model.precision)||0"
      :disabled="model.disabled"
    >
    </el-input-number>
       </div>
  </div>
</template>
<script>

  export default {
    name: 'v2-form-inputnumber',

    data () {
      return {}
    },
    mounted () {
    },
    methods: {
      handleChange () {
      }
    },
    computed:{
    }

  }
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
.form-inputNumber-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>

