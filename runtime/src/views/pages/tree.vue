<!--
  @desp 树形菜单
-->
<template>
  <div class="app-container">我是tree</div>
</template>

<script>
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
    $$closePage() {
      app.close();
    },

    newPage(){
       app.open({
        status: true,
        title: "新页面",
        page: "pages/table"
      });
    }
  }
};
</script>
