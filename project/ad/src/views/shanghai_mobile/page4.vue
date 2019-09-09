<template><v2-ctn-xy :wid="`root`"><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567585873099" :wid="`1567585873099`" :index="0" :pid="`root`"></v2-component-text><v2-component-s_m_bg2 class="V2Widget" :style="`position:absolute;top:0;left:0;width:100%;height:4rem;animation-duration:1s;`" id="1567607187056" :wid="`1567607187056`" :index="1" :pid="`root`" :bankName="`浦东分行/杨高路支行`" :test="213"></v2-component-s_m_bg2><v2-component-s_m_trend class="V2Widget" :style="`position:absolute;top:4rem;width:100%;height:2rem;animation-duration:1s;`" id="1567608206492" :wid="`1567608206492`" :index="2" :pid="`root`" :title="`近6日开户趋势`" :test="213" :number="26" :trend="`3.7%`" :trendClass="['grow']" :title2="`今日开户数`" :trendOption="open6trendChart"></v2-component-s_m_trend><v2-component-s_m_trend class="V2Widget" :style="`position:absolute;top:6.25rem;height:2rem;animation-duration:1s;width:100%;`" id="1567608251701" :wid="`1567608251701`" :index="3" :pid="`root`" :title="`近6日销户趋势`" :test="213" :number="11" :trend="`1.7%`" :trendClass="['reduce']" :title2="`今日销户数`" :trendOption="cancel6trendChart"></v2-component-s_m_trend><v2-component-text class="V2Widget" :class="[`title3`]" id="1567609019455" :wid="`1567609019455`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567609039667" :wid="`1567609039667`" :index="5" :pid="`root`"></v2-component-text><v2-component-s_m_device class="V2Widget" :style="`position:absolute;top:8.95rem;left:0.4rem;width:2rem;height:1rem;transform:none;animation-duration:1s;`" id="1567609133451" :wid="`1567609133451`" :index="6" :pid="`root`" :img="`img/device1.png`" :test="213" :title="`完好率`" :value="intactRare"></v2-component-s_m_device><v2-component-text class="V2Widget" :class="[`vline`]" id="1567609095193" :wid="`1567609095193`" :index="7" :pid="`root`"></v2-component-text><v2-component-s_m_device class="V2Widget" :style="`position:absolute;top:8.95rem;width:2rem;height:1rem;right:0.4rem;animation-duration:1s;`" id="1567609081330" :wid="`1567609081330`" :index="8" :pid="`root`" :img="`img/device2.png`" :test="213" :title="`开机率`" :value="openRare"></v2-component-s_m_device><v2-component-s_navi_bar class="V2Widget" :style="`position:absolute;top:295px;left:157px;width:129px;height:50px;`" id="1567849476329" :wid="`1567849476329`" :index="9" :pid="`root`" :item_class="[`s_navi_item`,]" :test="213"></v2-component-s_navi_bar><v2-component-text class="V2Widget" id="1567849496179" :wid="`1567849496179`" :index="10" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567849676814" :wid="`1567849676814`" :index="11" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title2`]" id="1567849888369" :wid="`1567849888369`" :index="12" :pid="`root`"></v2-component-text><v2-component-s_m_device_panel_short class="V2Widget" :style="`position:absolute;top:10.55rem;left:0.1rem;width:30%;height:1.6rem;animation-duration:1s;`" id="1568034967716" :wid="`1568034967716`" :index="13" :pid="`root`" :BannerClass="`s_m_panel,s_m_gradient1`" :test="213" :img="`img/形状 3.png`" :name="`CDS`" :number="6" :intact_number="13" :intact_rare="`99%`" :open_number="11" :open_rare="`97%`"></v2-component-s_m_device_panel_short><v2-component-s_m_device_panel_short class="V2Widget" :style="`position:absolute;top:10.55rem;left:35%;width:30%;height:1.6rem;animation-duration:1s;`" id="1568034960135" :wid="`1568034960135`" :index="14" :pid="`root`" :BannerClass="[`s_m_panel`,`s_m_gradient2`,]" :test="213" :img="`img/s_m_dev1.png`" :name="`ATM`" :number="6" :intact_number="13" :intact_rare="`99%`" :open_number="11" :open_rare="`97%`"></v2-component-s_m_device_panel_short><v2-component-s_m_device_panel_short class="V2Widget" :style="`position:absolute;top:10.55rem;width:30%;height:1.6rem;animation-duration:1s;right:0.1rem;`" id="1568035006423" :wid="`1568035006423`" :index="15" :pid="`root`" :BannerClass="`s_m_panel,s_m_gradient3`" :test="213" :img="`img/s_m_dev3.png`" :name="`ITM`" :number="3" :intact_number="13" :intact_rare="`99%`" :open_number="11" :open_rare="`97%`"></v2-component-s_m_device_panel_short><v2-component-text class="V2Widget" :class="[`title2`]" id="1567585929565" :wid="`1567585929565`" :index="16" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title1`]" id="1567585915070" :wid="`1567585915070`" :index="17" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title1`]" id="1567586000000" :wid="`1567586000000`" :index="18" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title1`]" id="1567586531698" :wid="`1567586531698`" :index="19" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title1`]" id="1567586933303" :wid="`1567586933303`" :index="20" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title1`]" id="1567586961135" :wid="`1567586961135`" :index="21" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1567587061549" :wid="`1567587061549`" :index="22" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`title3`]" id="1567587188233" :wid="`1567587188233`" :index="23" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`]" id="1567587227960" :wid="`1567587227960`" :index="24" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`]" id="1567587194004" :wid="`1567587194004`" :index="25" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`]" id="1567587200665" :wid="`1567587200665`" :index="26" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`]" id="1567587267235" :wid="`1567587267235`" :index="27" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`]" id="1567587222103" :wid="`1567587222103`" :index="28" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`,`grow`,`alignRight`]" id="1567587289715" :wid="`1567587289715`" :index="29" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`,`reduce`,`alignRight`]" id="1567587261774" :wid="`1567587261774`" :index="30" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`,`grow`,`alignRight`]" id="1567587245055" :wid="`1567587245055`" :index="31" :pid="`root`"></v2-component-text><v2-component-table class="V2Widget" :class="[`s_m_table`]" id="1568042610981" :wid="`1568042610981`" :index="32" :pid="`root`"></v2-component-table><v2-component-text class="V2Widget" id="1568042890762" :wid="`1568042890762`" :index="33" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentS_m_device_panel_short from '@/views/_customWidget/s_m_device_panel_short.vue';import v2ComponentS_navi_bar from '@/views/_customWidget/s_navi_bar.vue';import v2ComponentS_m_device from '@/views/_customWidget/s_m_device.vue';import v2ComponentS_m_trend from '@/views/_customWidget/s_m_trend.vue';import v2ComponentS_m_bg2 from '@/views/_customWidget/s_m_bg2.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"12.35rem","height":"3rem","animation-duration":"1s"},"id":1567585873099,"pid":"root","animate":["","animated"]},{"dataBasket":{"bankName":"浦东分行/杨高路支行"},"__capacity":"1","component":"v2-component-s_m_bg2","href":"v2-component-s_m_bg2","cptpath":"\\src\\views\\_customWidget\\s_m_bg2.vue","events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","height":"4rem","animation-duration":"1s"},"id":1567607187056,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"近6日开户趋势","number":"26","trend":"3.7%","trendClass":"['grow']","title2":"今日开户数","trendOption":"open6trendChart"},"__capacity":"1","component":"v2-component-s_m_trend","href":"v2-component-s_m_trend","cptpath":"\\src\\views\\_customWidget\\s_m_trend.vue","events":{},"commonStyle":{"position":"absolute","top":"4rem","width":"100%","height":"2rem","animation-duration":"1s"},"id":1567608206492,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"近6日销户趋势","number":"11","trend":"1.7%","trendClass":"['reduce']","title2":"今日销户数","trendOption":"cancel6trendChart"},"__capacity":"1","component":"v2-component-s_m_trend","href":"v2-component-s_m_trend","cptpath":"\\src\\views\\_customWidget\\s_m_trend.vue","events":{},"commonStyle":{"position":"absolute","top":"6.25rem","height":"2rem","animation-duration":"1s","width":"100%"},"id":1567608251701,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"自助设备信息","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"9rem","width":"100%","animation-duration":"1s"},"id":1567609019455,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"8.75rem","height":"1.6rem","animation-duration":"1s"},"id":1567609039667,"pid":"root","animate":["","animated"]},{"dataBasket":{"img":"img/device1.png","title":"完好率","value":"intactRare"},"__capacity":"1","component":"v2-component-s_m_device","href":"v2-component-s_m_device","cptpath":"\\src\\views\\_customWidget\\s_m_device.vue","events":{},"commonStyle":{"position":"absolute","top":"8.95rem","left":"0.4rem","width":"2rem","height":"1rem","transform":"none","animation-duration":"1s"},"id":1567609133451,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"vline","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"8.85rem","left":"50%","height":"1.4rem","animation-duration":"1s"},"id":1567609095193,"pid":"root","animate":["","animated"]},{"dataBasket":{"img":"img/device2.png","title":"开机率","value":"openRare"},"__capacity":"1","component":"v2-component-s_m_device","href":"v2-component-s_m_device","cptpath":"\\src\\views\\_customWidget\\s_m_device.vue","events":{},"commonStyle":{"position":"absolute","top":"8.95rem","width":"2rem","height":"1rem","right":"0.4rem","animation-duration":"1s"},"id":1567609081330,"pid":"root","animate":["","animated"]},{"dataBasket":{"item_class":["s_navi_item"]},"__capacity":"1","component":"v2-component-s_navi_bar","href":"v2-component-s_navi_bar","cptpath":"\\src\\views\\_customWidget\\s_navi_bar.vue","events":{},"commonStyle":{"position":"absolute","top":"295px","left":"157px","width":"129px","height":"50px"},"id":1567849476329,"pid":"root"},{"style":{"textStyle":{}},"text":"自助设备信息","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"8.35rem","left":"calc(50% - 0.6rem)","width":"100%","font-size":"0.2rem","animation-duration":"1s"},"id":1567849496179,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"15.55rem","height":"5rem","animation-duration":"1s"},"id":1567849676814,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"自助设备异常信息","customClass":"title2","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"15.75rem","left":"27px","animation-duration":"1s","font-size":"0.28rem"},"id":1567849888369,"pid":"root","animate":["","animated"]},{"dataBasket":{"BannerClass":"s_m_panel,s_m_gradient1","img":"img/形状 3.png","name":"CDS","number":"6","intact_number":"13","intact_rare":"99%","open_number":"11","open_rare":"97%"},"__capacity":"1","component":"v2-component-s_m_device_panel_short","href":"v2-component-s_m_device_panel_short","cptpath":"\\src\\views\\_customWidget\\s_m_device_panel_short.vue","events":{},"commonStyle":{"position":"absolute","top":"10.55rem","left":"0.1rem","width":"30%","height":"1.6rem","animation-duration":"1s"},"id":1568034967716,"pid":"root","animate":["","animated"]},{"dataBasket":{"BannerClass":["s_m_panel","s_m_gradient2"],"img":"img/s_m_dev1.png","name":"ATM","number":"6","intact_number":"13","intact_rare":"99%","open_number":"11","open_rare":"97%"},"__capacity":"1","component":"v2-component-s_m_device_panel_short","href":"v2-component-s_m_device_panel_short","cptpath":"\\src\\views\\_customWidget\\s_m_device_panel_short.vue","events":{},"commonStyle":{"position":"absolute","top":"10.55rem","left":"35%","width":"30%","height":"1.6rem","animation-duration":"1s"},"id":1568034960135,"pid":"root","animate":["","animated"]},{"dataBasket":{"BannerClass":"s_m_panel,s_m_gradient3","img":"img/s_m_dev3.png","name":"ITM","number":"3","intact_number":"13","intact_rare":"99%","open_number":"11","open_rare":"97%"},"__capacity":"1","component":"v2-component-s_m_device_panel_short","href":"v2-component-s_m_device_panel_short","cptpath":"\\src\\views\\_customWidget\\s_m_device_panel_short.vue","events":{},"commonStyle":{"position":"absolute","top":"10.55rem","width":"30%","height":"1.6rem","animation-duration":"1s","right":"0.1rem"},"id":1568035006423,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"设备交易占比","customClass":"title2","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"12.55rem","left":"7.2%","animation-duration":"1s"},"id":1567585929565,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"交易总量","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"12.55rem","right":"1.2rem","animation-duration":"1s"},"id":1567585915070,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${tradeTotal}","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"12.55rem","width":"1rem","right":"0.2rem","animation-duration":"1s"},"id":1567586000000,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"设备","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"13rem","left":"0.5rem","animation-duration":"1s"},"id":1567586531698,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"交易量","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"13rem","left":"23%","animation-duration":"1s"},"id":1567586933303,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"环比","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"13rem","left":"45%","animation-duration":"1s"},"id":1567586961135,"pid":"root","animate":["","animated"]},{"src":"img/3dPane.png","__capacity":"1","component":"v2-component-image","href":"v2-component-image","events":{},"commonStyle":{"position":"absolute","top":"13rem","width":"1.6rem","height":"1.6rem","right":"0.2rem","animation-duration":"1s"},"id":1567587061549,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"CDS","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"13.5rem","left":"7%","animation-duration":"1s"},"id":1567587188233,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"ATM","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14rem","left":"7%","animation-duration":"1s"},"id":1567587227960,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"ITM","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14.5rem","left":"7%","animation-duration":"1s"},"id":1567587194004,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${cdsTrade}","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"13.5rem","left":"23%","animation-duration":"1s"},"id":1567587200665,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${atmTrade}","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14rem","left":"23%","animation-duration":"1s"},"id":1567587267235,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${itmTrade}","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14.5rem","left":"23%","animation-duration":"1s"},"id":1567587222103,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${cdsChainRatio}","customClass":"title3,grow,alignRight","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"13.5rem","left":"45%","height":"28px","animation-duration":"1s"},"id":1567587289715,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${atmChainRatio}","customClass":"title3,reduce,alignRight","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14rem","left":"45%","animation-duration":"1s"},"id":1567587261774,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${itmChainRatio}","customClass":"title3,grow,alignRight","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"14.5rem","left":"45%","animation-duration":"1s"},"id":1567587245055,"pid":"root","animate":["","animated"]},{"theme":{"tableType":"border"},"columns":[{"active":true,"prop":"columns0","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"name","label":"机具编号","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d1","label":"机具类型","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d2","label":"业务量","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d3","label":"上月业务量","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d4","label":"异常原因","type":"text","combi":[{"active":"true"}],"tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]}],"toolTitle":"操作列","toolLocation":"right","toolWidth":"100","customClass":"s_m_table","__capacity":"1","component":"v2-component-table","href":"v2-component-table","events":{},"commonStyle":{"position":"absolute","top":"16.2rem","left":"6%","right":"6%","height":"4.2rem","animation-duration":"1s"},"id":1568042610981,"pid":"root","animate":["","animated"],"tableData":"${tableData}"},{"style":{"textStyle":{}},"text":"按交易量最高","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"15.75rem","left":"315px","font-size":"0.2rem","color":"#3280FF","animation-duration":"1s"},"id":1568042890762,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{},{},{},{},{},null,{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"]}},
                        open6trendChart:{

     tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        show:false
    },
    xAxis : [
        {
           show:false,
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
              show:false,
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {
                color:'rgba(82,213,176,0.2)'
            },
            itemStyle: {
                color: '#52D5B0'
            },
            data:[120, 132, 101, 134, 90, 230, 210]
        }
    ]
},
cancel6trendChart:{
     grid:{
         show:false
     },
     tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[120, 132, 101, 134, 90, 230, 210]
        }
    ]
},
intactRare:`96.9%`,
openRare:`99%`,
draverList:[,,],
tradeTotal:`7234万`,
cdsTrade:`287.4万`,
atmTrade:`94.3万`,
itmTrade:`14.6万`,
cdsChainRatio:`8.2%`,
atmChainRatio:`12.8%`,
itmChainRatio:`3.7%`,
tableData:[{
    name:'SH0028',
    d1:'ATM',
    d2:122,
    d3:23,
    d4:'业务超量'
},{
    name:'SH0028',
    d1:'ATM',
    d2:122,
    d3:23,
    d4:'业务超量'
},{
    name:'SH0028',
    d1:'ATM',
    d2:122,
    d3:23,
    d4:'业务超量'
},{
    name:'SH0028',
    d1:'ATM',
    d2:122,
    d3:23,
    d4:'业务超量'
},{
    name:'SH0028',
    d1:'ATM',
    d2:122,
    d3:23,
    d4:'业务超量'
},{
    name:'SH0028',
    d1:'ATM',
    d2:122,
    d3:23,
    d4:'业务超量'
}]
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentS_m_device_panel_short,v2ComponentS_navi_bar,v2ComponentS_m_device,v2ComponentS_m_trend,v2ComponentS_m_bg2},
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
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.open6trendChart, dataStr:"open6trendChart", wid:1567608206492, modelKey:"trendOption" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.open6trendChart, dataStr:"open6trendChart", wid:1567608251701, modelKey:"trendOption" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeTotal, dataStr:"tradeTotal", wid:1567586000000, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cdsTrade, dataStr:"cdsTrade", wid:1567587200665, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.atmTrade, dataStr:"atmTrade", wid:1567587267235, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.itmTrade, dataStr:"itmTrade", wid:1567587222103, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cdsChainRatio, dataStr:"cdsChainRatio", wid:1567587289715, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.atmChainRatio, dataStr:"atmChainRatio", wid:1567587261774, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.itmChainRatio, dataStr:"itmChainRatio", wid:1567587245055, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tableData, dataStr:"tableData", wid:1568042610981, modelKey:"tableData" });/**bind over**/

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