<template><v2-ctn-xy :wid="`root`"><v2-component-text class="V2Widget" :class="bgClass" id="1568015747450" :wid="`1568015747450`" :index="0" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1568015620560" :wid="`1568015620560`" :index="1" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="titleClass" id="1568015941557" :wid="`1568015941557`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="textClass" id="1568015972120" :wid="`1568015972120`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="valueClass" id="1568015979833" :wid="`1568015979833`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="proportionClass" id="1568015963030" :wid="`1568015963030`" :index="5" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="textClass" id="1568016278594" :wid="`1568016278594`" :index="6" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="valueClass" id="1568016279669" :wid="`1568016279669`" :index="7" :pid="`root`"></v2-component-text><v2-component-echart class="V2Widget" id="1568017186061" :wid="`1568017186061`" :index="8" :pid="`root`"></v2-component-echart></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"textStyle":{}},"customClass":"${bgClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0","left":"15%","width":"85%","height":"100%","animation-duration":"1s"},"id":1568015747450,"pid":"root","animate":["","animated"]},{"src":"${icon}","__capacity":"1","component":"v2-component-image","href":"v2-component-image","events":{},"commonStyle":{"position":"absolute","top":"0","width":"30%","height":"100%","animation-duration":"1s"},"id":1568015620560,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${title}","customClass":"${titleClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"15%","left":"32%","animation-duration":"1s"},"id":1568015941557,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${key1}","customClass":"${textClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"70%","left":"32%","animation-duration":"1s"},"id":1568015972120,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${value1}","customClass":"${valueClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"70%","left":"52%","animation-duration":"1s"},"id":1568015979833,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${proportion}","customClass":"${proportionClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"10%","left":"50%","animation-duration":"1s"},"id":1568015963030,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${key2}","customClass":"${textClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"70%","left":"65%","animation-duration":"1s"},"id":1568016278594,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${value2}","customClass":"${valueClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"70%","left":"82%","animation-duration":"1s"},"id":1568016279669,"pid":"root","animate":["","animated"]},{"configs":"${option}","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","events":{},"commonStyle":{"position":"absolute","top":"40%","left":"32%","width":"60%","height":"30%","animation-duration":"1s"},"id":1568017186061,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{},{},{},{}]}},
                        
                    }
                },
                props:{
                  icon:{default:()=>{return `img/shanghai/s_people.png`}},
bgClass:{default:()=>{return `vda_glass_bg`}},
title:{default:()=>{return `签到率`}},
proportion:{default:()=>{return `83.3%`}},
key1:{default:()=>{return `柜员总数`}},
value1:{default:()=>{return "12"}},
key2:{default:()=>{return `在线数`}},
value2:{default:()=>{return "10"}},
titleClass:{default:()=>{return `vda-propertion-text`}},
proportionClass:{default:()=>{return `vda_progress_proportion`}},
textClass:{default:()=>{return `vda-h2-text2`}},
valueClass:{default:()=>{return `vda_progress_value`}},
option:{default:()=>{return {
  grid: {
    x:'0',
    y:'0',
    x2:'0',
    y2:'0'
  },
  xAxis: {
    type: "value",
    show:false,
  },
  yAxis: {
    type: "category",
    show:false,
  },
  series: [
    {
      barWidth: 8,
      itemStyle: {
        color: {
            type: 'linear',//设置线性渐变
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
                {
                  offset: 0,
                  color: "#58A6FF"
                },
                {
                  offset: 0.5,
                  color: "#60BBFF"
                },
                {
                  offset: 1,
                  color: "#F4FBFF"
                }
            ],
        },
        barBorderRadius: 15
      },
      type: "bar",
      data: [50]
    },
    {
      type: "bar",
      barGap: "-100%",
      barWidth: 8,
      animation: false,
      z: -1,
      itemStyle: {
        color: "#2f3b4e",
        barBorderRadius: 15
      },
      data: [100]
    }
  ]
}
}}
                },
                mixins:[root,widget,cpt,events,mixins],
                
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.icon, dataStr:"icon", wid:1568015620560, modelKey:"src" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bgClass, dataStr:"bgClass", wid:1568015747450, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.proportion, dataStr:"proportion", wid:1568015963030, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.proportionClass, dataStr:"proportionClass", wid:1568015963030, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1568015941557, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.titleClass, dataStr:"titleClass", wid:1568015941557, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.key1, dataStr:"key1", wid:1568015972120, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.textClass, dataStr:"textClass", wid:1568015972120, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.value1, dataStr:"value1", wid:1568015979833, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.valueClass, dataStr:"valueClass", wid:1568015979833, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.key2, dataStr:"key2", wid:1568016278594, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.textClass, dataStr:"textClass", wid:1568016278594, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.value2, dataStr:"value2", wid:1568016279669, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.valueClass, dataStr:"valueClass", wid:1568016279669, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.option, dataStr:"option", wid:1568017186061, modelKey:"configs" });/**bind over**/
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    
                    /*overview*/
                        (async()=>{    const t4 = "";
let data = [];
data.push(parseInt(ctx.proportion.replace('%','')));
ctx.option.series[0].data = data;;
})();
                    /*overview over*/
                    
                    
                },
                beforeUpdate(){
                    let ctx = this;
                    
                },
                updated(){
                    let ctx = this;
                    
                },
                beforeDestroy(){ 
                    let ctx = this;
                        
                },
                destroyed(){
                    let ctx = this;
                        
                },
                deactivated(){
                  /**页面切出**/
                  let ctx = this;
                  
                },
                activated(){
                  /**页面切入**/
                  let ctx = this;
                  
                },

            };
        </script>
<style lang="scss">

</style>