<template><v2-ctn-xy :wid="`root`"><v2-component-s_earthbg class="V2Widget" :style="`position:absolute;top:1010px;left:2255px;width:1920px;height:1080px;animation-duration:1s;`" id="1568882685060" :wid="`1568882685060`" :index="0" :pid="`root`"></v2-component-s_earthbg><v2-component-s_earthbg class="V2Widget" :style="`position:absolute;top:3px;left:0px;width:1920px;height:1080px;animation-duration:1s;`" id="1568882940330" :wid="`1568882940330`" :index="1" :pid="`root`"></v2-component-s_earthbg><v2-component-s_number_text1 class="V2Widget" :style="`position:absolute;top:452px;left:78px;width:440px;height:160px;animation-duration:1s;`" id="1568882959161" :wid="`1568882959161`" :index="2" :pid="`root`" :num="`2,648,560`" :test="213" :text1="`柜面交易量`" :text2="`上月同比 23.6% ↑`" :num_class="`vda-h1-num`" :text1_class="`vda-h2-text`" :text2_class="`vda-h2-text-redBg`" :bgImg="`img/shanghai/s_glassShort2.png`"></v2-component-s_number_text1><v2-component-s_number_text1 class="V2Widget" :style="`position:absolute;top:210px;left:78px;width:440px;height:160px;animation-duration:1s;`" id="1568882917829" :wid="`1568882917829`" :index="3" :pid="`root`" :num="`2,648,560`" :test="213" :text1="`柜面交易量`" :text2="`上月同比 23.6% ↑`" :num_class="`vda-h1-num`" :text1_class="`vda-h2-text`" :text2_class="`vda-h2-text-redBg`" :bgImg="`img/shanghai/s_glassShort2.png`"></v2-component-s_number_text1><v2-component-s_page1_glass class="V2Widget" :style="`position:absolute;top:172px;left:1364px;width:430px;height:315px;animation-duration:1s;`" id="1568882926446" :wid="`1568882926446`" :index="4" :pid="`root`" :tradeCount="11512" :test="213" :tradeMeasure="22351" :tradeMeConfig="undefined" :title="`理财销售业务量及金额`"></v2-component-s_page1_glass><v2-component-s_navi_bar class="V2Widget" :style="`position:absolute;top:402px;left:1500px;width:129px;height:50px;animation-duration:1s;`" id="1568882937371" :wid="`1568882937371`" :index="5" :pid="`root`" :item_class="[`s_navi_item`,]" :test="213"></v2-component-s_navi_bar><v2-component-s_device_trade2 class="V2Widget" :style="`position:absolute;top:330px;left:1405px;width:320px;height:60px;animation-duration:1s;`" id="1568883027599" :wid="`1568883027599`" :index="6" :pid="`root`" :bottomClass="`vda_device_bottom`" :test="213" :deviceWidth="`50%`" :deviceClass="`vda_device_proportion`" :icon="`img/shanghai/s_atm.png`" :title="`自助取款机`" :key1="`完整数`" :value1="10" :key2="`完整数`" :value2="10" :key3="`占比`" :value3="`47.8%`" :titleClass="`vda_device_title`" :keyClass="`vda_device_key`" :valueClass="`vda_device_value`"></v2-component-s_device_trade2><v2-component-s_glass_title class="V2Widget" :style="`position:absolute;top:587px;left:1375px;width:350px;height:50px;animation-duration:1s;`" id="1568882968417" :wid="`1568882968417`" :index="7" :pid="`root`" :tradeCount="12314" :test="213" :tradeMeasure="12314"></v2-component-s_glass_title></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentS_glass_title from '@/views/_customWidget/s_glass_title.vue';import v2ComponentS_device_trade2 from '@/views/_customWidget/s_device_trade2.vue';import v2ComponentS_navi_bar from '@/views/_customWidget/s_navi_bar.vue';import v2ComponentS_page1_glass from '@/views/_customWidget/s_page1_glass.vue';import v2ComponentS_number_text1 from '@/views/_customWidget/s_number_text1.vue';import v2ComponentS_earthbg from '@/views/_customWidget/s_earthBg.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"__capacity":"1","component":"v2-component-s_earthbg","href":"v2-component-s_earthbg","cptpath":"\\src\\views\\_customWidget\\s_earthBg.vue","events":{},"commonStyle":{"position":"absolute","top":"1010px","left":"2255px","width":"1920px","height":"1080px","animation-duration":"1s"},"id":1568882685060,"pid":"root","animate":["","animated"]},{"__capacity":"1","component":"v2-component-s_earthbg","href":"v2-component-s_earthbg","cptpath":"\\src\\views\\_customWidget\\s_earthBg.vue","events":{},"commonStyle":{"position":"absolute","top":"3px","left":"0px","width":"1920px","height":"1080px","animation-duration":"1s"},"id":1568882940330,"pid":"root","animate":["","animated"]},{"dataBasket":{"num":"2,648,560","text1":"柜面交易量","text2":"上月同比 23.6% ↑","num_class":"vda-h1-num","text1_class":"vda-h2-text","text2_class":"vda-h2-text-redBg","bgImg":"img/shanghai/s_glassShort2.png"},"__capacity":"1","component":"v2-component-s_number_text1","href":"v2-component-s_number_text1","cptpath":"\\src\\views\\_customWidget\\s_number_text1.vue","events":{},"commonStyle":{"position":"absolute","top":"452px","left":"78px","width":"440px","height":"160px","animation-duration":"1s"},"id":1568882959161,"pid":"root","animate":["","animated"]},{"dataBasket":{"num":"2,648,560","text1":"柜面交易量","text2":"上月同比 23.6% ↑","num_class":"vda-h1-num","text1_class":"vda-h2-text","text2_class":"vda-h2-text-redBg","bgImg":"img/shanghai/s_glassShort2.png"},"__capacity":"1","component":"v2-component-s_number_text1","href":"v2-component-s_number_text1","cptpath":"\\src\\views\\_customWidget\\s_number_text1.vue","events":{},"commonStyle":{"position":"absolute","top":"210px","left":"78px","width":"440px","height":"160px","animation-duration":"1s"},"id":1568882917829,"pid":"root","animate":["","animated"]},{"dataBasket":{"tradeCount":"11512","tradeMeasure":"22351","tradeMeConfig":"undefined","title":"理财销售业务量及金额"},"__capacity":"1","component":"v2-component-s_page1_glass","href":"v2-component-s_page1_glass","cptpath":"\\src\\views\\_customWidget\\s_page1_glass.vue","events":{},"commonStyle":{"position":"absolute","top":"172px","left":"1364px","width":"430px","height":"315px","animation-duration":"1s"},"id":1568882926446,"pid":"root","animate":["","animated"]},{"dataBasket":{"item_class":["s_navi_item"]},"__capacity":"1","component":"v2-component-s_navi_bar","href":"v2-component-s_navi_bar","cptpath":"\\src\\views\\_customWidget\\s_navi_bar.vue","events":{},"commonStyle":{"position":"absolute","top":"402px","left":"1500px","width":"129px","height":"50px","animation-duration":"1s"},"id":1568882937371,"pid":"root","animate":["","animated"]},{"dataBasket":{"bottomClass":"vda_device_bottom","deviceWidth":"50%","deviceClass":"vda_device_proportion","icon":"img/shanghai/s_atm.png","title":"自助取款机","key1":"完整数","value1":"10","key2":"完整数","value2":"10","key3":"占比","value3":"47.8%","titleClass":"vda_device_title","keyClass":"vda_device_key","valueClass":"vda_device_value"},"__capacity":"1","component":"v2-component-s_device_trade2","href":"v2-component-s_device_trade2","cptpath":"\\src\\views\\_customWidget\\s_device_trade2.vue","events":{},"commonStyle":{"position":"absolute","top":"330px","left":"1405px","width":"320px","height":"60px","animation-duration":"1s"},"id":1568883027599,"pid":"root","animate":["","animated"]},{"dataBasket":{"tradeCount":"12314","tradeMeasure":"12314"},"__capacity":"1","component":"v2-component-s_glass_title","href":"v2-component-s_glass_title","cptpath":"\\src\\views\\_customWidget\\s_glass_title.vue","events":{},"commonStyle":{"position":"absolute","top":"587px","left":"1375px","width":"350px","height":"50px","animation-duration":"1s"},"id":1568882968417,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{},{},{}],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"]}},
                        
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentS_glass_title,v2ComponentS_device_trade2,v2ComponentS_navi_bar,v2ComponentS_page1_glass,v2ComponentS_number_text1,v2ComponentS_earthbg},
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
                    /**bind**//**bind over**/

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