<template><v2-ctn-xy :wid="`root`"><v2-component-s_m_header class="V2Widget" :style="`position:absolute;top:2px;left:-1px;width:100%;height:2.6rem;animation-duration:1s;`" id="1568883494344" :wid="`1568883494344`" :index="0" :pid="`root`"></v2-component-s_m_header><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1568883501181" :wid="`1568883501181`" :index="1" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1568883454650" :wid="`1568883454650`" :index="2" :pid="`root`"></v2-component-text><v2-component-s_m_device class="V2Widget" :style="`position:absolute;top:224px;left:74px;width:2rem;height:1rem;animation-duration:1s;`" id="1568883467963" :wid="`1568883467963`" :index="3" :pid="`root`" :img="`img/device2.png`" :test="213" :title="`正常运行`" :value="`${intactRare}`"></v2-component-s_m_device></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentS_m_device from '@/views/_customWidget/s_m_device.vue';import v2ComponentS_m_header from '@/views/_customWidget/s_m_header.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"__capacity":"1","component":"v2-component-s_m_header","href":"v2-component-s_m_header","cptpath":"\\src\\views\\_customWidget\\s_m_header.vue","events":{},"commonStyle":{"position":"absolute","top":"2px","left":"-1px","width":"100%","height":"2.6rem","animation-duration":"1s"},"id":1568883494344,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"194px","height":"1.6rem","animation-duration":"1s","left":"18px"},"id":1568883501181,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"390px","height":"6rem","animation-duration":"1s","left":"18px"},"id":1568883454650,"pid":"root","animate":["","animated"]},{"dataBasket":{"img":"img/device2.png","title":"正常运行","value":"${intactRare}"},"__capacity":"1","component":"v2-component-s_m_device","href":"v2-component-s_m_device","cptpath":"\\src\\views\\_customWidget\\s_m_device.vue","events":{},"commonStyle":{"position":"absolute","top":"224px","left":"74px","width":"2rem","height":"1rem","animation-duration":"1s"},"id":1568883467963,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{}]}},
                        intactRare:`100%`
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentS_m_device,v2ComponentS_m_header},
                methods:{
                  _source_init(){
                    let ctx = this;
                    window.pipe.vda.ready().then(() =>{
                      
                    });
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
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.intactRare, dataStr:"intactRare", wid:1568883467963, modelKey:"value" });/**bind over**/

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