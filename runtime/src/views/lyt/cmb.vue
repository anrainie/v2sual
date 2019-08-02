<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1562321126352" :wid="`1562321126352`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:4%;width:100%;" key="0"><v2-form-input class="V2Widget" id="1562321187936" :wid="`1562321187936`" :index="0" :pid="`1562321126352`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:96%;width:100%;" key="1"><v2-form-input class="V2Widget" id="1562321204860" :wid="`1562321204860`" :index="1" :pid="`1562321126352`"></v2-form-input></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[4,96],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"test","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1562321187936,"pid":1562321126352},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"test","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1562321204860,"pid":1562321126352}],"events":{},"realSize":["80",null],"id":1562321126352,"pid":"root"}],"events":{}}},
                        test:1
                    }
                },
                props:{
                  
                },
                mixins:[root],
                
                methods:{},
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.test, dataStr:"test", wid:1562321187936, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.test, dataStr:"test", wid:1562321204860, modelKey:"value" });/**bind over**/
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