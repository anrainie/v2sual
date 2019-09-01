<template>
  <div ref="wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["activeindex"],
  watch: {
    'activeindex'() {
      $(window).trigger("resize");
    }
  }
};
</script>
