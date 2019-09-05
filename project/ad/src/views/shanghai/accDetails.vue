<template><v2-ctn-xy :wid="`root`"><v2-component-s_background class="V2Widget" :style="`position:absolute;top:0px;left:0px;width:1920px;height:1080px;`" id="1566972327260" :wid="`1566972327260`" :index="0" :pid="`root`"></v2-component-s_background><v2-component-image class="V2Widget" id="1567565732888" :wid="`1567565732888`" :index="1" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567567156993" :wid="`1567567156993`" :index="2" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567567414554" :wid="`1567567414554`" :index="3" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567567407033" :wid="`1567567407033`" :index="4" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567567382174" :wid="`1567567382174`" :index="5" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567580999018" :wid="`1567580999018`" :index="6" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567581907476" :wid="`1567581907476`" :index="7" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567581901913" :wid="`1567581901913`" :index="8" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567581978032" :wid="`1567581978032`" :index="9" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-header`]" id="1567582016975" :wid="`1567582016975`" :index="10" :pid="`root`"></v2-component-text><v2-component-echart class="V2Widget" id="1567585629741" :wid="`1567585629741`" :index="11" :pid="`root`"></v2-component-echart><v2-component-echart class="V2Widget" id="1567585976886" :wid="`1567585976886`" :index="12" :pid="`root`"></v2-component-echart><v2-component-echart class="V2Widget" id="1567586099862" :wid="`1567586099862`" :index="13" :pid="`root`"></v2-component-echart></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentS_background from '@/views/_customWidget/s_background.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-s_background","href":"v2-component-s_background","cptpath":"\\src\\views\\_customWidget\\s_background.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"0px","left":"0px","width":"1920px","height":"1080px"},"id":1566972327260,"pid":"root","animate":["","animated"]},{"src":"img/shanghai/s_bigGroup.png","fixation":true,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"124.002px","left":"69.0098px","width":"1782px","height":"891px"},"id":1567565732888,"pid":"root","animate":["","animated"]},{"src":"img/shanghai/s_glassLong.png","fixation":true,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"262px","left":"161px","width":"539px","height":"100px"},"id":1567567156993,"pid":"root","animate":["","animated"]},{"src":"img/s_glass_title.png","fixation":true,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"262px","left":"731px","width":"505px","height":"100px"},"id":1567567414554,"pid":"root","animate":["","animated"]},{"src":"img/shanghai/s_glassShort.png","fixation":true,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"262px","left":"1585px","width":"201px","height":"100px"},"id":1567567407033,"pid":"root","animate":["","animated"]},{"src":"img/shanghai/s_glassShort.png","fixation":true,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"262.004px","left":"1338.01px","width":"217px","height":"100px"},"id":1567567382174,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"存量账户统计","editable":false,"ctnClass":"","customClass":"vda-header","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"209.004px","left":"161.008px"},"id":1567580999018,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"当年指标完成额","editable":false,"ctnClass":"","customClass":"vda-header","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"209.001px","left":"1338px"},"id":1567581907476,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"签约渠道占比","editable":false,"ctnClass":"","customClass":"vda-header","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"650.009px","left":"161.012px"},"id":1567581901913,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"账户类型开户数占比","editable":false,"ctnClass":"","customClass":"vda-header","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"650.012px","left":"877.004px"},"id":1567581978032,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"指标完成率","editable":false,"ctnClass":"","customClass":"vda-header","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"414.004px","left":"1338.01px"},"id":1567582016975,"pid":"root","animate":["","animated"]},{"configs":"${option1}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"773px","left":"161px","width":"401px","height":"172px"},"id":1567585629741,"pid":"root","animate":["","animated"]},{"configs":"${option2}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"685px","left":"877px","width":"906px","height":"285px"},"id":1567585976886,"pid":"root","animate":["","animated"]},{"configs":"${option3}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"397px","left":"161px","width":"1070px","height":"225px"},"id":1567586099862,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        option1:{
    backgroundColor:'',
   tooltip : {
        trigger: 'item',
        formatter: "{b}:{c}({d}%)"
    },
    calculable : false,
    legend: {
        type: 'scroll',
	    orient: 'vertical',
	    show: true,
	    right: 10,
		top: 'middle',
		itemGap :10,
		itemWidth:20,
		itemHeight:15,
        textStyle: {
            color: '#4876FF',
            fontSize: 20
        },
    },
    color:['#FFD700','#7CFC00','#8DEEEE','#87CEEB','#1E90FF'],
    series : [
        {
            type:'pie',
            radius : ['65%','80%'],//设置饼图大小
            center: ['20%', '50%'],//设置饼图位置
            zlevel: 1,
            label: {
                normal: {
                        show: false,
                        position: 'center',
                        formatter: [
                            '{value|{d}%}',
                            '{name|{b}}'
                        ].join('\n'),
                        rich: {
                            value: {
                                color: 'white',
                                fontSize: 24,
                                fontWeight: 'bold',
                                lineHeight: 24,
                            },
                            name: {
                                fontSize:16,
                                color: '#8DEEEE',
                                lineHeight: 16
                            },
                        },
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    }
            },
            itemStyle:{
                borderColor:'black',
                borderWidth:5  
            },
             data: [
                {value: 310463, name:'新柜面签约数'},
                {value: 177479, name:'ITM签约数'},
                {value: 106246, name:'微信签约数'},
                {value: 53738, name:'个人网上支付签约数'},
                {value: 218946, name:'个人网银签约数'},
                
            ]
        }
    ]
},
option2:{
    backgroundColor:'',
    title: {
        subtext:"单位：开户"
    },
    grid: {
        x:100,
        y:50,
        x2:50,
        y2:50
    },
    legend: {
        padding:20,
        itemGap:50,
        icon:'rect',
      	x:'right',
      	y:'top',
        data:['销户数','签约数'],
        textStyle:{
            fontSize:16,
          	color:'white'
    	}
    },
    yAxis: {
        type: 'category',
        axisLabel:{
            textStyle:{
        	    fontSize:16,
        		color:'#4876FF'
        	},
        },
        data: ['通知/利生利', '定活', '大额存单', '定期一本通', '整期','活期']
    },
    xAxis: {
        type: 'value',
        min:0,
        max:1400000,
        interval:200000,
        axisLabel:{
            textStyle:{
        	    fontSize:16,
        		color:'#4876FF'
        	},
            formatter:function(value){
                return value/10000 +'万'
            }
        }
    },
    series: [
        {
            name:'签约数',
            data: [1464267, 851282, 659493, 974794, 769432, 1283647],
            type: 'bar',
            itemStyle:{
                normal: {
                    label:{
                      show:true,
                      color:'white',
                      position:'right'
                    },
                    color: "#8DEEEE",
                },
            },
        },
        {
            name:'销户数',
            data: [194005, 349489, 118002, 180573, 94063, 24957],
            type: 'bar',
            itemStyle:{
                normal: {
                    label:{
                      show:true,
                      color:'white',
                      position:'right'
                    },
                    color: "#FFD700",
                },
            },
        },
        
    ]
}
,
option3:{
    backgroundColor:'#04113a',
    title:{
        subtext:"单位:万户"
    },
    grid: {
        x:50,
        y:75,
        x2:25,
        y2:50
    },
    legend: {
        padding:20,
        itemGap:50,
        icon:"rect",
      	x:'right',
      	y:'top',
        data:['去年的日均值','个人账户数'],
        textStyle:{
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
            data : ['4/30','-','-','-',
            '5/2','-','-','-',
            '5/4','-','-','-',
            '5/6','-','-','-',
            '5/8','-','-','-',
            '5/12','-','-','-',
            '5/14','-','-','-',
            '5/16','-','-','-',
            '5/18','-','-','-','5/20'],
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
            max:1600,
            interval:400,
        }
    ],
    series : [
          {
              name:'去年的日均值',
              type:'line',
              markLine:{
                symbol:'none',
                lineStyle:{
                  type:'solid',
                  color:'red',
                },
                label:{
                    backgroundColor:"red",
                    position:'start',
                    fontSize:16,
                    color:'white',
                },
                data:[
                    {name:'test',yAxis:1050}
                ]
              }
          },
          {
              name:'个人账户数',
              type:'line',
              symbol:'none',
              data:[1400,1000,1200,1250,1300,1100,1000,1100,1150,1200,1250,1200,
              1300,1350,1300,1200,1100,1050,950,1000,1000,1050,1150,1250,1280,
              1300,1250,1350,1300,1350,1300,1250,1150,1050,1100,1100,1150],
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.option1, dataStr:"option1", wid:1567585629741, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.option2, dataStr:"option2", wid:1567585976886, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.option3, dataStr:"option3", wid:1567586099862, modelKey:"configs" });/**bind over**/
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