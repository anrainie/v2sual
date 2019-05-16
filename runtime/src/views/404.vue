<template>
  <v2container
    class="V2Container"
    ref="wrap"
    style="width:100%;height:100%;"
    id="root"
    :wid="`root`"
    component="v2container"
    direction="row"
    layout="100"
  > 
    <el-row class="V2ContainerBlock" style="height:100%;width:100%;" key="0">
      <v2container
        :wid="`1557729515923`"
        :index="0"
        :pid="`root`"
        direction="row"
        layout="[50,50]"
        href="av-layout-colctn"
        component="av-layout-colctn"
        id="1557729515923"
      >
        <el-row
          class="V2ContainerBlock borderBox dashBorder"
          style="height:50%;width:100%;"
          key="0"
        >
          <av-form-datePicker
            :wid="`1557919551218`"
            :index="0"
            :pid="`1557729515923`"
            label="标题"
            labelwitdh="80px"
            titlemode="row"
            value="user.name"
            placeholder="请选择"
            type="date"
            disabled="false"
            clearable="true"
            format="yyyy 年 MM 月 dd 日"
            align="left"
            href="av-form-datePicker"
            component="av-form-datePicker"
            id="1557919551218"
          ></av-form-datePicker>
        </el-row>
        <el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1">
          <v2container
            :wid="`1557761115858`"
            :index="1"
            :pid="`1557729515923`"
            component="av-layout-colctn"
            href="av-layout-colctn"
            layout="50,50"
            direction="row"
            id="1557761115858"
          >
            <el-row
              class="V2ContainerBlock borderBox dashBorder"
              style="height:50%;width:100%;"
              key="0"
            >
              <av-form-radio
                is="av-form-radio"
                :wid="`1557761115858`"
                :index="0"
                :pid="`1557760827010`"
                label="标题"
                titlemode="row"
                value
                href="av-form-radio"
                component="av-form-radio"
                id="1557761115858"
                direction="row"
              >
                <div
                  class="V2Empty"
                  is="v2Empty"
                  :wid="`1557761115858-0`"
                  :index="0"
                  :pid="`1557761115858`"
                ></div>
                <div
                  class="V2Empty"
                  is="v2Empty"
                  :wid="`1557761115858-1`"
                  :index="1"
                  :pid="`1557761115858`"
                ></div>
              </av-form-radio>
            </el-row>
            <el-row
              class="V2ContainerBlock borderBox dashBorder"
              style="height:50%;width:100%;"
              key="1"
            >
              <av-form-input
                :wid="`1557760827010`"
                index="1"
                pid="1557729515923"
                label="标题"
                titlemode="row"
                labelwitdh="80px"
                placeholder="请选择"
                
                clearable="false"
                href="av-form-input"
                component="av-form-input"
                id="1557760827010"
              ></av-form-input>
            </el-row>
          </v2container>
        </el-row>
      </v2container>
    </el-row>
  </v2container>
