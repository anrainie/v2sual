<template>
  <!-- 最终的加载页 -->
  <div>

   <router-view ></router-view>
  
 
  </div>
</template>


<script>
import {mixins} from '@v2-lib/vue.spa.plugin'


export default {
  data(){
    return {
      inter:{},
      currentIndex:0,
      stopFlag:false
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
          this.open({
            status:true,
            page:this.pages[this.currentIndex],
            path:this.pages[this.currentIndex]
          })
          this.currentIndex++;
    },
    setPageInterval(){
    
    this.inter = setInterval(()=>{
      
        if(!this.pages[this.currentIndex]){
          this.currentIndex=0;
        };
        
          this.open({
            status:true,
            page:this.pages[this.currentIndex],
            path:this.pages[this.currentIndex]
          })
          this.currentIndex++;

        },3000)
    }
  },
  mounted(){
    
    this.setPageInterval();
  }
}
</script>