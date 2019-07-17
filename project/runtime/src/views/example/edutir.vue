<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1562656768155" :wid="`1562656768155`" :index="0" :pid="`root`"><el-col class="V2ContainerBlock" :span="5" key="0" style="height:100%;"><v2empty class="V2Empty" id="1562656768155-0" :wid="`1562656768155-0`" :index="0" :pid="`1562656768155`"></v2empty></el-col><el-col class="V2ContainerBlock" :span="19" key="1" style="height:100%;"><v2container id="1562656867342" :wid="`1562656867342`" :index="1" :pid="`1562656768155`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-component-tree class="V2Widget" id="1562656883918" :wid="`1562656883918`" :index="0" :pid="`1562656867342`"></v2-component-tree></el-col><el-col class="V2ContainerBlock" :span="12" key="1" style="height:100%;"><v2container id="1562656824750" :wid="`1562656824750`" :index="1" :pid="`1562656867342`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-form-editor class="V2Widget" id="1562656769962" :wid="`1562656769962`" :index="0" :pid="`1562656824750`"></v2-form-editor></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2-component-tree class="V2Widget" id="1562656836298" :wid="`1562656836298`" :index="1" :pid="`1562656824750`"></v2-component-tree></el-row></v2container></el-col></v2container></el-col></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[20,80],"rules":"","__type":"","__loopTarget":"","__capacity":"1","def":{"defheight":true,"defwidth":true,"defborder":true,"defbackgroundStyle":false,"defpaddingStyle":false},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px"},"component":"v2-layout","href":"v2-layout","children":[null,{"component":"v2-layout-colctn","href":"v2-layout-colctn","layout":[50,50],"direction":"col","children":[{"style":{"treeWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"","defaultProps":{"children":"children","label":"label"},"showCheckbox":false,"nodeKey":"","defExpanded":[],"defChecked":[],"__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-tree","href":"v2-component-tree","children":[],"events":{},"id":1562656883918,"pid":1562656867342},{"component":"v2-layout-colctn","href":"v2-layout-colctn","layout":[50,50],"direction":"row","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请编辑","value":"","disabled":false,"isRequired":false,"rules":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-editor","href":"v2-form-editor","children":[],"events":{},"id":1562656769962,"pid":1562656824750},{"style":{"treeWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"","defaultProps":{"children":"children","label":"label"},"showCheckbox":false,"nodeKey":"","defExpanded":[],"defChecked":[],"__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-tree","href":"v2-component-tree","children":[],"events":{},"id":1562656836298,"pid":1562656824750}],"style":{},"pid":1562656867342,"id":1562656824750}],"style":{},"pid":1562656768155,"id":1562656867342}],"events":{},"realSize":[null,null],"id":1562656768155,"pid":"root"}],"events":{}}},
                        tree1:[{
    label:'dsa',
    children:[{
        label:'dsad'
    }]
}]
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.tree1, dataStr:"tree1", wid:1562656836298, modelKey:"configs" });/**bind over**/
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