</template><script>
import {root} from '@/utils/v2-view';
export default {
  data() {
    return {
        CONTENT:{"structure":{"id":"root","component":"v2container","direction":"row","layout":[100],"style":{"width":"100%","height":"100%"},"data":{},"children":[{"style":{"row":{"position":"","top":"","right":"","bottom":"","left":"","margin":"","border":"","padding":""},"divCtn":{"position":"","top":"","right":"","bottom":"","left":"","overflow":"","margin":"","padding":"","height":"","width":"","max-height":"","max-width":"","min-height":"","min-width":""}},"direction":"row","layout":"[50,50]","href":"av-layout-colctn","component":"av-layout-colctn","widget":{"belongTo":"aui","icon":"iconfont icon-password","type":"layout","href":"av-layout-colctn","author":"zhanghaixian@agree.com.cn","version":510000,"accept":"","name":"横向布局","option":[{"name":"direction","desp":"排列方式","defaultValue":"row","type":"string_select","valueArray":["row","col"],"despArray":["横排","竖排"]},{"name":"layout","desp":"栅格","hidden":false,"defaultValue":[50,50],"type":"string_input"}],"css":{"style":[{"desp":"栅格","cssAttrs":"position margin padding border top left right bottom","name":"row"},{"desp":"子容器","cssAttrs":"top right bottom left width height min-width max-width min-height max-height position overflow margin padding","name":"divCtn"}]},"style":{},"main":"index.vue"},"children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","labelWitdh":"80px","titleMode":"row","value":"user.name","placeholder":"请选择","type":"date","disabled":false,"clearable":true,"format":"yyyy 年 MM 月 dd 日","align":"left","href":"av-form-datePicker","component":"av-form-datePicker","widget":{"belongTo":"aui","icon":"iconfont icon-password","type":"form","href":"av-form-datePicker","author":"fengjiarong@agree.com.cn","version":510000,"accept":"foundationRowCtn divCtn","name":"日期选择器","option":[{"name":"label","desp":"标题","defaultValue":"标题","type":"string_input"},{"name":"labelWitdh","desp":"标题宽度","defaultValue":"80px","type":"string_input"},{"name":"titleMode","desp":"标题排列方式","defaultValue":"row","type":"string_select","valueArray":["row","col"],"despArray":["横排","竖排"]},{"name":"value","desp":"选择值","defaultValue":"","type":"string_input"},{"name":"placeholder","desp":"placeholder","defaultValue":"请选择","type":"string_input"},{"name":"type","desp":"日期单位","defaultValue":"date","type":"string_select","valueArray":["date","week","month","year","dates","daterange"],"despArray":["日","周","月","年","多个日期","日期范围"]},{"name":"disabled","desp":"是否禁用","defaultValue":false,"type":"boolean"},{"name":"clearable","desp":"是否显示清除按钮","defaultValue":true,"type":"boolean"},{"name":"format","desp":"显示格式","defaultValue":"yyyy 年 MM 月 dd 日","type":"string_input"},{"name":"align","desp":"对齐方式","defaultValue":"left","type":"string_select","valueArray":["left","center","right"],"despArray":["左","中","右"]}],"css":{"style":[{"desp":"标题","cssAttrs":"font-size font-weight color","name":"label"},{"desp":"检验边框","cssAttrs":"border-color","name":"borderStyle"},{"desp":"检验文字","cssAttrs":"color","name":"fontStyle"}]},"main":"index.vue"},"children":[],"id":1557919551218,"pid":1557729515923},{"component":"av-layout-colctn","href":"av-layout-colctn","layout":[50,50],"direction":"row","children":[{"style":{"label":{"font-size":"","font-weight":"","color":""},"radio":{"margin":"","border-width":"","border-radius":"","padding":"","height":"","width":""},"font":{"padding-left":"","font-size":"","color":""}},"label":"标题","titleMode":"row","value":"","options":[{"active":"true","text":"文本","disabled":false,"border":false,"label":""},{"active":true,"text":"文本","disabled":false,"border":false,"label":""}],"href":"av-form-radio","component":"av-form-radio","widget":{"belongTo":"aui","icon":"iconfont icon-password","type":"form","href":"av-form-radio","author":"fengjiarong@agree.com.cn","version":510000,"accept":"foundationRowCtn divCtn","name":"单选框","option":[{"name":"label","desp":"标题","defaultValue":"标题","type":"string_input"},{"name":"titleMode","desp":"标题排列方式","defaultValue":"row","type":"string_select","valueArray":["row","col"],"despArray":["横排","竖排"]},{"name":"value","desp":"选中的值","defaultValue":0,"type":"string_input"},{"name":"options","desp":"配置项","defaultValue":"","type":"array","appendNumber":1,"attrInEachElement":[{"name":"text","desp":"文本","defaultValue":"文本","type":"string_input"},{"name":"disabled","desp":"是否禁用","defaultValue":false,"type":"boolean"},{"name":"border","desp":"是否带边框","defaultValue":false,"type":"boolean"},{"name":"label","desp":"对应值","defaultValue":false,"type":"string_input"}],"append":[{}]}],"css":{"style":[{"desp":"标题","cssAttrs":"font-size color font-weight","name":"label"},{"desp":"单选框","cssAttrs":"width height border-width border-radius padding margin","name":"radio"},{"desp":"选项文字","cssAttrs":"font-size  color padding-left","name":"font"}]},"main":"index.vue"},"children":[null,null],"id":1557761115858,"pid":1557760827010,"direction":"row"},{"style":{"label":{"font-size":"","font-weight":"","color":""},"borderStyle":{"border-color":""},"fontStyle":{"color":""}},"label":"标题","titleMode":"row","labelWitdh":"80px","placeholder":"请选择","value":"","clearable":false,"href":"av-form-input","component":"av-form-input","widget":{"belongTo":"aui","icon":"iconfont icon-password","type":"form","href":"av-form-input","author":"fengjiarong@agree.com.cn","version":510000,"accept":"foundationRowCtn divCtn","name":"输入框","option":[{"name":"label","desp":"标题","defaultValue":"标题","type":"string_input"},{"name":"titleMode","desp":"标题排列方式","defaultValue":"row","type":"string_select","valueArray":["row","col"],"despArray":["横排","竖排"]},{"name":"labelWitdh","desp":"标题宽度","defaultValue":"80px","type":"string_input"},{"name":"placeholder","desp":"placeholder","defaultValue":"请选择","type":"string_input"},{"name":"value","desp":"值","defaultValue":"","type":"string_input"},{"name":"clearable","desp":"是否可清空","defaultValue":false,"type":"boolean"}],"css":{"style":[{"desp":"标题","cssAttrs":"font-size color font-weight","name":"label"},{"desp":"检验边框","cssAttrs":"border-color","name":"borderStyle"},{"desp":"检验文字","cssAttrs":"color","name":"fontStyle"}]},"main":"index.vue"},"children":[],"id":1557760827010,"pid":1557729515923}],"id":1557761115858,"pid":1557729515923}],"id":1557729515923,"pid":"root"}]}}
    
    };
  },
  mixins:[root],
  methods: {},
  watch: {}
};
</script>