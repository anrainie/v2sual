<template>
  <div :style="model.style" ref="wrap" :class="wrapClass" class="v2Transfer">
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
  import {widget, composite} from '../../../assets/js/v2-view.js'
  import {edit} from '../../../assets/js/edit.js'

  export default {
    name: 'v2Transfer',
    mixins: [widget, edit],
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
