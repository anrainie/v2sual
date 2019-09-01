<template>
<v2container :wid="`root`">
    <el-row class="V2ContainerBlock" style="height:;" key="0">
        <v2container id="1565940916625" :wid="`1565940916625`" :index="0" :pid="`root`">
            <el-col class="V2ContainerBlock borderBox dashBorder" :class="[`eb-grid eb-grid--blue eb-grid--radius eb-index__shortcuts`]" style="width:100px;" key="0">
                <v2loop class="V2Widget" id="1567256600180" :wid="`1567256600180`" :index="0" :pid="`1565940916625`"><template v-slot="scope">
                        <v2-ebank-shortcut class="V2Widget" :id="`1567256600180-${scope._key}`" :wid="`1567256600180-${scope._key}`" :index="scope._key" :pid="`1567256600180`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-shortcut>
                    </template></v2loop>
            </el-col>
            <el-col class="V2ContainerBlock" :class="[`eb-grid eb-grid--blue eb-grid--radius eb-index__bankcards`]" style="width:calc(100% - 140px);" key="1">
                <v2container id="1567256605454" :wid="`1567256605454`" :index="1" :pid="`1565940916625`">
                    <el-row class="V2ContainerBlock borderBox dashBorder" style="height:;" key="0">
                        <v2-ebank-tabs class="V2Widget" id="1567256685776" :wid="`1567256685776`" :index="0" :pid="`1567256605454`"></v2-ebank-tabs>
                    </el-row>
                    <el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-index__bankcards-ctt`]" style="height:;" key="1">
                        <v2loop class="V2Widget" id="1567256703689" :wid="`1567256703689`" :index="1" :pid="`1567256605454`"><template v-slot="scope">
                                <v2-ebank-bankcard class="V2Widget" :id="`1567256703689-${scope._key}`" :wid="`1567256703689-${scope._key}`" :index="scope._key" :pid="`1567256703689`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-bankcard>
                            </template></v2loop>
                    </el-row>
                </v2container>
            </el-col>
        </v2container>
    </el-row>
    <el-row class="V2ContainerBlock" style="height:;" key="1">
        <v2container id="1565940932995" :wid="`1565940932995`" :index="1" :pid="`root`">
            <el-col class="V2ContainerBlock" :class="[`eb-grid eb-grid--blue eb-grid--radius eb-index__favorites`]" style="width:calc(33.33% - 20px);" key="0">
                <v2container id="1567256630655" :wid="`1567256630655`" :index="0" :pid="`1565940932995`">
                    <el-row class="V2ContainerBlock borderBox dashBorder" style="height:;" key="0">
                        <v2-ebank-tabs class="V2Widget" id="1567256641993" :wid="`1567256641993`" :index="0" :pid="`1567256630655`"></v2-ebank-tabs>
                    </el-row>
                    <el-row class="V2ContainerBlock borderBox dashBorder" :class="[`eb-index__favorites-ctn`]" style="height:;" key="1">
                        <v2loop class="V2Widget" id="1567256753355" :wid="`1567256753355`" :index="1" :pid="`1567256630655`"><template v-slot="scope">
                                <v2-ebank-shortcut class="V2Widget" :id="`1567256753355-${scope._key}`" :wid="`1567256753355-${scope._key}`" :index="scope._key" :pid="`1567256753355`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-shortcut>
                            </template></v2loop>
                    </el-row>
                </v2container>
            </el-col>
            <el-col class="V2ContainerBlock" :class="[`eb-grid eb-grid--blue eb-grid--radius eb-index__recommendNotice`]" style="width:calc(33.33% - 20px);" key="1">
                <v2container id="1567256660377" :wid="`1567256660377`" :index="1" :pid="`1565940932995`">
                    <el-row class="V2ContainerBlock borderBox dashBorder" style="height:;" key="0">
                        <v2-ebank-tabs class="V2Widget" id="1567256701586" :wid="`1567256701586`" :index="0" :pid="`1567256660377`"></v2-ebank-tabs>
                    </el-row>
                    <el-row class="V2ContainerBlock borderBox dashBorder" style="height:;" key="1">
                        <v2-switchable class="V2Widget" id="1567256812569" :wid="`1567256812569`" :index="1" :pid="`1567256660377`" activeindex="recommendNoticeTabBar.activeIndex"><template>
                                <v2container id="1567258258287" :wid="`1567258258287`" :index="0" :pid="`1567256812569`" v-if="recommendNoticeTabBar.activeIndex==0">
                                    <el-row class="V2ContainerBlock borderBox dashBorder" style="height:;" key="0">
                                        <v2-component-carousel class="V2Widget" id="1567259069043" :wid="`1567259069043`" :index="0" :pid="`1567258258287`"></v2-component-carousel>
                                    </el-row>
                                    <el-row class="V2ContainerBlock borderBox dashBorder" style="height:;" key="1">
                                        <v2loop class="V2Widget" id="1567258438918" :wid="`1567258438918`" :index="1" :pid="`1567258258287`"><template v-slot="scope">
                                                <v2-ebank-shortcut class="V2Widget" :id="`1567258438918-${scope._key}`" :wid="`1567258438918-${scope._key}`" :index="scope._key" :pid="`1567258438918`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-shortcut>
                                            </template></v2loop>
                                    </el-row>
                                </v2container>
                                <v2container id="1567258295596" :wid="`1567258295596`" :index="1" :pid="`1567256812569`" v-if="recommendNoticeTabBar.activeIndex==1">
                                    <el-row class="V2ContainerBlock borderBox dashBorder" style="height:100%;" key="0">
                                        <v2loop class="V2Widget" id="1567258857426" :wid="`1567258857426`" :index="0" :pid="`1567258295596`"><template v-slot="scope">
                                                <v2-ebank-paragraph class="V2Widget" :id="`1567258857426-${scope._key}`" :wid="`1567258857426-${scope._key}`" :index="scope._key" :pid="`1567258857426`" :cpttype="`loopItem`" :$item="scope._item" :$key="scope._key" :style="scope._style"></v2-ebank-paragraph>
                                            </template></v2loop>
                                    </el-row>
                                </v2container>
                            </template></v2-switchable>
                    </el-row>
                </v2container>
            </el-col>
            <el-col class="V2ContainerBlock borderBox dashBorder" :class="[`eb-grid eb-grid--blue eb-grid--radius eb-index__calendar`]" style="width:calc(33.33% - 20px);" key="2">
                <v2-ebank-calendar class="V2Widget" id="1567256777302" :wid="`1567256777302`" :index="2" :pid="`1565940932995`"></v2-ebank-calendar>
            </el-col>
        </v2container>
    </el-row>
</v2container>
</template>

<script>
import {
    mixins
} from '@v2-lib/vue.spa.plugin';
import {
    root
} from '@v2-lib/v2sual/mixin/v2-view';

export default {
    data() {
        return {
            "CONTENT": {
                structure: {
                    "id": "root",
                    "component": "v2Container",
                    "direction": "row",
                    "layout": ["", ""],
                    "style": {
                        "width": "100%",
                        "height": "100%"
                    },
                    "data": {},
                    "children": [{
                        "direction": "col",
                        "rules": "",
                        "ctnClass": "",
                        "customClass": "",
                        "__type": "",
                        "__loopTarget": "",
                        "__capacity": "1",
                        "component": "v2-layout",
                        "href": "v2-layout",
                        "children": [{
                            "theme": {},
                            "style": {},
                            "icon": "${$item.icon}",
                            "iconPosition": "top",
                            "name": "${$item.name}",
                            "insideRoute": {
                                "useInsideRoute": true,
                                "route": "${$item.route}"
                            },
                            "funcBtn": {
                                "showFuncBtn": false,
                                "funcBtnName": "添加",
                                "funcBtnParams": ""
                            },
                            "funcIcon": {
                                "showFuncIcon": false,
                                "funcIconClass": "el-icon-error",
                                "funcIconParams": ""
                            },
                            "ctnClass": "eb-grid eb-grid--blue eb-grid--radius eb-index__shortcuts",
                            "customClass": "",
                            "__type": "loop",
                            "__loopTarget": "shortcuts",
                            "__capacity": "1",
                            "component": "v2-ebank-shortcut",
                            "href": "v2-ebank-shortcut",
                            "children": [],
                            "events": {},
                            "id": 1567256600180,
                            "pid": 1565940916625,
                            "commonStyle": {
                                "position": "",
                                "top": "",
                                "right": "",
                                "left": "",
                                "bottom": "",
                                "width": "",
                                "height": "",
                                "padding-top": "",
                                "padding-bottom": "",
                                "padding-left": "",
                                "padding-right": "",
                                "margin-top": "",
                                "margin-bottom": "",
                                "margin-left": "",
                                "margin-right": "",
                                "font-size": "",
                                "color": "",
                                "animation-duration": "1s",
                                "animation-delay": ""
                            },
                            "animate": ["", "animated"]
                        }, {
                            "component": "v2-layout",
                            "href": "v2-layout",
                            "layout": ["", ""],
                            "direction": "row",
                            "children": [{
                                "active": "",
                                "tabs": "${bankCardsTabBar.tabs}",
                                "tabsType": "",
                                "hasBtns": true,
                                "btns": "${bankCardsTabBar.btns}",
                                "btnsType": "text",
                                "ctnClass": "",
                                "customClass": "",
                                "__type": "",
                                "__loopTarget": "",
                                "__capacity": "1",
                                "component": "v2-ebank-tabs",
                                "href": "v2-ebank-tabs",
                                "children": [],
                                "events": {},
                                "id": 1567256685776,
                                "pid": 1567256605454,
                                "commonStyle": {
                                    "position": "",
                                    "top": "",
                                    "right": "",
                                    "left": "",
                                    "bottom": "",
                                    "width": "",
                                    "height": "",
                                    "padding-top": "",
                                    "padding-bottom": "",
                                    "padding-left": "",
                                    "padding-right": "",
                                    "margin-top": "",
                                    "margin-bottom": "",
                                    "margin-left": "",
                                    "margin-right": "",
                                    "font-size": "",
                                    "color": "",
                                    "animation-duration": "1s",
                                    "animation-delay": ""
                                },
                                "animate": ["", "animated"]
                            }, {
                                "theme": {},
                                "style": {},
                                "alias": "${$item.alias}",
                                "cardType": "${$item.cardType}",
                                "imgSrc": "${$item.imgSrc}",
                                "cardID": "${$item.cardID}",
                                "funds": "${$item.funds}",
                                "shortcuts": "${$item.shortcuts}",
                                "ctnClass": "eb-index__bankcards-ctt",
                                "customClass": "",
                                "__type": "loop",
                                "__loopTarget": "bankCards",
                                "__capacity": "4",
                                "component": "v2-ebank-bankcard",
                                "href": "v2-ebank-bankcard",
                                "children": [],
                                "events": {},
                                "id": 1567256703689,
                                "pid": 1567256605454,
                                "commonStyle": {
                                    "position": "",
                                    "top": "",
                                    "right": "",
                                    "left": "",
                                    "bottom": "",
                                    "width": "",
                                    "height": "",
                                    "padding-top": "",
                                    "padding-bottom": "",
                                    "padding-left": "",
                                    "padding-right": "",
                                    "margin-top": "",
                                    "margin-bottom": "",
                                    "margin-left": "",
                                    "margin-right": "",
                                    "font-size": "",
                                    "color": "",
                                    "animation-duration": "1s",
                                    "animation-delay": ""
                                },
                                "animate": ["", "animated"]
                            }],
                            "style": {},
                            "pid": "1565940916625-1",
                            "id": 1567256605454,
                            "ctnStyle": [{
                                "position": "",
                                "top": "",
                                "right": "",
                                "left": "",
                                "bottom": "",
                                "width": "",
                                "height": "",
                                "text-align": "",
                                "background-color": "",
                                "padding-top": "",
                                "padding-bottom": "",
                                "padding-left": "",
                                "padding-right": "",
                                "margin-top": "",
                                "margin-bottom": "",
                                "margin-left": "",
                                "margin-right": "",
                                "border-color": "",
                                "border-width": "",
                                "border-style": ""
                            }, {
                                "position": "",
                                "top": "",
                                "right": "",
                                "left": "",
                                "bottom": "",
                                "width": "",
                                "height": "",
                                "text-align": "",
                                "background-color": "",
                                "padding-top": "",
                                "padding-bottom": "",
                                "padding-left": "",
                                "padding-right": "",
                                "margin-top": "",
                                "margin-bottom": "",
                                "margin-left": "",
                                "margin-right": "",
                                "border-color": "",
                                "border-width": "",
                                "border-style": ""
                            }],
                            "ctnClass": "eb-grid eb-grid--blue eb-grid--radius eb-index__bankcards",
                            "customClass": "",
                            "realSize": ["输入", "输入"],
                            "commonStyle": {
                                "position": "",
                                "top": "",
                                "right": "",
                                "left": "",
                                "bottom": "",
                                "width": "",
                                "height": "",
                                "padding-top": "",
                                "padding-bottom": "",
                                "padding-left": "",
                                "padding-right": "",
                                "margin-top": "",
                                "margin-bottom": "",
                                "margin-left": "",
                                "margin-right": "",
                                "font-size": "",
                                "color": "",
                                "animation-duration": "1s",
                                "animation-delay": ""
                            },
                            "animate": ["", "animated"]
                        }],
                        "events": {},
                        "layout": ["100", "calc(100% - 140px)"],
                        "realSize": ["px", "输入"],
                        "id": 1565940916625,
                        "pid": "root",
                        "commonStyle": {
                            "position": "",
                            "top": "",
                            "right": "",
                            "left": "",
                            "bottom": "",
                            "width": "",
                            "height": "",
                            "padding-top": "",
                            "padding-bottom": "",
                            "padding-left": "",
                            "padding-right": "",
                            "margin-top": "",
                            "margin-bottom": "",
                            "margin-left": "",
                            "margin-right": "",
                            "font-size": "",
                            "color": ""
                        },
                        "animate": {
                            "0": "",
                            "1": "animated",
                            "name": "",
                            "duration": 0,
                            "delay": 0,
                            "classCode": ""
                        },
                        "ctnStyle": [{
                            "position": "",
                            "top": "",
                            "right": "",
                            "left": "",
                            "bottom": "",
                            "width": "",
                            "height": "",
                            "text-align": "",
                            "background-color": "",
                            "padding-top": "",
                            "padding-bottom": "",
                            "padding-left": "",
                            "padding-right": "",
                            "margin-top": "",
                            "margin-bottom": "",
                            "margin-left": "",
                            "margin-right": "",
                            "border-color": "",
                            "border-width": "",
                            "border-style": ""
                        }, {
                            "position": "",
                            "top": "",
                            "right": "",
                            "left": "",
                            "bottom": "",
                            "width": "",
                            "height": "",
                            "text-align": "",
                            "background-color": "",
                            "padding-top": "",
                            "padding-bottom": "",
                            "padding-left": "",
                            "padding-right": "",
                            "margin-top": "",
                            "margin-bottom": "",
                            "margin-left": "",
                            "margin-right": "",
                            "border-color": "",
                            "border-width": "",
                            "border-style": ""
                        }]
                    }, {
                        "direction": "col",
                        "rules": "",
                        "ctnClass": "",
                        "customClass": "",
                        "__type": "",
                        "__loopTarget": "",
                        "__capacity": "1",
                        "component": "v2-layout",
                        "href": "v2-layout",
                        "children": [{
                            "component": "v2-layout",
                            "href": "v2-layout",
                            "layout": ["", ""],
                            "direction": "row",
                            "children": [{
                                "active": "",
                                "tabs": "${favoritesTabBar.tabs}",
                                "tabsType": "",
                                "hasBtns": true,
                                "btns": "${favoritesTabBar.btns}",
                                "btnsType": "text",
                                "ctnClass": "",
                                "customClass": "",
                                "__type": "",
                                "__loopTarget": "",
                                "__capacity": "1",
                                "component": "v2-ebank-tabs",
                                "href": "v2-ebank-tabs",
                                "children": [],
                                "events": {},
                                "id": 1567256641993,
                                "pid": 1567256630655,
                                "commonStyle": {
                                    "position": "",
                                    "top": "",
                                    "right": "",
                                    "left": "",
                                    "bottom": "",
                                    "width": "",
                                    "height": "",
                                    "padding-top": "",
                                    "padding-bottom": "",
                                    "padding-left": "",
                                    "padding-right": "",
                                    "margin-top": "",
                                    "margin-bottom": "",
                                    "margin-left": "",
                                    "margin-right": "",
                                    "font-size": "",
                                    "color": "",
                                    "animation-duration": "1s",
                                    "animation-delay": ""
                                },
                                "animate": ["", "animated"]
                            }, {
                                "theme": {},
                                "style": {},
                                "icon": "${$item.icon}",
                                "iconPosition": "top",
                                "name": "${$item.name}",
                                "insideRoute": {
                                    "useInsideRoute": true,
                                    "route": ""
                                },
                                "funcBtn": {
                                    "showFuncBtn": false,
                                    "funcBtnName": "添加",
                                    "funcBtnParams": ""
                                },
                                "funcIcon": {
                                    "showFuncIcon": false,
                                    "funcIconClass": "el-icon-error",
                                    "funcIconParams": ""
                                },
                                "ctnClass": "eb-index__favorites-ctn",
                                "customClass": "",
                                "__type": "loop",
                                "__loopTarget": "favorites",
                                "__capacity": "4",
                                "component": "v2-ebank-shortcut",
                                "href": "v2-ebank-shortcut",
                                "children": [],
                                "events": {},
                                "id": 1567256753355,
                                "pid": 1567256630655,
                                "commonStyle": {
                                    "position": "",
                                    "top": "",
                                    "right": "",
                                    "left": "",
                                    "bottom": "",
                                    "width": "",
                                    "height": "",
                                    "padding-top": "",
                                    "padding-bottom": "",
                                    "padding-left": "",
                                    "padding-right": "",
                                    "margin-top": "",
                                    "margin-bottom": "",
                                    "margin-left": "",
                                    "margin-right": "",
                                    "font-size": "",
                                    "color": "",
                                    "animation-duration": "1s",
                                    "animation-delay": ""
                                },
                                "animate": ["", "animated"]
                            }],
                            "style": {},
                            "pid": "1565940932995-0",
                            "id": 1567256630655,
                            "ctnStyle": [{
                                "position": "",
                                "top": "",
                                "right": "",
                                "left": "",
                                "bottom": "",
                                "width": "",
                                "height": "",
                                "text-align": "",
                                "background-color": "",
                                "padding-top": "",
                                "padding-bottom": "",
                                "padding-left": "",
                                "padding-right": "",
                                "margin-top": "",
                                "margin-bottom": "",
                                "margin-left": "",
                                "margin-right": "",
                                "border-color": "",
                                "border-width": "",
                                "border-style": ""
                            }, {
                                "position": "",
                                "top": "",
                                "right": "",
                                "left": "",
                                "bottom": "",
                                "width": "",
                                "height": "",
                                "text-align": "",
                                "background-color": "",
                                "padding-top": "",
                                "padding-bottom": "",
                                "padding-left": "",
                                "padding-right": "",
                                "margin-top": "",
                                "margin-bottom": "",
                                "margin-left": "",
                                "margin-right": "",
                                "border-color": "",
                                "border-width": "",
                                "border-style": ""
                            }],
                            "ctnClass": "eb-grid eb-grid--blue eb-grid--radius eb-index__favorites",
                            "customClass": "",
                            "realSize": ["输入", "输入"],
                            "commonStyle": {
                                "position": "",
                                "top": "",
                                "right": "",
                                "left": "",
                                "bottom": "",
                                "width": "",
                                "height": "",
                                "padding-top": "",
                                "padding-bottom": "",
                                "padding-left": "",
                                "padding-right": "",
                                "margin-top": "",
                                "margin-bottom": "",
                                "margin-left": "",
                                "margin-right": "",
                                "font-size": "",
                                "color": "",
                                "animation-duration": "1s",
                                "animation-delay": ""
                            },
                            "animate": ["", "animated"],
                            "__type": ""
                        }, {
                            "component": "v2-layout",
                            "href": "v2-layout",
                            "layout": ["", ""],
                            "direction": "row",
                            "children": [{
                                "active": "${recommendNoticeTabBar.activeIndex}",
                                "tabs": "${recommendNoticeTabBar.tabs}",
                                "tabsType": "",
                                "hasBtns": false,
                                "btns": "",
                                "btnsType": "text",
                                "ctnClass": "",
                                "customClass": "",
                                "__type": "",
                                "__loopTarget": "",
                                "__capacity": "1",
                                "component": "v2-ebank-tabs",
                                "href": "v2-ebank-tabs",
                                "children": [],
                                "events": {},
                                "id": 1567256701586,
                                "pid": 1567256660377,
                                "commonStyle": {
                                    "position": "",
                                    "top": "",
                                    "right": "",
                                    "left": "",
                                    "bottom": "",
                                    "width": "",
                                    "height": "",
                                    "padding-top": "",
                                    "padding-bottom": "",
                                    "padding-left": "",
                                    "padding-right": "",
                                    "margin-top": "",
                                    "margin-bottom": "",
                                    "margin-left": "",
                                    "margin-right": "",
                                    "font-size": "",
                                    "color": "",
                                    "animation-duration": "1s",
                                    "animation-delay": ""
                                },
                                "animate": ["", "animated"]
                            }, {
                                "style": {
                                    "iWarpStyle": {
                                        "background-color": "",
                                        "margin": "",
                                        "padding": ""
                                    }
                                },
                                "activeIndex": "recommendNoticeTabBar.activeIndex",
                                "ctnClass": "",
                                "customClass": "",
                                "__type": "",
                                "__loopTarget": "",
                                "__capacity": "1",
                                "component": "v2-switchable",
                                "href": "v2-switchable",
                                "children": [{
                                    "id": 1567258258287,
                                    "pid": 1567256812569,
                                    "component": "v2Container",
                                    "layout": [100],
                                    "position": "row",
                                    "children": [{
                                        "component": "v2-layout",
                                        "href": "v2-layout",
                                        "layout": ["", ""],
                                        "direction": "row",
                                        "children": [{
                                            "style": {},
                                            "list": "${recommendBanners}",
                                            "trigger": "hover",
                                            "autoplay": true,
                                            "interval": "1000",
                                            "indicator": "",
                                            "arrow": "hover",
                                            "type": "",
                                            "direction": "horizontal",
                                            "height": "",
                                            "ctnClass": "",
                                            "customClass": "",
                                            "__type": "",
                                            "__loopTarget": "",
                                            "__capacity": "1",
                                            "component": "v2-component-carousel",
                                            "href": "v2-component-carousel",
                                            "children": [],
                                            "events": {},
                                            "id": 1567259069043,
                                            "pid": 1567258472324,
                                            "commonStyle": {
                                                "position": "",
                                                "top": "",
                                                "right": "",
                                                "left": "",
                                                "bottom": "",
                                                "width": "",
                                                "height": "",
                                                "padding-top": "",
                                                "padding-bottom": "",
                                                "padding-left": "",
                                                "padding-right": "",
                                                "margin-top": "",
                                                "margin-bottom": "",
                                                "margin-left": "",
                                                "margin-right": "",
                                                "font-size": "",
                                                "color": "",
                                                "animation-duration": "1s",
                                                "animation-delay": ""
                                            },
                                            "animate": ["", "animated"]
                                        }, {
                                            "theme": {},
                                            "style": {},
                                            "icon": "${$item.icon}",
                                            "iconPosition": "left",
                                            "name": "${$item.name}",
                                            "insideRoute": {
                                                "useInsideRoute": true,
                                                "route": ""
                                            },
                                            "funcBtn": {
                                                "showFuncBtn": false,
                                                "funcBtnName": "添加",
                                                "funcBtnParams": ""
                                            },
                                            "funcIcon": {
                                                "showFuncIcon": false,
                                                "funcIconClass": "el-icon-error",
                                                "funcIconParams": ""
                                            },
                                            "ctnClass": "",
                                            "customClass": "",
                                            "__type": "loop",
                                            "__loopTarget": "recommendShortcuts",
                                            "__capacity": "2",
                                            "component": "v2-ebank-shortcut",
                                            "href": "v2-ebank-shortcut",
                                            "children": [],
                                            "events": {},
                                            "id": 1567258438918,
                                            "pid": 1567258472324,
                                            "commonStyle": {
                                                "position": "",
                                                "top": "",
                                                "right": "",
                                                "left": "",
                                                "bottom": "",
                                                "width": "",
                                                "height": "",
                                                "padding-top": "",
                                                "padding-bottom": "",
                                                "padding-left": "",
                                                "padding-right": "",
                                                "margin-top": "",
                                                "margin-bottom": "",
                                                "margin-left": "",
                                                "margin-right": "",
                                                "font-size": "",
                                                "color": "",
                                                "animation-duration": "1s",
                                                "animation-delay": ""
                                            },
                                            "animate": ["", "animated"]
                                        }],
                                        "style": {},
                                        "pid": "1567258258287-0",
                                        "id": 1567258472324,
                                        "ctnStyle": [{
                                            "position": "",
                                            "top": "",
                                            "right": "",
                                            "left": "",
                                            "bottom": "",
                                            "width": "",
                                            "height": "",
                                            "text-align": "",
                                            "background-color": "",
                                            "padding-top": "",
                                            "padding-bottom": "",
                                            "padding-left": "",
                                            "padding-right": "",
                                            "margin-top": "",
                                            "margin-bottom": "",
                                            "margin-left": "",
                                            "margin-right": "",
                                            "border-color": "",
                                            "border-width": "",
                                            "border-style": ""
                                        }, {
                                            "position": "",
                                            "top": "",
                                            "right": "",
                                            "left": "",
                                            "bottom": "",
                                            "width": "",
                                            "height": "",
                                            "text-align": "",
                                            "background-color": "",
                                            "padding-top": "",
                                            "padding-bottom": "",
                                            "padding-left": "",
                                            "padding-right": "",
                                            "margin-top": "",
                                            "margin-bottom": "",
                                            "margin-left": "",
                                            "margin-right": "",
                                            "border-color": "",
                                            "border-width": "",
                                            "border-style": ""
                                        }],
                                        "ctnClass": "",
                                        "customClass": "",
                                        "commonStyle": {
                                            "position": "",
                                            "top": "",
                                            "right": "",
                                            "left": "",
                                            "bottom": "",
                                            "width": "",
                                            "height": "",
                                            "padding-top": "",
                                            "padding-bottom": "",
                                            "padding-left": "",
                                            "padding-right": "",
                                            "margin-top": "",
                                            "margin-bottom": "",
                                            "margin-left": "",
                                            "margin-right": "",
                                            "font-size": "",
                                            "color": "",
                                            "animation-duration": "1s",
                                            "animation-delay": ""
                                        },
                                        "animate": [],
                                        "realSize": ["输入", "输入"]
                                    }],
                                    "ctnClass": "",
                                    "customClass": "",
                                    "realSize": ["%"],
                                    "commonStyle": {
                                        "position": "",
                                        "top": "",
                                        "right": "",
                                        "left": "",
                                        "bottom": "",
                                        "width": "",
                                        "height": "",
                                        "padding-top": "",
                                        "padding-bottom": "",
                                        "padding-left": "",
                                        "padding-right": "",
                                        "margin-top": "",
                                        "margin-bottom": "",
                                        "margin-left": "",
                                        "margin-right": "",
                                        "font-size": "",
                                        "color": "",
                                        "animation-duration": "1s",
                                        "animation-delay": ""
                                    },
                                    "animate": ["", "animated"]
                                }, {
                                    "id": 1567258295596,
                                    "pid": 1567256812569,
                                    "component": "v2Container",
                                    "layout": [100],
                                    "position": "row",
                                    "children": [{
                                        "theme": {},
                                        "style": {},
                                        "header": "${$item.header}",
                                        "divider": true,
                                        "content": "${$item.content}",
                                        "indent": false,
                                        "ctnClass": "",
                                        "customClass": "",
                                        "__type": "loop",
                                        "__loopTarget": "noticeCtt",
                                        "__capacity": "1",
                                        "component": "v2-ebank-paragraph",
                                        "href": "v2-ebank-paragraph",
                                        "children": [],
                                        "events": {},
                                        "id": 1567258857426,
                                        "pid": 1567258295596,
                                        "commonStyle": {
                                            "position": "",
                                            "top": "",
                                            "right": "",
                                            "left": "",
                                            "bottom": "",
                                            "width": "",
                                            "height": "",
                                            "padding-top": "",
                                            "padding-bottom": "",
                                            "padding-left": "",
                                            "padding-right": "",
                                            "margin-top": "",
                                            "margin-bottom": "",
                                            "margin-left": "",
                                            "margin-right": "",
                                            "font-size": "",
                                            "color": "",
                                            "animation-duration": "1s",
                                            "animation-delay": ""
                                        },
                                        "animate": ["", "animated"]
                                    }],
                                    "ctnClass": "",
                                    "customClass": "",
                                    "commonStyle": {
                                        "position": "",
                                        "top": "",
                                        "right": "",
                                        "left": "",
                                        "bottom": "",
                                        "width": "",
                                        "height": "",
                                        "padding-top": "",
                                        "padding-bottom": "",
                                        "padding-left": "",
                                        "padding-right": "",
                                        "margin-top": "",
                                        "margin-bottom": "",
                                        "margin-left": "",
                                        "margin-right": "",
                                        "font-size": "",
                                        "color": "",
                                        "animation-duration": "1s",
                                        "animation-delay": ""
                                    },
                                    "animate": ["", "animated"],
                                    "realSize": ["%"],
                                    "ctnStyle": [{
                                        "position": "",
                                        "top": "",
                                        "right": "",
                                        "left": "",
                                        "bottom": "",
                                        "width": "",
                                        "height": "",
                                        "text-align": "",
                                        "background-color": "",
                                        "padding-top": "",
                                        "padding-bottom": "",
                                        "padding-left": "",
                                        "padding-right": "",
                                        "margin-top": "",
                                        "margin-bottom": "",
                                        "margin-left": "",
                                        "margin-right": "",
                                        "border-color": "",
                                        "border-width": "",
                                        "border-style": ""
                                    }]
                                }],
                                "events": {},
                                "customEditor": "v2EditorSwitch",
                                "id": 1567256812569,
                                "pid": 1567256660377,
                                "commonStyle": {
                                    "position": "",
                                    "top": "",
                                    "right": "",
                                    "left": "",
                                    "bottom": "",
                                    "width": "",
                                    "height": "",
                                    "padding-top": "",
                                    "padding-bottom": "",
                                    "padding-left": "",
                                    "padding-right": "",
                                    "margin-top": "",
                                    "margin-bottom": "",
                                    "margin-left": "",
                                    "margin-right": "",
                                    "font-size": "",
                                    "color": "",
                                    "animation-duration": "1s",
                                    "animation-delay": ""
                                },
                                "animate": ["", "animated"],
                                "ctnStyle": [{
                                    "position": "",
                                    "top": "",
                                    "right": "",
                                    "left": "",
                                    "bottom": "",
                                    "width": "",
                                    "height": "",
                                    "text-align": "",
                                    "background-color": "",
                                    "padding-top": "",
                                    "padding-bottom": "",
                                    "padding-left": "",
                                    "padding-right": "",
                                    "margin-top": "",
                                    "margin-bottom": "",
                                    "margin-left": "",
                                    "margin-right": "",
                                    "border-color": "",
                                    "border-width": "",
                                    "border-style": ""
                                }, {
                                    "position": "",
                                    "top": "",
                                    "right": "",
                                    "left": "",
                                    "bottom": "",
                                    "width": "",
                                    "height": "",
                                    "text-align": "",
                                    "background-color": "",
                                    "padding-top": "",
                                    "padding-bottom": "",
                                    "padding-left": "",
                                    "padding-right": "",
                                    "margin-top": "",
                                    "margin-bottom": "",
                                    "margin-left": "",
                                    "margin-right": "",
                                    "border-color": "",
                                    "border-width": "",
                                    "border-style": ""
                                }]
                            }],
                            "style": {},
                            "pid": "1565940932995-1",
                            "id": 1567256660377,
                            "ctnStyle": [{
                                "position": "",
                                "top": "",
                                "right": "",
                                "left": "",
                                "bottom": "",
                                "width": "",
                                "height": "",
                                "text-align": "",
                                "background-color": "",
                                "padding-top": "",
                                "padding-bottom": "",
                                "padding-left": "",
                                "padding-right": "",
                                "margin-top": "",
                                "margin-bottom": "",
                                "margin-left": "",
                                "margin-right": "",
                                "border-color": "",
                                "border-width": "",
                                "border-style": ""
                            }, {
                                "position": "",
                                "top": "",
                                "right": "",
                                "left": "",
                                "bottom": "",
                                "width": "",
                                "height": "",
                                "text-align": "",
                                "background-color": "",
                                "padding-top": "",
                                "padding-bottom": "",
                                "padding-left": "",
                                "padding-right": "",
                                "margin-top": "",
                                "margin-bottom": "",
                                "margin-left": "",
                                "margin-right": "",
                                "border-color": "",
                                "border-width": "",
                                "border-style": ""
                            }],
                            "ctnClass": "eb-grid eb-grid--blue eb-grid--radius eb-index__recommendNotice",
                            "customClass": "",
                            "realSize": ["输入", "输入"],
                            "commonStyle": {
                                "position": "",
                                "top": "",
                                "right": "",
                                "left": "",
                                "bottom": "",
                                "width": "",
                                "height": "",
                                "padding-top": "",
                                "padding-bottom": "",
                                "padding-left": "",
                                "padding-right": "",
                                "margin-top": "",
                                "margin-bottom": "",
                                "margin-left": "",
                                "margin-right": "",
                                "font-size": "",
                                "color": "",
                                "animation-duration": "1s",
                                "animation-delay": ""
                            },
                            "animate": ["", "animated"]
                        }, {
                            "notes": "${calendarNotes}",
                            "ctnClass": "eb-grid eb-grid--blue eb-grid--radius eb-index__calendar",
                            "customClass": "",
                            "__type": "",
                            "__loopTarget": "",
                            "__capacity": "1",
                            "component": "v2-ebank-calendar",
                            "href": "v2-ebank-calendar",
                            "children": [],
                            "events": {},
                            "id": 1567256777302,
                            "pid": 1565940932995,
                            "commonStyle": {
                                "position": "",
                                "top": "",
                                "right": "",
                                "left": "",
                                "bottom": "",
                                "width": "",
                                "height": "",
                                "padding-top": "",
                                "padding-bottom": "",
                                "padding-left": "",
                                "padding-right": "",
                                "margin-top": "",
                                "margin-bottom": "",
                                "margin-left": "",
                                "margin-right": "",
                                "font-size": "",
                                "color": "",
                                "animation-duration": "1s",
                                "animation-delay": ""
                            },
                            "animate": ["", "animated"]
                        }],
                        "events": {},
                        "layout": ["calc(33.33% - 20px)", "calc(33.33% - 20px)", "calc(33.33% - 20px)"],
                        "realSize": ["输入", "输入", "输入"],
                        "id": 1565940932995,
                        "pid": "root",
                        "commonStyle": {
                            "position": "",
                            "top": "",
                            "right": "",
                            "left": "",
                            "bottom": "",
                            "width": "",
                            "height": "",
                            "padding-top": "",
                            "padding-bottom": "",
                            "padding-left": "",
                            "padding-right": "",
                            "margin-top": "",
                            "margin-bottom": "",
                            "margin-left": "",
                            "margin-right": "",
                            "font-size": "",
                            "color": ""
                        },
                        "animate": {
                            "0": "",
                            "1": "animated",
                            "name": "",
                            "duration": 0,
                            "delay": 0,
                            "classCode": ""
                        },
                        "ctnStyle": [{
                            "position": "",
                            "top": "",
                            "right": "",
                            "left": "",
                            "bottom": "",
                            "width": "",
                            "height": "",
                            "text-align": "",
                            "background-color": "",
                            "padding-top": "",
                            "padding-bottom": "",
                            "padding-left": "",
                            "padding-right": "",
                            "margin-top": "",
                            "margin-bottom": "",
                            "margin-left": "",
                            "margin-right": "",
                            "border-color": "",
                            "border-width": "",
                            "border-style": ""
                        }, {
                            "position": "",
                            "top": "",
                            "right": "",
                            "left": "",
                            "bottom": "",
                            "width": "",
                            "height": "",
                            "text-align": "",
                            "background-color": "",
                            "padding-top": "",
                            "padding-bottom": "",
                            "padding-left": "",
                            "padding-right": "",
                            "margin-top": "",
                            "margin-bottom": "",
                            "margin-left": "",
                            "margin-right": "",
                            "border-color": "",
                            "border-width": "",
                            "border-style": ""
                        }, {
                            "position": "",
                            "top": "",
                            "right": "",
                            "left": "",
                            "bottom": "",
                            "width": "",
                            "height": "",
                            "text-align": "",
                            "background-color": "",
                            "padding-top": "",
                            "padding-bottom": "",
                            "padding-left": "",
                            "padding-right": "",
                            "margin-top": "",
                            "margin-bottom": "",
                            "margin-left": "",
                            "margin-right": "",
                            "border-color": "",
                            "border-width": "",
                            "border-style": ""
                        }]
                    }],
                    "events": {},
                    "ctnClass": "",
                    "customClass": "",
                    "realSize": ["输入", "输入"],
                    "commonStyle": {
                        "position": "",
                        "top": "",
                        "right": "",
                        "left": "",
                        "bottom": "",
                        "width": "",
                        "height": "",
                        "padding-top": "",
                        "padding-bottom": "",
                        "padding-left": "",
                        "padding-right": "",
                        "margin-top": "",
                        "margin-bottom": "",
                        "margin-left": "",
                        "margin-right": "",
                        "font-size": "",
                        "color": ""
                    },
                    "animate": {
                        "0": "",
                        "1": "animated",
                        "name": "",
                        "duration": 0,
                        "delay": 0,
                        "classCode": ""
                    },
                    "ctnStyle": [{
                        "position": "",
                        "top": "",
                        "right": "",
                        "left": "",
                        "bottom": "",
                        "width": "",
                        "height": "",
                        "text-align": "",
                        "background-color": "",
                        "padding-top": "",
                        "padding-bottom": "",
                        "padding-left": "",
                        "padding-right": "",
                        "margin-top": "",
                        "margin-bottom": "",
                        "margin-left": "",
                        "margin-right": "",
                        "border-color": "",
                        "border-width": "",
                        "border-style": ""
                    }, {
                        "position": "",
                        "top": "",
                        "right": "",
                        "left": "",
                        "bottom": "",
                        "width": "",
                        "height": "",
                        "text-align": "",
                        "background-color": "",
                        "padding-top": "",
                        "padding-bottom": "",
                        "padding-left": "",
                        "padding-right": "",
                        "margin-top": "",
                        "margin-bottom": "",
                        "margin-left": "",
                        "margin-right": "",
                        "border-color": "",
                        "border-width": "",
                        "border-style": ""
                    }]
                }
            },
            shortcuts: // shortcuts
                [{
                        name: '账户预览',
                        title: '账户预览',
                        icon: 'el-icon-s-finance',
                        // icon: 'http://localhost:7007/img/logo.png',
                        route: {
                            page: "spa/index",
                            path: "/index",
                            type: "BLANK",
                            status: !0,
                            params: {
                                param: "一个参数"
                            }
                        }
                    },
                    {
                        name: '转账',
                        title: '转账',
                        icon: 'el-icon-s-help',
                        route: {
                            page: "spa/queryTransaction",
                            path: "/queryTransaction",
                            type: "BLANK",
                            status: !0,
                            params: {
                                param: "一个参数"
                            }
                        }
                    },
                    {
                        name: '财富',
                        title: '财富',
                        icon: 'el-icon-s-goods',
                        route: {
                            page: "spa/pwdManager",
                            path: "/pwdManager",
                            type: "BLANK",
                            status: !0,
                            params: {
                                param: "一个参数"
                            }
                        }
                    }
                ],
            bankCardsTabBar: // bankCardsTabBar
            {
                tabs: [{
                    text: '我的'
                }],
                btns: [{
                    text: '显示全部余额',
                    icon: 'el-icon-view'
                }]
            },
            bankCards: // bankCards
                [{
                        id: '',
                        alias: '招商银行 | 一卡通',
                        cardType: '借记卡',
                        // imgSrc: '/v1/runtime/img/bankcard-dark.png',
                        imgSrc: 'http://localhost:7007/img/bankcard-dark.png',
                        cardID: '1234 xxxx xxxx 1111',
                        funds: [{
                                title: '定期',
                                sum: '100.00'
                            },
                            {
                                title: '活期',
                                sum: '100.00'
                            },
                        ],
                        // 这里的卡快捷按钮可以考虑固定写在组件里
                        shortcuts: [{
                                id: '',
                                title: '转账汇款',
                                route: {
                                    page: "spa/index",
                                    path: "/index",
                                    type: "BLANK",
                                    status: !0,
                                    params: {
                                        cardID: '1234 xxxx xxxx 2222'
                                    }
                                }
                            },
                            {
                                id: '',
                                title: '生活缴费',
                                route: {
                                    page: "spa/pwdManager",
                                    path: "/pwdManager",
                                    type: "BLANK",
                                    status: !0,
                                    params: {
                                        cardID: '1234 xxxx xxxx 2222'
                                    }
                                }
                            },
                            {
                                id: '',
                                title: '交易查询',
                                route: {
                                    page: "spa/queryTransaction",
                                    path: "/queryTransaction",
                                    type: "BLANK",
                                    status: !0,
                                    params: {
                                        cardID: '1234 xxxx xxxx 2222'
                                    }
                                }
                            },
                        ],
                    },
                    {
                        id: '',
                        alias: '个人账户',
                        cardType: '信用卡',
                        imgSrc: 'http://localhost:7007/img/bankcard-blue.png',
                        cardID: '1234 xxxx xxxx 2222',
                        funds: [{
                                title: '本期账单',
                                sum: '100.00'
                            },
                            {
                                title: '未出账单',
                                sum: '100.00'
                            },
                        ],
                        // 这里的卡快捷按钮可以考虑固定写在组件里
                        shortcuts: [{
                                id: '',
                                title: '转账汇款',
                                route: {
                                    page: "spa/index",
                                    path: "/index",
                                    type: "BLANK",
                                    status: !0,
                                    params: {
                                        cardID: '1234 xxxx xxxx 2222'
                                    }
                                }
                            },
                            {
                                id: '',
                                title: '生活缴费',
                                route: {
                                    page: "spa/pwdManager",
                                    path: "/pwdManager",
                                    type: "BLANK",
                                    status: !0,
                                    params: {
                                        cardID: '1234 xxxx xxxx 2222'
                                    }
                                }
                            },
                            {
                                id: '',
                                title: '交易查询',
                                route: {
                                    page: "spa/queryTransaction",
                                    path: "/queryTransaction",
                                    type: "BLANK",
                                    status: !0,
                                    params: {
                                        cardID: '1234 xxxx xxxx 2222'
                                    }
                                }
                            },
                        ],
                    },
                    {
                        id: '',
                        alias: '招商银行 | 一卡通',
                        cardType: '借记卡',
                        imgSrc: 'http://localhost:7007/img/bankcard-dark.png',
                        cardID: '1234 xxxx xxxx 1111',
                        funds: [{
                                title: '定期',
                                sum: '100.00'
                            },
                            {
                                title: '活期',
                                sum: '100.00'
                            },
                        ],
                        // 这里的卡快捷按钮可以考虑固定写在组件里
                        shortcuts: [{
                                id: '',
                                title: '转账汇款',
                                route: {
                                    page: "spa/index",
                                    path: "/index",
                                    type: "BLANK",
                                    status: !0,
                                    params: {
                                        cardID: '1234 xxxx xxxx 2222'
                                    }
                                }
                            },
                            {
                                id: '',
                                title: '生活缴费',
                                route: {
                                    page: "spa/pwdManager",
                                    path: "/pwdManager",
                                    type: "BLANK",
                                    status: !0,
                                    params: {
                                        cardID: '1234 xxxx xxxx 2222'
                                    }
                                }
                            },
                            {
                                id: '',
                                title: '交易查询',
                                route: {
                                    page: "spa/queryTransaction",
                                    path: "/queryTransaction",
                                    type: "BLANK",
                                    status: !0,
                                    params: {
                                        cardID: '1234 xxxx xxxx 2222'
                                    }
                                }
                            },
                        ],
                    },
                    {
                        id: '',
                        alias: '个人账户',
                        cardType: '信用卡',
                        imgSrc: 'http://localhost:7007/img/bankcard-blue.png',
                        cardID: '1234 xxxx xxxx 2222',
                        funds: [{
                                title: '本期账单',
                                sum: '100.00'
                            },
                            {
                                title: '未出账单',
                                sum: '100.00'
                            },
                        ],
                        // 这里的卡快捷按钮可以考虑固定写在组件里
                        shortcuts: [{
                                id: '',
                                title: '转账汇款',
                                route: {
                                    page: "spa/index",
                                    path: "/index",
                                    type: "BLANK",
                                    status: !0,
                                    params: {
                                        cardID: '1234 xxxx xxxx 2222'
                                    }
                                }
                            },
                            {
                                id: '',
                                title: '生活缴费',
                                route: {
                                    page: "spa/pwdManager",
                                    path: "/pwdManager",
                                    type: "BLANK",
                                    status: !0,
                                    params: {
                                        cardID: '1234 xxxx xxxx 2222'
                                    }
                                }
                            },
                            {
                                id: '',
                                title: '交易查询',
                                route: {
                                    page: "spa/queryTransaction",
                                    path: "/queryTransaction",
                                    type: "BLANK",
                                    status: !0,
                                    params: {
                                        cardID: '1234 xxxx xxxx 2222'
                                    }
                                }
                            },
                        ],
                    },
                ],
            favoritesTabBar: // favoritesTabBar
            {
                tabs: [{
                    text: '我的最爱'
                }],
                btns: [{
                    text: '设置',
                    icon: 'el-icon-setting'
                }]
            },
            favorites: // favorites
                [{
                        name: '账户预览',
                        title: '账户预览',
                        icon: 'el-icon-s-finance',
                        // icon: 'http://localhost:7007/img/custom-aweb-logo.png',
                        route: {
                            page: "spa/index",
                            path: "/index",
                            type: "BLANK",
                            status: !0,
                            params: {
                                param: "一个参数"
                            }
                        }
                    },
                    {
                        name: '转账',
                        title: '转账',
                        icon: 'el-icon-s-help',
                        route: {
                            page: "spa/queryTransaction",
                            path: "/queryTransaction",
                            type: "BLANK",
                            status: !0,
                            params: {
                                param: "一个参数"
                            }
                        }
                    },
                    {
                        name: '财富',
                        title: '财富',
                        icon: 'el-icon-s-goods',
                        route: {
                            page: "spa/pwdManager",
                            path: "/pwdManager",
                            type: "BLANK",
                            status: !0,
                            params: {
                                param: "一个参数"
                            }
                        }
                    },
                    {
                        name: '账户预览',
                        title: '账户预览',
                        icon: 'el-icon-s-finance',
                        // icon: 'http://localhost:7007/img/custom-aweb-logo.png',
                        route: {
                            page: "spa/index",
                            path: "/index",
                            type: "BLANK",
                            status: !0,
                            params: {
                                param: "一个参数"
                            }
                        }
                    },
                    {
                        name: '转账',
                        title: '转账',
                        icon: 'el-icon-s-help',
                        route: {
                            page: "spa/queryTransaction",
                            path: "/queryTransaction",
                            type: "BLANK",
                            status: !0,
                            params: {
                                param: "一个参数"
                            }
                        }
                    },
                    {
                        name: '财富',
                        title: '财富',
                        icon: 'el-icon-s-goods',
                        route: {
                            page: "spa/pwdManager",
                            path: "/pwdManager",
                            type: "BLANK",
                            status: !0,
                            params: {
                                param: "一个参数"
                            }
                        }
                    },
                    {
                        name: '账户预览',
                        title: '账户预览',
                        icon: 'el-icon-s-finance',
                        // icon: 'http://localhost:7007/img/custom-aweb-logo.png',
                        route: {
                            page: "spa/index",
                            path: "/index",
                            type: "BLANK",
                            status: !0,
                            params: {
                                param: "一个参数"
                            }
                        }
                    },
                    {
                        name: '转账',
                        title: '转账',
                        icon: 'el-icon-s-help',
                        route: {
                            page: "spa/queryTransaction",
                            path: "/queryTransaction",
                            type: "BLANK",
                            status: !0,
                            params: {
                                param: "一个参数"
                            }
                        }
                    },
                    {
                        name: '财富',
                        title: '财富',
                        icon: 'el-icon-s-goods',
                        route: {
                            page: "spa/pwdManager",
                            path: "/pwdManager",
                            type: "BLANK",
                            status: !0,
                            params: {
                                param: "一个参数"
                            }
                        }
                    }
                ],
            recommendNoticeTabBar: // recommendNoticeTabBar
            {
                tabs: [{
                        text: '缤纷推荐'
                    },
                    {
                        text: '最新公告'
                    }
                ],
                activeIndex: '0'
            },
            recommendBanners: // recommendBanners
                [{
                        tittle: '扫码登陆',
                        src: 'http://localhost:7007/img/bankcard-blue.png'
                    },
                    {
                        tittle: '现金抽奖',
                        src: 'http://localhost:7007/img/bankcard-dark.png'
                    },
                    {
                        tittle: '刮刮卡',
                        src: 'http://localhost:7007/img/bankcard-light.png'
                    }
                ],
            recommendShortcuts: // recommendShortcuts
                [{
                        name: '特别推荐',
                        title: '特别推荐',
                        icon: 'el-icon-sunny',
                    },
                    {
                        name: '优惠资讯',
                        title: '优惠资讯',
                        icon: 'el-icon-sugar',
                    }
                ],
            noticeCtt: // noticeCtt
                [{
                        id: '',
                        header: '风险提示',
                        content: '风险提示风险提示风险提示风险提示风险提示风险提示风险提示风险提示风险提示风险提示'
                    },
                    {
                        id: '',
                        header: '业务公告',
                        content: '业务公告业务公告业务公告业务公告业务公告业务公告业务公告业务公告业务公告业务公告'
                    }
                ],
            calendarNotes: // calendarNotes
                [
                    [{
                            day: "2019-08-01",
                            header: "08-01",
                            paragraphs: ["便签事件1"]
                        },
                        {
                            day: "2019-08-08",
                            header: "08-08",
                            paragraphs: ["便签事件2"]
                        },
                        {
                            day: "2019-08-12",
                            header: "08-12",
                            paragraphs: ["便签事件3"]
                        },
                        {
                            day: "2019-08-22",
                            header: "08-22",
                            paragraphs: ["便签事件4"]
                        },
                        {
                            day: "2019-08-29",
                            header: "08-29",
                            paragraphs: ["便签事件5"]
                        },
                        {
                            day: "2019-08-30",
                            header: "08-30",
                            paragraphs: ["便签事件6"]
                        }
                    ],
                    [{
                            day: "2019-09-01",
                            header: "09-01",
                            paragraphs: ["便签事件1"]
                        },
                        {
                            day: "2019-09-09",
                            header: "09-09",
                            paragraphs: ["便签事件2"]
                        },
                        {
                            day: "2019-09-12",
                            header: "09-12",
                            paragraphs: ["便签事件3"]
                        },
                        {
                            day: "2019-09-22",
                            header: "09-22",
                            paragraphs: ["便签事件4"]
                        },
                        {
                            day: "2019-09-29",
                            header: "09-29",
                            paragraphs: ["便签事件5"]
                        },
                        {
                            day: "2019-09-30",
                            header: "09-30",
                            paragraphs: ["便签事件6"]
                        }
                    ],
                    [{
                            day: "2019-10-01",
                            header: "10-01",
                            paragraphs: ["便签事件1"]
                        },
                        {
                            day: "2019-10-10",
                            header: "10-10",
                            paragraphs: ["便签事件2"]
                        },
                        {
                            day: "2019-10-12",
                            header: "10-12",
                            paragraphs: ["便签事件3"]
                        },
                        {
                            day: "2019-10-22",
                            header: "10-22",
                            paragraphs: ["便签事件4"]
                        },
                        {
                            day: "2019-10-29",
                            header: "10-29",
                            paragraphs: ["便签事件5"]
                        },
                        {
                            day: "2019-10-30",
                            header: "10-30",
                            paragraphs: ["便签事件6"]
                        }
                    ]
                ]

        }
    },
    props: {

    },
    mixins: [root, mixins],

    methods: {},
    watch: {},
    computed: {},
    beforeCreate() {
        let ctx = this;

    },
    created() {
        let ctx = this;

        /**bind**/
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.shortcuts,
            dataStr: "shortcuts",
            wid: 1565940995955,
            modelKey: "__loopTarget"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.icon",
            wid: 1565940995955,
            modelKey: "icon"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.name",
            wid: 1565940995955,
            modelKey: "name"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.route",
            wid: 1565940995955,
            modelKey: "route"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "classes.ctn1",
            wid: 1565940995955,
            modelKey: "ctnClass"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "classes.comp1",
            wid: 1565940995955,
            modelKey: "customClass"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.bankCardsTabBar.tabs,
            dataStr: "bankCardsTabBar.tabs",
            wid: 1567068987730,
            modelKey: "tabs"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.bankCardsTabBar.btns,
            dataStr: "bankCardsTabBar.btns",
            wid: 1567068987730,
            modelKey: "btns"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.favoritesTabBar.tabs,
            dataStr: "favoritesTabBar.tabs",
            wid: 1567069066913,
            modelKey: "tabs"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.favoritesTabBar.btns,
            dataStr: "favoritesTabBar.btns",
            wid: 1567069066913,
            modelKey: "btns"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.favorites,
            dataStr: "favorites",
            wid: 1567071207399,
            modelKey: "__loopTarget"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.icon",
            wid: 1567071207399,
            modelKey: "icon"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.name",
            wid: 1567071207399,
            modelKey: "name"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.recommendNoticeTabBar.tabs,
            dataStr: "recommendNoticeTabBar.tabs",
            wid: 1567069092926,
            modelKey: "tabs"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.recommendNoticeTabBar.activeIndex,
            dataStr: "recommendNoticeTabBar.activeIndex",
            wid: 1567069092926,
            modelKey: "active"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.recommendNoticeTabBar.activeIndex,
            dataStr: "recommendNoticeTabBar.activeIndex",
            wid: 1567074574476,
            modelKey: "active"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.recommendNoticeTabBar.tabs,
            dataStr: "recommendNoticeTabBar.tabs",
            wid: 1567074574476,
            modelKey: "tabs"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.recommendNoticeTabBar.activeIndex,
            dataStr: "recommendNoticeTabBar.activeIndex",
            wid: 1567074607686,
            modelKey: "activeIndex"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.recommendBanners,
            dataStr: "recommendBanners",
            wid: 1567243708429,
            modelKey: "list"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.recommendShortcuts,
            dataStr: "recommendShortcuts",
            wid: 1567243762474,
            modelKey: "__loopTarget"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.icon",
            wid: 1567243762474,
            modelKey: "icon"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.name",
            wid: 1567243762474,
            modelKey: "name"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.shortcuts,
            dataStr: "shortcuts",
            wid: 1567256600180,
            modelKey: "__loopTarget"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.icon",
            wid: 1567256600180,
            modelKey: "icon"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.name",
            wid: 1567256600180,
            modelKey: "name"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.route",
            wid: 1567256600180,
            modelKey: "route"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.bankCardsTabBar.tabs,
            dataStr: "bankCardsTabBar.tabs",
            wid: 1567256685776,
            modelKey: "tabs"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.bankCardsTabBar.btns,
            dataStr: "bankCardsTabBar.btns",
            wid: 1567256685776,
            modelKey: "btns"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.bankCards,
            dataStr: "bankCards",
            wid: 1567256703689,
            modelKey: "__loopTarget"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.alias",
            wid: 1567256703689,
            modelKey: "alias"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.cardType",
            wid: 1567256703689,
            modelKey: "cardType"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.imgSrc",
            wid: 1567256703689,
            modelKey: "imgSrc"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.cardID",
            wid: 1567256703689,
            modelKey: "cardID"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.funds",
            wid: 1567256703689,
            modelKey: "funds"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.shortcuts",
            wid: 1567256703689,
            modelKey: "shortcuts"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.favorites,
            dataStr: "favorites",
            wid: 1567256753355,
            modelKey: "__loopTarget"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.icon",
            wid: 1567256753355,
            modelKey: "icon"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.name",
            wid: 1567256753355,
            modelKey: "name"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.favoritesTabBar.tabs,
            dataStr: "favoritesTabBar.tabs",
            wid: 1567256641993,
            modelKey: "tabs"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.favoritesTabBar.btns,
            dataStr: "favoritesTabBar.btns",
            wid: 1567256641993,
            modelKey: "btns"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.recommendNoticeTabBar.tabs,
            dataStr: "recommendNoticeTabBar.tabs",
            wid: 1567256701586,
            modelKey: "tabs"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.recommendNoticeTabBar.activeIndex,
            dataStr: "recommendNoticeTabBar.activeIndex",
            wid: 1567256701586,
            modelKey: "active"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.recommendShortcuts,
            dataStr: "recommendShortcuts",
            wid: 1567258438918,
            modelKey: "__loopTarget"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.icon",
            wid: 1567258438918,
            modelKey: "icon"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.name",
            wid: 1567258438918,
            modelKey: "name"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.recommendNoticeTabBar.activeIndex,
            dataStr: "recommendNoticeTabBar.activeIndex",
            wid: 1567256812569,
            modelKey: "activeIndex"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.noticeCtt,
            dataStr: "noticeCtt",
            wid: 1567258857426,
            modelKey: "__loopTarget"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.header",
            wid: 1567258857426,
            modelKey: "header"
        });
        ctx.$store.commit("registerBind", {
            dataStr: "$item.content",
            wid: 1567258857426,
            modelKey: "content"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.recommendBanners,
            dataStr: "recommendBanners",
            wid: 1567259069043,
            modelKey: "list"
        });
        ctx.$store.commit("registerBind", {
            vueObj: this,
            data: this.calendarNotes,
            dataStr: "calendarNotes",
            wid: 1567256777302,
            modelKey: "notes"
        }); /**bind over**/
    },
    beforeMount() {
        let ctx = this;

    },
    mounted() {
        let ctx = this;

    },
    beforeUpdate() {
        let ctx = this;

    },
    updated() {
        let ctx = this;

    },
    beforeDestroy() {
        let ctx = this;

    },
    destroyed() {
        let ctx = this;

    },
    deactivated() {
        /**页面切出**/
        let ctx = this;

    },
    activated() {
        /**页面切入**/
        let ctx = this;

    },

};
</script>

<style lang="scss">

</style>
