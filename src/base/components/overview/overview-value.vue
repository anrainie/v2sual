<template>
    <component :class="classes" :nodeItem="nodeItem" :is="componentName" :handler="handler" :paramObj="paramObj" :params="params" :value="value" :nodesMap="nodesMap"></component>
</template>

<script>
const mixin = {
  props: {
    paramObj: {
      type: Object
    },

    handler: {
      type: Object
    },

    nodesMap: {
      type: Object
    },

    params: {},

    nodeItem: {}
  }
};

const classPrefix = "aui-overview-value";

export default {
  name: "OverviewValue",

  mixins: [mixin],

  data() {
    return {};
  },

  mounted() {},

  components: {
    _boolean: {
      template: `<i-switch v-model="nodeItem.value">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>`,
      mixins: [mixin]
    },

    _string: {
      template: `<i-input v-model="nodeItem.value"></i-input>`,
      mixins: [mixin]
    },

    _enum: {
      template: `<i-input v-model="nodeItem.value"></i-input>`,
      mixins: [mixin]
    },

    _code: {
      template: `<div>
                <span>{{paramObj.desp}}</span>
                    <span @click.stop="handler.setCode($event, {nodeItem:nodeItem})" class="config-modal-btn">
                        <i title="配置javascript代码" class="aui aui-peizhidingyi" ></i>
                    </span>
            </div>`,
      mixins: [mixin]
    },

    _number: {
      template: `<input-number v-model="nodeItem.value"></input-number>`,
      mixins: [mixin]
    },

    _object: {
      template: `<div v-if="params">
                  <overview-node v-for="nodeID in params" :nodeID="nodeID" :node-item="nodesMap[nodeID]" :handler="handler" :nodesMap="nodesMap"></overview-node>
                </div>
                `,
      mixins: [mixin]
    },

    _array: {
      template: `<div>
                  <i-icon title="添加" class="array-add-btn" @click.native.stop="handler.addParam({nodeItem: nodeItem})" type="plus">
                </i-icon>
                <div v-if="params">
                  <overview-node v-for="nodeID in params" :nodeID="nodeID" :node-item="nodesMap[nodeID]" :handler="handler" :nodesMap="nodesMap"></overview-node>
                </div>                
                
            </div>`,
      mixins: [mixin]
    },

    _default: {
      template: ``
    }
  },

  computed: {
    componentName() {
      if (this.paramObj) {
        switch (this.paramObj.type) {
          case "string_select":
            return "_enum";
          case "option":
            return "_string";
          case "jQuery":
          case "handler":
          case "function":
          case "event":
            return "_code";
          default:
            return "_" + this.paramObj.type;
        }
      } else {
        console.log(JSON.parse(JSON.stringify(this.nodeItem)));
        return '_default';
      }
    },

    classes() {
      return [
        `${classPrefix}`,
        `${classPrefix}-node-value`,
        `${classPrefix}-node-value-${(this.paramObj && this.paramObj.type) || ''}`
      ];
    }
  },

  methods: {},

  watch: {}
};
</script>

<style>

</style>
