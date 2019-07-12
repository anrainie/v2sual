<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1561105983574" :wid="`1561105983574`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2loop class="V2Widget" id="1561111620055" :wid="`1561111620055`" :index="0" :pid="`1561105983574`"><template v-slot="scope"><v2-form-input class="V2Widget" :id="`1561111620055-${scope._key}`" :wid="`1561111620055-${scope._key}`" :index="scope._key" :pid="`1561111620055`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key"></v2-form-input></template></v2loop></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2loop class="V2Widget" id="1561361787909" :wid="`1561361787909`" :index="1" :pid="`1561105983574`"><template v-slot="scope"><v2-component-test1 class="V2Widget" :id="`1561361787909-${scope._key}`" :wid="`1561361787909-${scope._key}`" :index="scope._key" :pid="`1561361787909`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key"></v2-component-test1></template></v2loop></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            import v2ComponentTest1 from '@/views/_customWidget/test1.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":"","direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":{},"label":"标题","titleMode":"col","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"disabled":false,"isRequired":false,"autoComplete":false,"suggestion":"","rules":"","__type":"loop","__loopTarget":[{"name":1,"color":"red"},{"name":2,"color":"blue"},{"name":3,"color":"yellow"}],"__loopKey":"","__capacity":"1","component":"v2-form-input","href":"v2-form-input","children":[],"events":{},"id":1561111620055,"pid":1561105983574},{"__type":"loop","__loopTarget":[{"name":1,"color":"red"},{"name":2,"color":"blue"},{"name":3,"color":"yellow"}],"__loopKey":"","__capacity":"1","component":"v2-component-test1","href":"v2-component-test1","cptpath":"\\src\\views\\_customWidget\\test1.vue","children":[],"events":{},"id":1561361787909,"pid":1561105983574}],"events":{},"id":1561105983574,"pid":"root"}],"events":{}}},
                        itemList:[
    {name:1,color:'red'},
    {name:2,color:'blue'},
    {name:3,color:'yellow'},
],
name:""
                    }
                },
                props:{
                  itemList:{default:()=>{return [
    {name:1,color:'red'},
    {name:2,color:'blue'},
    {name:3,color:'yellow'},
]}},
name:{default:()=>{return ""}}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.itemList, dataStr:"itemList", wid:1561111620055, modelKey:"__loopTarget" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.itemList, dataStr:"itemList", wid:1561361787909, modelKey:"__loopTarget" });/**bind over**/
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