<template><v2-ctn-xy :wid="`root`"><v2-component-s_background class="V2Widget" :style="`position:absolute;top:0;left:0;width:1920px;height:1080px;`" id="1567566500663" :wid="`1567566500663`" :index="0" :pid="`root`"></v2-component-s_background><v2-component-image class="V2Widget" id="1567566570150" :wid="`1567566570150`" :index="1" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567566552122" :wid="`1567566552122`" :index="2" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567566804299" :wid="`1567566804299`" :index="3" :pid="`root`"></v2-component-image><v2-component-echart class="V2Widget" id="1567567030793" :wid="`1567567030793`" :index="4" :pid="`root`"></v2-component-echart><v2-component-text class="V2Widget" id="1567567393278" :wid="`1567567393278`" :index="5" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567567467969" :wid="`1567567467969`" :index="6" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`s`]" id="1567567964039" :wid="`1567567964039`" :index="7" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567568221349" :wid="`1567568221349`" :index="8" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567568254115" :wid="`1567568254115`" :index="9" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567568267702" :wid="`1567568267702`" :index="10" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentS_background from '@/views/_customWidget/s_background.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-s_background","href":"v2-component-s_background","cptpath":"/src/views/_customWidget/s_background.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"1920px","height":"1080px"},"id":1567566500663,"pid":"root","animate":["","animated"]},{"src":"/img/s_branch_side_bg.png","fixation":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"181px","left":"61px","width":"469px","height":"777px"},"id":1567566570150,"pid":"root","animate":["","animated"]},{"src":"/img/s_branch_side_bg.png","fixation":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"194px","left":"1400px","width":"450px","height":"756px"},"id":1567566552122,"pid":"root","animate":["","animated"]},{"src":"/img/s_branch_center_bg.png","fixation":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"130px","left":"553px","width":"815px","height":"885px"},"id":1567566804299,"pid":"root","animate":["","animated"]},{"configs":"${topEchartOption1}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"524px","left":"93px"},"id":1567567030793,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"同分行下网点TOP","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"487px","left":"93px","color":"#D3E7F5","font-size":"18px"},"id":1567567393278,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"客户排队等待信息","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"228px","left":"93px","color":"#D3E7F5","font-size":"18px"},"id":1567567467969,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"开户数","editable":false,"ctnClass":"","customClass":"s","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"211px","left":"640px","color":"#D3E7F5"},"id":1567567964039,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"销户数","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"211px","left":"981px","color":"#D3E7F5"},"id":1567568221349,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"6日开销户趋势","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"389px","left":"640px","color":"white"},"id":1567568254115,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"自助机具异常信息","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"639px","left":"640px","color":"#FFFFFF"},"id":1567568267702,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        topEchartOption1:{
    width: "90%",
    backgroundColor: "#04113a",
    grid: {
        left: "5%",
        top: "5%",
        bottom: "1%"
    },
    tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        },
        formatter: "{b}：{c}",
        textStyle: {
            fontSize: "20"
        }
    },
    xAxis: {
        type: "value",
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: "category",
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    axisLabel: {
    show: false
        },
    data: ['乐原道支行','南京湖南路支行','深圳红岭支行','成都武侯支行']
    },
    series: [
        {
            barWidth: 15,
            z: 10,
            itemStyle: {
                color: {
                        type: 'linear',//设置线性渐变
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                                offset: 0, color: 'rgba(255,128,91,1)' // 0% 处的颜色
                            }, 
                            {
                                offset: 0.7, color: 'rgba(255,227,122,1)' // 100% 处的颜色
                            }
                        ],
                },
                barBorderRadius: 15
            },
    label: {
    show: true,
    fontSize: 16,
        // distance: 10,
    position: [
            0,
            "-30px"
                ],
    formatter: "{b}",
                // offset: [0, -10],
    color: "rgba(172,207,255,1)"
            },
    type: "bar",
    data: [27,34,35,42,49]
        },
        {
            type: "bar",
            barGap: "-100%",
            barWidth: 15,
            animation: false,
            z: -1,
            itemStyle: {
            color: "#2f3b4e",
                barBorderRadius: 15
            },
            label: {
            show: true,
            position: "top",
            fontSize: 16,
            // lineHeight: 50,
            // position: ["50%", "-30px"],
            color: "rgba(239,254,255,1)",
            formatter: function(param) {
                var data2 = [
                    {
                    name: "乐原道支行",
                    value: 27
                    },
                    {
                    name: "南京湖南路支行",
                    value: 34
                    },
                    {
                    name: "深圳红岭支行",
                    value: 35
                    },
                    {
                    name: "成都武侯支行",
                    value: 42
                    }
                ];
                for (var i = 0; i < data2.length; i++) {
                    if (param.name == data2[i].name) {
                        return data2[i].value + " 分钟";
                    }
                }
            }
            },
            data: [50,50,50,50,50]
        }
    ]
}
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentS_background},
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.topEchartOption1, dataStr:"topEchartOption1", wid:1567567030793, modelKey:"configs" });/**bind over**/
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
                deactivated(){
                  /**页面切出**/
                  let ctx = this;
                  
                },
                activated(){
                  /**页面切入**/
                  let ctx = this;
                  
                },

            };
        </script>
<style lang="scss">

</style>