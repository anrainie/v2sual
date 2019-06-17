<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1560759825113" :wid="`1560759825113`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-form-input class="V2Widget" id="1560759829039" :wid="`1560759829039`" :index="0" :pid="`1560759825113`"></v2-form-input></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2-form-inputnumber class="V2Widget" id="1560759830627" :wid="`1560759830627`" :index="1" :pid="`1560759825113`"></v2-form-inputnumber></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-colctn","component":"v2-layout-colctn","children":[{"style":{"label":{"font-size":"px","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-form-input","component":"v2-form-input","children":[],"events":{},"id":1560759829039,"pid":1560759825113},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","labelWitdh":"80px","titleMode":"col","value":1,"disabled":false,"isRequired":false,"min":"1","max":"10","step":"1","precision":"1","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-form-inputnumber","component":"v2-form-inputnumber","children":[],"events":{},"id":1560759830627,"pid":1560759825113}],"events":{},"id":1560759825113,"pid":"root"}],"events":{}}},
                        
                    }
                },
                mixins:[root],
                methods:{},
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**//**bind over**/
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