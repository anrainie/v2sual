<template>
  <div :style="model.style" class="av-form-inputNumber">
    <el-input-number
      v-model="model.data.value"
      @change="handleChange"
      :min="model.data.min"
      :max="model.data.max"
      :step="model.data.step"
      :precision="parseInt(model.data.precision)"
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
