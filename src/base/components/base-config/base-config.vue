<template>
  <div class="aui-base-config">
    <base-component
      :array="array"
      v-for="(item, index) in array"
      :key="item.name"
      :item="item"
      :obj="obj"
      
    ></base-component>
  </div>
</template>

<script>
import BaseComponent from "./base-component.vue";

export default {
  name: "BaseConfig",

  data() {
    return {};
  },
  watch: {
    obj(v) {
      console.log(v);
    }
  },

  components: {
    BaseComponent
  },

  props: {
    array: {
      type: Array,
      default: function() {
        return [];
      }
    },
    obj: {
      type: Object,
      default: function() {
        return {};
      }
    },

    fromTabPanes: {
      type: Boolean,
      default: false
    },



    edmCollectionObj: Object,

    handler: Object
  },

  methods: {
   
  }
};
</script>