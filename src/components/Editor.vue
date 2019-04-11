<template>
  <div>
    <div v-if="showPreview" style="position:fixed;width:100%;height:100%;">
      <div
        v-show="previewLoading"
        v-loading="previewLoading"
        element-loading-text="加载预览中..."
        element-loading-background="rgba(0, 0, 0, 0.8)"
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
        <layoutControl :store="$store" style="flex:3;width:99%;border:1px solid lightgray;"></layoutControl>
        <!-- <component :is="component(index)" :wid="wigetId(index)" :index="index"></component> -->
      </div>
      <div class="toolbar">
        <el-button size="mini" @click="deleteSelection">删除</el-button>
        <el-button size="mini" @click="selectParent">向上选择</el-button>
        <el-button size="mini" @click="selectFirstChild">向下选择</el-button>
        <el-button size="mini" @click="preview">预览</el-button>
      </div>
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
              layout: [33, 33, 33],
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
                  placeholder: "请输入账户名称"
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
          name: "纵向布局",
          element: {
            component: "v2-container",
            style: {
              width: "100%",
              height: "100%"
            },
            direction: "col",
            layout: [50, 50],
            children: []
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
            layout: [50, 50],
            children: []
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
          }
        },
        {
          name: "下拉框",
          element: {
            component: "v2-combo",
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
          name: "开关",
          element: {
            component: "v2-switch",
            style: {
              width: "100%",
              height: "100%"
            },
            data: {
              value: false,
              activeText: "打开",
              inactiveText: "关闭"
            }
          }
        },
        {
          name: "多选框",
          element: {
            component: "v2-checkbox",
            style: {
              width: "100%",
              height: "100%"
            },
            data: {
              checked: false,
              text: "文字"
            }
          }
        }
      ]
      // rootId: null
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
