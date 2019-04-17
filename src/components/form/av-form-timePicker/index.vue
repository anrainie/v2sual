<template>
  <div :style="model.style" ref="wrap" :class="wrapClass" class="av-form-timePicker">
    <el-time-select
      v-if="model.data.type==='select'"
      v-model="model.data.value"
      :picker-options="model.data.options"
      :placeholder="model.data.placeholder"
      :arrow-control="model.data.arrow"
    >
    </el-time-select>

    <el-time-picker
      v-if="model.data.type==='picker'"
      v-model="model.data.value"
      :picker-options="model.data.options"
      :placeholder="model.data.placeholder"
      :is-range="model.data.range"
      :range-separator="model.data.rangeSeparator"
      :start-placeholder="model.data.startPlaceholder"
      :end-placeholder="model.data.endPlaceholder">
    </el-time-picker>
  </div>
</template>
<script>
  import {widget, composite} from '../../../assets/js/v2-view.js'
  import {edit} from '../../../assets/js/edit.js'

  export default {
    name: 'av-form-timePicker',
    mixins: [widget, edit],
    mounted () {
    },
    data () {
      return {}
    },
    methods: {},
  }
</script>
