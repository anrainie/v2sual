<template><v2container :wid="`root`" style="width:300px;height:200px"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563527903885" :wid="`1563527903885`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-component-image class="V2Widget" id="1563528276337" :wid="`1563528276337`" :index="0" :pid="`1563527903885`"></v2-component-image></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1563529281068" :wid="`1563529281068`" :index="1" :pid="`1563527903885`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1563529445969" :wid="`1563529445969`" :index="0" :pid="`1563529281068`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-component-text class="V2Widget" id="1563529271199" :wid="`1563529271199`" :index="0" :pid="`1563529445969`"></v2-component-text></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2loop class="V2Widget" id="1563529414146" :wid="`1563529414146`" :index="1" :pid="`1563529445969`"><template v-slot="scope"><v2-component-text class="V2Widget" :id="`1563529414146-${scope._key}`" :wid="`1563529414146-${scope._key}`" :index="scope._key" :pid="`1563529414146`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key"></v2-component-text></template></v2loop></el-row></v2container></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root,cpt,widget} from '@/ideLib/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","rules":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{},"src":"/img/logo.png","height":"","width":"80px","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"id":1563528276337,"pid":1563527903885,"commonStyle":{"position":"relative","top":"10px","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}},{"component":"v2-layout-colctn","href":"v2-layout-colctn","layout":[100],"direction":"row","children":[{"component":"v2-layout-colctn","href":"v2-layout-colctn","layout":[50,50],"direction":"row","children":[{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${cardID}","editable":false,"customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563529271199,"pid":1563529445969,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"0px"}},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${$item.tit + $item.figure}","editable":false,"customClass":"","__type":"loop","__loopTarget":"balance","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1563529414146,"pid":1563529445969,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":""}}],"style":{},"pid":1563529281068,"id":1563529445969}],"style":{},"pid":1563527903885,"id":1563529281068}],"events":{},"layout":[50,50],"realSize":[null,null],"id":1563527903885,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"200px","height":"100px","text-align":"","background-color":"rgba(26, 114, 207, 0.68)","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":"","color":"","opacity":1,"border-radius":"10px"}}],"events":{}}},
                        
                    }
                },
                props:{
                  cardID:{default:()=>{return '6666 **** **** 9999'}},
balance:{default:()=>{return [
    {tit: '活期余额', figure: '100.00'},
    {tit: '定期余额', figure: '100.00'}
]}}
                },
                mixins:[root,cpt,widget],
                
                methods:{},
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.cardID, dataStr:"cardID", wid:1563529271199, modelKey:"text" });
ctx.$store.commit("registerBind",{ dataStr:"$item.tit + $item.figure", wid:1563529414146, modelKey:"text" });/**bind over**/
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