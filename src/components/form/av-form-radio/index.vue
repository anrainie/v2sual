<template>
  <div :style="model.style" ref="wrap" :class="wrapClass" class="av-form-radio">
    <el-radio-group v-model="model.data.value">
      <el-radio
        :disabled="model.data.disabled"
        :border="model.data.border"
        :label="model.data.label">
        {{model.data.text}}
      </el-radio>
    </el-radio-group>
  </div>
</template>
<script>
  import {widget, composite} from '../../../assets/js/v2-view.js'
  import {edit} from '../../../assets/js/edit.js'

  export default {
    name: 'av-form-radio',
    mixins: [widget, edit],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {},
  }
</script>
