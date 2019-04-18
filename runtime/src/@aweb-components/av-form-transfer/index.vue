<template>
  <div :style="model.style"  class="av-form-transfer">
    <el-transfer
      v-model="model.data.value"
      :filterable="Boolean(model.data.filterable)"
      :titles="[model.data.titleLeft, model.data.titleRight]"
      :button-texts="[model.data.btnLeft,model.data.btnRight ]"
      @change="handleChange"
      :data="model.data.options">

    </el-transfer>
  </div>
</template>

<script>

  export default {
    name: 'av-form-transfer',
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
      handleChange(e){
        console.log(e)
      }
    },
  }
</script>
