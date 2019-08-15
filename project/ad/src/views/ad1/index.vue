<template>
  <!-- 最终的加载页 -->
  <div  class="ad-index">
   
             <transition>
              <pageCtn :page="pageUrl" :style="config.display" class="ad-page-ctn"></pageCtn>
             </transition>
  </div>
</template>


<script>
import {mixins} from '@v2-lib/vue.spa.plugin'
import { getbrotherPageList } from '@/api/api.js';
import pageCtn from '@v2-lib/vue.spa.plugin/components/asyncComponent';
const config  = require('./config.json');
export default {
  data(){
    return {
      inter:{},
      clickTabIdx: null,
      currentIndex:0,
      stopFlag:false,
      panimate:null,
      config:config,
      pageUrl:''
    }
  },
  mixins: [mixins],
  methods:{
    stop(){
      clearInterval(this.inter)
      this.stopFlag = false;
    },
    play(){
       this.setPageInterval();
       this.stopFlag = true;
    },
    next(){
       if(!this.pages[this.currentIndex]){
          this.currentIndex=0;
        };
        this.pageUrl = this.pages[this.currentIndex];

        this.currentIndex++;
    },
    setPageInterval(){
    
    this.inter = setInterval(()=>{
      
        if(!this.pages[this.currentIndex]){
          this.currentIndex=0;
        };
        
         this.pageUrl = this.pages[this.currentIndex];

          this.currentIndex++;

        },3000)
    }
  },
  mounted(){
 
     this.setPageInterval();
  },
  components:{
    pageCtn
  }
}
</script>
<style lang="scss">
.ad-page-ctn{
  position:relative;
  margin:0 auto;
}
</style>