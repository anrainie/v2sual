<template><v2container :wid="`root`"><el-col class="V2ContainerBlock" style="width:80%;" key="0"><v2container id="1567417646096" :wid="`1567417646096`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-grid eb-grid--blue eb-grid--radius el-center`]" style="height:330px;" key="0"><v2-ctn-xy class="V2Widget" id="1567417726934" :wid="`1567417726934`" :index="0" :pid="`1567417646096`"><v2-component-text class="V2Widget" :class="[`titleClass`]" id="1567418525197" :wid="`1567418525197`" :index="0" :pid="`1567417726934`"></v2-component-text><v2-component-text class="V2Widget" id="1567418576389" :wid="`1567418576389`" :index="1" :pid="`1567417726934`"></v2-component-text><v2-component-text class="V2Widget" id="1567418643713" :wid="`1567418643713`" :index="2" :pid="`1567417726934`"></v2-component-text><v2-component-text class="V2Widget" id="1567418615249" :wid="`1567418615249`" :index="3" :pid="`1567417726934`"></v2-component-text><v2-component-text class="V2Widget" id="1567422930377" :wid="`1567422930377`" :index="4" :pid="`1567417726934`"></v2-component-text><v2empty class="V2Empty" id="1567417726934-5" :wid="`1567417726934-5`" :index="5" :pid="`1567417726934`"></v2empty><v2empty class="V2Empty" id="1567417726934-6" :wid="`1567417726934-6`" :index="6" :pid="`1567417726934`"></v2empty></v2-ctn-xy></el-row><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-grid eb-grid--blue eb-grid--radius el-bottom`]" style="height:130px;" key="1"><v2-ctn-xy class="V2Widget" id="1567417800651" :wid="`1567417800651`" :index="1" :pid="`1567417646096`"><v2-component-text class="V2Widget" :class="[`titleClass`]" id="1567418824923" :wid="`1567418824923`" :index="0" :pid="`1567417800651`"></v2-component-text><v2-component-text class="V2Widget" id="1567418886839" :wid="`1567418886839`" :index="1" :pid="`1567417800651`"></v2-component-text><v2-component-text class="V2Widget" id="1567418859286" :wid="`1567418859286`" :index="2" :pid="`1567417800651`"></v2-component-text><v2-component-text class="V2Widget" id="1567421406354" :wid="`1567421406354`" :index="3" :pid="`1567417800651`"></v2-component-text><v2empty class="V2Empty" id="1567417800651-4" :wid="`1567417800651-4`" :index="4" :pid="`1567417800651`"></v2empty><v2-component-text class="V2Widget" id="1567421396383" :wid="`1567421396383`" :index="5" :pid="`1567417800651`"></v2-component-text></v2-ctn-xy></el-row></v2container></el-col><el-col class="V2ContainerBlock" style="width:15%;" key="1"><v2empty class="V2Empty" id="root-1" :wid="`root-1`" :index="1" :pid="`root`"></v2empty></el-col></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"col","layout":["80","15"],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"direction":"row","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"ctnClass":"eb-grid eb-grid--blue eb-grid--radius el-center","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-xy","href":"v2-ctn-xy","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"25px","font-family":"","font-weight":"bold","font-style":"","text-decoration":""}},"text":"${title}","editable":false,"ctnClass":"","customClass":"titleClass","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","height":"25px","color":"#2D8CF0","border-color":"","border-style":"","border-width":"","margin-left":"0"},"id":1567418525197,"pid":1567417726934,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${text1}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"30px","left":"20px","width":"80%"},"id":1567418576389,"pid":1567417726934,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${text2}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"97.0018px","left":"20.0084px","width":"80%"},"id":1567418643713,"pid":1567417726934,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${text3}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"168.005px","left":"20.0042px","width":"80%"},"id":1567418615249,"pid":1567417726934,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${text4}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"221.004px","left":"20.0094px"},"id":1567422930377,"pid":1567417726934,"animate":["","animated"]},null,null],"events":{},"customEditor":"v2EditorXYCtn","id":1567417726934,"pid":1567417646096,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"ctnClass":"eb-grid eb-grid--blue eb-grid--radius el-bottom","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-xy","href":"v2-ctn-xy","children":[{"style":{"textStyle":{"height":"","width":"","line-height":"25px","font-family":"","font-weight":"bold","font-style":"","text-decoration":""}},"text":"${title2}","editable":false,"ctnClass":"","customClass":"titleClass","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","color":"#2D8CF0","height":"25px"},"id":1567418824923,"pid":1567417800651,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${url1}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"40px","left":"20px","width":"200px"},"id":1567418886839,"pid":1567417800651,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${url2}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"40px","left":"500px","width":"200px"},"id":1567418859286,"pid":1567417800651,"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${url5}","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"68.0166px","left":"500px","width":"200px"},"id":1567421406354,"pid":1567417800651,"animate":["","animated"]},null,{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"url4","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"68.0082px","left":"20px","width":"200px"},"id":1567421396383,"pid":1567417800651,"animate":["","animated"]}],"events":{},"customEditor":"v2EditorXYCtn","id":1567417800651,"pid":1567417646096,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":["330","130"],"realSize":["px","px"],"id":1567417646096,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},null],"events":{},"realSize":["%","%"],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        title:`贷款管理功能介绍`,
text1:`<b>个人贷款查询</b></br>
<span class="i_section">
<li>个人贷款业务功能包括<a color="blue" href="">个人贷款查询</a>和<a color="blue" href="">逾期贷款查询功能</a>。个人贷款查询可查询指定一卡通的个人贷款额度信息、个人贷款业务信息和个人贷款交易记录。逾期贷款查询可查询指定一卡通的逾期贷款信息。</li>
<span>`,
text2:`<b>随借随还</b></br>
<span class="i_section">
<li>随借随还业务为客户提供随时随地自助借款/还款功能。办理该业务后，客户可通过网银或电话银行自助办理借款和还款手续，最大限度节省利息。网银大众版和专业版提供随借随还还款功能，自助借款功能必须通过证书登录网银专业版或电话银行快易理财渠道。  </li>
</span>`,
text3:`<b>消费易</b></br>
<span class="i_section">
<li><a color="blue" href="">消费易</a>业务为客户提供具有最长50天免息期的循环贷款额度。招行客户只要取得循环授信额度，即可申请开通消费易，在贷款总额度内获得免息额度，用于一卡通刷卡或网上支付。</li>
</span>`,
title2:`贷款管理指南`,
url1:`<a color="blue" href="">个人贷款业务指南</a>`,
url2:`<a color="blue" href="">随借随还业务指南</a>`,
url4:`<a color="blue" href="">消费易业务指南</a>`,
url5:`<a color="blue" href="">周易转业务指南</a>`,
text4:`<b>周易痛</b></br>
<span class="i_section">
<li><a color="blue" href="">周易痛</a>业务为客户提供具有最长50天延后结算期的经营贷款。只需要经过一次审批，就可得到一笔无限次循环使用的贷款。通过POS刷卡或网上支付等方式随时随地用于支付货款，解决企业资金周转难题。</li>
</span>`
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
ctx.$store.commit("registerBind",{ vueObj:this, data:this.title2, dataStr:"title2", wid:1567418824923, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.url2, dataStr:"url2", wid:1567418859286, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.url1, dataStr:"url1", wid:1567418886839, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.url5, dataStr:"url5", wid:1567421406354, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.url4, dataStr:"url4", wid:1567421396383, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.text4, dataStr:"text4", wid:1567422930377, modelKey:"text" });/**bind over**/
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