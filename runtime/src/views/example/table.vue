<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="`1559122431024`" :wid="`1559122431024`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="`1559122433755`" :wid="`1559122433755`" :index="0" :pid="`1559122431024`"><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="0"><v2-form-checkbox class="V2Widget" id="`1559122436849`" :wid="`1559122436849`" :index="0" :pid="`1559122433755`"></v2-form-checkbox></el-row><el-row class="V2ContainerBlock borderBox dashBorder" style="height:50%;width:100%;" key="1"><v2-form-datepicker class="V2Widget" id="`1559122438700`" :wid="`1559122438700`" :index="1" :pid="`1559122433755`"></v2-form-datepicker></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="`1559122431024-1`" :wid="`1559122431024-1`" :index="1" :pid="`1559122431024`"></v2empty></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="`root-1`" :wid="`root-1`" :index="1" :pid="`root`"></v2empty></el-row></v2container></template>
<script>import {root} from '@/utils/v2-view';export default {
    data() {
        return {
            CONTENT: {
                structure: {
                    id: "root",
                    component: "v2Container",
                    direction: "row",
                    layout: [ 50, 50 ],
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    data: {},
                    children: [ {
                        style: {
                            divCtn: {
                                position: "",
                                top: "",
                                right: "",
                                bottom: "",
                                left: "",
                                overflow: "",
                                margin: "",
                                padding: "",
                                height: "",
                                width: "",
                                "max-height": "",
                                "max-width": "",
                                "min-height": "",
                                "min-width": ""
                            }
                        },
                        direction: "row",
                        layout: "[50,50]",
                        def: {
                            defheight: true,
                            defborder: true,
                            defbackgroundStyle: true,
                            defpaddingStyle: true
                        },
                        defaultValue: {
                            "background-color": "#fff",
                            "background-image": "",
                            "padding-top": 0,
                            "padding-bottom": 0,
                            "padding-left": 0,
                            "padding-right": 0
                        },
                        customStyle: {},
                        href: "v2-layout-colctn",
                        component: "v2-layout-colctn",
                        widget: {
                            belongTo: "aui",
                            icon: "iconfont icon-password",
                            type: "layout",
                            href: "v2-layout-colctn",
                            author: "zhanghaixian@agree.com.cn",
                            version: 51e4,
                            accept: "",
                            name: "横向布局",
                            option: [ {
                                name: "direction",
                                desp: "排列方式",
                                defaultValue: "row",
                                type: "string_select",
                                valueArray: [ "row", "col" ],
                                despArray: [ "横排", "竖排" ]
                            }, {
                                name: "layout",
                                desp: "栅格",
                                hidden: false,
                                defaultValue: [ 50, 50 ],
                                type: "string_input"
                            } ],
                            css: {
                                style: [ {
                                    desp: "容器",
                                    cssAttrs: "top right bottom left width height min-width max-width min-height max-height position overflow margin padding",
                                    name: "divCtn"
                                } ]
                            },
                            editor: {
                                name: "avLayoutEditor",
                                model: {
                                    def: {
                                        defheight: true,
                                        defborder: true,
                                        defbackgroundStyle: true,
                                        defpaddingStyle: true
                                    },
                                    defaultValue: {
                                        "background-color": "#fff",
                                        "background-image": "",
                                        "padding-top": 0,
                                        "padding-bottom": 0,
                                        "padding-left": 0,
                                        "padding-right": 0
                                    },
                                    customStyle: {}
                                }
                            },
                            main: "index.vue"
                        },
                        children: [ {
                            style: {
                                divCtn: {
                                    position: "",
                                    top: "",
                                    right: "",
                                    bottom: "",
                                    left: "",
                                    overflow: "",
                                    margin: "",
                                    padding: "",
                                    height: "",
                                    width: "",
                                    "max-height": "",
                                    "max-width": "",
                                    "min-height": "",
                                    "min-width": ""
                                }
                            },
                            direction: "row",
                            layout: "[50,50]",
                            def: {
                                defheight: true,
                                defborder: true,
                                defbackgroundStyle: true,
                                defpaddingStyle: true
                            },
                            defaultValue: {
                                "background-color": "#fff",
                                "background-image": "",
                                "padding-top": 0,
                                "padding-bottom": 0,
                                "padding-left": 0,
                                "padding-right": 0
                            },
                            customStyle: {},
                            href: "v2-layout-colctn",
                            component: "v2-layout-colctn",
                            widget: {
                                belongTo: "aui",
                                icon: "iconfont icon-password",
                                type: "layout",
                                href: "v2-layout-colctn",
                                author: "zhanghaixian@agree.com.cn",
                                version: 51e4,
                                accept: "",
                                name: "横向布局",
                                option: [ {
                                    name: "direction",
                                    desp: "排列方式",
                                    defaultValue: "row",
                                    type: "string_select",
                                    valueArray: [ "row", "col" ],
                                    despArray: [ "横排", "竖排" ]
                                }, {
                                    name: "layout",
                                    desp: "栅格",
                                    hidden: false,
                                    defaultValue: [ 50, 50 ],
                                    type: "string_input"
                                } ],
                                css: {
                                    style: [ {
                                        desp: "容器",
                                        cssAttrs: "top right bottom left width height min-width max-width min-height max-height position overflow margin padding",
                                        name: "divCtn"
                                    } ]
                                },
                                editor: {
                                    name: "avLayoutEditor",
                                    model: {
                                        def: {
                                            defheight: true,
                                            defborder: true,
                                            defbackgroundStyle: true,
                                            defpaddingStyle: true
                                        },
                                        defaultValue: {
                                            "background-color": "#fff",
                                            "background-image": "",
                                            "padding-top": 0,
                                            "padding-bottom": 0,
                                            "padding-left": 0,
                                            "padding-right": 0
                                        },
                                        customStyle: {}
                                    }
                                },
                                main: "index.vue"
                            },
                            children: [ {
                                style: {
                                    label: {
                                        "font-size": "",
                                        "font-weight": "",
                                        color: ""
                                    },
                                    font: {
                                        "padding-left": "",
                                        "font-size": "",
                                        color: ""
                                    }
                                },
                                label: "标题",
                                titleMode: "row",
                                options: [ {
                                    active: "true",
                                    value: "备选项",
                                    disabled: false
                                }, {
                                    active: true,
                                    value: "备选项",
                                    disabled: false
                                } ],
                                href: "v2-form-checkbox",
                                component: "v2-form-checkbox",
                                widget: {
                                    belongTo: "aui",
                                    icon: "iconfont icon-password",
                                    type: "form",
                                    href: "v2-form-checkbox",
                                    author: "fengjiarong@agree.com.cn",
                                    version: 51e4,
                                    accept: "foundationRowCtn divCtn",
                                    name: "多选框",
                                    option: [ {
                                        name: "label",
                                        desp: "标题",
                                        defaultValue: "标题",
                                        type: "string_input"
                                    }, {
                                        name: "titleMode",
                                        desp: "标题排列方式",
                                        defaultValue: "row",
                                        type: "string_select",
                                        valueArray: [ "row", "col" ],
                                        despArray: [ "横排", "竖排" ]
                                    }, {
                                        name: "options",
                                        desp: "配置项",
                                        defaultValue: "",
                                        type: "array",
                                        appendNumber: 1,
                                        attrInEachElement: [ {
                                            name: "value",
                                            desp: "文本",
                                            defaultValue: "备选项",
                                            type: "string_input"
                                        }, {
                                            name: "disabled",
                                            desp: "是否禁用",
                                            defaultValue: false,
                                            type: "boolean"
                                        } ],
                                        append: [ {} ]
                                    } ],
                                    css: {
                                        style: [ {
                                            desp: "标题",
                                            cssAttrs: "font-size color font-weight",
                                            name: "label"
                                        }, {
                                            desp: "选项文字",
                                            cssAttrs: "font-size  color padding-left",
                                            name: "font"
                                        } ]
                                    },
                                    main: "index.vue"
                                },
                                children: [],
                                events: [],
                                id: 1559122436849,
                                pid: 1559122433755
                            }, {
                                style: {
                                    label: {
                                        "font-size": "",
                                        "font-weight": "",
                                        color: ""
                                    },
                                    borderStyle: {
                                        "border-color": ""
                                    },
                                    fontStyle: {
                                        color: ""
                                    }
                                },
                                label: "标题",
                                labelWitdh: "80px",
                                titleMode: "row",
                                value: "",
                                placeholder: "请选择",
                                type: "date",
                                disabled: false,
                                clearable: true,
                                format: "yyyy 年 MM 月 dd 日",
                                align: "left",
                                href: "v2-form-datePicker",
                                component: "v2-form-datePicker",
                                widget: {
                                    belongTo: "aui",
                                    icon: "iconfont icon-password",
                                    type: "form",
                                    href: "v2-form-datePicker",
                                    author: "fengjiarong@agree.com.cn",
                                    version: 51e4,
                                    accept: "foundationRowCtn divCtn",
                                    name: "日期选择器",
                                    option: [ {
                                        name: "label",
                                        desp: "标题",
                                        defaultValue: "标题",
                                        type: "string_input"
                                    }, {
                                        name: "labelWitdh",
                                        desp: "标题宽度",
                                        defaultValue: "80px",
                                        type: "string_input"
                                    }, {
                                        name: "titleMode",
                                        desp: "标题排列方式",
                                        defaultValue: "row",
                                        type: "string_select",
                                        valueArray: [ "row", "col" ],
                                        despArray: [ "横排", "竖排" ]
                                    }, {
                                        name: "value",
                                        desp: "选择值",
                                        defaultValue: "",
                                        type: "string_input"
                                    }, {
                                        name: "placeholder",
                                        desp: "placeholder",
                                        defaultValue: "请选择",
                                        type: "string_input"
                                    }, {
                                        name: "type",
                                        desp: "日期单位",
                                        defaultValue: "date",
                                        type: "string_select",
                                        valueArray: [ "date", "week", "month", "year", "dates", "daterange" ],
                                        despArray: [ "日", "周", "月", "年", "多个日期", "日期范围" ]
                                    }, {
                                        name: "disabled",
                                        desp: "是否禁用",
                                        defaultValue: false,
                                        type: "boolean"
                                    }, {
                                        name: "clearable",
                                        desp: "是否显示清除按钮",
                                        defaultValue: true,
                                        type: "boolean"
                                    }, {
                                        name: "format",
                                        desp: "显示格式",
                                        defaultValue: "yyyy 年 MM 月 dd 日",
                                        type: "string_input"
                                    }, {
                                        name: "align",
                                        desp: "对齐方式",
                                        defaultValue: "left",
                                        type: "string_select",
                                        valueArray: [ "left", "center", "right" ],
                                        despArray: [ "左", "中", "右" ]
                                    } ],
                                    css: {
                                        style: [ {
                                            desp: "标题",
                                            cssAttrs: "font-size font-weight color",
                                            name: "label"
                                        }, {
                                            desp: "检验边框",
                                            cssAttrs: "border-color",
                                            name: "borderStyle"
                                        }, {
                                            desp: "检验文字",
                                            cssAttrs: "color",
                                            name: "fontStyle"
                                        } ]
                                    },
                                    main: "index.vue"
                                },
                                children: [],
                                events: [],
                                id: 1559122438700,
                                pid: 1559122433755
                            } ],
                            events: [],
                            id: 1559122433755,
                            pid: 1559122431024
                        }, null ],
                        events: [],
                        id: 1559122431024,
                        pid: "root"
                    }, null ]
                }
            }
        };
    },
    mixins: [ root ],
    methods: {},
    watch: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {
        /**unBind**/ this.$store("unbind", this) /**unBind over**/;
    },
    destroyed() {}
};</script>