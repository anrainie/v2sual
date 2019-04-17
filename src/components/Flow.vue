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

        <el-main>
          <div data-role="topo"></div>
        </el-main>

        <!-- <el-footer></el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import "../assets/topology-jquery/index";

const api = {
  list: "./v1/page/list",
  content: "./v1/page/content"
};

export default {
  data() {
    return {
      asideSearch: "",
      aside: [],
      pageFlow: []
    };
  },
  watch: {
    asideSearch(val) {
      this.$refs.aside.filter(val);
    },
    pageFlow() {
      //加载右侧内容
      $("[data-role=topo]", this.$el)
        .empty()
        .topology({
          data: [...this.pageFlow],
          setType: item => item.type,
          renderLabel: item => {
            switch (item.catalog) {
              case "method":
                return `onEvent:${item.label}`;
                break;
              case "page":
              default:
                return item.label;
            }
          }
        });
    }
  },

  methods: {
    // 搜索
    filterPage(value, data) {
      if (!value) return true;
      return data.id.indexOf(value) !== -1;
    },
    // 显示页面流
    showPageFlow(page) {
      if (!page.children || !page.children.length) {
        this.apis(api.content, {
          params: {
            path: page.id
          }
        }).then(r => {
          if (r.status) {
            this.pageFlow.splice(0, this.pageFlow.length);
            this.pageFlow.push({
              label: r.content.label,
              children: r.content.children
            });
            //   this.aside = r.content.map(f => {
            //     return {
            //       id: f,
            //       label: f,
            //       children: []
            //     };
            //   });
          }
        });
      }
    }
  },
  mounted() {
    //加载左侧菜单
    this.apis(api.list).then(r => {
      if (r.status) {
        const divider = "/";
        let map = {
          "/": {
            id: divider,
            label: divider,
            children: []
          }
        };

        let list = [].concat(r.content);
        let page;

        while ((page = list.pop())) {
          const paths = page.split(divider);
          const pId = paths.slice(0, paths.length - 1).join(divider) || divider;

          if (!map[pId]) {
            map[pId] = {
              id: pId,
              label:
                paths.slice(paths.length - 2, paths.length - 1).join(divider) ||
                divider,
              children: []
            };

            let pNode = map[pId];

            let cursor = paths.length - 1;
            let pPId = paths.slice(0, cursor - 1).join(divider) || divider;

            while (cursor > 0 && !map[pPId]) {
              const last = pPId;

              map[pPId] = {
                id: pPId,
                label:
                  paths.slice(cursor - 2, cursor - 1).join(divider) || divider,
                children: [pNode]
              };
              pNode = map[pPId];
              pPId = paths.slice(0, cursor - 2).join(divider) || divider;

              --cursor;
            }
            map[pPId].children.push(pNode);
          }

          map[pId].children.push({
            id: page,
            label: paths.slice(paths.length - 1).join(divider) || divider,
            children: []
          });
        }

        this.aside = [map[divider]];
      }
    });

    this.pageFlow.push({
      label: "业务事项名称",
      children: [
        {
          label: "我要显示关闭按钮",
          children: [
            {
              label: "数据库名称",
              children: [
                {
                  label: "数据表名称1"
                },
                {
                  label: "我是成功类型",
                  type: "success"
                },
                {
                  label: "数据表名称3",
                  children: [
                    {
                      label: "表字段已建"
                    }
                  ]
                },
                {
                  label: "数据表名称3",
                  children: [
                    {
                      label: "表字段已建"
                    }
                  ]
                },
                {
                  label: "数据表名称3"
                },
                {
                  label: "数据表名称3",
                  children: [
                    {
                      label: "表字段已建"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "应用系统2",
          children: [
            {
              label: "我是失败类型",
              type: "error"
            }
          ]
        },
        {
          label: "信息资源1",
          children: [
            {
              label: "信息项已建"
            },
            {
              label: "应用系统1"
            },
            {
              label: "共享资源1"
            },
            {
              label: "共享资源2"
            }
          ]
        },
        {
          label: "信息资源2"
        }
      ]
    });
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



