<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1565840802331" :wid="`1565840802331`" :index="0" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="textClass" id="1565841096754" :wid="`1565841096754`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="textClass" id="1565852153584" :wid="`1565852153584`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="textClass" id="1565852170136" :wid="`1565852170136`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-value`]" id="1565852210991" :wid="`1565852210991`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-value`]" id="1565852275929" :wid="`1565852275929`" :index="5" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="textClass" id="1565852289033" :wid="`1565852289033`" :index="6" :pid="`root`"></v2-component-text><v2-component-icon class="V2Widget" id="1565852302374" :wid="`1565852302374`" :index="7" :pid="`root`"></v2-component-icon><v2-component-text class="V2Widget" :class="valueClass" id="1566269987549" :wid="`1566269987549`" :index="8" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"children":[],"component":"v2-component-image","commonStyle":{"position":"absolute","top":"-1px","left":"0px","right":"","bottom":"","width":"","height":""},"ctnClass":"","customClass":"","events":{},"height":"100%","href":"v2-component-image","src":"img/vdafolder.png","style":{},"width":"100%","__capacity":"1","__loopTarget":"","__type":"","icon":"iconkapian","name":"图片","type":"component","id":1565840802331,"animate":["","animated"],"pid":"root"},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${title}","editable":false,"ctnClass":"","customClass":"${textClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"14px","left":"31px","right":"","bottom":"","color":"","font-size":"22px"},"id":1565841096754,"animate":["","animated"],"pid":"root"},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"当前值","editable":false,"ctnClass":"","customClass":"${textClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"142px","left":"31px","right":"","bottom":""},"id":1565852153584,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"日常值","editable":false,"ctnClass":"","customClass":"${textClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"163px","left":"31px","right":"","bottom":""},"id":1565852170136,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${currentValue}","editable":false,"ctnClass":"","customClass":"vda-value","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"142px","left":"204px","right":"","bottom":""},"id":1565852210991,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${commonValue}","editable":false,"ctnClass":"","customClass":"vda-value","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"163px","left":"204px","right":"","bottom":""},"id":1565852275929,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"对比日常峰值","editable":false,"ctnClass":"","customClass":"${textClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"72px","left":"166px","right":"","bottom":""},"id":1565852289033,"pid":"root","animate":["","animated"]},{"style":{"iStyle":{"font-size":"","font-weight":"","color":""},"iWarpStyle":{"background-color":"","margin":"","padding":""}},"icon":"icon","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-icon","href":"v2-component-icon","children":[],"events":{},"commonStyle":{"position":"absolute","top":72.38751220703125,"left":189.08750915527344,"width":0,"height":0},"id":1565852302374,"animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${value}","editable":false,"ctnClass":"","customClass":"${valueClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"53px","left":"31px","font-size":"40px"},"id":1566269987549,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  title:{default:()=>{return `响应耗时`}},
persent:{default:()=>{return '50%'}},
currentValue:{default:()=>{return `222ms`}},
commonValue:{default:()=>{return `261ms`}},
icon:{default:()=>{return 'el-icon-arrow-down'}},
textClass:{default:()=>{return ['vda-f-text']}},
valueClass:{default:()=>{return ['valueUp']}},
value:{default:()=>{return `40%`}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1565841096754, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.textClass, dataStr:"textClass", wid:1565841096754, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.persent, dataStr:"persent", wid:1565841279506, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.currentValue, dataStr:"currentValue", wid:1565852210991, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.commonValue, dataStr:"commonValue", wid:1565852275929, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.valueClass, dataStr:"valueClass", wid:1566269987549, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.value, dataStr:"value", wid:1566269987549, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.textClass, dataStr:"textClass", wid:1565852153584, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.textClass, dataStr:"textClass", wid:1565852170136, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.textClass, dataStr:"textClass", wid:1565852289033, modelKey:"customClass" });/**bind over**/
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
.vda-f-text{
    color:rgb(200,170,122);
}

.valueUp{
    color:rgb(110,255,206);
}

.valueDown{
    color:rgb(236,85,84);
}

.valueNormal{
    color:rgb(254,245,202)
}
</style>