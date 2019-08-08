<template>
  <v2container :wid="`root`">
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
          direction: "col",
          layout: [50, 50],
          style: { width: "100%", height: "100%" },
          data: {},
          children: [
            {
              theme: { size: "" },
              style: {
                label: { "font-size": "", "font-weight": "", color: "" }
              },
              label: "标题",
              labelWitdh: "80px",
              titleMode: "col",
              placeholder: "请选择",
              value: "",
              dataType: "def",
              optionConfig: "",
              options: [{ active: "true", value: "", label: "" }],
              clearable: false,
              filterable: true,
              disabled: false,
              isRequired: false,
              rules: "",
              ctnClass: "${ctnClass}",
              customClass: "",
              __type: "",
              __loopTarget: "",
              __capacity: "1",
              component: "v2-form-select",
              href: "v2-form-select",
              children: [],
              events: {},
              id: 1565230849487,
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
              }
            },
            null
          ],
          events: {},
          ctnClass: "",
          customClass: "",
          realSize: ["%", "%"],
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
      ctnClass: ["test-demo"]
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