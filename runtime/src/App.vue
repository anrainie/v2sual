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
import Vue from 'vue';
import components from "@/@aweb-components/aweb.components.js";

Object.keys(components).map(c => {
  // console.log('cd',components[c].name);
  Vue.component(c, { mixins: /*avComponentMixin, ...*/components[c] });
});

export default {
  name: "app"
};
</script>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
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
