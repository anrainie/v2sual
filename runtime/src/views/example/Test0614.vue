<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0"><v2container id="1560479382866" :wid="`1560479382866`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:20%;width:100%;" key="0"><v2container id="1560479386929" :wid="`1560479386929`" :index="0" :pid="`1560479382866`"><el-col class="V2ContainerBlock" :span="24" key="0" style="height:100%;"><v2container id="1560503337303" :wid="`1560503337303`" :index="0" :pid="`1560479386929`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1560503339074" :wid="`1560503339074`" :index="0" :pid="`1560503337303`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-select class="V2Widget" id="1560503353723" :wid="`1560503353723`" :index="0" :pid="`1560503339074`"></v2-form-select></el-col><el-col class="V2ContainerBlock" :span="12" key="1" style="height:100%;"><v2empty class="V2Empty" id="1560503339074-1" :wid="`1560503339074-1`" :index="1" :pid="`1560503339074`"></v2empty></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1560503337303-1" :wid="`1560503337303-1`" :index="1" :pid="`1560503337303`"></v2empty></el-row></v2container></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:40%;width:100%;" key="1"><v2container id="1560479501971" :wid="`1560479501971`" :index="1" :pid="`1560479382866`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="8" key="0" style="height:100%;"><v2-component-echart class="V2Widget" id="1560479912609" :wid="`1560479912609`" :index="0" :pid="`1560479501971`"></v2-component-echart></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="8" key="1" style="height:100%;"><v2-component-echart class="V2Widget" id="1560481373685" :wid="`1560481373685`" :index="1" :pid="`1560479501971`"></v2-component-echart></el-col><el-col class="V2ContainerBlock" :span="8" key="2" style="height:100%;"><v2empty class="V2Empty" id="1560479501971-2" :wid="`1560479501971-2`" :index="2" :pid="`1560479501971`"></v2empty></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:40%;width:100%;" key="2"><v2container id="1560479512474" :wid="`1560479512474`" :index="2" :pid="`1560479382866`"><el-col class="V2ContainerBlock" :span="8" key="0" style="height:100%;"><v2empty class="V2Empty" id="1560479512474-0" :wid="`1560479512474-0`" :index="0" :pid="`1560479512474`"></v2empty></el-col><el-col class="V2ContainerBlock" :span="8" key="1" style="height:100%;"><v2empty class="V2Empty" id="1560479512474-1" :wid="`1560479512474-1`" :index="1" :pid="`1560479512474`"></v2empty></el-col><el-col class="V2ContainerBlock" :span="8" key="2" style="height:100%;"><v2empty class="V2Empty" id="1560479512474-2" :wid="`1560479512474-2`" :index="2" :pid="`1560479512474`"></v2empty></el-col></v2container></el-row></v2container></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":[20,40,40],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px"},"href":"v2-layout-colctn","component":"v2-layout-colctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[100],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px"},"href":"v2-layout-rowctn","component":"v2-layout-rowctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-colctn","component":"v2-layout-colctn","children":[{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":"[50,50]","rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{},"href":"v2-layout-rowctn","component":"v2-layout-rowctn","children":[{"style":{"label":{"font-size":"px","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","labelWitdh":"80px","titleMode":"col","placeholder":"请选择","value":"","dataType":"def","optionConfig":"test","options":[{"active":"true","value":"","label":""}],"clearable":false,"filterable":true,"disabled":false,"isRequired":false,"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-form-select","component":"v2-form-select","children":[],"events":{},"id":1560503353723,"pid":1560503339074},null],"events":{},"id":1560503339074,"pid":1560503337303},null],"events":{},"id":1560503337303,"pid":1560479386929}],"events":{},"id":1560479386929,"pid":1560479382866},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[33,33,33],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px"},"href":"v2-layout-rowctn","component":"v2-layout-rowctn","children":[{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"400px","width":"550px"}},"configs":"e1Config","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-component-echart","component":"v2-component-echart","children":[],"events":{},"id":1560479912609,"pid":1560503764769},{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"400px","width":"550px"}},"configs":"e2Config","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-component-echart","component":"v2-component-echart","children":[],"events":{},"id":1560481373685,"pid":1560479501971},null],"events":{},"id":1560479501971,"pid":1560479382866},{"style":{"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"col","layout":[33,33,33],"rules":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","def":{"defheight":true,"defborder":true,"defbackgroundStyle":true,"defpaddingStyle":true},"defaultValue":{"background-color":"#fff","background-image":"","padding-top":0,"padding-bottom":0,"padding-left":0,"padding-right":0},"customStyle":{"opacity":1,"border-radius":"0px"},"href":"v2-layout-rowctn","component":"v2-layout-rowctn","children":[null,null,null],"events":{},"id":1560479512474,"pid":1560479382866}],"events":{},"id":1560479382866,"pid":"root"}],"events":{}}},
                        test:"",
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
            type : 'value'
        }
    ],
    series : [
        {
            name:'得分',
            type:'bar',
            data:[80,90,84,85,83,86,83,100,85],
            itemStyle:{
                normal: {
                    color: function (params) {
                        return 'rgb(0, 0, 255)';
                    }
                }
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
                    
                    /**overview beforeCreate**/
                        (async()=>{const t1 = await pipe.getExcelData('机构表',`(e,index)=>index?{label:e[1],value:e[0]}:false`);
ctx.test = t1;})();
                    /**overview over**/
                    
                },
                created(){
                    let ctx = this;
                    
                    ctx.poll_runnableList.push({
                            run:async()=>{
   const t1 = await pipe.getExcelData('机构表',`(e,index)=>index&&index!=1?{label:e[1],value:e[0]}:false`);
   ctx.test = t1;
    ctx.e1Config.series[0].data = [10,10,10,10,10,10,10,10,10]
    console.log(ctx)
},
                            freq:200
                        })
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.e1Config, dataStr:"e1Config", wid:1560479912609, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.e2Config, dataStr:"e2Config", wid:1560481373685, modelKey:"configs" });
ctx.$store.commit("bind",{ vueObj:this, data:this.test, dataStr:"test", wid:1560503353723, modelKey:"optionConfig" });/**bind over**/
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
                    console.log('updated')
                },
                beforeDestroy(){ 
                    let ctx = this;
                        
                },
                destroyed(){
                    let ctx = this;
                        
                }
            };
        </script>