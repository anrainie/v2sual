<template><v2-ctn-xy :wid="`root`"><v2-component-s_m_bg2 class="V2Widget" :style="`position:absolute;top:0;left:0;width:100%;height:40rem;`" id="1567607187056" :wid="`1567607187056`" :index="0" :pid="`root`" :bankName="`浦东分行/杨高路支行`"></v2-component-s_m_bg2><v2-component-s_m_trend class="V2Widget" :style="`position:absolute;top:451px;left:-0.4px;width:100%;height:20rem;`" id="1567608206492" :wid="`1567608206492`" :index="1" :pid="`root`" :title="`近6日开户趋势`" :number="26" :trend="`3.7%`" :trendClass="['grow']" :title2="`今日开户数`" :trendOption="open6trendChart"></v2-component-s_m_trend><v2-component-s_m_trend class="V2Widget" :style="`position:absolute;top:682px;left:4.4px;width:100%;height:20rem;`" id="1567608251701" :wid="`1567608251701`" :index="2" :pid="`root`" :title="`近6日销户趋势`" :number="11" :trend="`1.7%`" :trendClass="['reduce']" :title2="`今日销户数`" :trendOption="cancel6trendChart"></v2-component-s_m_trend><v2-component-text class="V2Widget" :class="[`title3`]" id="1567609019455" :wid="`1567609019455`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567609039667" :wid="`1567609039667`" :index="4" :pid="`root`"></v2-component-text><v2-component-s_m_device class="V2Widget" :style="`position:absolute;top:973px;left:84px;width:32rem;height:9rem;transform:none;`" id="1567609133451" :wid="`1567609133451`" :index="5" :pid="`root`" :img="`img/device1.png`" :title="`完好率`" :value="`intactRare`"></v2-component-s_m_device><v2-component-text class="V2Widget" :class="[`vline`]" id="1567609095193" :wid="`1567609095193`" :index="6" :pid="`root`"></v2-component-text><v2-component-s_m_device class="V2Widget" :style="`position:absolute;top:973px;left:404px;width:32rem;height:9rem;`" id="1567609081330" :wid="`1567609081330`" :index="7" :pid="`root`" :img="`img/device2.png`" :title="`开机率`" :value="`openRare`"></v2-component-s_m_device><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567609104325" :wid="`1567609104325`" :index="8" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title2`]" id="1567609131710" :wid="`1567609131710`" :index="9" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentS_m_device from '@/views/_customWidget/s_m_device.vue';import v2ComponentS_m_trend from '@/views/_customWidget/s_m_trend.vue';import v2ComponentS_m_bg2 from '@/views/_customWidget/s_m_bg2.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"dataBasket":{"bankName":"浦东分行/杨高路支行"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-s_m_bg2","href":"v2-component-s_m_bg2","cptpath":"\\src\\views\\_customWidget\\s_m_bg2.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","height":"40rem"},"id":1567607187056,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"近6日开户趋势","number":"26","trend":"3.7%","trendClass":"['grow']","title2":"今日开户数","trendOption":"open6trendChart"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-s_m_trend","href":"v2-component-s_m_trend","cptpath":"\\src\\views\\_customWidget\\s_m_trend.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"451px","left":"-0.4px","width":"100%","height":"20rem"},"id":1567608206492,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"近6日销户趋势","number":"11","trend":"1.7%","trendClass":"['reduce']","title2":"今日销户数","trendOption":"cancel6trendChart"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-s_m_trend","href":"v2-component-s_m_trend","cptpath":"\\src\\views\\_customWidget\\s_m_trend.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"682px","left":"4.4px","width":"100%","height":"20rem"},"id":1567608251701,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"自助设备信息","editable":false,"ctnClass":"","customClass":"title3","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"90rem","left":"-0","width":"100%"},"id":1567609019455,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"s_m_panel","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"94em","left":"","width":"","height":"16rem"},"id":1567609039667,"pid":"root","animate":["","animated"]},{"dataBasket":{"img":"img/device1.png","title":"完好率","value":"intactRare"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-s_m_device","href":"v2-component-s_m_device","cptpath":"\\src\\views\\_customWidget\\s_m_device.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"973px","left":"84px","width":"32rem","height":"9rem","transform":"none"},"id":1567609133451,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"vline","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"940px","left":"383px","height":"14rem"},"id":1567609095193,"pid":"root","animate":["","animated"]},{"dataBasket":{"img":"img/device2.png","title":"开机率","value":"openRare"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-s_m_device","href":"v2-component-s_m_device","cptpath":"\\src\\views\\_customWidget\\s_m_device.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"973px","left":"404px","width":"32rem","height":"9rem"},"id":1567609081330,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"s_m_panel","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"1548px","left":"24.003px","width":"","height":"33rem"},"id":1567609104325,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"设备交易占比","editable":false,"ctnClass":"","customClass":"title2","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"1569px","left":"54px"},"id":1567609131710,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},null,{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
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
}
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentS_m_device,v2ComponentS_m_trend,v2ComponentS_m_bg2},
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.open6trendChart, dataStr:"open6trendChart", wid:1567608206492, modelKey:"trendOption" });/**bind over**/
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