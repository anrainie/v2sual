<template>
  <v2container :wid="`root`" style="width:100%;height:100%">
    <el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0">
      <v2container id="1560765197115" :wid="`1560765197115`" :index="0" :pid="`root`">
        <el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0">
          <v2container id="1560765200069" :wid="`1560765200069`" :index="0" :pid="`1560765197115`">
            <el-col
              class="V2ContainerBlock borderBox dashBorder"
              :span="12"
              key="0"
              style="height:100%;"
            >
              <v2loop
                class="V2Widget"
                id="1560765204194"
                :wid="`1560765204194`"
                :index="0"
                :pid="`1560765200069`"
              >
                <template v-slot="scope">
                  <v2-component-test1
                    class="V2Widget"
                    :id="`1560765204194-${scope._key}`"
                    :wid="`1560765204194-${scope._key}`"
                    :index="scope._key"
                    :pid="`1560765204194`"
                    :cpttype="`loopItem`"
                    :$item="scope._item"
                    :$key="scope._key"
                  ></v2-component-test1>
                </template>
              </v2loop>
            </el-col>
            <el-col
              class="V2ContainerBlock borderBox dashBorder"
              :span="12"
              key="1"
              style="height:100%;"
            >
              <v2loop
                class="V2Widget"
                id="1560765241095"
                :wid="`1560765241095`"
                :index="1"
                :pid="`1560765200069`"
              >
                <template v-slot="scope">
                  <v2-form-radio
                    class="V2Widget"
                    :id="`1560765241095-${scope._key}`"
                    :wid="`1560765241095-${scope._key}`"
                    :index="scope._key"
                    :pid="`1560765241095`"
                    :cpttype="`loopItem`"
                    :$item="scope._item"
                    :$key="scope._key"
                  ></v2-form-radio>
                </template>
              </v2loop>
            </el-col>
          </v2container>
        </el-row>
        <el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1">
          <v2container id="1562725015675" :wid="`1562725015675`" :index="1" :pid="`1560765197115`">
            <el-row class="V2ContainerBlock" style="height:20%;width:100%;" key="0">
              <v2empty
                class="V2Empty"
                id="1562725015675-0"
                :wid="`1562725015675-0`"
                :index="0"
                :pid="`1562725015675`"
              ></v2empty>
            </el-row>
            <el-row
              class="V2ContainerBlock borderBox dashBorder"
              style="height:80%;width:100%;"
              key="1"
            >
              <v2-component-calendar
                class="V2Widget"
                id="1562725029715"
                :wid="`1562725029715`"
                :index="1"
                :pid="`1562725015675`"
              ></v2-component-calendar>
            </el-row>
          </v2container>
        </el-row>
      </v2container>
    </el-row>
  </v2container>
</template>
<script>
import { root } from "@/utils/v2-view";
import v2ComponentTest1 from "@/views/_customWidget/test1.vue";
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
                      __type: "loop",
                      __loopTarget: "testList",
                      __loopKey: "",
                      __capacity: "1",
                      component: "v2-component-test1",
                      href: "v2-component-test1",
                      cptpath: "\\src\\views\\_customWidget\\test1.vue",
                      children: [],
                      events: {},
                      id: 1560765204194,
                      pid: 1560765200069
                    },
                    {
                      style: {
                        label: {
                          "font-size": "",
                          "font-weight": "",
                          color: ""
                        },
                        radio: {
                          margin: "",
                          "border-width": "",
                          "border-radius": "",
                          padding: "",
                          height: "",
                          width: ""
                        },
                        font: { "padding-left": "", "font-size": "", color: "" }
                      },
                      label: "标题",
                      labelWitdh: "80px",
                      titleMode: "col",
                      value: "",
                      isRequired: false,
                      options: [
                        {
                          active: "true",
                          text: "文本",
                          disabled: false,
                          border: false,
                          label: ""
                        },
                        {
                          active: true,
                          text: "文本",
                          disabled: false,
                          border: false,
                          label: ""
                        }
                      ],
                      __type: "loop",
                      __loopTarget: "testList",
                      __loopKey: "",
                      __capacity: "1",
                      component: "v2-form-radio",
                      href: "v2-form-radio",
                      children: [],
                      events: {},
                      id: 1560765241095,
                      pid: 1560765200069
                    }
                  ],
                  events: {},
                  id: 1560765200069,
                  pid: 1560765197115
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
                  layout: [20, 80],
                  rules: "",
                  __type: "",
                  __loopTarget: "",
                  __capacity: "1",
                  def: {
                    defheight: true,
                    defwidth: true,
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
                  component: "v2-layout",
                  href: "v2-layout",
                  children: [
                    null,
                    {
                      style: {
                        cardHeader: { height: "", width: "", color: "" }
                      },
                      range: "calendarR",
                      currentDate: "calendarDat",
                      __type: "",
                      __loopTarget: "",
                      __capacity: "1",
                      component: "v2-component-calendar",
                      href: "v2-component-calendar",
                      children: [],
                      events: {},
                      id: 1562725029715,
                      pid: 1562725015675
                    }
                  ],
                  events: {},
                  realSize: [null, null],
                  id: 1562725015675,
                  pid: 1560765197115
                }
              ],
              events: {},
              id: 1560765197115,
              pid: "root"
            }
          ],
          events: {}
        }
      },
      testList: [{ name: 1 }, { name: 2 }],
      calendarRange: [-1, 0, 1],
      calendarDate: new Date()
    };
  },
  props: {},
  mixins: [root],
  components: { v2ComponentTest1 },
  methods: {},
  watch: {},
  beforeCreate() {
    let ctx = this;
  },
  created() {
    let ctx = this;

    /**bind**/ ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.testList,
      dataStr: "testList",
      wid: 1560765204194,
      modelKey: "__loopTarget"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.testList,
      dataStr: "testList",
      wid: 1560765241095,
      modelKey: "__loopTarget"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.calendarRange,
      dataStr: "calendarRange",
      wid: 1562725029715,
      modelKey: "range"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.calendarDate,
      dataStr: "calendarDate",
      wid: 1562725029715,
      modelKey: "currentDate"
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