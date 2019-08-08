<template>
  <v2container :wid="`root`">
    <el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0">
      <v2container id="1561439050327" :wid="`1561439050327`" :index="0" :pid="`root`">
        <el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0">
          <v2container id="1561439051552" :wid="`1561439051552`" :index="0" :pid="`1561439050327`">
            <el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0">
              <v2container
                id="1561439052576"
                :wid="`1561439052576`"
                :index="0"
                :pid="`1561439051552`"
              >
                <el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0">
                  <v2container
                    id="1561439054084"
                    :wid="`1561439054084`"
                    :index="0"
                    :pid="`1561439052576`"
                  >
                    <el-col
                      class="V2ContainerBlock borderBox dashBorder"
                      :span="12"
                      key="0"
                      style="height:100%;"
                    >
                      <v2-form-input
                        class="V2Widget"
                        id="1561439061205"
                        :wid="`1561439061205`"
                        :index="0"
                        :pid="`1561439054084`"
                      ></v2-form-input>
                    </el-col>
                    <el-col
                      class="V2ContainerBlock borderBox dashBorder"
                      :span="12"
                      key="1"
                      style="height:100%;"
                    >
                      <v2-component-btn
                        class="V2Widget"
                        id="1561439064579"
                        :wid="`1561439064579`"
                        :index="1"
                        :pid="`1561439054084`"
                      ></v2-component-btn>
                    </el-col>
                  </v2container>
                </el-row>
                <el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1">
                  <v2container
                    id="1561439055568"
                    :wid="`1561439055568`"
                    :index="1"
                    :pid="`1561439052576`"
                  >
                    <el-col class="V2ContainerBlock" :span="12" key="0" style="height:100%;">
                      <v2empty
                        class="V2Empty"
                        id="1561439055568-0"
                        :wid="`1561439055568-0`"
                        :index="0"
                        :pid="`1561439055568`"
                      ></v2empty>
                    </el-col>
                    <el-col class="V2ContainerBlock" :span="12" key="1" style="height:100%;">
                      <v2empty
                        class="V2Empty"
                        id="1561439055568-1"
                        :wid="`1561439055568-1`"
                        :index="1"
                        :pid="`1561439055568`"
                      ></v2empty>
                    </el-col>
                  </v2container>
                </el-row>
              </v2container>
            </el-row>
            <el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1">
              <v2container
                id="1561439069968"
                :wid="`1561439069968`"
                :index="1"
                :pid="`1561439051552`"
              >
                <el-row
                  class="V2ContainerBlock borderBox dashBorder"
                  style="height:50%;width:100%;"
                  key="0"
                >
                  <v2-form-input
                    class="V2Widget"
                    id="1561439073064"
                    :wid="`1561439073064`"
                    :index="0"
                    :pid="`1561439069968`"
                  ></v2-form-input>
                </el-row>
                <el-row
                  class="V2ContainerBlock borderBox dashBorder"
                  style="height:50%;width:100%;"
                  key="1"
                >
                  <v2-form-input
                    class="V2Widget"
                    id="1561439075143"
                    :wid="`1561439075143`"
                    :index="1"
                    :pid="`1561439069968`"
                  ></v2-form-input>
                </el-row>
              </v2container>
            </el-row>
          </v2container>
        </el-row>
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:50%;width:100%;"
          key="1"
        >
          <v2-component-table
            class="V2Widget"
            id="1561441549592"
            :wid="`1561441549592`"
            :index="1"
            :pid="`1561439050327`"
          ></v2-component-table>
        </el-row>
      </v2container>
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
                divCtn: {
                  position: "",
                  top: "",
                  right: "",
                  bottom: "",
                  left: "",
                  overflow: "",
                  margin: "",
                  padding: "",
                  height: "",
                  width: "",
                  "max-height": "",
                  "max-width": "",
                  "min-height": "",
                  "min-width": ""
                }
              },
              direction: "row",
              layout: "[50,50]",
              rules: "",
              __type: "",
              __loopTarget: "",
              __loopKey: "",
              __capacity: "1",
              def: {
                defheight: true,
                defborder: true,
                defbackgroundStyle: true,
                defpaddingStyle: true
              },
              defaultValue: {
                "background-color": "#fff",
                "background-image": "",
                "padding-top": 0,
                "padding-bottom": 0,
                "padding-left": 0,
                "padding-right": 0
              },
              customStyle: {},
              component: "v2-layout-colctn",
              href: "v2-layout-colctn",
              children: [
                {
                  style: {
                    divCtn: {
                      position: "",
                      top: "",
                      right: "",
                      bottom: "",
                      left: "",
                      overflow: "",
                      margin: "",
                      padding: "",
                      height: "",
                      width: "",
                      "max-height": "",
                      "max-width": "",
                      "min-height": "",
                      "min-width": ""
                    }
                  },
                  direction: "row",
                  layout: "[50,50]",
                  rules: "",
                  __type: "",
                  __loopTarget: "",
                  __loopKey: "",
                  __capacity: "1",
                  def: {
                    defheight: true,
                    defborder: true,
                    defbackgroundStyle: true,
                    defpaddingStyle: true
                  },
                  defaultValue: {
                    "background-color": "#fff",
                    "background-image": "",
                    "padding-top": 0,
                    "padding-bottom": 0,
                    "padding-left": 0,
                    "padding-right": 0
                  },
                  customStyle: {},
                  component: "v2-layout-colctn",
                  href: "v2-layout-colctn",
                  children: [
                    {
                      style: {
                        divCtn: {
                          position: "",
                          top: "",
                          right: "",
                          bottom: "",
                          left: "",
                          overflow: "",
                          margin: "",
                          padding: "",
                          height: "",
                          width: "",
                          "max-height": "",
                          "max-width": "",
                          "min-height": "",
                          "min-width": ""
                        }
                      },
                      direction: "row",
                      layout: "[50,50]",
                      rules: "",
                      __type: "",
                      __loopTarget: "",
                      __loopKey: "",
                      __capacity: "1",
                      def: {
                        defheight: true,
                        defborder: true,
                        defbackgroundStyle: true,
                        defpaddingStyle: true
                      },
                      defaultValue: {
                        "background-color": "#fff",
                        "background-image": "",
                        "padding-top": 0,
                        "padding-bottom": 0,
                        "padding-left": 0,
                        "padding-right": 0
                      },
                      customStyle: {},
                      component: "v2-layout-colctn",
                      href: "v2-layout-colctn",
                      children: [
                        {
                          style: {
                            divCtn: {
                              position: "",
                              top: "",
                              right: "",
                              bottom: "",
                              left: "",
                              overflow: "",
                              margin: "",
                              padding: "",
                              height: "",
                              width: "",
                              "max-height": "",
                              "max-width": "",
                              "min-height": "",
                              "min-width": ""
                            }
                          },
                          direction: "col",
                          layout: "[50,50]",
                          rules: "",
                          __type: "",
                          __loopTarget: "",
                          __loopKey: "",
                          __capacity: "1",
                          def: {
                            defheight: true,
                            defborder: true,
                            defbackgroundStyle: true,
                            defpaddingStyle: true
                          },
                          defaultValue: {
                            "background-color": "#fff",
                            "background-image": "",
                            "padding-top": 0,
                            "padding-bottom": 0,
                            "padding-left": 0,
                            "padding-right": 0
                          },
                          customStyle: {},
                          component: "v2-layout-rowctn",
                          href: "v2-layout-rowctn",
                          children: [
                            {
                              style: {
                                label: {
                                  "font-size": "",
                                  "font-weight": "",
                                  color: ""
                                },
                                borderStyle: { "border-color": "" },
                                fontStyle: { color: "" }
                              },
                              label: "ID",
                              titleMode: "col",
                              labelWitdh: "80px",
                              placeholder: "查询ID",
                              value: "",
                              clearable: false,
                              disabled: false,
                              isRequired: false,
                              autoComplete: false,
                              suggestion: "",
                              rules: "",
                              __type: "",
                              __loopTarget: "",
                              __loopKey: "",
                              __capacity: "1",
                              component: "v2-form-input",
                              href: "v2-form-input",
                              children: [],
                              events: {},
                              id: 1561439061205,
                              pid: 1561439054084
                            },
                            {
                              theme: { btnType: "", size: "" },
                              style: {
                                btnStyle: {
                                  "background-color": "",
                                  height: "",
                                  width: "",
                                  color: ""
                                },
                                btnWrapStyle: {
                                  margin: "",
                                  "margin-top": "",
                                  "margin-right": "",
                                  "margin-bottom": "",
                                  "margin-left": "",
                                  padding: "",
                                  "padding-top": "",
                                  "padding-right": "",
                                  "padding-bottom": "",
                                  "padding-left": ""
                                }
                              },
                              btnName: "查询",
                              shape: "def",
                              loading: false,
                              disabled: false,
                              __type: "",
                              __loopTarget: "",
                              __loopKey: "",
                              __capacity: "1",
                              component: "v2-component-btn",
                              href: "v2-component-btn",
                              children: [],
                              events: {
                                _op_componentBtn_btn: {
                                  click: ["event0_1561439064579"]
                                }
                              },
                              id: 1561439064579,
                              pid: 1561439054084
                            }
                          ],
                          events: {},
                          id: 1561439054084,
                          pid: 1561439052576
                        },
                        {
                          style: {
                            divCtn: {
                              position: "",
                              top: "",
                              right: "",
                              bottom: "",
                              left: "",
                              overflow: "",
                              margin: "",
                              padding: "",
                              height: "",
                              width: "",
                              "max-height": "",
                              "max-width": "",
                              "min-height": "",
                              "min-width": ""
                            }
                          },
                          direction: "col",
                          layout: "[50,50]",
                          rules: "",
                          __type: "",
                          __loopTarget: "",
                          __loopKey: "",
                          __capacity: "1",
                          def: {
                            defheight: true,
                            defborder: true,
                            defbackgroundStyle: true,
                            defpaddingStyle: true
                          },
                          defaultValue: {
                            "background-color": "#fff",
                            "background-image": "",
                            "padding-top": 0,
                            "padding-bottom": 0,
                            "padding-left": 0,
                            "padding-right": 0
                          },
                          customStyle: {},
                          component: "v2-layout-rowctn",
                          href: "v2-layout-rowctn",
                          children: [null, null],
                          events: {},
                          id: 1561439055568,
                          pid: 1561439052576
                        }
                      ],
                      events: {},
                      id: 1561439052576,
                      pid: 1561439051552
                    },
                    {
                      style: {
                        divCtn: {
                          position: "",
                          top: "",
                          right: "",
                          bottom: "",
                          left: "",
                          overflow: "",
                          margin: "",
                          padding: "",
                          height: "",
                          width: "",
                          "max-height": "",
                          "max-width": "",
                          "min-height": "",
                          "min-width": ""
                        }
                      },
                      direction: "row",
                      layout: "[50,50]",
                      rules: "",
                      __type: "",
                      __loopTarget: "",
                      __loopKey: "",
                      __capacity: "1",
                      def: {
                        defheight: true,
                        defborder: true,
                        defbackgroundStyle: true,
                        defpaddingStyle: true
                      },
                      defaultValue: {
                        "background-color": "#fff",
                        "background-image": "",
                        "padding-top": 0,
                        "padding-bottom": 0,
                        "padding-left": 0,
                        "padding-right": 0
                      },
                      customStyle: {},
                      component: "v2-layout-colctn",
                      href: "v2-layout-colctn",
                      children: [
                        {
                          style: {
                            label: {
                              "font-size": "",
                              "font-weight": "",
                              color: ""
                            },
                            borderStyle: { "border-color": "" },
                            fontStyle: { color: "" }
                          },
                          label: "时间",
                          titleMode: "col",
                          labelWitdh: "80px",
                          placeholder: "返回时间",
                          value: "",
                          clearable: false,
                          disabled: false,
                          isRequired: false,
                          autoComplete: false,
                          suggestion: "",
                          rules: "",
                          __type: "",
                          __loopTarget: "",
                          __loopKey: "",
                          __capacity: "1",
                          component: "v2-form-input",
                          href: "v2-form-input",
                          children: [],
                          events: {},
                          id: 1561439073064,
                          pid: 1561439069968
                        },
                        {
                          style: {
                            label: {
                              "font-size": "",
                              "font-weight": "",
                              color: ""
                            },
                            borderStyle: { "border-color": "" },
                            fontStyle: { color: "" }
                          },
                          label: "内容",
                          titleMode: "col",
                          labelWitdh: "80px",
                          placeholder: "返回内容",
                          value: "",
                          clearable: false,
                          disabled: false,
                          isRequired: false,
                          autoComplete: false,
                          suggestion: "",
                          rules: "",
                          __type: "",
                          __loopTarget: "",
                          __loopKey: "",
                          __capacity: "1",
                          component: "v2-form-input",
                          href: "v2-form-input",
                          children: [],
                          events: {},
                          id: 1561439075143,
                          pid: 1561439069968
                        }
                      ],
                      events: {},
                      id: 1561439069968,
                      pid: 1561439051552
                    }
                  ],
                  events: {},
                  id: 1561439051552,
                  pid: 1561439050327
                },
                {
                  columns: [
                    { active: true, sTitle: "columns0" },
                    {
                      active: true,
                      sTitle: "employeeId2",
                      __edm_collection: {
                        CODINGRULE: "UTF-8",
                        DICTTYPE: "2",
                        PUBCODECNAME: "复核柜员号",
                        description: "复核柜员号",
                        COLSCALE: "0",
                        name: "employeeId2",
                        Parameter: { pname: "字段长度", pvalue: "77" },
                        type: "String",
                        UUID: "579307B9FF7F4BD4B28B143E579DC48C",
                        EDITION: "v0.0.1",
                        APPLYAREA: "casdf.cadf",
                        fieldLength: "77",
                        like: true,
                        desp: "复核柜员号"
                      }
                    },
                    {
                      active: true,
                      sTitle: "start",
                      __edm_collection: {
                        CODINGRULE: "UTF-8",
                        DICTTYPE: "2",
                        PUBCODECNAME: "交易起始时间",
                        description: "交易起始时间",
                        COLSCALE: "0",
                        name: "start",
                        Parameter: { pname: "字段长度", pvalue: "77" },
                        type: "String",
                        UUID: "579307B9FF7F4BD4B28B143E579DC48C",
                        EDITION: "v0.0.1",
                        APPLYAREA: "casdf.cadf",
                        fieldLength: "77",
                        like: true,
                        desp: "交易起始时间"
                      }
                    },
                    {
                      active: true,
                      sTitle: "tradeId",
                      __edm_collection: {
                        CODINGRULE: "UTF-8",
                        DICTTYPE: "2",
                        PUBCODECNAME: "交易号",
                        description: "交易号",
                        COLSCALE: "0",
                        name: "tradeId",
                        Parameter: { pname: "字段长度", pvalue: "77" },
                        type: "String",
                        UUID: "579307B9FF7F4BD4B28B143E579DC48C",
                        EDITION: "v0.0.1",
                        APPLYAREA: "casdf.cadf",
                        fieldLength: "77",
                        like: true,
                        desp: "交易号"
                      }
                    },
                    {
                      active: true,
                      sTitle: "organId",
                      __edm_collection: {
                        CODINGRULE: "UTF-8",
                        DICTTYPE: "2",
                        PUBCODECNAME: "机构号",
                        description: "机构号",
                        COLSCALE: "0",
                        name: "organId",
                        Parameter: { pname: "字段长度", pvalue: "77" },
                        type: "String",
                        UUID: "579307B9FF7F4BD4B28B143E579DC48C",
                        EDITION: "v0.0.1",
                        APPLYAREA: "casdf.cadf",
                        fieldLength: "77",
                        like: true,
                        desp: "机构号"
                      }
                    }
                  ],
                  selection: "",
                  toolBar: false,
                  toolTitle: "操作列",
                  toolLocation: "right",
                  toolWidth: "100",
                  toolBtns: [{ active: "true", btnName: "详情" }],
                  tableData: "",
                  selectedRow: "",
                  __type: "",
                  __loopTarget: "",
                  __loopKey: "",
                  __capacity: "1",
                  component: "v2-component-table",
                  href: "v2-component-table",
                  children: [],
                  events: {},
                  id: 1561441549592,
                  pid: 1561439050327
                }
              ],
              events: {},
              id: 1561439050327,
              pid: "root"
            }
          ],
          events: {}
        }
      },
      ID: "",
      Time: "",
      Content: ""
    };
  },
  props: {
    ID: {
      default: () => {
        return "";
      }
    },
    Time: {
      default: () => {
        return "";
      }
    },
    Content: {
      default: () => {
        return "";
      }
    }
  },
  mixins: [root],

  methods: {
    event0_1561439064579(widget, item) {
      let ctx = this;

      /*overview*/
      (async () => {
        const t2 = await "";
        const t1 = await pipe.getAfaData({
          type: "get",
          t: "log/afa/list/",
          m: "logId",
          url: "",
          data: {}
        });
        ctx.Time = t1.data.content.time;
        ctx.Content = t1.data.content.content;
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
      data: this.ID,
      dataStr: "ID",
      wid: 1561439061205,
      modelKey: "value"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.Time,
      dataStr: "Time",
      wid: 1561439073064,
      modelKey: "value"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.Content,
      dataStr: "Content",
      wid: 1561439075143,
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