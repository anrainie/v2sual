<template>
  <div class="frame">
    <el-container>
      <el-aside width="200px" style="background-color: #efefef">
        <el-input placeholder="输入关键字进行过滤" v-model="pageAsideSearch"></el-input>
        <el-tree
          :data="pageAside"
          node-key="id"
          style="background-color:transparent"
          default-expand-all
          :filter-node-method="filterPage"
          ref="pageAside"
          @node-click="showPage"
        ></el-tree>
      </el-aside>

      <el-container>
        <el-header style="background-color:#efefef;">
          逻辑概览
          <el-button-group style="float:right">
            <el-button type="primary" icon="el-icon-delete" :loading="isSaving" @click="saveMethod"></el-button>
          </el-button-group>
        </el-header>
        <el-main>
          <el-container style="height:100%">
            <el-aside>
              <el-input placeholder="输入关键字进行过滤" v-model="methodAsideSearch"></el-input>
              <el-tree
                :data="methodAside"
                node-key="id"
                style="background-color:transparent"
                default-expand-all
                :filter-node-method="filterPage"
                ref="methodAside"
                @node-click="showMethod"
              ></el-tree>
            </el-aside>
            <el-container>
              <div id="container" style="height:100%;width:100%;overflow:auto"></div>
            </el-container>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import { debug } from "util";
// import { setTimeout } from "timers";
import UglifyJS from "uglify-es-web";
import * as monaco from "monaco-editor";

const api = {
  list: "./v1/page/list",
  content: "./v1/page/content",
  script: "./v1/page/script"
};

export default {
  data() {
    return {
      pageAsideSearch: "",
      methodAsideSearch: "",
      pageAside: [],
      methodAside: [],

      page: {},
      script: "",

      method_id: "",
      method: null,

      isSaving: false
    };
  },
  watch: {
    pageAsideSearch(val) {
      this.$refs.pageAside.filter(val);
    },
    methodAsideSearch(val) {
      this.$refs.methodAside.filter(val);
    },
    async page(page) {
      const res = await this.apis(api.script, { params: { path: page.id } });
      this.script = res.content.script;
    },

    script(script) {
      let tree = [];
      try {
        const ast = UglifyJS.parse(script);
        const exportAst = ast.body.filter(b => !!b.exported_value);

        tree = ["watch", "computed", "methods"].map(key => {
          let methods = [];

          try {
            const methodsAst = exportAst[0].exported_value.properties.filter(
              p => p.key === key && p.start.value === key
            );
            const methodList = methodsAst[0].value.properties;

            methods = methodList
              //if m.key
              .filter(m => m.key && m.key)
              //if m.value
              .filter(m => m && m.value && m.value.body && m.value.body.length)
              // return key,body
              .map(m => {
                const params = this.getMethodComments(m.key);

                const name = typeof m.key === "object" ? m.key.name : m.key;

                return {
                  id: name,
                  label: params.desp || name,
                  params: params,
                  code: m.print_to_string({ beautify: true })
                };
              });
          } catch (e) {
            console.log(e);
          }

          return {
            id: key,
            label: key,
            children: methods
          };
        });
      } catch (e) {
        console.log(e);
      }

      this.methodAside = tree;
    },
    method_id(id) {
      const method = this.method;

      if (method.code) {
        this.editor.setValue(
          `
/**
${
  method.params
    ? Object.keys(method.params)
        .map(p => `* @${p}   ${method.params[p]}`)
        .join("\n")
    : "*"
}
*/
${method.code}
`
        );
        //    console.log(method.code);
      } else {
        this.editor.setValue("");
      }
    }
  },

  methods: {
    // 搜索
    filterPage(value, data) {
      if (!value) return true;
      return data.id.indexOf(value) !== -1 || data.label.indexOf(value) !== -1;
    },
    showPage(page) {
      this.page = page;
    },
    showMethod(method) {
      this.method = method;
      this.method_id = method.id;
    },
    /**
     *
     * @desp 解析注解
     * @param 方法信息 key
     *
     */
    getMethodComments(key) {
      var ret = {
        desp: ""
      };
      try {
        const comments = key.start.comments_before[0];
        var lines = comments.value
          .split("*")
          .map(l => (l !== undefined && l !== null ? l : ""))
          .map(l => l.trim())
          .filter(l => !!l.trim());

        lines.forEach(l => {
          var params = l.match(/@([^\s]+)\s([^$]+)/);

          ret[params[1]] = params[2];
        });
      } catch (e) {
        console.log(e);
      } finally {
        return ret;
      }
    },
    saveMethod() {
      this.isSaving = true;

      setTimeout(() => {
        this.isSaving = false;

        this.$notify({
          title: "成功",
          message: "保存方法成功！",
          type: "success"
        });
      }, 5000);
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

        this.pageAside = [map[divider]];
      }
    });
    console.log("h11");

    //初始化代码编辑器
    this.editor = monaco.editor.create($("#container", this.$el)[0], {
      value: ``,
      language: "javascript"
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
