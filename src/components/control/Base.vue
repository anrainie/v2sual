<template>
  <div>
    <div class="aui-config-tilte">配置</div>
    <div class="aui-config-content">
      <base-config
        v-if="showOption"
        class="aui-config-ctn"
        :arraySelector="arraySelector"
        :objSelector="objSelector"
        :handler="handler"
        :array="arr"
        :obj="obj"
      ></base-config>
    </div>
    <LayoutControl></LayoutControl>
  </div>
</template>
<script>
// import store from "../../assets/js/store.js";

export default {
  // store,
  mounted: function() {
    this.showOption = true;
  },
  data() {
    return {
      //   //model responsive data
      //   array: JSON.parse(JSON.stringify(baseArray)),
      //   obj: JSON.parse(JSON.stringify(baseObj)),

      //model selector
      objSelector: "objectSlector",
      arraySelector: "array",

      //model display control
      spinShow: true,
      showOption: false,

      //handlers
      handler: {
        showNextLevel: false,

        handleValidate: function($event, item) {},
        validate() {
          return true;
        },

        getHeaderValue: function(value) {
          if (typeof value === "string") {
            return value;
          } else {
            return false;
          }
        },

        getHeader: function(item, instanceItem, index, emdObj) {},

        tabClicked: function(name, id) {},

        panelCreated: function(panelInstance, optionItem) {},

        // swapComponent: baseVueHandler.swapComponent,

        // objAdd: baseVueHandler.objAdd,

        // objDel: baseVueHandler.objDel,

        // delItem: baseVueHandler.delItem,

        panelChange: function() {},

        handleChange: function(args) {},

        edmSorted: function(edmObj, modelSelector) {},

        panelOpen: function(event, args) {},

        addBlock: function(event, args) {},

        delBlock: function(event, item, modelSelector, edmCollectionObj) {}
      }
    };
  },
  destroyed: function() {
    console.log("destroy");
  },
  methods: {
    add() {
      this.model.children.push(null);
      this.model.layout.push(10);
    },
    remove(index) {
      this.model.children.splice(index, 1);
      this.model.layout.splice(index, 1);
    },
    change(e) {
      if (e && e.moved) {
        let { oldIndex, newIndex } = e.moved;
        //位置交换
        this.model.layout.splice(
          oldIndex,
          1,
          this.model.layout.splice(newIndex, 1, this.model.layout[oldIndex])
        );
      }
    }
  },
  computed: {
    arr() {
      return this.model.option;
    },
    obj() {
      return this.model.data;
    },
    wid() {
      // let st = this.$store.state.UIData.selectTarget;

      // if (!st || st.length != 1) {
      //   return null;
      // }
      return this.$store.getters.firstSelection;
    },
    model() {
      return (
        this.$store.getters.model(this.$store.getters.firstSelection) || {}
      );
    }
  }
};
</script>
<style>
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
