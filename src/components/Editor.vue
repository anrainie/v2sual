<template>
  <div class="editorPart" onkeydown="console.log">
    <div class="palatte">
     
      <!-- <div v-for="(item,index) of palatteConfig" :key="index" @click.stop="createElement(item)">
        <span class="PaletteItem">
          <i :class="item.icon"/>
          <span>{{item.name}}</span>
        </span>
      </div> -->

      <div class="aui-menu-tilte">菜单</div>
      <div data-role="leftAside" id="auiMenuFrame" class="aui-aside-left aui-tab-pane active">
          <div id="asideTabCtn" class="aui-tabbable">
            <div class="aui-tab-content" data-role="auiTabContent">
              <div class="aui-aside-menu-ctn" id="auiAsidePlatformMenu">
                <div class="aui-widget-set">
                  <div class="aui-widget-set-body">
                      <!-- {{each data as value index}} -->
                      <div class="aui-widget-menu-group" v-for="(value,index) in palatteConfig" :key="index">
                          <div class="aui-widget-menu-group-header" data-role="menuAngleUpTitle">
                              <i class="aui aui-jiantou-xia aui-menu-angle" :calss="value.angleUp"></i><span>{{value.name}}</span>
                          </div>

                          <div class="aui-widget-menu-inner">
                              <div class="aui-widget-menu-block" :data-type="value.type">
                                  <div class="aui-widget-menu-body" :style="{'display':value.collapse}">
                            
                                    <template  v-if="value.children">
                                      <div  v-for="(subValue,i) in value.children"  :key="i" class="aui-widget-menu-block" :data-type="subValue.type" @click.stop="createElement(subValue)">
                                          <div class="aui-widget-menu-group-header" data-role="menuAngleUpTitle">
                                              <i class="aui aui-jiantou-xia aui-menu-angle" :class="subValue.angleUp"></i><span>{{subValue.name}}</span>
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
          <Base />
      <!-- <layoutControl style="flex:3;width:99%;border:1px solid lightgray;"></layoutControl> -->
      
      <!-- <component :is="component(index)" :wid="wigetId(index)" :index="index"></component> -->
    </div>
  </div>
</template>
<script>
import { canvas } from "../assets/js/v2-view.js";
import { createTool, selectionTool } from "../assets/js/tools.js";
import { setTimeout } from "timers";
import layoutControl from "./control/LayoutControl";

