<template>
 <div data-widget-type="aweb4Switch" class="aweb-switch" >
    <div class="aweb-switch-list" :style="switchListStyle" :class={'disabled':disabled}>
        <div class="switch-title" :class="{'no-title':!title}">
            <i v-if="icon" :class="icon" :style="iconStyle"></i>
            <img v-else-if="img" :src="img" :style="imgStyle"/>

            <span v-if="title" v-text="title" :style="titleStyle"></span>
        </div>
        <label class="aweb-m-switch" :style="switchStyle" >
            <input class="aweb-m-switch-input" :disabled="disabled" type="checkbox"  v-model="currentValue">
            <span class="aweb-m-switch-core" data-role="switchCore"></span>
        </label>  
    </div>
</div>
</template>

<script>
export default {
  name: "custom.test",
  props: {
    msg: String
  },
  data() {
    return {
      titleStyle: {},
      imgStyle: {},
      iconStyle: {},
      switchListStyle: {},
      switchStyle: {},
      switchNotChecked: {},
      switchChecked: {},
      swtichInnerStyle: {},
      disabled: false,
      value: true,
      title: "",
      icon: "",
      img: "",
      value: true
    };
  },
  mounted() {
    this.$nextTick(function() {
      
    });
  },
  computed: {
    currentValue: {
      get: function() {
        return this.value;
      },
      set: function(val) {
        this.value = val;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
