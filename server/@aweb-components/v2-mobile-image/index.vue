<template>
 
      <van-image 
      :class="widgetClass" 
      :style="model.commonStyle"
      :width="model.width" :height="model.height" :src="model.src" :fit="model.fit">
        <template v-slot:error>加载失败</template>
        <template v-slot:loading>
          <van-loading type="spinner" size="20"/>
        </template>
      </van-image>

</template>

<script>
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

export default {
  name: "v2-mobile-image",

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
