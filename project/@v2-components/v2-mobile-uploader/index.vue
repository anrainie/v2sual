<template>
 
    <van-uploader 
     :class="widgetClass"  :style="model.commonStyle" 
     v-model="fileList" 
     :max-count="parseInt(model.maxCount)"
     multiple />
 
</template>

<script>
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

export default {
  name: "v2-mobile-uploader",

  mounted() {},
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    
  },
  computed: {}
};
</script>

<style>

</style>
