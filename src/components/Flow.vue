<template>
  <div class="V2frame">
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
        <el-header style="background-color:#efefef;">页面流
          <div>
            <button @click="toggleBtn(true)">全部展开</button>
            <button @click="toggleBtn(false)">全部折叠</button>
            <input v-model="searchWord">
            <span v-if="searchWord">{{searchNum===0? 0:resutlIndex+1}}/{{searchNum}}</span>
            <button @click="resulteach('last')">上一个</button>
            <button @click="resulteach('next')">下一个</button>
          </div>
        </el-header>

        <el-main>
          <div style="flex:1" class="flowctn">
            <div data-role="topo" id="flowtree"></div>
          </div>
          <div class="zoom">
            <div class="zoomMask" :style="maskStyle"></div>
            <div class="zoomcontrol"></div>
          </div>
        </el-main>

        <!-- <el-footer></el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import "../assets/topology-jquery/index";
import domtoimage from "dom-to-image";
import { debug } from "util";
import { setTimeout } from "timers";
import { constants } from "fs";

const api = {
  list: "./v1/page/list",
  content: "./v1/page/content"
};

export default {
  data() {
    return {
      asideSearch: "",
      aside: [],
      pageFlow: [],
      viewHeight: 0,
      fullHeigth: 0,
      ratio: 0,
      maskHeight: 0,
      imgHeight: 0,
      maskStyle: {
        height: 0,
        display: "none"
      },
      isActive: false,
      searchWord: "",
      searchNum: 0,
      resutlIndex:0,
      searchResult:[]
    };
  },
  watch: {
    asideSearch(val) {
      this.$refs.aside.filter(val);
    },
    pageFlow() {
      let $topo = $("[data-role=topo]", this.$el),
      self = this;
      //加载右侧内容
      $topo.empty().topology({
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
      self.searchWord= "",
      
      // this.toggleBtn(false);

      $("i", $topo).click(() => {
        setTimeout(() => {
          self.refreshImg();
        }, 10);
      });
    },
    fullHeigth() {
      console.log("fullHeigth");
    },
    searchWord() {
      let resutl = [],
        self = this;
      
      $(".label > span").each(function() {
        $(this).html($(this).text());

        if (self.searchWord && $(this).text().indexOf(self.searchWord) !== -1) {
          $(this).wrapInner("<em class='highlighted'></em>");
          resutl.push($(this));
        }

        self.searchNum = resutl.length;
        self.searchResult = resutl;
        self.resutlIndex = 0;
        resutl.length && resutl[0].find("em").addClass("current");
        resutl.length && $(".flowctn",self.$el).scrollTop(resutl[0].offset().top-70);
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
            this.refreshImg();
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
    },
    refreshImg() {
      let self = this,
        img,
        node = document.getElementById("flowtree");

      domtoimage
        .toPng(node)
        .then(function(dataUrl) {
          img = new Image();
          img.src = dataUrl;
          $(".zoom>img",self.$el).remove();
          $(".zoom",self.$el).append(img);
          setTimeout(() => {
            self.fullHeigth = $("#flowtree",self.$el).height();
            self.ratio = self.viewHeight / self.fullHeigth;
            self.imgHeight = $(".zoom>img",self.$el).height();
            self.maskStyle.height = self.imgHeight * self.ratio + "px";
            $(".zoomMask", self.$el).css("top", 0);
          }, 10);
        })
        .catch(function(error) {
          console.error("something went wrong!", error);
        });
    },
    init() {
      let self = this,
        $mask = $(".zoomMask", this.$el),
        $zoom = $(".zoom", this.$el),
        $control = $(".zoomcontrol", this.$el);

      self.viewHeight = $(".flowctn").height();

      setTimeout(() => {
        self.fullHeigth = $("#flowtree").height();
        self.ratio = self.viewHeight / self.fullHeigth;
        self.initZoom();
      }, 10);
    },
    initZoom() {
      let self = this,
        $mask = $(".zoomMask", this.$el),
        $zoom = $(".zoom", this.$el),
        $control = $(".zoomcontrol", this.$el),
        halfHeight,
        offsetY,
        imgHeight;

      $control
        .mousedown(e => {
          halfHeight = parseFloat(self.maskStyle.height) / 2;
          imgHeight = self.imgHeight;
          offsetY = e.offsetY;

          if (imgHeight > 2 * halfHeight && offsetY <= imgHeight) {
            self.isActive = true;

            if (offsetY + halfHeight > imgHeight) {
              $mask.css("top", imgHeight - 2 * halfHeight + "px");
              $(".flowctn").scrollTop(
                (offsetY - halfHeight) /
                  (parseFloat(self.maskStyle.height) / self.viewHeight)
              );
            } else if (offsetY < halfHeight) {
              $mask.css("top", "0px");
              $(".flowctn").scrollTop(0);
            } else {
              $mask.css("top", offsetY - halfHeight + "px");
              $(".flowctn").scrollTop(
                (offsetY - halfHeight) /
                  (parseFloat(self.maskStyle.height) / self.viewHeight)
              );
            }
          }
        })
        .mousemove(e => {
          let offsetY = e.offsetY;

          halfHeight = parseFloat(self.maskStyle.height) / 2;
          imgHeight = self.imgHeight;

          $mask.css(
            "top",
            $(".flowctn", self.$el).scrollTop() /
              (self.fullHeigth / imgHeight) +
              "px"
          );
          self.maskStyle.display = "block";

          if (self.isActive) {
            if (offsetY + halfHeight > imgHeight) {
              $mask.css("top", imgHeight - 2 * halfHeight + "px");
              $(".flowctn").scrollTop(
                (offsetY - halfHeight) /
                  (parseFloat(self.maskStyle.height) / self.viewHeight)
              );
            } else if (offsetY < halfHeight) {
              $mask.css("top", "0px");
              $(".flowctn").scrollTop(0);
            } else {
              $mask.css("top", offsetY - halfHeight + "px");
              $(".flowctn").scrollTop(
                (offsetY - halfHeight) /
                  (parseFloat(self.maskStyle.height) / self.viewHeight)
              );
            }
          }
        })
        .mouseup(e => {
          self.isActive = false;
        })
        .mouseout(e => {
          self.isActive = false;
          self.maskStyle.display = "none";
        });
    },
    toggleBtn(flag) {
      let $target = $("[data-role=topo]", this.$el),
        $i = $("i", $target);

      const expandedTitle = "展开";
      const collapsedTitle = "关闭";
      const $sub = $i.parent().siblings(".sub");
      const id = $i.parent().data("id");

      if ($sub.length > 0) {
        if (flag) {
          $sub.show();
        } else {
          $sub.hide();
        }
      }

      if ($i.hasClass("fa-plus-circle")) {
        $i.attr("title", collapsedTitle);
      } else {
        $i.attr(
          "title",
          typeof expandedTitle === "function"
            ? expandedTitle(self.find(self.tmpData, id))
            : expandedTitle
        );
      }

      $i.removeClass("fa-minus-circle fa-plus-circle");
      if (flag) {
        $i.addClass("fa-plus-circle");
      } else {
        $i.addClass("fa-minus-circle");
      }
      $("[data-role=topo]", this.$el).topologyTggle(false);
    },
    resulteach(floot){
      let result = this.searchResult,
        len = result.length,
        $flowctn = $(".flowctn",this.$el);
     

      result.map(item=>{
        item.find("em").removeClass("current");
      })

      if(floot==="next"){
        console.log("next")
        if(this.resutlIndex+1===len){
          this.resutlIndex = 0;
          $flowctn.scrollTop(result[0].offset().top-70);
          result[0].find("em").addClass("current")
        }else{
          ++this.resutlIndex;
          $flowctn.scrollTop(result[this.resutlIndex].offset().top-70);
          result[this.resutlIndex].find("em").addClass("current");
        }
      }else if(floot==="last"){
        console.log("last")
        if(this.resutlIndex===0){
          this.resutlIndex = len-1;
          $flowctn.scrollTop(result[len-1].offset().top-70)
          result[len-1].find("em").addClass("current");
        }else{
          --this.resutlIndex;
           $flowctn.scrollTop(result[this.resutlIndex].offset().top-70)
           result[this.resutlIndex].find("em").addClass("current");
        }
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
    this.init();
    this.refreshImg();
  }
};
</script>
<style lang="less">
.v2frame {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.V2frame > .el-container {
  height: 100%;
  width: 100%;
}
.el-main {
  display: flex;
  padding: 0;

  > div:first-child {
    padding: 10px;
    width: calc(100% - 130px);
    overflow: auto;
  }
}
.zoom {
  position: relative;
  border: 1px solid #ccc;
  width: 130px;
  background-color: #fff;
  z-index: 99;

  > canvas {
    width: 100%;
    height: unset;
  }
  .zoomMask {
    position: absolute;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .zoomcontrol {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 999;
  }
}
.highlighted {
  background-color: yellow;
}
.current {
  background-color: orange;
}
</style>



