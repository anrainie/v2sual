<template>
  <v2container :wid="`root`">
    <el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0">
      <v2loop class="V2Widget" id="1565339962345" :wid="`1565339962345`" :index="0" :pid="`root`">
        <template v-slot="scope">
          <v2-component-text-value
            class="V2Widget"
            :id="`1565339962345-${scope._key}`"
            :wid="`1565339962345-${scope._key}`"
            :index="scope._key"
            :pid="`1565339962345`"
            :cpttype="`loopItem`"
            :$item="scope._item"
            :$key="scope._key"
          ></v2-component-text-value>
        </template>
      </v2loop>
    </el-row>
  </v2container>
</template>
<script>
import { root } from "@v2-lib/v2sual/mixin/v2-view";

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
                title: {
                  "background-color": "",
                  height: "",
                  width: "",
                  color: ""
                },
                value: {
                  "background-color": "",
                  height: "",
                  width: "",
                  color: ""
                }
              },
              title: "${$item.text}",
              type: "icon",
              value: "${$item.icon}",
              direction: "text-value-col",
              ctnClass: "",
              customClass: "",
              __type: "loop",
              __loopTarget: "keyVals",
              __capacity: "2",
              component: "v2-component-text-value",
              href: "v2-component-text-value",
              children: [],
              events: {},
              id: 1565339962345,
              pid: "root",
              commonStyle: {
                position: "",
                top: "",
                right: "",
                left: "",
                bottom: "",
                width: "",
                height: "",
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "margin-top": "",
                "margin-bottom": "",
                "margin-left": "",
                "margin-right": "",
                "font-size": "",
                color: ""
              },
              animate: { name: "", duration: 0, delay: 0, classCode: "" }
            }
          ],
          events: {},
          ctnClass: "",
          customClass: "",
          realSize: ["%"],
          commonStyle: {
            position: "",
            top: "",
            right: "",
            left: "",
            bottom: "",
            width: "",
            height: "",
            "padding-top": "",
            "padding-bottom": "",
            "padding-left": "",
            "padding-right": "",
            "margin-top": "",
            "margin-bottom": "",
            "margin-left": "",
            "margin-right": "",
            "font-size": "",
            color: ""
          },
          animate: { name: "", duration: 0, delay: 0, classCode: "" },
          ctnStyle: [
            {
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
              "border-style": ""
            }
          ]
        }
      },
      ctnClass: ["test-demo"],
      keyVals: [
        {
          icon: "el-icon-eleme",
          text: "文本"
        },
        {
          icon: "el-icon-eleme",
          text: "文本"
        }
      ]
    };
  },
  props: {},
  mixins: [root],

  methods: {},
  watch: {},
  computed: {},
  beforeCreate() {
    let ctx = this;
  },
  created() {
    let ctx = this;

    /**bind**/ ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.ctnClass,
      dataStr: "ctnClass",
      wid: 1565230849487,
      modelKey: "ctnClass"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.keyVals,
      dataStr: "keyVals",
      wid: 1565339962345,
      modelKey: "__loopTarget"
    });
    ctx.$store.commit("registerBind", {
      dataStr: "$item.icon",
      wid: 1565339962345,
      modelKey: "value"
    });
    ctx.$store.commit("registerBind", {
      dataStr: "$item.text",
      wid: 1565339962345,
      modelKey: "title"
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
  deactivated() {
    /**页面切出**/
    let ctx = this;
  },
  activated() {
    /**页面切入**/
    let ctx = this;
  }
};
</script>
<style lang="scss">
</style>
