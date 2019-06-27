<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1560508176726" :wid="`1560508176726`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1560508178087" :wid="`1560508178087`" :index="0" :pid="`1560508176726`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1560508179741" :wid="`1560508179741`" :index="0" :pid="`1560508178087`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1561106695894" :wid="`1561106695894`" :index="0" :pid="`1560508179741`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1561106699504" :wid="`1561106699504`" :index="0" :pid="`1561106695894`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2empty class="V2Empty" id="1561106699504-0" :wid="`1561106699504-0`" :index="0" :pid="`1561106699504`"></v2empty></el-row></v2container></el-row></v2container></el-row></v2container></el-row></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[100],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-colctn","component":"v2-layout-colctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[100],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px"},"href":"v2-layout-colctn","component":"v2-layout-colctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[100],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px"},"href":"v2-layout-colctn","component":"v2-layout-colctn","children":[{"style":"","direction":"row","layout":[100],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[{"style":"","direction":"row","layout":[100],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"component":"v2-layout-colctn","href":"v2-layout-colctn","children":[null],"events":{},"id":1561106699504,"pid":1561106695894}],"events":{},"id":1561106695894,"pid":1560508179741}],"events":{},"id":1560508179741,"pid":1560508178087}],"events":{},"id":1560508178087,"pid":1560508176726}],"events":{},"id":1560508176726,"pid":"root"}],"events":{}}},
                        bg:'red',
inputval:'hahahha',
title:'30px',
list:[{
    id:'1',
    bg:'red'
},{
    id:'2',
    bg:'green'
}],
option:{
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
                  bg:{default:()=>{return 'red'}},
inputval:{default:()=>{return 'hahahha'}},
title:{default:()=>{return '30px'}},
list:{default:()=>{return [{
    id:'1',
    bg:'red'
},{
    id:'2',
    bg:'green'
}]}},
option:{default:()=>{return {
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
}}}
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