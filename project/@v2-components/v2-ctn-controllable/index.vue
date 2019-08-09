<template>
  <div
    :class="`${model.thisClasss}`"
    ref="wrap"
    :style="`display:${model.display};width:${model.width};height:${model.height};margin:${model.margin};padding:${model.padding};background:${model.background};border:${model.border};border:${model.border};boxShadow:${model.boxShadow};box-sizing:border-box;`">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
