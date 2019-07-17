<!-- 折线图组件 -->
<template>
	<div class="ak_echarts">
		<div :id="myChart" :style="style" style="width:600px;height:400px;box-shadow:0 0 10px gray;padding-bottom:20px;"></div>
	</div>
</template>
<script>
	export default{
		name:"ak_echarts",
		props:["list","type","myChart","width","xName","yName","text"],
		data(){
			return {
				echart:'',
				// 计时器
				time:'',
				// 折线颜色
				color:['#FF4683','#0097e9']
			}
		},
		watch:{
			list: {
		　　　　handler(newValue, oldValue) {
			        var type = this.type;
			        var color = this.color;
			        console.log(type);
		　　　　　　console.log(newValue.y);
		            var option = this.echart.getOption();
		            option.xAxis[0].data = newValue.x;
		            option.series = function getData(){
                                                    var serie=[];
                                                    // console.log(list.y);
                                                    if(newValue.y){
                                                        for( var i=0;i <newValue.y.length;i++){
                                                            var item={
                                                                name:type[i],
                                                                type:'line',
                                                                stack: '总量',
                                                                showSymbol: false,
                                                                data:newValue.y[i],
                                                                lineStyle:{
                                                                	normal:{
                                                                		color:color[i],
                                                                		width:1
                                                                	}
                                                                }
                                                            }
                                                            serie.push(item);
                                                        } 
                                                        
                                                    }
                                                    // console.log(serie);
                                                    return serie;
                                                    
                                                }()
                                         this.echart.setOption(option,true);
                                         console.log(option.series);
                                         console.log(option.xAxis[0].data);
                            

		　　　　},
　　　　　　    deep: true
　　　　    }
		},
		computed:{
			style(){
				var style={};
				style.width=this.width;
				return style;
			}
		},
		mounted(){
            var id = this.myChart;
            console.log(id);
            // clearInterval(this.time);
			//因为匿名函数中无法直接获取this.list，只能将其赋值
			var list = this.list;
			// 图例
			var type = this.type;
			console.log(type);
			// 图例颜色
			var color = this.color;
			this.echart = this.$echarts.init(document.getElementById(id));
                            var option = {
                            	title: {
					                text: this.text,
					                textAlign:'left',
					                textStyle:{
					                	fontWeight:"lighter",
					                	fontSize:'15px',
					                },
					                left:"center",
                                    y:"10px"
					            },
                                tooltip : {
                                    trigger: 'axis'
                                },
                                // 图例颜色
                                color:color,
                             legend:[
                                  
                                  {
				                    orient: 'horizontal',
				                    x : '9%',
				                    y : '91%',
				                    align: 'left',
				                    data: [type[0]],
				                    icon:'circle'
				                },{
				                    orient: 'horizontal',
				                    x : '19%',
                                    y : '91%',
				                    align: 'left',
				                    data: [type[1]],
				                    icon:'circle'
				                }

                             ],
                                calculable : true,
                                xAxis : [
                                    {
                                        type : 'category',
                                        boundaryGap :false,
                                        name:this.xName,
                                        data :this.list.x,
                                        splitLine : {　　
                                            //设置网格线，写在哪个轴就是哪个轴的网格线
                                            show: true,
                                            lineStyle: {
                                              type: 'solid',
                                              // color: ['#aaa', 'red'],    //设置网格线的颜色，可单独设置
                                              color: '#EEEEEE'
                                            }
                                          }
                                        
                                    }

                                ],
                                yAxis : [
                                    {
                                        type : 'value',
                                        nameLocation: "end",
                                        // nameRotate: 90,
                                        nameGap: 20,
                                        name:this.yName,
                                        // splitLine : {　　
                                        //     //设置网格线，写在哪个轴就是哪个轴的网格线
                                        //     show: true,
                                        //     lineStyle: {
                                        //       type: 'dotted',
                                        //       // color: ['#aaa', 'red'],    //设置网格线的颜色，可单独设置
                                        //       color: '#4c4a74'
                                        //     }
                                        //   }
                                        },

                                ],
                                series :function getData(){
                                                    var serie=[];
                                                    // console.log(list.y);
                                                    if(list.y){
                                                        for( var i=0;i <list.y.length;i++){
                                                            var item={
                                                                name:type[i],
                                                                type:'line',
                                                                stack: '总量',
                                                                showSymbol: false,
                                                                data:list.y[i],
                                                                lineStyle:{
                                                                	normal:{
                                                                		color:color[i],
                                                                		width:1
                                                                	}
                                                                }
                                                            }
                                                            serie.push(item);
                                                        } 
                                                        
                                                    }
                                                    // console.log(serie);
                                                    return serie;
                                                    
                                                }()
                            };
                            // 使用刚指定的配置项和数据显示图表。
                         this.echart.setOption(option,true);
                         // this.time = setInterval(this.setValue,3000);
       },
	  methods: {
		      setValue(data){
                    var option=this.echart.getOption();//[{name:'',type:'',data:[]}]
                    // console.log(option);
                        if(option.series.length>0){
                        	for(var i = 0; i < option.series.length;i++){
	                            for(let j = 0; j < data.length;j++){
	                            if(option.series[i].name==data[j].name){
	                                console.log(data[j]);
	                                option.series[i].data.shift();
	                                option.series[i].data.push(data[j].y);
	                                 
	                                
	                            }
	                        }
                            }
                        	option.xAxis[0].data.shift();
                         	option.xAxis[0].data.push(data[0].x);
                         	this.echart.setOption(option);
                        }
                },
                emptyValue(){
                	var option=this.echart.getOption();
                	// var option = [];
                	option.series = [];
                	option.xAxis[0].data = [];
                	// console.log(option);
                	this.echart.setOption(option,true);
                }
		}
}
</script>
<style scoped>
    .ak_echarts{
        padding:10px 0;
    }
</style>