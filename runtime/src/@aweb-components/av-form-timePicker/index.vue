<template>
  <div :style="model.style" class="av-form-timePicker">
     <div v-if="model.data.titleMode==='row'">
        <label class="av-form-cascader-label">{{model.data.label}}</label>
    </div>
        <label  v-if="model.data.titleMode==='col'" class="av-form-cascader-label">{{model.data.label}}</label>
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

  export default {
    name: 'av-form-timePicker',
    props: {
      model: Object
    },
    mounted () {
    },
    data () {
      return {}
    },
    methods: {},
  }
</script>
