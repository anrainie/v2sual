<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0"><v2-component-value_text class="V2Widget" id="1562308370641" :wid="`1562308370641`" :index="0" :pid="`root`" :value="test" :text="blue" :fontColor="color" :valueHeight="150px"></v2-component-value_text></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            import v2ComponentValue_text from '@/views/_customWidget/value_text.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"dataBasket":{"value":"test","text":"blue","fontColor":"color","valueHeight":"150px"},"__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-value_text","href":"v2-component-value_text","cptpath":"\\src\\views\\_customWidget\\value_text.vue","children":[],"events":{},"id":1562308370641,"pid":"root"}],"events":{}}},
                        test:123123123,
list:[1,2,3,4],
largeObject:{
    test:1,
    namdf:123,
    afa:123,
    badfasf:513412,
    o1:{
        o2:'o2 value'
    },
},
color:'yellow',
objList:[
    {name:1,test:{a:{name:'asd'}}},{name:'小明'},{name:'张洋'}
],
echartConfig:{
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
}
                    }
                },
                props:{
                  
                },
                mixins:[root],
                components:{v2ComponentValue_text},
                methods:{},
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.echartConfig, dataStr:"echartConfig", wid:1562056401580, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.echartConfig, dataStr:"echartConfig", wid:1562058497768, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.echartConfig, dataStr:"echartConfig", wid:1562220446837, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.test, dataStr:"test", wid:1562308370641, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.color, dataStr:"color", wid:1562308370641, modelKey:"fontColor" });/**bind over**/
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