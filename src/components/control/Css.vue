<template>
<div>
      <div class="aui-config-tilte">样式配置</div>
    <div class="aui-config-content">
      <!-- <base-config
        v-if="showOption"
        class="aui-config-ctn"
        :arraySelector="arraySelector"
        :objSelector="objSelector"
        :array="arr"
        :obj="obj"
      ></base-config> -->
    </div>
</div>

</template>

<script>
export default {
    data() {
    return {

      //model selector
      objSelector: "objectSlector",
      arraySelector: "array",

      //model display control
      spinShow: true,
      showOption: false
     };
    },
    mounted: function() {
    this.showOption = true;
    },
   computed: {
    arr() {
      return this.model.css;
    },
    obj() {
      return this.model.data;
    },
    wid() {
      // let st = this.$store.state.UIData.selectTarget;

      // if (!st || st.length != 1) {
      //   return null;
      // }
      return this.$store.getters.firstSelection;
    },
    model() {
      return (
        this.$store.getters.model(this.$store.getters.firstSelection) || {}
      );
    }
    },
    components:{
        
    }
}
</script>

<style>

</style>
