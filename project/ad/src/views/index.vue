<template>
  <div class="aweb-container">
    <!-- <div></div> -->
        <!-- <header>
          <div class="menu-btn"><i class="el-icon-s-operation"></i></div>
           <div class="header-title"><span>首页</span></div>
           <div class="search-btn"><i class="el-icon-search"></i></div>
           </header> -->
        <router-view></router-view>
        <footer>
          <div ><i class="el-icon-s-home" @click="openPage('index','shanghai_mobile/page2')" :style="{'color':activeTab==='index'?'#1b55d2':'#ddd'}"></i><div class="foot-title">首页</div></div> 
          <div><i class="el-icon-mobile" @click="openPage('driver','shanghai_mobile/page3')" :style="{'color':activeTab==='driver'?'#1b55d2':'#ddd'}"></i><div class="foot-title">设备详情</div></div>
          <div><i class="el-icon-user" @click="openPage('user','shanghai_mobile/page1')" :style="{'color':activeTab==='user'?'#1b55d2':'#ddd'}"></i><div class="foot-title">客户详情</div></div>
          </footer>
        <!-- 抽屉 -->
        <el-drawer
          title="分行目录"
          :visible.sync="showDrawer"
          :direction="`ltr`"
          :show-close="false"
          :closed ="closedDrawer"
          >
          
        <div>
        <el-menu 
              default-active="2"
              class="el-menu-vertical-demo"  
              @select="handleSelectMenu"
            >
          <template v-for="item in routerData" v-if="!item.hidden">
            
              <el-submenu  v-if="item.children && item.children.length && !item.isLeaf || (item.isLeaf && item.isRedirect)" :index="item.path+'#'+item.componentUrl+'#'+(item.meta && item.meta.title && item.meta.title)" :key="item.path">
                <template slot="title">
                  <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
                  <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
                </template>

                <template v-for="child in item.children" v-if="!child.hidden">

                      <el-submenu  v-if="child.children" :index="item.path+'/'+child.path+'#'+child.componentUrl+'#'+(child.meta && child.meta.title && child.meta.title)" :key="item.path+'/'+child.path">
                              
                                    <template slot="title">
                                      <i v-if="child.meta && child.meta.icon" :class="child.meta.icon"></i>
                                      <span v-if="child.meta && child.meta.title">{{child.meta.title}}</span>
                                    </template>

                                    <template v-for="child3 in child.children" v-if="!child3.hidden">

                                            <el-submenu  v-if="child3.children" :index="item.path+'/'+child.path+'/'+child3.path+'#'+child3.componentUrl+'#'+(child3.meta && child3.meta.title && child3.meta.title)" :key="item.path+'/'+child.path+'/'+child3.path">                              
                                                    <template slot="title">
                                                      <i v-if="child3.meta && child3.meta.icon" :class="child3.meta.icon"></i>
                                                      <span v-if="child3.meta && child3.meta.title">{{child3.meta.title}}</span>
                                                    </template>

                                                    <template v-for="child4 in child3.children" v-if="!child4.hidden">                                         
                                                          <el-menu-item :index="item.path+'/'+child.path+'/'+child3.path+'/'+child4.path+'#'+child4.componentUrl+'#'+(child4.meta && child4.meta.title && child4.meta.title)" :key="item.path+'/'+child.path+'/'+child3.path+'/'+child4.path">
                                                            <i v-if="child4.meta && child4.meta.icon" :class="child4.meta.icon"></i>
                                                            <span v-if="child4.meta&&child4.meta.title">{{child4.meta.title}}</span>
                                                          </el-menu-item>
                                                    </template>                             
                                              </el-submenu>


                                          <el-menu-item v-else :index="item.path+'/'+child.path+'/'+child3.path+'#'+child3.componentUrl+'#'+(child3.meta && child3.meta.title && child3.meta.title)" :key="item.path+'/'+child.path+'/'+child3.path">
                                            <i v-if="child3.meta && child3.meta.icon" :class="child3.meta.icon"></i>
                                            <span v-if="child3.meta&&child3.meta.title">{{child3.meta.title}}</span>
                                          </el-menu-item>


                                    </template>
                              
                      </el-submenu>


                    <el-menu-item v-else  :index="item.path+'/'+child.path+'#'+child.componentUrl+'#'+(child.meta && child.meta.title && child.meta.title)" :key="item.path+'/'+child.path">
                      <i v-if="child.meta && child.meta.icon" :class="child.meta.icon"></i>
                      <span v-if="child.meta && child.meta.title" :data-role="item.path+'/'+child.path">{{child.meta.title}}</span>
                    </el-menu-item>
            
                </template>
              </el-submenu>

             
                <el-menu-item  v-else-if="item.isLeaf && !item.children[0].children"  :index="item.children[0].path+'#'+item.children[0].componentUrl+'#'+(item.children[0].meta && item.children[0].meta.title && item.children[0].meta.title)" :key="item.path+'/'+item.children[0].path" >  
                  <i v-if="item.children[0].meta && item.children[0].meta.icon" :class="item.children[0].meta.icon"></i>          
                    <span v-if="item.children[0].meta && item.children[0].meta.title">{{item.children[0].meta.title}}</span>
                  </el-menu-item>

                 <el-menu-item  v-else  :index="item.path+'#'+item.componentUrl+'#'+(item.meta && item.meta.title && item.meta.title)" :key="item.path" >  
                  <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>          
                    <span v-if="item.meta && item.meta.title">{{item.meta.title}}</span>
                  </el-menu-item>


            </template>        
        </el-menu>

        </div>
     
        </el-drawer>
        <!-- 抽屉 end -->
     <!-- 弹窗 start -->
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
 
  </div>
