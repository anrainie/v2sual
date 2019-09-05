<template>
  <!-- :style="`display:${model.display};width:${model.width};height:${model.height};margin:${model.margin};padding:${model.padding};background:${model.background};border:${model.border};border-radius:${model.borderRadius};boxShadow:${model.boxShadow};box-sizing:border-box;`" -->
  <div ref="wrap" class="V2Container v2-order-ctn" :style="ctnStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    ctnStyle() {
    console.log('自由布局',this.model.borderRadius);
      return {
        // "display": this.model.display,
   
        ...this.model.commonStyle,
        "width": this.model.width,
        "height": this.model.height,
        "margin": this.model.margin,
        "padding": this.model.padding,
        "background": this.model.background,
        "border": this.model.border,
        "border-radius": this.model.borderRadius,
        "boxShadow": this.model.boxShadow,
        "box-sizing": "border-box"
      }
    }
  },
};
</script>
