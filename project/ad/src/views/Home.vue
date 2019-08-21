	<template>
  <el-row class="aweb-container"  ref="layout" name="layout">
    <el-col :span="24" class="aweb-header">
      <el-col
        :span="10"
        class="aweb-logo"
      >{{sysName}}</el-col>
  

      <el-col :span="6" class="aweb-userinfo">

        <el-tooltip  effect="dark" content="下载后端案例" placement="top">
            <el-button icon="el-icon-sold-out" circle class="aweb-download-btn" @click="openMarket('end')"></el-button>
        </el-tooltip>

        <el-tooltip  effect="dark" content="下载前端案例" placement="top">
            <el-button icon="el-icon-sold-out" circle class="aweb-download-btn" @click="openMarket('font')"></el-button>
        </el-tooltip>

        <el-tooltip  effect="dark" content="后台接口文档" placement="top">
            <el-button icon="el-icon-sold-out" circle class="aweb-download-btn" @click="openMarket('endDoc')"></el-button>
        </el-tooltip>

        <el-dropdown trigger="hover">
          <span class="el-dropdown-link aweb-userinfo-inner">
            <img :src="sysUserAvatar">
            {{sysUserName}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>

    <el-col :span="24" class="aweb-body">
      <digi></digi>
      <div class="aweb-ctt">
         <div v-for="(item,idx) in adMenuData" :key="idx" class="ad-home-item-ctn">
           <div class="ad-home-item-ctt">
              <div class="ad-home-img-ctn" :title="item.name" :style="`background-image: url(${item.img}); background-size: cover;background-position: center center;`"></div>
              <div class="ad-home-title">{{item.name}}</div>
           </div>
           <el-button class="ad-home-block-btn" @click="openDetailHandler(item.href,item.pages)">编辑</el-button>
         </div>
     </div>   
    </el-col>
      
  </el-row>
</template>
<script>

    
import {mixins} from '@v2-lib/vue.spa.plugin'
import { getbrotherPageList } from '@/api/api.js'
import {caseRouter} from '@/api/case.js'
import {addTabsRoutes} from '@v2-lib/vue.spa.plugin/router'
import _import from '@v2-lib/vue.spa.plugin/util/_import_production.js'
const caseList= process.env.NODE_ENV === 'production'?[]:caseRouter;
import digi from '../v2Components/v2-component-digitroll/index.vue'
export default {
  name:'layout',
  data() {
    return {
      sysLogo:"img/logo.png",
      sysName: "AWEB_ADMIN",
      collapsed: false,
      sysUserName: "admin",
      sysUserAvatar: "https://s.gravatar.com/avatar/f30a9191dda93b5389965ed99f57f850?s=50&d=retro",  
      adMenuData:[{
        name:"人才招聘",
        pages:['central/a','central/b','central/c'],
        img:'img/ad.png',
        href:'ad1/index'
      },{
        name:"公司概况",
        pages:['company/a','company/b','company/c'],
        img:'img/ad.png',
         href:'ad1/index'
      },{
        name:"银行贷款",
        pages:['central/a','central/b','central/c'],
        img:'img/ad.png',
        href:'ad1/index'
      },{
        name:"投资领航",
        pages:['central/a','central/b','central/c'],
        img:'img/ad.png',
        href:'ad1/index'
     
      },{
        name:"明星产品",
        pages:['central/a','central/b','central/c'],
        img:'img/ad.png',
        href:'ad1/index'
      }]
    };
  },
  mixins:[mixins],

  methods: {
    openDetailHandler(path,pages){

      this.$router.push({path:'/layout',query:{path:path,pages:pages}})
   
    }
  },
  created(){
      let that = this;
       let tempData = [{"name":"ad1","pages":["ad1/page1","ad1/page2","ad1/page3"],"img":"img/ad.png","href":"ad1/index"},{"name":"central","pages":["central/a","central/b","central/c"],"img":"img/ad.png","href":"central/index"},{"name":"example","pages":["example/dycSubTab","example/hasSubTab"],"img":"img/ad.png","href":"example/index"},{"name":"main","pages":["main/main"],"img":"img/ad.png","href":"main/index"}];
           that.adMenuData = tempData; 
      // getbrotherPageList().then(res=>{
       
      //   if(res.status){
 
      //      that.adMenuData = res.content; 
      //      let routerData = [];
      //        res.content.forEach(item => {
      //          let temp = {
      //            path:item.href,
      //            component:_import(item.href),
      //            name:item.name,
      //            children:[]
      //          };
      //          item.pages.forEach(ele=>{
      //            let subPath = ele.split('/')[ele.split('/').length-1];
      //            temp.children.push({
      //               path:subPath,
      //               component:_import(ele),
      //               name:subPath,
      //            })
      //          })
      //           addTabsRoutes(temp);
      //        });
          
           
      //   }
        
      // })
  },
  mounted() {
    // this.getMenu();
    let user = sessionStorage.getItem("user");
   
    if (user) {
      user = JSON.parse(user);
      this.sysUserName = user.name || "";
      this.sysUserAvatar = user.avatar || "";
    }

    
  },
  components:{
    digi
  }

};
</script>

<style  lang="scss" scoped>
.aweb-container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  background-color: #f0f2f5;
  .aweb-header {
    line-height: 64px;
    background: #fff;
    height: 64px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    border-right: none;
    border-bottom: 1px solid #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    .aweb-logo{
      padding-left: 12px;
    }
    .aweb-userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .aweb-userinfo-inner {
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
      .aweb-download-btn{
        margin-right: 1em;
      }
    }
  }
  .aweb-body {
    position: absolute;
    top: 64px;
    bottom: 0px;
    overflow: hidden;
    .aweb-ctt{
      margin:20px auto;
      width: 80%;
      height: inherit;
      display: flex;
      flex-wrap:wrap;
          .ad-home-item-ctn{
            
            background: #fff;
            border: 1px solid #f2f2f2;
              margin: 20px;
              position: relative;
            
              &:hover{
               .ad-home-item-ctt{
                  filter:blur(5px);
                }

                .ad-home-block-btn{
                  display: block;
                }

              }

            .ad-home-block-btn{
                display: none;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            .ad-home-img-ctn{
              width: 200px;
              height: 200px;
         
            }
            .ad-home-title{
              text-align: center;
              padding: 12px 0;
              font-size: 14px;
            }
             

          }

    }
  }

}
</style>