<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2loop class="V2Widget" id="1560764400657" :wid="`1560764400657`" :index="0" :pid="`root`"><template v-slot="scope"><v2-component-test1 class="V2Widget" :id="`1560764400657-${scope._key}`" :wid="`1560764400657-${scope._key}`" :index="scope._key" :pid="`1560764400657`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key"></v2-component-test1></template></v2loop></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"__type":"loop","__loopTarget":"list","__loopKey":"","__capacity":"1","component":"v2-component-test1","href":"v2-component-test1","cptpath":"\\src\\views\\_customWidget\\test1.vue","children":[],"events":{},"id":1560764400657,"pid":"root"}],"events":{}}},
                        list:[
    {},{},{}
]
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
                    
                    
                    /**bind**/ctx.$store.commit("bind",{ vueObj:this, data:this.list, dataStr:"list", wid:1560764400657, modelKey:"__loopTarget" });/**bind over**/
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