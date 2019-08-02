<template>
  <v2container :wid="`root`" style="width:100%;height:100%">
    <el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0">
      <v2container id="1563157340689" :wid="`1563157340689`" :index="0" :pid="`root`">
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:13%;width:100%;"
          key="0"
        >
          <v2-form-select
            class="V2Widget"
            id="1563157392048"
            :wid="`1563157392048`"
            :index="0"
            :pid="`1563157340689`"
          ></v2-form-select>
        </el-row>
        <el-row class="V2ContainerBlock borderBox dashBorder" style="height:8%;width:100%;" key="1">
          <v2-switchable
            class="V2Widget"
            id="1563157738443"
            :wid="`1563157738443`"
            :index="1"
            :pid="`1563157340689`"
          >
            <template>
              <v2container
                class="V2Widget"
                id="1563157830818"
                :wid="`1563157830818`"
                :index="0"
                :pid="`1563157738443`"
                v-if="null==0"
              >
                <v2-component-text
                  class="V2Widget"
                  id="1563157750886"
                  :wid="`1563157750886`"
                  :index="0"
                  :pid="`1563157830818`"
                ></v2-component-text>
              </v2container>
            </template>
          </v2-switchable>
        </el-row>
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:13%;width:100%;"
          key="2"
        >
          <v2-form-input
            class="V2Widget"
            id="1563157442602"
            :wid="`1563157442602`"
            :index="2"
            :pid="`1563157340689`"
          ></v2-form-input>
        </el-row>
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:25%;width:100%;"
          key="3"
        >
          <v2-form-input
            class="V2Widget"
            id="1563157415602"
            :wid="`1563157415602`"
            :index="3"
            :pid="`1563157340689`"
          ></v2-form-input>
        </el-row>
        <el-row class="V2ContainerBlock" style="height:40.989999999999995%;width:100%;" key="4">
          <v2empty
            class="V2Empty"
            id="1563157340689-4"
            :wid="`1563157340689-4`"
            :index="4"
            :pid="`1563157340689`"
          ></v2empty>
        </el-row>
      </v2container>
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
              component: "v2-layout",
              href: "v2-layout",
              layout: [13, 8, 13, 25, 40.989999999999995],
              direction: "row",
              children: [
                {
                  style: {
                    label: { "font-size": "", "font-weight": "", color: "" },
                    borderStyle: { "border-color": "" },
                    fontStyle: { color: "" }
                  },
                  label: "付款帐号",
                  labelWitdh: "80px",
                  titleMode: "col",
                  placeholder: "请选择",
                  value: "${accountId}",
                  dataType: "def",
                  optionConfig: "${accountList}",
                  options: [{ active: "true", value: "", label: "" }],
                  clearable: false,
                  filterable: true,
                  disabled: false,
                  isRequired: false,
                  rules: "",
                  customClass: "",
                  __type: "",
                  __loopTarget: "",
                  __capacity: "1",
                  component: "v2-form-select",
                  href: "v2-form-select",
                  children: [],
                  events: {
                    _op_formSelect_select: { select: ["event0_1563157392048"] }
                  },
                  id: 1563157392048,
                  pid: 1563157340689,
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
                    opacity: 1,
                    "border-radius": "0px"
                  }
                },
                {
                  style: {
                    iWarpStyle: {
                      "background-color": "",
                      margin: "",
                      padding: ""
                    }
                  },
                  activeIndex: "",
                  customClass: "",
                  __type: "",
                  __loopTarget: "",
                  __capacity: "1",
                  component: "v2-switchable",
                  href: "v2-switchable",
                  children: [
                    {
                      id: 1563157830818,
                      pid: 1563157738443,
                      component: "v2Container",
                      layout: [100],
                      position: "row",
                      children: [
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
                          text: "${accountBalance}",
                          editable: false,
                          customClass: "",
                          __type: "",
                          __loopTarget: "",
                          __capacity: "1",
                          component: "v2-component-text",
                          href: "v2-component-text",
                          children: [],
                          events: {},
                          id: 1563157750886,
                          pid: 1563157830818,
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
                            "border-style": ""
                          }
                        }
                      ]
                    }
                  ],
                  events: {},
                  customEditor: "v2EditorSwitch",
                  id: 1563157738443,
                  pid: 1563157340689,
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
                    opacity: 1,
                    "border-radius": "0px"
                  }
                },
                {
                  style: {
                    label: { "font-size": "", "font-weight": "", color: "" },
                    borderStyle: { "border-color": "" },
                    fontStyle: { color: "" }
                  },
                  label: "收款帐号",
                  titleMode: "col",
                  labelWitdh: "80px",
                  placeholder: "请选择",
                  value: "",
                  clearable: false,
                  disabled: false,
                  isRequired: false,
                  autoComplete: false,
                  suggestion: "",
                  rules: "",
                  customClass: "",
                  __type: "",
                  __loopTarget: "",
                  __capacity: "1",
                  component: "v2-form-input",
                  href: "v2-form-input",
                  children: [],
                  events: {},
                  id: 1563157442602,
                  pid: 1563157340689,
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
                    "border-style": ""
                  }
                },
                {
                  style: {
                    label: { "font-size": "", "font-weight": "", color: "" },
                    borderStyle: { "border-color": "" },
                    fontStyle: { color: "" }
                  },
                  label: "金额",
                  titleMode: "col",
                  labelWitdh: "80px",
                  placeholder: "请选择",
                  value: "",
                  clearable: false,
                  disabled: false,
                  isRequired: false,
                  autoComplete: false,
                  suggestion: "",
                  rules: "",
                  customClass: "",
                  __type: "",
                  __loopTarget: "",
                  __capacity: "1",
                  component: "v2-form-input",
                  href: "v2-form-input",
                  children: [],
                  events: {},
                  id: 1563157415602,
                  pid: 1563157340689,
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
                    opacity: 1,
                    "border-radius": "0px"
                  }
                },
                null
              ],
              style: {},
              pid: "root",
              id: 1563157340689,
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
                opacity: 1,
                "border-radius": "0px"
              },
              __type: "undefined"
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
            opacity: 1,
            "border-radius": "0px"
          }
        }
      },
      accountBalance: "账户余额是XXXX",
      showAccountBalance: 1,
      accountList: [
        {
          value: "1",
          key: "2",
          label: "3"
        },
        {
          value: "12",
          key: "13",
          label: "131"
        }
      ],
      accountId: ""
    };
  },
  props: {},
  mixins: [root],

  methods: {
    event0_1563157392048(widget, item) {
      let ctx = this;

      /*overview*/
      (async () => {
        const t4 = await this.value1;
      })();
      /*overview over*/
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
      data: this.accountBalance,
      dataStr: "accountBalance",
      wid: 1563157750886,
      modelKey: "text"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.accountList,
      dataStr: "accountList",
      wid: 1563157392048,
      modelKey: "optionConfig"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.accountId,
      dataStr: "accountId",
      wid: 1563157392048,
      modelKey: "value"
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