<template>
  <overview-node class="aui-overview-ctn" :nodeID="startNodeID" :nodeItem="nodesMap[startNodeID]" :nodesMap="nodesMap" :handler="handler"></overview-node>
</template>


<script>
import OverviewNode from "./overview-node.vue";

export default {
  name: "Overview",

  mounted(){
    // window.overview = this;
  },

  props: {
    nodesMap: {
      type: Object
    },

    startNodeID: {
      type: String
    },

    handler: {
      type: Object
    }

    // codeListMap:{
    //   type: Object
    // }
  },

  data() {
    return {};
  },

  components: {
    OverviewNode
  },

  methods: {},

  watch: {}
};
</script>

<style>

</style>
