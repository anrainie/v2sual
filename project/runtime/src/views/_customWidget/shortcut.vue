<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563505793407" :wid="`1563505793407`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563505795504" :wid="`1563505795504`" :index="0" :pid="`1563505793407`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563863985106" :wid="`1563863985106`" :index="0" :pid="`1563505795504`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:70%;width:100%;" key="0"><v2-component-icon class="V2Widget" id="1563864066109" :wid="`1563864066109`" :index="0" :pid="`1563863985106`"></v2-component-icon></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:30%;width:100%;" key="1"><v2-component-text class="V2Widget" id="1563864056180" :wid="`1563864056180`" :index="1" :pid="`1563863985106`"></v2-component-text></el-row></v2container></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root,cpt,widget} from '@/ideLib/mixin/v2-view';import events from "@/ideLib/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout-colctn","href":"v2-layout-colctn","layout":[100],"direction":"row","children":[{"component":"v2-layout-colctn","href":"v2-layout-colctn","layout":[100],"direction":"row","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","rules":"","customClass":"${compClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"style":{"iStyle":{"font-size":"","font-weight":"","color":""},"iWarpStyle":{"background-color":"","margin":"","padding":""}},"icon":"${icon}","customClass":"${iconClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-icon","href":"v2-component-icon","children":[],"events":{"_root":{},"_op_componentIcon_icon":{}},"id":1563864066109,"pid":1563863985106,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""},"ctnClass":""},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${text}","editable":false,"customClass":"${textClass}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563864056180,"pid":1563863985106,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"},"ctnClass":""}],"events":{"_root":{"click":["clickEv"]},"wrap":{}},"layout":["70","30"],"realSize":["%","%"],"id":1563863985106,"pid":1563505795504,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":""}],"style":{},"pid":1563505793407,"id":1563505795504,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"},"realSize":["%","%"]}],"style":{},"pid":"root","id":1563505793407}],"events":{}}},
                        
                    }
                },
                props:{
                  icon:{default:()=>{return 'el-icon-eleme'}},
text:{default:()=>{return '快捷键'}},
iconClass:{default:()=>{return ['shortcut__icon']}},
textClass:{default:()=>{return ['shortcut__text']}},
compClass:{default:()=>{return ['shortcut']}}
                },
                mixins:[root,widget,cpt,events],
                
                methods:{clickEv(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = alert('clicked');
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.compClass, dataStr:"compClass", wid:1563863690023, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.icon, dataStr:"icon", wid:1563863856687, modelKey:"icon" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.iconClass, dataStr:"iconClass", wid:1563863856687, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text, dataStr:"text", wid:1563863872209, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.textClass, dataStr:"textClass", wid:1563863872209, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.compClass, dataStr:"compClass", wid:1563863985106, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.icon, dataStr:"icon", wid:1563864066109, modelKey:"icon" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.iconClass, dataStr:"iconClass", wid:1563864066109, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.textClass, dataStr:"textClass", wid:1563864056180, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text, dataStr:"text", wid:1563864056180, modelKey:"text" });/**bind over**/
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