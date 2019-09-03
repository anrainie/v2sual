<template><v2-ctn-xy :wid="`root`"><v2-component-tabs class="V2Widget" :class="[`s_tabs`]" id="1567499064153" :wid="`1567499064153`" :index="0" :pid="`root`"></v2-component-tabs><v2-component-echart class="V2Widget" id="1567502466301" :wid="`1567502466301`" :index="1" :pid="`root`"></v2-component-echart><v2-component-text class="V2Widget" id="1567502979006" :wid="`1567502979006`" :index="2" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"active":"0","list":[{"active":"true","label":"AAA","name":"0"},{"active":true,"label":"BBB","name":"1"}],"type":"","tabPosition":"top","btns":"","ctnClass":"","customClass":"s_tabs","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-tabs","href":"v2-component-tabs","children":[],"events":{},"commonStyle":{"position":"absolute","top":"86px","left":"96px","width":"145px","height":"54px"},"id":1567499064153,"pid":"root","animate":["","animated"]},{"configs":"${option}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"295px","left":"300px"},"id":1567502466301,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${test}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"190px","left":"182px"},"id":1567502979006,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        option:{
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
    data: ['乐原道支行','南京湖南路支行','深圳红岭支行','成都武侯支行','深圳科技园支行']
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
                },
                {
                name: "深圳科技园支行",
                value: 49
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
},
test:""
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.option, dataStr:"option", wid:1567502466301, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.test, dataStr:"test", wid:1567502979006, modelKey:"text" });/**bind over**/
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