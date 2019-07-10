<template>
  <keep-alive v-if="keepAlive">
    <component
      :is="AsyncComponent"
      :style="model.style && model.style.wrapStyle"
      v-bind="$attrs"
      v-on="$listeners"/>
  </keep-alive>
  <component
    v-else
    :is="AsyncComponent"
    :style="model.style && model.style.wrapStyle"
    v-bind="$attrs"
    v-on="$listeners"/>
</template>

<script>
import factory from './factory.js';

/**
 * 动态文件加载器
 */
export default {
  inheritAttrs: false,
  props: {
    // 是否保持缓存
    keepAlive: {
      type: Boolean,
      required: false,
      default: true
    },
    // 延迟加载时间
    delay: {
      type: Number,
      default: 20
    },
    // 超时警告时间
    timeout: {
      type: Number,
      default: 2000
    }
    
  },
  beforeCreate(){
     console.log('加载子页面')
  },
  data () {
    return {
      AsyncComponent: factory(this.model.page, this.delay, this.timeout)
    }
  },
  watch: {
    page () {
      this.AsyncComponent = factory(this.model.page, this.delay, this.timeout);
   
    }
  },
  methods: {
    reload (page = this.model.page) {
      this.AsyncComponent = factory(page, this.delay, this.timeout);
    }
  },
  destroyed(){
   
  }
}
</script>