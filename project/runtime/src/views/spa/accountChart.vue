<template><v2container :wid="`root`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:;" key="0"><v2-ebank-tabs class="V2Widget" id="1567233702319" :wid="`1567233702319`" :index="0" :pid="`root`"></v2-ebank-tabs></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:80%;" key="1"><v2-switchable class="V2Widget" id="1567233822100" :wid="`1567233822100`" :index="1" :pid="`root`" activeindex="pageNum"><template><v2container id="1567233779924" :wid="`1567233779924`" :index="0" :pid="`1567233822100`" v-if="pageNum==0"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;" key="0"><v2-component-echart class="V2Widget" id="1567233788300" :wid="`1567233788300`" :index="0" :pid="`1567233779924`"></v2-component-echart></el-row></v2container><v2container id="1567233769290" :wid="`1567233769290`" :index="1" :pid="`1567233822100`" v-if="pageNum==1"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;" key="0"><v2-component-echart class="V2Widget" id="1567233916399" :wid="`1567233916399`" :index="0" :pid="`1567233769290`"></v2-component-echart></el-row></v2container><v2container id="1567233936719" :wid="`1567233936719`" :index="2" :pid="`1567233822100`" v-if="pageNum==2"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;" key="0"><v2-component-echart class="V2Widget" id="1567233918656" :wid="`1567233918656`" :index="0" :pid="`1567233936719`"></v2-component-echart></el-row></v2container></template></v2-switchable></el-row></v2container></template>
<script>
            import  {mixins} from '@v2-lib/vue.spa.plugin';
            import {root} from '@v2-lib/v2sual/mixin/v2-view';
            
            export default{
                data(){
                    return{
                        "CONTENT":{structure:{"id":"root","component":"v2Container","direction":"row","layout":["",80],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"active":"${pageNum}","tabs":"${barTitle}","tabsType":"","hasBtns":false,"btns":"","btnsType":"text","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-ebank-tabs","href":"v2-ebank-tabs","children":[],"events":{},"id":1567233702319,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]},{"style":{"iWarpStyle":{"background-color":"","margin":"","padding":""}},"activeIndex":"pageNum","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-switchable","href":"v2-switchable","children":[{"id":1567233779924,"pid":1567233822100,"component":"v2Container","layout":[100],"position":"row","children":[{"configs":"${option}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"id":1567233788300,"pid":1567233779924,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"ctnClass":"","customClass":"","realSize":["%"],"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"id":1567233769290,"pid":1567233822100,"component":"v2Container","layout":[100],"position":"row","children":[{"configs":"${debtOption}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"id":1567233916399,"pid":1567233769290,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]},{"id":1567233936719,"pid":1567233822100,"component":"v2Container","layout":[100],"position":"row","children":[{"configs":"${barOption}","ctnClass":"","customClass":"","__type":"","__loopTarget":"","__capacity":"1","component":"v2-component-echart","href":"v2-component-echart","children":[],"events":{},"id":1567233918656,"pid":1567233936719,"commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"customEditor":"v2EditorSwitch","id":1567233822100,"pid":"root","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"],"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}]}],"events":{},"ctnStyle":[{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""},{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","text-align":"","background-color":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","border-color":"","border-width":"","border-style":""}],"realSize":["输入","%"],"ctnClass":"","customClass":"","commonStyle":{"position":"","top":"","right":"","left":"","bottom":"","width":"","height":"","padding-top":"","padding-bottom":"","padding-left":"","padding-right":"","margin-top":"","margin-bottom":"","margin-left":"","margin-right":"","font-size":"","color":"","animation-duration":"1s","animation-delay":""},"animate":["","animated"]}},
                        option:{
    title : {
        text: '资产分布',
     
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['总资产','总负债','净资产']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'总资产'},
                {value:310, name:'总负债'},
                {value:234, name:'净资产'}
        
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
},
barOption:{
    legend: {
        data:['资产','负债'],
        bottom:'10px',
    },
    xAxis: {
        type: 'category',
        data: ['折合人民币']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
          name: '资产',
        type: 'bar',
        barWidth:"30px",
         data: [200],

    },{
         name: '负债',
        type: 'bar',
        data: [120],
        barWidth:"30px"

    }]
},
debtOption:{
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        bottom:'center',
        data: ['信用卡']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'信用卡'},
            
        
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
},
pageNum:'0',
barTitle:[{
    text:'资产构成图'
},{
    text:'负债构成图'
},{
    text:'资产负债对比图'
}]
                    }
                },
                props:{
                  
                },
                mixins:[root,mixins],
                
                methods:{},
                watch:{},
                computed:{},
                beforeCreate(){
                    let ctx = this;
                    
                },
                created(){
                    let ctx = this;
                    
                    
                    /**bind**/ctx.$store.commit("registerBind",{ vueObj:this, data:this.option, dataStr:"option", wid:1567233788300, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.debtOption, dataStr:"debtOption", wid:1567233916399, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.barOption, dataStr:"barOption", wid:1567233918656, modelKey:"configs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.barTitle, dataStr:"barTitle", wid:1567233702319, modelKey:"tabs" });
ctx.$store.commit("registerBind",{ vueObj:this, data:this.pageNum, dataStr:"pageNum", wid:1567233702319, modelKey:"active" });/**bind over**/
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