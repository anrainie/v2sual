<template>
  <div :style="model.style" ref="wrap" :class="wrapClass" class="av-form-slider">
    <el-slider
      v-model="model.data.value"
      :show-tooltip="model.data.tooltip"
      :disabled="model.data.disabled"
      :step="parseInt(model.data.step)"
      :show-stops="model.data.stops"
      :show-input="model.data.input"
      change="change"
    >

    </el-slider>
  </div>
</template>
<script>
  import {widget, composite} from '../../../assets/js/v2-view.js'
  import {edit} from '../../../assets/js/edit.js'

  export default {
    name: 'av-form-slider',
    mixins: [widget, edit],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      change(){

      }
    },
  }
</script>
