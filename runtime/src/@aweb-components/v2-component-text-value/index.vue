<template>
  <div :class="model.layoutClass">
      <div :style="model.style.ctn" class="v2-text-value-item">

        <i :style="model.style.value" v-if="model.type==='icon'" :class="model.value"></i>
        <span :style="model.style.value" v-else>{{model.value}}</span>
        <p :style="model.style.title">{{model.title}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "v2-component-text-value",

  data() {
    return {
 
    };
  },
  watch: {
 
  }
};
</script>
<style lang="scss">
.v2-text-value-item{
  text-align: center;
  background-color:#eee;
  >i{
  display: inline-block;
  vertical-align: middle;
  }
}

</style>
