<template>
  <div class="editorPart" onkeydown="console.log">
    <div class="palatte">
      <div v-for="(item,index) of palatteConfig" :key="index" @click.stop="createElement(item)">
        <span class="PaletteItem">
          <i :class="item.icon"/>
          <span>{{item.name}}</span>
        </span>
      </div>
    </div>
    <div class="editor">
      <v2Container v-model="rootId"></v2Container>
    </div>
        <div class="control">
          <Base></Base>
      <!-- <layoutControl style="flex:3;width:99%;border:1px solid lightgray;"></layoutControl> -->
      
      <!-- <component :is="component(index)" :wid="wigetId(index)" :index="index"></component> -->
    </div>
  </div>
</template>
<script>
import { canvas } from "../assets/js/v2-view.js";
import { createTool } from "../assets/js/edit.js";
import { setTimeout } from "timers";
import layoutControl from "./control/LayoutControl";

import { debug } from "util";
import { constants } from "fs";

export default {
  mixins: [canvas],
  computed: {},
  // data(){}
  mounted() {
    // $('.PaletteItem').draggable({
    //   cursor: "move",
    //   cursorAt: { top: -12, left: -20 },
    //   helper: function( event ) {
    //     return $( "<div class='ui-widget-header'>I'm a custom helper</div>" );
    //   }
    // });

    // .onkeydown = e => {
    //   console.log(e);
    //   console.log(this.$store.getters.firstSelection);
    //   console.log(this.$store.state.UIData.focusTarget);
    // };
    // window.Editor = this;

    const self = this;
    $(this.window)
      .off(".keymap")
      .on("keydown.keymap", function(e) {
        var key = e.which || window.event.keyCode,
          $target = $(e.target || event.srcElement),
          result = true;
        if (
          $target.closest(".editor").length &&
          $target.closest(".editorPart").is(self.$el)
        ) {
          console.log(e);
          result = false;
          debugger;
          // $target.trigger('keydown',e);
        }

        return true;
      });
    //模拟异步读取数据
    setTimeout(() => {
      this.$store.commit("init", {
        structure: {
          id: "root",
          component: "v2Container",
          direction: "row",
          layout: [10, 10, 10, 10, 10, 10, 10],
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
                  placeholder: "请输入姓名",
                  keyupEven: this.btnEven,
                  focusEven: this.mouseEven
                },
                {
                  id: "input_company",
                  index: 1,
                  component: "v2LableInput",
                  data: "",
                  label: "单位名称",
                  placeholder: "请输入单位名称",
                  keyupEven: this.btnEven,
                  focusEven: this.mouseEven
                },
                {
                  id: "input_address",
                  index: 2,
                  component: "v2LableInput",
                  data: "",
                  label: "通讯地址",
                  placeholder: "请输入通讯地址",
                  focusEven: this.mouseEven,
                  keyupEven: this.btnEven
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
                  placeholder: "请输入电话",
                  focusEven: this.mouseEven,
                  keyupEven: this.btnEven
                },
                {
                  id: "input_certificate",
                  index: 4,
                  component: "v2LableInput",
                  data: "",
                  label: "证件类型",
                  placeholder: "请输入证件类型",
                  focusEven: this.mouseEven,
                  keyupEven: this.btnEven
                },
                {
                  id: "input_post",
                  index: 5,
                  component: "v2LableInput",
                  data: "",
                  label: "邮政编码",
                  placeholder: "请输入邮政编码",
                  focusEven: this.mouseEven,
                  keyupEven: this.btnEven
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
                  placeholder: "请输入管理员姓名",
                  focusEven: this.mouseEven,
                  keyupEven: this.btnEven
                },
                {
                  id: "input_operatorNum",
                  index: 7,
                  component: "v2LableInput",
                  data: "",
                  label: "管理员编号",
                  placeholder: "请输入管理员编号",
                  focusEven: this.mouseEven,
                  keyupEven: this.btnEven
                },
                {
                  id: "input_apply",
                  index: 8,
                  component: "v2LableInput",
                  data: "",
                  label: "申请证书",
                  placeholder: "请输入申请证书",
                  focusEven: this.mouseEven,
                  keyupEven: this.btnEven
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
                  placeholder: "请输入账号",
                  focusEven: this.mouseEven,
                  keyupEven: this.btnEven
                },
                {
                  id: "input_bank",
                  index: 10,
                  component: "v2LableInput",
                  data: "",
                  label: "开户行名称",
                  placeholder: "请输入开户行名称",
                  focusEven: this.mouseEven,
                  keyupEven: this.btnEven
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
                      value: true,
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
            }
          ]
        }
      });
      this.rootId = "root";
    }, 100);
  },
  methods: {
    initDraggable(e, item) {
      // console.log(e, item);
    },
    /**
     *创建元素，传入一个createTool，并且传入element
     */
    // createElement(item) {
    //   let tool = {
    //     ...createTool,
    //     element: item.element
    //   };
    //   this.$store.commit("setActiveTool", tool);
    // },
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
      palatteConfig: [
        {
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
        },
        {
          name: "文本框",
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
          name: "开关",
          element: {
            component: "v2-switch",

            children: []
          },
          factory() {
            return {};
          }
        }
      ],
      rootId: null
    };
  }
};
</script>
<style>
.editorPart {
  margin: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
}

.palatte {
  flex: 1;
  background: lightblue;
  border: 1px solid lightsalmon;
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
