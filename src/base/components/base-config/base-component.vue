<template>
    <component v-if="visible" :class="classes" :array="array" :is="componentName" :obj="obj" :value="obj[item.name]"
               :edmCollectionObj="edmCollectionObj" :arraySelector="arraySelector" :objSelector="objSelector"
               :handler="handler" :item="item">
    </component>
</template>

<script>
    let mixin = {
        props: {
            obj: Object,
            item: Object,
            array: Array,

            arraySelector: String,
            objSelector: String,

            handler: Object,

            edmCollectionObj: Object,

            value: {}
        },

        created() {
        },

        watch: {
            value: {
                handler: function (val, oldVal) {

                    if (val !== oldVal) {
                        if (
                            (Array.isArray(val) &&
                            Array.isArray(oldVal) &&
                            !val.length &&
                            !oldVal.length)
                            || (Object.prototype.toString.call(val) === "[object Object]" &&
                            Object.prototype.toString.call(oldVal) === "[object Object]" &&
                            JSON.stringify(val) === JSON.stringify(oldVal))
                        )  {
                        } else {
                            this.handler.handleChange({
                                obj: this.obj,
                                item: this.item,
                                val: val,
                                oldVal: oldVal,
                                belongTo: "obj",
                                modelSelector: this.objSelector + "---" + this.item.name,
                                arraySelector: this.arraySelector,
                                type: this.item.type
                            });
                        }
                    }
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

//            _advance_configure: {
//                template: `
//            <collapse :id.prop="objSelector + item.name.replace(/#/g, '')" :value="item.expand ? (objSelector + item.name) : undefined" @on-open="handler.panelOpen($event,${handleChangeParamsStr} )">
//                <panel @panelCreated="handler.panelCreated($event,item)" :name="objSelector + item.name">
//                    {{item.desp || item.name}}
//                    <div slot="content">
//                         <base-config :arraySelector="arraySelector " v-if="handler[objSelector + item.name]" :array="item.array" :objSelector="objSelector + '---' + item.name" :handler="handler" :obj="obj[item.name]"></base-config>
//                    </div>
//                </panel>
//            </collapse>`,
//                mixins: [mixin]
//            },
            _string_input: {
                template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                     {{item.desp || item.name}}
                      ${swapIconStr}
                </div>
                <div class="col-2">
                    <i-input @clickIcon="handler.handleValidate($event, item)" @validate="handler.validate" :validateObj="item.validate" :readonly="item.readonly" :placeholder="item.placeholder" v-model="obj[item.name]"></i-input>
                </div>
            </div>`,
                mixins: [mixin]
            },

            _textarea: {
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

            _object: {
                template: `<collapse :id.prop="objSelector + item.name.replace(/#/g, '')" :value="item.expand ? (objSelector + item.name) : undefined" @on-open="handler.panelOpen($event,${handleChangeParamsStr} )">
                <panel @panelCreated="handler.panelCreated($event,item)" :name="objSelector + item.name">
                    {{item.desp || item.name}}
                    <i v-if="item.addable" title="添加" class="array-add-btn aui aui-tianjia" @click.native.stop="handler.objAdd($event,{modelSelector:objSelector + '---' + item.name,array:array, item:item, obj:obj[item.name]})">
                    </i>
                    <i v-if="item.closable" title="刪除" class="array-del-span aui aui-guanbi"  @click.native.stop="handler.objDel($event,{modelSelector:objSelector + '---' + item.name,array:array, item:item, obj:obj[item.name]})"></i>
                    <div slot="content">
                        <base-config :arraySelector="arraySelector + '---' + 'attr' " v-if="handler[objSelector + item.name]" :array="item.attr" :objSelector="objSelector + '---' + item.name" :handler="handler" :obj="obj[item.name]"></base-config>
                    </div>
                </panel>
            </collapse>`,
                mixins: [mixin]
            },

            _array: {
                template: `<collapse :id.prop="objSelector + item.name.replace(/#/g, '')" :value="item.expand ? (objSelector + item.name) : undefined" @on-open="handler.panelOpen">
                <Alert v-if="item.alert" type="warning" show-icon>{{item.alert}}</Alert>
                <panel :name="objSelector + item.name">
                    {{item.desp || item.name}}
                    <i title="添加" class="array-add-btn aui aui-tianjia" @click.stop="handler.addBlock($event,{ instanceArr:obj[item.name] ,modelSelector:objSelector + '---' + item.name,array:array, item:item, obj:obj})">
                    </i>
                    <div slot="content">
                        <draggable :options="{handle:'.ivu-panel-header'}" element="collapse" v-model="obj[item.name]" :component-data="{props: {accordion:true},on:{'on-open':handler.panelOpen, 'on-change':handler.panelChange}}" v-if="Array.isArray(item.attrInEachElement)">
                            <panel :showIcon="!item.noIcon" @panelCreated="handler.panelCreated" v-for="(instanceItem, index) in obj[item.name]" :itemObj="instanceItem" :id.prop="objSelector + item.name + index" v-if="instanceItem && instanceItem.active && index > 0" :key="objSelector + item.name + index" :name="objSelector + item.name + index">
                                {{handler.getHeader(item,instanceItem, index)}}
                                <i title="删除" class="array-del-span aui aui-guanbi" @click.stop="handler.delBlock($event,instanceItem, objSelector + '---' + item.name + '---' + index)" ></i>
                                <div slot="content">
                                    <base-config :arraySelector="arraySelector + '---' + 'attrInEachElement' "  v-if="handler[objSelector + item.name + index]" :array="item.attrInEachElement" :objSelector="objSelector + '---' + item.name + '---' + index" :handler="handler" :obj="instanceItem"></base-config>
                                </div>
                            </panel>
                        </draggable>
                    </div>
                </panel>
            </collapse>`,
                mixins: [mixin]
            },

            _string_select: {
                template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                    {{item.desp || item.name}}
                        ${swapIconStr}
                </div>
                <div class="col-2">
                      <i-select transfer @on-change="handler.handleChange(${handleChangeParamsStr})" v-model="obj[item.name]">
                        <i-option v-for="(value,index) in item.valueArray" :value="value" :key="value">{{item.despArray[index]}}</i-option>
                        <option-group v-if="item.group" v-for="(groupItem, index) in item.group" :label="groupItem.label" :key="groupItem.label">
                            <i-option v-for="(value, index) in groupItem.valueArray" :value="value" :key="value">{{groupItem.despArray[index]}}</i-option>
                        </option-group>
                    </i-select>
                </div>
            </div>`,
                mixins: [mixin]
            },

            _multiple_select: {
                template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                    {{item.desp || item.name}}
                </div>
                <div class="col-2">
                    <i-select :readonly="item.readonly" transfer multiple filterable :value="obj[item.name]" @on-change="handler.handleChange(${handleChangeParamsStr})">
                        <i-option v-for="(value,index) in item.valueArray" :value="value" :key="value">{{item.despArray[index]}}</i-option>
                        <option-group v-if="item.group" v-for="(groupItem, index) in item.group" :label="groupItem.label" :key="groupItem.label">
                            <i-option v-for="(value,index) in groupItem.valueArray" :value="value" :key="value">{{groupItem.despArray[index]}}</i-option>
                        </option-group>
                    </i-select>
                </div>
            </div>`,
                mixins: [mixin]
            },

            _boolean: {
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

            _number: {
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

            _directive_div: {
                template: `<div class="aui-row">
                 <Alert v-if="!item.noAlert" show-icon>{{item.desp || item.name}}<span v-if="item.info">: {{item.info}}</span></Alert>
                <div :style.prop="item.style || 'height: 300px'"
                    v-div="{value:obj[item.name], obj:obj, name:item.name, option: item, modelSelector:objSelector + item.name}" ></div>
            </div>`,
                mixins: [mixin]
            },

            _directive_input: {
                template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                     {{item.desp || item.name}}
                </div>
                <input class="col-2" v-input="{value:obj[item.name], obj:obj, array:array, name:item.name, option: item, objSelector:objSelector}" />
            </div>`,
                mixins: [mixin]
            },

            _configure_modal: {
                template: `<div class="aui-row">
                <div class="col-2" v-tooltip="item">
                    {{item.desp || item.name}}
                 ${swapIconStr}
                </div>
                <div class="col-2">
                     <span data-role="showValue" v-span="{value:obj[item.name], obj:obj, name:item.name, option: item}"></span>
                    <span @click.stop="handler.showModal($event, {obj:obj, name:item.name, option: item})" class="config-modal-btn">
                        <i title="配置" class="aui aui-peizhidingyi" ></i>
                    </span>
                </div>
            </div>`,
                mixins: [mixin]
            },

            _edmCollection: {
                template: `<collapse>
                <Alert v-if="item.alert" type="warning" show-icon>{{item.alert}}</Alert>
                <panel v-tooltip="item">
                    {{item.desp || item.name}}
                    <i title="添加" class="array-add-btn aui aui-tianjia" @click.stop="handler.addBlock($event,{instanceArr: obj[item.name].elements, modelSelector:objSelector + '---' + item.name + '---elements', array:array, item:item, obj:obj})"> </i>   
                    <div slot="content">
                    <draggable :options="{handle:'.ivu-panel-header'}" element="collapse" v-model="obj[item.name].elements" :component-data="{props: {accordion:true}}" @update="handler.edmSorted(obj[item.name], objSelector + '---' + item.name)">
                    <panel v-for="(instanceItem, index) in obj[item.name].elements" v-if="instanceItem && instanceItem.active && index > 0" :key="objSelector + item.name + index" :name="objSelector + item.name + index">
                    {{handler.getHeader(item,instanceItem, index, obj[item.name])}}
                    <i title="删除" class="array-del-span aui aui-guanbi" @click.stop="handler.delBlock($event,instanceItem, objSelector + '---' + item.name + '---elements---' + index, obj[item.name])"></i>
                    <div slot="content">
                    <base-config :arraySelector="arraySelector + '---' + 'attrInEachElement' " :array="item.attrInEachElement" :edmCollectionObj="obj[item.name]" :objSelector="objSelector + '---' + item.name + '---elements---' + index" :handler="handler" :obj="instanceItem"></base-config>
                    </div>
                    </panel>
                    </draggable>
                    </div>
                    </panel>
                    </collapse>`,

                mixins: [mixin]
            },

            _edm: {
                template: `<div class="aui-config-block">
        <div v-if="item.direction === 'request' && !item.noShowDesp" class="aui-row">
        <div class="col-2" v-tooltip="item">
        {{item.desp || item.name}}描述
        </div>
        <div class="col-2">
        <i-input v-model="obj[item.name].name" @on-blur="handler.handleChange({val:obj[item.name].name, modelSelector:objSelector + '---' + item.name + '---name'})"></i-input>
        </div>
        </div>
        <div class="edm-config-ctn">
        <span v-if="item.direction === 'request' ">{{item.desp || item.name}}</span>
        <span @click.stop="handler.openEdmDialog($event,{modelSelector: objSelector, option:item,value:obj[item.name], edmCollectionObj:edmCollectionObj})"  class="config-modal-btn">
        <i title="配置" class="aui aui-peizhidingyi" ></i>
        </span>
        </div>
        <div class="aui-edm-list-ctn">
        <ul data-role="edmList" v-edm="{value:obj[item.name], obj:obj, name:item.name, option: item, modelSelector:objSelector + '---' + item.name}"></ul>
        </div>
        </div>`,

                mixins: [mixin]
            },

            _file: {
                template: `<div data-role="auiPath" class="aui-row aui-up-path aui-row-icon">
                    <div class="col-2" v-tooltip="item">
                    {{item.desp || item.name}}
                    ${swapIconStr}
                    </div>

                <div class="col-2">
                          <div  data-role="showValue" :title.prop="obj[item.name]" v-span="{value:obj[item.name], obj:obj, name:item.name, option: item}"></div>
                           <input type="file" title="选择文件" @change="handler.handleFileChange($event,{obj:obj, name:item.name, option: item})"/>
                        <button type="button"><i class="aui aui-tupian"></i></button>
                </div>


        </div>`,

                mixins: [mixin]
            },

            _colorPicker: {
                template: `<div class="aui-row">
        <div class="col-2" v-tooltip="item">
        {{item.desp || item.name}}
        ${swapIconStr}
        </div>
        <div class="col-2">
        <i-input v-model="obj[item.name]"></i-input>
        <color-picker transfer recommend size="small" v-model="obj[item.name]" on-active-change="handler.handleChange(${handleChangeParamsStr})" alpha></color-picker>
        </div>
        </div>`,

                mixins: [mixin]
            },

            _input_append: {
                template: `<div class="aui-row">
        <div class="col-2" v-tooltip="item">
        {{item.desp || item.name}}
         ${swapIconStr}
        </div>
        <div class="col-2">
        <i-input size="small" v-model="obj[item.name].inputValue" @on-blur="handler.handleChange(${handleChangeParamsStrInputAppendType})">
        <i-select transfer size="small" v-model="obj[item.name].selectValue" @on-change="handler.handleChange(${handleChangeParamsStrInputAppendType})" slot="append" style="width: 70px">
        <i-option v-for="(appendItem, index) in item.appendOption" :key="appendItem" :value="appendItem">{{ (item.appendOptionDesp && item.appendOptionDesp[index]) || appendItem}}</i-option>
        </i-select>
        </i-input>
        </div>
        </div>`,

                mixins: [mixin]
            },

            _tab: {
                template: `<tabs :placement="item.placement" @on-click="handler.tabClicked" :animated="false" size="small">
        <tab-pane v-for="(tabItem, index) in item.tabPanes" :id="objSelector + tabItem.name" :label="tabItem.desp" :key="tabItem.name">
        <base-config fromTabPanes :array="[tabItem]" :arraySelector="arraySelector + '---tabPanes---' + index " :objSelector="objSelector" :handler="handler" :obj="obj"></base-config>
        </tab-pane>
        </tabs>`,

                mixins: [mixin]
            }
        },

        mixins: [mixin],

        computed: {
            componentName() {
                return "_" + this.item.type;
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
            obj: {
                deep: true,
                handler: function (val, oldVal) {
                    this.visible = this.getVisible();
                }
            }
        },

        methods: {
            getVisible() {
                let visible = true,
                    item = this.item,
                    tempArr = [],
                    obj = this.obj;

                if (item.require) {
                    Object.keys(item.require).map(function (itemKey) {
                        let requireValue = item.require[itemKey];

                        if (Array.isArray(requireValue) && requireValue.length > 0) {
                            requireValue.map(function (itemValue, index) {
                                if (typeof itemValue !== "undefined") {
                                    tempArr.push(itemValue.toString());
                                }
                            });

                            if (typeof obj[itemKey] !== "undefined") {
                                visible = tempArr.includes(obj[itemKey].toString());
                            } else {
                                visible = false;
                            }
                        } else if (typeof requireValue in {string: true, boolean: true}) {
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
