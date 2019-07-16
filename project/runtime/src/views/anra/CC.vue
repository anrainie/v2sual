<template>
  <v2container :wid="`root`" style="width:100%;height:200%">
    <el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0">
      <v2-component-tree
        class="V2Widget"
        id="1563267982194"
        :wid="`1563267982194`"
        :index="0"
        :pid="`root`"
      ></v2-component-tree>
    </el-row>
  </v2container>
</template>
<script>
import { root } from "@/utils/v2-view";

export default {
  data() {
    return {
      CONTENT: {
        structure: {
          id: "root",
          component: "v2Container",
          direction: "row",
          layout: [100],
          style: { width: "100%", height: "100%" },
          data: {},
          children: [
            {
              style: {
                treeWarpStyle: {
                  "background-color": "",
                  margin: "",
                  padding: "",
                  height: "",
                  width: ""
                }
              },
              configs: "treeList",
              defaultProps: { children: "children", label: "label" },
              showCheckbox: false,
              nodeKey: "",
              defExpanded: [],
              defChecked: [],
              customClass: "",
              __type: "",
              __loopTarget: "",
              __capacity: "1",
              component: "v2-component-tree",
              href: "v2-component-tree",
              children: [],
              events: {},
              id: 1563267982194,
              pid: "root",
              commonStyle: {
                position: "",
                top: "",
                right: "",
                left: "",
                bottom: "",
                width: "",
                height: "",
                "text-align": "",
                "background-color": "",
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "margin-top": "",
                "margin-bottom": "",
                "margin-left": "",
                "margin-right": "",
                "border-color": "",
                "border-width": "",
                "border-style": "",
                color: ""
              }
            }
          ],
          events: {},
          commonStyle: {
            position: "",
            top: "",
            right: "",
            left: "",
            bottom: "",
            width: "",
            height: "",
            "text-align": "",
            "background-color": "",
            "padding-top": "",
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "margin-top": "",
            "margin-bottom": "",
            "margin-left": "",
            "margin-right": "",
            "border-color": "",
            "border-width": "",
            "border-style": "",
            color: "",
            opacity: 1,
            "border-radius": "0px"
          }
        }
      },
      treeList: [
        {
          label: "首页"
        }
      ]
    };
  },
  props: {},
  mixins: [root],

  methods: {
    event0_1563258333580(widget, item) {
      let ctx = this;
    }
  },
  watch: {},
  beforeCreate() {
    let ctx = this;
  },
  created() {
    let ctx = this;

    /**bind**/ ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.theme1,
      dataStr: "theme1",
      wid: 1563262000359,
      modelKey: "customClass"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.treeList,
      dataStr: "treeList",
      wid: 1563267982194,
      modelKey: "configs"
    }); /**bind over**/
  },
  beforeMount() {
    let ctx = this;
  },
  mounted() {
    let ctx = this;
  },
  beforeUpdate() {
    let ctx = this;
  },
  updated() {
    let ctx = this;
  },
  beforeDestroy() {
    let ctx = this;
  },
  destroyed() {
    let ctx = this;
  },
  pause() {
    /**页面切出**/
  },
  resume() {
    /**页面切入**/
  }
};
</script>