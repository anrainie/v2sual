<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:5%;" key="0"><v2-component-text class="V2Widget" id="1567132831866" :wid="`1567132831866`" :index="0" :pid="`root`"></v2-component-text></el-row><el-row class="V2ContainerBlock" style="height:10%;" key="1"><v2container id="1567132928507" :wid="`1567132928507`" :index="1" :pid="`root`"><el-col class="V2ContainerBlock borderBox dashBorder" :class="[`eb-grid eb-grid--blue eb-grid--radius`]" style="width:calc(80% - 40px);" key="0"><v2-component-steps class="V2Widget" id="1567134135585" :wid="`1567134135585`" :index="0" :pid="`1567132928507`"></v2-component-steps></el-col><el-col class="V2ContainerBlock" :class="[`eb-grid eb-grid--blue eb-grid--radius`]" style="width:20%;" key="1"><v2container id="1567135026456" :wid="`1567135026456`" :index="1" :pid="`1567132928507`"><el-row class="V2ContainerBlock" style="height:50%;padding-top:20px" key="0"><v2container id="1567172816090" :wid="`1567172816090`" :index="0" :pid="`1567135026456`"><el-col class="V2ContainerBlock borderBox dashBorder" style="width:8%;" key="0"><v2-component-icon class="V2Widget" id="1567172807171" :wid="`1567172807171`" :index="0" :pid="`1567172816090`"></v2-component-icon></el-col><el-col class="V2ContainerBlock borderBox dashBorder" style="width:92%;" key="1"><v2-component-text class="V2Widget" id="1567172801440" :wid="`1567172801440`" :index="1" :pid="`1567172816090`"></v2-component-text></el-col></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;" key="1"><v2-component-text class="V2Widget" id="1567135063454" :wid="`1567135063454`" :index="1" :pid="`1567135026456`"></v2-component-text></el-row></v2container></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:70%;" key="2"><v2container id="1567134665887" :wid="`1567134665887`" :index="2" :pid="`root`"><el-col class="V2ContainerBlock borderBox dashBorder" style="width:100%;" key="0"><v2-switchable class="V2Widget" id="1567135358721" :wid="`1567135358721`" :index="0" :pid="`1567134665887`" activeindex="step"><template><v2-page :params="``" id="1567160057479" :wid="`1567160057479`" :index="0" :pid="`1567135358721`" v-if="step==0"></v2-page><v2-page :params="``" id="1567159360413" :wid="`1567159360413`" :index="1" :pid="`1567135358721`" v-if="step==1"></v2-page><v2container id="1567156153484" :wid="`1567156153484`" :index="2" :pid="`1567135358721`" v-if="step==2"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;" key="0"><v2-page :params="``" id="1567156221369" :wid="`1567156221369`" :index="0" :pid="`1567156153484`"></v2-page></el-row></v2container></template></v2-switchable></el-col></v2container></el-row><el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-grid eb-grid--blue eb-grid--radius`]" style="height:15%;" key="3"><v2-component-text class="V2Widget" id="1567133349171" :wid="`1567133349171`" :index="3" :pid="`root`"></v2-component-text></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":["5","10","70","15"],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"800","font-style":"","text-decoration":""}},"text":"转账汇款","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567132831866,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"18px","color":"#2D8CF0","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"direction":"col","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"active":"${step}","direction":"horizontal","processStatus":"finish","finishStatus":"success","alignCenter":false,"simple":true,"list":[{"active":"true","title":"录入转账信息","description":"","icon":""},{"active":true,"title":"确认转账信息","description":"","icon":""},{"active":true,"title":"转账结果","description":"","icon":""}],"ctnClass":"eb-grid eb-grid--blue eb-grid--radius","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-steps","href":"v2-component-steps","children":[],"events":{},"id":1567134135585,"pid":1567132928507,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"60px","padding-top":"20px","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":"","border-style":""},"animate":["","animated"]},{"direction":"row","rules":"","ctnClass":"eb-grid eb-grid--blue eb-grid--radius","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"direction":"col","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"style":{"iStyle":{"font-size":"","font-weight":""}},"icon":"el-icon-search","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-icon","href":"v2-component-icon","children":[],"events":{},"id":1567172807171,"pid":1567172816090,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"20px","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"10px","margin-right":"","font-size":"16px","color":"#2D8CF0","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"转账明细查询","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567172801440,"pid":1567172816090,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"20px","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"12px","color":"#2D8CF0","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"layout":[8,92],"realSize":["%","%"],"id":1567172816090,"pid":1567135026456,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"查询转账交易记录","editable":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567135063454,"pid":1567135026456,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"40px","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"30px","margin-right":"","font-size":"12px","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"sizeLocked":false}],"events":{},"layout":[50,50],"realSize":["%","%"],"id":1567135026456,"pid":1567132928507,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"20px","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":["calc(80% - 40px)","20"],"realSize":["输入","%"],"id":1567132928507,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"direction":"col","rules":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-layout","href":"v2-layout","children":[{"style":{"iWarpStyle":{"background-color":"","margin":"","padding":""}},"activeIndex":"step","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-switchable","href":"v2-switchable","children":[{"style":{"wrapStyle":{"background-color":"","margin":"","padding":""}},"page":"XhqTest/page1","params":"``","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-page","href":"v2-page","children":[],"events":{},"id":1567160057479,"pid":1567135358721,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"style":{"wrapStyle":{"background-color":"","margin":"","padding":""}},"page":"XhqTest/page2","params":"``","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-page","href":"v2-page","children":[],"events":{},"id":1567159360413,"pid":1567135358721,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"id":1567156153484,"pid":1567135358721,"component":"v2Container","layout":[100],"position":"row","children":[{"style":{"wrapStyle":{"background-color":"","margin":"","padding":""}},"page":"XhqTest/page3","params":"``","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-page","href":"v2-page","children":[],"events":{},"id":1567156221369,"pid":1567156153484,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"customEditor":"v2EditorSwitch","id":1567135358721,"pid":1567134665887,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"layout":["100"],"realSize":["%"],"id":1567134665887,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"${explain}","editable":false,"ctnClass":"eb-grid eb-grid--blue eb-grid--radius","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"id":1567133349171,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"20px","padding-bottom":"20px","padding-left":"20px","padding-right":"020px","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"ctnClass":"","customClass":"","realSize":["%","%","%","%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        explain:`<b>说明</b></br>
1、如果系统提示"通讯故障"或"尚未从收款行获得转账结果",请立刻点击<a color="blue" href="">"交易查询"</a>确认是否成功。</br>
2、为了您的安全，切莫相信以公检法、领导或亲人朋友、代办大额信用卡和高额贷款、刷单、网购客服或快递进行退款、鼓吹大额投资理财等要求进行的转账汇款，谨防诈骗。涉及不明资金的转账事宜，务必当面或电话核实<a color="blue" href="">【电话诈骗案例】</a>。</br>
3、不安装不明软件，交易期间不关闭杀毒软件，不点击不明链接，妥善保管卡号、密码、短信验证码等个人重要信息。</br>`,
step:0,
tableNum:0
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                
                methods:{确认转账(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t1 = 2;
ctx.step = t1;})();
                    /*overview over*/
                    
                    
              }, 返回修改(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t1 = 0;
ctx.step = t1;})();
                    /*overview over*/
                    
                    
              }, 下一步(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t1 = 1;
ctx.step = t1;})();
                    /*overview over*/
                    
                    
              }, },
                watch:{},
                computed:{
        undefined(){
          undefined
        }
        },
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.explain, dataStr:"explain", wid:1567133349171, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.step, dataStr:"step", wid:1567134135585, modelKey:"active" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.step, dataStr:"step", wid:1567135358721, modelKey:"activeIndex" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.step, dataStr:"step", wid:1567152422307, modelKey:"params" });/**bind over**/
                },
                beforeMount(){
                    let ctx = this;
                    
                },
                mounted(){
                    let ctx = this;
                    
                    /*overview*/
                        (async()=>{    const t4 = ctx.$root.$on('step',({
    index
})=>{
    ctx.step = index;
});
})();
                    /*overview over*/
                    
                    
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