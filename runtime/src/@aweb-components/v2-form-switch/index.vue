<template>
  <div :style="model.style" class="v2-form-switch" :class="model.layoutClass">
     <div v-if="model.titleMode==='row'">
        <label class="v2-form-switch-label">{{model.label}}</label>
    </div>
        <label  v-if="model.titleMode==='col'" class="v2-form-switch-label">{{model.label}}</label>
    <el-switch ref="switch"
               v-model="model.value"
               :active-text="model.activeText"
               :inactive-text="model.inactiveText"
               :disabled ="model.disabled"
    ></el-switch>
  </div>
</template>
<script>

  export default {
    name: 'v2-form-switch',
 
    methods: {
      $Enter () {
        this.model.value = !this.model.value
        return false
      }
    },
    mounted () {
      $('.el-switch__core', this.$refs.switch.$el).attr('contenteditable', true)
    },
    computed:{
    }
  }
</script>
