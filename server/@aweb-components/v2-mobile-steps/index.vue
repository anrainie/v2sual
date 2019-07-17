<template>

    <van-steps 
    :class="widgetClass"  :style="model.commonStyle" 
    :active="parseInt(model.active)"
    :direction="model.direction"
    :activeColor="model.activeColor"
    :activeIcon="model.activeIcon"
    :inactiveIcon="model.inactiveIcon"
    >
      <van-step v-for="(item,index) in model.list" :key="index">{{item.value}}</van-step>
    </van-steps>

</template>

<script>
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

export default {
  name: "v2-mobile-steps",

  mounted() {},
  data() {
    return {};
  },
  methods: {
    
  },
  computed: {}
};
</script>

<style>

</style>
