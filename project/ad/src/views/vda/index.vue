<template><v2-ctn-xy :wid="`root`"><v2-component-image class="V2Widget" id="1566293221411" :wid="`1566293221411`" :index="0" :pid="`root`"></v2-component-image><v2-component-echart class="V2Widget" id="1566280788498" :wid="`1566280788498`" :index="1" :pid="`root`"></v2-component-echart><v2-component-vdafolder class="V2Widget" :style="`position:absolute;top:274px;right:;left:34.0003px;bottom:;width:321px;height:229px;padding-top:;padding-bottom:;padding-left:;padding-right:;margin-top:;margin-bottom:;margin-left:;margin-right:;font-size:;color:;animation-duration:1s;animation-delay:;`" id="1566290476467" :wid="`1566290476467`" :index="2" :pid="`root`" :title="`响应耗时`" :persent="&quot;'41'&quot;" :currentValue="`223ms`" :commonValue="`261ms`" :icon="'el-icon-arrow-down'" :textClass="['vda-f-text']" :valueClass="['valueDown']" :value="`24.3%`"></v2-component-vdafolder><v2-component-vdafolder class="V2Widget" :style="`position:absolute;top:274px;right:;left:387px;bottom:;width:321px;height:229px;padding-top:;padding-bottom:;padding-left:;padding-right:;margin-top:;margin-bottom:;margin-left:;margin-right:;font-size:;color:;animation-duration:1s;animation-delay:;`" id="1566290436910" :wid="`1566290436910`" :index="3" :pid="`root`" :title="`交易响应率`" :persent="'50%'" :currentValue="`98.5%`" :commonValue="`97.2%`" :icon="'el-icon-arrow-down'" :textClass="['vda-f-text']" :valueClass="['valueUp']" :value="`11.7%`"></v2-component-vdafolder><v2-component-vdafolder class="V2Widget" :style="`position:absolute;top:274px;right:;left:738px;bottom:;width:321px;height:229px;padding-top:;padding-bottom:;padding-left:;padding-right:;margin-top:;margin-bottom:;margin-left:;margin-right:;font-size:;color:;animation-duration:1s;animation-delay:;`" id="1566291445269" :wid="`1566291445269`" :index="4" :pid="`root`" :title="`交易成功率`" :persent="'50%'" :currentValue="`100%`" :commonValue="`100%`" :icon="'el-icon-arrow-down'" :textClass="['vda-f-text']" :valueClass="['valueNormal']" :value="`0%`"></v2-component-vdafolder><v2-component-text class="V2Widget" :class="[`vda-f-text`,`payTitle`]" id="1566291506685" :wid="`1566291506685`" :index="5" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-f-text`,`payTitle`]" id="1566292304284" :wid="`1566292304284`" :index="6" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-f-text`,`payTitle`]" id="1566292220752" :wid="`1566292220752`" :index="7" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-f-text`]" id="1566292479968" :wid="`1566292479968`" :index="8" :pid="`root`"></v2-component-text><v2-component-trademeasure class="V2Widget" :style="`position:absolute;top:995px;left:34px;width:1025px;height:150px;`" id="1566295108291" :wid="`1566295108291`" :index="9" :pid="`root`" :imgUrl="'img/alipay.png'" :title="`支付宝`" :respTime="`384ms`" :succRare="`100%`" :config="alipayConfig"></v2-component-trademeasure><v2-component-trademeasure class="V2Widget" :style="`position:absolute;top:1171px;left:34px;width:1025px;height:150px;`" id="1566295483980" :wid="`1566295483980`" :index="10" :pid="`root`" :imgUrl="'img/alipay.png'" :title="`财付通`" :respTime="`384ms`" :succRare="'100%'" :config="alipayConfig"></v2-component-trademeasure><v2-component-milestone class="V2Widget" :style="`position:absolute;top:1188px;left:1059px;width:150px;height:85px;`" id="1566298220485" :wid="`1566298220485`" :index="11" :pid="`root`" :title="`1千万笔`" :time="`1:57`"></v2-component-milestone><v2-component-milestone class="V2Widget" :style="`position:absolute;top:995px;left:1123px;width:150px;height:85px;`" id="1566298820313" :wid="`1566298820313`" :index="12" :pid="`root`" :title="`5千万笔`" :time="`20:53`"></v2-component-milestone><v2-component-milestone class="V2Widget" :style="`position:absolute;top:837px;left:1224px;width:150px;height:85px;`" id="1566298802279" :wid="`1566298802279`" :index="13" :pid="`root`" :title="`1亿笔`" :time="`20:53`"></v2-component-milestone><v2-component-milestone class="V2Widget" :style="`position:absolute;top:702px;left:1361px;width:150px;height:85px;`" id="1566298778290" :wid="`1566298778290`" :index="14" :pid="`root`" :title="`2亿笔`" :time="`未开始`"></v2-component-milestone><v2-component-milestone class="V2Widget" :style="`position:absolute;top:617px;left:1522px;width:150px;height:85px;`" id="1566298838576" :wid="`1566298838576`" :index="15" :pid="`root`" :title="`5亿笔`" :time="`未开始`"></v2-component-milestone><v2-component-milestone_r class="V2Widget" :style="`position:absolute;top:617px;left:2199px;width:150px;height:85px;`" id="1566299186836" :wid="`1566299186836`" :index="16" :pid="`root`" :title="`100亿`" :time="`未开始`"></v2-component-milestone_r><v2-component-milestone_r class="V2Widget" :style="`position:absolute;top:702px;left:2351px;width:150px;height:85px;`" id="1566299237199" :wid="`1566299237199`" :index="17" :pid="`root`" :title="`50亿元`" :time="`未开始`"></v2-component-milestone_r><v2-component-milestone_r class="V2Widget" :style="`position:absolute;top:837px;left:2501px;width:150px;height:85px;`" id="1566299258681" :wid="`1566299258681`" :index="18" :pid="`root`" :title="`200亿元`" :time="'未开始'"></v2-component-milestone_r><v2-component-milestone_r class="V2Widget" :style="`position:absolute;top:995px;left:2606px;width:150px;height:85px;`" id="1566299222993" :wid="`1566299222993`" :index="19" :pid="`root`" :title="`10亿元`" :time="`3:53`"></v2-component-milestone_r><v2-component-milestone_r class="V2Widget" :style="`position:absolute;top:1188px;left:2655px;width:150px;height:85px;`" id="1566299277580" :wid="`1566299277580`" :index="20" :pid="`root`" :title="`1亿元`" :time="`1:27`"></v2-component-milestone_r><v2-component-text class="V2Widget" :class="[`vda-f-text`]" id="1566299518295" :wid="`1566299518295`" :index="21" :pid="`root`"></v2-component-text><v2-component-province class="V2Widget" :style="`position:absolute;top:866.013px;left:1719px;width:240px;height:230px;`" id="1566301683786" :wid="`1566301683786`" :index="22" :pid="`root`" :detail="0" :name="`8.四川`"></v2-component-province><v2-component-province class="V2Widget" :style="`position:absolute;top:677px;left:1504px;width:240px;height:230px;`" id="1566301987895" :wid="`1566301987895`" :index="23" :pid="`root`" :detail="0" :name="`27.新建`"></v2-component-province><v2-component-province class="V2Widget" :style="`position:absolute;top:577.008px;left:2024.01px;width:240px;height:230px;`" id="1566301964246" :wid="`1566301964246`" :index="24" :pid="`root`" :detail="0" :name="`16.黑龙江`"></v2-component-province><v2-component-province class="V2Widget" :style="`position:absolute;top:716.003px;left:1767.01px;width:240px;height:230px;`" id="1566301952255" :wid="`1566301952255`" :index="25" :pid="`root`" :detail="0" :name="`28.宁夏`"></v2-component-province><v2-component-province class="V2Widget" :style="`position:absolute;top:854px;left:1446px;width:240px;height:230px;`" id="1566301997070" :wid="`1566301997070`" :index="26" :pid="`root`" :detail="0" :name="`31.西藏`"></v2-component-province><v2-component-paychannel class="V2Widget" :style="`position:absolute;top:274px;left:2797px;width:320px;height:234px;`" id="1566302680808" :wid="`1566302680808`" :index="27" :pid="`root`" :title="`信用卡`" :delay="`245ms`" :config="paymentData"></v2-component-paychannel><v2-component-paychannel class="V2Widget" :style="`position:absolute;top:274px;left:3141px;width:320px;height:234px;`" id="1566302733625" :wid="`1566302733625`" :index="28" :pid="`root`" :title="`借记卡`" :delay="`109ms`" :config="paymentData2"></v2-component-paychannel><v2-component-paychannel class="V2Widget" :style="`position:absolute;top:274px;left:3476px;width:320px;height:234px;`" id="1566302680432" :wid="`1566302680432`" :index="29" :pid="`root`" :title="`合作行`" :delay="`497ms`" :config="paymentData3"></v2-component-paychannel><v2-component-text class="V2Widget" :class="[`vda-f-text`]" id="1566302916870" :wid="`1566302916870`" :index="30" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1566354434834" :wid="`1566354434834`" :index="31" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`vda-f-text`]" id="1566366397043" :wid="`1566366397043`" :index="32" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-f-text`]" id="1566366510994" :wid="`1566366510994`" :index="33" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-f-text`]" id="1566366613695" :wid="`1566366613695`" :index="34" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-f-text`]" id="1566366597799" :wid="`1566366597799`" :index="35" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-f-text`]" id="1566366651940" :wid="`1566366651940`" :index="36" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-value`]" id="1566366707945" :wid="`1566366707945`" :index="37" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-value`]" id="1566366662364" :wid="`1566366662364`" :index="38" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vda-value`]" id="1566366740690" :wid="`1566366740690`" :index="39" :pid="`root`"></v2-component-text><v2-component-channelmeasure class="V2Widget" :style="`position:absolute;top:675px;left:2805px;width:325px;height:75px;`" id="1566367068946" :wid="`1566367068946`" :index="40" :pid="`root`" :title="`信用卡`" :value="&quot;123,13,4,123&quot;"></v2-component-channelmeasure><v2-component-channelmeasure class="V2Widget" :style="`position:absolute;top:675px;left:3140.02px;width:325px;height:75px;`" id="1566367064034" :wid="`1566367064034`" :index="41" :pid="`root`" :title="`借记卡`" :value="&quot;123,13,4,123&quot;"></v2-component-channelmeasure><v2-component-channelmeasure class="V2Widget" :style="`position:absolute;top:676px;left:3481px;width:325px;height:75px;`" id="1566367061711" :wid="`1566367061711`" :index="42" :pid="`root`" :title="`合作行`" :value="&quot;123,13,4,123&quot;"></v2-component-channelmeasure><v2-component-echart class="V2Widget" id="1566367167708" :wid="`1566367167708`" :index="43" :pid="`root`"></v2-component-echart><v2-component-sysstatus class="V2Widget" :style="`position:absolute;top:1106px;left:2800.02px;width:1000px;height:200px;`" id="1566367344710" :wid="`1566367344710`" :index="44" :pid="`root`" :measure="`21,057笔/分钟`" :rare="`98.6%`" :delay="`247ms`" :echartConfig="payChartConfig"></v2-component-sysstatus><v2-component-text class="V2Widget" :class="[`vda-f-text`]" id="1566367439049" :wid="`1566367439049`" :index="45" :pid="`root`"></v2-component-text><v2-component-digitroll class="V2Widget" id="1566367504655" :wid="`1566367504655`" :index="46" :pid="`root`"></v2-component-digitroll><v2-component-province class="V2Widget" :style="`position:absolute;top:992.004px;left:1851.01px;width:240px;height:230px;`" id="1566885881160" :wid="`1566885881160`" :index="47" :pid="`root`" :detail="0" :name="`20.广西`"></v2-component-province></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentProvince from '@/views/_customWidget/province.vue';import v2ComponentSysstatus from '@/views/_customWidget/sysstatus.vue';import v2ComponentChannelmeasure from '@/views/_customWidget/channelMeasure.vue';import v2ComponentPaychannel from '@/views/_customWidget/payChannel.vue';import v2ComponentMilestone_r from '@/views/_customWidget/milestone_r.vue';import v2ComponentMilestone from '@/views/_customWidget/milestone.vue';import v2ComponentTrademeasure from '@/views/_customWidget/tradeMeasure.vue';import v2ComponentVdafolder from '@/views/_customWidget/vdafolder.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{},"src":"img/vda-background.png","height":"100%","width":"100%","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"6px","left":"4px","width":"3838px","height":"1428px"},"id":1566293221411,"pid":"root","animate":["","animated"],"fixation":true},{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"${chartConfig}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"532px","left":"34px","width":"1031px","height":"428px"},"id":1566280788498,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"响应耗时","persent":"'41'","currentValue":"223ms","commonValue":"261ms","icon":"'el-icon-arrow-down'","textClass":"['vda-f-text']","valueClass":"['valueDown']","value":"24.3%"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-vdafolder","href":"v2-component-vdafolder","cptpath":"\\src\\views\\_customWidget\\vdafolder.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"274px","right":"","left":"34.0003px","bottom":"","width":"321px","height":"229px","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"id":1566290476467,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"交易响应率","persent":"'50%'","currentValue":"98.5%","commonValue":"97.2%","icon":"'el-icon-arrow-down'","textClass":"['vda-f-text']","valueClass":"['valueUp']","value":"11.7%"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-vdafolder","href":"v2-component-vdafolder","cptpath":"\\src\\views\\_customWidget\\vdafolder.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"274px","right":"","left":"387px","bottom":"","width":"321px","height":"229px","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"id":1566290436910,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"交易成功率","persent":"'50%'","currentValue":"100%","commonValue":"100%","icon":"'el-icon-arrow-down'","textClass":"['vda-f-text']","valueClass":"['valueNormal']","value":"0%"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-vdafolder","href":"v2-component-vdafolder","cptpath":"\\src\\views\\_customWidget\\vdafolder.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"274px","right":"","left":"738px","bottom":"","width":"321px","height":"229px","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"id":1566291445269,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"支付宝","editable":false,"ctnClass":"","customClass":"vda-f-text,payTitle","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"187px","left":"34.0003px","width":156,"height":45},"id":1566291506685,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"财付通","editable":false,"ctnClass":"","customClass":"vda-f-text,payTitle","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"187px","left":"190px","width":156,"height":45},"id":1566292304284,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"京东","editable":false,"ctnClass":"","customClass":"vda-f-text,payTitle","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"187px","left":"346.004px","width":156,"height":45},"id":1566292220752,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${time}","editable":false,"ctnClass":"","customClass":"vda-f-text","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"51px","left":"45px","font-size":"40"},"id":1566292479968,"pid":"root","animate":["","animated"]},{"dataBasket":{"imgUrl":"'img/alipay.png'","title":"支付宝","respTime":"384ms","succRare":"100%","config":"alipayConfig"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-trademeasure","href":"v2-component-trademeasure","cptpath":"\\src\\views\\_customWidget\\tradeMeasure.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"995px","left":"34px","width":"1025px","height":"150px"},"id":1566295108291,"pid":"root","animate":["","animated"]},{"dataBasket":{"imgUrl":"'img/alipay.png'","title":"财付通","respTime":"384ms","succRare":"'100%'","config":"alipayConfig"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-trademeasure","href":"v2-component-trademeasure","cptpath":"\\src\\views\\_customWidget\\tradeMeasure.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"1171px","left":"34px","width":"1025px","height":"150px"},"id":1566295483980,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"1千万笔","time":"1:57"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-milestone","href":"v2-component-milestone","cptpath":"\\src\\views\\_customWidget\\milestone.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"1188px","left":"1059px","width":"150px","height":"85px"},"id":1566298220485,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"5千万笔","time":"20:53"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-milestone","href":"v2-component-milestone","cptpath":"\\src\\views\\_customWidget\\milestone.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"995px","left":"1123px","width":"150px","height":"85px"},"id":1566298820313,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"1亿笔","time":"20:53"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-milestone","href":"v2-component-milestone","cptpath":"\\src\\views\\_customWidget\\milestone.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"837px","left":"1224px","width":"150px","height":"85px"},"id":1566298802279,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"2亿笔","time":"未开始"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-milestone","href":"v2-component-milestone","cptpath":"\\src\\views\\_customWidget\\milestone.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"702px","left":"1361px","width":"150px","height":"85px"},"id":1566298778290,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"5亿笔","time":"未开始"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-milestone","href":"v2-component-milestone","cptpath":"\\src\\views\\_customWidget\\milestone.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"617px","left":"1522px","width":"150px","height":"85px"},"id":1566298838576,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"100亿","time":"未开始"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-milestone_r","href":"v2-component-milestone_r","cptpath":"\\src\\views\\_customWidget\\milestone_r.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"617px","left":"2199px","width":"150px","height":"85px"},"id":1566299186836,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"50亿元","time":"未开始"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-milestone_r","href":"v2-component-milestone_r","cptpath":"\\src\\views\\_customWidget\\milestone_r.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"702px","left":"2351px","width":"150px","height":"85px"},"id":1566299237199,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"200亿元","time":"'未开始'"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-milestone_r","href":"v2-component-milestone_r","cptpath":"\\src\\views\\_customWidget\\milestone_r.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"837px","left":"2501px","width":"150px","height":"85px"},"id":1566299258681,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"10亿元","time":"3:53"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-milestone_r","href":"v2-component-milestone_r","cptpath":"\\src\\views\\_customWidget\\milestone_r.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"995px","left":"2606px","width":"150px","height":"85px"},"id":1566299222993,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"1亿元","time":"1:27"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-milestone_r","href":"v2-component-milestone_r","cptpath":"\\src\\views\\_customWidget\\milestone_r.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"1188px","left":"2655px","width":"150px","height":"85px"},"id":1566299277580,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"支付渠道平均响应时间","editable":false,"ctnClass":"","customClass":"vda-f-text","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"187px","left":"2797px","font-size":"40"},"id":1566299518295,"pid":"root","animate":["","animated"]},{"dataBasket":{"detail":"0","name":"8.四川"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-province","href":"v2-component-province","cptpath":"\\src\\views\\_customWidget\\province.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"866.013px","left":"1719px","width":"240px","height":"230px"},"id":1566301683786,"pid":"root","animate":["","animated"]},{"dataBasket":{"detail":"0","name":"27.新建"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-province","href":"v2-component-province","cptpath":"\\src\\views\\_customWidget\\province.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"677px","left":"1504px","width":"240px","height":"230px"},"id":1566301987895,"pid":"root","animate":["","animated"]},{"dataBasket":{"detail":"0","name":"16.黑龙江"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-province","href":"v2-component-province","cptpath":"\\src\\views\\_customWidget\\province.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"577.008px","left":"2024.01px","width":"240px","height":"230px"},"id":1566301964246,"pid":"root","animate":["","animated"]},{"dataBasket":{"detail":"0","name":"28.宁夏"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-province","href":"v2-component-province","cptpath":"\\src\\views\\_customWidget\\province.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"716.003px","left":"1767.01px","width":"240px","height":"230px"},"id":1566301952255,"pid":"root","animate":["","animated"]},{"dataBasket":{"detail":"0","name":"31.西藏"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-province","href":"v2-component-province","cptpath":"\\src\\views\\_customWidget\\province.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"854px","left":"1446px","width":"240px","height":"230px"},"id":1566301997070,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"信用卡","delay":"245ms","config":"paymentData"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-paychannel","href":"v2-component-paychannel","cptpath":"\\src\\views\\_customWidget\\payChannel.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"274px","left":"2797px","width":"320px","height":"234px"},"id":1566302680808,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"借记卡","delay":"109ms","config":"paymentData2"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-paychannel","href":"v2-component-paychannel","cptpath":"\\src\\views\\_customWidget\\payChannel.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"274px","left":"3141px","width":"320px","height":"234px"},"id":1566302733625,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"合作行","delay":"497ms","config":"paymentData3"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-paychannel","href":"v2-component-paychannel","cptpath":"\\src\\views\\_customWidget\\payChannel.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"274px","left":"3476px","width":"320px","height":"234px"},"id":1566302680432,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"支付渠道交易量","editable":false,"ctnClass":"","customClass":"vda-f-text","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"577px","left":"2797px","font-size":"40"},"id":1566302916870,"pid":"root","animate":["","animated"]},{"style":{},"src":"img/kuang.png","v2Height":"214px","v2Width":"100%","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-image","href":"v2-component-image","children":[],"events":{},"commonStyle":{"position":"absolute","top":"264px","left":"1262px","width":1344,"height":184},"id":1566354434834,"pid":"root","animate":["","animated"],"height":"100%","width":"100%"},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"今日核心交易量","editable":false,"ctnClass":"","customClass":"vda-f-text","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"187.017px","left":"1294px","font-size":"40"},"id":1566366397043,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"全国交易量分布","editable":false,"ctnClass":"","customClass":"vda-f-text","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"532px","left":"1294px","font-size":"40"},"id":1566366510994,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"核心交易金额：","editable":false,"ctnClass":"","customClass":"vda-f-text","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"461.016px","left":"1262px","font-size":"30"},"id":1566366613695,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"去年同期：","editable":false,"ctnClass":"","customClass":"vda-f-text","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"461px","left":"1823.02px","font-size":"30"},"id":1566366597799,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"同比去年：","editable":false,"ctnClass":"","customClass":"vda-f-text","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"461px","left":"2331px","font-size":"30"},"id":1566366651940,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${coreTrade}","editable":false,"ctnClass":"","customClass":"vda-value","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"462px","left":"1469.01px","font-size":"30"},"id":1566366707945,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${lastYear}","editable":false,"ctnClass":"","customClass":"vda-value","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"461.017px","left":"1993.01px","font-size":"30"},"id":1566366662364,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"${lastYearRare}","editable":false,"ctnClass":"","customClass":"vda-value","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"461.017px","left":"2501.32px","font-size":"30"},"id":1566366740690,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"信用卡","value":"123,13,4,123"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-channelmeasure","href":"v2-component-channelmeasure","cptpath":"\\src\\views\\_customWidget\\channelMeasure.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"675px","left":"2805px","width":"325px","height":"75px"},"id":1566367068946,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"借记卡","value":"123,13,4,123"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-channelmeasure","href":"v2-component-channelmeasure","cptpath":"\\src\\views\\_customWidget\\channelMeasure.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"675px","left":"3140.02px","width":"325px","height":"75px"},"id":1566367064034,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"合作行","value":"123,13,4,123"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-channelmeasure","href":"v2-component-channelmeasure","cptpath":"\\src\\views\\_customWidget\\channelMeasure.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"676px","left":"3481px","width":"325px","height":"75px"},"id":1566367061711,"pid":"root","animate":["","animated"]},{"style":{"chartWarpStyle":{"background-color":"","margin":"","padding":"","height":"","width":""}},"configs":"${measureChart}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"commonStyle":{"position":"absolute","top":"788px","left":"2797px","width":"1005px","height":"204px"},"id":1566367167708,"pid":"root","animate":["","animated"]},{"dataBasket":{"measure":"21,057笔/分钟","rare":"98.6%","delay":"247ms","echartConfig":"payChartConfig"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-sysstatus","href":"v2-component-sysstatus","cptpath":"\\src\\views\\_customWidget\\sysstatus.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"1106px","left":"2800.02px","width":"1000px","height":"200px"},"id":1566367344710,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{"text-align":"","margin":"","padding":"","height":"","width":"","line-height":"","font-family":"","font-size":"","font-weight":"","font-style":"","color":"","text-decoration":""}},"text":"主要系统运行情况","editable":false,"ctnClass":"","customClass":"vda-f-text","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-text","href":"v2-component-text","children":[],"events":{},"commonStyle":{"position":"absolute","top":"1007px","left":"2801px","font-size":"40"},"id":1566367439049,"pid":"root","animate":["","animated"]},{"digits":"610304839","dWidth":"112px","dHeight":"160px","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-digitroll","href":"v2-component-digitroll","children":[],"events":{},"commonStyle":{"position":"absolute","top":"261px","left":"1356.02px","width":"1208px","height":"160px"},"id":1566367504655,"pid":"root","animate":["","animated"]},{"dataBasket":{"detail":"0","name":"20.广西"},"ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-province","href":"v2-component-province","cptpath":"\\src\\views\\_customWidget\\province.vue","children":[],"events":{},"commonStyle":{"position":"absolute","top":"992.004px","left":"1851.01px","width":"240px","height":"230px"},"id":1566885881160,"pid":"root","animate":["","animated"]}],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}},
                        chartConfig:{
    backgroundColor:'',
    grid: {
        x:25,
        y:50,
        x2:25,
        y2:50
    },
    title : {
        text: '核心实时交易量',
        textStyle: {
            fontSize:20,
            color:'rgb(217,147,58)'
        },
        subtext: '单位：万笔/分钟'
    },
    legend: {
      	x:'right',
      	y:'top',
        data:['2018峰值：12万笔/分钟','核心实时交易量：13万笔/分钟'],
      padding:10,
      textStyle:{
      	color:'rgb(217,147,58)'
    	}
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            axisLabel:{
            	textStyle:{
            		color:'rgb(217,147,58)'
            	}
          	},
            boundaryGap : false,
            data : ['12:00','12:02','12:04','12:06','12:08',
                    '12:10','12:12','12:14','12:16','12:18',
                    '12:20','12:22','12:24','12:26','12:28',
                    '12:30','12:32','12:34','12:36','12:38',
                    '12:40','12:42','12:44','12:46','12:48',
                    '12:50','12:52','12:54','12:56','12:58','13:00']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
            	textStyle:{
            		color:'rgb(217,147,58)'
            	}
          	},
            min:0,
            max:15
        }
    ],
    series : [
      		{
              name:'2018峰值：12万笔/分钟',
              type:'line',
              symbol:'none',
              data:[12,12,12,12,12,
                    12,12,12,12,12,
                    12,12,12,12,12,
                    12,12,12,12,12,
                    12,12,12,12,12,
                   12,12,12,12,12,12],
              itemStyle:{
                  normal: {
                    color: "red"
                    
                  },
              },
            },
          {
              name:'核心实时交易量：13万笔/分钟',
              type:'line',
              symbol:'none',
              data:[3.4,3.2,4.0,4.9,6.5,
                   5.9,6.5,7.0,6.8,8.6,9.6,
                   9.0,8.6,9.7,8.8,8.9,9.6,
                   9.3,10.6,11.7,11.8,10.9,12.6,
                   12.5,13.4,12.7,11.8,11.9,10.6,
                   10.5,9.6,9.7,8.8,7.9,7.6,8.7],
              itemStyle:{
                  normal: {
                    color: "#FFDEAD",
                  },
              },
              areaStyle: {
                normal: {
                    color: {
                        type: 'linear',//设置线性渐变
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0, color: 'rgba(255,240,220,0.8)' // 0% 处的颜色
                            }, 
                            {
                                offset: 1, color: 'rgba(0,0,0,0.8)' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                }
            },
          },
      ] 
},
bgClass:['bg'],
time:`2019年11月11日 23:54:19`,
alipayConfig:{
    grid:{
        left:'10%',
        right:0,
        top:10,
        bottom:20
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle:{
            normal: {
                color:'rgb(217,147,58)'
            },
        },
    }]
}
,
cftConfig:{},
paymentData:{
  backgroundColor:'',
  grid: {
    x:25,
    y:50,
    x2:25,
    y2:50
  },
    xAxis : [
        {
          	axisLabel:{
            	textStyle:{
            		color:'rgb(217,147,58)'
            	}
          	},
            type : 'category',
            data : ['12:30','12:31','12:32','12:33','12:34','12:35','12:36','12:37','12:38','12:39',
                  	'12:40','12:41','12:42','12:43','12:44','12:45','12:46','12:47','12:48','12:49',
                    '12:50','12:51','12:52','12:53','12:54','12:55','12:56','12:57','12:58','12:59','13:00']
        }
    ],
    yAxis : [
        {
           	show:false,
            type : 'value',
            min:0,
            max:350
        }
    ],
    series : [
          {
              name:'响应时间',
              type:'bar',
              data:[251,261,264,274,259,240,257,269,289,270,
                    256,276,267,292,300,313,296,311,303,292,
                    323,307,298,311,270,256,233,256,279,241,236],
              itemStyle:{
                  normal: {
                      color:'rgb(217,147,58)'
                  },
              },
            
          }
      ] 
},
paymentData2:{
  backgroundColor:'',
    tooltip: {
        trigger: 'axis'
    },
    xAxis : [
        {
          	axisLabel:{
            	textStyle:{
            		color:'rgb(217,147,58)'
            	}
          	},
            type : 'category',
            data : ['12:30','12:31','12:32','12:33','12:34','12:35','12:36','12:37','12:38','12:39',
                  	'12:40','12:41','12:42','12:43','12:44','12:45','12:46','12:47','12:48','12:49',
                    '12:50','12:51','12:52','12:53','12:54','12:55','12:56','12:57','12:58','12:59','13:00']
        }
    ],
    yAxis : [
        {
           	show:false,
            type : 'value',
            min:0,
            max:150
        }
    ],
    series : [
          {
              name:'实时交易量',
              type:'bar',
              data:[122,133,144,150,135,152,122,112,122,152,
                    122,83,93,65,45,43,53,112,70,90,
                    89,122,98,133,150,112,121,100,102,112],
              itemStyle:{
                  normal: {
                      color: 'rgb(217,147,58)',
                  },
              },
            
          }
      ] 
},
paymentData3:{
  backgroundColor:'',
    tooltip: {
        trigger: 'axis'
    },
    xAxis : [
        {
          	axisLabel:{
            	textStyle:{
            		color:'rgb(217,147,58)'
            	}
          	},
            type : 'category',
            data : ['12:30','12:31','12:32','12:33','12:34','12:35','12:36','12:37','12:38','12:39',
                  	'12:40','12:41','12:42','12:43','12:44','12:45','12:46','12:47','12:48','12:49',
                    '12:50','12:51','12:52','12:53','12:54','12:55','12:56','12:57','12:58','12:59','13:00']
        }
    ],
    yAxis : [
        {
           	show:false,
            type : 'value',
            min:0,
            max:600
        }
    ],
    series : [
          {
              name:'实时交易量',
              type:'bar',
              data:[491,514,520,513,514,480,523,491,514,455,
                  516,476,517,532,489,513,456,531,463,512,
                  535,507,498,511,450,456,503,456,479,513,456],
              itemStyle:{
                  normal: {
                      color: 'rgb(217,147,58)',
                  },
              },
             
          }
      ] 
},
coreTrade:`9,131,232,131元`,
lastYear:`7,141,231,131元`,
lastYearRare:`36.7%`,
measureChart:{
  backgroundColor:'',
  grid: {
        x:25,
        y:50,
        x2:25,
        y2:50
    },
   title : {
        textStyle: {
            fontSize:20,
          color:'rgb(217,147,58)'
        },
        subtext: '单位：万笔/分钟'
    },
    
  	legend: {
      	x:'right',
      	y:'top',
        data:['信用卡','借记卡','合作行'],
      padding:10,
      textStyle:{
      	color:'rgb(217,147,58)'
    	}
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
          	axisLabel:{
            	textStyle:{
            		color:'rgb(217,147,58)'
            	}
          	},
            boundaryGap : false,
            data : ['12:00','12:02','12:04','12:06','12:08',
                    '12:10','12:12','12:14','12:16','12:18',
                    '12:20','12:22','12:24','12:26','12:28',
                    '12:30','12:32','12:34','12:36','12:38',
                    '12:40','12:42','12:44','12:46','12:48',
                    '12:50','12:52','12:54','12:56','12:58','13:00']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min:0,
            max:12,
          	axisLabel:{
            	textStyle:{
            		color:'rgb(217,147,58)'
            	}
          	},
        }
    ],
    series : [
          {
              name:'信用卡',
              type:'line',
              symbol:'none',
              data:[3.4,3.2,4.0,4.9,6.5,
                   5.9,6.5,7.0,6.8,8.6,9.6,
                   9.0,8.6,9.7,8.8,8.9,9.6,
                   9.3,10.6,11.7,11.8,10.9,11.6,
                   10.5,11.4,11.7,10.8,11.9,10.6,
                   10.5,9.6,9.7,8.8,7.9,7.6,8.7],
              itemStyle:{
                  normal: {
                    color: "red",
                  },
              },
          },
      	{
              name:'借记卡',
              type:'line',
              symbol:'none',
              data:[2.3,3.4,3.0,5.4,3.2,
                   8.6,5.9,6.5,7.0,9.6,4.0,
                   9.0,8.6,9.7,8.8,8.9,9.6,
                   7.0,5.4,9.3,10.6,11.7,11.8,
                   10.5,11.4,10.6,8.5,7.9,9.0,
                   10.5,7.8,8.5,7.0,7.5,6.9,7.6,8.7],
              itemStyle:{
                  normal: {
                    color: 'orange'
                  },
              },
          },
      	{
              name:'合作行',
              type:'line',
              symbol:'none',
              data:[
                9.3,10.6,11.7,11.8,10.9,11.6,
                9.0,8.6,9.7,8.8,8.9,9.6,
                 5.9,6.5,7.0,6.8,7.2,5.6,
                3.4,3.2,4.0,4.9,6.5,
                6.5,5.0,6.0,4.5,4.1,3.9,4.5,4.0
                ],
              itemStyle:{
                  normal: {
                    color: 'yellow'
                  },
              },
          }
      ] 
},
payChartConfig:{
  backgroundColor:'',
    grid: {
        x:50,
        y:25,
        x2:25,
        y2:25
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['12:30','12:32','12:34','12:36','12:38',
                    '12:40','12:42','12:44','12:46','12:48',
                    '12:50','12:52','12:54','12:56','12:58','13:00']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min:0,
            max:15
        }
    ],
    series : [
          {
              name:'实时交易量',
              type:'line',
              symbol:'none',
              data:[6.4,5.2,5.9,6.5,5.6,
                  	9.0,8.6,9.0,9.3,12.6,
                   10.5,9.6,9.7,8.8,7.9,7.6],
              itemStyle:{
                  normal: {
                    color: 'rgb(200,170,122)',
                    
                  },
              },
              areaStyle: {
                normal: {
                    color: {
                        type: 'linear',//设置线性渐变
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0, color: 'rgba(255,240,220,0.8)' // 0% 处的颜色
                            }, 
                            {
                                offset: 1, color: 'rgba(0,0,0,0.8)' // 100% 处的颜色
                            }
                        ],
                        globalCoord: false // 缺省为 false
                    },
                }
            },            
          }
      ] 
}
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentProvince,v2ComponentSysstatus,v2ComponentChannelmeasure,v2ComponentPaychannel,v2ComponentMilestone_r,v2ComponentMilestone,v2ComponentTrademeasure,v2ComponentVdafolder},
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.time, dataStr:"time", wid:1565839620888, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.chartConfig, dataStr:"chartConfig", wid:1566280248751, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.chartConfig, dataStr:"chartConfig", wid:1566280788498, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.bgClass, dataStr:"bgClass", wid:1566284432550, modelKey:"customClass" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.time, dataStr:"time", wid:1566292479968, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.alipayConfig, dataStr:"alipayConfig", wid:1566295108291, modelKey:"config" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.alipayConfig, dataStr:"alipayConfig", wid:1566295483980, modelKey:"config" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.paymentData, dataStr:"paymentData", wid:1566302680808, modelKey:"config" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.paymentData2, dataStr:"paymentData2", wid:1566302733625, modelKey:"config" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.paymentData3, dataStr:"paymentData3", wid:1566302680432, modelKey:"config" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.coreTrade, dataStr:"coreTrade", wid:1566366707945, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.lastYearRare, dataStr:"lastYearRare", wid:1566366740690, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.lastYear, dataStr:"lastYear", wid:1566366662364, modelKey:"text" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.measureChart, dataStr:"measureChart", wid:1566367167708, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.payChartConfig, dataStr:"payChartConfig", wid:1566367344710, modelKey:"echartConfig" });/**bind over**/
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
.vda-f-text{
    color:rgb(200,170,122);
}
.vda-text2{
    color:rgb(217,147,58);
}
.vda-value{
    color:rgb(254,245,202);
}
.valueDown{
    color:rgb(110,255,206);
}
.valueUp{
    color:rgb(236,85,84);
}
.valueNormal{
    color:rgb(254,245,202);
}
.wave{
    boxshadow:inset 0 0 20px 4px rgba(255,255,255,1);
    top:50%;
    left:50%;
    margintop:97px;
    position:absolute;
    width:16px;
    height:16px;
    borderradius:50%;
    transform:translate(-50%,-50%) rotateX(70deg);
    zindex:1;
    animation:boxShadow1 0.8s linear infinite;
}

</style>