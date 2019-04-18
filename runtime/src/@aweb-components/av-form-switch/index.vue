<template>
  <div :style="model.data.style" class="av-form-switch">
     <div v-if="model.data.titleMode==='row'">
        <label class="av-form-switch-label">{{model.data.label}}</label>
    </div>
        <label  v-if="model.data.titleMode==='col'" class="av-form-switch-label">{{model.data.label}}</label>
    <el-switch ref="switch"
               v-model="model.data.value"
               :active-text="model.data.activeText"
               :inactive-text="model.data.inactiveText"
    ></el-switch>
  </div>
</template>
<script>

  export default {
    name: 'av-form-switch',
    props: {
      model: Object
    },
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
