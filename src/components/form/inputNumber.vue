<template>
  <div :style="model.style" ref="wrap" :class="wrapClass" class="v2InputNumber">
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
  import {widget, composite} from '../../assets/js/v2-view.js'
  import {edit} from '../../assets/js/edit.js'

  export default {
    name: 'v2InputNumber',
    mixins: [widget, edit],
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
