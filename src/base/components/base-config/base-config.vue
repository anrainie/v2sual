<template>
    <div class="aui-base-config">
        <base-component :array="array" v-for="(item, index) in array" 
        :key="item.name" 
        :item="item" 
        :edmCollectionObj="edmCollectionObj" 
        :objSelector="objSelector" 
        :obj="obj" 
        :handler="handler" 
        :arraySelector="getArraySelector(index)">
        </base-component>
    </div>
</template>

<script>
import BaseComponent from './base-component.vue'

export default {
  name: "BaseConfig",

  data() {
    return {};
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

    arraySelector: {
        type: String,
        default: 'baseConfigArray'
    },
    objSelector: {
        type: String,
        default: 'baseConfigObj'
    },

    edmCollectionObj: Object,

    handler: Object
  },

  methods: {
    getArraySelector: function(index) {
      if (this.fromTabPanes) {
        return this.arraySelector;
      } else {
        return this.arraySelector + "---" + index;
      }
    }
  }
};
</script>