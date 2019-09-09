<template><v2-ctn-xy :wid="`root`"><v2-component-s_m_header class="V2Widget" :style="`position:absolute;top:0;width:100%;height:2.6rem;animation-duration:1s;`" id="1567579232921" :wid="`1567579232921`" :index="0" :pid="`root`"></v2-component-s_m_header><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567579249972" :wid="`1567579249972`" :index="1" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1567579341997" :wid="`1567579341997`" :index="2" :pid="`root`"></v2-component-image><v2-component-image class="V2Widget" id="1567579362537" :wid="`1567579362537`" :index="3" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`title1`]" id="1567579350315" :wid="`1567579350315`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title1`]" id="1567579601577" :wid="`1567579601577`" :index="5" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`value1`]" id="1567579724098" :wid="`1567579724098`" :index="6" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`value1`]" id="1567579819132" :wid="`1567579819132`" :index="7" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567580166167" :wid="`1567580166167`" :index="8" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title2`]" id="1567580225690" :wid="`1567580225690`" :index="9" :pid="`root`"></v2-component-text><v2-component-echart class="V2Widget" id="1567580258936" :wid="`1567580258936`" :index="10" :pid="`root`"></v2-component-echart><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567580561765" :wid="`1567580561765`" :index="11" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`]" id="1567580577032" :wid="`1567580577032`" :index="12" :pid="`root`"></v2-component-text><v2-component-title_text class="V2Widget" :style="`position:absolute;top:8.5rem;left:4%;width:30%;height:1.3rem;animation-duration:1s;`" id="1567580762574" :wid="`1567580762574`" :index="13" :pid="`root`" :title="`当前排队人数`" :test="213" :value="queueInfo.count" :unit="`人`"></v2-component-title_text><v2-component-title_text class="V2Widget" :style="`position:absolute;top:8.5rem;left:34%;width:30%;height:1.3rem;animation-duration:1s;`" id="1567580827875" :wid="`1567580827875`" :index="14" :pid="`root`" :title="`已处理客户`" :test="213" :value="queueInfo.handled" :unit="`人`"></v2-component-title_text><v2-component-title_text class="V2Widget" :style="`position:absolute;top:8.5rem;left:64%;width:30%;height:1.3rem;animation-duration:1s;`" id="1567580888595" :wid="`1567580888595`" :index="15" :pid="`root`" :title="`等待最长耗时`" :test="213" :value="queueInfo.most_wait" :unit="`分钟`"></v2-component-title_text><v2-component-title_text class="V2Widget" :style="`position:absolute;top:9.8rem;left:4%;width:30%;height:1.3rem;animation-duration:1s;`" id="1567580822073" :wid="`1567580822073`" :index="16" :pid="`root`" :title="`平均等待耗时`" :test="213" :value="queueInfo.aveage_wait" :unit="`分钟`"></v2-component-title_text><v2-component-title_text class="V2Widget" :style="`position:absolute;top:9.8rem;left:34%;width:30%;height:1.3rem;animation-duration:1s;`" id="1567580864448" :wid="`1567580864448`" :index="17" :pid="`root`" :title="`上月等待耗时`" :test="213" :value="queueInfo.last_mon_aveage_wait" :unit="`分钟`"></v2-component-title_text><v2-component-title_text class="V2Widget" :style="`position:absolute;top:9.8rem;left:64%;width:30%;height:1.3rem;animation-duration:1s;`" id="1567580885694" :wid="`1567580885694`" :index="18" :pid="`root`" :title="`当前弃号率`" :test="213" :value="queueInfo.lost_rare" :unit="`%`"></v2-component-title_text><v2-component-text class="V2Widget" :class="[`hline`]" id="1567580998595" :wid="`1567580998595`" :index="19" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vline`]" id="1567581186926" :wid="`1567581186926`" :index="20" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vline`]" id="1567581305073" :wid="`1567581305073`" :index="21" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`]" id="1567581377094" :wid="`1567581377094`" :index="22" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567582042617" :wid="`1567582042617`" :index="23" :pid="`root`"></v2-component-text><v2-component-s_m_device class="V2Widget" :style="`position:absolute;top:12.46rem;left:0.2rem;width:2rem;height:1rem;animation-duration:1s;`" id="1567582328457" :wid="`1567582328457`" :index="24" :pid="`root`" :img="`img/device1.png`" :test="213" :title="`完好率`" :value="intactRare"></v2-component-s_m_device><v2-component-s_m_device class="V2Widget" :style="`position:absolute;top:12.46rem;width:2rem;height:1rem;animation-duration:1s;right:0.2rem;`" id="1567582340860" :wid="`1567582340860`" :index="25" :pid="`root`" :img="`img/device2.png`" :test="213" :title="`开机率`" :value="openRare"></v2-component-s_m_device><v2-component-text class="V2Widget" :class="[`vline`]" id="1567582274935" :wid="`1567582274935`" :index="26" :pid="`root`"></v2-component-text><v2-component-s_m_device_panel class="V2Widget" :style="`position:absolute;top:14.4rem;left:-;width:100%;height:1.3rem;animation-duration:1s;`" id="1567584956233" :wid="`1567584956233`" :index="27" :pid="`root`" :BannerClass="['s_m_panel','s_m_gradient1']" :test="213" :img="`img/s_m_dev2.png`" :name="`CDS`" :number="cdsData.number" :intact_number="cdsData.intact_number" :intact_rare="cdsData.intact_rare" :open_number="cdsData.open_number" :open_rare="cdsData.open_rare"></v2-component-s_m_device_panel><v2-component-s_m_device_panel class="V2Widget" :style="`position:absolute;top:16rem;width:100%;height:1.3rem;animation-duration:1s;`" id="1567585497436" :wid="`1567585497436`" :index="28" :pid="`root`" :BannerClass="['s_m_panel','s_m_gradient2']" :test="213" :img="`img/s_m_dev1.png`" :name="`ATM`" :number="atmData.number" :intact_number="atmData.intact_number" :intact_rare="atmData.intact_rare" :open_number="atmData.open_number" :open_rare="atmData.open_rare"></v2-component-s_m_device_panel><v2-component-s_m_device_panel class="V2Widget" :style="`position:absolute;top:17.5rem;width:100%;animation-duration:1s;height:1.3rem;`" id="1567585741167" :wid="`1567585741167`" :index="29" :pid="`root`" :BannerClass="['s_m_panel','s_m_gradient3']" :test="213" :img="`img/s_m_dev3.png`" :name="`ITM`" :number="itmData.number" :intact_number="itmData.intact_number" :intact_rare="itmData.intact_rare" :open_number="itmData.open_number" :open_rare="itmData.open_rare"></v2-component-s_m_device_panel><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567585873099" :wid="`1567585873099`" :index="30" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title2`]" id="1567585929565" :wid="`1567585929565`" :index="31" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title1`]" id="1567585915070" :wid="`1567585915070`" :index="32" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title1`]" id="1567586000000" :wid="`1567586000000`" :index="33" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title1`]" id="1567586531698" :wid="`1567586531698`" :index="34" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title1`]" id="1567586933303" :wid="`1567586933303`" :index="35" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title1`]" id="1567586961135" :wid="`1567586961135`" :index="36" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1567587061549" :wid="`1567587061549`" :index="37" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`title3`]" id="1567587188233" :wid="`1567587188233`" :index="38" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`]" id="1567587227960" :wid="`1567587227960`" :index="39" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`]" id="1567587194004" :wid="`1567587194004`" :index="40" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`]" id="1567587200665" :wid="`1567587200665`" :index="41" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`]" id="1567587267235" :wid="`1567587267235`" :index="42" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`]" id="1567587222103" :wid="`1567587222103`" :index="43" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`,`grow`,`alignRight`]" id="1567587289715" :wid="`1567587289715`" :index="44" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`,`reduce`,`alignRight`]" id="1567587261774" :wid="`1567587261774`" :index="45" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title3`,`grow`,`alignRight`]" id="1567587245055" :wid="`1567587245055`" :index="46" :pid="`root`"></v2-component-text></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentS_m_device_panel from '@/views/_customWidget/s_m_device_panel.vue';import v2ComponentS_m_device from '@/views/_customWidget/s_m_device.vue';import v2ComponentTitle_text from '@/views/_customWidget/title_text.vue';import v2ComponentS_m_header from '@/views/_customWidget/s_m_header.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"__capacity":"1","component":"v2-component-s_m_header","href":"v2-component-s_m_header","cptpath":"\\src\\views\\_customWidget\\s_m_header.vue","events":{},"commonStyle":{"position":"absolute","top":"0","width":"100%","height":"2.6rem","animation-duration":"1s"},"id":1567579232921,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"2rem","height":"1.2rem","animation-duration":"1s"},"id":1567579249972,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"2.4rem","right":"2rem","width":"0.4rem","height":"0.4rem","animation-duration":"1s"},"events":{},"href":"v2-component-image","src":"img/形状 9.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567579341997,"pid":"root","animate":["","animated"]},{"src":"img/形状 8.png","__capacity":"1","component":"v2-component-image","href":"v2-component-image","events":{},"commonStyle":{"position":"absolute","top":"2.4rem","left":"0.2rem","width":"0.4rem","height":"0.4rem","animation-duration":"1s"},"id":1567579362537,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"今日开户数","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"2.49rem","left":"0.6rem","width":"1rem","font-size":"0.2rem","animation-duration":"1s"},"id":1567579350315,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"今日销户数","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"2.49rem","right":"0.9rem","animation-duration":"1s","width":"1rem","font-size":"0.2rem"},"id":1567579601577,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${todayAccOpened}","customClass":"value1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"2.49rem","left":"1.68rem","font-size":"0.2rem","animation-duration":"1s"},"id":1567579724098,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${todayAccCancel}","customClass":"value1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"2.49rem","right":"0.4rem","font-size":"0.2rem","animation-duration":"1s"},"id":1567579819132,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"3.45rem","height":"4rem","animation-duration":"1s"},"id":1567580166167,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"近6日开户数趋势","customClass":"title2","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"3.71rem","left":"0.5rem","animation-duration":"1s"},"id":1567580225690,"pid":"root","animate":["","animated"]},{"configs":"${day6chart}","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","events":{},"commonStyle":{"position":"absolute","top":"4rem","left":"3%","width":"90%","height":"3.4rem","right":"3%","animation-duration":"1s"},"id":1567580258936,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"8.2rem","height":"3.2rem","animation-duration":"1s"},"id":1567580561765,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"font-weight":"800"}},"text":"客户等待信息","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"7.7rem","width":"100%","animation-duration":"1s","font-size":"0.2rem"},"id":1567580577032,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"当前排队人数","value":"queueInfo.count","unit":"人"},"__capacity":"1","component":"v2-component-title_text","href":"v2-component-title_text","cptpath":"\\src\\views\\_customWidget\\title_text.vue","events":{},"commonStyle":{"position":"absolute","top":"8.5rem","left":"4%","width":"30%","height":"1.3rem","animation-duration":"1s"},"id":1567580762574,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"已处理客户","value":"queueInfo.handled","unit":"人"},"__capacity":"1","component":"v2-component-title_text","href":"v2-component-title_text","cptpath":"\\src\\views\\_customWidget\\title_text.vue","events":{},"commonStyle":{"position":"absolute","top":"8.5rem","left":"34%","width":"30%","height":"1.3rem","animation-duration":"1s"},"id":1567580827875,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"等待最长耗时","value":"queueInfo.most_wait","unit":"分钟"},"__capacity":"1","component":"v2-component-title_text","href":"v2-component-title_text","cptpath":"\\src\\views\\_customWidget\\title_text.vue","events":{},"commonStyle":{"position":"absolute","top":"8.5rem","left":"64%","width":"30%","height":"1.3rem","animation-duration":"1s"},"id":1567580888595,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"平均等待耗时","value":"queueInfo.aveage_wait","unit":"分钟"},"__capacity":"1","component":"v2-component-title_text","href":"v2-component-title_text","cptpath":"\\src\\views\\_customWidget\\title_text.vue","events":{},"commonStyle":{"position":"absolute","top":"9.8rem","left":"4%","width":"30%","height":"1.3rem","animation-duration":"1s"},"id":1567580822073,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"上月等待耗时","value":"queueInfo.last_mon_aveage_wait","unit":"分钟"},"__capacity":"1","component":"v2-component-title_text","href":"v2-component-title_text","cptpath":"\\src\\views\\_customWidget\\title_text.vue","events":{},"commonStyle":{"position":"absolute","top":"9.8rem","left":"34%","width":"30%","height":"1.3rem","animation-duration":"1s"},"id":1567580864448,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"当前弃号率","value":"queueInfo.lost_rare","unit":"%"},"__capacity":"1","component":"v2-component-title_text","href":"v2-component-title_text","cptpath":"\\src\\views\\_customWidget\\title_text.vue","events":{},"commonStyle":{"position":"absolute","top":"9.8rem","left":"64%","width":"30%","height":"1.3rem","animation-duration":"1s"},"id":1567580885694,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"hline","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"9.7rem","left":"7%","width":"86%","animation-duration":"1s"},"id":1567580998595,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"vline","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"8.25rem","left":"34%","height":"3rem","animation-duration":"1s"},"id":1567581186926,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"vline","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"8.25rem","left":"64%","height":"3rem","animation-duration":"1s"},"id":1567581305073,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"font-weight":"800"}},"text":"自助设备信息","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"11.65rem","left":"-","width":"100%","font-size":"0.2rem","animation-duration":"1s"},"id":1567581377094,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"12.2rem","height":"1.6rem","animation-duration":"1s"},"id":1567582042617,"pid":"root","animate":["","animated"]},{"dataBasket":{"img":"img/device1.png","title":"完好率","value":"intactRare"},"__capacity":"1","component":"v2-component-s_m_device","href":"v2-component-s_m_device","cptpath":"\\src\\views\\_customWidget\\s_m_device.vue","events":{},"commonStyle":{"position":"absolute","top":"12.46rem","left":"0.2rem","width":"2rem","height":"1rem","animation-duration":"1s"},"id":1567582328457,"pid":"root","animate":["","animated"]},{"dataBasket":{"img":"img/device2.png","title":"开机率","value":"openRare"},"__capacity":"1","component":"v2-component-s_m_device","href":"v2-component-s_m_device","cptpath":"\\src\\views\\_customWidget\\s_m_device.vue","events":{},"commonStyle":{"position":"absolute","top":"12.46rem","width":"2rem","height":"1rem","animation-duration":"1s","right":"0.2rem"},"id":1567582340860,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"vline","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"12.3rem","left":"50%","height":"1.4rem","animation-duration":"1s"},"id":1567582274935,"pid":"root","animate":["","animated"]},{"dataBasket":{"BannerClass":"['s_m_panel','s_m_gradient1']","img":"img/s_m_dev2.png","name":"CDS","number":"cdsData.number","intact_number":"cdsData.intact_number","intact_rare":"cdsData.intact_rare","open_number":"cdsData.open_number","open_rare":"cdsData.open_rare"},"__capacity":"1","component":"v2-component-s_m_device_panel","href":"v2-component-s_m_device_panel","cptpath":"\\src\\views\\_customWidget\\s_m_device_panel.vue","events":{},"commonStyle":{"position":"absolute","top":"14.4rem","left":"-","width":"100%","height":"1.3rem","animation-duration":"1s"},"id":1567584956233,"pid":"root","animate":["","animated"]},{"dataBasket":{"BannerClass":"['s_m_panel','s_m_gradient2']","img":"img/s_m_dev1.png","name":"ATM","number":"atmData.number","intact_number":"atmData.intact_number","intact_rare":"atmData.intact_rare","open_number":"atmData.open_number","open_rare":"atmData.open_rare"},"__capacity":"1","component":"v2-component-s_m_device_panel","href":"v2-component-s_m_device_panel","cptpath":"\\src\\views\\_customWidget\\s_m_device_panel.vue","events":{},"commonStyle":{"position":"absolute","top":"16rem","width":"100%","height":"1.3rem","animation-duration":"1s"},"id":1567585497436,"pid":"root","animate":["","animated"]},{"dataBasket":{"BannerClass":"['s_m_panel','s_m_gradient3']","img":"img/s_m_dev3.png","name":"ITM","number":"itmData.number","intact_number":"itmData.intact_number","intact_rare":"itmData.intact_rare","open_number":"itmData.open_number","open_rare":"itmData.open_rare"},"__capacity":"1","component":"v2-component-s_m_device_panel","href":"v2-component-s_m_device_panel","cptpath":"\\src\\views\\_customWidget\\s_m_device_panel.vue","events":{"_root":{},"mountpoint":{}},"commonStyle":{"position":"absolute","top":"17.5rem","width":"100%","animation-duration":"1s","height":"1.3rem"},"id":1567585741167,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"19rem","height":"3.3rem","animation-duration":"1s"},"id":1567585873099,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"设备交易占比","customClass":"title2","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"19.2rem","left":"7.2%","animation-duration":"1s"},"id":1567585929565,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"交易总量","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"19.2rem","right":"1.2rem","animation-duration":"1s"},"id":1567585915070,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${tradeTotal}","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"19.2rem","width":"1rem","right":"0.2rem","animation-duration":"1s"},"id":1567586000000,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"设备","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"20rem","left":"0.5rem","animation-duration":"1s"},"id":1567586531698,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"交易量","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"20rem","left":"23%","animation-duration":"1s"},"id":1567586933303,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"环比","customClass":"title1","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"20rem","left":"45%","animation-duration":"1s"},"id":1567586961135,"pid":"root","animate":["","animated"]},{"src":"img/3dPane.png","__capacity":"1","component":"v2-component-image","href":"v2-component-image","events":{},"commonStyle":{"position":"absolute","top":"20.5rem","width":"1.6rem","height":"1.6rem","right":"0.2rem","animation-duration":"1s"},"id":1567587061549,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"CDS","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"20.5rem","left":"7%","animation-duration":"1s"},"id":1567587188233,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"ATM","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"21rem","left":"7%","animation-duration":"1s"},"id":1567587227960,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"ITM","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"21.5rem","left":"7%","animation-duration":"1s"},"id":1567587194004,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${cdsTrade}","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"20.5rem","left":"23%","animation-duration":"1s"},"id":1567587200665,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${atmTrade}","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"21rem","left":"23%","animation-duration":"1s"},"id":1567587267235,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${itmTrade}","customClass":"title3","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"21.5rem","left":"23%","animation-duration":"1s"},"id":1567587222103,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${cdsChainRatio}","customClass":"title3,grow,alignRight","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"20.5rem","left":"45%","height":"28px","animation-duration":"1s"},"id":1567587289715,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${atmChainRatio}","customClass":"title3,reduce,alignRight","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"21rem","left":"45%","animation-duration":"1s"},"id":1567587261774,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"${itmChainRatio}","customClass":"title3,grow,alignRight","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"21.5rem","left":"45%","animation-duration":"1s"},"id":1567587245055,"pid":"root","animate":["","animated"]}],"ctnStyle":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"]}},
                        todayAccOpened:31234,
