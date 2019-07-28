<template>
	<div class="testManager">
		<div class="row rowCtn">
			<div class="columns columns" style="font-size:14px;">{{sence_name}}</div>
			<div class="columns returnChart"><img :src="reChart"></i></div>
			<div class="columns lineChart"><img :src="lineChart"></i></div>
		</div>
		<div class="row rowCtn" style="width:90%">
			<div class="columns col-md-1">场景状态</div>
			<div class="columns col-md-5">
				<akProgress :value="percentage"></akProgress>
			</div>
			<div class="columns col-md-1 play">
				<i v-bind:class="['fa fa-play-circle',status==1?'disable':'']"></i>
			</div>
			<div class="columns col-md-1 pause">
				<i v-bind:class="['fa fa-pause-circle',(status==-1||status==0)?'disable':'']"></i>
			</div>
			<div class="columns col-md-1 stop">
				<i v-bind:class="['fa fa-stop-circle',status==0?'disable':'']"></i>
			</div>
		</div>
		<div class="row rowCtn">
			<akCard width="240px" height='100px' backgroundColor="#eee" :icon="time" :content="timeContent"></akCard>
			<akCard width="240px" height='100px' backgroundColor="#eee" :icon="count" :content="senceContent"></akCard>
			<akCard width="240px" height='100px' backgroundColor="#eee" icon="":content="tpsContent" display="none"></akCard>
			<akCard width="240px" height='100px' backgroundColor="#eee" :icon="pieChart" :content="result"></akCard>
		</div>
		<div class="row rowCtn">场景详情</div>
		<dataTables :options="option" id="senceDetail" ref="details"></dataTables>
	</div>
