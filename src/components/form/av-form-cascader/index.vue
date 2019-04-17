<template>
  <div :style="model.style" ref="wrap" :class="wrapClass" class="av-form-cascader">
    <el-cascader
      :options="model.data.options"
      :trigger="model.data.trigger"
      v-model="model.data.value"
      @change="handleChange"
      :placeholder="model.data.placeholder"
      :filterable="model.data.filterable"
    >
    </el-cascader>
  </div>
</template>
<script>
  import {widget, composite} from '../../../assets/js/v2-view.js'
  import {edit} from '../../../assets/js/edit.js'

  export default {
    name: 'av-form-cascader',
    mixins: [widget, edit],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      handleChange(){

      }
    },
  }
</script>
