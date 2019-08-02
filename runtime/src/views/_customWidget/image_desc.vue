<template><v2container :wid="`root`" style="width:100px;height:120px"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1562812017950" :wid="`1562812017950`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1562832668788" :wid="`1562832668788`" :index="0" :pid="`1562812017950`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-component-icon class="V2Widget" id="1562832673225" :wid="`1562832673225`" :index="0" :pid="`1562832668788`"></v2-component-icon></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2-component-text class="V2Widget" id="1562832856390" :wid="`1562832856390`" :index="1" :pid="`1562832668788`"></v2-component-text></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root,cpt,widget} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[100],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[50,50],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"10px","border-left":"","border-top":"","border-bottom":"","border-right":"","background-color":"#fff","background-image":""},"component":"v2-layout","href":"v2-layout","children":[{"style":{"iStyle":{"font-size":"35px","font-weight":"","color":"","position":"undefined","top":"","right":"","bottom":"","left":"","float":"undefined","clear":"undefined","overflow":"undefined","overflow-y":"undefined","overflow-x":"undefined","vertical-align":"sub","text-align":"center","word-break":"undefined","align-content":"undefined","align-items":"undefined","background-repeat":"undefined","margin-top":"","margin-right":"","margin-bottom":"","margin-left":"","border-collapse":"undefined","border-width":"","border-top-width":"","border-right-width":"","border-bottom-width":"","border-left-width":"","border-style":"undefined","border-top-style":"undefined","border-right-style":"undefined","border-bottom-style":"undefined","border-left-style":"undefined","border-radius":"","border-bottom-right-radius":"","border-bottom-left-radius":"","padding-top":"","padding-right":"","padding-bottom":"","padding-left":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":"","font-variant":"undefined","font-style":"undefined","white-space":"undefined","text-decoration":"undefined","flex-direction":"undefined","flex-wrap":"undefined","justify-content":"undefined","resize":"undefined","cursor":"undefined","user-select":"undefined"},"iWarpStyle":{"background-color":"","margin":"","padding":"","width":"40px","height":"40px","position":"undefined","top":"","right":"","bottom":"","left":"","float":"undefined","clear":"undefined","overflow":"undefined","overflow-y":"undefined","overflow-x":"undefined","vertical-align":"sub","text-align":"center","word-break":"undefined","align-content":"undefined","align-items":"undefined","background-repeat":"undefined","margin-top":"","margin-right":"","margin-bottom":"","margin-left":"","border-collapse":"undefined","border-width":"","border-top-width":"","border-right-width":"","border-bottom-width":"","border-left-width":"","border-style":"undefined","border-top-style":"undefined","border-right-style":"undefined","border-bottom-style":"undefined","border-left-style":"undefined","border-radius":"","border-bottom-right-radius":"","border-bottom-left-radius":"","padding-top":"","padding-right":"","padding-bottom":"","padding-left":"","max-height":"","max-width":"","min-height":"","min-width":"","font-variant":"undefined","font-size":"","font-style":"undefined","white-space":"undefined","text-decoration":"undefined","flex-direction":"undefined","flex-wrap":"undefined","justify-content":"undefined","resize":"undefined","cursor":"undefined","user-select":"undefined"}},"icon":"${icon}","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-icon","href":"v2-component-icon","children":[],"events":{},"id":1562832673225,"pid":1562832668788},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"40px","width":"100px","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${text}","editable":false,"__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1562832856390,"pid":1562832668788}],"events":{},"realSize":[null,null],"id":1562832668788,"pid":1562812017950}],"events":{},"realSize":[null,null],"id":1562812017950,"pid":"root"}],"events":{}}},
                        
                    }
                },
                props:{
                  text:{default:()=>{return '文本标题'}},
icon:{default:()=>{return 'el-icon-user-solid'}}
                },
                mixins:[root,cpt,widget],
                
                methods:{},
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.test, dataStr:"test", wid:1562812108175, modelKey:"label" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.test, dataStr:"test", wid:1562812108175, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text, dataStr:"text", wid:1562832856390, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.icon, dataStr:"icon", wid:1562832673225, modelKey:"icon" });/**bind over**/
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
                pause(){/**页面切出**/},
                resume(){/**页面切入**/},

            };
        </script>