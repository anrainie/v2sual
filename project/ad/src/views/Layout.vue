	<template>
  <el-row class="aweb-container"  ref="layout" name="layout">
    <el-button class="el-icon-video-play" @click="play"></el-button>
    <el-button class="el-icon-video-pause" @click="stop"></el-button>
    <el-col :span="4">
      <el-select v-model="panimate" placeholder="切换动画" >
                <el-option-group v-for="group in animOpts" :key="group.label" :label="group.label">
                  <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-option-group>
              </el-select>
    </el-col>
    <el-row  class="aweb-body">
 <!--       <el-col :span="4" class="ad-layout-left-ctn">
         <div v-for="(item,idx) in pages" class="ad-page-mini" :class="clickTabIdx==idx ?'actived':''"    :key="item" @click="selectPage(idx,item)">
                <div class="ad-flag ad-flag-left">{{idx}}</div>
         </div>
      </el-col>
   
       <el-col :span="16" class="aweb-ctt"> -->
            <transition :name="panimate">
              <router-view ></router-view>
            </transition>
             
<!--           
      </el-col>
       <el-col :span="4" class="ad-layout-right-ctn">

              <el-row class="ad-config-item">
          
              <div >动画特效:</div>
          
              </el-row>

               <el-row  class="ad-config-item">
              <el-select v-model="panimate" placeholder="请选择动画">
                <el-option-group v-for="group in animOpts" :key="group.label" :label="group.label">
                  <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-option-group>
              </el-select>
         
          </el-row>
          <el-row  class="ad-config-item">
        
           
                <div>完成时间:</div>
         
            </el-row>

          <el-row  class="ad-config-item" style=" padding-left: 15px;">
              
                  <el-slider
                    show-input
                    :max="5"
                    :min="0"
                    :step="0.1"
                    v-model="animate['animation-duration']"
                  ></el-slider>
              
          
          </el-row>

          <el-row  class="ad-config-item">
            <div class="delay-time">延迟时间:</div>
          </el-row>

          <el-row  class="ad-config-item" style=" padding-left: 15px;">
         
               
                  <el-slider
                    :max="5"
                    :min="0"
                    :step="0.1"
            
                    v-model="animate['animation-delay']"
                    show-input
                  ></el-slider>
            
          </el-row>


        </el-col>-->
    </el-row>
    
  </el-row> 
</template>
<script>

    
import {getMenuRoutes,addMenuToRoutes,mixins} from '@/lib'
import { getRoutersList } from '@/api/api.js'
import {caseRouter} from '@/api/case.js'


const caseList= process.env.NODE_ENV === 'production'?[]:caseRouter;
export default {
  name:'layout',
  data() {
    return {
      inter:{},
      clickTabIdx: null,
      pages:['central/a','central/b','central/c'],
      animate:{
        'animation-duration':0.5,
        'animation-delay':null
      },
      panimate:null,
      animOpts:[
        {
          label: "弹性",
          options: [
            {
              label: "弹出",
              value: "bounceIn"
            },
            {
              label: "下方弹出",
              value: "bounceInDown"
            },
            {
              label: "左方弹出",
              value: "bounceInLeft"
            },
            {
              label: "右方弹出",
              value: "bounceInRight"
            },
            {
              label: "上方弹出",
              value: "bounceInUp"
            }
          ]
        },
        {
          label: "渐显",
          options: [
            {
              label: "渐显",
              value: "fadeIn"
            },
            {
              label: "下方渐显",
              value: "fadeInDown"
            },
            {
              label: "左方渐显",
              value: "fadeInLeft"
            },
            {
              label: "右方渐显",
              value: "fadeInRight"
            },
            {
              label: "上方渐显",
              value: "fadeInUp"
            }
          ]
        },
        {
          label: "旋转",
          options: [
            {
              label: "旋转",
              value: "rotateIn"
            },
            {
              label: "左下旋转",
              value: "rotateInDownLeft"
            },
            {
              label: "右下旋转",
              value: "rotateInDownRight"
            },
            {
              label: "左上旋转",
              value: "rotateInUpLeft"
            },
            {
              label: "右上旋转",
              value: "rotateInUpRight"
            }
          ]
        },
        {
          label: "滑动",
          options: [
            {
              label: "上滑进入",
              value: "slideInUp"
            },
            {
              label: "下滑进入",
              value: "slideInDown"
            },
            {
              label: "左滑进入",
              value: "slideInLeft"
            },
            {
              label: "右滑进入",
              value: "slideInRight"
            }
          ]
        },
        {
          label: "其他",
          options: [
            {
              label: "滚动进入",
              value: "rollIn"
            },
            {
              label: "不规则进入",
              value: "jackInTheBox"
            }
          ]
        }
      ]
    };
  },
  mixins:[mixins],
  watch:{
   panimate(val){
     if(this.panimate){
      const style = `<style>.${this.panimate}-enter-active {
            animation:${this.panimate} ${this.animate['animation-duration']}s;
            animation-delay:${this.animate['animation-delay']}s
          }
          .${this.panimate}-leave-active {
            animation: ${this.panimate} ${this.animate['animation-duration']}s reverse;
          }
          
          </style>`

           $('head', window.document).append(style);
     }

   }
  },
  methods:{
    selectPage(idx,path){
      this.clickTabIdx = idx;
      this.open({
        status:true,
        page:path
      })
    },
    stop(){
      clearInterval(this.inter)
    },
    play(){
      this.setPageInterval();
    },
    setPageInterval(){
      debugger;
    let i=0;
   let paths=['ad1/page1','ad1/page2'];
   this.open({
     status:true,
     page:'ad1/page1'
   })
    this.inter = setInterval(()=>{
          console.log(i);
        if(!paths[i]){
          i=0;
        };
          this.open({
            status:true,
            page:paths[i],
            path:paths[i]
          })
          i++;

        },3000)
    }
  },
  mounted(){
      this.setPageInterval();
  }

}
</script>

<style  lang="scss" scoped>
.aweb-container {
  position: absolute;
  top: 0px;
  bottom: 0px;
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
 .ad-layout-left-ctn{
   padding: 12px;
   box-sizing: border-box;
   text-align: center;
   .ad-page-mini{
          width: 70%;
        height: 150px;
        margin: 12px auto;
        background-image: url('/img/admini.png'); 
        background-size: cover;
        background-position: center center;
        position: relative;
        overflow: hidden;
        &:hover{
          transform: scale(1.1);
        }
         .ad-flag{
            position: absolute;  
            height: 20px;
            line-height: 20px;
            text-align: center;
            width: 74px;
            color: #a2a0a0;
            background-color: rgb(53,53,53);
         }
        .ad-flag-left{
          transform: rotate(-45deg);
          left: -30px;
          top: -3px;
        }

        &.actived{
          .ad-flag{
            color:#fff;
            background-color: #FF5722; 
          }
   
        }
     
   }
 }
 .ad-layout-right-ctn{
   .ad-config-item{
     padding: 10px 6px;
   }
 }
 .ad-layout-left-ctn,
 .ad-layout-right-ctn{
    height: 100%;
    background:rgb(91,91,92);
    color: #e6e5e5;
 }
}
</style>