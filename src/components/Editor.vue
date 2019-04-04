<template>
  <div class="editorPart">
    <div class="palatte">
      <div v-for="(item,index) of palatteConfig.children" :key="index">
        <span @dblclick="add(item)">
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
import { setTimeout } from "timers";

import Vue from "Vue";

export default {
  mixins: [canvas],
  mounted() {
    window.Editor = this;
    //模拟异步读取数据
    setTimeout(() => {
      this.store.commit("init", {
        structure: {
          id: "root",
          component: "v2Container",
          direction: "row",
          layout: [30, 30, 30],
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
  methods: {},
  data() {
    return {
      palatteConfig: {
        children: [
          {
            name: "容器"
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
  display: flex;
  position: relative;
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
}
</style>