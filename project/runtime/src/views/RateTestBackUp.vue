<template>
  <v2container :wid="`root`">
    <el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0">
      <v2container id="1560247080748" :wid="`1560247080748`" :index="0" :pid="`root`">
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:50%;width:100%;"
          key="0"
        >
          <v2loop
            class="V2Widget"
            id="1560334017733"
            :wid="`1560334017733`"
            :index="0"
            :pid="`1560247080748`"
          >
            <template v-slot="scope">
              <v2-form-input
                class="V2Widget"
                :id="`1560334017733-${scope._key}`"
                :wid="`1560334017733-${scope._key}`"
                :index="scope._key"
                :pid="`1560334017733`"
                :cpttype="`loopItem`"
                :$item="scope._item"
                :$key="scope._key"
              ></v2-form-input>
            </template>
          </v2loop>
        </el-row>
        <el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1">
          <v2-form-input
            class="V2Widget"
            id="1560502574246"
            :wid="`1560502574246`"
            :index="1"
            :pid="`1560247080748`"
          ></v2-form-input>
        </el-row>
      </v2container>
    </el-row>
  </v2container>
</template>
<script>
import { root } from "@/utils/v2-view";
export default {
  data() {
    let userList = [
      { id: 1, name: 4, title: "123" },
      { id: 2, name: 5, title: "123" },
      { id: 3, name: 64, title: "123" },
      { id: 4, name: 123, title: "123" },
      { id: 5, name: 134, title: "1223" }
    ];
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
              href: "v2-layout-colctn",
              component: "v2-layout-colctn",
              widget: {
                belongTo: "aui",
                icon: "iconhengxiangbuju",
                type: "layout",
                href: "v2-layout-colctn",
                author: "zhanghaixian@agree.com.cn",
                version: 510000,
                accept: "",
                name: "横向布局",
                option: [
                  {
                    name: "direction",
                    desp: "排列方式",
                    defaultValue: "row",
                    type: "string_select",
                    valueArray: ["row", "col"],
                    despArray: ["横排", "竖排"]
                  },
                  {
                    name: "layout",
                    desp: "栅格",
                    hidden: false,
                    defaultValue: [50, 50],
                    type: "string_input"
                  },
                  {
                    name: "rules",
                    desp: "表单验证",
                    defaultValue: "",
                    type: "single_array",
                    attrInEachElement: [
                      {
                        name: "rule",
                        desp: "规则",
                        defaultValue: "",
                        type: "string_input"
                      }
                    ]
                  },
                  {
                    defaultValue: "",
                    valueArray: ["", "loop"],
                    type: "string_select",
                    desp: "复用类型",
                    despArray: ["无", "循环"],
                    name: "__type"
                  },
                  {
                    desp: "复用数据",
                    defaultValue: "",
                    type: "string_input",
                    name: "__loopTarget"
                  },
                  {
                    desp: "复用数据项ID",
                    defaultValue: "",
                    type: "string_input",
                    name: "__loopKey"
                  }
                ],
                css: {
                  style: [
                    {
                      desp: "容器",
                      cssAttrs:
                        "top right bottom left width height min-width max-width min-height max-height position overflow margin padding",
                      name: "divCtn"
                    }
                  ]
                },
                editor: {
                  name: "v2LayoutEditor",
                  model: {
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
                    customStyle: {}
                  }
                },
                main: "index.vue",
                index: 10000002
              },
              children: [
                {
                  style: {
                    label: {
                      "font-size": "30px",
                      "font-weight": "",
                      color: ""
                    },
                    borderStyle: { "border-color": "" },
                    fontStyle: { color: "" }
                  },
                  label: "$item.title",
                  titleMode: "col",
                  labelWitdh: "80px",
                  placeholder: "请选择",
                  value: "$item.name",
                  clearable: false,
                  disabled: false,
                  isRequired: false,
                  autoComplete: false,
                  suggestion: "",
                  rules: "",
                  __type: "loop",
                  __loopTarget: "userList",
                  __loopKey: "$item.id",
                  __capacity: "3",
                  href: "v2-form-input",
                  component: "v2-form-input",
                  children: [],
                  events: {},
                  id: 1560334017733,
                  pid: 1560247080748
                },
                {
                  style: {
                    label: { "font-size": "", "font-weight": "", color: "" },
                    borderStyle: { "border-color": "" },
                    fontStyle: { color: "" }
                  },
                  label: "标题",
                  titleMode: "col",
                  labelWitdh: "80px",
                  placeholder: "请选择",
                  value: "userList",
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
                  href: "v2-form-input",
                  component: "v2-form-input",
                  children: [],
                  events: {},
                  id: 1560502574246,
                  pid: 1560247080748
                }
              ],
              events: {},
              id: 1560247080748,
              pid: "root"
            }
          ],
          events: {}
        }
      },
      userList
    };
  },
  mixins: [root],
  methods: {},
  watch: {},
  beforeCreate() {
    let ctx = this;
  },
  created() {
    let ctx = this;

    /**bind**/ ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.userList,
      dataStr: "userList",
      wid: 1560334017733,
      modelKey: "__loopTarget"
    });
    ctx.$store.commit("registerBind", {
      dataStr: "$item.id",
      wid: 1560334017733,
      modelKey: "__loopKey"
    });
    ctx.$store.commit("registerBind", {
      dataStr: "$item.name",
      wid: 1560334017733,
      modelKey: "value"
    });
    ctx.$store.commit("registerBind", {
      dataStr: "$item.title",
      wid: 1560334017733,
      modelKey: "label"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.userList,
      dataStr: "userList",
      wid: 1560502574246,
      modelKey: "value"
    }); /**bind over**/
    /**bind over**/
  },
  beforeMount() {
    let ctx = this;
  },
  mounted() {},
  beforeUpdate() {
    let ctx = this;
  },
  updated() {
    let ctx = this;
  },
  beforeDestroy() {
    let ctx = this;
    /**unBind**/ ctx.$store.commit("unbind", this); /**unBind over**/
  },
  destroyed() {
    let ctx = this;
  }
};
</script>