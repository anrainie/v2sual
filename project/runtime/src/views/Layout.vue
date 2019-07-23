<template>
  <div class="aweb-container">
    <div class="aweb-header">
      <div class="ebank-header-main">
        <div class="ebank-logo-ctn">
          <img src="../assets/logo.png" alt />
          <div class="ebank-logo-text">
            <span>
              网上银行
              <em>扫码登录</em>
            </span>
            <p>24小时服务电话95555</p>
          </div>
        </div>
        <div class="ebank-header-right">
          <el-dropdown trigger="click" class="ebank-header-setting">
            <div class="el-dropdown-link">
              <span class="setting-text">设置</span>
              <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="logout">重新登录</el-dropdown-item>
              <el-dropdown-item>安全退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="ebank-header-opr">
            <span class="el-icon-minus"></span>
            <span class="el-icon-full-screen"></span>
            <span class="el-icon-close"></span>
          </div>
        </div>
      </div>

      <div class="aweb-menu-ctn">
        <ul>
          <li
            v-for="(item,index) in routerData"
            :class="{'active':$route.path==='/'+item.children[0].path}"
            :key="index"
            @click="handleSelectMenu(item.children[0].path+'#'+item.children[0].componentUrl+'#'+(item.children[0].meta && item.children[0].meta.title && item.children[0].meta.title),index)"
          >{{item.meta.title}}</li>
        </ul>
        <el-input class="ebanck-menu-search" suffix-icon="el-icon-search" v-model="searchVal"></el-input>
      </div>
    </div>

    <div class="aweb-main">
      <!-- 导航菜单 START -->

      <!-- 当前位置的面包屑导航 -->
      <!-- <div class="ebank-breadcrumb" v-if="showBreadcrumbPath">
        <div class="ebank-breadcrumb-label">当前位置: </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="path in breadcrumbPath">{{path}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>-->

      <!-- <el-menu
        mode="horizontal"
        active-text-color="#409EFF"
        :collapse="collapsed"
        @mouseover.native="moE($event)"
        @select="handleSelectMenu"
      >
        <template v-for="item in routerData" v-if="!item.hidden">
          <el-submenu
            v-if="item.children && item.children.length && !item.isLeaf || (item.isLeaf && item.isRedirect)"
            :index="item.path+'#'+item.componentUrl+'#'+(item.meta && item.meta.title && item.meta.title)"
            :key="item.path"
          >
            <template slot="title">
              <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
              <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
            </template>

            <template v-for="child in item.children" v-if="!child.hidden">
              <el-submenu
                v-if="child.children"
                :index="item.path+'/'+child.path+'#'+child.componentUrl+'#'+(child.meta && child.meta.title && child.meta.title)"
                :key="item.path+'/'+child.path"
              >
                <template slot="title">
                  <i v-if="child.meta && child.meta.icon" :class="child.meta.icon"></i>
                  <span v-if="child.meta && child.meta.title">{{child.meta.title}}</span>
                </template>

                <template v-for="child3 in child.children" v-if="!child3.hidden">
                  <el-submenu
                    v-if="child3.children"
                    :index="item.path+'/'+child.path+'/'+child3.path+'#'+child3.componentUrl+'#'+(child3.meta && child3.meta.title && child3.meta.title)"
                    :key="item.path+'/'+child.path+'/'+child3.path"
                  >
                    <template slot="title">
                      <i v-if="child3.meta && child3.meta.icon" :class="child3.meta.icon"></i>
                      <span v-if="child3.meta && child3.meta.title">{{child3.meta.title}}</span>
                    </template>

                    <template v-for="child4 in child3.children" v-if="!child4.hidden">
                      <el-menu-item
                        :index="item.path+'/'+child.path+'/'+child3.path+'/'+child4.path+'#'+child4.componentUrl+'#'+(child4.meta && child4.meta.title && child4.meta.title)"
                        :key="item.path+'/'+child.path+'/'+child3.path+'/'+child4.path"
                      >
                        <i v-if="child4.meta && child4.meta.icon" :class="child4.meta.icon"></i>
                        <span v-if="child4.meta&&child4.meta.title">{{child4.meta.title}}</span>
                      </el-menu-item>
                    </template>
                  </el-submenu>

                  <el-menu-item
                    v-else
                    :index="item.path+'/'+child.path+'/'+child3.path+'#'+child3.componentUrl+'#'+(child3.meta && child3.meta.title && child3.meta.title)"
                    :key="item.path+'/'+child.path+'/'+child3.path"
                  >
                    <i v-if="child3.meta && child3.meta.icon" :class="child3.meta.icon"></i>
                    <span v-if="child3.meta&&child3.meta.title">{{child3.meta.title}}</span>
                  </el-menu-item>
                </template>
              </el-submenu>

              <el-menu-item
                v-else
                :index="item.path+'/'+child.path+'#'+child.componentUrl+'#'+(child.meta && child.meta.title && child.meta.title)"
                :key="item.path+'/'+child.path"
              >
                <i v-if="child.meta && child.meta.icon" :class="child.meta.icon"></i>
                <span
                  v-if="child.meta && child.meta.title"
                  :data-role="item.path+'/'+child.path"
                >{{child.meta.title}}</span>
              </el-menu-item>
            </template>
          </el-submenu>

          <el-menu-item
            v-else-if="item.isLeaf && !item.children[0].children"
            :index="item.children[0].path+'#'+item.children[0].componentUrl+'#'+(item.children[0].meta && item.children[0].meta.title && item.children[0].meta.title)"
            :key="item.path+'/'+item.children[0].path"
          >
            <i
              v-if="item.children[0].meta && item.children[0].meta.icon"
              :class="item.children[0].meta.icon"
            ></i>
            <span
              v-if="item.children[0].meta && item.children[0].meta.title"
            >{{item.children[0].meta.title}}</span>
          </el-menu-item>

          <el-menu-item
            v-else
            :index="item.path+'#'+item.componentUrl+'#'+(item.meta && item.meta.title && item.meta.title)"
            :key="item.path"
          >
            <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
            <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
          </el-menu-item>
        </template>
      </el-menu>-->
      <!-- 导航菜单 END -->

      <!-- 内容区域 START -->
      <section class="aweb-ctt">
        <!-- 子页面容器 START -->
        <router-view></router-view>
             <!-- 弹窗 START -->
         <el-dialog
          :title="subPageTitle"
          :visible.sync="subDialogVisible"
          :close-on-click-modal="false"
          @close="closeDialog"
          ref="_op_dialog_ctn"
        >
          <transition name="fade" mode="out-in" v-if="subDialogVisible">
            <sub-page-ctn :page="subPageHref" :params="subPageParams" v-if="subDialogVisible"></sub-page-ctn>
          </transition>
          <div slot="footer" class="dialog-footer">
              <el-button @click="cancel" v-if="subFooter('cancel')" >取消</el-button>
                <el-button type='primary' v-if="subFooter('confirm')" @click="confirm">确定</el-button >
          </div>
        </el-dialog>
        <!-- 弹窗 END -->
      </section>


      <!-- 内容区域 END -->
    </div>
    <div class="aweb-footer">欢迎 {{sysUserName}} 使用</div>
  </div>
</template>

<script>
import { getObjArr, getRouter, saveRouter } from "../promission.js";


 import subPageCtn from "@/components/subPageCtn";

export default {
  name: "layout",
  data() {
    return {
      routerData: global.menu ? global.menu : getRouter("menu"),
      // sysLogo: "img/logo.png",
      // sysName: "AWEB_ADMIN",
      // collapsed: false,
      sysUserName: "admin",
      sysUserAvatar:
        "https://s.gravatar.com/avatar/f30a9191dda93b5389965ed99f57f850?s=50&d=retro",
      // rightClickHandler: null,
      // isRouterAlive: true,
      breadcrumbPath: [], // 面包屑路径
      showBreadcrumbPath: false,
      searchVal:''
    };
  },

  methods: {
    handleSelectMenu: function(key, index) {
      console.log("key", key);

      // this.activeIndex=index;
      let keys = key.split("#"),
        path = keys[0],
        page = keys[1],
        title = keys[2];

      this.updatedBreadcrumbPath(title);

      this.open({
        path: "/" + path,
        page: page,
        status: true,
        type: "BLANK",
        title: title || "标题",
        keepAlive: true
      });
    },
    initUserInfo() {
      // console.log("routerData", this.routerData);

      let user = sessionStorage.getItem("user");

      if (user) {
        user = JSON.parse(user);
        this.sysUserName = user.name || "";
        this.sysUserAvatar = user.avatar || "";
      }
    },
    initBreadcrumbPath() {
      let urlHash = location.hash;
      let urlPath = urlHash.split("/").splice(1);
      let title;

      JSON.parse(localStorage.menu).forEach(function(subPage) {
        // TODO: 后期导航菜单拓展多级菜单后,面包屑导航也对应改为多级
        if (subPage.children[0].path === urlPath[0]) {
          title = subPage.meta.title;
        }
      });

      if (title) {
        this.updatedBreadcrumbPath(title);
      } else {
        // 隐藏面包屑导航
        this.showBreadcrumbPath = false;
      }

      // console.log("urlPath: ");
      // console.log(urlPath);

      // console.log("title: ");
      // console.log(title);

      // console.log("this.breadcrumbPath: ");
      // console.log(this.breadcrumbPath);
    },
    updatedBreadcrumbPath(page) {
      this.showBreadcrumbPath = true;
      this.breadcrumbPath.splice(0);
      this.breadcrumbPath.unshift(page);
    },
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        //type: 'warning'
      })
        .then(() => {
          sessionStorage.removeItem("user");
          _this.$router.push("/login");
          saveRouter("router", "");
          saveRouter("menu", "");
          global.antRouter = "";
          global.pageMap = {};
          global.hasLogin = false;
          // TODO:
          // 区别在于 localStorage 里的 router 为 '' 还是有值
          _this.$router.go(0);
        })
        .catch(() => {});
    },
    tabRightClick: function(e) {
      if (e.target.classList[0] === "el-tabs__item") {
        this.rightClickHandler = e;
      }
    },
    reload() {
      this.isRouterAlive = false;

      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    handleRightSelect: function(key) {
      switch (key) {
        case "refresh":
          this.reload();

          break;
        case "close":
          this.$store.commit("delete_tabs", this.activeIndex);
          if (this.openedTabs && this.openedTabs.length >= 1) {
            this.$store.commit(
              "set_active_index",
              this.openedTabs[this.openedTabs.length - 1].route
            );

            this.$router.push({
              path: this.activeIndex,
              query: this.URLQueryMap[this.activeIndex] || {}
            });
          }
          break;

        case "closeAll":
          this.$store.commit("delete_allTabs");
          break;
      }
    },
    collapse: function() {
      this.collapsed = !this.collapsed;
    },
    tabClick(tab) {
      this.$router.push({
        path: this.activeIndex,
        query: this.URLQueryMap[this.activeIndex] || {}
      });
    },
    tabRemove(targetName) {
      this.$store.commit("delete_tabs", targetName);
      if (this.activeIndex === targetName) {
        if (this.openedTabs && this.openedTabs.length >= 1) {
          this.$store.commit(
            "set_active_index",
            this.openedTabs[this.openedTabs.length - 1].route
          );

          this.$router.push({
            path: this.activeIndex,
            query: this.URLQueryMap[this.activeIndex] || {}
          });
        }
      }
    },
    cancel() {
      this.closeDialog();
      this.$store.commit("do_cancel");
    },
    confirm() {
      this.closeDialog();
      this.$store.commit("do_confirm");
    },
    closeDialog() {
      this.$store.commit("set_D_visible", false);
      this.$store.commit("set_active_index", this.activeIndex);
    }
  },
  mounted() {
    // console.log(this.axios.get())
    this.initUserInfo();
    this.initBreadcrumbPath();

    // this.$store.commit("add_tabs", {
    //   route: this.$route.path,
    //   name: this.$route.meta.title,
    //   keepAlive: this.$route.meta.keepAlive
    // });

    // this.$store.commit("set_active_index", this.$route.path);

    // console.log('this.$route: ');
    // console.log(this.$route);
    // console.log(this.$route.path);
    // console.log(this.$route.meta.title);
  },
  updated() {},
  computed: {
    openedTabs() {
      return this.$store.state.openedTabs;
    },
    activeIndex: {
      get() {
        return this.$store.state.activeIndex;
      },
      set(val) {
        this.$store.commit("set_active_index", val);
      }
    },
    subDialogVisible: {
      get() {
        return this.$store.state.subDialogVisible;
      },
      set(val) {
        this.$store.commit("set_D_visible", val);
      }
    },
    subPageHref: {
      get() {
        return this.$store.state.subPageHref;
      },
      set(val) {
        this.$store.commit("set_subPageHref", val);
      }
    },
    subPageParams: {
      get() {
        return this.$store.state.subPageParams;
      },
      set(val) {
        this.$store.commit("set_subPageParams", val);
      }
    },
    subPageTitle: {
      get() {
        return this.$store.state.subPageTitle;
      },
      set(val) {
        this.$store.commit("set_subPageTitle", val);
      }
    },
    rightMenuData() {
      return this.$store.state.rightMenuData;
    },
    URLQueryMap: {
      get() {
        return this.$store.state.URLQueryMap;
      },
      set(val) {
        this.$store.commit("set_url_map", val);
      }
    },
    subFooter(type){
       return (type)=>{
         return  this.$store.getters.subPageFooter(type);
       }
    }
  },
  watch: {
    $route(to, from) {
      let flag = false;
      if (to.meta.type === "BLANK") {
        if (Object.keys(to.query).length) {
          this.$store.commit("set_url_map", { path: to.path, query: to.query });
        }
      }
      if (to.meta.type === "BLANK" || !to.meta.type) {
        for (let item of this.openedTabs) {
          if (item.route === to.path) {
            this.$store.commit("set_active_index", to.path);
            flag = true;
            break;
          }
        }
        if (!flag) {
          this.$store.commit("add_tabs", {
            route: to.path,
            name: to.meta.title,
            keepAlive: to.meta.keepAlive
          });
          this.$store.commit("set_active_index", to.path);
        }
      } else if (to.meta.type === "SELF") {
        this.$store.commit("add_tabs", {
          route: to.path,
          name: to.meta.title,
          keepAlive: to.meta.keepAlive
        });
        this.$store.commit("set_active_index", to.path);
        this.$store.commit("delete_tabs", from.path);
      }
    },
    subDialogVisible: {
      immediate: true,
      handler(newVal, oldVal) {
        if (!newVal && oldVal) {
          let currentPageConfig = this.$router.currentRoute.matched[1]
            .components.default;
          let currentPageIns = this.$router.currentRoute.matched[1].instances
            .default;
          currentPageConfig.resume &&
            currentPageConfig.resume.call(currentPageIns);
        }
      }
    }
  },
  components: {

    subPageCtn
  }
};
</script>

