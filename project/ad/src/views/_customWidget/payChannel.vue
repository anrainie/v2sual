<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1566302188818" :wid="`1566302188818`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`vda-text2`]" id="1566302241426" :wid="`1566302241426`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-value`]" id="1566302263724" :wid="`1566302263724`" :index="2" :pid="`root`"></v2-component-text><v2-component-echart class="V2Widget" id="1566302431024" :wid="`1566302431024`" :index="3" :pid="`root`"></v2-component-echart></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"children":[],"fixation":true,"component":"v2-component-image","commonStyle":{"position":"absolute","top":"-3px","left":"1px","width":320,"height":234},"ctnClass":"","customClass":"","events":{},"height":"100%","href":"v2-component-image","src":"img/payChannel.png","style":{},"width":"100%","__capacity":"1","__loopTarget":"","__type":"","icon":"iconkapian","name":"图片","type":"component","id":1566302188818,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${title}","editable":false,"ctnClass":"","customClass":"vda-text2","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"12px","left":"17px","font-size":"22"},"id":1566302241426,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${delay}","editable":false,"ctnClass":"","customClass":"vda-value","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"13px","left":"111px","font-size":"20"},"id":1566302263724,"pid":"root","animate":["","animated"]},{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"${config}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"41.0206px","left":"1.0168px","width":"305px","height":"172px"},"id":1566302431024,"pid":"root","animate":["","animated"]}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        
                    }
                },
                props:{
                  title:{default:()=>{return '信用卡'}},
delay:{default:()=>{return '245ms'}},
config:{default:()=>{return {
  backgroundColor:'',
  grid: {
    x:25,
    y:50,
    x2:25,
    y2:50
  },
    xAxis : [
        {
          	axisLabel:{
            	textStyle:{
            		color:'rgb(217,147,58)'
            	}
          	},
            type : 'category',
            data : ['12:30','12:31','12:32','12:33','12:34','12:35','12:36','12:37','12:38','12:39',
                  	'12:40','12:41','12:42','12:43','12:44','12:45','12:46','12:47','12:48','12:49',
                    '12:50','12:51','12:52','12:53','12:54','12:55','12:56','12:57','12:58','12:59','13:00']
        }
    ],
    yAxis : [
        {
           	show:false,
            type : 'value',
            min:0,
            max:350
        }
    ],
    series : [
          {
              name:'响应时间',
              type:'bar',
              data:[251,261,264,274,259,240,257,269,289,270,
                    256,276,267,292,300,313,296,311,303,292,
                    323,307,298,311,270,256,233,256,279,241,236],
              itemStyle:{
                  normal: {
                      color:'rgb(217,147,58)'
                  },
              },
            markLine : {
                symbol:'none',
                itemStyle:{
                  normal:{
                    lineStyle:{
                        type:'solid',
                        color:'red',
                    },
                    label:{
                        show:true,
                       position:'start'
                    }
                  }
                },
                data : [
                    {
                    type : 'average', 
                      name: '平均值',
                    }
                ],
            } 
          }
      ] 
}}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1566302241426, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.delay, dataStr:"delay", wid:1566302263724, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.config, dataStr:"config", wid:1566302431024, modelKey:"configs" });/**bind over**/
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    
                    
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