<template>
  <div @click.stop="$emit('selected')">
    <slot></slot>
  </div>
</template>
<script>
import aContainer from "./aContainer.vue";
import Vue from "vue";

Vue.component("aContainer", aContainer);

export default {};
</script>
<style>
.editorContainer {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}
</style>