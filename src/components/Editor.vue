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
      <editorContainer
        ref="editorContainer"
        @selected="select=model"
        :class="{selected:select==model}"
      >
        <template v-for="(item,index) of model.children">
          <component
            @selected="select=item.model"
            :class="{selected:select==item.model}"
            :key="index"
            :is="item.component.name"
            :model="item.model"
          ></component>
        </template>
      </editorContainer>
    </div>
  </div>
</template>
<script>
import editorContainer from "./editorContainer";
import Vue from "vue";
export default {
  components: {
    editorContainer
  },
  mounted() {
    this.select = "editorContainier";
  },
  methods: {
    add(item) {
      let i = {
        ...item,
        id: new Date().toString()
      };
      if (this.select) {
        if (!this.select.children) {
          Vue.set(this.select, "children", []);
        }
        this.select.children.push(i);
      }
    }
  },
  data() {
    return {
      select: null,
      palatteConfig: {
        children: [
          {
            name: "容器",
            model: {
              name: "新建容器"
            },
            component: { name: "aContainer" }
          }
        ]
      },
      model: {
        children: [
          {
            id: 1,
            model: {
              name: "容器1"
            },
            component: { name: "aContainer" }
          },
          {
            id: 2,
            model: {
              name: "容器2"
            },
            component: { name: "aContainer" }
          },
          {
            id: 3,
            model: {
              name: "容器3"
            },
            component: { name: "aContainer" }
          }
        ]
      }
    };
  }
};
</script>
<style>
.selected {
  background: lightgray;
  border: 1px solid darkgray;
}
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