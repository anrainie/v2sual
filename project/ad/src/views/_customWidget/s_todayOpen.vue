<template><v2-ctn-xy :wid="`root`"><v2-component-text class="V2Widget" :class="[`s_gray_panel`]" id="1567760145038" :wid="`1567760145038`" :index="0" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567760276069" :wid="`1567760276069`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567760312862" :wid="`1567760312862`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567760227671" :wid="`1567760227671`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567760840488" :wid="`1567760840488`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" id="1567760903192" :wid="`1567760903192`" :index="5" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"textStyle":{}},"customClass":"s_gray_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","width":"100%","height":"100%","animation-duration":"1s"},"id":1567760145038,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${title}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"4rem","left":"1rem","font-size":"1rem","animation-duration":"1s"},"id":1567760276069,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${value}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"2rem","left":"1rem","font-size":"1.5rem","animation-duration":"1s"},"id":1567760312862,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"昨日同比","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0.4rem","left":"1rem","font-size":"1rem","animation-duration":"1s"},"id":1567760227671,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"户","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"2.5rem","left":"7rem","animation-duration":"1s","font-size":"1rem"},"id":1567760840488,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${rare}","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"4rem","left":"7rem","font-size":"1rem","animation-duration":"1s"},"id":1567760903192,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{}]}},
                        
                    }
                },
                props:{
                  title:{default:()=>{return "`今日开户数`"}},
value:{default:()=>{return "2,074"}},
rare:{default:()=>{return "`13.7%`"}},
v2forminput_1567760866528_value:{default:()=>{return ""}}
                },
                mixins:[root,widget,cpt,events,mixins],
                
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.title, dataStr:"title", wid:1567760276069, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.value, dataStr:"value", wid:1567760312862, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.v2forminput_1567760866528_value, dataStr:"v2forminput_1567760866528_value", wid:1567760866528, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.rare, dataStr:"rare", wid:1567760903192, modelKey:"text" });/**bind over**/
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