</template>
<script>
	import akProgress from './akProgress'
	import akCard from './akCard'
	import dataTables from './dataTable'
	export default{
		data(){
			return{
				time: require('../assets/clock.svg'),
				lineChart:require('../assets/lineChart.svg'),
				reChart:require('../assets/return.svg'),
				count:require('../assets/bingfa.svg'),
				pieChart:require('../assets/pieChart.svg'),
				percentage:0,
				start:"fa fa-play-circle",
				timeId:'',
				token:'',
				startFlag:false,
				timeContent:{
					label:'压测计时',
					desc:'00:23:25/0'
				},
				senceContent:{
					label:'场景并发',
					desc:'300/1000'
				},
				tpsContent:{
					label:'TPS',
					desc:'500'
				},
				result:{
					label:'成功率',
					desc:'80%'
				},
				sence_name:'',
				status:0,
				senceInfo:{},
				option:{
			        scrollCollapse:false,
			        paging:true,
			        ordering:false,
			        bInfo:true,
			        searching:true,
			        columns:[
			          {"title":"请求类型"},
			          {"title":"平均响应时间"},
			          {"title":"最大响应时间"},
			          {"title":"请求数"},
			          {"title":"原因"},
			        ],  
			        columnDefs: [],  
			        dom:''
			    },
			}
		},
		components:{
			akProgress,
			akCard,
			dataTables
		},
		created(){
			this.getSence()
		},
		watch:{
	    	'$route':'getSence',
	    },
	    mounted(){
	    	var _this=this
	    	
	    	_this.registerEvent()
	    	var ws_option={
	    		url:'/AKuning/v1.0/websocket?module=/monitor',
	    		sendMsg:'hello'
	    	}, 
	    	ws=websocket(ws_option),data
	    	this.token=window.localStorage.user_token
	    	ws.onmessage=function(event){
	    		console.log(event.data)
	    		//data=JSON.stringify(event.data)
	    	}
	    },
	    // watch:{
	    // 	percentage(newVal,oldVal){
	    // 		if(newVal==100)
	    // 	}
	    // },
	    methods:{
	    	getProgress(max){
	    		if(this.percentage==max){
	    			clearInterval(this.timeId)
	    			this.startFlag=true
	    		}else{
	    			this.percentage=parseInt(this.percentage)+5
	    		}
	    	},
	    	getSence(){	
	    		this.senceInfo=this.$route.params.value
	    		this.percentage=0
	    		var _this=this
	    		if(this.senceInfo && this.senceInfo.name){
	    			this.sence_name=this.senceInfo.name
	    			this.status=this.senceInfo.status
	    			if(this.status==0){
						this.timeId=setInterval(function(){
						    _this.getProgress(35)
					    },1000)
					}else if(this.status==-1){
						this.percentage=75
						this.startFlag=true
					}else{
						this.percentage=75
						_this.timeId=setInterval(function(){
						    _this.getProgress(100)
					    },1000)
					}
	    		}
	    	},
	    	registerEvent(){
	    		var _this=this,type
	    		$('.testManager .returnChart').on('click',function(){
	    			_this.$router.push({name:'senceManager',
                             params:''})
	    		})
	    		$('.testManager .play').on('click',function(){
	    			if(_this.percentage==0){
						_this.timeId=setInterval(function(){
						    _this.getProgress(35)
					    },1000)
	    			}
	    			if(_this.startFlag){
	    				type=1
	    				_this.startTest(type)
	    			}else{
	    				_this.$akMessage({
				            type:'warning',
				            message:'等待场景准备完成后再启动'
				        })
	    			}
	    		})
	    		$('.testManager .pause').on('click',function(){
	    			type=-1
	    			//clearInterval(_this.timeId)
	    			_this.startTest(type)

	    		})
	    		$('.testManager .stop').on('click',function(){
	    			type=0
	    			//clearInterval(_this.timeId)
	    			_this.startTest(type)

	    		})
	    	},
	    	startTest(type){
	    		var _this=this,
	    			option={
			          type:'PUT',
			          url:'/AKuning/v1.0/testing/test/update_testing_status',
			          dataType:'json',
			          contentType:'application/json',
			          data:[
			            {
			              name:'testing_status',
			              value:type,
			              urlExternal:false,
			              queryString:true
			            },
			            {
			              name:'scene_id',
			              value:_this.senceInfo.id,
			              urlExternal:false,
			              queryString:true
			            },
			            {
			              name:'user_token',
			              value:_this.token,
			              urlExternal:false,
			              queryString:true
			            }
			          ],
			          success:function(response){
			            if(response.code==0){
			            	_this.status=type
			            	if(type==1){
			            		_this.timeId=setInterval(function(){
	    							_this.getProgress(100)
	    						},1500)
			              	}else if(type==0){
			              		_this.percentage=0
			              		_this.startFlag=false
			              		clearInterval(_this.timeId)
			              	}else{
			              		clearInterval(_this.timeId)
			              	}
			              	_this.$akMessage({
			                	type:'success',
			                	message:response.localizedMessage
			             	})
			            }else{
			            	_this.$akMessage({
				                type:'error',
				                message:response.localizedMessage
				             })
			            }
			          }
			        }
			        apiAjax(option)
	    	}
	    }
	}
</script>
<style>
	.testManager{
		font-size:12px;
	}
	.testManager .row{
		margin-left:0;
		margin-bottom:20px;
	}
	.testManager .row .returnChart,
	.testManager .row .lineChart{
		margin:-2px 0px 0 10px;
	}
	.testManager .play{
		font-size:4em;
		color:#03a9f4;
		margin:-25px 0 0 0;
		text-align:right;
	}
	.testManager .pause{
		font-size:4em;
		color:#03a9f4;
		margin:-25px 0 0 0;
		text-align:center;
	}
	.testManager .stop{
		font-size:4em;
		color:#03a9f4;
		margin:-25px 0 0 0;
		text-align:left;
	}
	.testManager .disable{
		color:#ccc !important;
	}
	.testManager table>thead>tr>th{
		font-size:12px;
	}

</style>