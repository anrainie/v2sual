<template></template>
<script>
export default {
  methods: {
    details() {
      /**
       * @desp 查看用户操作详情
       */
      app.open({
        status: true,
        title: "查看用户操作详情",
        path: "演示0515/details", //相当于页面的id，也是页面的路由
        page: "演示0515/details", //vue页面组件的路径
        type: "BLANK"
      });
    }
  }
};
</script>