todayAccCancel:3988,
day6chart:{
    color: ['#5793f3', '#d14a61', '#675bba'],

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#5793f3'
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#d14a61'
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name:'2015 降水量',
            type:'line',
            xAxisIndex: 1,
            smooth: true,
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'2016 降水量',
            type:'line',
            smooth: true,
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
    ]
},
queueInfo:{
    count:1231,
    handled:5121,
    most_wait:31,
    aveage_wait:16,
    last_mon_aveage_wait:19,
    lost_rare:18.4,
},
openRare:`96%`,
intactRare:`84.5%`,
cdsData:{
    number:12750,
    intact_number:11738,
    intact_rare:'92.8%',
    open_number:11706,
    open_rare:'97.3%'
},
atmData:{
    number:8750,
    intact_number:7738,
    intact_rare:'92.8%',
    open_number:8706,
    open_rare:'97.3%'
},
itmData:{
    number:1750,
    intact_number:1738,
    intact_rare:'92.8%',
    open_number:1706,
    open_rare:'97.3%'
},
tradeTotal:`7234万`,
cdsTrade:`287.4万`,
atmTrade:`94.3万`,
itmTrade:`14.6万`,
cdsChainRatio:`8.2%`,
atmChainRatio:`12.8%`,
itmChainRatio:`3.7%`
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentS_m_device_panel,v2ComponentS_m_device,v2ComponentTitle_text,v2ComponentS_m_header},
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.todayAccOpened, dataStr:"todayAccOpened", wid:1567579724098, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.todayAccCancel, dataStr:"todayAccCancel", wid:1567579819132, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.day6chart, dataStr:"day6chart", wid:1567580258936, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.queueInfo.count, dataStr:"queueInfo.count", wid:1567580762574, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.queueInfo.handled, dataStr:"queueInfo.handled", wid:1567580827875, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.queueInfo.most_wait, dataStr:"queueInfo.most_wait", wid:1567580888595, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.queueInfo.aveage_wait, dataStr:"queueInfo.aveage_wait", wid:1567580822073, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.queueInfo.last_mon_aveage_wait, dataStr:"queueInfo.last_mon_aveage_wait", wid:1567580864448, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.queueInfo.lost_rare, dataStr:"queueInfo.lost_rare", wid:1567580885694, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.openRare, dataStr:"openRare", wid:1567582340860, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.intactRare, dataStr:"intactRare", wid:1567582328457, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cdsData.number, dataStr:"cdsData.number", wid:1567584956233, modelKey:"number" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cdsData.intact_number, dataStr:"cdsData.intact_number", wid:1567584956233, modelKey:"intact_number" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cdsData.open_number, dataStr:"cdsData.open_number", wid:1567584956233, modelKey:"open_number" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cdsData.open_rare, dataStr:"cdsData.open_rare", wid:1567584956233, modelKey:"open_rare" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cdsData.intact_rare, dataStr:"cdsData.intact_rare", wid:1567584956233, modelKey:"intact_rare" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.atmData.intact_number, dataStr:"atmData.intact_number", wid:1567585497436, modelKey:"intact_number" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.atmData.number, dataStr:"atmData.number", wid:1567585497436, modelKey:"number" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.atmData.open_number, dataStr:"atmData.open_number", wid:1567585497436, modelKey:"open_number" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.atmData.open_rare, dataStr:"atmData.open_rare", wid:1567585497436, modelKey:"open_rare" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.atmData.intact_rare, dataStr:"atmData.intact_rare", wid:1567585497436, modelKey:"intact_rare" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.itmData.number, dataStr:"itmData.number", wid:1567585741167, modelKey:"number" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.itmData.intact_number, dataStr:"itmData.intact_number", wid:1567585741167, modelKey:"intact_number" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.itmData.open_rare, dataStr:"itmData.open_rare", wid:1567585741167, modelKey:"open_rare" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.itmData.open_number, dataStr:"itmData.open_number", wid:1567585741167, modelKey:"open_number" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.itmData.intact_rare, dataStr:"itmData.intact_rare", wid:1567585741167, modelKey:"intact_rare" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.tradeTotal, dataStr:"tradeTotal", wid:1567586000000, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cdsTrade, dataStr:"cdsTrade", wid:1567587200665, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.atmTrade, dataStr:"atmTrade", wid:1567587267235, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.itmTrade, dataStr:"itmTrade", wid:1567587222103, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.cdsChainRatio, dataStr:"cdsChainRatio", wid:1567587289715, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.atmChainRatio, dataStr:"atmChainRatio", wid:1567587261774, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.itmChainRatio, dataStr:"itmChainRatio", wid:1567587245055, modelKey:"text" });/**bind over**/
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