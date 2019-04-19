<template>
  <div :style="model.style" class="av-form-inputNumber">
      <label
        :class="model.data.titleMode ==='row'?'av-form-label':'av-form-label form-label-col'"
        :style="{width:model.data.labelWitdh}"
      >{{model.data.label}}</label>
       <div class="form-inputNumber-ctn" :style="model.data.titleMode ==='row'?{}:{marginLeft:model.data.labelWitdh}">
    <el-input-number
      v-model="model.data.value"
      @change="handleChange"
      :min="parseFloat(model.data.min)"
      :max="parseFloat(model.data.max)"
      :step="parseFloat(model.data.step)"
      :precision="parseInt(model.data.precision)||0"
      :disabled="model.data.disabled"
    >
    </el-input-number>
       </div>
  </div>
</template>
<script>

  export default {
    name: 'av-form-inputNumber',
    props: {
      model: Object
    },
    data () {
      return {}
    },
    mounted () {
    },
    methods: {
      handleChange () {
      }
    },

  }
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
.form-inputNumber-ctn {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
</style>

