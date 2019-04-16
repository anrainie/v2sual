<!--
    @desp 汇总页面
	@version 0.1
	@author zhanghaixian@agree.com.cn
-->
<template>
  <section>
    <el-row>
      <el-button type="success" @click="openNewPage">打开新页面</el-button>
      <el-button type="primary" @click="openSubPage">打开子页面</el-button>
      <el-button type="info" @click="openWindowPage">打开新窗口页面</el-button>
      <el-button type="warning" @click="openSelfpage">打开自身页面</el-button>
    </el-row>
  </section>
</template>
<script>
import { app } from "@/utils/app.js";
import { setTimeout } from "timers";

export default {
  data() {
    return {};
  },
  methods: {
    /**
     *  @desp 打开新页面A-Test
     */
    openNewPage() {
      app.open({
        status: true,
        title: "新页面",
        page: "pages/tree"
      });
    },
    /**
     *  @desp 打开子页面-Test
     */
    openSubPage() {
      app.open({
        status: true,
        title: "子页面",
        page: "pages/tree",
        type: "SUB",
        vm: this, //必填
        confirmCallback: () => {
          console.log("点击确定");
        },
        cancelCallback: e => {
          console.log("点击取消");
          setTimeout(
            () =>
              app.open({
                status: true,
                title: "404页面",
                page: "spa/404",
                type: "SUB"
              }),
            20
          );
        }
      });
    },
    /**
     *  @desp 打开新窗口-Test
     */
    openWindowPage() {
      app.open({
        status: true,
        title: "window页面",
        page: "pages/table",
        type: "WINDOW"
      });
    },
    /**
     *  @desp 覆盖自身页面-Test
     */
    openSelfpage() {
      app.open({
        status: true,
        title: "自身页面",
        page: "pages/tree",
        type: "SELF"
      });
    }
  },
  mounted() {}
};
</script>
