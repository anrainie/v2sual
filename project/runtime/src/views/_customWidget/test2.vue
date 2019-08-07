<template>
  <v2container :wid="`root`">
    <el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0">
      <v2container id="1564643141302" :wid="`1564643141302`" :index="0" :pid="`root`">
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:50%;width:100%;"
          key="0"
        >
          <v2-form-input
            class="V2Widget"
            id="1564643168752"
            :wid="`1564643168752`"
            :index="0"
            :pid="`1564643141302`"
          ></v2-form-input>
        </el-row>
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:50%;width:100%;"
          key="1"
        >
          <v2-form-input
            class="V2Widget"
            id="1564643208769"
            :wid="`1564643208769`"
            :index="1"
            :pid="`1564643141302`"
          ></v2-form-input>
        </el-row>
      </v2container>
    </el-row>
  </v2container>
</template>
<script>
import { root, cpt, widget } from "@/ideLib/mixin/v2-view";
import events from "@/ideLib/mixin/events";

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
              direction: "row",
              rules: "",
              ctnClass: "",
              customClass: "",
              __type: "",
              __loopTarget: "",
              __capacity: "1",
              component: "v2-layout",
              href: "v2-layout",
              children: [
                {
                  theme: { size: "" },
                  style: {
                    label: { "font-size": "", "font-weight": "", color: "" }
                  },
                  label: "标题",
                  titleMode: "col",
                  labelWitdh: "80px",
                  inputType: "text",
                  rows: "2",
                  placeholder: "请输入",
                  prepend: "",
                  append: "",
                  maxlength: "",
                  minlength: "",
                  prefixIcon: "",
                  suffixIcon: "",
                  showWordLimit: false,
                  value: "",
                  clearable: false,
                  disabled: false,
                  isRequired: false,
                  autoComplete: false,
                  suggestion: "",
                  rules: "",
                  ctnClass: "",
                  customClass: "",
                  __type: "",
                  __loopTarget: "",
                  __capacity: "1",
                  component: "v2-form-input",
                  href: "v2-form-input",
                  children: [],
                  events: {},
                  id: 1564643168752,
                  pid: 1564643141302,
                  commonStyle: {
                    position: "",
                    top: "",
                    right: "",
                    left: "",
                    bottom: "",
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
                {
                  theme: { size: "" },
                  style: {
                    label: { "font-size": "", "font-weight": "", color: "" }
                  },
                  label: "标题",
                  titleMode: "col",
                  labelWitdh: "80px",
                  inputType: "text",
                  rows: "2",
                  placeholder: "请输入",
                  prepend: "",
                  append: "",
                  maxlength: "",
                  minlength: "",
                  prefixIcon: "",
                  suffixIcon: "",
                  showWordLimit: false,
                  value: "",
                  clearable: false,
                  disabled: false,
                  isRequired: false,
                  autoComplete: false,
                  suggestion: "",
                  rules: "",
                  ctnClass: "",
                  customClass: "",
                  __type: "",
                  __loopTarget: "",
                  __capacity: "1",
                  component: "v2-form-input",
                  href: "v2-form-input",
                  children: [],
                  events: {},
                  id: 1564643208769,
                  pid: 1564643141302,
                  commonStyle: {
                    position: "",
                    top: "",
                    right: "",
                    left: "",
                    bottom: "",
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
                }
              ],
              events: {},
              layout: [50, 50],
              realSize: ["%", "%"],
              id: 1564643141302,
              pid: "root",
              commonStyle: {
                position: "",
                top: "",
                right: "",
                left: "",
                bottom: "",
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
          ],
          events: {},
          ctnStyle: [
            {
              position: "",
              top: "",
              right: "",
              left: "",
              bottom: "",
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
  props: {},
  mixins: [root, widget, cpt, events],

  methods: {},
  watch: {},
  computed: {},
  beforeCreate() {
    let ctx = this;
  },
  created() {
    let ctx = this; /**bind over**/

    /**bind**/
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