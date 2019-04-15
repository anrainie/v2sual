<template>
  <div class="frame">
    <el-container>
      <el-aside width="200px" style="background-color: #efefef">
        <el-input placeholder="输入关键字进行过滤" v-model="asideSearch"></el-input>
        <el-tree
          :data="aside"
          node-key="id"
          style="background-color:transparent"
          default-expand-all
          :filter-node-method="filterPage"
          ref="aside"
          @node-click="showPageFlow"
        ></el-tree>
      </el-aside>

      <el-container>
        <el-header style="background-color:#efefef;">页面流</el-header>

        <el-main></el-main>

        <!-- <el-footer></el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
const api = {
  list: "./v1/page/list",
  content: "./v1/page/content"
};

export default {
  data() {
    return {
      asideSearch: "",
      aside: []
    };
  },
  watch: {
    asideSearch(val) {
      this.$refs.aside.filter(val);
    }
  },

  methods: {
    filterPage(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    showPageFlow(page) {
      this.apis(api.content, {
        params: {
          path: page.id
        }
      }).then(r => {
        if (r.status) {
          this.aside = r.content.map(f => {
            return {
              id: f,
              label: f,
              children: []
            };
          });
        }
      });
    }
  },
  mounted() {
    this.apis(api.list).then(r => {
      if (r.status) {
        this.aside = r.content.map(f => {
          return {
            id: f,
            label: f,
            children: []
          };
        });
      }
    });

    console.log("success");
  }
};
</script>
<style lang="less" scoped>
.frame {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.frame > .el-container {
  height: 100%;
  width: 100%;
}
</style>



