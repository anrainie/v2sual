<template>
  <div class="v2-form-ctt v2-mobile-input" :class="model.layoutClass">
    <van-cell-group>
      <van-field
        v-model="model.value"
        :placeholder="model.placeholder"
        :label="model.label"
        :disabled="model.disabled"
        :required="model.required"
        :readonly="model.readonly"
      >
      <van-button 
      v-if="model.button"
      slot="button" 
      :size="model.buttonSize" 
      :type="model.buttonType"
      >{{model.buttonText}}</van-button>
      </van-field>
      </van-cell-group>
  </div>
</template>

<script>
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

export default {
  name: "v2-mobile-input",

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
