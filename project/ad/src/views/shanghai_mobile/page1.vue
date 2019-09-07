<template><v2-ctn-xy :wid="`root`"><v2-component-text class="V2Widget" :class="[`s_m_bg`]" id="1567508581415" :wid="`1567508581415`" :index="0" :pid="`root`"></v2-component-text><v2-component-s_m_header class="V2Widget" :style="`position:absolute;top:0;left:0;width:100%;height:2.6rem;animation-duration:1s;`" id="1567577600390" :wid="`1567577600390`" :index="1" :pid="`root`"></v2-component-s_m_header><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567507254912" :wid="`1567507254912`" :index="2" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`hline`]" id="1567508998952" :wid="`1567508998952`" :index="3" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vline`]" id="1567509400587" :wid="`1567509400587`" :index="4" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`vline`]" id="1567509522568" :wid="`1567509522568`" :index="5" :pid="`root`"></v2-component-text><v2-component-title_text class="V2Widget" :style="`position:absolute;top:2rem;left:5%;width:30%;height:1.3rem;animation-duration:1s;`" id="1567518741368" :wid="`1567518741368`" :index="6" :pid="`root`" :title="当前排队人数" :value="queueInfo.count" :unit="人"></v2-component-title_text><v2-component-title_text class="V2Widget" :style="`position:absolute;top:2rem;left:35%;width:30%;height:1.3rem;animation-duration:1s;`" id="1567518711214" :wid="`1567518711214`" :index="7" :pid="`root`" :title="已处理客户" :value="queueInfo.handled" :unit="人"></v2-component-title_text><v2-component-title_text class="V2Widget" :style="`position:absolute;top:2rem;left:68%;width:30%;height:1.3rem;animation-duration:1s;`" id="1567518763418" :wid="`1567518763418`" :index="8" :pid="`root`" :title="等待最长耗时" :value="queueInfo.most_wait" :unit="分钟"></v2-component-title_text><v2-component-title_text class="V2Widget" :style="`position:absolute;top:3.5rem;left:5%;width:30%;height:1.3rem;animation-duration:1s;`" id="1567518718515" :wid="`1567518718515`" :index="9" :pid="`root`" :title="平均等待耗时" :value="queueInfo.aveage_wait" :unit="分钟"></v2-component-title_text><v2-component-title_text class="V2Widget" :style="`position:absolute;top:3.5rem;left:35%;width:30%;height:1.3rem;animation-duration:1s;`" id="1567518805393" :wid="`1567518805393`" :index="10" :pid="`root`" :title="上月等待耗时" :value="queueInfo.last_mon_aveage_wait" :unit="分钟"></v2-component-title_text><v2-component-title_text class="V2Widget" :style="`position:absolute;top:3.5rem;left:68%;width:30%;height:1.3rem;animation-duration:1s;`" id="1567518726498" :wid="`1567518726498`" :index="11" :pid="`root`" :title="当前弃号率" :value="queueInfo.lost_rare" :unit="%"></v2-component-title_text><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567522955457" :wid="`1567522955457`" :index="12" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title2`]" id="1567522962048" :wid="`1567522962048`" :index="13" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1567523061139" :wid="`1567523061139`" :index="14" :pid="`root`"></v2-component-image><v2-component-text class="V2Widget" :class="[`filter_text`]" id="1567523149722" :wid="`1567523149722`" :index="15" :pid="`root`"></v2-component-text><v2-component-table class="V2Widget" :class="[`s_m_table`]" id="1567523202055" :wid="`1567523202055`" :index="16" :pid="`root`"></v2-component-table><v2-component-text class="V2Widget" :class="[`s_m_panel`]" id="1567523733024" :wid="`1567523733024`" :index="17" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`title2`]" id="1567523741770" :wid="`1567523741770`" :index="18" :pid="`root`"></v2-component-text><v2-component-text class="V2Widget" :class="[`filter_text`]" id="1567523817933" :wid="`1567523817933`" :index="19" :pid="`root`"></v2-component-text><v2-component-image class="V2Widget" id="1567523809438" :wid="`1567523809438`" :index="20" :pid="`root`"></v2-component-image><v2-component-table class="V2Widget" :class="[`s_m_table`]" id="1567523887255" :wid="`1567523887255`" :index="21" :pid="`root`"></v2-component-table></v2-ctn-xy></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            import v2ComponentTitle_text from '@/views/_customWidget/title_text.vue';import v2ComponentS_m_header from '@/views/_customWidget/s_m_header.vue'
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2EditorXYCtn","style":{"width":"100%","height":"100%"},"children":[{"style":{"textStyle":{}},"customClass":"s_m_bg","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%","animation-duration":"1s"},"id":1567508581415,"pid":"root","animate":["","animated"]},{"__capacity":"1","component":"v2-component-s_m_header","href":"v2-component-s_m_header","cptpath":"\\src\\views\\_customWidget\\s_m_header.vue","events":{},"commonStyle":{"position":"absolute","top":"0","left":"0","width":"100%","height":"2.6rem","animation-duration":"1s"},"id":1567577600390,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"2rem","height":"3rem","animation-duration":"1s"},"id":1567507254912,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"hline","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"top":"3.5rem","left":"7%","width":"86%","animation-duration":"1s","position":"absolute"},"id":1567508998952,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"vline","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"2.3rem","left":"33.33%","height":"2.6rem","animation-duration":"1s"},"id":1567509400587,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"vline","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"2.3rem","left":"66%","height":"2.6rem","animation-duration":"1s"},"id":1567509522568,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"当前排队人数","value":"queueInfo.count","unit":"人"},"__capacity":"1","component":"v2-component-title_text","href":"v2-component-title_text","cptpath":"\\src\\views\\_customWidget\\title_text.vue","events":{},"commonStyle":{"position":"absolute","top":"2rem","left":"5%","width":"30%","height":"1.3rem","animation-duration":"1s"},"id":1567518741368,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"已处理客户","value":"queueInfo.handled","unit":"人"},"__capacity":"1","component":"v2-component-title_text","href":"v2-component-title_text","cptpath":"\\src\\views\\_customWidget\\title_text.vue","events":{},"commonStyle":{"position":"absolute","top":"2rem","left":"35%","width":"30%","height":"1.3rem","animation-duration":"1s"},"id":1567518711214,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"等待最长耗时","value":"queueInfo.most_wait","unit":"分钟"},"__capacity":"1","component":"v2-component-title_text","href":"v2-component-title_text","cptpath":"\\src\\views\\_customWidget\\title_text.vue","events":{},"commonStyle":{"position":"absolute","top":"2rem","left":"68%","width":"30%","height":"1.3rem","animation-duration":"1s"},"id":1567518763418,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"平均等待耗时","value":"queueInfo.aveage_wait","unit":"分钟"},"__capacity":"1","component":"v2-component-title_text","href":"v2-component-title_text","cptpath":"\\src\\views\\_customWidget\\title_text.vue","events":{},"commonStyle":{"position":"absolute","top":"3.5rem","left":"5%","width":"30%","height":"1.3rem","animation-duration":"1s"},"id":1567518718515,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"上月等待耗时","value":"queueInfo.last_mon_aveage_wait","unit":"分钟"},"__capacity":"1","component":"v2-component-title_text","href":"v2-component-title_text","cptpath":"\\src\\views\\_customWidget\\title_text.vue","events":{},"commonStyle":{"position":"absolute","top":"3.5rem","left":"35%","width":"30%","height":"1.3rem","animation-duration":"1s"},"id":1567518805393,"pid":"root","animate":["","animated"]},{"dataBasket":{"title":"当前弃号率","value":"queueInfo.lost_rare","unit":"%"},"__capacity":"1","component":"v2-component-title_text","href":"v2-component-title_text","cptpath":"\\src\\views\\_customWidget\\title_text.vue","events":{},"commonStyle":{"position":"absolute","top":"3.5rem","left":"68%","width":"30%","height":"1.3rem","animation-duration":"1s"},"id":1567518726498,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"5.5rem","height":"6rem","animation-duration":"1s"},"id":1567522955457,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"上海地区TOP10","customClass":"title2","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"5.7rem","left":"0.5rem","animation-duration":"1s"},"id":1567522962048,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"5.7rem","right":"1.2rem","width":"0.24rem","height":"0.24rem","animation-duration":"1s"},"events":{},"href":"v2-component-image","src":"img/形状 8.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567523061139,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"按等待数","customClass":"filter_text","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"5.7rem","right":"0.4rem","width":"0.8rem","animation-duration":"1s"},"id":1567523149722,"pid":"root","animate":["","animated"]},{"theme":{"tableType":"border"},"columns":[{"active":true,"prop":"columns0","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"name","label":"网点名称","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d1","label":"处理数","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d2","label":"等待数","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d3","label":"等待耗时","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d4","label":"最长耗时","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d5","label":"上月排名","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]}],"toolLocation":"right","toolWidth":"0","tableData":"${top10}","__capacity":"1","component":"v2-component-table","href":"v2-component-table","events":{},"commonStyle":{"position":"absolute","top":"6.2rem","left":"7%","width":"86%","height":"5rem","right":"6%","animation-duration":"1s"},"id":1567523202055,"pid":"root","animate":["","animated"],"customClass":"s_m_table"},{"style":{"textStyle":{}},"customClass":"s_m_panel","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"12rem","height":"4rem","animation-duration":"1s"},"id":1567523733024,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"异地TOP5","customClass":"title2","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"12.2rem","left":"55px","animation-duration":"1s"},"id":1567523741770,"pid":"root","animate":["","animated"]},{"style":{"textStyle":{}},"text":"按等待数","customClass":"filter_text","__capacity":"1","component":"v2-component-text","href":"v2-component-text","events":{},"commonStyle":{"position":"absolute","top":"12.2rem","right":"0.4rem","width":"0.8rem","animation-duration":"1s"},"id":1567523817933,"pid":"root","animate":["","animated"]},{"component":"v2-component-image","commonStyle":{"position":"absolute","top":"12.2rem","right":"1.2rem","width":"0.24rem","height":"0.24rem","animation-duration":"1s"},"events":{},"href":"v2-component-image","src":"img/形状 8.png","style":{},"__capacity":"1","icon":"iconkapian","name":"图片","type":"component","id":1567523809438,"pid":"root","animate":["","animated"]},{"theme":{"tableType":"border"},"columns":[{"active":true,"prop":"columns0","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"name","label":"网点名称","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d1","label":"处理数","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d2","label":"等待数","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d3","label":"等待耗时","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d4","label":"最长耗时","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]},{"active":true,"prop":"d5","label":"上月排名","type":"text","tagMap":[{"active":"true","type":"text"}],"iconMap":[{"active":"true"}],"filterMap":[{"active":"true"}]}],"toolLocation":"right","tableData":"${top5}","__capacity":"1","component":"v2-component-table","href":"v2-component-table","events":{},"commonStyle":{"position":"absolute","top":"12.6rem","left":"7%","width":"86%","height":"3rem","right":"6%","animation-duration":"1s"},"id":1567523887255,"pid":"root","animate":["","animated"],"customClass":"s_m_table"}],"ctnStyle":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"commonStyle":{"animation-duration":"1s"},"animate":["","animated"]}},
                        queueInfo:{
    count:1231,
    handled:5121,
    most_wait:31,
    aveage_wait:16,
    last_mon_aveage_wait:19,
    lost_rare:18.4,
},
top5:[{
    name:"城西支行",
    d1:"222",
    d2:22,
    d3:343,
    d4:444,
    d5:222
},{
    name:"城西支行",
    d1:"222",
    d2:22,
    d3:343,
    d4:444,
    d5:222
},{
    name:"城西支行",
    d1:"222",
    d2:22,
    d3:343,
    d4:444,
    d5:222
},{
    name:"城西支行",
    d1:"222",
    d2:22,
    d3:343,
    d4:444,
    d5:222
},{
    name:"城西支行",
    d1:"222",
    d2:22,
    d3:343,
    d4:444,
    d5:222
}],
top10:[{
    name:"滴水湖支行",
    d1:1389,
    d2:232,
    d3:343,
    d4:444,
    d5:2226
},{
    name:"城西支行",
    d1:1389,
    d2:22,
    d3:343,
    d4:444,
    d5:222
},{
    name:"滴水湖支行",
    d1:"2242",
    d2:22,
    d3:343,
    d4:444,
    d5:222
},{
    name:"城西支行",
    d1:"1222",
    d2:22,
    d3:343,
    d4:444,
    d5:222
},{
    name:"滴水湖支行",
    d1:"2522",
    d2:22,
    d3:343,
    d4:444,
    d5:222
},{
    name:"滴水湖支行",
    d1:"2522",
    d2:22,
    d3:343,
    d4:444,
    d5:222
},{
    name:"滴水湖支行",
    d1:"2522",
    d2:22,
    d3:343,
    d4:444,
    d5:222
},{
    name:"滴水湖支行",
    d1:"2522",
    d2:22,
    d3:343,
    d4:444,
    d5:222
},{
    name:"滴水湖支行",
    d1:"2522",
    d2:22,
    d3:343,
    d4:444,
    d5:222
},{
    name:"滴水湖支行",
    d1:"2522",
    d2:22,
    d3:343,
    d4:444,
    d5:222
}]
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                components:{v2ComponentTitle_text,v2ComponentS_m_header},
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.queueInfo.count, dataStr:"queueInfo.count", wid:1567518741368, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.queueInfo.most_wait, dataStr:"queueInfo.most_wait", wid:1567518763418, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.queueInfo.aveage_wait, dataStr:"queueInfo.aveage_wait", wid:1567518718515, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.queueInfo.lost_rare, dataStr:"queueInfo.lost_rare", wid:1567518726498, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.queueInfo.handled, dataStr:"queueInfo.handled", wid:1567518711214, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.queueInfo.last_mon_aveage_wait, dataStr:"queueInfo.last_mon_aveage_wait", wid:1567518805393, modelKey:"value" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.top5, dataStr:"top5", wid:1567523887255, modelKey:"tableData" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.top10, dataStr:"top10", wid:1567523202055, modelKey:"tableData" });/**bind over**/
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