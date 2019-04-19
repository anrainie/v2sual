<template>
    <component v-if="visible" :class="classes" :array="array" :is="componentName" :obj="obj" :value="obj[item.name]"
               :edmCollectionObj="edmCollectionObj" :arraySelector="arraySelector" :objSelector="objSelector"
               :item="item">
    </component>
</template>

<script>
import util from "../../utils/bridge.js";

let mixin = {
  props: {
    obj: Object,
    item: Object,
    array: Array,
    arraySelector: String,
    objSelector: String,
    edmCollectionObj: Object,

    value: {}
  },

  created() {},

  watch: {
    value: {
    
    }
  },
  methods: {
 
   
    handleValidate(){
      
    },
    validate(){},


        handleValidate: function($event, item) {},
        validate() {
          return true;
        },

        getHeaderValue: function(value) {
          if (typeof value === "string") {
            return value;
          } else {
            return false;
          }
        },

        getHeader: function(item, instanceItem, index, emdObj) {},

        tabClicked: function(name, id) {},

        panelCreated: function(panelInstance, optionItem) {},



        objAdd(){

        },

        objDel(){

        },
        panelChange: function() {},

        handleChange: function(args) {},

        edmSorted: function(edmObj, modelSelector) {},

        panelOpen: function(event, args) {},
    addBlock: function(event, args) {
      var array = args.array,
        item = args.item,
        instanceArr = args.instanceArr;

      if (item.attrInEachElement === "self") {
        item.attrInEachElement = JSON.parse(JSON.stringify(array));
      }

      if (($.isArray(instanceArr) && !instanceArr.length) || !instanceArr) {
        // obj[item.name] = [{}];
        instanceArr = [{ active: true }];
     
        this.$set(this.obj, item.name, instanceArr);

      }

      let baseConfigInit = util.baseConfigInitInstance(
        {
          active: true
        },
        JSON.parse(JSON.stringify(item.attrInEachElement || []))
      );
      instanceArr.push(baseConfigInit);
  
       this.$set(this.obj, item.name, instanceArr);
   
    },
     delBlock (event,  name,index,edmCollectionObj) {

                              this.obj[name].splice(index,1);
                              this.$set(this.obj,name,this.obj[name]);
                                if (edmCollectionObj) {
                                    //edmUtil.edmDelete(edmCollectionObj.edmID, item.edmItemId);
                                }


                   }
  }
};

const classPrefix = "aui-base-config-component",
  handleChangeParamsStr = `{
        val:obj[item.name],
        modelSelector: objSelector + '---' + item.name,
        arraySelector: arraySelector,
        optionItem: item,
        obj: obj
    }`,
  swapIconStr = `
        <span v-span="${handleChangeParamsStr}"></span>
        `,
  handleChangeParamsStrInputAppendType = `{
        val:{inputValue:obj[item.name].inputValue,selectValue:obj[item.name].selectValue},
        modelSelector: objSelector + '---' + item.name,
        arraySelector: arraySelector,
        optionItem: item,
        obj: obj
    }`;

