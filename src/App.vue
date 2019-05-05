<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import 'jquery-ui';
Vue.use(Vuex)

export default {
  name: 'App',
}
</script>

<style>
@import './assets/style/common.css';
@import './assets/style/edit.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
body{
  margin:0;
}

</style>
