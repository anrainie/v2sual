<template>
  <div>
    <ak_header></ak_header>
    <ak_aside :parentData='icons' @currentMenu="getMenu" @asideShow="asideShow" :fromLeftMenu="!leftMenuShow"></ak_aside>
    <leftMenu :parentMenu='menu' @menuShow="menuShow" :fromAside="!asideIconShow"></leftMenu>
    <div class="container" :style="style">
    	<!-- <keep-alive> -->
    		<router-view></router-view>
    	<!-- </keep-alive> -->
    </div>
  </div>
</template>
<script>
import leftMenu from './leftMenu';
import ak_aside from './ak_aside'
import ak_header from './ak_header'
import '../dependence/css/menu.css'
export default {
  name: 'HomeManager',
  components:{
    leftMenu,
    ak_aside,
    ak_header
  },
  data(){
    return{
      screenWidth:document.body.clientWidth,
      icons:[
        {
          id:'manager',
          icon:'fa fa-bars',
          child:[
            {
              id:'001',
              local_name:'设备管理',
              name:'/index/first/deviceManager'
            },
            // {
            //   id:'002',
            //   local_name:'Agent配置',
            //   name:'agent'
            // },
            {
              id:'003',
              local_name:'脚本管理',
              name:'/index/first/scriptManager'
            },
            {
              id:'004',
              local_name:'场景配置',
              name:'/index/first/senceManager'
            },
              {
              id:'005',
              local_name:'Api配置',
              name:'/index/first/apiManager'
            },
            // {
            //   id:'005',
            //   local_name:'测试管理',
            //   name:'testManager'
            // }
          ]
        },
        {
          id:'analysis',
          icon:'fa fa-line-chart',
          child:[
            {
              id:'006',
              name:'/index/first/deviceMonitor',
              local_name:'设备监控',
            },
            {
              id:'007',
              name:'/index/first/senceMonitor',
              local_name:'场景监控',
            },
            {
              id:'008',
              name:'/index/first/deviceDetail',
              local_name:'设备详情',
            },
            {
              id:'009',
              name:'/index/first/testHistory',
              local_name:'测试历史',
            },
          ]
        },
        {
          id:'operation',
          icon:'fa fa-cog',
          child:[]
        }
      ],
      menu:{},
      leftMenuShow:true,
      asideIconShow:false,
      width:'',
      left:'',
    }
  },
  computed:{
    style(){
      let style={}
      style.width=this.width
      style.left=this.left
      return style
    }
  },
  methods:{
    getMenu(currentMenu){
      this.menu=currentMenu
    },
    asideShow(asideShow){
      this.asideIconShow=asideShow
      this.leftMenuShow=!asideShow
    },
    menuShow(menuShow){
      this.leftMenuShow=menuShow
      this.asideIconShow=!menuShow
    }
  },
  mounted(){
    const _this=this
    window.onresize=function(){
      window.screenWidth=document.body.clientWidth
      _this.screenWidth=window.screenWidth
    }
  },
  watch:{
    asideIconShow(newVal,oldVal){
      if(newVal){
        this.width="96%"
        this.left="60px"
      }else{
        this.width="83%"
        this.left="260px"
      }
    },
    screenWidth(newVal,oldVal){
      this.screenWidth=newVal
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #app .container{
    top: 60px;
    position: absolute;
    bottom: 0;
    height: 92%;
    width:83%;
    padding:20px;
    left:260px;
    overflow-y:auto
  }
</style>