export default {
  name: "BaseComponent",

  data() {
    return {
      visible: this.getVisible()
    };
  },

  components: {
  aui_string_input: {
      template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                     {{item.desp || item.name}}
                      ${swapIconStr}
                </div>
                <div class="col-2">
                    <i-input @clickIcon="handleValidate($event, item)" @validate="validate" :validateObj="item.validate" :readonly="item.readonly" :placeholder="item.placeholder" v-model="obj[item.name]"></i-input>
                </div>
            </div>`,
      mixins: [mixin]
    },

aui_textarea: {
      template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                     {{item.desp || item.name}}
                        ${swapIconStr}
                </div>
                <div class="col-2">
                    <i-input :readonly="item.readonly" :rows="item.rows" type="textarea" v-model="obj[item.name]"></i-input>
                </div>
            </div>`,
      mixins: [mixin]
    },

aui_object: {
      template: `<collapse :id.prop="objSelector + item.name.replace(/#/g, '')" :value="item.expand ? (objSelector + item.name) : undefined" @on-open="panelOpen($event,${handleChangeParamsStr} )">
                <panel @panelCreated="panelCreated($event,item)" :name="objSelector + item.name">
                    {{item.desp || item.name}}
                    <i v-if="item.addable" title="添加" class="array-add-btn aui aui-tianjia" @click.native.stop="objAdd($event,{modelSelector:objSelector + '---' + item.name,array:array, item:item, obj:obj[item.name]})">
                    </i>
                    <i v-if="item.closable" title="刪除" class="array-del-span aui aui-guanbi"  @click.native.stop="objDel($event,{modelSelector:objSelector + '---' + item.name,array:array, item:item, obj:obj[item.name]})"></i>
                    <div slot="content">
                        <base-config :arraySelector="arraySelector + '---' + 'attr' " :array="item.attr" :objSelector="objSelector + '---' + item.name"  :obj="obj[item.name]"></base-config>
                    </div>
                </panel>
            </collapse>`,
      mixins: [mixin]
    },

aui_array: {
      template: `<collapse :id.prop="objSelector + item.name.replace(/#/g, '')" :value="item.expand ? (objSelector + item.name) : undefined" @on-open="panelOpen">
                <Alert v-if="item.alert" type="warning" show-icon>{{item.alert}}</Alert>
                <panel :name="objSelector + item.name">
                    {{item.desp || item.name}}
                    <i title="添加" class="array-add-btn aui aui-tianjia" @click.stop="addBlock($event,{ instanceArr:obj[item.name] ,modelSelector:objSelector + '---' + item.name,array:array, item:item})">
                    </i>
                    <div slot="content">
                        <draggable :options="{handle:'.ivu-panel-header'}" element="collapse" v-model="obj[item.name]" :component-data="{props: {accordion:true},on:{'on-open':panelOpen, 'on-change':panelChange}}" v-if="Array.isArray(item.attrInEachElement)">
                            <panel :showIcon="!item.noIcon" @panelCreated="panelCreated" v-for="(instanceItem, index) in obj[item.name]" :itemObj="instanceItem" :id.prop="objSelector + item.name + index" v-if="instanceItem && instanceItem.active && index > 0" :key="objSelector + item.name + index" :name="objSelector + item.name + index">
                                {{getHeader(item,instanceItem, index)}}
                                <i title="删除" class="array-del-span aui aui-guanbi" @click.stop="delBlock($event,item.name,index)" ></i>
                                <div slot="content">
                                    <base-config :arraySelector="arraySelector + '---' + 'attrInEachElement' "  :array="item.attrInEachElement" :objSelector="objSelector + '---' + item.name + '---' + index" :obj="instanceItem"></base-config>
                                </div>
                            </panel>
                        </draggable>
                    </div>
                </panel>
            </collapse>`,
      mixins: [mixin],
      mounted() {
       
      }
    },

aui_string_select: {
      template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                    {{item.desp || item.name}}
                        ${swapIconStr}
                </div>
                <div class="col-2">
                      <i-select transfer @on-change="handleChange(${handleChangeParamsStr})" v-model="obj[item.name]">
                        <i-option v-for="(value,index) in item.valueArray" :value="value" :key="value">{{item.despArray[index]}}</i-option>
                        <option-group v-if="item.group" v-for="(groupItem, index) in item.group" :label="groupItem.label" :key="groupItem.label">
                            <i-option v-for="(value, index) in groupItem.valueArray" :value="value" :key="value">{{groupItem.despArray[index]}}</i-option>
                        </option-group>
                    </i-select>
                </div>
            </div>`,
      mixins: [mixin]
    },

aui_multiple_select: {
      template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                    {{item.desp || item.name}}
                </div>
                <div class="col-2">
                    <i-select :readonly="item.readonly" transfer multiple filterable :value="obj[item.name]" @on-change="handleChange(${handleChangeParamsStr})">
                        <i-option v-for="(value,index) in item.valueArray" :value="value" :key="value">{{item.despArray[index]}}</i-option>
                        <option-group v-if="item.group" v-for="(groupItem, index) in item.group" :label="groupItem.label" :key="groupItem.label">
                            <i-option v-for="(value,index) in groupItem.valueArray" :value="value" :key="value">{{groupItem.despArray[index]}}</i-option>
                        </option-group>
                    </i-select>
                </div>
            </div>`,
      mixins: [mixin]
    },

aui_boolean: {
      template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                    {{item.desp || item.name}}
                </div>
                <div class="col-2">
                    <i-switch v-model="obj[item.name]">
                        <span slot="open">是</span>
                        <span slot="close">否</span>
                    </i-switch>
                </div>
            </div>`,
      mixins: [mixin]
    },

aui_number: {
      template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                    {{item.desp || item.name}}
                      ${swapIconStr}
                </div>
                <div class="col-2">
                    <input-number :readonly="item.readonly" class="col-2" v-model="obj[item.name]"></input-number>
                </div>
            </div>`,
      mixins: [mixin]
    },

aui_directive_div: {
      template: `<div class="aui-row">
                 <Alert v-if="!item.noAlert" show-icon>{{item.desp || item.name}}<span v-if="item.info">: {{item.info}}</span></Alert>
                <div :style.prop="item.style || 'height: 300px'"
                    v-div="{value:obj[item.name], obj:obj, name:item.name, option: item, modelSelector:objSelector + item.name}" ></div>
            </div>`,
      mixins: [mixin]
    },

aui_directive_input: {
      template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                     {{item.desp || item.name}}
                </div>
                <input class="col-2" v-input="{value:obj[item.name], obj:obj, array:array, name:item.name, option: item, objSelector:objSelector}" />
            </div>`,
      mixins: [mixin]
    },

aui_configure_modal: {
      template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                    {{item.desp || item.name}}
                 ${swapIconStr}
                </div>
                <div class="col-2">
                     <span data-role="showValue" v-span="{value:obj[item.name], obj:obj, name:item.name, option: item}"></span>
                    <span @click.stop="showModal($event, {obj:obj, name:item.name, option: item})" class="config-modal-btn">
                        <i title="配置" class="aui aui-peizhidingyi" ></i>
                    </span>
                </div>
            </div>`,
      mixins: [mixin]
    },

aui_edmCollection: {
      template: `<collapse>
                <Alert v-if="item.alert" type="warning" show-icon>{{item.alert}}</Alert>
                <panel v-tooltip="item">
                    {{item.desp || item.name}}
                    <i title="添加" class="array-add-btn aui aui-tianjia" @click.stop="addBlock($event,{instanceArr: obj[item.name].elements, modelSelector:objSelector + '---' + item.name + '---elements', array:array, item:item, obj:obj})"> </i>   
                    <div slot="content">
                    <draggable :options="{handle:'.ivu-panel-header'}" element="collapse" v-model="obj[item.name].elements" :component-data="{props: {accordion:true}}" @update="edmSorted(obj[item.name], objSelector + '---' + item.name)">
                    <panel v-for="(instanceItem, index) in obj[item.name].elements" v-if="instanceItem && instanceItem.active && index > 0" :key="objSelector + item.name + index" :name="objSelector + item.name + index">
                    {{getHeader(item,instanceItem, index, obj[item.name])}}
                    <i title="删除" class="array-del-span aui aui-guanbi" @click.stop="delBlock($event, item.name ,index, obj[item.name])"></i>
                    <div slot="content">
                    <base-config :arraySelector="arraySelector + '---' + 'attrInEachElement' " :array="item.attrInEachElement" :edmCollectionObj="obj[item.name]" :objSelector="objSelector + '---' + item.name + '---elements---' + index" :obj="instanceItem"></base-config>
                    </div>
                    </panel>
                    </draggable>
                    </div>
                    </panel>
                    </collapse>`,

      mixins: [mixin],
      mounted(){
        debugger;
      }
    },

aui_edm: {
      template: `<div class="aui-config-block">
        <div v-if="item.direction === 'request' && !item.noShowDesp" class="aui-row">
        <div class="col-2" v-tooltip="item">
        {{item.desp || item.name}}描述
        </div>
        <div class="col-2">
        <i-input v-model="obj[item.name].name" @on-blur="handleChange({val:obj[item.name].name, modelSelector:objSelector + '---' + item.name + '---name'})"></i-input>
        </div>
        </div>
        <div class="edm-config-ctn">
        <span v-if="item.direction === 'request' ">{{item.desp || item.name}}</span>
        <span @click.stop="openEdmDialog($event,{modelSelector: objSelector, option:item,value:obj[item.name], edmCollectionObj:edmCollectionObj})"  class="config-modal-btn">
        <i title="配置" class="aui aui-peizhidingyi" ></i>
        </span>
        </div>
        <div class="aui-edm-list-ctn">
        <ul data-role="edmList" v-edm="{value:obj[item.name], obj:obj, name:item.name, option: item, modelSelector:objSelector + '---' + item.name}"></ul>
        </div>
        </div>`,

      mixins: [mixin]
    },

aui_file: {
      template: `<div data-role="auiPath" class="aui-row aui-up-path aui-row-icon">
                    <div class="col-2" v-tooltip="item">
                    {{item.desp || item.name}}
                    ${swapIconStr}
                    </div>

                <div class="col-2">
                          <div  data-role="showValue" :title.prop="obj[item.name]" v-span="{value:obj[item.name], obj:obj, name:item.name, option: item}"></div>
                           <input type="file" title="选择文件" @change="handleFileChange($event,{obj:obj, name:item.name, option: item})"/>
                        <button type="button"><i class="aui aui-tupian"></i></button>
                </div>


        </div>`,

      mixins: [mixin]
    },

aui_colorPicker: {
      template: `<div class="aui-row">
        <div class="col-2" v-tooltip="item">
        {{item.desp || item.name}}
        ${swapIconStr}
        </div>
        <div class="col-2">
        <i-input v-model="obj[item.name]"></i-input>
        <color-picker transfer recommend size="small" v-model="obj[item.name]" on-active-change="handleChange(${handleChangeParamsStr})" alpha></color-picker>
        </div>
        </div>`,

      mixins: [mixin]
    },

aui_input_append: {
      template: `<div class="aui-row">
        <div class="col-2" v-tooltip="item">
        {{item.desp || item.name}}
         ${swapIconStr}
        </div>
        <div class="col-2">
        <i-input size="small" v-model="obj[item.name].inputValue" @on-blur="handleChange(${handleChangeParamsStrInputAppendType})">
        <i-select transfer size="small" v-model="obj[item.name].selectValue" @on-change="handleChange(${handleChangeParamsStrInputAppendType})" slot="append" style="width: 70px">
        <i-option v-for="(appendItem, index) in item.appendOption" :key="appendItem" :value="appendItem">{{ (item.appendOptionDesp && item.appendOptionDesp[index]) || appendItem}}</i-option>
        </i-select>
        </i-input>
        </div>
        </div>`,

      mixins: [mixin]
    },

aui_tab: {
      template: `<tabs :placement="item.placement" @on-click="tabClicked" :animated="false" size="small">
        <tab-pane v-for="(tabItem, index) in item.tabPanes" :id="objSelector + tabItem.name" :label="tabItem.desp" :key="tabItem.name">
        <base-config fromTabPanes :array="[tabItem]" :arraySelector="arraySelector + '---tabPanes---' + index " :objSelector="objSelector" :obj="obj"></base-config>
        </tab-pane>
        </tabs>`,

      mixins: [mixin]
    }
  },

  mixins: [mixin],

  computed: {
    componentName() {
      return  "aui_" + this.item.type;
    },

    classes() {
      return [
        `${classPrefix}`,

        `${classPrefix}-${this.item.type}`,

        `${(
          this.objSelector +
          "---" +
          (this.item.name === "span" ? "s-pan" : this.item.name)
        )
          .split("---")
          .join("-")}`
      ];
    }
  },

  watch: {
    // obj: {
    //   deep: true,
    //   handler: function(val, oldVal) {
    //     this.visible = this.getVisible();
    //   }
    // }
  },

  methods: {
    getVisible() {
      let visible = true,
        item = this.item,
        tempArr = [],
        obj = this.obj;

      if (item.require) {
        Object.keys(item.require).map(function(itemKey) {
          let requireValue = item.require[itemKey];

          if (Array.isArray(requireValue) && requireValue.length > 0) {
            requireValue.map(function(itemValue, index) {
              if (typeof itemValue !== "undefined") {
                tempArr.push(itemValue.toString());
              }
            });

            if (typeof obj[itemKey] !== "undefined") {
              visible = tempArr.includes(obj[itemKey].toString());
            } else {
              visible = false;
            }
          } else if (typeof requireValue in { string: true, boolean: true }) {
            if (
              obj[itemKey] !== undefined &&
              requireValue !== "" &&
              requireValue !== undefined &&
              obj[itemKey].toString() !== requireValue.toString()
            ) {
              visible = false;
            }
          }
        });
      }

      if (item.hidden) {
        visible = false;
      }

      return visible;
    }
  }
};
</script>

<style>
.col-2 {
  float: left;
  border-right: 0;
  border-left: 1px solid #e5e5e5;
  margin-left: -1px;
  display: inline-block;
  padding-left: 1em;
  min-height: 20px;
  line-height: 2;
  overflow: hidden;
  text-overflow: clip;
  vertical-align: middle;
  box-sizing: border-box;
  width: 50%;
}
</style>
