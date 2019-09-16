<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1567606051387" :wid="`1567606051387`" :index="0" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567606456840" :wid="`1567606456840`" :index="1" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567606488652" :wid="`1567606488652`" :index="2" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567606435329" :wid="`1567606435329`" :index="3" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567606510950" :wid="`1567606510950`" :index="4" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`pageName`]" id="1567606789121" :wid="`1567606789121`" :index="5" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`subPageName`]" id="1567606887050" :wid="`1567606887050`" :index="6" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1568046070642" :wid="`1568046070642`" :index="7" :pid="`root`"></v2-component-image></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root,cpt,widget} from '@v2-lib/v2sual/mixin/v2-view';import events from "@v2-lib/v2sual/mixin/events";
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"-0","left":"-0","width":"100%","height":"3.8rem","animation-duration":"1s"},"events":{},"href":"v2-component-image","src":"img/s_m_bg_2.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567606051387,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"0.28rem","left":"0.1rem","width":"0.48rem","height":"0.48rem","animation-duration":"1s"},"events":{"_root":{},"imgComponent":{"click":["returnPPage"]}},"href":"v2-component-image","src":"img/矩形 7018.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567606456840,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"0.28rem","left":"0.58rem","width":"0.48rem","height":"0.48rem","animation-duration":"1s"},"events":{"_root":{},"imgComponent":{"click":["openDrawer"]}},"href":"v2-component-image","src":"img/矩形 10.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567606488652,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"0.28rem","width":"0.48rem","height":"0.48rem","animation-duration":"1s","right":"0.1rem"},"events":{},"href":"v2-component-image","src":"img/椭圆 5.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567606435329,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"0.28rem","left":"39%","width":"1.6rem","height":"0.4rem","animation-duration":"1s"},"events":{},"href":"v2-component-image","src":"img/形状 1.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567606510950,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${bankName}","customClass":"pageName","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1.4rem","left":"7%","animation-duration":"1s","font-size":"0.2rem"},"id":1567606789121,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"当前等待最长耗时","customClass":"subPageName","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"1.8rem","left":"7%","margin-top":"0","animation-duration":"1s","font-size":"0.14rem"},"id":1567606887050,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"2.05rem","left":"6.5%","width":"1.6rem","height":"0.5rem","animation-duration":"1s"},"events":{},"href":"v2-component-image","src":"img/delateTime.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1568046070642,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{},{},{}]}},
                        
                    }
                },
                props:{
                  bankName:{default:()=>{return `浦东分行/杨高路支行`}}
                },
                mixins:[root,widget,cpt,events,mixins],
                
                methods:{
                  _source_init(){
                    let ctx = this;
                    window.pipe.vda.ready().then(() =>{
                      
                    });
                  },
                  returnPPage(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = "";
ctx.$root.$router.push('/mobile/shanghai_mobile/page3');;
})();
                    /*overview over*/
                    
                    
              }, openDrawer(){
                  let ctx = this;
                  
            
                    /*overview*/
                        (async()=>{    const t4 = "";
ctx.$root.$emit('showDrawer',true);
})();
                    /*overview over*/
                    
                    
              }, 
                },
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    ctx._source_init();
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.bankName, dataStr:"bankName", wid:1567606789121, modelKey:"text" });/**bind over**/

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