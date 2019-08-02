<template>
  <v2container :wid="`root`" style="width:300px;height:250px">
    <el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0">
      <v2container id="1562555288130" :wid="`1562555288130`" :index="0" :pid="`root`">
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:71%;width:100%;"
          key="0"
        >
          <v2-component-image
            class="V2Widget"
            id="1562567721615"
            :wid="`1562567721615`"
            :index="0"
            :pid="`1562555288130`"
          ></v2-component-image>
        </el-row>
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:29%;width:100%;"
          key="1"
        >
          <v2-switchable
            class="V2Widget"
            id="1562835279687"
            :wid="`1562835279687`"
            :index="1"
            :pid="`1562555288130`"
            activeindex="showButton"
          >
            <template>
              <v2container
                class="V2Widget"
                id="1562835286611"
                :wid="`1562835286611`"
                :index="0"
                :pid="`1562835279687`"
                v-if="showButton==0"
              >
                <v2-component-text
                  class="V2Widget"
                  id="1562835293126"
                  :wid="`1562835293126`"
                  :index="0"
                  :pid="`1562835286611`"
                ></v2-component-text>
              </v2container>
              <v2container
                class="V2Widget"
                id="1562835291091"
                :wid="`1562835291091`"
                :index="1"
                :pid="`1562835279687`"
                v-if="showButton==1"
              >
                <v2loop
                  class="V2Widget"
                  id="1562902981931"
                  :wid="`1562902981931`"
                  :index="0"
                  :pid="`1562835291091`"
                >
                  <template v-slot="scope">
                    <v2-component-btn
                      class="V2Widget"
                      :id="`1562902981931-${scope._key}`"
                      :wid="`1562902981931-${scope._key}`"
                      :index="scope._key"
                      :pid="`1562902981931`"
                      :cpttype="`loopItem`"
                      :$item="scope._item"
                      :$key="scope._key"
                    ></v2-component-btn>
                  </template>
                </v2loop>
              </v2container>
            </template>
          </v2-switchable>
        </el-row>
      </v2container>
    </el-row>
  </v2container>
</template>
<script>
import { root, cpt, widget } from "@/utils/v2-view";

export default {
  computed: {
    root() {
      return this.$parent.$store.root;
    }
  },
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
              layout: [71, 29],
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
              customStyle: { opacity: 1, "border-radius": "0px" },
              component: "v2-layout",
              href: "v2-layout",
              children: [
                {
                  style: {},
                  src: "img/bankCard.png",
                  height: "100%",
                  width: "100%",
                  __type: "",
                  __loopTarget: "",
                  __capacity: "1",
                  component: "v2-component-image",
                  href: "v2-component-image",
                  children: [],
                  events: {},
                  id: 1562567721615,
                  pid: 1562555288130
                },
                {
                  style: {
                    iWarpStyle: {
                      "background-color": "",
                      margin: "",
                      padding: ""
                    }
                  },
                  activeIndex: "showButton",
                  __type: "",
                  __loopTarget: "",
                  __capacity: "1",
                  component: "v2-switchable",
                  href: "v2-switchable",
                  children: [
                    {
                      id: 1562835286611,
                      pid: 1562835279687,
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
                          text: "招商银行 | 一卡通",
                          editable: false,
                          __type: "",
                          __loopTarget: "",
                          __capacity: "1",
                          component: "v2-component-text",
                          href: "v2-component-text",
                          children: [],
                          events: {},
                          id: 1562835293126,
                          pid: 1562835286611
                        }
                      ]
                    },
                    {
                      id: 1562835291091,
                      pid: 1562835279687,
                      component: "v2Container",
                      layout: [100],
                      position: "row",
                      children: [
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
                          btnName: "${$item.name}",
                          shape: "def",
                          loading: false,
                          disabled: false,
                          __type: "loop",
                          __loopTarget: "list",
                          __capacity: "3",
                          component: "v2-component-btn",
                          href: "v2-component-btn",
                          children: [],
                          events: {},
                          id: 1562902981931,
                          pid: 1562835291091
                        }
                      ]
                    }
                  ],
                  events: {},
                  customEditor: "v2EditorSwitch",
                  id: 1562835279687,
                  pid: 1562555288130
                }
              ],
              events: {},
              realSize: [null, null],
              id: 1562555288130,
              pid: "root"
            }
          ],
          events: {}
        }
      }
    };
  },
  props: {
    showButton: {
      default: () => {
        return 0;
      }
    },
    list: {
      default: () => {
        return [{ name: "A" }, { name: "B" }, { name: "C" }];
      }
    }
  },
  mixins: [root, cpt, widget],

  methods: {},
  watch: {},
  beforeCreate() {
    let ctx = this;

    /*overview*/
    (async () => {
      const t1 = await console.log(1);
      $(this.$el).on("mouseenter", e => {
        this.showButton = 1;
      });

      $(this.$el).on("mouseleave", e => {
        this.showButton = 0;
      });
    })();
    /*overview over*/
  },
  created() {
    let ctx = this;

    /**bind**/ ctx.$store.commit("registerBind", {
      dataStr: "$item.name",
      wid: 1562902981931,
      modelKey: "btnName"
    });
    ctx.$store.commit("registerBind", {
      vueObj: this,
      data: this.list,
      dataStr: "list",
      wid: 1562902981931,
      modelKey: "__loopTarget"
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