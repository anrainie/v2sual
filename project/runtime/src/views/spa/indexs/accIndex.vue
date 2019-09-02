<template><v2container :wid="`root`"><el-col class="V2ContainerBlock" style="width:80%;" key="0"><v2container id="1567417646096" :wid="`1567417646096`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-grid eb-grid--blue eb-grid--radius el-center`]" style="height:480px;" key="0"><v2-ctn-xy class="V2Widget" id="1567417726934" :wid="`1567417726934`" :index="0" :pid="`1567417646096`"><v2-component-text class="V2Widget" :class="[`titleClass`]" id="1567418525197" :wid="`1567418525197`" :index="0" :pid="`1567417726934`"></v2-component-text><v2-component-text class="V2Widget" id="1567418576389" :wid="`1567418576389`" :index="1" :pid="`1567417726934`"></v2-component-text><v2-component-text class="V2Widget" id="1567418643713" :wid="`1567418643713`" :index="2" :pid="`1567417726934`"></v2-component-text><v2-component-text class="V2Widget" id="1567418615249" :wid="`1567418615249`" :index="3" :pid="`1567417726934`"></v2-component-text><v2-component-text class="V2Widget" id="1567418651200" :wid="`1567418651200`" :index="4" :pid="`1567417726934`"></v2-component-text><v2-component-text class="V2Widget" id="1567418672522" :wid="`1567418672522`" :index="5" :pid="`1567417726934`"></v2-component-text></v2-ctn-xy></el-row><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-grid eb-grid--blue eb-grid--radius el-bottom`]" style="height:100px;" key="1"><v2-ctn-xy class="V2Widget" id="1567417800651" :wid="`1567417800651`" :index="1" :pid="`1567417646096`"><v2-component-text class="V2Widget" :class="[`titleClass`]" id="1567418824923" :wid="`1567418824923`" :index="0" :pid="`1567417800651`"></v2-component-text><v2-component-text class="V2Widget" id="1567418886839" :wid="`1567418886839`" :index="1" :pid="`1567417800651`"></v2-component-text><v2-component-text class="V2Widget" id="1567418859286" :wid="`1567418859286`" :index="2" :pid="`1567417800651`"></v2-component-text></v2-ctn-xy></el-row></v2container></el-col><el-col class="V2ContainerBlock" style="width:15%;" key="1"><v2empty class="V2Empty" id="root-1" :wid="`root-1`" :index="1" :pid="`root`"></v2empty></el-col></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"col","layout":["80","15"],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"row","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"ctnClass":"eb-grid eb-grid--blue eb-grid--radius el-center","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-xy","href":"v2-ctn-xy","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"25px","font-family":"","font-weight":"bold","font-style":"","text-decoration":""}},"text":"${title}","editable":false,"ctnClass":"","customClass":"titleClass","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","height":"25px","color":"#2D8CF0","border-color":"","border-style":"","border-width":"","margin-left":"0"},"id":1567418525197,"pid":1567417726934,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${text1}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"30px","left":"20.0126px","width":"80%"},"id":1567418576389,"pid":1567417726934,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${text2}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"145.007px","left":"20.0042px","width":"80%"},"id":1567418643713,"pid":1567417726934,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${text3}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"197.001px","left":"20.0042px","width":"80%"},"id":1567418615249,"pid":1567417726934,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${text4}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"309.008px","left":"20.0126px","width":"80%"},"id":1567418651200,"pid":1567417726934,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${text5}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"362.009px","left":"20.0126px","width":"80%"},"id":1567418672522,"pid":1567417726934,"animate":["","animated"]}],"events":{},"customEditor":"v2EditorXYCtn","id":1567417726934,"pid":1567417646096,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"ctnClass":"eb-grid eb-grid--blue eb-grid--radius el-bottom","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-xy","href":"v2-ctn-xy","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"25px","font-family":"","font-weight":"bold","font-style":"","text-decoration":""}},"text":"${title2}","editable":false,"ctnClass":"","customClass":"titleClass","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","color":"#2D8CF0","height":"25px"},"id":1567418824923,"pid":1567417800651,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${url1}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"40.0054px","left":"20.0042px","width":"200px"},"id":1567418886839,"pid":1567417800651,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${url2}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"40.0126px","left":"500.004px","width":"200px"},"id":1567418859286,"pid":1567417800651,"animate":["","animated"]}],"events":{},"customEditor":"v2EditorXYCtn","id":1567417800651,"pid":1567417646096,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":["480","100"],"realSize":["px","px"],"id":1567417646096,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},null],"events":{},"realSize":["%","%"],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        title:`账户管理功能介绍`,
text1:`<b>账户查询</b></br>
<span class="i_section">
<li><a color="blue" href="">账户总览:</a>统计展示客户名下所有账户的资产负债信息，包括一卡通/存折账户的银行存款、基金、国债、受托理财和黄金等投资产品的市值等资产信息，以及个人贷款和信用卡透支等负债信息。</li>
<li><a color="blue" href="">账户查询:</a>提供展示一卡通下各子账户的名称、币种和余额等信息。</li>
<li><a color="blue" href="">交易查询:</a>查询一卡通账户下的所有交易记录。</li>
<li><a color="blue" href="">开户信息:</a>查询一卡通账户的卡号、户名和开户网点等开户信息。 </li>
<span>`,
text2:`<b>密码管理</b></br>
<span class="i_section">
<li>密码管理功能包括：<a color="blue" href="">查询密码修改</a>、<a color="blue" href="">查询密码重置</a>、<a color="blue" href="">取款密码修改</a></li>
</span>`,
text3:`<b>卡片管理</b></br>
<span class="i_section">
<li><a color="blue" href="">一卡通挂失:</a>申请一卡通挂失和冻结。 </li>
<li><a color="blue" href="">新旧卡号互查:</a>通过最新卡查询所有旧卡，或通过任意一张旧卡查询最新卡。 </li>
<li><a color="blue" href="">到期换卡申请:</a>金卡/金葵花卡有效期为三年，申请到期换卡。 </li>
<li><a color="blue" href="">ATM/POS限额:</a>申请调低ATM/POS单日累计限额。</li>
</span>`,
text4:`<b>回单打印</b></br>
<span class="i_section">
<li><a color="blue" href="">回单打印:</a>查询网上转账汇款、网上支付、直付通和网上境外汇款等交易记录并打印回单。回单仅供客户对账使用，不作为交易凭证。</li>
<span>`,
text5:`<b>其他查询</b></br>
<span class="i_section">
<li><a color="blue" href="">个人企业年金查询:</a>查询指定一卡通账户的个人年金计划信息。</li>
<li><a color="blue" href="">一卡通积分查询:</a>查询一卡通借记卡积分信息。 </li>
<li><a color="blue" href="">理财收入统计:</a>查询指定账户或所有账户上年度收入。 </li>
<span>`,
title2:`账户管理指南`,
url1:`<a color="blue" href="">金葵花理财指南</a>`,
url2:`<a color="blue" href="">安全用卡指南</a>`
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1567418525197, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text1, dataStr:"text1", wid:1567418576389, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text2, dataStr:"text2", wid:1567418643713, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text3, dataStr:"text3", wid:1567418615249, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text4, dataStr:"text4", wid:1567418651200, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text5, dataStr:"text5", wid:1567418672522, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.title2, dataStr:"title2", wid:1567418824923, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.url2, dataStr:"url2", wid:1567418859286, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.url1, dataStr:"url1", wid:1567418886839, modelKey:"text" });/**bind over**/
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
.el-center{
    height:500px;
}
.el-bottom{
    height:200px;
}
.el-right{
    height:700px;
}
.i_section{
    line-height:20px;
}
a{
    text-decoration:underline;
    color:blue;
}
b{
    color:blue;
}
.titleClass{
    padding-left:20px;
    background:#F0FFFF;
    border-bottom:1px solid #c2d5eb;
}

</style>