<style  lang="scss">
.aweb-container {
  .aweb-header {
    position: relative;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(144, 176, 201);
    background: linear-gradient(rgb(243, 243, 243), rgb(215, 215, 215));

    .ebank-header-main {
      position: relative;

      margin: 0 auto;

      height: 60px;
      overflow: hidden;
      padding: 8px 0 0 8px;
      box-sizing: border-box;
    }
    .ebank-logo-ctn {
      float: left;
      img,
      .ebank-logo-text {
        display: inline-block;
        vertical-align: middle;
      }
      .ebank-logo-text {
        color: #888888;
        border-left: 1px solid #dddddd;
        margin-left: 10px;
        padding-left: 10px;
        font-size: 13px;
        p {
          font-size: 12px;
        }
        em {
          font-style: normal;
          padding: 0 4px;
          background-color: #5ac44c;
          border-radius: 4px;
          color: #fff;
          display: inline-block;
          font-size: 12px;
        }
      }
    }
    .ebank-header-right {
      float: right;
      padding-right: 158px;
      position: relative;
      .ebank-header-setting {
        cursor: pointer;
      }
      .setting-text {
        margin-right: 4px;
      }
      .ebank-header-opr {
        position: absolute;
        right: 0;
        top: -8px;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-radius: 0 0 0 4px;

        span {
          display: inline-block;
          vertical-align: middle;
          padding: 4px 8px;
          cursor: pointer;
          color: #000;
          &:hover {
            background-color: rgb(71, 136, 248);
          }
          &:last-child {
            border-left: 1px solid #ccc;
            &:hover {
              background-color: rgb(232, 127, 127);
            }
          }
        }
      }
    }
  }
  .aweb-menu-ctn {
    width: 100%;
    height: 34px;
    position: relative;

    li {
      float: left;

      width: 70px;
      cursor: pointer;
      text-align: center;
      margin: 0 20px;
      border-radius: 4px;
      color: #333;
      padding: 2px 0;
      font-size: 15px;
      font-weight: 600;

      &.active {
        background: linear-gradient(
          to bottom right,
          rgb(54, 66, 185),
          rgb(69, 94, 203)
        );
        color: #fff;
      }
    }
    .ebanck-menu-search {
      position: absolute;
      width: 223px;
      height: 28px;
      right: 8px;
      .el-input__inner {
        height: 28px;
        border-radius: 30px;
        border: 1px solid #ccc;
      }
      .el-input__icon {
        line-height: 28px;
      }
    }
  }
  .aweb-main {
    padding: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 96px;
    bottom: 38px;
    overflow: auto;
    // .ebank-breadcrumb {
    //   width: $--main-width;
    //   margin: 0 auto 10px;
    //   padding: 10px 0;
    //   // height: 50px;
    //   border-bottom: 1px solid #e5e5e5;
    //   cursor: default;

    //   .el-breadcrumb__inner {
    //     cursor: default;
    //   }

    //   .ebank-breadcrumb-label {
    //     display: inline-block;
    //     margin-right: 12px;
    //     // font-weight: bold;
    //     font-size: 12px;
    //   }

    //   .el-breadcrumb {
    //     display: inline-block;
    //     vertical-align: middle;
    //     font-size: 12px;
    //   }
    // }
    // .el-menu {
    //   // border-bottom-width: 3px;
    //   border-bottom: solid 2px #e6e6e6;

    //   .el-menu-item,
    //   .el-submenu {
    //     position: relative;
    //     border-bottom: none;

    //     &.is-active {
    //       &:after {
    //         content: "";
    //         display: inline-block;
    //         position: absolute;
    //         left: 0;
    //         bottom: -2px;
    //         width: 100%;
    //         height: 2px;
    //         background: $--color-primary;
    //       }
    //     }
    //   }

    //   .el-menu-item {
    //     height: 50px;
    //     line-height: 50px;
    //   }

    //   .el-submenu {
    //     .el-submenu__title {
    //       height: 50px;
    //       line-height: 50px;
    //       transition: none;
    //     }
    //     .el-submenu__icon-arrow {
    //       margin-top: 0;
    //     }
    //     &.is-active {
    //       .el-submenu__title {
    //         border-bottom: none;
    //       }
    //       // i[class^="el-icon-"] {
    //       i {
    //         color: $--color-primary;
    //       }
    //     }
    //   }
    // }

    .aweb-ctt {
      height: 100%;
      width: 100%;
      
    }
  }
  

  .aweb-footer {
    font-size: 13px;
    height: 38px;

    line-height: 38px;

    color: #fff;

    background: rgb(51, 59, 83);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-left: 40px;
  }
}
</style>
