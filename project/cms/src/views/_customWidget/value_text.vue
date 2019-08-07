<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1562239317513" :wid="`1562239317513`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1562239326023" :wid="`1562239326023`" :index="0" :pid="`1562239317513`"></v2-component-text></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2-component-text class="V2Widget" id="1562239327057" :wid="`1562239327057`" :index="1" :pid="`1562239317513`"></v2-component-text></el-row></v2container></el-row></v2container></template>
<script>
            import {root,cpt,widget} from '@/ideLib/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[50,50],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"textStyle":{"text-align":"center","margin":"","padding":"","height":"'50px'","width":"100%","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"'black'","text-decoration":"","top":"","right":"","bottom":"","left":"","margin-top":"","margin-right":"","margin-bottom":"","margin-left":"","border-width":"","border-top-width":"","border-right-width":"","border-bottom-width":"","border-left-width":"","border-radius":"","border-bottom-right-radius":"","border-bottom-left-radius":"","padding-top":"","padding-right":"","padding-bottom":"","padding-left":"","max-height":"","max-width":"","min-height":"","min-width":"","background-color":"rgba(0, 188, 212, 0.09)"}},"text":"value","editable":false,"__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1562239326023,"pid":1562239317513},{"style":{"textStyle":{"text-align":"center","margin":"","padding":"","height":"'50px'","width":"100%","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"'black'","text-decoration":"","top":"","right":"","bottom":"","left":"","margin-top":"","margin-right":"","margin-bottom":"","margin-left":"","border-width":"","border-top-width":"","border-right-width":"","border-bottom-width":"","border-left-width":"","border-radius":"","border-bottom-right-radius":"","border-bottom-left-radius":"","padding-top":"","padding-right":"","padding-bottom":"","padding-left":"","max-height":"","max-width":"","min-height":"","min-width":"","background-color":"rgba(0, 188, 212, 0.09)"}},"text":"text","editable":false,"__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1562239327057,"pid":1562239317513}],"events":{},"realSize":[null,null],"id":1562239317513,"pid":"root"}],"events":{}}},
                        
                    }
                },
                props:{
                  value:{default:()=>{return '值'}},
text:{default:()=>{return '文本'}},
fontColor:{default:()=>{return 'black'}},
valueHeight:{default:()=>{return '50px'}}
                },
                mixins:[root,cpt,widget],
                
                methods:{},
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.value, dataStr:"value", wid:1562239326023, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.fontColor, dataStr:"fontColor", wid:1562239326023, modelKey:"style.textStyle.color" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.valueHeight, dataStr:"valueHeight", wid:1562239326023, modelKey:"style.textStyle.height" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text, dataStr:"text", wid:1562239327057, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.fontColor, dataStr:"fontColor", wid:1562239327057, modelKey:"style.textStyle.color" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.valueHeight, dataStr:"valueHeight", wid:1562239327057, modelKey:"style.textStyle.height" });/**bind over**/
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