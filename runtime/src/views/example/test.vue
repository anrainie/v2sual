<template><v2container :wid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559214383876" :wid="`1559214383876`" :index="0" :pid="`root`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559270073346" :wid="`1559270073346`" :index="0" :pid="`1559214383876`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559270075056" :wid="`1559270075056`" :index="0" :pid="`1559270073346`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559270078656" :wid="`1559270078656`" :index="0" :pid="`1559270075056`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-form-select class="V2Widget" id="1559271761550" :wid="`1559271761550`" :index="0" :pid="`1559270078656`"></v2-form-select></el-col><el-col class="V2ContainerBlock" :span="12" key="1" style="height:100%;"><v2empty class="V2Empty" id="1559270078656-1" :wid="`1559270078656-1`" :index="1" :pid="`1559270078656`"></v2empty></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1559270080534" :wid="`1559270080534`" :index="1" :pid="`1559270075056`"><el-col class="V2ContainerBlock borderBox dashBorder" :span="12" key="0" style="height:100%;"><v2-component-btn class="V2Widget" id="1559272065466" :wid="`1559272065466`" :index="0" :pid="`1559270080534`"></v2-component-btn></el-col><el-col class="V2ContainerBlock" :span="12" key="1" style="height:100%;"><v2empty class="V2Empty" id="1559270080534-1" :wid="`1559270080534-1`" :index="1" :pid="`1559270080534`"></v2empty></el-col></v2container></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1559270076912" :wid="`1559270076912`" :index="1" :pid="`1559270073346`"><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="0"><v2container id="1559270082199" :wid="`1559270082199`" :index="0" :pid="`1559270076912`"><el-col class="V2ContainerBlock" :span="12" key="0" style="height:100%;"><v2empty class="V2Empty" id="1559270082199-0" :wid="`1559270082199-0`" :index="0" :pid="`1559270082199`"></v2empty></el-col><el-col class="V2ContainerBlock" :span="12" key="1" style="height:100%;"><v2empty class="V2Empty" id="1559270082199-1" :wid="`1559270082199-1`" :index="1" :pid="`1559270082199`"></v2empty></el-col></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2container id="1559270083943" :wid="`1559270083943`" :index="1" :pid="`1559270076912`"><el-col class="V2ContainerBlock" :span="12" key="0" style="height:100%;"><v2empty class="V2Empty" id="1559270083943-0" :wid="`1559270083943-0`" :index="0" :pid="`1559270083943`"></v2empty></el-col><el-col class="V2ContainerBlock" :span="12" key="1" style="height:100%;"><v2empty class="V2Empty" id="1559270083943-1" :wid="`1559270083943-1`" :index="1" :pid="`1559270083943`"></v2empty></el-col></v2container></el-row></v2container></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="1559214383876-1" :wid="`1559214383876-1`" :index="1" :pid="`1559214383876`"></v2empty></el-row></v2container></el-row><el-row class="V2ContainerBlock" style="height:50%;width:100%;" key="1"><v2empty class="V2Empty" id="root-1" :wid="`root-1`" :index="1" :pid="`root`"></v2empty></el-row></v2container></template>
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
                                        label: "机构号",
                                        placeholder: "请选择",
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
                                        isRequired: false,
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
                                        events: [],
                                        id: 1559271761550,
                                        pid: 1559270078656,
                                        mapping: [ {
                                            id: 1559271761550,
                                            modelValue: "placeholder",
                                            dataValue: "请选择"
                                        }, {
                                            id: 1559271761550,
                                            modelValue: "optionConfig",
                                            dataValue: "orgList"
                                        } ]
                                    }, null ],
                                    events: [],
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
                                        theme: {
                                            function: ""
                                        },
                                        style: {
                                            backgroundColor: {
                                                "background-color": "",
                                                height: "",
                                                width: "",
                                                color: ""
                                            },
                                            icon: {
                                                "font-size": "",
                                                "font-weight": "",
                                                color: ""
                                            },
                                            hoverBtn: {
                                                "background-color": "",
                                                "border-width": "",
                                                "border-color": "",
                                                color: ""
                                            },
                                            activeBtn: {
                                                "background-color": "",
                                                "border-width": "",
                                                "border-color": "",
                                                color: ""
                                            }
                                        },
                                        btnName: "按钮",
                                        btnType: "primary",
                                        shape: "plain",
                                        loading: false,
                                        disabled: false,
                                        func: "btnClick",
                                        href: "v2-component-btn",
                                        component: "v2-component-btn",
                                        widget: {
                                            belongTo: "aui",
                                            icon: "iconanniu",
                                            type: "component",
                                            href: "v2-component-btn",
                                            author: "zhanghaixian@agree.com.cn",
                                            version: 51e4,
                                            accept: "divCtn",
                                            name: "按钮",
                                            option: [ {
                                                type: "string_input",
                                                name: "btnName",
                                                defaultValue: "按钮",
                                                disabled: true,
                                                desp: "按钮"
                                            }, {
                                                defaultValue: "",
                                                valueArray: [ "primary", "success", "info", "warning", "danger", "text" ],
                                                type: "string_select",
                                                desp: "类型",
                                                despArray: [ "主要", "成功", "信息", "警告", "危险", "文字" ],
                                                name: "btnType"
                                            }, {
                                                defaultValue: "",
                                                valueArray: [ "plain", "round", "circle" ],
                                                type: "string_select",
                                                desp: "形状",
                                                despArray: [ "朴素", "圆角", "圆形" ],
                                                name: "shape"
                                            }, {
                                                defaultValue: false,
                                                type: "boolean",
                                                name: "loading",
                                                desp: "是否加载状态"
                                            }, {
                                                defaultValue: false,
                                                type: "boolean",
                                                name: "disabled",
                                                desp: "是否禁用状态"
                                            }, {
                                                name: "func",
                                                desp: "关联方法",
                                                defaultValue: "btnClick",
                                                type: "string_input"
                                            } ],
                                            css: {
                                                style: [ {
                                                    desp: "按钮样式",
                                                    cssAttrs: "background-color width height color",
                                                    name: "backgroundColor"
                                                }, {
                                                    desp: "图标",
                                                    cssAttrs: "font-weight font-size color",
                                                    name: "icon"
                                                }, {
                                                    desp: "按钮hover",
                                                    cssAttrs: "background-color border-width border-color color ",
                                                    name: "hoverBtn"
                                                }, {
                                                    desp: "按钮激活",
                                                    cssAttrs: "background-color border-width border-color color ",
                                                    name: "activeBtn"
                                                } ],
                                                theme: [ {
                                                    template: "<button class='btn'></button>",
                                                    desp: "功能",
                                                    cssAttrs: "",
                                                    name: "function",
                                                    zoom: .8,
                                                    valueArray: [ "btn-focus", "btn-normal", "btn-textBtn", "btn-danger", "btn-custom" ],
                                                    despArray: [ "焦点", "普通", "文字", "警告", "自定义" ],
                                                    type: "themeClass",
                                                    style: "height: auto"
                                                } ]
                                            },
                                            main: "index.vue"
                                        },
                                        children: [],
                                        events: [],
                                        id: 1559272065466,
                                        pid: 1559270080534
                                    }, null ],
                                    events: [],
                                    id: 1559270080534,
                                    pid: 1559270075056
                                } ],
                                events: [],
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
                                    children: [ null, null ],
                                    events: [],
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
                                    children: [ null, null ],
                                    events: [],
                                    id: 1559270083943,
                                    pid: 1559270076912
                                } ],
                                events: [],
                                id: 1559270076912,
                                pid: 1559270073346
                            } ],
                            events: [],
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
    beforeCreate() {
        const ctx = this;
        /**overView beforeCreate**/ (async () => {
            const t1 = await pipe.getExcelData("机构表", (e, index) => {
                e;
            });
        })();
 /**overView over**/    },
    created() {},
    beforeMount() {},
    mounted() {
        /**bind**/
        this.$store.commit("bind", {
            vueObj: this,
            data: this.请选择,
            dataStr: "请选择",
            wid: 1559271761550,
            modelKey: "placeholder"
        });
        this.$store.commit("bind", {
            vueObj: this,
            data: this.orgList,
            dataStr: "orgList",
            wid: 1559271761550,
            modelKey: "optionConfig"
        });
        /**bind over**/    },
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {
        /**unBind**/ this.$store("unbind", this) /**unBind over**/;
    },
    destroyed() {}
};</script>