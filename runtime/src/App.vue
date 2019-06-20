<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//注册component
//加载mixins widget
//加载store store:...   this.$store=...
//初始化store created -> this.$store.commit('init',{})
import Vue from "vue";
import components from "@/@aweb-components/aweb.components.js";
import { widget } from "@/utils/v2-view";
import events from "@/utils/events";
import inputField from "@/utils/inputField";
import container from "@/components/container.vue";
import empty from "@/components/empty.vue";
import loop from '@/components/Loop.vue';

//注册组件
Object.keys(components).map(c => {
  Vue.component(c, { mixins: [widget, events, inputField], ...components[c] });
});

Vue.component("v2container", container);
Vue.component("v2empty", empty);
Vue.component("v2loop", loop);

export default {
  name: "app"
};
</script>

<style lang="less">
@import "./less/aweb.less";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  width: 0.5em;
  height: 0.5em;
  background-color: transparent;
  border-radius: 0;
}
::-webkit-scrollbar-thumb {
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.35);
}
</style>
