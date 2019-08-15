<template>
  <div class="app-container">
    <div class="welcome-wrapper">
      <div class="welcome-ctn">
        <img src="../../img/custom-aweb-logo.png" />
        <h1 class="example-header">欢迎使用 AWEB！</h1>
      </div>
    </div>
  </div>
</template>

<script>

import  {mixins} from '@/lib';
export default {
  mixins:[mixins],
  data() {
    return {
      mainList: [
        {
          name: "AWEB 社区",
          href: "https://www.awebide.com/"
        },
        {
          name: "AWEB 开发者中心",
          href: "https://docs.awebide.com"
        },
        {
          name: "资源市场",
          href: "https://market.awebide.com"
        },
        {
          name: "桌面示例",
          href: "https://pc.awebide.com"
        },
        {
          name: "监控示例",
          href: "https://monitor.awebide.com"
        },
        {
          name: "移动示例",
          href: "https://mobile.awebide.com"
        }
      ]
    };
  },
  methods: {
    closeCurrentPage() {
      this.close();
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.app-container {
  text-align: center;
  background: #fff;
  height: 100%;

}

</style>
