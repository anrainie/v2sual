<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:77%;" key="0"><v2-component-image class="V2Widget" :class="[`clickableImage`]" id="1567419106177" :wid="`1567419106177`" :index="0" :pid="`root`"></v2-component-image></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:23%;" key="1"><v2-component-text class="V2Widget" :class="[`image_text`]" id="1567419142337" :wid="`1567419142337`" :index="1" :pid="`root`"></v2-component-text></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","layout":[77,23],"direction":"row","children":[{"src":"${img}","fixation":false,"ctnClass":"","customClass":"clickableImage","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{"_root":{"click.native":["jump"]},"imgComponent":{}},"id":1567419106177,"pid":1567419069831,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${text}","editable":false,"ctnClass":"","customClass":"image_text","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567419142337,"pid":1567419069831,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"style":{},"pid":"root-0","id":1567419069831,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":[]}],"events":{},"ctnClass":"","customClass":"","realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        
                    }
                },
                props:{
                  img:{default:()=>{return `img/finhelper/icon1.png`}},
text:{default:()=>{return `存款利率`}}
                },
                mixins:[root,widget,cpt,events,mixins],
                
                methods:{jump(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = this.value1;
})();
                    /*overview over*/
                    
                    
              }, },
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.text, dataStr:"text", wid:1567419142337, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.img, dataStr:"img", wid:1567419106177, modelKey:"src" });/**bind over**/
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