</template>

<script>

import Lib from  '@v2-lib/vue.spa.plugin'
import {getMenuRoutes,mixins,filterAsyncRouter} from '@v2-lib/vue.spa.plugin'
import {caseRouter} from '@/api/case.js'

// const caseList= process.env.NODE_ENV === 'production'?[]:caseRouter;

export default {
  name: "index",
  data() {
    return {
      routerData:JSON.parse(JSON.stringify(getMenuRoutes())),
      sysUserName: "admin",
      showDrawer:false,
      sysUserAvatar:
        "https://s.gravatar.com/avatar/f30a9191dda93b5389965ed99f57f850?s=50&d=retro",
      // rightClickHandler: null,
      // isRouterAlive: true,
      breadcrumbPath: [], // 面包屑路径
      showBreadcrumbPath: false,
      searchVal:'',
      activeTab:'index'
    };
  },
  mixins:[mixins],

  methods: {
    closedDrawer(){
       console.log('关闭侧边菜单',this.showDrawer);
       this.showDrawer = false;

    },
    openPage(path,page){
      this.activeTab = path;
      if(window.router.matcher.match('/mobile/'+path).path=='/404'){
      let routes=window.router.options.routes;
        routes[1].children.push({
                    path: '/mobile/'+path,
                    replace: true,
                    component: Lib._import(page),
                    meta: {
                      title: '预览',
                      type: 'preview'
                    },
                    keepAlive:true
                    });
          window.router.addRoutes(routes);
          this.$router.push('/mobile/'+path);
      }else{
         this.$router.push('/mobile/'+path);
      }
   
    },
    handleSelectMenu: function(key, index) {
      console.log("key", key);
      this.$store.sate.MenuDrawer = false;
      // this.activeIndex=index;
      let keys = key.split("#"),
        path = keys[0],
        page = keys[1],
        title = keys[2];

      this.updatedBreadcrumbPath(title);

      this.open({
        path: "/" + path,
        page:page,
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

    this.$root.$on('showDrawer',(val)=>{
          this.showDrawer = val;
    })
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
  background:#ebeff5;
  >header{
      position: fixed;
      top:0;
      width:100%;
      height: 50px;
      background: transparent;
      display: flex;
      justify-content: space-between;
      z-index: 1;
      .search-btn,
      .menu-btn{
         width:50px;
          >i{
            font-size:0.2rem;
            padding:6px;
          }
      }
      .header-title{
        padding:.05rem 0;
        >span{
          font-size:0.12rem;
        }
      }
  }
  >footer{
     position: fixed;
     bottom: 0;
     z-index: 1;
     width:100%;
     min-height: 50px;
     background: #fff;
     display: flex;
     flex-wrap: wrap;
     border-top: 1px solid #ccc;
       >div{
        flex: 1;
        text-align: center;
        font-size: 0.14rem;
           i{
                 font-size: 0.25rem;
                 padding-top: 5px;
             }
             .foot-title{
                 font-size: 0.12rem;
             }
       }
  
  }

  .el-drawer__header{
    font-size: 0.14rem;
  }

  div{
    font-size:0.12rem;
  }
 
}
</style>