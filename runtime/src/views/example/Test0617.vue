<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1560751335260" :wid="`1560751335260`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:20%;width:100%;" key="0"><v2empty class="V2Empty" id="1560751335260-0" :wid="`1560751335260-0`" :index="0" :pid="`1560751335260`"></v2empty></el-row><el-row class="V2ContainerBlock" style="height:40%;width:100%;" key="1"><v2container id="1560751375661" :wid="`1560751375661`" :index="1" :pid="`1560751335260`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="8" key="0" style="height:100%;"><v2-component-echart class="V2Widget" id="1560751404343" :wid="`1560751404343`" :index="0" :pid="`1560751375661`"></v2-component-echart></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="8" key="1" style="height:100%;"><v2-component-echart class="V2Widget" id="1560751458361" :wid="`1560751458361`" :index="1" :pid="`1560751375661`"></v2-component-echart></el-col><el-col class="V2ContainerBlock" :span="8" key="2" style="height:100%;"><v2empty class="V2Empty" id="1560751375661-2" :wid="`1560751375661-2`" :index="2" :pid="`1560751375661`"></v2empty></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:40%;width:100%;" key="2"><v2container id="1560751383614" :wid="`1560751383614`" :index="2" :pid="`1560751335260`"><el-col class="V2ContainerBlock" :span="8" key="0" style="height:100%;"><v2empty class="V2Empty" id="1560751383614-0" :wid="`1560751383614-0`" :index="0" :pid="`1560751383614`"></v2empty></el-col><el-col class="V2ContainerBlock" :span="8" key="1" style="height:100%;"><v2empty class="V2Empty" id="1560751383614-1" :wid="`1560751383614-1`" :index="1" :pid="`1560751383614`"></v2empty></el-col><el-col class="V2ContainerBlock" :span="8" key="2" style="height:100%;"><v2empty class="V2Empty" id="1560751383614-2" :wid="`1560751383614-2`" :index="2" :pid="`1560751383614`"></v2empty></el-col></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[20,40,40],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-colctn","component":"v2-layout-colctn","children":[null,{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[33,33,33],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-rowctn","component":"v2-layout-rowctn","children":[{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"400px","width":"550px"}},"configs":"e1Config","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-component-echart","component":"v2-component-echart","children":[],"events":{},"id":1560751404343,"pid":1560751375661},{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"400px","width":"550px"}},"configs":"e2Config","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-component-echart","component":"v2-component-echart","children":[],"events":{},"id":1560751458361,"pid":1560751375661},null],"events":{},"id":1560751375661,"pid":1560751335260},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[33,33,33],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-rowctn","component":"v2-layout-rowctn","children":[null,null,null],"events":{},"id":1560751383614,"pid":1560751335260}],"events":{},"id":1560751335260,"pid":"root"}],"events":{}}},
                        e1Config:{
   title : {
        text: '各条线服务得分',
        subtext: '单位：分'
    },
    legend: {
        data:['得分']
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            magicType: {type: ['line', 'bar']},
        }
    },
    xAxis : [
        {
            type : 'category',
            data : ['零售','投行','自营','资产','研发','机构','风控','合规','稽查']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min:0,
            max:100
        }
    ],
    series : [
        {
            name:'得分',
            type:'bar',
            data:[0,0,0,0,0,0,0,0,0],
            itemStyle:{
                normal: {
                    color: function (params) {
                        return 'rgb(0, 0, 255)';
                    },
                    label:{
                        show:true,
                        position:'top',
                        textStyle:{
                            color:'blue',
                            fontSize:16
                        }
                    }
                }
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ] 
},
e2Config:{
    title:{
        text:'各条线成本占比',
        subtext: '单位：%'
    },
   tooltip : {
        trigger: 'item',
        formatter: "{b}:({d}%)"
    },
    calculable : false,
    series : [
        {
            type:'pie',
            radius : [100, 140],
            
            // for funnel
            x: '60%',
            width: '35%',
            funnelAlign: 'left',
            
            data:[
                {value:335, name:'合规'},
                {value:310, name:'投行'},
                {value:234, name:'机构'},
                {value:135, name:'研发'},
                {value:200, name:'稽查'},
                {value:251, name:'自营'},
                {value:147, name:'资产'},
                {value:102, name:'零售'},
                {value:150, name:'风控'}
            ]
        }
    ]
}
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
                    
                    ctx.poll_runnableList.push({
                            run:async()=>{
   const t1 = await pipe.get('/v1/ds/excel/poll',{
    number:9
})
.then(function (response) {
if (response.data.status) {
return response.data.content.content;
}
throw response.data.errorMsg;
})

;
   const t2 = await pipe.get('/v1/ds/excel/poll',{
    number:9,
    max:500,
    min:100
 })
.then(function (response) {
if (response.data.status) {
return response.data.content.content;
}
throw response.data.errorMsg;
})
;
   const t3 = await new Promise(resolve=>{  
this.e1Config.series[0].data = t1;
this.e2Config.series[0].data.map((item,index)=>{
item.value=t2[index];
}) ;
$('#1560751404343')[0].__vue__.chart.setOption(this.e1Config,true);
$('#1560751458361')[0].__vue__.chart.setOption(this.e2Config,true)
 })
;

},
                            freq:10
                        })
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.e1Config, dataStr:"e1Config", wid:1560751404343, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.e2Config, dataStr:"e2Config", wid:1560751458361, modelKey:"configs" });/**bind over**/
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    
                    ctx.__resume();
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
                        
                }
            };
        </script>