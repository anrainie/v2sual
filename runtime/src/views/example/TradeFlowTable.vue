<template>
<v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;width:100%;" key="0">
    <v2-component-table class="V2Widget" id="1560317827220" :wid="`1560317827220`" :index="0" :pid="`root`"></v2-component-table></el-row></v2container></template>
<script>
            import {root} from '@/utils/v2-view';
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"columns":[{"active":true,"sTitle":"columns0"},{"active":true,"sTitle":"tradeId","__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"交易号","description":"交易号","COLSCALE":"0","name":"tradeId","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"交易号"}},{"active":true,"sTitle":"tradeName","__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"交易名","description":"交易名","COLSCALE":"0","name":"tradeName","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"交易名"}},{"active":true,"sTitle":"employeeId","__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"柜员号","description":"柜员号","COLSCALE":"0","name":"employeeId","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"柜员号"}},{"active":true,"sTitle":"employeeId2","__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"复核柜员号","description":"复核柜员号","COLSCALE":"0","name":"employeeId2","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"复核柜员号"}},{"active":true,"sTitle":"state","__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"交易状态","description":"交易状态","COLSCALE":"0","name":"state","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"交易状态"}},{"active":true,"sTitle":"serialId","__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"业务流水号","description":"业务流水号","COLSCALE":"0","name":"serialId","Parameter":{"pname":"serialId","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"业务流水号"}},{"active":true,"sTitle":"start","__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"交易起始时间","description":"交易起始时间","COLSCALE":"0","name":"start","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"交易起始时间"}},{"active":true,"sTitle":"end","__edm_collection":{"CODINGRULE":"UTF-8","DICTTYPE":"2","PUBCODECNAME":"交易结束时间","description":"交易结束时间","COLSCALE":"0","name":"end","Parameter":{"pname":"字段长度","pvalue":"77"},"type":"String","UUID":"579307B9FF7F4BD4B28B143E579DC48C","EDITION":"v0.0.1","APPLYAREA":"casdf.cadf","fieldLength":"77","like":true,"desp":"交易结束时间"}}],"selection":"","toolBar":false,"toolTitle":"操作列","toolLocation":"right","toolWidth":"100","toolBtns":[{"active":"true","btnName":"详情"}],"tableData":"subTradeList","selectedRow":"","__type":"","__loopTarget":"","__loopKey":"","__capacity":"1","href":"v2-component-table","component":"v2-component-table","children":[],"events":{"_op_table_table":{"current-change":["event0_1560317827220"]}},"id":1560317827220,"pid":"root"}],"events":{}}},
                    }
                },
                props:{
                  tradeId:{default:()=>{return ""}},
subTradeList:{default:()=>{return ""}}
                },
                mixins:[root],
                methods:{event0_1560317827220(widget,item){
                let ctx = this;
                
                    /**overview event0_1560317827220**/
                        (async()=>{const t2 = await this.open({status:true,path:'/table/detail',page:'example/A1',title:'交易子流水',type:'SUB',params:item});
})();
                    /**overview over**/
                    
            }, },
                watch:{},
                beforeCreate(){
                    let ctx = this;
                    
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    
                },
                beforeMount(){
                    let ctx = this;
                    
                    /**overview beforeMount**/
                        (async()=>{const t1 = await pipe.getExcelData('交易流水表',`(e,index)=>index? ((e[13]==${ctx.serialId} )?{serialId:e[0],organId:e[1],employeeId2:e[2],tradeId:e[3],tradeName:e[4],employeeId:e[5],state:e[6],type:e[7],start:e[8],end:e[9]}:false):false`);
ctx.subTradeList = t1;})();
                    /**overview over**/
                    
                },
                mounted(){
                    let ctx = this;
                    /**bind**/this.$store.commit("bind",{ vueObj:this, data:this.subTradeList, dataStr:"subTradeList", wid:1560317827220, modelKey:"tableData" });/**bind over**/
                    
                },
                beforeUpdate(){
                    let ctx = this;
                    
                },
                updated(){
                    let ctx = this;
                    
                },
                beforeDestroy(){ 
                    let ctx = this;
                    /**unBind**/ctx.$store.commit("unbind",this)/**unBind over**/
                        
                },
                destroyed(){
                    let ctx = this;
                        
                }
            };
        </script>