<template><v2-ctn-xy :wid="`root`"><v2-component-s_m_bg2 class="V2Widget" :style="`position:absolute;top:0;left:0;width:100%;height:4rem;animation-duration:1s;`" id="1567607187056" :wid="`1567607187056`" :index="0" :pid="`root`" :bankName="`浦东分行/杨高路支行`" :test="213"></v2-component-s_m_bg2><v2-component-s_m_trend class="V2Widget" :class="[`s_m_panel`]" :style="`position:absolute;top:4rem;width:100%;height:2rem;animation-duration:1s;`" id="1567608206492" :wid="`1567608206492`" :index="1" :pid="`root`" :title="`近6日开户趋势`" :test="213" :number="26" :trend="`3.7%`" :trendClass="['grow']" :title2="`今日开户数`" :trendOption="open6trendChart"></v2-component-s_m_trend><v2-component-s_m_trend class="V2Widget" :class="[`s_m_panel`]" :style="`position:absolute;top:6.25rem;height:2rem;animation-duration:1s;width:100%;`" id="1567608251701" :wid="`1567608251701`" :index="2" :pid="`root`" :title="`近6日销户趋势`" :test="213" :number="11" :trend="`1.7%`" :trendClass="['reduce']" :title2="`今日销户数`" :trendOption="open6trendChart"></v2-component-s_m_trend><v2-component-text class="V2Widget" :class="[`title3`]" id="1567609019455" :wid="`1567609019455`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567609039667" :wid="`1567609039667`" :index="4" :pid="`root`"></v2-component-text><v2-component-s_m_device class="V2Widget" :style="`position:absolute;top:8.95rem;left:0.4rem;width:2rem;height:1rem;transform:none;animation-duration:1s;`" id="1567609133451" :wid="`1567609133451`" :index="5" :pid="`root`" :img="`img/device1.png`" :test="213" :title="`完好率`" :value="intactRare"></v2-component-s_m_device><v2-component-text class="V2Widget" :class="[`vline`]" id="1567609095193" :wid="`1567609095193`" :index="6" :pid="`root`"></v2-component-text><v2-component-s_m_device class="V2Widget" :style="`position:absolute;top:8.95rem;width:2rem;height:1rem;right:0.4rem;animation-duration:1s;`" id="1567609081330" :wid="`1567609081330`" :index="7" :pid="`root`" :img="`img/device2.png`" :test="213" :title="`开机率`" :value="openRare"></v2-component-s_m_device><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567609104325" :wid="`1567609104325`" :index="8" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title2`]" id="1567609131710" :wid="`1567609131710`" :index="9" :pid="`root`"></v2-component-text><v2-component-s_navi_bar class="V2Widget" :style="`position:absolute;top:295px;left:157px;width:129px;height:50px;`" id="1567849476329" :wid="`1567849476329`" :index="10" :pid="`root`" :item_class="[`s_navi_item`,]" :test="213"></v2-component-s_navi_bar><v2-component-text class="V2Widget" id="1567849496179" :wid="`1567849496179`" :index="11" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567849676814" :wid="`1567849676814`" :index="12" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title2`]" id="1567849888369" :wid="`1567849888369`" :index="13" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentS_navi_bar from '@/views/_customWidget/s_navi_bar.vue';import v2ComponentS_m_device from '@/views/_customWidget/s_m_device.vue';import v2ComponentS_m_trend from '@/views/_customWidget/s_m_trend.vue';import v2ComponentS_m_bg2 from '@/views/_customWidget/s_m_bg2.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"dataBasket":{"bankName":"浦东分行/杨高路支行"},"__capacity":"1","component":"v2-component-s_m_bg2","href":"v2-component-s_m_bg2","cptpath":"\\src\\views\\_customWidget\\s_m_bg2.vue","events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","height":"4rem","animation-duration":"1s"},"id":1567607187056,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"近6日开户趋势","number":"26","trend":"3.7%","trendClass":"['grow']","title2":"今日开户数","trendOption":"open6trendChart"},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-s_m_trend","href":"v2-component-s_m_trend","cptpath":"\\src\\views\\_customWidget\\s_m_trend.vue","events":{},"commonStyle":{"position":"absolute","top":"4rem","width":"100%","height":"2rem","animation-duration":"1s"},"id":1567608206492,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"近6日销户趋势","number":"11","trend":"1.7%","trendClass":"['reduce']","title2":"今日销户数","trendOption":"open6trendChart"},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-s_m_trend","href":"v2-component-s_m_trend","cptpath":"\\src\\views\\_customWidget\\s_m_trend.vue","events":{},"commonStyle":{"position":"absolute","top":"6.25rem","height":"2rem","animation-duration":"1s","width":"100%"},"id":1567608251701,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"自助设备信息","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"9rem","width":"100%","animation-duration":"1s"},"id":1567609019455,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"8.75rem","height":"1.6rem","animation-duration":"1s"},"id":1567609039667,"pid":"root","animate":["","animated"]},{"dataBasket":{"img":"img/device1.png","title":"完好率","value":"intactRare"},"__capacity":"1","component":"v2-component-s_m_device","href":"v2-component-s_m_device","cptpath":"\\src\\views\\_customWidget\\s_m_device.vue","events":{},"commonStyle":{"position":"absolute","top":"8.95rem","left":"0.4rem","width":"2rem","height":"1rem","transform":"none","animation-duration":"1s"},"id":1567609133451,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"vline","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"8.85rem","left":"50%","height":"1.4rem","animation-duration":"1s"},"id":1567609095193,"pid":"root","animate":["","animated"]},{"dataBasket":{"img":"img/device2.png","title":"开机率","value":"openRare"},"__capacity":"1","component":"v2-component-s_m_device","href":"v2-component-s_m_device","cptpath":"\\src\\views\\_customWidget\\s_m_device.vue","events":{},"commonStyle":{"position":"absolute","top":"8.95rem","width":"2rem","height":"1rem","right":"0.4rem","animation-duration":"1s"},"id":1567609081330,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"10.6rem","height":"3.3rem","animation-duration":"1s"},"id":1567609104325,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"设备交易占比","customClass":"title2","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"10.7rem","left":"0.4rem","animation-duration":"1s"},"id":1567609131710,"pid":"root","animate":["","animated"]},{"dataBasket":{"item_class":["s_navi_item"]},"__capacity":"1","component":"v2-component-s_navi_bar","href":"v2-component-s_navi_bar","cptpath":"\\src\\views\\_customWidget\\s_navi_bar.vue","events":{},"commonStyle":{"position":"absolute","top":"295px","left":"157px","width":"129px","height":"50px"},"id":1567849476329,"pid":"root"},{"style":{"textStyle":{}},"text":"自助设备信息","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"8.35rem","left":"calc(50% - 0.6rem)","width":"100%","font-size":"0.2rem","animation-duration":"1s"},"id":1567849496179,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14.1rem","height":"3.3rem","animation-duration":"1s"},"id":1567849676814,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"自助设备异常信息","customClass":"title2","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14.2rem","left":"0.4rem","animation-duration":"1s"},"id":1567849888369,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{},{},{},{},{},null,{},{},{}],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"]}},
                        open6trendChart:{
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {
            color:'#52D5B0'
        }
    }]
},
cancel6trendChart:{
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {
            color:'#136DFF'
        }
    }]
},
intactRare:`96.9%`,
openRare:`99%`
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentS_navi_bar,v2ComponentS_m_device,v2ComponentS_m_trend,v2ComponentS_m_bg2},
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.open6trendChart, dataStr:"open6trendChart", wid:1567608206492, modelKey:"trendOption" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.open6trendChart, dataStr:"open6trendChart", wid:1567608251701, modelKey:"trendOption" });/**bind over**/
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