<template>
  <v2-ctn-xy :wid="`root`">
    <v2-component-image
      class="V2Widget"
      id="1566903798862"
      :wid="`1566903798862`"
      :index="0"
      :pid="`root`"
    ></v2-component-image>
    <v2-component-text
      class="V2Widget"
      id="1566903851862"
      :wid="`1566903851862`"
      :index="1"
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
              style: {},
              src: "img/s_navi_item1.png",
              height: "100%",
              width: "100%",
              ctnClass: "",
              customClass: "",
              __type: "",
              __loopTarget: "",
              __capacity: "1",
              component: "v2-component-image",
              href: "v2-component-image",
              children: [],
              events: {},
              commonStyle: {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "130px",
                height: "31px"
              },
              id: 1566903798862,
              pid: "root",
              animate: ["", "animated"]
            },
            {
              style: {
                textStyle: {
                  "text-align": "",
                  margin: "",
                  padding: "",
                  height: "",
                  width: "",
                  "line-height": "",
                  "font-family": "",
                  "font-size": "",
                  "font-weight": "",
                  "font-style": "",
                  color: "",
                  "text-decoration": ""
                }
              },
              text: "${title}",
              editable: false,
              ctnClass: "",
              customClass: "",
              __type: "",
              __loopTarget: "",
              __capacity: "1",
              component: "v2-component-text",
              href: "v2-component-text",
              children: [],
              events: {},
              commonStyle: {
                position: "absolute",
                top: "7px",
                left: "23px",
                color: "#E5E8EB"
              },
              id: 1566903851862,
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
            }
          ]
        }
      }
    };
  },
  props: {
    title: {
      default: () => {
        return `业务运营`;
      }
    },
    selected: {
      default: () => {
        return `false`;
      }
    }
  },
  mixins: [root, widget, cpt, events, mixins],

  methods: {},
  watch: {},
  computed: {
    img() {
      return this.selected ? "img/s_navi_item2.png" : "img/s_navi_item1.png";
    }
  },
  beforeCreate() {
    let ctx = this;
  },
  created() {
    let ctx = this;

    /**bind**/ ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.title,
      dataStr: "title",
      wid: 1566903851862,
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