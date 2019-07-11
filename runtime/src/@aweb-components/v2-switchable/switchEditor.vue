<!--针对切换组件设计的编辑器
    其特性是：
    1、有多个编辑区域
    2、同一时间只有一个编辑区域显示
-->
<template>
  <div>
    <el-tabs v-model="activeTab" type="card" editable @edit="handleTabsEdit">
      <el-tab-pane
        :key="`${index}`"
        v-for="(item, index) in model.children"
        :label="`页面${index}`"
        :name="`${index}`"
      >
        <component :is="component(index)" :wid="widgetId(index)" :index="index" :pid="model.id"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: "0"
    };
  },
  computed: {
    model() {
      return this.$store.getters.model(this.wid) || {};
    },
    widgetId(index) {
      return index => {
        if (this.model.children) {
          let item = this.model.children[index];
          if (item) {
            return item.id;
          }
        }
        return this.wid + "-" + index;
      };
    },
    component(index) {
      return index => {
        if (!this.model.children) {
          return "v2Empty";
        }
        let item = this.model.children[index];
        if (item === undefined) {
          this.model.children
            ? (this.model.children[index] = null)
            : (this.model.children = []);
        }
        //循环组件优先处理
        if (item && item.__type && item.__type === "loop") return "v2loop";
        //自定义组件处理
        if (item && item.cptpath) return "v2custom";

        if (item) return item.component;
        return "v2Empty";
      };
    }
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        this.model.children = this.model.children || [];
        this.activeTab = this.model.children.length - 1 + "";
        this.$store.commit("$add.child", {
          parent: this.model,
          index: targetName,
          model: {
            id: new Date().valueOf() + ((Math.random() * 100000) | 0),
            pid: this.model.id,
            component: "v2Container",
            layout: [100],
            position: "row",
            children: [null]
          }
        });
      }
      if (action === "remove") {
        this.model.children.splice(targetName, 1);
        this.activeTab = targetName - 1 + "";
      }
    }
  }
};
</script>

