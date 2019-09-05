<template>
  <v2-ctn-xy :wid="`root`">
    <v2-component-image
      class="V2Widget"
      id="1567581926152"
      :wid="`1567581926152`"
      :index="0"
      :pid="`root`"
    ></v2-component-image>
    <v2-component-text
      class="V2Widget"
      :class="[`title1`]"
      id="1567581951140"
      :wid="`1567581951140`"
      :index="1"
      :pid="`root`"
    ></v2-component-text>
    <v2-component-text
      class="V2Widget"
      :class="[`value1`]"
      id="1567581949607"
      :wid="`1567581949607`"
      :index="2"
      :pid="`root`"
    ></v2-component-text>
  </v2-ctn-xy>
</template>
<script>
import { mixins } from "@v2-lib/vue.spa.plugin";
import { root, cpt, widget } from "@v2-lib/v2sual/mixin/v2-view";
import events from "@v2-lib/v2sual/mixin/events";

export default {
  data() {
    return {
      CONTENT: {
        structure: {
          id: "root",
          component: "v2EditorXYCtn",
          style: { width: "100%", height: "100%" },
          children: [
            {
              children: [],
              component: "v2-component-image",
              commonStyle: {
                position: "absolute",
                top: "-0",
                right: "",
                left: "0",
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
                color: "",
                "animation-duration": "1s",
                "animation-delay": ""
              },
              ctnClass: "",
              customClass: "",
              events: {},
              href: "v2-component-image",
              src: "${img}",
              fixation: false,
              style: {},
              __capacity: "1",
              __loopTarget: "",
              __type: "",
              icon: "iconkapian",
              name: "图片",
              type: "component",
              id: 1567581926152,
              pid: "root",
              animate: ["", "animated"]
            },
            {
              style: {
                textStyle: {
                  height: "",
                  width: "",
                  "line-height": "",
                  "font-family": "",
                  "font-weight": "",
                  "font-style": "",
                  "text-decoration": ""
                }
              },
              text: "${title}",
              editable: false,
              ctnClass: "",
              customClass: "title1",
              __type: "",
              __loopTarget: "",
              __capacity: "1",
              component: "v2-component-text",
              href: "v2-component-text",
              children: [],
              events: {},
              commonStyle: { position: "absolute", top: "1rem", left: "130px" },
              id: 1567581951140,
              pid: "root",
              animate: ["", "animated"]
            },
            {
              style: {
                textStyle: {
                  height: "",
                  width: "",
                  "line-height": "",
                  "font-family": "",
                  "font-weight": "",
                  "font-style": "",
                  "text-decoration": ""
                }
              },
              text: "${value}",
              editable: false,
              ctnClass: "",
              customClass: "value1",
              __type: "",
              __loopTarget: "",
              __capacity: "1",
              component: "v2-component-text",
              href: "v2-component-text",
              children: [],
              events: {},
              commonStyle: {
                position: "absolute",
                top: "3.5rem",
                left: "130px"
              },
              id: 1567581949607,
              pid: "root",
              animate: ["", "animated"]
            }
          ],
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
            },
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
            },
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
      }
    };
  },
  props: {
    img: {
      default: () => {
        return `img/device1.png`;
      }
    },
    title: {
      default: () => {
        return `完好率`;
      }
    },
    value: {
      default: () => {
        return `83.7%`;
      }
    }
  },
  mixins: [root, widget, cpt, events, mixins],

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
      data: this.img,
      dataStr: "img",
      wid: 1567581926152,
      modelKey: "src"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.title,
      dataStr: "title",
      wid: 1567581951140,
      modelKey: "text"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.value,
      dataStr: "value",
      wid: 1567581949607,
      modelKey: "text"
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