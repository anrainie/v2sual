<template>
  <div>
    <div v-if="showPreview" style="position:fixed;width:100%;height:100%;">
      <div
        v-show="previewLoading"
        v-loading="previewLoading"
        style="position:absolute;width:100%;height:100%;"
      ></div>
      <iframe
        v-show="!previewLoading"
        ref="previewFrame"
        src="http://localhost:8080/#/preview"
        style="width:100%;height:100%;position:absolute;left:0;"
      ></iframe>
    </div>
    <div v-else class="editorPart" onkeydown="console.log">
      <div class="palatte">
        <div class="aui-menu-tilte">菜单</div>
        <div data-role="leftAside" id="auiMenuFrame" class="aui-aside-left aui-tab-pane active">
          <div id="asideTabCtn" class="aui-tabbable">
            <div class="aui-tab-content" data-role="auiTabContent">
              <div class="aui-aside-menu-ctn" id="auiAsidePlatformMenu">
                <div class="aui-widget-set">
                  <div class="aui-widget-set-body">
                    <!-- {{each data as value index}} -->
                    <div
                      class="aui-widget-menu-group"
                      v-for="(value,index) in palatteConfig"
                      :key="index"
                    >
                      <div class="aui-widget-menu-group-header" data-role="menuAngleUpTitle">
                        <i class="aui aui-jiantou-xia aui-menu-angle" :calss="value.angleUp"></i>
                        <span>{{value.name}}</span>
                      </div>

                      <div class="aui-widget-menu-inner">
                        <div class="aui-widget-menu-block" :data-type="value.type">
                          <div class="aui-widget-menu-body" :style="{'display':value.collapse}">
                            <template v-if="value.children">
                              <div
                                v-for="(subValue,i) in value.children"
                                :key="i"
                                class="aui-widget-menu-block paletteItem"
                                :data-type="subValue.type"
                                @click.stop="startCreateElement(subValue)"
                                v-draggable="subValue"
                              >
                                <div
                                  class="aui-widget-menu-group-header"
                                  data-role="menuAngleUpTitle"
                                >
                                  <i
                                    class="aui aui-jiantou-xia aui-menu-angle"
                                    :class="subValue.angleUp"
                                  ></i>
                                  <span>{{subValue.name}}</span>
                                </div>
                              </div>
                            </template>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="editor">
        <v2Container v-model="rootId"></v2Container>
      </div>

      <div class="control">
        <Base/>
      </div>
      <div class="toolbar">
        <el-button size="mini" @click="deleteSelection">删除</el-button>
        <el-button size="mini" @click="selectParent">向上选择</el-button>
        <el-button size="mini" @click="selectFirstChild">向下选择</el-button>
        <el-button size="mini" @click="preview">预览</el-button>
      </div>
      <div
        v-show="showDragHelper"
        style="position:fixed;width:10rem;height:5rem;box-shadow:0 0 5px black;"
        ref="dragHelper"
      >
        <component :is="dragHelper.component" :wid="'helper'"></component>
      </div>
    </div>
  </div>
</template>
<script>
import { canvas } from "../assets/js/v2-view.js";
import { createTool, selectionTool } from "../assets/js/tools.js";
import { setTimeout } from "timers";

import { debug } from "util";
import { constants } from "fs";
import { data } from "../assets/js/dev.js";

