<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;" key="0"><v2-ctn-order class="V2Widget" :class="[`eb-certificate__main`]" id="1567418495280" :wid="`1567418495280`" :index="0" :pid="`root`"><v2-component-icon class="V2Widget" id="1567418508798" :wid="`1567418508798`" :index="0" :pid="`1567418495280`"></v2-component-icon><v2-ebank-paragraph class="V2Widget" id="1567418589669" :wid="`1567418589669`" :index="1" :pid="`1567418495280`"></v2-ebank-paragraph><v2-component-btn class="V2Widget" id="1567418618957" :wid="`1567418618957`" :index="2" :pid="`1567418495280`"></v2-component-btn></v2-ctn-order></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"width":"","height":"","margin":"","padding":"","background":"","border":"","borderRadius":"","boxShadow":"","ctnClass":"","customClass":"eb-certificate__main","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ctn-order","href":"v2-ctn-order","children":[{"style":{"iStyle":{"font-size":"","font-weight":""}},"icon":"el-icon-lock","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-icon","href":"v2-component-icon","children":[],"events":{},"id":1567418508798,"pid":1567418495280,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"theme":{},"style":{},"header":"${tip.header}","divider":false,"content":"${tip.content}","indent":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ebank-paragraph","href":"v2-ebank-paragraph","children":[],"events":{},"id":1567418589669,"pid":1567418495280,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"theme":{"btnType":"","size":""},"style":{"btnStyle":{"background-color":"","height":"","width":""}},"btnName":"证书登陆","shape":"def","loading":false,"leftIcon":"","rightIcon":"","disabled":false,"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-btn","href":"v2-component-btn","children":[],"events":{},"id":1567418618957,"pid":1567418495280,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"events":{},"customEditor":"v2EditorOrderCtn","id":1567418495280,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnClass":"","customClass":"","realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        tip:{
    header: '该功能需要使用证书登录',
    content: ['尊敬的客户,由于您是通过扫码登录的网上银行,该功能暂时无法使用。请使用证书登录。']
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
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.tip.header, dataStr:"tip.header", wid:1567418275893, modelKey:"header" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tip.content, dataStr:"tip.content", wid:1567418275893, modelKey:"content" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tip.header, dataStr:"tip.header", wid:1567418589669, modelKey:"header" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tip.content, dataStr:"tip.content", wid:1567418589669, modelKey:"content" });/**bind over**/
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