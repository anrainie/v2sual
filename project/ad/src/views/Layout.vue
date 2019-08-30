<template>
  <div class="aweb-container">


    <!-- <div class="aweb-body">

  
      <div class="aweb-ctt"> -->

        <router-view></router-view>
         
         <el-dialog
          :title="subPageTitle"
          :visible.sync="subDialogVisible"
          :close-on-click-modal="false"
          @close="closeDialog"
          ref="_op_dialog_ctn"
        >
          <transition name="fade" mode="out-in" v-if="subDialogVisible">
            <sub-page-ctn ref="subpage" :page="subPageHref" :params="subPageParams" v-if="subDialogVisible"></sub-page-ctn>
          </transition>
          <div slot="footer" class="dialog-footer">
              <el-button @click="cancel" v-if="subFooter('cancel')" >取消</el-button>
                <el-button type='primary' v-if="subFooter('confirm')" @click="confirm">确定</el-button >
          </div>
        </el-dialog>
        <!-- 弹窗 END -->
      <!-- </div>
    </div> -->
  </div>
</template>

<script>


import {getMenuRoutes,addMenuToRoutes,mixins} from '@v2-lib/vue.spa.plugin'
import {caseRouter} from '@/api/case.js'
// const caseList= process.env.NODE_ENV === 'production'?[]:caseRouter;

export default {
  name: "layout",
  data() {
    return {
      routerData:JSON.parse(JSON.stringify(getMenuRoutes())),
   
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
   async beforeRouteEnter(to, from, next){
      
      try{
        let menus=getMenuRoutes();
        if(!menus.length){
          // let menus=await getMenu();
          let path = to.redirectedFrom || to.path;
          let menuData=[...menus,...caseRouter];
          addMenuToRoutes(menuData);
          next(path);
        }else{
          next()
        }
      }catch(e){
      
      console.log(e);
        next();
      }

 },
  mixins:[mixins],

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
        
          // global.antRouter = "";
          // global.pageMap = {};
          // global.hasLogin = false;
          // TODO:
          // 区别在于 localStorage 里的 router 为 '' 还是有值
          // _this.$router.go(0);
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
      this.$store.commit("do_cancel",this.$refs.subpage.$refs._op_subPage);
    },
    confirm() {
      this.closeDialog();
      this.$store.commit("do_confirm",this.$refs.subpage.$refs._op_subPage);
    },
    closeDialog() {
      this.$store.commit("set_D_visible", false);
      this.$store.commit("set_active_index", this.activeIndex);
    }
  },
  mounted() {
    console.log(this.routerData);
    // console.log(this.axios.get())
    // this.initUserInfo();
    // this.initBreadcrumbPath();

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
  }
 
};
</script>


<style  lang="scss" scoped>
.aweb-container {
  // position: absolute;
  // top: 0px;
  // bottom: 0px;
  width: 100%;
 .aweb-body{
    height: 100%;
 
    .aweb-ctt{
      
      background-color: #f0f2f5;
      height: 100%;
      padding: 12px;
      overflow: auto;

    }
    
 }
 
}
</style>