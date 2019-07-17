<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2-layout-colctn class="V2Widget" id="1561947039739" :wid="`1561947039739`" :index="0" :pid="`root`"><v2-form-input class="V2Widget" id="1561946989700" :wid="`1561946989700`" :index="0" :pid="`1561947039739`"></v2-form-input><v2container id="1561947922097" :wid="`1561947922097`" :index="1" :pid="`1561947039739`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-form-input class="V2Widget" id="1561948008863" :wid="`1561948008863`" :index="0" :pid="`1561947922097`"></v2-form-input></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1561947922097-1" :wid="`1561947922097-1`" :index="1" :pid="`1561947922097`"></v2empty></el-row></v2container></v2-layout-colctn></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="root-1" :wid="`root-1`" :index="1" :pid="`root`"></v2empty></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[50,50],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout-colctn","href":"v2-layout-colctn","layout":[50,50],"direction":"row","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1561946989700,"pid":1561947039739},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[50,50],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px"},"component":"v2-layout","href":"v2-layout","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1561948008863,"pid":1561947922097},null],"events":{},"id":1561947922097,"pid":1561947039739}],"style":{},"pid":"root","id":1561947039739},null]}},
                        
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