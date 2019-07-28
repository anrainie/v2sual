<template><v2container :wid="`root`" style="width:100%;height:100%"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1562739101492" :wid="`1562739101492`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-page class="V2Widget" id="1562828607170" :wid="`1562828607170`" :index="0" :pid="`1562739101492`"></v2-page></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2-component-test1 class="V2Widget" id="1562831205732" :wid="`1562831205732`" :index="1" :pid="`1562739101492`" :name="1"></v2-component-test1></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            import v2ComponentTest1 from '@/views/_customWidget/test1.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[50,50],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout","href":"v2-layout","children":[{"style":{"wrapStyle":{"background-color":"","margin":"","padding":""}},"page":"example/Test0620","params":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-page","href":"v2-page","children":[],"events":{},"id":1562828607170,"pid":1562739101492},{"dataBasket":{"name":"1"},"__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-test1","href":"v2-component-test1","cptpath":"\\src\\views\\_customWidget\\test1.vue","children":[],"events":{},"id":1562831205732,"pid":1562739101492}],"events":{},"realSize":[null,null],"id":1562739101492,"pid":"root"}],"events":{}}},
                        par:{
    id:'hahha'
}
                    }
                },
                props:{
                  
                },
                mixins:[root],
                components:{v2ComponentTest1},
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