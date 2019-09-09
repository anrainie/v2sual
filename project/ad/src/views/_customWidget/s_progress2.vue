<template><v2-ctn-xy :wid="`root`"><v2-component-text class="V2Widget" :class="titleClass" id="1568020738756" :wid="`1568020738756`" :index="0" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="proportionClass" id="1568021372495" :wid="`1568021372495`" :index="1" :pid="`root`"></v2-component-text><v2-component-echart class="V2Widget" id="1568021485927" :wid="`1568021485927`" :index="2" :pid="`root`"></v2-component-echart></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"textStyle":{}},"text":"${title}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"10%","left":"0","animation-duration":"1s"},"id":1568020738756,"pid":"root","animate":["","animated"],"customClass":"${titleClass}"},{"style":{"textStyle":{}},"text":"${proportion}","customClass":"${proportionClass}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"-20%","left":"12%","animation-duration":"1s"},"id":1568021372495,"pid":"root","animate":["","animated"]},{"configs":"${option}","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","events":{},"commonStyle":{"position":"absolute","top":"0","left":"32%","width":"65%","height":"100%","animation-duration":"1s"},"id":1568021485927,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{}]}},
                        
                    }
                },
                props:{
                  title:{default:()=>{return `签约率`}},
proportion:{default:()=>{return `89.3%`}},
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
}},
titleClass:{default:()=>{return `vda-h2-text2`}},
proportionClass:{default:()=>{return `vda-h1-num4`}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.option, dataStr:"option", wid:1568021485927, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1568020738756, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.titleClass, dataStr:"titleClass", wid:1568020738756, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.proportion, dataStr:"proportion", wid:1568021372495, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.proportionClass, dataStr:"proportionClass", wid:1568021372495, modelKey:"customClass" });/**bind over**/
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