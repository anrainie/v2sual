<template>
  <div :style="model.style" class="av-form-checkbox">
    <label>{{model.data.label}}</label>
    <el-checkbox-group v-model="model.data.checkList">
      <el-checkbox v-for="item in model.data.options" :label="item" :key="item">{{item}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
  export default {
    name: 'av-form-checkbox',
    props: {
      model: Object
    },
    data () {
      return {
        checkList: []
      }
    },
    methods: {
      $Enter () {
        this.model.data.checked = !this.model.data.checked
        return false
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less">
  .checkBox {
    display: flex;

    > label {
      padding: 0 10px;
    }
  }


</style>

