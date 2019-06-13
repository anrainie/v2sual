<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1560323132688" :wid="`1560323132688`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:13%;width:100%;" key="0"><v2container id="1560323158789" :wid="`1560323158789`" :index="0" :pid="`1560323132688`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-input class="V2Widget" id="1560323162850" :wid="`1560323162850`" :index="0" :pid="`1560323158789`"></v2-form-input></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="1" style="height:100%;"><v2-form-input class="V2Widget" id="1560323164536" :wid="`1560323164536`" :index="1" :pid="`1560323158789`"></v2-form-input></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:12%;width:100%;" key="1"><v2container id="1560323159610" :wid="`1560323159610`" :index="1" :pid="`1560323132688`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-input class="V2Widget" id="1560323172685" :wid="`1560323172685`" :index="0" :pid="`1560323159610`"></v2-form-input></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="1" style="height:100%;"><v2-form-input class="V2Widget" id="1560323174599" :wid="`1560323174599`" :index="1" :pid="`1560323159610`"></v2-form-input></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:13%;width:100%;" key="2"><v2container id="1560323160650" :wid="`1560323160650`" :index="2" :pid="`1560323132688`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-input class="V2Widget" id="1560323175735" :wid="`1560323175735`" :index="0" :pid="`1560323160650`"></v2-form-input></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="1" style="height:100%;"><v2-form-input class="V2Widget" id="1560323197410" :wid="`1560323197410`" :index="1" :pid="`1560323160650`"></v2-form-input></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:12%;width:100%;" key="3"><v2container id="1560323161790" :wid="`1560323161790`" :index="3" :pid="`1560323132688`"><el-col class="V2ContainerBlock" :span="12" key="0" style="height:100%;"><v2empty class="V2Empty" id="1560323161790-0" :wid="`1560323161790-0`" :index="0" :pid="`1560323161790`"></v2empty></el-col><el-col class="V2ContainerBlock" :span="12" key="1" style="height:100%;"><v2empty class="V2Empty" id="1560323161790-1" :wid="`1560323161790-1`" :index="1" :pid="`1560323161790`"></v2empty></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="4"><v2empty class="V2Empty" id="1560323132688-4" :wid="`1560323132688-4`" :index="4" :pid="`1560323132688`"></v2empty></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[13,12,13,12,50],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-colctn","component":"v2-layout-colctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-rowctn","component":"v2-layout-rowctn","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"机构号","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"organId","clearable":false,"disabled":true,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-form-input","component":"v2-form-input","children":[],"events":{},"id":1560323162850,"pid":1560323158789},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"流水号","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"serialId","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-form-input","component":"v2-form-input","children":[],"events":{},"id":1560323164536,"pid":1560323158789}],"events":{},"id":1560323158789,"pid":1560323132688},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-rowctn","component":"v2-layout-rowctn","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"柜员号","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"employeeId","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-form-input","component":"v2-form-input","children":[],"events":{},"id":1560323172685,"pid":1560323159610},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"复核柜员","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"employeeId2","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-form-input","component":"v2-form-input","children":[],"events":{},"id":1560323174599,"pid":1560323159610}],"events":{},"id":1560323159610,"pid":1560323132688},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-rowctn","component":"v2-layout-rowctn","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"交易号","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"tradeId","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-form-input","component":"v2-form-input","children":[],"events":{},"id":1560323175735,"pid":1560323160650},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"交易名","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"tradeName","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-form-input","component":"v2-form-input","children":[],"events":{},"id":1560323197410,"pid":1560323160650}],"events":{},"id":1560323160650,"pid":1560323132688},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-rowctn","component":"v2-layout-rowctn","children":[null,null],"events":{},"id":1560323161790,"pid":1560323132688},null],"events":{},"id":1560323132688,"pid":"root"}],"events":{}}},
                    }
                },
                props:{
                  organId:{default:()=>{return ""}},
serialId:{default:()=>{return ""}},
employeeId:{default:()=>{return ""}},
employeeId2:{default:()=>{return ""}},
tradeId:{default:()=>{return ""}},
tradeName:{default:()=>{return ""}}
                },
                mixins:[root],
                methods:{},
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    /**bind**/this.$store.commit("bind",{ vueObj:this, data:this.organId, dataStr:"organId", wid:1560323162850, modelKey:"value" });
this.$store.commit("bind",{ vueObj:this, data:this.serialId, dataStr:"serialId", wid:1560323164536, modelKey:"value" });
this.$store.commit("bind",{ vueObj:this, data:this.employeeId, dataStr:"employeeId", wid:1560323172685, modelKey:"value" });
this.$store.commit("bind",{ vueObj:this, data:this.employeeId2, dataStr:"employeeId2", wid:1560323174599, modelKey:"value" });
this.$store.commit("bind",{ vueObj:this, data:this.tradeId, dataStr:"tradeId", wid:1560323175735, modelKey:"value" });
this.$store.commit("bind",{ vueObj:this, data:this.tradeName, dataStr:"tradeName", wid:1560323197410, modelKey:"value" });/**bind over**/
                    
                },
                beforeUpdate(){
                    let ctx = this;
                    
                },
                updated(){
                    let ctx = this;
                    
                },
                beforeDestroy(){ 
                    let ctx = this;
                    /**unBind**/ctx.$store.commit("unbind",this)/**unBind over**/
                        
                },
                destroyed(){
                    let ctx = this;
                        
                }
            };
        </script>