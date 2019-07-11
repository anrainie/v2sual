<template>
  <div class="v2-form-ctt v2-form-switch" :class="model.layoutClass">
    <label
      :class="model.titleMode ==='row'?'v2-form-label':'v2-form-label form-label-col'"
      :style="labelStyle"
    >
    <span class="must-input" v-if="model.isRequired">*</span>
    {{model.label}}</label>
    <div
      :style="model.titleMode ==='row'?{}:{marginLeft:model.labelWitdh}"
    >
    <el-switch ref="_op_formSwitch_switch"
               v-model="model.value"
               :active-text="model.activeText"
               :inactive-text="model.inactiveText"
               :disabled ="model.disabled"
    ></el-switch>
    </div>
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
      $('.el-switch__core', this.$refs._op_formSwitch_switch.$el).attr('contenteditable', true)
    },
    computed:{
    }
  }
</script>
<style lang="scss" scoped>
.el-switch{
      line-height: 40px;
      height: 40px;
}
</style>
