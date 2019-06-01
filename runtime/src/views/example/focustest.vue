<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559214383876" :wid="`1559214383876`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559270073346" :wid="`1559270073346`" :index="0" :pid="`1559214383876`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559270075056" :wid="`1559270075056`" :index="0" :pid="`1559270073346`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559270078656" :wid="`1559270078656`" :index="0" :pid="`1559270075056`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-select class="V2Widget" id="1559287884030" :wid="`1559287884030`" :index="0" :pid="`1559270078656`"></v2-form-select></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="1" style="height:100%;"><v2-form-input class="V2Widget" id="1559287888024" :wid="`1559287888024`" :index="1" :pid="`1559270078656`"></v2-form-input></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1559270080534" :wid="`1559270080534`" :index="1" :pid="`1559270075056`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-cascader class="V2Widget" id="1559297788482" :wid="`1559297788482`" :index="0" :pid="`1559270080534`"></v2-form-cascader></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="1" style="height:100%;"><v2-form-checkbox class="V2Widget" id="1559297790191" :wid="`1559297790191`" :index="1" :pid="`1559270080534`"></v2-form-checkbox></el-col></v2container></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1559270076912" :wid="`1559270076912`" :index="1" :pid="`1559270073346`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559270082199" :wid="`1559270082199`" :index="0" :pid="`1559270076912`"><el-col class="V2ContainerBlock" :span="12" key="0" style="height:100%;"><v2empty class="V2Empty" id="1559270082199-0" :wid="`1559270082199-0`" :index="0" :pid="`1559270082199`"></v2empty></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="1" style="height:100%;"><v2-form-inputnumber class="V2Widget" id="1559297794960" :wid="`1559297794960`" :index="1" :pid="`1559270082199`"></v2-form-inputnumber></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1559270083943" :wid="`1559270083943`" :index="1" :pid="`1559270076912`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-inputnumber class="V2Widget" id="1559297821667" :wid="`1559297821667`" :index="0" :pid="`1559270083943`"></v2-form-inputnumber></el-col><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="1" style="height:100%;"><v2-form-radio class="V2Widget" id="1559297824322" :wid="`1559297824322`" :index="1" :pid="`1559270083943`"></v2-form-radio></el-col></v2container></el-row></v2container></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1559214383876-1" :wid="`1559214383876-1`" :index="1" :pid="`1559214383876`"></v2empty></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="root-1" :wid="`root-1`" :index="1" :pid="`root`"></v2empty></el-row></v2container></template>
<script>import {root} from '@/utils/v2-view';export default {
    data() {
        return {
            orgList: "",
            orgId: "",
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
                        rules:['forceFocusRequiredRule'],
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
                            icon: "iconhengxiangbuju",
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
                                icon: "iconhengxiangbuju",
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
                                    icon: "iconhengxiangbuju",
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
                                    direction: "col",
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
                                    href: "v2-layout-rowctn",
                                    component: "v2-layout-rowctn",
                                    widget: {
                                        belongTo: "aui",
                                        icon: "iconshuxiangbuju",
                                        type: "layout",
                                        href: "v2-layout-rowctn",
                                        author: "zhanghaixian@agree.com.cn",
                                        version: 51e4,
                                        accept: "",
                                        name: "竖向布局",
                                        option: [ {
                                            name: "direction",
                                            desp: "排列方式",
                                            defaultValue: "col",
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
                                                desp: "子容器",
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
                                            borderStyle: {
                                                "border-color": ""
                                            },
                                            fontStyle: {
                                                color: ""
                                            }
                                        },
                                        value: "",
                                        labelWitdh: "80px",
                                        titleMode: "col",
                                        label: "标题",
                                        placeholder: '"请选择"',
                                        dataType: "def",
                                        optionConfig: "orgList",
                                        options: [ {
                                            active: "true",
                                            value: "1",
                                            label: "选项1"
                                        } ],
                                        clearable: false,
                                        filterable: true,
                                        disabled: false,
                                        isRequired: true,
                                        href: "v2-form-select",
                                        component: "v2-form-select",
                                        widget: {
                                            belongTo: "aui",
                                            icon: "iconxuanzeqi",
                                            type: "form",
                                            href: "v2-form-select",
                                            author: "fengjiarong@agree.com.cn",
                                            version: 51e4,
                                            accept: "foundationRowCtn divCtn",
                                            name: "选择器",
                                            option: [ {
                                                name: "value",
                                                desp: "选择值",
                                                defaultValue: "",
                                                type: "string_input"
                                            }, {
                                                name: "labelWitdh",
                                                desp: "标题宽度",
                                                defaultValue: "80px",
                                                type: "string_input"
                                            }, {
                                                name: "titleMode",
                                                desp: "标题排列方式",
                                                defaultValue: "col",
                                                type: "string_select",
                                                valueArray: [ "row", "col" ],
                                                despArray: [ "同列排列", "同行排列" ]
                                            }, {
                                                name: "label",
                                                desp: "标题",
                                                defaultValue: "标题",
                                                type: "string_input"
                                            }, {
                                                name: "placeholder",
                                                desp: "placeholder",
                                                defaultValue: "请选择",
                                                type: "string_input"
                                            }, {
                                                name: "dataType",
                                                desp: "初始数据定义",
                                                defaultValue: "def",
                                                type: "string_select",
                                                valueArray: [ "def", "cus" ],
                                                despArray: [ "默认", "字段映射" ]
                                            }, {
                                                require: {
                                                    dataType: "def"
                                                },
                                                name: "optionConfig",
                                                desp: "下拉项",
                                                defaultValue: "",
                                                type: "string_input"
                                            }, {
                                                require: {
                                                    dataType: "cus"
                                                },
                                                name: "options",
                                                desp: "配置项",
                                                defaultValue: "",
                                                type: "array",
                                                attrInEachElement: [ {
                                                    name: "value",
                                                    desp: "值",
                                                    defaultValue: "1",
                                                    type: "string_input"
                                                }, {
                                                    name: "label",
                                                    desp: "文本",
                                                    defaultValue: "选项1",
                                                    type: "string_input"
                                                } ]
                                            }, {
                                                name: "clearable",
                                                desp: "是否可清空",
                                                defaultValue: false,
                                                type: "boolean"
                                            }, {
                                                name: "filterable",
                                                desp: "是否可搜索",
                                                defaultValue: true,
                                                type: "boolean"
                                            }, {
                                                name: "disabled",
                                                desp: "是否禁填",
                                                defaultValue: false,
                                                type: "boolean"
                                            }, {
                                                name: "isRequired",
                                                desp: "是否必填",
                                                defaultValue: false,
                                                type: "boolean"
                                            } ],
                                            css: {
                                                style: [ {
                                                    desp: "标题",
                                                    cssAttrs: "font-size color font-weight",
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
                                        events: {},
                                        id: 1559287884030,
                                        pid: 1559270078656,
                                        mapping: []
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
                                        titleMode: "col",
                                        labelWitdh: "80px",
                                        placeholder: "请选择",
                                        value: "orgId",
                                        clearable: false,
                                        disabled: false,
                                        isRequired: false,
                                        href: "v2-form-input",
                                        component: "v2-form-input",
                                        widget: {
                                            belongTo: "aui",
                                            icon: "iconshurukuang",
                                            type: "form",
                                            href: "v2-form-input",
                                            author: "fengjiarong@agree.com.cn",
                                            version: 51e4,
                                            accept: "foundationRowCtn divCtn",
                                            name: "输入框",
                                            option: [ {
                                                name: "label",
                                                desp: "标题",
                                                defaultValue: "标题",
                                                type: "string_input"
                                            }, {
                                                name: "titleMode",
                                                desp: "标题排列方式",
                                                defaultValue: "col",
                                                type: "string_select",
                                                valueArray: [ "row", "col" ],
                                                despArray: [ "同列排列", "同行排列" ]
                                            }, {
                                                name: "labelWitdh",
                                                desp: "标题宽度",
                                                defaultValue: "80px",
                                                type: "string_input"
                                            }, {
                                                name: "placeholder",
                                                desp: "placeholder",
                                                defaultValue: "请选择",
                                                type: "string_input"
                                            }, {
                                                name: "value",
                                                desp: "值",
                                                defaultValue: "",
                                                type: "string_input"
                                            }, {
                                                name: "clearable",
                                                desp: "是否可清空",
                                                defaultValue: false,
                                                type: "boolean"
                                            }, {
                                                name: "disabled",
                                                desp: "是否禁填",
                                                defaultValue: false,
                                                type: "boolean"
                                            }, {
                                                name: "isRequired",
                                                desp: "是否必填",
                                                defaultValue: false,
                                                type: "boolean"
                                            } ],
                                            css: {
                                                style: [ {
                                                    desp: "标题",
                                                    cssAttrs: "font-size color font-weight",
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
                                        events: {},
                                        id: 1559287888024,
                                        pid: 1559270078656,
                                        mapping: [ {
                                            id: 1559287888024,
                                            modelValue: "value",
                                            dataValue: "orgId"
                                        } ]
                                    } ],
                                    id: 1559270078656,
                                    pid: 1559270075056
                                }, {
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
                                    direction: "col",
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
                                    href: "v2-layout-rowctn",
                                    component: "v2-layout-rowctn",
                                    widget: {
                                        belongTo: "aui",
                                        icon: "iconshuxiangbuju",
                                        type: "layout",
                                        href: "v2-layout-rowctn",
                                        author: "zhanghaixian@agree.com.cn",
                                        version: 51e4,
                                        accept: "",
                                        name: "竖向布局",
                                        option: [ {
                                            name: "direction",
                                            desp: "排列方式",
                                            defaultValue: "col",
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
                                                desp: "子容器",
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
                                            borderStyle: {
                                                "border-color": ""
                                            },
                                            fontStyle: {
                                                color: ""
                                            }
                                        },
                                        label: "标题",
                                        labelWitdh: "80px",
                                        titleMode: "col",
                                        placeholder: "提示文本",
                                        filterable: true,
                                        isRequired: false,
                                        value: "[]",
                                        trigger: "click",
                                        options: [ {
                                            active: "true",
                                            value: "1",
                                            label: "选项1",
                                            children: [ {
                                                active: "true",
                                                value: "2",
                                                label: "选项2",
                                                children: [ {
                                                    active: "true",
                                                    value: "3",
                                                    label: "选项3"
                                                }, {
                                                    active: true,
                                                    value: "3",
                                                    label: "选项3"
                                                } ]
                                            }, {
                                                active: true,
                                                value: "2",
                                                label: "选项2",
                                                children: [ {
                                                    active: "true",
                                                    value: "3",
                                                    label: "选项3"
                                                }, {
                                                    active: true,
                                                    value: "3",
                                                    label: "选项3"
                                                } ]
                                            } ]
                                        }, {
                                            active: true,
                                            value: "1",
                                            label: "选项1",
                                            children: [ {
                                                active: "true",
                                                value: "2",
                                                label: "选项2",
                                                children: [ {
                                                    active: "true",
                                                    value: "3",
                                                    label: "选项3"
                                                }, {
                                                    active: true,
                                                    value: "3",
                                                    label: "选项3"
                                                } ]
                                            }, {
                                                active: true,
                                                value: "2",
                                                label: "选项2",
                                                children: [ {
                                                    active: "true",
                                                    value: "3",
                                                    label: "选项3"
                                                }, {
                                                    active: true,
                                                    value: "3",
                                                    label: "选项3"
                                                } ]
                                            } ]
                                        } ],
                                        href: "v2-form-cascader",
                                        component: "v2-form-cascader",
                                        widget: {
                                            belongTo: "aui",
                                            icon: "iconjilianxuanze",
                                            type: "form",
                                            href: "v2-form-cascader",
                                            author: "fengjiarong@agree.com.cn",
                                            version: 51e4,
                                            accept: "foundationRowCtn divCtn",
                                            name: "级联选择器",
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
                                                defaultValue: "col",
                                                type: "string_select",
                                                valueArray: [ "row", "col" ],
                                                despArray: [ "同列排列", "同行排列" ]
                                            }, {
                                                name: "placeholder",
                                                desp: "提示文本",
                                                defaultValue: "提示文本",
                                                type: "string_input"
                                            }, {
                                                name: "filterable",
                                                desp: "是否使用搜索",
                                                defaultValue: true,
                                                type: "boolean"
                                            }, {
                                                name: "isRequired",
                                                desp: "是否必填",
                                                defaultValue: false,
                                                type: "boolean"
                                            }, {
                                                name: "value",
                                                desp: "选择值",
                                                defaultValue: [],
                                                type: "string_input"
                                            }, {
                                                name: "trigger",
                                                desp: "触发子菜单方式",
                                                defaultValue: "click",
                                                type: "string_select",
                                                valueArray: [ "click", "hover" ],
                                                despArray: [ "click", "hover" ]
                                            }, {
                                                name: "options",
                                                desp: "配置项",
                                                type: "array",
                                                appendNumber: 1,
                                                attrInEachElement: [ {
                                                    name: "value",
                                                    desp: "选项值",
                                                    defaultValue: "1",
                                                    type: "string_input"
                                                }, {
                                                    name: "label",
                                                    desp: "选项文本",
                                                    defaultValue: "选项1",
                                                    type: "string_input"
                                                }, {
                                                    name: "children",
                                                    desp: "子选项",
                                                    defaultValue: "",
                                                    type: "array",
                                                    appendNumber: 1,
                                                    attrInEachElement: [ {
                                                        name: "value",
                                                        desp: "选项值",
                                                        defaultValue: "2",
                                                        type: "string_input"
                                                    }, {
                                                        name: "label",
                                                        desp: "选项文本",
                                                        defaultValue: "选项2",
                                                        type: "string_input"
                                                    }, {
                                                        name: "children",
                                                        desp: "子选项",
                                                        defaultValue: "",
                                                        type: "array",
                                                        appendNumber: 1,
                                                        attrInEachElement: [ {
                                                            name: "value",
                                                            desp: "选项值",
                                                            defaultValue: "3",
                                                            type: "string_input"
                                                        }, {
                                                            name: "label",
                                                            desp: "选项文本",
                                                            defaultValue: "选项3",
                                                            type: "string_input"
                                                        } ],
                                                        append: [ {} ]
                                                    } ],
                                                    append: [ {} ]
                                                } ],
                                                append: [ {} ]
                                            } ],
                                            css: {
                                                style: [ {
                                                    desp: "标题",
                                                    cssAttrs: "font-size color font-weight",
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
                                        events: {},
                                        id: 1559297788482,
                                        pid: 1559270080534
                                    }, {
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
                                        titleMode: "col",
                                        value: "",
                                        labelWitdh: "80px",
                                        options: [ {
                                            active: "true",
                                            value: "备选项",
                                            disabled: false,
                                            isRequired: false
                                        }, {
                                            active: true,
                                            value: "备选项",
                                            disabled: false,
                                            isRequired: false
                                        } ],
                                        href: "v2-form-checkbox",
                                        component: "v2-form-checkbox",
                                        widget: {
                                            belongTo: "aui",
                                            icon: "iconfuxuankuang",
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
                                                defaultValue: "col",
                                                type: "string_select",
                                                valueArray: [ "row", "col" ],
                                                despArray: [ "同列排列", "同行排列" ]
                                            }, {
                                                name: "value",
                                                desp: "值",
                                                defaultValue: "",
                                                type: "string_input"
                                            }, {
                                                name: "labelWitdh",
                                                desp: "标题宽度",
                                                defaultValue: "80px",
                                                type: "string_input"
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
                                                }, {
                                                    name: "isRequired",
                                                    desp: "是否必填",
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
                                        events: {},
                                        id: 1559297790191,
                                        pid: 1559270080534
                                    } ],
                                    id: 1559270080534,
                                    pid: 1559270075056
                                } ],
                                id: 1559270075056,
                                pid: 1559270073346
                            }, {
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
                                    icon: "iconhengxiangbuju",
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
                                    direction: "col",
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
                                    href: "v2-layout-rowctn",
                                    component: "v2-layout-rowctn",
                                    widget: {
                                        belongTo: "aui",
                                        icon: "iconshuxiangbuju",
                                        type: "layout",
                                        href: "v2-layout-rowctn",
                                        author: "zhanghaixian@agree.com.cn",
                                        version: 51e4,
                                        accept: "",
                                        name: "竖向布局",
                                        option: [ {
                                            name: "direction",
                                            desp: "排列方式",
                                            defaultValue: "col",
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
                                                desp: "子容器",
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
                                    children: [ null, {
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
                                        titleMode: "col",
                                        value: 1,
                                        disabled: false,
                                        isRequired: false,
                                        min: "1",
                                        max: "10",
                                        step: "1",
                                        precision: "1",
                                        href: "v2-form-inputnumber",
                                        component: "v2-form-inputnumber",
                                        widget: {
                                            belongTo: "aui",
                                            icon: "iconshuzhishuru",
                                            type: "form",
                                            href: "v2-form-inputnumber",
                                            author: "fengjiarong@agree.com.cn",
                                            version: 51e4,
                                            accept: "foundationRowCtn divCtn",
                                            name: "数值输入框",
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
                                                defaultValue: "col",
                                                type: "string_select",
                                                valueArray: [ "row", "col" ],
                                                despArray: [ "同列排列", "同行排列" ]
                                            }, {
                                                name: "value",
                                                desp: "值",
                                                defaultValue: 1,
                                                type: "string_input"
                                            }, {
                                                name: "disabled",
                                                desp: "是否禁用",
                                                defaultValue: false,
                                                type: "boolean"
                                            }, {
                                                name: "isRequired",
                                                desp: "是否必填",
                                                defaultValue: false,
                                                type: "boolean"
                                            }, {
                                                name: "min",
                                                desp: "最小值",
                                                defaultValue: 1,
                                                type: "string_input"
                                            }, {
                                                name: "max",
                                                desp: "最大值",
                                                defaultValue: 10,
                                                type: "string_input"
                                            }, {
                                                name: "step",
                                                desp: "步幅",
                                                defaultValue: 1,
                                                type: "string_input"
                                            }, {
                                                name: "precision",
                                                desp: "精度",
                                                defaultValue: 1,
                                                type: "string_input"
                                            } ],
                                            css: {
                                                style: [ {
                                                    desp: "标题",
                                                    cssAttrs: "font-size color font-weight",
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
                                        events: {},
                                        id: 1559297794960,
                                        pid: 1559270082199
                                    } ],
                                    id: 1559270082199,
                                    pid: 1559270076912
                                }, {
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
                                    direction: "col",
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
                                    href: "v2-layout-rowctn",
                                    component: "v2-layout-rowctn",
                                    widget: {
                                        belongTo: "aui",
                                        icon: "iconshuxiangbuju",
                                        type: "layout",
                                        href: "v2-layout-rowctn",
                                        author: "zhanghaixian@agree.com.cn",
                                        version: 51e4,
                                        accept: "",
                                        name: "竖向布局",
                                        option: [ {
                                            name: "direction",
                                            desp: "排列方式",
                                            defaultValue: "col",
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
                                                desp: "子容器",
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
                                            borderStyle: {
                                                "border-color": ""
                                            },
                                            fontStyle: {
                                                color: ""
                                            }
                                        },
                                        label: "标题",
                                        labelWitdh: "80px",
                                        titleMode: "col",
                                        value: 1,
                                        disabled: false,
                                        isRequired: false,
                                        min: "1",
                                        max: "10",
                                        step: "1",
                                        precision: "1",
                                        href: "v2-form-inputnumber",
                                        component: "v2-form-inputnumber",
                                        widget: {
                                            belongTo: "aui",
                                            icon: "iconshuzhishuru",
                                            type: "form",
                                            href: "v2-form-inputnumber",
                                            author: "fengjiarong@agree.com.cn",
                                            version: 51e4,
                                            accept: "foundationRowCtn divCtn",
                                            name: "数值输入框",
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
                                                defaultValue: "col",
                                                type: "string_select",
                                                valueArray: [ "row", "col" ],
                                                despArray: [ "同列排列", "同行排列" ]
                                            }, {
                                                name: "value",
                                                desp: "值",
                                                defaultValue: 1,
                                                type: "string_input"
                                            }, {
                                                name: "disabled",
                                                desp: "是否禁用",
                                                defaultValue: false,
                                                type: "boolean"
                                            }, {
                                                name: "isRequired",
                                                desp: "是否必填",
                                                defaultValue: false,
                                                type: "boolean"
                                            }, {
                                                name: "min",
                                                desp: "最小值",
                                                defaultValue: 1,
                                                type: "string_input"
                                            }, {
                                                name: "max",
                                                desp: "最大值",
                                                defaultValue: 10,
                                                type: "string_input"
                                            }, {
                                                name: "step",
                                                desp: "步幅",
                                                defaultValue: 1,
                                                type: "string_input"
                                            }, {
                                                name: "precision",
                                                desp: "精度",
                                                defaultValue: 1,
                                                type: "string_input"
                                            } ],
                                            css: {
                                                style: [ {
                                                    desp: "标题",
                                                    cssAttrs: "font-size color font-weight",
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
                                        events: {},
                                        id: 1559297821667,
                                        pid: 1559270083943
                                    }, {
                                        style: {
                                            label: {
                                                "font-size": "",
                                                "font-weight": "",
                                                color: ""
                                            },
                                            radio: {
                                                margin: "",
                                                "border-width": "",
                                                "border-radius": "",
                                                padding: "",
                                                height: "",
                                                width: ""
                                            },
                                            font: {
                                                "padding-left": "",
                                                "font-size": "",
                                                color: ""
                                            }
                                        },
                                        label: "标题",
                                        labelWitdh: "80px",
                                        titleMode: "col",
                                        value: "",
                                        isRequired: false,
                                        options: [ {
                                            active: "true",
                                            text: "文本",
                                            disabled: false,
                                            border: false,
                                            label: ""
                                        }, {
                                            active: true,
                                            text: "文本",
                                            disabled: false,
                                            border: false,
                                            label: ""
                                        } ],
                                        href: "v2-form-radio",
                                        component: "v2-form-radio",
                                        widget: {
                                            belongTo: "aui",
                                            icon: "icondanxuankuang",
                                            type: "form",
                                            href: "v2-form-radio",
                                            author: "fengjiarong@agree.com.cn",
                                            version: 51e4,
                                            accept: "foundationRowCtn divCtn",
                                            name: "单选框",
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
                                                defaultValue: "col",
                                                type: "string_select",
                                                valueArray: [ "row", "col" ],
                                                despArray: [ "同列排列", "同行排列" ]
                                            }, {
                                                name: "value",
                                                desp: "选中的值",
                                                defaultValue: "",
                                                type: "string_input"
                                            }, {
                                                name: "isRequired",
                                                desp: "是否必填",
                                                defaultValue: false,
                                                type: "boolean"
                                            }, {
                                                name: "options",
                                                desp: "配置项",
                                                defaultValue: "",
                                                type: "array",
                                                appendNumber: 1,
                                                attrInEachElement: [ {
                                                    name: "text",
                                                    desp: "文本",
                                                    defaultValue: "文本",
                                                    type: "string_input"
                                                }, {
                                                    name: "disabled",
                                                    desp: "是否禁用",
                                                    defaultValue: false,
                                                    type: "boolean"
                                                }, {
                                                    name: "border",
                                                    desp: "是否带边框",
                                                    defaultValue: false,
                                                    type: "boolean"
                                                }, {
                                                    name: "label",
                                                    desp: "对应值",
                                                    defaultValue: false,
                                                    type: "string_input"
                                                } ],
                                                append: [ {} ]
                                            } ],
                                            css: {
                                                style: [ {
                                                    desp: "标题",
                                                    cssAttrs: "font-size color font-weight",
                                                    name: "label"
                                                }, {
                                                    desp: "单选框",
                                                    cssAttrs: "width height border-width border-radius padding margin",
                                                    name: "radio"
                                                }, {
                                                    desp: "选项文字",
                                                    cssAttrs: "font-size  color padding-left",
                                                    name: "font"
                                                } ]
                                            },
                                            main: "index.vue"
                                        },
                                        children: [],
                                        events: {},
                                        id: 1559297824322,
                                        pid: 1559270083943
                                    } ],
                                    id: 1559270083943,
                                    pid: 1559270076912
                                } ],
                                id: 1559270076912,
                                pid: 1559270073346
                            } ],
                            id: 1559270073346,
                            pid: 1559214383876
                        }, null ],
                        id: 1559214383876,
                        pid: "root"
                    }, null ],
                    events: {}
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
    mounted() {
        /**bind**/
        this.$store.commit("bind", {
            vueObj: this,
            data: this.orgId,
            dataStr: "orgId",
            wid: 1559287888024,
            modelKey: "value"
        });
        /**bind over**/    },
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {
        /**unBind**/ this.$store("unbind", this) /**unBind over**/;
    },
    destroyed() {}
};</script>