<template>
  <div :style="model.style" :class="wrapClass" class="av-form-switch">
    <div>{{model.data.title}}</div>
    <el-switch ref="switch"
               v-model="model.data.value"
               :active-text="model.data.activeText"
               :inactive-text="model.data.inactiveText"
    ></el-switch>
  </div>
</template>
<script>
  import {widget, composite} from '../../../assets/js/v2-view.js'
  import {edit} from '../../../assets/js/edit.js'
  import inputField from '../../../assets/js/inputField'

  export default {
    name: 'av-form-switch',
    mixins: [widget, inputField, edit],
    methods: {
      $Enter () {
        this.model.data.value = !this.model.data.value
        return false
      }
    },
    mounted () {
      $('.el-switch__core', this.$refs.switch.$el).attr('contenteditable', true)
    }
  }
</script>
