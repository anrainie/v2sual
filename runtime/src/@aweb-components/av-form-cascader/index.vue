<template>
  <div :style="model.data.style" class="av-form-cascader">
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
  export default {
    name: 'av-form-cascader',
    props: {
      model: Object
    },
    mounted () {
    },
    data () {
      return {}
    },
    methods: {
      handleChange () {

      }
    },
  }
</script>
