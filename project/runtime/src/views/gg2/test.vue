<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2-layout class="V2Widget" id="1561710641556" :wid="`1561710641556`" :index="0" :pid="`root`"><v2-layout class="V2Widget" id="1561710642635" :wid="`1561710642635`" :index="0" :pid="`1561710641556`"><v2-form-input class="V2Widget" id="1561710644447" :wid="`1561710644447`" :index="0" :pid="`1561710642635`"></v2-form-input><v2empty class="V2Empty" id="1561710642635-1" :wid="`1561710642635-1`" :index="1" :pid="`1561710642635`"></v2empty></v2-layout><v2-component-btn class="V2Widget" :class="'v2left v2bottom '" id="1561712212711" :wid="`1561712212711`" :index="1" :pid="`1561710641556`"></v2-component-btn></v2-layout></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[50,50],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[50,50],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1561710644447,"pid":1561710642635},null],"events":{},"id":1561710642635,"pid":1561710641556},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":"","color":""},"btnWrapStyle":{"margin":"","margin-top":"","margin-right":"","margin-bottom":"","margin-left":"","padding":"","padding-top":"","padding-right":"","padding-bottom":"","padding-left":""}},"btnName":"按钮","shape":"def","loading":false,"disabled":false,"__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{},"id":1561712212711,"pid":1561710641556,"layoutClass":["v2left","v2bottom"],"lastLayoutClass":[null,null]}],"events":{},"id":1561710641556,"pid":"root"}],"events":{}}},
                        
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