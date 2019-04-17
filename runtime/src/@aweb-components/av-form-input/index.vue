<template>
  <div :style="model.style"  style="display: flex" class="av-form-input">
    <label class="labelInput-label">{{model.data.label}}:</label>
    <el-input
      v-model="model.data.value"
      style="flex:1"
      :placeholder="model.data.placeholder"
      @focus="focusEven"
    ></el-input>
  </div>
</template>

<script>

export default {
  name: "av-form-input",
  props: {
    model: Object
  },
  mounted() {
  },
  computed: {
    focusEven() {

    }
  },
  methods: {
    $ArrowRight() {
      return true;
    },
    $ArrowLeft() {
      return true;
    }
  }
};
</script>

<style>
.labelInput-label {
  padding: 0 10px;
  line-height: 40px;
}
</style>
