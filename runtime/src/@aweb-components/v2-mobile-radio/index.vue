<template>
  <div class="v2-form-ctt v2-mobile-radio" :class="model.layoutClass">
      <van-radio-group v-model="model.value">
      <van-radio 
      v-for="(item,index) in model.list" 
      :key="index" 
      :name="item.name"
      :icon-size="item.iconSize"
      :disabled="item.disabled"
      :label-position="item.labelPosition"
      :checked-color="item.checkedColor"
      >{{item.text}}</van-radio>
    </van-radio-group>
  </div>
</template>

<script>
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

export default {
  name: "v2-mobile-radio",

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
