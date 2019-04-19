<template>
  <div :style="model.style" class="av-form-inputNumber">
     <div v-if="model.data.titleMode==='row'">
        <label class="av-form-inputNumber-label">{{model.data.label}}</label>
    </div>
        <label  v-if="model.data.titleMode==='col'" class="av-form-inputNumber-label">{{model.data.label}}</label>
    <el-input-number
      v-model="model.data.value"
      @change="handleChange"
      :min="model.data.min"
      :max="model.data.max"
      :step="model.data.step"
      :precision="parseInt(model.data.precision||0)"
      :disabled="model.data.disabled"
      label="描述文字"
    >
    </el-input-number>
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
