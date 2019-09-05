<template><v2-ctn-xy :wid="`root`"><v2-component-s_m_header class="V2Widget" :style="`position:absolute;top:0;left:0;width:100%;height:26rem;`" id="1567603945510" :wid="`1567603945510`" :index="0" :pid="`root`"></v2-component-s_m_header><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567604058180" :wid="`1567604058180`" :index="1" :pid="`root`"></v2-component-text><v2-component-s_m_device class="V2Widget" :style="`position:absolute;top:225px;left:78px;width:32rem;height:9rem;`" id="1567604076405" :wid="`1567604076405`" :index="2" :pid="`root`" :img="`img/device1.png`" :title="`完好率`" :value="`intactRare`"></v2-component-s_m_device><v2-component-s_m_device class="V2Widget" :style="`position:absolute;top:225px;left:367px;width:32rem;height:9rem;`" id="1567604025581" :wid="`1567604025581`" :index="3" :pid="`root`" :img="`img/device2.png`" :title="`开机率`" :value="`openRare`"></v2-component-s_m_device><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567604060968" :wid="`1567604060968`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title2`]" id="1567604083544" :wid="`1567604083544`" :index="5" :pid="`root`"></v2-component-text><v2-component-table class="V2Widget" id="1567604118671" :wid="`1567604118671`" :index="6" :pid="`root`"></v2-component-table><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567604281156" :wid="`1567604281156`" :index="7" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title2`]" id="1567604330585" :wid="`1567604330585`" :index="8" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`filter_text`]" id="1567604416769" :wid="`1567604416769`" :index="9" :pid="`root`"></v2-component-text><v2-component-echart class="V2Widget" id="1567604529177" :wid="`1567604529177`" :index="10" :pid="`root`"></v2-component-echart></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentS_m_device from '@/views/_customWidget/s_m_device.vue';import v2ComponentS_m_header from '@/views/_customWidget/s_m_header.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-s_m_header","href":"v2-component-s_m_header","cptpath":"\\src\\views\\_customWidget\\s_m_header.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","height":"26rem"},"id":1567603945510,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"s_m_panel","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"19rem","left":"26.002px","width":"","height":"16rem"},"id":1567604058180,"pid":"root","animate":["","animated"]},{"dataBasket":{"img":"img/device1.png","title":"完好率","value":"intactRare"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-s_m_device","href":"v2-component-s_m_device","cptpath":"\\src\\views\\_customWidget\\s_m_device.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"225px","left":"78px","width":"32rem","height":"9rem"},"id":1567604076405,"pid":"root","animate":["","animated"]},{"dataBasket":{"img":"img/device2.png","title":"开机率","value":"openRare"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-s_m_device","href":"v2-component-s_m_device","cptpath":"\\src\\views\\_customWidget\\s_m_device.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"225px","left":"367px","width":"32rem","height":"9rem"},"id":1567604025581,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"s_m_panel","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"38.5rem","left":"","width":"","height":"60rem"},"id":1567604060968,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"自助设备异常信息","editable":false,"ctnClass":"","customClass":"title2","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"406px","left":"55px"},"id":1567604083544,"pid":"root","animate":["","animated"]},{"theme":{"tableType":"border","size":""},"columns":[{"active":true,"prop":"columns0","label":"","fixed":"","width":"","sortable":false,"openFilter":false,"type":"text","tagMap":[{"active":"true","value":"","text":"","type":"text"}],"iconMap":[{"active":"true","value":"","text":""}],"filterMap":[{"active":"true","text":"","value":""}]},{"active":true,"prop":"columns1","label":"机具编号","fixed":"","width":"","sortable":false,"openFilter":false,"type":"text","tagMap":[{"active":"true","value":"","text":"","type":"text"}],"iconMap":[{"active":"true","value":"","text":""}],"filterMap":[{"active":"true","text":"","value":""}]},{"active":true,"prop":"columns2","label":"类型","fixed":"","width":"","sortable":false,"openFilter":false,"type":"text","tagMap":[{"active":"true","value":"","text":"","type":"text"}],"iconMap":[{"active":"true","value":"","text":""}],"filterMap":[{"active":"true","text":"","value":""}]},{"active":true,"prop":"columns3","label":"所属网点","fixed":"","width":"","sortable":false,"openFilter":false,"type":"text","tagMap":[{"active":"true","value":"","text":"","type":"text"}],"iconMap":[{"active":"true","value":"","text":""}],"filterMap":[{"active":"true","text":"","value":""}]},{"active":true,"prop":"columns4","label":"业务量","fixed":"","width":"","sortable":false,"openFilter":false,"type":"text","tagMap":[{"active":"true","value":"","text":"","type":"text"}],"iconMap":[{"active":"true","value":"","text":""}],"filterMap":[{"active":"true","text":"","value":""}]},{"active":true,"prop":"columns5","label":"异常原因","fixed":"","width":"","sortable":false,"openFilter":false,"type":"text","tagMap":[{"active":"true","value":"","text":"","type":"text"}],"iconMap":[{"active":"true","value":"","text":""}],"filterMap":[{"active":"true","text":"","value":""}]}],"selection":"","openIndex":false,"toolBar":false,"toolTitle":"","toolLocation":"right","toolWidth":"0","toolBtns":[{"active":"true","btnName":"详情","type":"text","handler":""}],"tHeight":"","tMaxHeight":"","tableData":"","expand":false,"expandMap":"","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-table","href":"v2-component-table","children":[],"events":{},"commonStyle":{"position":"absolute","top":"464px","left":"26px","width":"694px","height":"538px"},"id":1567604118671,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"","editable":false,"ctnClass":"","customClass":"s_m_panel","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"102rem","left":"24.0005px","width":"","height":"60rem"},"id":1567604281156,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"网点事件TOP100","editable":false,"ctnClass":"","customClass":"title2","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"105rem","left":"55px"},"id":1567604330585,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"height":"","width":"","line-height":"","font-family":"","font-weight":"","font-style":"","text-decoration":""}},"text":"按交易量","editable":false,"ctnClass":"","customClass":"filter_text","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"406px","left":"592px","padding-right":"","right":"6%","width":"80px"},"id":1567604416769,"pid":"root","animate":["","animated"]},{"configs":"${top10}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"1115px","left":"46px","width":"669px","height":"487px"},"id":1567604529177,"pid":"root","animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        top10:{

    color: ['#136DFF'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['滴水湖支行','华夏路支行','春申路支行','浦江高科技园','七宝支行','松江支行','松江新区支行','九亭支行','淮海中路支行','大华支行']
    },
    series: [
        {
            name: '事件',
            type: 'bar',
            data: [19,18,17,16,14,14,14,13,10,9]
        },
    ]
}
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentS_m_device,v2ComponentS_m_header},
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.top10, dataStr:"top10", wid:1567604529177, modelKey:"configs" });/**bind over**/
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