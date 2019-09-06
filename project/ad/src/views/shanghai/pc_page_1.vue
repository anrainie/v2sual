<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;" key="0"><v2-component-text class="V2Widget" :class="[`s_panel`]" id="1567758216002" :wid="`1567758216002`" :index="0" :pid="`root`"></v2-component-text></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;" key="1"><v2-component-text class="V2Widget" :class="[`s_panel`]" id="1567758362565" :wid="`1567758362565`" :index="1" :pid="`root`"></v2-component-text></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentDevice_state from '@/views/_customWidget/device_state.vue';import v2ComponentS_gray_panel_2 from '@/views/_customWidget/s_gray_panel_2.vue';import v2ComponentS_todayopen from '@/views/_customWidget/s_todayOpen.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"textStyle":{}},"text":"开销户趋势","customClass":"s_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"55%","height":"17rem","animation-duration":"1s"},"id":1567758216002,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"当日网点TOP","customClass":"s_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","right":"1rem","width":"calc(45% - 5rem)","height":"17rem","animation-duration":"1s"},"id":1567758362565,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"自助设备异常原因","customClass":"s_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"19rem","left":"3.70605e-","width":"55%","height":"30rem","animation-duration":"1s"},"id":1567758528265,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"自助设备信息","customClass":"s_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"19rem","right":"1rem","width":"calc(45% - 5rem)","height":"30rem","animation-duration":"1s"},"id":1567758603525,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"上海地区客户等待信息","customClass":"s_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"51rem","width":"55%","height":"30rem","animation-duration":"1s"},"id":1567758895669,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"文本内容","customClass":"s_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"51rem","right":"1rem","width":"calc(45% - 5rem)","height":"30rem","animation-duration":"1s"},"id":1567759010053,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"线","customClass":"hline","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"3rem","left":"1rem","width":"55%","animation-duration":"1s"},"id":1567759030089,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"今日开户数","value":"2,074","rare":"13.7%","v2forminput_1567760866528_value":""},"__capacity":"1","component":"v2-component-s_todayopen","href":"v2-component-s_todayopen","cptpath":"\\src\\views\\_customWidget\\s_todayOpen.vue","events":{},"commonStyle":{"position":"absolute","top":"4rem","left":"2rem","width":"14.6%","height":"5.7rem","animation-duration":"1s"},"id":1567761075822,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"今日销户数","value":"2,074","rare":"13.7%","v2forminput_1567760866528_value":""},"__capacity":"1","component":"v2-component-s_todayopen","href":"v2-component-s_todayopen","cptpath":"\\src\\views\\_customWidget\\s_todayOpen.vue","events":{},"commonStyle":{"position":"absolute","top":"11rem","left":"2rem","width":"14.6%","height":"5.7rem","animation-duration":"1s"},"id":1567761088554,"pid":"root","animate":["","animated"]},{"theme":{},"style":{"label":{}},"label":"机具类型","labelWitdh":"80px","titleMode":"col","placeholder":"请选择","value":"${v2formselect_1567761378124_value}","dataType":"def","options":[{"active":"true","value":"","label":""}],"filterable":true,"__capacity":"1","component":"v2-form-select","href":"v2-form-select","events":{},"commonStyle":{"position":"absolute","top":"23rem","left":"2rem","width":"393px","height":"80px","animation-duration":"1s"},"id":1567761378124,"pid":"root","animate":["","animated"]},{"theme":{"tableType":"border"},"columns":[{"active":true,"prop":"columns0","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"id","label":"机具编号","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"bank","label":"所属网点","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"type","label":"机具类型","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"bussMeasure","label":"业务量","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"lastMonthMeasure","label":"上月业务量","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"reson","label":"异常原因","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]}],"openPage":true,"toolTitle":"操作列","toolLocation":"right","toolWidth":"0","toolBtns":[{"active":"true","btnName":"详情","type":"text","handler":""}],"tableData":"${mechineList}","__capacity":"1","component":"v2-component-table","href":"v2-component-table","events":{},"commonStyle":{"position":"absolute","top":"25rem","left":"2rem","width":"calc(55% - 1rem)","height":"25rem","animation-duration":"1s"},"id":1567761586446,"pid":"root","animate":["","animated"]},{"theme":{"tableType":"border"},"columns":[{"active":true,"prop":"columns0","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"top","label":"TOP","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"name","label":"网点名称","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"type","label":"已处理数","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"bussMeasure","label":"等待客户","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"lastMonthMeasure","label":"平均等待耗时","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"reson","label":"当前等待最大时长","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"columns7","label":"上月平均等待最大耗时","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]}],"openPage":true,"toolTitle":"操作列","toolLocation":"right","toolWidth":"0","toolBtns":[{"active":"true","btnName":"详情","type":"text","handler":""}],"tableData":"${mechineList}","__capacity":"1","component":"v2-component-table","href":"v2-component-table","events":{},"commonStyle":{"position":"fixed","top":"57rem","left":"2rem","width":"calc(55% - 1rem)","height":"25rem","animation-duration":"1s"},"id":1567761961081,"pid":"root","animate":["","animated"]},{"configs":"${chartConfig}","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","events":{},"commonStyle":{"position":"absolute","top":"3rem","left":"16rem","width":"36rem","height":"13rem","animation-duration":"1s"},"id":1567762140724,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"线","customClass":"hline","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"3rem","width":"calc(45% - 4rem)","animation-duration":"1s","right":"1rem"},"id":1567762288499,"pid":"root","animate":["","animated"]},{"configs":"${top10}","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","events":{},"commonStyle":{"position":"absolute","top":"4rem","width":"calc(45% - 6rem)","height":"14rem","right":"2rem","animation-duration":"1s"},"id":1567762471310,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"设备总数","value":"11,066"},"__capacity":"1","component":"v2-component-s_gray_panel_2","href":"v2-component-s_gray_panel_2","cptpath":"\\src\\views\\_customWidget\\s_gray_panel_2.vue","events":{},"commonStyle":{"position":"absolute","top":"22rem","left":"calc(55% + 4rem)","width":"10rem","height":"2rem","animation-duration":"1s"},"id":1567763930270,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"开机数","value":"11,066"},"__capacity":"1","component":"v2-component-s_gray_panel_2","href":"v2-component-s_gray_panel_2","cptpath":"\\src\\views\\_customWidget\\s_gray_panel_2.vue","events":{},"commonStyle":{"position":"absolute","top":"28rem","left":"calc(55% + 4rem)","width":"10rem","height":"2rem","animation-duration":"1s"},"id":1567763925054,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"完好数","value":"11,066"},"__capacity":"1","component":"v2-component-s_gray_panel_2","href":"v2-component-s_gray_panel_2","cptpath":"\\src\\views\\_customWidget\\s_gray_panel_2.vue","events":{},"commonStyle":{"position":"absolute","top":"25rem","left":"calc(55% + 4rem)","width":"10rem","height":"2rem","animation-duration":"1s"},"id":1567763978825,"pid":"root","animate":["","animated"]},{"configs":"${gaugeOption}","customClass":"gaueOption","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","events":{},"commonStyle":{"position":"absolute","top":"17rem","left":"62rem","animation-duration":"1s","width":"22rem","height":"22rem"},"id":1567764272312,"pid":"root","animate":["","animated"]},{"configs":"${gaugeOption2}","customClass":"gaueOption","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","events":{},"commonStyle":{"position":"absolute","top":"17rem","left":"75rem","animation-duration":"1s","width":"22rem","height":"22rem","right":"0"},"id":1567764512653,"pid":"root","animate":["","animated"]},{"dataBasket":{"name":"CDS","measure":"206,132笔","radio":"7.3%","radioClass":["grow"],"intact":"12331","open":"34122","intactRate":"99%","openRate":"98%","total":"21311","img":"img/形状 3.png"},"__capacity":"1","component":"v2-component-device_state","href":"v2-component-device_state","cptpath":"\\src\\views\\_customWidget\\device_state.vue","events":{},"commonStyle":{"position":"absolute","top":"648px","left":"978px","width":"144%","height":"3rem","animation-duration":"1s"},"id":1567765868041,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"]}},
                        v2formselect_1567761378124_value:"",
