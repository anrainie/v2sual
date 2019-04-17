<template>
  <div :style="model.style" ref="wrap" :class="wrapClass" class="v2Radio">
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
    name: 'v2Radio',
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
