<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`query-ctn-block`,`query-ctn-border-block`]" style="height:50%;" key="0"><v2-ctn-order class="V2Widget" id="1567147972634" :wid="`1567147972634`" :index="0" :pid="`root`"><v2container id="1567147884769" :wid="`1567147884769`" :index="0" :pid="`1567147972634`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:auto;" key="0"><v2-component-table class="V2Widget" :class="[`query-table`]" id="1567147922221" :wid="`1567147922221`" :index="0" :pid="`1567147884769`"></v2-component-table></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:10%;" key="1"><v2-component-text class="V2Widget" id="1567418976609" :wid="`1567418976609`" :index="1" :pid="`1567147884769`"></v2-component-text></el-row></v2container></v2-ctn-order></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[null],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"component":"v2-layout","href":"v2-layout","layout":[50],"direction":"row","children":[{"width":"","height":"","margin":"","padding":"","background":"","border":"","borderRadius":"","boxShadow":"","ctnClass":"query-ctn-block,query-ctn-border-block","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"direction":"row","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"theme":{"tableType":"border","size":""},"columns":[{"active":true,"prop":"columns0","label":"","fixed":"","width":"","sortable":false,"openFilter":false,"type":"text","tagMap":[{"active":"true","value":"","text":"","type":"text"}],"iconMap":[{"active":"true","value":"","text":""}],"filterMap":[{"active":"true","text":"","value":""}]},{"active":true,"prop":"sub_account","label":"户口号码","fixed":"","width":"","sortable":true,"openFilter":false,"type":"text","tagMap":[{"active":"true","value":"","text":"","type":"text"}],"iconMap":[{"active":"true","value":"","text":""}],"filterMap":[{"active":"true","text":"","value":""}],"__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"交易起始时间","description":"交易起始时间","COLSCALE":"0","name":"start","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"交易起始时间"}},{"active":true,"prop":"class","label":"减免类型","fixed":"","width":"","sortable":false,"openFilter":false,"type":"text","tagMap":[{"active":"true","value":"","text":"","type":"text"}],"iconMap":[{"active":"true","value":"","text":""}],"filterMap":[{"active":"true","text":"","value":""}],"__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"复核柜员号","description":"复核柜员号","COLSCALE":"0","name":"employeeId2","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"复核柜员号"}},{"active":true,"prop":"con_class","label":"减免状态","fixed":"","width":"","sortable":false,"openFilter":false,"type":"text","tagMap":[{"active":"true","value":"","text":"","type":"text"}],"iconMap":[{"active":"true","value":"","text":""}],"filterMap":[{"active":"true","text":"","value":""}],"__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"机构号","description":"机构号","COLSCALE":"0","name":"organId","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"机构号"}}],"selection":"","openIndex":false,"toolBar":false,"toolTitle":"操作列","toolLocation":"right","toolWidth":"100","toolBtns":[{"active":"true","btnName":"修改","type":"text","handler":""}],"tHeight":"","tMaxHeight":"","tableData":"${tableData}","expand":false,"expandMap":"","ctnClass":"","customClass":"query-table","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-table","href":"v2-component-table","children":[],"events":{},"id":1567147922221,"pid":1567147884769,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"账户个数：1","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567418976609,"pid":1567147884769,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"10px","padding-bottom":"20px","padding-left":"10px","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"layout":["auto",10],"realSize":["输入","%"],"id":1567147884769,"pid":1567147972634,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"customEditor":"v2EditorOrderCtn","id":1567147972634,"pid":1567147929829,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"style":{},"pid":1567146189116,"id":1567147929829,"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","realSize":["输入"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        currentAccount:[{
    value:'6222023602082084898',
    label:'6222***********4898'
}],
tableData:[{sub_account:"6214********1875",class:"客户指定减免",con_class:"有效",balance:"248.81",rate:"0.3000",state:"活动"}],
cardId:"",
class:[{label:"[全部]",value:"all"}],
textcontent:"<h6>说明</h6><div>1.您可以查询一卡通下各个子账号的名称、币种、余额、起息日、存款、利率等信息。</div>"
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
ctx.$store.commit("registerBind",{ vueObj:this, data:this.currentAccount, dataStr:"currentAccount", wid:1567144121190, modelKey:"optionConfig" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.highShowClass, dataStr:"highShowClass", wid:1567151479056, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tableData, dataStr:"tableData", wid:1567147922221, modelKey:"tableData" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.class, dataStr:"class", wid:1567417784750, modelKey:"optionConfig" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.class, dataStr:"class", wid:1567417835594, modelKey:"optionConfig" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.textcontent, dataStr:"textcontent", wid:1567419155341, modelKey:"text" });/**bind over**/
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