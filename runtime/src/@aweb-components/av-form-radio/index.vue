<template>
  <div :style="model.data.style" class="av-form-radio">
    <label class="av-form-radio-label">{{model.data.label}}:</label>
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

  export default {
    name: 'av-form-radio',
    props: {
      model: Object
    },
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {},
  }
</script>
