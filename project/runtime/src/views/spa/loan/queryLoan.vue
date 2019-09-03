<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:38px;" key="0"><v2container id="1567139238882" :wid="`1567139238882`" :index="0" :pid="`root`"><el-col class="V2ContainerBlock borderBox dashBorder" :class="[`query-title`]" style="width:86%;" key="0"><v2-component-text class="V2Widget" id="1567139351567" :wid="`1567139351567`" :index="0" :pid="`1567139238882`"></v2-component-text></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="width:14%;" key="1"><v2-ctn-order class="V2Widget" id="1567139279391" :wid="`1567139279391`" :index="1" :pid="`1567139238882`"><v2-component-btn class="V2Widget" :class="[`query-fresh-btn`]" id="1567139289432" :wid="`1567139289432`" :index="0" :pid="`1567139279391`"></v2-component-btn></v2-ctn-order></el-col></v2container></el-row><el-row class="V2ContainerBlock" :class="[`query-ctn-block`]" style="height:80px;" key="1"><v2container id="1567144035714" :wid="`1567144035714`" :index="1" :pid="`root`"><el-col class="V2ContainerBlock borderBox dashBorder" style="width:300px;" key="0"><v2-ctn-order class="V2Widget" id="1567144077428" :wid="`1567144077428`" :index="0" :pid="`1567144035714`"><v2-form-select class="V2Widget" id="1567144104911" :wid="`1567144104911`" :index="0" :pid="`1567144077428`"></v2-form-select></v2-ctn-order></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="width:300px;" key="1"><v2-ctn-order class="V2Widget" id="1567144141117" :wid="`1567144141117`" :index="1" :pid="`1567144035714`"><v2empty class="V2Empty" id="1567144141117-0" :wid="`1567144141117-0`" :index="0" :pid="`1567144141117`"></v2empty></v2-ctn-order></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="width:calc(100% - 600px);" key="2"><v2-ctn-order class="V2Widget" id="1567144150569" :wid="`1567144150569`" :index="2" :pid="`1567144035714`"><v2-component-text class="V2Widget" id="1567144157092" :wid="`1567144157092`" :index="0" :pid="`1567144150569`"></v2-component-text></v2-ctn-order></el-col></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:nullpx;" key="2"><v2-ctn-xy class="V2Widget" id="1567422296055" :wid="`1567422296055`" :index="2" :pid="`root`"><v2-component-text class="V2Widget" id="1567422326366" :wid="`1567422326366`" :index="0" :pid="`1567422296055`"></v2-component-text><v2-component-btn class="V2Widget" id="1567422383063" :wid="`1567422383063`" :index="1" :pid="`1567422296055`"></v2-component-btn><v2-component-text class="V2Widget" id="1567422490615" :wid="`1567422490615`" :index="2" :pid="`1567422296055`"></v2-component-text><v2-component-text class="V2Widget" id="1567422523487" :wid="`1567422523487`" :index="3" :pid="`1567422296055`"></v2-component-text><v2-component-text class="V2Widget" id="1567422532921" :wid="`1567422532921`" :index="4" :pid="`1567422296055`"></v2-component-text><v2-component-text class="V2Widget" id="1567423206807" :wid="`1567423206807`" :index="5" :pid="`1567422296055`"></v2-component-text><v2-component-text class="V2Widget" id="1567423302642" :wid="`1567423302642`" :index="6" :pid="`1567422296055`"></v2-component-text></v2-ctn-xy></el-row><el-row class="V2ContainerBlock" style="height:null;" key="3"><v2empty class="V2Empty" id="root-3" :wid="`root-3`" :index="3" :pid="`root`"></v2empty></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":["38","80",null,null],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"col","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"个人贷款查询","editable":false,"ctnClass":"query-title","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567139351567,"pid":1567139238882,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"width":"","height":"","margin":"","padding":"","background":"","border":"","borderRadius":"","boxShadow":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":""}},"btnName":"刷新","shape":"def","loading":false,"leftIcon":"el-icon-refresh-right","rightIcon":"","disabled":false,"ctnClass":"","customClass":"query-fresh-btn","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{},"id":1567139289432,"pid":1567139279391,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"customEditor":"v2EditorOrderCtn","id":1567139279391,"pid":1567139238882,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":[86,14],"realSize":["%","%"],"id":1567139238882,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"direction":"col","rules":"","ctnClass":"query-ctn-block","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"width":"","height":"","margin":"","padding":"","background":"","border":"","borderRadius":"","boxShadow":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"theme":{"size":""},"style":{"label":{"font-size":"","font-weight":"","color":""}},"label":"当前账户","labelWitdh":"100px","titleMode":"col","placeholder":"请选择","value":"${cardId}","dataType":"def","optionConfig":"${currentAccount}","options":[{"active":"true","value":"","label":""}],"clearable":false,"filterable":true,"disabled":false,"isRequired":false,"rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-form-select","href":"v2-form-select","children":[],"events":{},"id":1567144104911,"pid":1567144077428,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"customEditor":"v2EditorOrderCtn","id":1567144077428,"pid":1567144035714,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"width":"","height":"","margin":"","padding":"","background":"","border":"","borderRadius":"","boxShadow":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[null],"events":{},"customEditor":"v2EditorOrderCtn","id":1567144141117,"pid":1567144035714,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"width":"","height":"","margin":"","padding":"10px 10px","background":"","border":"","borderRadius":"","boxShadow":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567144157092,"pid":1567144150569,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"customEditor":"v2EditorOrderCtn","id":1567144150569,"pid":1567144035714,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":["300","300","calc(100% - 600px)"],"realSize":["px","px","输入"],"id":1567144035714,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-xy","href":"v2-ctn-xy","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"当前个人贷款状态：无贷款记录","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"87px","left":"192px","font-size":"16px"},"id":1567422326366,"pid":1567422296055,"animate":["","animated"]},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":""}},"btnName":"刷新 ","shape":"plain","loading":false,"leftIcon":"","rightIcon":"","disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{},"commonStyle":{"position":"absolute","top":"156.005px","left":"192.004px"},"id":1567422383063,"pid":1567422296055,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"bold","font-style":"","text-decoration":""}},"text":"说明:","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"247px","left":"192px","width":"48px","height":"16px"},"id":1567422490615,"pid":1567422296055,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"1、您可点击“额度编号”，查看该笔额度详情。","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"278px","left":"192px","width":"553px","height":"26px"},"id":1567422523487,"pid":1567422296055,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"2、您可点击“贷款查询”，查看该笔额度下贷款信息，如贷款的扣款账号等","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"313px","left":"192px"},"id":1567422532921,"pid":1567422296055,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"3、请您及时在贷款扣款账号中存入足够资金，以免贷款逾期，影响征信记录","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"346px","left":"192px"},"id":1567423206807,"pid":1567422296055,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"4、若今日是您贷款的还款日，且您有贷款尚未全额归还月供（不包括已逾期贷款），您可点击这里还款 ","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"374px","left":"192px"},"id":1567423302642,"pid":1567422296055,"animate":["","animated"]}],"events":{},"customEditor":"v2EditorXYCtn","id":1567422296055,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},null],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["px","px","px","输入"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        currentAccount:[{
    value:'6222023602082084898',
    label:'6222***********4898'
}],
querCondition:"",
isShowHighQuery:false,
highShowClass:["query-more-ctn","hide"],
tableData:[],
cardId:"",
startTime:"",
endTime:""
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                
                methods:{setToday(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.$axios.post("v1/ds/cmbcms/querySceneSerial",{card_num: "909090909090",condition: "today"}).then(res=>{if(res.retType==="SUCCESS"){ctx.tableData=res.jsonData.map(item=>{if(item.trade_date){item.trade_date=moment(item.trade_date).format("YYYY-MM-DD")}return item;});}});;
})();
                    /*overview over*/
                    
                    
              }, setWeek(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.$axios.post("v1/ds/cmbcms/querySceneSerial",{card_num: "909090909090",condition: "lastweek"}).then(res=>{if(res.retType==="SUCCESS"){ctx.tableData=res.jsonData.map(item=>{if(item.trade_date){item.trade_date=moment(item.trade_date).format("YYYY-MM-DD")}return item;});}});;
})();
                    /*overview over*/
                    
                    
              }, setmonth(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.$axios
          .post("v1/ds/cmbcms/querySceneSerial", {
            card_num: "909090909090",
            condition: "lastmonth"
          })
          .then(res=>{if(res.retType==="SUCCESS"){ctx.tableData=res.jsonData.map(item=>{if(item.trade_date){item.trade_date=moment(item.trade_date).format("YYYY-MM-DD")}return item;});}});;
})();
                    /*overview over*/
                    
                    
              }, setLastquarter(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.$axios
          .post("v1/ds/cmbcms/querySceneSerial", {
            card_num: "909090909090",
            condition: "lastquarter"
          })
          .then(res=>{if(res.retType==="SUCCESS"){ctx.tableData=res.jsonData.map(item=>{if(item.trade_date){item.trade_date=moment(item.trade_date).format("YYYY-MM-DD")}return item;});}});;
})();
                    /*overview over*/
                    
                    
              }, setYear(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.$axios
          .post("v1/ds/cmbcms/querySceneSerial", {
            card_num: "909090909090",
            condition: "lastyear"
          })
          .then(res=>{if(res.retType==="SUCCESS"){ctx.tableData=res.jsonData.map(item=>{if(item.trade_date){item.trade_date=moment(item.trade_date).format("YYYY-MM-DD")}return item;});}});;
})();
                    /*overview over*/
                    
                    
              }, setIsShowHighQuery(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.isShowHighQuery = !ctx.isShowHighQuery;
if(ctx.isShowHighQuery){
    ctx.highShowClass=["query-more-ctn"];
}else{
    ctx.highShowClass=["query-more-ctn","hide"];
};
})();
                    /*overview over*/
                    
                    
              }, highQuery(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = ctx.$axios.post("v1/ds/cmbcms/queryTradeSerial",{card_num: "909090909090",start_date: "",end_date:""}).then(res=>{if(res.retType==="SUCCESS"){ctx.tableData=res.jsonData.map(item=>{if(item.trade_date){item.trade_date=moment(item.trade_date).format("YYYY-MM-DD")}return item;});}});;
})();
                    /*overview over*/
                    
                    
              }, },
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.currentAccount, dataStr:"currentAccount", wid:1567144104911, modelKey:"optionConfig" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cardId, dataStr:"cardId", wid:1567144104911, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.highShowClass, dataStr:"highShowClass", wid:1567151479056, modelKey:"customClass" });/**bind over**/
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
.aweb-main{
    background:#eee;
}
.query-bg{
    background-color:#efefef;
}
.query-fresh-btn{
    color:#3642b9;
    border:none;
    float:right;
    background-color:transparent;
}
.query-fresh-btn:hover, .query-fresh-btn:focus{
    color:#005aff;
    background-color:transparent;
}
.query-title{
    color:#3642b9;
    font-size:18px;
    font-weight:800;
    cursor:pointer;
}
.query-title>*{
    font-size:inherit;
}
.query-ctn-block{
    background:#FFF;
    border-radius:5px;
    padding:20px 5px;
    margin:10px 0;
    border:1px solid rgb(207,205,235);
}
.query-inline-block{
    display:inline-block;
}
.query-header-block{
    height:40px;
    background:rgb(241,245,251);
    margin:-20px -5px;
    padding:5px;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
}
.query-devider{
    margin:calc((41px - 1em) / 3) 0;
}
.query-more-ctn{
    border-top:1px solid rgb(207,205,235);
    margin-top:10px;
    padding-top:10px;
}
.query-input-block{
    margin-top:10px;
    margin-bottom:10px;
}
.query-selected-title{
    float:left;
    border-bottom:2px solid;
    height:32px;
    line-height:40px;
    margin-left:10px;
    font-size:18px;
    padding:0 10px;
}
.query-table{
}
.query-adv-btn{
    margin:0 auto;
    background-color:#3642b9;
    color:white;
    padding:8px 4em;
    display:block;
}
.query-adv-btn:hover, .query-adv-btn:focus{
    background-color:#2e379e;
    color:white;
}
.query-adv-btn>span{
    font-size:14px;
}
.query-ctn-block>.v2-order-ctn>.v2-order-item{
    width:100%;
}
.hide{
    display:none;
}

</style>