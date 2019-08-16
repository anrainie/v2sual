	<template>
  <el-row class="aweb-container"  ref="layout" >
    
        <router-view ></router-view>
     
  </el-row> 
</template>
<script>

    
import {mixins} from '@/lib'

export default {
  name:'layout',
  data() {
    return {
    
    };
  },
  mixins:[mixins],

  mounted(){
    debugger;
      this.open({
          status:true,
          page:this.path,
          params:{
            pages:this.pages
          }
        })
  
 
  }

}
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