mechineList:[{},{},{}],
chartConfig:{
    color: ['#5793f3', '#d14a61', '#675bba'],

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#5793f3'
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#d14a61'
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name:'2015 降水量',
            type:'line',
            xAxisIndex: 1,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'2016 降水量',
            type:'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
    ]
},
top10:{

    color: ['#136DFF'],
    barWidth:10,
    grid: {
        left: '0',
        top:0,
        right: '',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['滴水湖支行','华夏路支行','春申路支行','浦江高科技园','七宝支行','松江支行','松江新区支行','九亭支行','淮海中路支行','大华支行']
    },
    series: [
        {
            name: '事件',
            type: 'bar',
            data: [19,18,17,16,14,14,14,13,10,9]
        },
    ]
},
gaugeOption:{
  backgroundColor: "#fff",
 grid: {
        top: 0,
        bottom: 0,
        left:0,
        right:0,
    },
  series: [
    {
      name: "灰色外圈",
      type: "gauge",
      radius: "150",
      startAngle: "225",
      endAngle: "-45.1",
      // splitNumber: 0,
      axisLine: {
        lineStyle: {
          color: [[1, "#dcdfe5"]],
          width: 2
          //   todo: 设置圆角(不支持圆角)
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      pointer: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      type: "gauge",
      radius: "125",
      min: 0, //最小刻度
      max: 100, //最大刻度
      splitNumber: 4, //刻度数量
      startAngle: "224.99",
      endAngle: "-45",
      //   z: 30,
      //   detail: {
      //     formatter: "开机率",
      //     color: "#f00",
      //     fontSize: 40,
      //     offsetCenter: [0, "75%"]
      //   },
      axisLine: {
        show: true,
        lineStyle: {
          width: 20,

          color: [
            [
              '0.871',
              new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#306ae0"
                },
                {
                  offset: 1,
                  color: "#136DFF"
                }
              ])
            ],
            [1, "#dcdfe5"]
          ]
        }
      },
      axisLabel: {
        //刻度标签
        show: true,
        color: "#999",
        distance: -66,
        fontSize: 12,
        borderRadius: 10,
        padding: [0, 5],
        lineHeight: 24,
        backgroundColor: "#fff",
        formatter: "{value}%"
      },
      axisTick: {
        //分刻度
        show: false
        // splitNumber: 5,
        // length: 20,
        // lineStyle: {
        //   color: "#f00",
        //   width: 1
        // }
      },
      splitLine: {
        //分隔线样式
        show: false
        // length: 25,
        // lineStyle: {
        //   color: "#f00"
        // }
      },
      itemStyle: {
        //指针样式
        normal: {
          // series[i]-gauge.itemStyle.color
          color: "#F1F0F5"
        }
      },
      pointer: {
        show: true,
        length: "95",
        width: 75 //指针粗细
        // todo: 配颜色
      },
      data: [
        {
          value: 87.1
        }
      ]
    },
    {
      name: "内层圆",
      tooltip: {
        show: false
      },
      type: "pie",
      radius: ["0", "76"],
      center: ["50%", "50%"],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          color: "#F1F0F5"
        },
        emphasis: {
          color: "#F1F0F5"
        }
      },
      label: {
        normal: {
          show: true,
          position: "center",
          // formatter: function (params) {
          //   return '{value|' + params.value + '}{unit|%}\n{name|' + params.name + '}';
          // },
          formatter: function(params) {
            return (
              "{value|" + params.value + "}{unit|%}\n{name|" + params.name + "}"
            );
          },
          rich: {
            value: {
              // fontFamily: 'SFUDINEngschrift',
              lineHeight: 50,
              fontSize: 22,
              color: "#333"
              //   verticalAlign: "top"
            },
            unit: {
              // fontFamily: 'SFUDINEngschrift',
              fontSize: 22,
              color: "#333",
              lineHeight: 50
              //   verticalAlign: "top"
            },
            name: {
              // fontFamily: 'SFUDINEngschrift',
              //   lineHeight: 50,
              fontSize: 12,
              color: "#333"
              //   verticalAlign: "top"
            }
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      animation: false,
      data: [{ value: 87.1, name: "完好率" }]
    }
  ]
}
,
gaugeOption2:{
  backgroundColor: "#fff",
 grid: {
        top: 0,
        bottom: 0,
        left:0,
        right:0,
    },
  series: [
    {
      name: "灰色外圈",
      type: "gauge",
      radius: "150",
      startAngle: "225",
      endAngle: "-45.1",
      // splitNumber: 0,
      axisLine: {
        lineStyle: {
          color: [[1, "#dcdfe5"]],
          width: 2
          //   todo: 设置圆角(不支持圆角)
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      pointer: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      type: "gauge",
      radius: "125",
      min: 0, //最小刻度
      max: 100, //最大刻度
      splitNumber: 4, //刻度数量
      startAngle: "224.99",
      endAngle: "-45",
      //   z: 30,
      //   detail: {
      //     formatter: "开机率",
      //     color: "#f00",
      //     fontSize: 40,
      //     offsetCenter: [0, "75%"]
      //   },
      axisLine: {
        show: true,
        lineStyle: {
          width: 20,

          color: [
            [
              '0.871',
              new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#306ae0"
                },
                {
                  offset: 1,
                  color: "#136DFF"
                }
              ])
            ],
            [1, "#dcdfe5"]
          ]
        }
      },
      axisLabel: {
        //刻度标签
        show: true,
        color: "#999",
        distance: -66,
        fontSize: 12,
        borderRadius: 10,
        padding: [0, 5],
        lineHeight: 24,
        backgroundColor: "#fff",
        formatter: "{value}%"
      },
      axisTick: {
        //分刻度
        show: false
        // splitNumber: 5,
        // length: 20,
        // lineStyle: {
        //   color: "#f00",
        //   width: 1
        // }
      },
      splitLine: {
        //分隔线样式
        show: false
        // length: 25,
        // lineStyle: {
        //   color: "#f00"
        // }
      },
      itemStyle: {
        //指针样式
        normal: {
          // series[i]-gauge.itemStyle.color
          color: "#F1F0F5"
        }
      },
      pointer: {
        show: true,
        length: "95",
        width: 75 //指针粗细
        // todo: 配颜色
      },
      data: [
        {
          value: 87.1
        }
      ]
    },
    {
      name: "内层圆",
      tooltip: {
        show: false
      },
      type: "pie",
      radius: ["0", "76"],
      center: ["50%", "50%"],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          color: "#F1F0F5"
        },
        emphasis: {
          color: "#F1F0F5"
        }
      },
      label: {
        normal: {
          show: true,
          position: "center",
          // formatter: function (params) {
          //   return '{value|' + params.value + '}{unit|%}\n{name|' + params.name + '}';
          // },
          formatter: function(params) {
            return (
              "{value|" + params.value + "}{unit|%}\n{name|" + params.name + "}"
            );
          },
          rich: {
            value: {
              // fontFamily: 'SFUDINEngschrift',
              lineHeight: 50,
              fontSize: 22,
              color: "#333"
              //   verticalAlign: "top"
            },
            unit: {
              // fontFamily: 'SFUDINEngschrift',
              fontSize: 22,
              color: "#333",
              lineHeight: 50
              //   verticalAlign: "top"
            },
            name: {
              // fontFamily: 'SFUDINEngschrift',
              //   lineHeight: 50,
              fontSize: 12,
              color: "#333"
              //   verticalAlign: "top"
            }
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      animation: false,
      data: [{ value: 87.1, name: "开机率" }]
    }
  ]
}

                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentDevice_state,v2ComponentS_gray_panel_2,v2ComponentS_todayopen},
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.v2formselect_1567761378124_value, dataStr:"v2formselect_1567761378124_value", wid:1567761378124, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.mechineList, dataStr:"mechineList", wid:1567761586446, modelKey:"tableData" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.mechineList, dataStr:"mechineList", wid:1567761961081, modelKey:"tableData" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.chartConfig, dataStr:"chartConfig", wid:1567762140724, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.top10, dataStr:"top10", wid:1567762471310, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.gaugeOption, dataStr:"gaugeOption", wid:1567764272312, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.gaugeOption2, dataStr:"gaugeOption2", wid:1567764512653, modelKey:"configs" });/**bind over**/
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