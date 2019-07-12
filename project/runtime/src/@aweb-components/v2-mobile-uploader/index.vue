<template>
  <div class="v2-form-ctt v2-mobile-uploader" :class="model.layoutClass">
    <van-uploader 
     v-model="fileList" 
     :max-count="parseInt(model.maxCount)"
     multiple />
  </div>
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