import { debug } from "util";
import { constants } from "fs";

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

    //模拟异步读取数据
    setTimeout(() => {
      this.$store.commit("init", {
        structure: {
          id: "root",
          component: "v2Container",
          direction: "row",
          layout: [10, 10, 10, 10, 10, 10, 10, 10],
          style: {
            width: "100%",
            height: "100%"
          },
          data: {},
          children: [
            {
              id: "title1",
              component: "v2Title",
              style: {},
              data: "基本信息"
            },
            {
              id: "row1",
              component: "v2Container",
              direction: "col",
              layout: [33, 33, 33],
              style: {
                width: "100%",
                height: "100%"
              },
              data: {},
              children: [
                {
                  id: "input_name",
                  component: "v2LableInput",
                  index: 0,
                  data: "",
                  label: "姓名",
                  placeholder: "请输入姓名"
                },
                {
                  id: "input_company",
                  index: 1,
                  component: "v2LableInput",
                  data: "",
                  label: "单位名称",
                  placeholder: "请输入单位名称"
                },
                {
                  id: "input_address",
                  index: 2,
                  component: "v2LableInput",
                  data: "",
                  label: "通讯地址",
                  placeholder: "请输入通讯地址"
                }
              ]
            },
            {
              id: "row2",
              component: "v2Container",
              direction: "col",
              layout: [33, 33, 33],
              style: {
                width: "100%",
                height: "100%"
              },
              data: {},
              children: [
                {
                  id: "input_tel",
                  index: 3,
                  component: "v2LableInput",
                  data: "",
                  label: "电话",
                  placeholder: "请输入电话"
                },
                {
                  id: "input_certificate",
                  index: 4,
                  component: "v2LableInput",
                  data: "",
                  label: "证件类型",
                  placeholder: "请输入证件类型"
                },
                {
                  id: "input_post",
                  index: 5,
                  component: "v2LableInput",
                  data: "",
                  label: "邮政编码",
                  placeholder: "请输入邮政编码"
                }
              ]
            },
            {
              id: "title2",
              component: "v2Title",
              style: {},
              data: "管理员信息"
            },
            {
              id: "row3",
              component: "v2Container",
              direction: "col",
              layout: [33, 33, 33],
              style: {
                width: "100%",
                height: "100%"
              },
              data: {},
              children: [
                {
                  id: "input_operator",
                  index: 6,
                  component: "v2LableInput",
                  data: "",
                  label: "管理员姓名",
                  placeholder: "请输入管理员姓名"
                },
                {
                  id: "input_operatorNum",
                  index: 7,
                  component: "v2LableInput",
                  data: "",
                  label: "管理员编号",
                  placeholder: "请输入管理员编号"
                },
                {
                  id: "input_apply",
                  index: 8,
                  component: "v2LableInput",
                  data: "",
                  label: "申请证书",
                  placeholder: "请输入申请证书"
                }
              ]
            },
            {
              id: "title3",
              component: "v2Title",
              style: {},
              data: "账户信息"
            },
            {
              id: "row4",
              component: "v2Container",
              direction: "col",
              layout: [25, 25, 25, 24],
              style: {
                width: "100%",
                height: "100%"
              },
              data: {},
              children: [
                {
                  id: "input_account",
                  index: 9,
                  component: "v2LableInput",
                  data: "",
                  label: "账号",
                  placeholder: "请输入账号"
                },
                {
                  id: "input_bank",
                  index: 10,
                  component: "v2LableInput",
                  data: "",
                  label: "开户行名称",
                  placeholder: "请输入开户行名称"
                },
                {
                  id: "input_accontName",
                  index: 11,
                  component: "v2LableInput",
                  data: "",
                  label: "账户名称",
                  placeholder: "请输入账户名称",
                  focusEven: this.mouseEven,
                  keyupEven: this.btnEven
                },
                {
                  id: "switch1",
                  index: 12,
                  component: "v2Switch",
                  data: {
                    titleStyle: {},
                    imgStyle: {},
                    iconStyle: {},
                    switchListStyle: {},
                    switchStyle: {},
                    switchNotChecked: {},
                    switchChecked: {},
                    swtichInnerStyle: {},
                    disabled: false,
                    value: true,
                    title: "开关",
                    icon: "",
                    img: "",
                    value: true
                  },
                  style: {},

                  option: [
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
                      defaultValue: false,
                      valueArray: "",
                      type: "boolean",
                      appendNumber: 1,
                      titleKey: "",
                      desp: "是否置灰",
                      formatter: "",
                      isAdvanced: false,
                      idUniqueSpace: "",
                      dataList: "",
                      hasEvent: false,
                      name: "disabled",
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
                      defaultValue: "icon",
                      valueArray: ["img", "icon"],
                      type: "string_select",
                      appendNumber: 1,
                      titleKey: "",
                      desp: "图片图标",
                      formatter: "",
                      isAdvanced: false,
                      idUniqueSpace: "",
                      dataList: "",
                      hasEvent: false,
                      name: "imgIcon",
                      details: "",
                      placeholder: "",
                      edmKey: "",
                      despArray: ["图片", "图标"],
                      direction: "",
                      validate: {
                        errorMessage: "",
                        type: ""
                      }
                    },
                    {
                      componentType: "",
                      hidden: false,
                      defaultValue: "",
                      require: {
                        imgIcon: ["icon"]
                      },
                      valueArray: "",
                      type: "icon",
                      appendNumber: 1,
                      titleKey: "",
                      desp: "图标",
                      formatter: "",
                      isAdvanced: false,
                      idUniqueSpace: "",
                      dataList: "",
                      hasEvent: false,
                      name: "icon",
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
                      defaultValue: "",
                      require: {
                        imgIcon: ["img"]
                      },
                      valueArray: "",
                      type: "file",
                      appendNumber: 1,
                      titleKey: "",
                      desp: "图片",
                      formatter: "",
                      isAdvanced: false,
                      idUniqueSpace: "",
                      dataList: "",
                      hasEvent: false,
                      name: "img",
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
                }
              ]
            },
            {
              id: "row14",
              component: "v2Container",
              direction: "col",
              layout: [33, 33, 33],
              style: {
                width: "100%",
                height: "100%"
              },
              children: [
                {
                  id: "complexComponent1",
                  component: "v2ComplextWidget",
                  layout: [30, 30],
                  direction: "row",
                  children: [
                    {
                      id: "input_bank1",
                      index: 10,
                      component: "v2LableInput",
                      data: "",
                      label: "开户行名称",
                      placeholder: "请输入开户行名称"
                    },
                    {
                      id: "input_accontName2",
                      index: 11,
                      component: "v2LableInput",
                      data: "",
                      label: "账户名称",
                      placeholder: "请输入账户名称"
                    }
                  ]
                },
                null,
                null
              ]
            }
          ]
        }
      });
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
    createElement(item) {
      let tool = {
        ...createTool,
        element: item.element
      };
      this.$store.commit("setActiveTool", tool);
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
                component: "v2-container",
                style: {
                  width: "100%",
                  height: "100%"
                },
                direction: "col",
                layout: [30, 10, 20],
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
                component: "v2-container",
                style: {
                  width: "100%",
                  height: "100%"
                },
                direction: "row",
                layout: [30, 10, 20],
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
                component: "v2-input",
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
              type: "v2Switch",
              name: "开关",
              icon: "fa fa-wrench",
              angleUp: "",
              collapse: "block",
              element: {
                component: "v2-switch",
                children: []
              },
              factory() {
                return {};
              }
            }
          ]
        }
      ],
      // palatteConfig: [
      //   {
      //     name: "纵向布局",
      //     element: {
      //       component: "v2-container",
      //       style: {
      //         width: "100%",
      //         height: "100%"
      //       },
      //       direction: "col",
      //       layout: [30, 10, 20],
      //       children: []
      //     },
      //     factory() {
      //       return {};
      //     }
      //   },
      //   {
      //     name: "横向布局",
      //     element: {
      //       component: "v2-container",
      //       style: {
      //         width: "100%",
      //         height: "100%"
      //       },
      //       direction: "row",
      //       layout: [30, 10, 20],
      //       children: []
      //     },
      //     factory() {
      //       return {};
      //     }
      //   },
      //   {
      //     name: "文本框",
      //     element: {
      //       component: "v2-input",
      //       style: {
      //         width: "100%",
      //         height: "100%"
      //       },
      //       data: "文本框"
      //     },
      //     factory() {
      //       return {};
      //     }
      //   },
      //   {
      //     name: "开关",
      //     element: {
      //       component: "v2-switch",

      //       children: []
      //     },
      //     factory() {
      //       return {};
      //     }
      //   }
      // ],
      rootId: null
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
  -webkit-box-shadow: 0 0 1em #000;
  -moz-box-shadow: 0 0 1em #000;
  box-shadow: 0 0 1em #000;
}

.editor {
  flex: 6;
  height: 100%;
  overflow-y: auto;
}
.control {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  overflow-x: none;
  display: flex;
  flex-direction: column;
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
