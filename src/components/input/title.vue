<template>
  <div class="title">
    <h2>{{model.data}}</h2>
  </div>
</template>

<script>
  import {widget, composite} from '../../assets/js/v2-view.js'
  import {edit} from '../../assets/js/edit.js'

  export default {
    name: 'v2Title',
    mixins: [widget, edit],
    mounted () {

    },
  }
</script>

<style scoped>
  .title h1{

  }
</style>
