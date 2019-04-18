<template>
  <div :style="model.style"  class="av-form-slider">
     <div v-if="model.data.titleMode==='row'">
        <label class="av-form-cascader-label">{{model.data.label}}</label>
    </div>
        <label  v-if="model.data.titleMode==='col'" class="av-form-cascader-label">{{model.data.label}}</label>
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
  export default {
    name: 'av-form-slider',
    props: {
      model: Object
    },
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
