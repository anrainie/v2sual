<template>
  <div :style="flexStyle" class="av-form-checkbox">
     <div v-if="model.data.titleMode==='row'">
        <label class="av-form-checkbox-label">{{model.data.label}}</label>
    </div>
        <label  v-if="model.data.titleMode==='col'" class="av-form-checkbox-label">{{model.data.label}}</label>

    <el-checkbox-group v-model="model.data.checkList">
      <el-checkbox v-for="item in options" :label="item" :key="item">{{item}}</el-checkbox>
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
        options:["备选项"],
        checkList: []
      }
    },
    methods: {
      
      $Enter () {
        this.model.data.checked = !this.model.data.checked
        return false
      }
    },
    computed:{
      flexStyle(){
        let self = this;
        if(self.model.data.titleMode==='col'){
          return $.extend({}, self.model.data.style, {display:"flex"})
        }else if(self.model.data.titleMode==='row'){
          return self.model.data.style;
        }
      },
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

