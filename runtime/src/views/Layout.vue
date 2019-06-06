<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1559214383876" :wid="`1559214383876`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559792742688" :wid="`1559792742688`" :index="0" :pid="`1559214383876`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559792745397" :wid="`1559792745397`" :index="0" :pid="`1559792742688`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559792750177" :wid="`1559792750177`" :index="0" :pid="`1559792745397`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-select class="V2Widget" id="1559792753523" :wid="`1559792753523`" :index="0" :pid="`1559792750177`"></v2-form-select></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="1" style="height:100%;"><v2-form-select class="V2Widget" id="1559793025317" :wid="`1559793025317`" :index="1" :pid="`1559792750177`"></v2-form-select></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1559792745397-1" :wid="`1559792745397-1`" :index="1" :pid="`1559792745397`"></v2empty></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1559792746495" :wid="`1559792746495`" :index="1" :pid="`1559792742688`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2empty class="V2Empty" id="1559792746495-0" :wid="`1559792746495-0`" :index="0" :pid="`1559792746495`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1559792746495-1" :wid="`1559792746495-1`" :index="1" :pid="`1559792746495`"></v2empty></el-row></v2container></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1559214383876-1" :wid="`1559214383876-1`" :index="1" :pid="`1559214383876`"></v2empty></el-row></v2container></el-row></v2container></template>
<script>

import {getObjArr, getRouter,saveRouter} from '../promission.js'

import rightMenu from '@/components/rightMenu'
import asyncComponent from '@/components/asyncComponent'

export default {
  name:'layout',
  data() {
    return {
      routerData:global.menu?global.menu:getRouter('menu'),
      sysLogo:"img/logo.png",
      sysName: "AWEB_ADMIN",
      collapsed: false,
      sysUserName: "admin",
      sysUserAvatar: "http://localhost:7007/img/user.png",  
      rightClickHandler:null,
      isRouterAlive: true

    };
  },
  methods: {
    handleSelectMenu:function(key, keyPath){
       console.log('key',key);

      let keys = key.split('#'),
          path = keys[0],
          page = keys[1],
          title= keys[2];


       this.open({
         path:'/'+path,
         page:page,
         status:true,
         type:'BLANK',
         title:title||'标题',
         keepAlive:true
       })


    },
    tabRightClick:function(e){
       if(e.target.classList[0] ==='el-tabs__item'){

            this.rightClickHandler = e;  
       }
    },
     reload() {
   
          this.isRouterAlive = false;
         
          this.$nextTick(function () {
              this.isRouterAlive = true
          })
        },
    handleRightSelect:function(key){

       switch(key){
         case'refresh':
      
         this.reload();
            
          break;
         case'close':

            this.$store.commit("delete_tabs", this.activeIndex);
            if (this.openedTabs && this.openedTabs.length >= 1) {

              this.$store.commit("set_active_index", this.openedTabs[this.openedTabs.length - 1].route);

              this.$router.push({ path: this.activeIndex,query:this.URLQueryMap[this.activeIndex] ||{}});

            }
           break;

         case'closeAll':
           this.$store.commit("delete_allTabs");
           break;

       }

    },
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        //type: 'warning'
      })
        .then(() => {
          sessionStorage.removeItem("user");
          _this.$router.push("/login");
           saveRouter('router','');
           saveRouter('menu','');
           global.antRouter = '';
          global.pageMap = {};
          global.hasLogin = false;
        })
        .catch(() => {});
    },
    collapse: function() {
      this.collapsed = !this.collapsed;
    },
    tabClick(tab) {

      this.$router.push({ path: this.activeIndex,query:this.URLQueryMap[this.activeIndex] ||{}});

    },
    tabRemove(targetName) {
      this.$store.commit("delete_tabs", targetName);
      if (this.activeIndex === targetName) {
        if (this.openedTabs && this.openedTabs.length >= 1) {

          this.$store.commit("set_active_index", this.openedTabs[this.openedTabs.length - 1].route);

          this.$router.push({ path: this.activeIndex ,query:this.URLQueryMap[this.activeIndex] ||{}});

        }
      }
    },
    cancel(){
           this.$store.commit("set_D_visible",false);
           this.$store.commit("set_active_index", this.openedTabs[this.openedTabs.length - 1].route);
           this.$router.push({ path: this.activeIndex,query:this.URLQueryMap[this.activeIndex] ||{} });
           this.$store.commit("do_cancel");
         
    },
    confirm(){
         this.$store.commit("set_D_visible",false);
          this.$store.commit("set_active_index", this.openedTabs[this.openedTabs.length - 1].route);
          this.$router.push({ path: this.activeIndex,query:this.URLQueryMap[this.activeIndex] ||{} });
          this.$store.commit("do_confirm");
      
    },
    closeDialog(){

       this.$store.commit("set_D_visible",false);    
       this.$store.commit("set_active_index", this.openedTabs[this.openedTabs.length - 1].route);
       this.$router.push({ path: this.activeIndex ,query:this.URLQueryMap[this.activeIndex] ||{}});
    
  
    },
    openMarket(){
      window.open('https://www.awebide.com:7002/package/@aweb-template/vue-spa');
    }
  },
  mounted() {
    console.log('routerData',this.routerData)
    let user = sessionStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      this.sysUserName = user.name || "admin";
      this.sysUserAvatar = user.avatar || "http://localhost:7007/img/user.png";
    }
    debugger;
     this.$store.commit("add_tabs", {
        route: this.$route.path,
        name: this.$route.meta.title,
        keepAlive:this.$route.meta.keepAlive       
      });
    
    this.$store.commit("set_active_index", this.$route.path);

  },
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
     dialogVisible: {
        get() {
          return this.$store.state.dialogVisible;
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
     subPageTitle:{
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
    URLQueryMap:{
      get() {
        return this.$store.state.URLQueryMap;
      },
      set(val) {
        this.$store.commit("set_url_map", val);
      }
    }
  },
  watch: {
    $route(to, from) {
      let flag = false;
      
      if(to.meta.type ==='BLANK'){
        if(Object.keys(to.query).length){
            this.$store.commit("set_url_map",({path:to.path,query:to.query}))
          }
      }
   
      if(to.meta.type==='BLANK' || !to.meta.type){
        for (let item of this.openedTabs) {
                if (item.route === to.path) {
                  this.$store.commit("set_active_index", to.path);
                  flag = true;
                  break;
                }
            };
        </script>