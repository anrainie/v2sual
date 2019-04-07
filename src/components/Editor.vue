<template>
  <div class="editorPart">
    <div class="palatte">
      <div v-for="(item,index) of palatteConfig.children" :key="index">
        <span class="PaletteItem" @click.native="createElement(item)">
          <i :class="item.icon"/>
          <span>{{item.name}}</span>
        </span>
      </div>
    </div>
    <div class="editor">
      <v2Container v-model="rootId"></v2Container>
    </div>
  </div>
</template>
<script>
import { canvas } from "../assets/js/v2-view.js";
import { createTool } from "../assets/js/edit.js";
import { setTimeout } from "timers";

export default {
  mixins: [canvas],
  mounted() {
    // $('.PaletteItem').draggable({
    //   cursor: "move",
    //   cursorAt: { top: -12, left: -20 },
    //   helper: function( event ) {
    //     return $( "<div class='ui-widget-header'>I'm a custom helper</div>" );
    //   }
    // });

    window.Editor = this;
    //模拟异步读取数据
    setTimeout(() => {
      this.$store.commit("init", {
        structure: {
          id: "root",
          component: "v2Container",
          direction: "row",
          layout: [50, 30, 30],
          style: {
            width: "100%",
            height: "100%"
          },
          data: {},
          children: [
            {
              id: "b1145",
              component: "v2-container",
              data: "ba15",
              style: {
                width: "100%",
                height: "100%"
              },
              direction: "col",
              layout: [30, 60],
              children: [
                {
                  id: "fah1",
                  component: "v2Input",
                  data: "badf",
                  style: {
                    height: "40px"
                  }
                },
                {
                  id: "vaf",
                  component: "v2Input",
                  data: "dfa13",
                  style: {
                    height: "40px"
                  }
                }
              ]
            },
            {
              id: "241123",
              component: "v2Input",
              data: "1235",
              style: {
                width: "100px",
                height: "40px"
              }
            },
            {
              id: "vasg123",
              component: "v2Input",
              data: "agqe",
              style: {
                width: "100px",
                height: "50px"
              }
            }
          ]
        }
      });
      this.rootId = "root";
    }, 100);
  },
  methods: {
    initDraggable(e, item) {
      console.log(e, item);
    },
    /**
     *创建元素，传入一个createTool，并且传入element
     */
    createElement(item) {
      let tool = {
        ...createTool,
        element: item.model
      };
      this.$store.setActiveTool(tool);
    }
  },
  data() {
    return {
      palatteConfig: {
        children: [
          {
            name: "容器",
            component: "v2-container",
            factory() {
              return {};
            }
          }
        ]
      },
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
</style>