export default {
  mixins: [canvas],
  computed: {},
  // data(){}
  mounted() {
    this.$store.commit("setActiveTool", selectionTool);
    const self = this;
    $(window)
      .off(".keymap")
      .on("keydown.keymap", e => {
        return this.activeTool && this.activeTool.dispatchKeyEvent
          ? this.activeTool.dispatchKeyEvent(this, e)
          : true;
      });

    // $(".paletteItem").draggable({
    //   helper: function(event, ui) {
    //     console.log("help", event, ui);
    //     return $(
    //       `<div style='position:fixed;' class='ui-widget-header'>${event}</div>`
    //     );
    //   },
    //   start(event, ui) {
    //     ui.test = 123;
    //     console.log(event, ui);
    //   }
    // });

    //模拟异步读取数据
    setTimeout(() => {
      this.$store.commit("init", data);
      // this.rootId = "root";
    }, 100);
  },
  methods: {
    deleteSelection() {
      this.$store.commit("delete.select");
    },
    selectParent() {
      this.$store.commit("select.parent");
    },
    selectFirstChild() {
      this.$store.commit("select.firstChild");
    },
    preview() {
      this.showPreview = true;
      let self = this;
      self.previewLoading = true;
      setTimeout(() => {
        self.$refs.previewFrame.contentWindow.preview = true;
        self.$refs.previewFrame.contentWindow.data = JSON.parse(
          JSON.stringify(self.$store.state.structure)
        );
        self.$refs.previewFrame.contentWindow.close = () => {
          self.showPreview = false;
        };
        self.$refs.previewFrame.contentWindow.onload = () => {
          console.log("loaded");
          self.previewLoading = false;
        };
        // self.$refs.previewFrame.reload();
      });
    },
    initDraggable(e, item) {
      // console.log(e, item);
    },
    /**
     *创建元素，传入一个createTool，并且传入element
     */
    startCreateElement(item) {
      this.dragHelper = JSON.parse(JSON.stringify(item.element));
      this.$store.commit("regist.index", {
        id: "helper",
        content: this.dragHelper
      });
      this.showDragHelper = true;
      let tool = createTool;
      this.$store.commit("setActiveTool", tool);
      tool.setElement(item.element);
    },
    createDragHelper(item) {
      console.log(this.$refs.dragHelper);
      return this.$refs.dragHelper;
    },
    finishCreateElement() {
      this.showDragHelper = false;
    },
    /*设置聚焦节点*/
    mouseEven(e) {
      this.$store.commit("setInputActive", $(e.target).attr("index"));
    },
    /*按键事件*/
    btnEven(e) {
      let keyCode = e.keyCode,
        focusIndex = parseInt(this.$store.state.inputEl.focusIndex),
        inputArr = this.$store.state.inputEl.inputArr,
        maxLen = inputArr.length;

      if (keyCode === 40 && focusIndex < 9) {
        $(inputArr[focusIndex + 3]).focus();
      } else if (keyCode === 38 && focusIndex > 2) {
        $(inputArr[focusIndex - 3]).focus();
      } else if (keyCode === 13 && focusIndex < maxLen - 1) {
        $(inputArr[focusIndex + 1]).focus();
      }
    }
  },
  data() {
    return {
      dragHelper: {
        id: "helper",
        component: ""
      },
      showDragHelper: false,
      previewLoading: false,
      showPreview: false,
      palatteConfig: [
        {
          type: "ctn",
          name: "页面容器",
          icon: "fa fa-align-center",
          angleUp: "",
          collapse: "block",
          children: [
            {
              type: "v2Container",
              icon: "fa fa-wrench",
              angleUp: "",
              collapse: "block",
              name: "纵向布局",
              element: {
                component: "v2Container",
                style: {
                  width: "100%",
                  height: "100%"
                },
                direction: "col",
                layout: [50, 50],
                children: []
              },
              factory() {
                return {};
              }
            },
            {
              type: "v2Container",
              icon: "fa fa-wrench",
              angleUp: "",
              collapse: "block",
              name: "横向布局",
              element: {
                component: "v2Container",
                style: {
                  width: "100%",
                  height: "100%"
                },
                direction: "row",
                layout: [50, 50],
                children: []
              },
              factory() {
                return {};
              }
            }
          ]
        },

        {
          type: "component",
          name: "功能组件",
          icon: "fa fa-align-center",
          angleUp: "",
          collapse: "block",
          children: [
            {
              type: "v2Input",
              name: "文本框",
              icon: "fa fa-wrench",
              angleUp: "",
              collapse: "block",
              element: {
                component: "v2Input",
                style: {
                  width: "100%",
                  height: "100%"
                },
                data: "文本框"
              },
              factory() {
                return {};
              }
            },
            {
              name: "下拉框",
              element: {
                component: "v2Combo",
                style: {
                  width: "100%",
                  height: "100%"
                },
                data: {
                  name: "名称",
                  value: 0,
                  options: [
                    { value: 0, label: "选项一" },
                    { value: 1, label: "选项二" },
                    { value: 2, label: "选项三" }
                  ],
                  placeholder: "请选择"
                }
              }
            },
            {
              type: "v2Switch",
              name: "开关",
              icon: "fa fa-wrench",
              angleUp: "",
              collapse: "block",
              element: {
                component: "v2Switch",
                children: [],
                data: {
                  title: "开关",
                  value: true,
                  activeText: "开",
                  inactiveText: "关"
                },
                option: [
                  {
                    componentType: "",
                    hidden: false,
                    defaultValue: "switch1",
                    valueArray: "",
                    type: "string_input",
                    appendNumber: 1,
                    titleKey: "",
                    desp: "标题",
                    formatter: "",
                    isAdvanced: false,
                    idUniqueSpace: "",
                    dataList: "",
                    hasEvent: false,
                    name: "title",
                    details: "",
                    placeholder: "",
                    edmKey: "",
                    despArray: "",
                    direction: "",
                    validate: {
                      errorMessage: "",
                      type: ""
                    }
                  },
                  {
                    componentType: "",
                    hidden: false,
                    defaultValue: true,
                    valueArray: "",
                    type: "boolean",
                    appendNumber: 1,
                    titleKey: "",
                    desp: "开关的值",
                    formatter: "",
                    isAdvanced: false,
                    idUniqueSpace: "",
                    dataList: "",
                    hasEvent: false,
                    name: "value",
                    details: "",
                    placeholder: "",
                    edmKey: "",
                    despArray: "",
                    direction: "",
                    validate: {
                      errorMessage: "",
                      type: ""
                    }
                  },
                  {
                    componentType: "",
                    hidden: false,
                    defaultValue: "switch1",
                    valueArray: "",
                    type: "string_input",
                    appendNumber: 1,
                    titleKey: "",
                    desp: "激活的文本",
                    formatter: "",
                    isAdvanced: false,
                    idUniqueSpace: "",
                    dataList: "",
                    hasEvent: false,
                    name: "activeText",
                    details: "",
                    placeholder: "",
                    edmKey: "",
                    despArray: "",
                    direction: "",
                    validate: {
                      errorMessage: "",
                      type: ""
                    }
                  },
                  {
                    componentType: "",
                    hidden: false,
                    defaultValue: "switch1",
                    valueArray: "",
                    type: "string_input",
                    appendNumber: 1,
                    titleKey: "",
                    desp: "未激活的文本",
                    formatter: "",
                    isAdvanced: false,
                    idUniqueSpace: "",
                    dataList: "",
                    hasEvent: false,
                    name: "inactiveText",
                    details: "",
                    placeholder: "",
                    edmKey: "",
                    despArray: "",
                    direction: "",
                    validate: {
                      errorMessage: "",
                      type: ""
                    }
                  }
                ]
              },

              factory() {
                return {};
              }
            },
            {
              name: "多选框",
              element: {
                component: "v2Checkbox",
                style: {
                  width: "100%",
                  height: "100%"
                },
                data: {
                  checked: false,
                  text: "文字"
                }
              }
            },
            {
              name: "表格",
              element: {
                component: "v2Table",
                style: {
                  width: "100%",
                  height: "100%",
                  overflow: "auto"
                },
                data: {
                  value: [
                    {
                      cname: "中文名1",
                      ename: "英文名1",
                      desc: "描述1"
                    },
                    {
                      cname: "中文名2",
                      ename: "英文名2",
                      desc: "描述2"
                    },
                    {
                      cname: "中文名3",
                      ename: "英文名3",
                      desc: "描述3"
                    }
                  ],
                  columns: [
                    {
                      name: "英文名",
                      key: "ename",
                      width: 100
                    },
                    {
                      name: "中文名",
                      key: "cname",
                      width: 100
                    },
                    {
                      name: "描述",
                      key: "desc",
                      width: 200
                    }
                  ]
                }
              }
            }
          ]
        }
      ]
    };
  }
};
</script>
<style>
.testInput {
  width: 100px;
  height: 40px;
  position: relative;
  background: yellow;
  margin: 10px;
}
.editorPart {
  margin: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
}

.palatte {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: #eeeef2;
  border: 1px solid #ccc;
  -webkit-box-shadow: 0 0 2px #000;
  -moz-box-shadow: 0 0 2px #000;
  box-shadow: 0 0 2px #000;
}

.editor {
  flex: 6;
  height: 100%;
  overflow-y: auto;
  padding: 0.6em;
  background: #fff;
  border: 1px solid #ccc;
  margin: 0 0.8em;
}
.control {
  flex: 2;
  height: 100%;
  overflow-y: auto;
  overflow-x: none;
  display: flex;
  flex-direction: column;
  background: #eeeef2;
  border: 1px solid #ccc;
}
.toolbar {
  position: fixed;
  padding: 2px;
  border: 1px solid darkcyan;
  box-shadow: 0 1px 1px #000;
  left: 40%;
  opacity: 0.2;
}

.toolbar:hover {
  opacity: 1;
}
/* 打印样式 */
@media print {
  .palatte {
    display: none;
  }
  .selected {
    border: none;
  }
  .editor {
    margin: 0;
    padding: 0 5px;
    box-sizing: border-box;
    border: 1px solid #000;
  }
}
</style>
