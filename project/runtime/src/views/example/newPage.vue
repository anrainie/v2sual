<!--
    @desp 新页面
    @version 0.1
    @author zhanghaixian@agree.com.cn
-->
<template>
  <div class="app-container">
    新页面
    <span>传递的参数:{{this.$route.query.id}}</span>
    <el-row>
      <el-button type="success" @click="closeCurrentPage">关闭当前页</el-button>
    </el-row>
  </div>
</template>

<script>
import { app } from "@/lib/mixin";
export default {
  data() {
    return {};
  },
  filters: {},
  created() {},
  methods: {
    /**
     * @desp 关闭当前页面
     */
    closeCurrentPage() {
      app.close({
        vm: this
      });
    },
    /**
     * @desp 打开表格页面
     *
     */
    openTable() {
      app.open({
        status: true,
        title: "新页面11",
        page: "/example/table"
      });
    }
  },
  mounted() {
    console.log("当前页面参数", this.$route.query);
    console.log("当前页面参数", JSON.stringify(app.getParams()));
  }
};
</script>
<style lang="less">
.app-container {
  text-align: center;
}
</style>
