<template><v2-ctn-xy :wid="`root`"><v2-component-s_background class="V2Widget" :style="`position:absolute;top:0;left:0;width:1920px;height:1080px;animation-duration:1s;`" id="1567566500663" :wid="`1567566500663`" :index="0" :pid="`root`"></v2-component-s_background><v2-component-image class="V2Widget" id="1567566570150" :wid="`1567566570150`" :index="1" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567566552122" :wid="`1567566552122`" :index="2" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567566804299" :wid="`1567566804299`" :index="3" :pid="`root`"></v2-component-image><v2-component-echart class="V2Widget" id="1567567030793" :wid="`1567567030793`" :index="4" :pid="`root`"></v2-component-echart><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567583062055" :wid="`1567583062055`" :index="5" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567583067846" :wid="`1567583067846`" :index="6" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567583095025" :wid="`1567583095025`" :index="7" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567583022728" :wid="`1567583022728`" :index="8" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567583074644" :wid="`1567583074644`" :index="9" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567583049959" :wid="`1567583049959`" :index="10" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567583134310" :wid="`1567583134310`" :index="11" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567583125986" :wid="`1567583125986`" :index="12" :pid="`root`"></v2-component-text><v2-component-echart class="V2Widget" id="1567587966341" :wid="`1567587966341`" :index="13" :pid="`root`"></v2-component-echart><v2-vda-number-cell class="V2Widget" id="1567653048348" :wid="`1567653048348`" :index="14" :pid="`root`"></v2-vda-number-cell><v2-vda-number-cell class="V2Widget" id="1567653619361" :wid="`1567653619361`" :index="15" :pid="`root`"></v2-vda-number-cell><v2-component-s_number_text3 class="V2Widget" :style="`position:absolute;top:232.012px;left:623.004px;width:324px;height:90px;animation-duration:1s;`" id="1567736416698" :wid="`1567736416698`" :index="16" :pid="`root`" :num="136" :test="213" :text1="`今日<br>开户`" :text2="`昨日同比`" :text3="`17.5% ↓`" :num_class="`vda-h1-num3`" :text1_class="`vda-h2-text2`" :text2_class="`vda-h2-text2-greenFont`" :text3_class="`vda-h2-text2-greenFont`" :bgImg="`img/shanghai/s_glassLong.png`"></v2-component-s_number_text3><v2-component-s_number_text3 class="V2Widget" :style="`position:absolute;top:232.008px;left:978.004px;width:324px;height:90px;animation-duration:1s;`" id="1567736414595" :wid="`1567736414595`" :index="17" :pid="`root`" :num="79" :test="213" :text1="`今日<br>销户`" :text2="`昨日同比`" :text3="`23.6% ↑`" :num_class="`vda-h1-num3`" :text1_class="`vda-h2-text2`" :text2_class="`vda-h2-text2-redFont`" :text3_class="`vda-h2-text2-redFont`" :bgImg="`img/shanghai/s_glassLong.png`"></v2-component-s_number_text3><v2-vda-number-cell class="V2Widget" id="1567854608811" :wid="`1567854608811`" :index="18" :pid="`root`"></v2-vda-number-cell><v2-vda-number-cell class="V2Widget" id="1567859988691" :wid="`1567859988691`" :index="19" :pid="`root`"></v2-vda-number-cell><v2-vda-number-cell class="V2Widget" id="1567917275419" :wid="`1567917275419`" :index="20" :pid="`root`"></v2-vda-number-cell><v2-vda-number-cell class="V2Widget" id="1567917479429" :wid="`1567917479429`" :index="21" :pid="`root`"></v2-vda-number-cell><v2-vda-number-cell class="V2Widget" id="1567917634543" :wid="`1567917634543`" :index="22" :pid="`root`"></v2-vda-number-cell></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentS_number_text3 from '@/views/_customWidget/s_number_text3.vue';import v2ComponentS_background from '@/views/_customWidget/s_background.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"__capacity":"1","component":"v2-component-s_background","href":"v2-component-s_background","cptpath":"/src/views/_customWidget/s_background.vue","events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"1920px","height":"1080px","animation-duration":"1s"},"id":1567566500663,"pid":"root","animate":["","animated"]},{"src":"img/shanghai/s_bigGroup2.png","__capacity":"1","component":"v2-component-image","href":"v2-component-image","events":{},"commonStyle":{"position":"absolute","top":"181px","left":"61px","width":"469px","height":"777px","animation-duration":"1s"},"id":1567566570150,"pid":"root","animate":["","animated"]},{"src":"img/shanghai/s_bigGroup2.png","__capacity":"1","component":"v2-component-image","href":"v2-component-image","events":{},"commonStyle":{"position":"absolute","top":"194px","left":"1400px","width":"450px","height":"756px"},"id":1567566552122,"pid":"root","animate":["","animated"]},{"src":"/img/s_branch_center_bg.png","__capacity":"1","component":"v2-component-image","href":"v2-component-image","events":{},"commonStyle":{"position":"absolute","top":"130px","left":"553px","width":"815px","height":"885px","animation-duration":"1s"},"id":1567566804299,"pid":"root","animate":["","animated"]},{"configs":"${topEchartOption1}","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","events":{},"commonStyle":{"position":"absolute","top":"588px","left":"93px","width":"375px","height":"336px"},"id":1567567030793,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"客户排队等待信息","customClass":"vda-header","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"232.004px","left":"93.0126px"},"id":1567583062055,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"同分行下网点TOP","customClass":"vda-header","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"584.008px","left":"93.0088px"},"id":1567583067846,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"开户数","customClass":"vda-header","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"194.004px","left":"623.004px"},"id":1567583095025,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"销户数","customClass":"vda-header","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"194.008px","left":"978.009px","animation-duration":"1s"},"id":1567583022728,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"6日开销户趋势","customClass":"vda-header","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"340.004px","left":"623.004px"},"id":1567583074644,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"自助机具异常信息","customClass":"vda-header","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"601.012px","left":"623.005px","animation-duration":"1s"},"id":1567583049959,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"自助机具状态统计","customClass":"vda-header","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"232.012px","left":"1429.01px"},"id":1567583134310,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"自助机具交易量","customClass":"vda-header","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"661.004px","left":"1445.01px"},"id":1567583125986,"pid":"root","animate":["","animated"]},{"configs":"${option2}","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","events":{},"commonStyle":{"position":"absolute","top":"373px","left":"623px","width":"679px","height":"211px","animation-duration":"1s"},"id":1567587966341,"pid":"root","animate":["","animated"]},{"ctnWidth":"400px","cellWidth":"160px","countData":"${customWaitingInfo}","cellPosition":"column","cellAlign":"center","__capacity":"1","component":"v2-vda-number-cell","href":"v2-vda-number-cell","events":{},"commonStyle":{"position":"absolute","top":"436px","left":"93px","width":"404px","height":"58px","animation-duration":"1s"},"id":1567653048348,"pid":"root","animate":["","animated"]},{"ctnWidth":"480px","cellWidth":"165px","countData":"${machineCount}","cellPosition":"row","cellAlign":"center","__capacity":"1","component":"v2-vda-number-cell","href":"v2-vda-number-cell","events":{},"commonStyle":{"position":"absolute","top":"254px","left":"1429px","animation-duration":"1s"},"id":1567653619361,"pid":"root","animate":["","animated"]},{"dataBasket":{"num":"136","text1":"今日<br>开户","text2":"昨日同比","text3":"17.5% ↓","num_class":"vda-h1-num3","text1_class":"vda-h2-text2","text2_class":"vda-h2-text2-greenFont","text3_class":"vda-h2-text2-greenFont","bgImg":"img/shanghai/s_glassLong.png"},"__capacity":"1","component":"v2-component-s_number_text3","href":"v2-component-s_number_text3","cptpath":"\\src\\views\\_customWidget\\s_number_text3.vue","events":{},"commonStyle":{"position":"absolute","top":"232.012px","left":"623.004px","width":"324px","height":"90px","animation-duration":"1s"},"id":1567736416698,"pid":"root","animate":["","animated"]},{"dataBasket":{"num":"79","text1":"今日<br>销户","text2":"昨日同比","text3":"23.6% ↑","num_class":"vda-h1-num3","text1_class":"vda-h2-text2","text2_class":"vda-h2-text2-redFont","text3_class":"vda-h2-text2-redFont","bgImg":"img/shanghai/s_glassLong.png"},"__capacity":"1","component":"v2-component-s_number_text3","href":"v2-component-s_number_text3","cptpath":"\\src\\views\\_customWidget\\s_number_text3.vue","events":{},"commonStyle":{"position":"absolute","top":"232.008px","left":"978.004px","width":"324px","height":"90px","animation-duration":"1s"},"id":1567736414595,"pid":"root","animate":["","animated"]},{"ctnWidth":"400px","cellWidth":"160px","cellPosition":"column","cellAlign":"center","__capacity":"1","component":"v2-vda-number-cell","href":"v2-vda-number-cell","events":{},"commonStyle":{"position":"absolute","top":"253px","left":"93px","animation-duration":"1s"},"id":1567854608811,"pid":"root","animate":["","animated"],"countData":"${currentWaitNum}"},{"ctnWidth":"400px","cellWidth":"160px","countData":"${averageWaitTime}","cellPosition":"column","cellAlign":"center","__capacity":"1","component":"v2-vda-number-cell","href":"v2-vda-number-cell","events":{},"commonStyle":{"position":"absolute","top":"254px","left":"288px","animation-duration":"1s"},"id":1567859988691,"pid":"root","animate":["","animated"]},{"ctnWidth":"400px","cellWidth":"160px","countData":"${longestWaitTime}","cellPosition":"column","cellAlign":"center","__capacity":"1","component":"v2-vda-number-cell","href":"v2-vda-number-cell","events":{},"commonStyle":{"position":"absolute","top":"344px","left":"288px","animation-duration":"1s"},"id":1567917275419,"pid":"root","animate":["","animated"]},{"ctnWidth":"400px","cellWidth":"160px","countData":"${proessedNum}","cellPosition":"column","cellAlign":"center","__capacity":"1","component":"v2-vda-number-cell","href":"v2-vda-number-cell","events":{},"commonStyle":{"position":"absolute","top":"345px","left":"92px","animation-duration":"1s"},"id":1567917479429,"pid":"root","animate":["","animated"]},{"ctnWidth":"400px","cellWidth":"160px","countData":"${lastMonthTime}","cellPosition":"column","cellAlign":"center","__capacity":"1","component":"v2-vda-number-cell","href":"v2-vda-number-cell","events":{},"commonStyle":{"position":"absolute","top":"436px","left":"287px","animation-duration":"1s"},"id":1567917634543,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"]}},
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
},
option2:{
    backgroundColor:'',
    grid: {
        x:75,
        y:50,
        x2:25,
        y2:25
    },
    title : {
        subtext: '单位：位'
    },
    legend: {
        padding:20,
        itemGap:50,
        icon:'rect',
      	x:'right',
      	y:'top',
        data:['销户数','开户数'],
        textStyle:{
            fontSize:16,
          	color:'white'
    	}
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            axisLabel:{
                interval:3,
            	textStyle:{
                    fontSize:16,
            		color:'#4876FF'
            	}
          	},
            boundaryGap : false,
            data : ['8/25','-','-','-',
            '8/26','-','-','-',
            '8/27','-','-','-',
            '8/28','-','-','-',
            '8/29','-','-','-',
            '8/30'],
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
            	textStyle:{
                    fontSize:16,
            		color:'#4876FF'
            	}
          	},
            min:0,
            max:12000,
            interval:3000,
        }
    ],
    series : [
          {
              name:'销户数',
              type:'line',
              symbol:'none',
              data:[3050,3504,3041,2500,
              2640,2400,2350,2600,
              2100,2500,1950,2150,
              2700,1550,2650,1540,
              1950,2300,2100,1231,
              2300],
              itemStyle:{
                  normal: {
                    color: "#FFD700",
                  },
              },
              areaStyle: {
                normal: {
                    color: {
                        type: 'linear',//设置线性渐变
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0, color: 'rgba(255,215,0,0.3)' // 0% 处的颜色
                            }, 
                            {
                                offset: 1, color: 'rgba(255,215,0,0.3)' // 100% 处的颜色
                            }
                        ],
                    },
                }
            },
          },
          {
              name:'开户数',
              type:'line',
              symbol:'none',
              data:[3600,2500,4500,5000,
              3500,3800,5800,6000,
              5500,6300,5800,7500,
              7000,6500,7500,7300,
              7000,6300,5000,3000,
              2500],
              itemStyle:{
                  normal: {
                    color: "#8DEEEE",
                  },
              },
              areaStyle: {
                normal: {
                    color: {
                        type: 'linear',//设置线性渐变
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0, color: 'rgba(141,238,238,0.5)' // 0% 处的颜色
                            }, 
                            {
                                offset: 1, color: 'rgba(141,238,238,0.5)' // 100% 处的颜色
                            }
                        ],
                    },
                }
            },
          },
      ] 
},
customWaitingInfo:[{
    "title": "当前弃号率",
    "count": 43,
    "suffix": "%"
}],
machineCount:[{
    "title": "设备总数",
    "count": 12,
    "suffix": ""
},{
    "title": "开机总数",
    "count": 9,
    "suffix": "台"
}],
currentWait:[{"_queuedCount":11},{"_queuedCount":11},{"_queuedCount":11},{"_queuedCount":11},{"_queuedCount":11},{"_queuedCount":11}],
waitAverage:[{"_dailyTotalAVGQueuingWaiteTime":80564},{"_dailyTotalAVGQueuingWaiteTime":0},{"_dailyTotalAVGQueuingWaiteTime":0},{"_dailyTotalAVGQueuingWaiteTime":0},{"_dailyTotalAVGQueuingWaiteTime":0},{"_dailyTotalAVGQueuingWaiteTime":0},{"_dailyTotalAVGQueuingWaiteTime":0},{"_dailyTotalAVGQueuingWaiteTime":0},{"_dailyTotalAVGQueuingWaiteTime":0},{"_dailyTotalAVGQueuingWaiteTime":80558},{"_dailyTotalAVGQueuingWaiteTime":80558}],
processed:[{"_calledCount":11},{"_calledCount":11},{"_calledCount":11},{"_calledCount":11},{"_calledCount":11},{"_calledCount":11},{"_calledCount":11}],
waitLongest:[{"_dailyTotalMaxQueuingWaiteTime":886201},{"_dailyTotalMaxQueuingWaiteTime":886201},{"_dailyTotalMaxQueuingWaiteTime":886141},{"_dailyTotalMaxQueuingWaiteTime":886201},{"_dailyTotalMaxQueuingWaiteTime":886263},{"_dailyTotalMaxQueuingWaiteTime":886201},{"_dailyTotalMaxQueuingWaiteTime":886263},{"_dailyTotalMaxQueuingWaiteTime":886262},{"_dailyTotalMaxQueuingWaiteTime":886263}],
waitLastMonth:[{"上月平均等待耗时":3237}]
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentS_number_text3,v2ComponentS_background},
                methods:{},
                watch:{},
                computed:{
          currentWaitNum(){
            let step1 = window.pipe.getValue(this.currentWait,["_queuedCount","count"])
;let step2 = window.pipe.addKey(step1,[["suffix","人"],["title","当前排队人数"]])

            return step2;
          }
          ,
          averageWaitTime(){
            let step1 = window.pipe.getValue(this.waitAverage,["_dailyTotalAVGQueuingWaiteTime","count"])
;let step2 = window.pipe.addKey(step1,[["suffix","s"],["title","平均等待耗时"]])

            return step2;
          }
          ,
          proessedNum(){
            let step1 = window.pipe.getValue(this.processed,["_calledCount","count"])
;let step2 = window.pipe.addKey(step1,[["suffix","s"],["title","平均等待耗时"]])

            return step2;
          }
          ,
          longestWaitTime(){
            let step1 = window.pipe.getValue(this.waitLongest,["_dailyTotalMaxQueuingWaiteTime","count"])
;let step2 = window.pipe.addKey(step1,[["suffix","s"],["title","等待最长耗时"]])

            return step2;
          }
          ,
          lastMonthTime(){
            let step1 = window.pipe.getValue(this.waitLastMonth,["上月平均等待耗时","count"])
;let step2 = window.pipe.addKey(step1,[["suffix","s"],["title","上月平均等待耗时"]])

            return step2;
          }
          },
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.topEchartOption1, dataStr:"topEchartOption1", wid:1567567030793, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.option2, dataStr:"option2", wid:1567587966341, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.customWaitingInfo, dataStr:"customWaitingInfo", wid:1567653048348, modelKey:"countData" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.machineCount, dataStr:"machineCount", wid:1567653619361, modelKey:"countData" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.currentWaitNum, dataStr:"currentWaitNum", wid:1567854608811, modelKey:"countData" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.averageWaitTime, dataStr:"averageWaitTime", wid:1567859988691, modelKey:"countData" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.longestWaitTime, dataStr:"longestWaitTime", wid:1567917275419, modelKey:"countData" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.proessedNum, dataStr:"proessedNum", wid:1567917479429, modelKey:"countData" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.lastMonthTime, dataStr:"lastMonthTime", wid:1567917634543, modelKey:"countData" });/**bind over**/
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