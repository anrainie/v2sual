<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1561452634792" :wid="`1561452634792`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1561452636302" :wid="`1561452636302`" :index="0" :pid="`1561452634792`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1561452639257" :wid="`1561452639257`" :index="0" :pid="`1561452636302`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-input class="V2Widget" id="1561452643342" :wid="`1561452643342`" :index="0" :pid="`1561452639257`"></v2-form-input></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="1" style="height:100%;"><v2-form-inputnumber class="V2Widget" id="1561452644666" :wid="`1561452644666`" :index="1" :pid="`1561452639257`"></v2-form-inputnumber></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1561452640009" :wid="`1561452640009`" :index="1" :pid="`1561452636302`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-switch class="V2Widget" id="1561452646853" :wid="`1561452646853`" :index="0" :pid="`1561452640009`"></v2-form-switch></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="1" style="height:100%;"><v2-form-radio class="V2Widget" id="1561452649455" :wid="`1561452649455`" :index="1" :pid="`1561452640009`"></v2-form-radio></el-col></v2container></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1561452637831" :wid="`1561452637831`" :index="1" :pid="`1561452634792`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1561452641208" :wid="`1561452641208`" :index="0" :pid="`1561452637831`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-input class="V2Widget" id="1561452672198" :wid="`1561452672198`" :index="0" :pid="`1561452641208`"></v2-form-input></el-col><el-col class="V2ContainerBlock" :span="12" key="1" style="height:100%;"><v2empty class="V2Empty" id="1561452641208-1" :wid="`1561452641208-1`" :index="1" :pid="`1561452641208`"></v2empty></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1561452637831-1" :wid="`1561452637831-1`" :index="1" :pid="`1561452637831`"></v2empty></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-rowctn","href":"v2-layout-rowctn","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1561452643342,"pid":1561452639257},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","labelWitdh":"80px","titleMode":"col","value":"1","disabled":false,"isRequired":false,"min":"1","max":"10","step":"1","precision":"1","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-form-inputnumber","href":"v2-form-inputnumber","children":[],"events":{},"id":1561452644666,"pid":1561452639257}],"events":{},"id":1561452639257,"pid":1561452636302},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-rowctn","href":"v2-layout-rowctn","children":[{"style":{"title":{"font-size":"","font-weight":"","color":""},"switch":{"margin":"","padding":"","height":""}},"label":"标题","labelWitdh":"80px","titleMode":"col","value":false,"activeText":"开","inactiveText":"关","disabled":false,"isRequired":false,"__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-form-switch","href":"v2-form-switch","children":[],"events":{},"id":1561452646853,"pid":1561452640009},{"style":{"label":{"font-size":"","font-weight":"","color":""},"radio":{"margin":"","border-width":"","border-radius":"","padding":"","height":"","width":""},"font":{"padding-left":"","font-size":"","color":""}},"label":"标题","labelWitdh":"80px","titleMode":"col","value":"","isRequired":false,"options":[{"active":"true","text":"文本","disabled":false,"border":false,"label":""},{"active":true,"text":"文本","disabled":false,"border":false,"label":""}],"__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-form-radio","href":"v2-form-radio","children":[],"events":{},"id":1561452649455,"pid":1561452640009}],"events":{},"id":1561452640009,"pid":1561452636302}],"events":{},"id":1561452636302,"pid":1561452634792},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-rowctn","href":"v2-layout-rowctn","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1561452672198,"pid":1561452641208},null],"events":{},"id":1561452641208,"pid":1561452637831},null],"events":{},"id":1561452637831,"pid":1561452634792}],"events":{},"id":1561452634792,"pid":"root"}],"events":{}}},
                        name:'A'
                    }
                },
                props:{
                  name:{default:()=>{return 'A'}}
                },
                mixins:[root],
                
                methods:{},
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.name, dataStr:"name", wid:1561452643342, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.name, dataStr:"name", wid:1561452672198, modelKey:"value" });/**bind over**/
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