<template><v2-ctn-xy :wid="`root`"><v2-component-echart class="V2Widget" id="1566295443669" :wid="`1566295443669`" :index="0" :pid="`root`"></v2-component-echart><v2-component-echart class="V2Widget" id="1566356720228" :wid="`1566356720228`" :index="1" :pid="`root`"></v2-component-echart><v2-component-echart class="V2Widget" id="1566356724556" :wid="`1566356724556`" :index="2" :pid="`root`"></v2-component-echart><v2-component-echart class="V2Widget" id="1566356707070" :wid="`1566356707070`" :index="3" :pid="`root`"></v2-component-echart><v2-component-echart class="V2Widget" id="1566366412871" :wid="`1566366412871`" :index="4" :pid="`root`"></v2-component-echart></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"${config1}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"1px","left":"22px"},"id":1566295443669,"pid":"root","animate":["","animated"]},{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"${config2}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"1px","left":"422px"},"id":1566356720228,"pid":"root","animate":["","animated"]},{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"${config3}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"401px","left":"22px"},"id":1566356724556,"pid":"root","animate":["","animated"]},{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"${config4}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"401px","left":"422px"},"id":1566356707070,"pid":"root","animate":["","animated"]},{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"${config5}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"801px","left":"22px","width":798,"height":400},"id":1566366412871,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        config1:{
  backgroundColor:'',
   title : {
        text: '核心实时交易量',
        textStyle: {
            fontSize:20
        },
        subtext: '单位：万笔/分钟'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['12:00','12:02','12:04','12:06','12:08',
                    '12:10','12:12','12:14','12:16','12:18',
                    '12:20','12:22','12:24','12:26','12:28',
                    '12:30','12:32','12:34','12:36','12:38',
                    '12:40','12:42','12:44','12:46','12:48',
                    '12:50','12:52','12:54','12:56','12:58','13:00']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min:0,
            max:15
        }
    ],
    series : [
          {
              name:'实时交易量',
              type:'line',
              symbol:'none',
              data:[3.4,3.2,4.0,4.9,6.5,
                   5.9,6.5,7.0,6.8,8.6,9.6,
                   9.0,8.6,9.7,8.8,8.9,9.6,
                   9.3,10.6,11.7,11.8,10.9,12.6,
                   12.5,13.4,12.7,11.8,11.9,10.6,
                   10.5,9.6,9.7,8.8,7.9,7.6,8.7],
              itemStyle:{
                  normal: {
                    color: function (params) {
                        return 'rgb(255,215,0)';
                    },
                    areaStyle: {
                        color : (function (){
                            return 'rgb(255,255,224)'
                        })()
                    }
                  },
              },
            markLine : {
                symbol:'none',
                itemStyle:{
                  normal:{
                    lineStyle:{
                        type:'solid',
                        color:'red',
                    },
                    label:{
                        show:false,
                    }
                  }
                },
                data : [
                    {
                    type : 'average', 
                      name: '平均值',
                    }
                ],
            } 
          }
      ] 
},
config2:{
  backgroundColor:'',
   title : {
     	x:'center',
        text: '信用卡',
        textStyle: {
            fontSize:20
        },
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis : [
        {
          	
            type : 'category',
            data : ['12:30','12:31','12:32','12:33','12:34','12:35','12:36','12:37','12:38','12:39',
                  	'12:40','12:41','12:42','12:43','12:44','12:45','12:46','12:47','12:48','12:49',
                    '12:50','12:51','12:52','12:53','12:54','12:55','12:56','12:57','12:58','12:59','13:00']
        }
    ],
    yAxis : [
        {
           	show:false,
            type : 'value',
            min:0,
            max:350
        }
    ],
    series : [
          {
              name:'响应时间',
              type:'bar',
              data:[251,261,264,274,259,240,257,269,289,270,
                    256,276,267,292,300,313,296,311,303,292,
                    323,307,298,311,270,256,233,256,279,241,236],
              itemStyle:{
                  normal: {
                      color: function (params) {
                        return 'rgb(238,173,14)';
                      },
                  },
              },
            markLine : {
                symbol:'none',
                itemStyle:{
                  normal:{
                    lineStyle:{
                        type:'solid',
                        color:'red',
                    },
                    label:{
                        show:true,
                       position:'start'
                    }
                  }
                },
                data : [
                    {
                    type : 'average', 
                      name: '平均值',
                    }
                ],
            } 
          }
      ] 
},
config3:{
  backgroundColor:'',
   title : {x:'center',
        text: '借记卡',
        textStyle: {
            fontSize:20
        },
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis : [
        {
          	
            type : 'category',
            data : ['12:30','12:31','12:32','12:33','12:34','12:35','12:36','12:37','12:38','12:39',
                  	'12:40','12:41','12:42','12:43','12:44','12:45','12:46','12:47','12:48','12:49',
                    '12:50','12:51','12:52','12:53','12:54','12:55','12:56','12:57','12:58','12:59','13:00']
        }
    ],
    yAxis : [
        {
           	show:false,
            type : 'value',
            min:0,
            max:150
        }
    ],
    series : [
          {
              name:'实时交易量',
              type:'bar',
              data:[122,133,144,150,135,152,122,112,122,152,
                    122,83,93,65,45,43,53,112,70,90,
                    89,122,98,133,150,112,121,100,102,112],
              itemStyle:{
                  normal: {
                      color: function (params) {
                          return 'rgb(238,173,14)';
                      },
                  },
              },
            markLine : {
                symbol:'none',
                itemStyle:{
                  normal:{
                    lineStyle:{
                        type:'solid',
                        color:'red',
                    },
                    label:{
                        show:true,
                       position:'start'
                    }
                  }
                },
                data : [
                    {
                    type : 'average', 
                      name: '平均值',
                    }
                ],
            } 
          }
      ] 
},
config4:{
  backgroundColor:'',
   title : {
       x:'center',
        text: '合作行',
        textStyle: {
            fontSize:20
        },
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis : [
        {
          	
            type : 'category',
            data : ['12:30','12:31','12:32','12:33','12:34','12:35','12:36','12:37','12:38','12:39',
                  	'12:40','12:41','12:42','12:43','12:44','12:45','12:46','12:47','12:48','12:49',
                    '12:50','12:51','12:52','12:53','12:54','12:55','12:56','12:57','12:58','12:59','13:00']
        }
    ],
    yAxis : [
        {
           	show:false,
            type : 'value',
            min:0,
            max:600
        }
    ],
    series : [
          {
              name:'实时交易量',
              type:'bar',
              data:[491,514,520,513,514,480,523,491,514,455,
                  516,476,517,532,489,513,456,531,463,512,
                  535,507,498,511,450,456,503,456,479,513,456],
              itemStyle:{
                  normal: {
                      color: function (params) {
                        return 'rgb(238,173,14)';
                      },
                  },
              },
            markLine : {
                symbol:'none',
                itemStyle:{
                  normal:{
                    lineStyle:{
                        type:'solid',
                        color:'red',
                    },
                    label:{
                        show:true,
                       position:'start'
                    }
                  }
                },
                data : [
                    {
                    type : 'average', 
                      name: '平均值',
                    }
                ],
            } 
          }
      ] 
},
config5:{
  backgroundColor:'',
   title : {
        textStyle: {
            fontSize:20,
          color:'rgb(217,147,58)'
        },
        subtext: '单位：万笔/分钟'
    },
    
  	legend: {
      	x:'right',
      	y:'top',
        data:['信用卡','借记卡','合作行'],
      padding:10,
      textStyle:{
      	color:'rgb(217,147,58)'
    	}
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
          	axisLabel:{
            	textStyle:{
            		color:'rgb(217,147,58)'
            	}
          	},
            boundaryGap : false,
            data : ['12:00','12:02','12:04','12:06','12:08',
                    '12:10','12:12','12:14','12:16','12:18',
                    '12:20','12:22','12:24','12:26','12:28',
                    '12:30','12:32','12:34','12:36','12:38',
                    '12:40','12:42','12:44','12:46','12:48',
                    '12:50','12:52','12:54','12:56','12:58','13:00']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min:0,
            max:12,
          	axisLabel:{
            	textStyle:{
            		color:'rgb(217,147,58)'
            	}
          	},
        }
    ],
    series : [
          {
              name:'信用卡',
              type:'line',
              symbol:'none',
              data:[3.4,3.2,4.0,4.9,6.5,
                   5.9,6.5,7.0,6.8,8.6,9.6,
                   9.0,8.6,9.7,8.8,8.9,9.6,
                   9.3,10.6,11.7,11.8,10.9,11.6,
                   10.5,11.4,11.7,10.8,11.9,10.6,
                   10.5,9.6,9.7,8.8,7.9,7.6,8.7],
              itemStyle:{
                  normal: {
                    color: function (params) {
                        return 'red';
                    },
                  },
              },
          },
      	{
              name:'借记卡',
              type:'line',
              symbol:'none',
              data:[2.3,3.4,3.0,5.4,3.2,
                   8.6,5.9,6.5,7.0,9.6,4.0,
                   9.0,8.6,9.7,8.8,8.9,9.6,
                   7.0,5.4,9.3,10.6,11.7,11.8,
                   10.5,11.4,10.6,8.5,7.9,9.0,
                   10.5,7.8,8.5,7.0,7.5,6.9,7.6,8.7],
              itemStyle:{
                  normal: {
                    color: function (params) {
                        return 'orange';
                    },
                  },
              },
          },
      	{
              name:'合作行',
              type:'line',
              symbol:'none',
              data:[
                9.3,10.6,11.7,11.8,10.9,11.6,
                9.0,8.6,9.7,8.8,8.9,9.6,
                 5.9,6.5,7.0,6.8,7.2,5.6,
                3.4,3.2,4.0,4.9,6.5,
                6.5,5.0,6.0,4.5,4.1,3.9,4.5,4.0
                ],
              itemStyle:{
                  normal: {
                    color: function (params) {
                        return 'yellow';
                    },
                  },
              },
          }
      ] 
}
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.config1, dataStr:"config1", wid:1566295443669, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.config3, dataStr:"config3", wid:1566356724556, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.config2, dataStr:"config2", wid:1566356720228, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.config4, dataStr:"config4", wid:1566356707070, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.config5, dataStr:"config5", wid:1566366412871, modelKey:"configs" });/**bind over**/
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