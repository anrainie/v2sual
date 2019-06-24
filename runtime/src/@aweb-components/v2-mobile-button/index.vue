<template>
  <div class="v2-form-ctt v2-mobile-button" :class="model.layoutClass">
      <van-button 
     :type="model.type"
     :disabled="model.disabled"
     :loading ="model.loading "
     :round ="model.round "
     :icon ="model.icon "
     :size ="model.size "
     >{{model.text}}</van-button>
  </div>
</template>

<script>
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

export default {
  name: "v2-mobile-button",

  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style>
</style>
