<template>
  <div :style="model.style" class="av-form-switch">
     <div v-if="model.titleMode==='row'">
        <label class="av-form-switch-label">{{model.label}}</label>
    </div>
        <label  v-if="model.titleMode==='col'" class="av-form-switch-label">{{model.label}}</label>
    <el-switch ref="switch"
               v-model="model.value"
               :active-text="model.activeText"
               :inactive-text="model.inactiveText"
    ></el-switch>
  </div>
</template>
<script>

  export default {
    name: 'av-form-switch',
 
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

      model() {
        return (
          this.$store.getters.model(this.wid) || {}
        );
      }
    }
  }
</script>
