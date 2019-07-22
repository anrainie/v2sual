/**
 * 用于v2container的json和template转换
 */
const jsdom = require('jsdom');
const JSDOM = jsdom.JSDOM;
var document = new JSDOM('').window.document;

//=================================================== json转html ===========================================================
const v2Layout = ['v2-layout-colctn','v2-layout-rowctn','v2-layout','v2Container'];//转为v2container
let dataBasket = [];//自定义组件的数据篮子

let blockClass = function (index, parent) {
    if (parent && parent.children[index] && !parent.children[index].layout) {
        return ' borderBox dashBorder';
    } else {
        return '';
    }
}
let layout_c = function (json) {
    if (json.layout) {
        if (typeof json.layout === "string") {
            return JSON.parse(json.layout);
        } else {
            return json.layout;
        }
    } else {
        return [50, 50];
    }
}

//判断json对象是否为空
let isEmptyJson = function (json) {
    return json === null || json === undefined || JSON.stringify(json) === '{}';
}

let appendComponent = function(parent,index,element){
    let child = parent.children[index];
    if(child === undefined){
        child = null;
        parent.children[index] = null;
    }
    let wid = child ? child.id : parent.wid + '-' + index;
    let eCom = null;
    let isContainer = false;
    if(child === null){
        eCom =  document.createElement('v2empty');
        eCom.setAttribute('class','V2Empty');
    }else if(v2Layout.includes(child.component)){
        eCom =  document.createElement('v2container');
        isContainer = true;
        child.wid = wid;
    }else if(child.__type === 'loop'){
        eCom = document.createElement('v2loop');
        child.wid = wid;
        eCom.setAttribute('class','V2Widget');
        let template = document.createElement('template');
        template.setAttribute('v-slot','scope');
        let component = document.createElement(child.component);
        component.setAttribute('class','V2Widget');
        //组件.布局
        if(child && child.layoutClass && child.layoutClass !== ''){
            let layoutClass = '';
            child.layoutClass.map((item)=>{
               layoutClass = layoutClass + item + ' ';
            })
            component.setAttribute(':class',"'"+layoutClass+"'");
        }
        component.setAttribute(':id','`'+wid+'-${scope._key}`');
        component.setAttribute(':wid','`'+wid+'-${scope._key}`');
        component.setAttribute(':index','scope._key');
        component.setAttribute(':pid','`'+wid+'`');
        component.setAttribute(':cpttype','`loopItem`');
        component.setAttribute(':item','scope._item');
        component.setAttribute(':key','scope._key');
        //dataBasket不为空=>自定义组件
        if(child && child.dataBasket){
            for(let item in child.dataBasket){
                if(!child.dataBasket[item]){
                    continue;
                }
                if(child.dataBasket[item].startsWith('$item')){
                    component.setAttribute(':'+item,'scope._item.'+child.dataBasket[item].replace('$item.',''));
                }else{
                    component.setAttribute(':'+item,child.dataBasket[item]);
                }
                if(item != item.toLocaleLowerCase()){
                    let key = ':'+item.toLocaleLowerCase()+'="'+component.getAttribute(':'+item)+'"';
                    let value = ':'+item+'="'+component.getAttribute(':'+item)+'"';
                    dataBasket.push([key,value]);
                }
            }
        }
        let outerHtml = component.outerHTML.replace(':item',':$item').replace(':key',':$key');
        template.innerHTML = outerHtml;
        eCom.appendChild(template);
    }else{
        eCom =  document.createElement(child.component);
        child.wid = wid;
        eCom.setAttribute('class','V2Widget')
        //组件.布局
        if(child && child.layoutClass && child.layoutClass !== ''){
            let layoutClass = '';
            child.layoutClass.map((item)=>{
               layoutClass = layoutClass + item + ' ';
            })
            eCom.setAttribute(':class',"'"+layoutClass+"'");
        }
    }
    eCom.setAttribute('id',wid);
    eCom.setAttribute(':wid','`'+wid+'`');
    eCom.setAttribute(':index',index);
    eCom.setAttribute(':pid','`'+parent.wid+'`');
    //dataBasket不为空=>自定义组件:添加数据篮子
    if(child && child.dataBasket && child.__type !== 'loop'){
        for(let item in child.dataBasket){
            if(!child.dataBasket[item]){
                continue;
            }
            eCom.setAttribute(':'+item,child.dataBasket[item]);
            if(item != item.toLocaleLowerCase()){
                let key = ':'+item.toLocaleLowerCase()+'="'+eCom.getAttribute(':'+item)+'"';
                let value = ':'+item+'="'+eCom.getAttribute(':'+item)+'"';
                dataBasket.push([key,value]);
            }
        }
    }
    if(eCom.localName === 'v2-switchable'){
        let template = document.createElement('template');
        if(child.activeIndex) eCom.setAttribute('activeIndex',child.activeIndex);
        eCom.appendChild(template);
        appendChildren(child,template,isContainer);
    }else{
        appendChildren(child,eCom,isContainer);
    }
    if(element.localName === 'template'){
        if(element.parentElement.localName === 'v2-switchable'){
            let instance = element.parentElement.getAttribute('activeIndex');
            if(instance==null){
                throw '[切换容器]没有填写页码变量';
            }
            if(instance.startsWith('$')){
                instance = instance.substring('2',instance.length -1);
            }
            eCom.setAttribute('v-if',instance+'=='+index);
        }
        element.content.appendChild(eCom);
    }else{
        element.appendChild(eCom);
    }
}

/**
 * 根据json往element中添加子节点,如果是容器类就先加<el-row>和<el-col>再添加子节点
 * @param {*} json 
 * @param {Element} element 
 * @param {Boolean} isContainer
 */
let appendChildren = function(parentJson,element,isContainer){
    if(!isContainer){
        if(isEmptyJson(parentJson) || isEmptyJson(parentJson.children)){
            return;
        }else{
            for(let i = 0,len = parentJson.children.length ; i<len ; i++){
                appendComponent(parentJson,i,element);
            }
        }
    }else{
        let layout = layout_c(parentJson);
        let realSize = parentJson.realSize;
        for(let i = 0,len = layout.length ; i<len ; i++){
            if(parentJson.direction === 'col'){
                let span = parseInt(layout instanceof Array ? Math.round(layout[i] * 24 / 100) : '2');
                let eCol = document.createElement('el-col');
                eCol.setAttribute('class','V2ContainerBlock'+blockClass(i,parentJson));
                eCol.setAttribute(':span',span);
                eCol.setAttribute('key',i);
                eCol.setAttribute('style','height:100%;');
                appendComponent(parentJson,i,eCol);
                element.appendChild(eCol);
            }else{
                let eRow = document.createElement('el-row');
                let height = null;
                if(realSize instanceof Array && realSize[i]){
                    height = layout[i] + realSize[i];
                }else{
                    height = layout instanceof Array ? layout[i] + '%' : '50%';
                }
                eRow.setAttribute('class','V2ContainerBlock'+blockClass(i,parentJson));
                eRow.setAttribute('style','height:'+ height + ';width:100%;');
                eRow.setAttribute('key',i);
                appendComponent(parentJson,i,eRow);
                element.appendChild(eRow);
            }
        }
    }
}

/**
 * 将V2Container的json字符串转成html
 * @param {String} jsonStr 
 */
let json2html = function (jsonStr) {
    let json = JSON.parse(jsonStr);
    let jsonV2C = json.structure;//json中的structure
    let display = json.display;
    if (isEmptyJson(jsonV2C)) {
        return '';
    }
    let root = document.createElement('v2c');
    let temp = document.createElement('template');
    let eV2C = document.createElement('v2container');
    jsonV2C.wid = jsonV2C.id;
    eV2C.setAttribute(':wid', '`'+jsonV2C.wid+'`');
    eV2C.setAttribute('style', 'width:'+display.width+';height:'+display.height);
    //添加子节点
    appendChildren(jsonV2C,eV2C,true);
    temp.content.appendChild(eV2C);
    root.appendChild(temp);
    let html = root.innerHTML;
    for(let i in dataBasket){
        let arr = dataBasket[i];
        html = html.replace(arr[0],arr[1]);
    }
    return html;
}

//====================================================== html转json ========================================================
const ignoreTag = ['el-row', 'el-col'];
const ignoreAttr = [':is',':wid',':index',':pid','class','ref'];

/**
 * 将数组格式的属性转换成json格式
 * @param {String} attr 
 */
let parseArrayToJson = function (attr) {
    let json = {};
    let arr = attr.split(';');
    for (let i = 0, len = arr.length - 1; i < len; i++) {
        let str = arr[i].split(':');
        let key = str[0];
        let value = str[1];
        json[key] = value;
    }
    return json;
}

/**
 * 将标签中的属性转换为json
 * @param {JSON} json 
 * @param {Element} element 
 */
let parseAttribute = function (json, element) {
    let attr = element.attributes;
    for (let i = 0, len = attr.length; i < len; i++) {
        let key = attr[i].nodeName;
        let value = attr[i].nodeValue;
        if (key === 'layout') {
            json[key] = JSON.parse('[' + value.split(',') + ']');
        } else if (key === 'style') {
            json[key] = parseArrayToJson(value);
        } else if (ignoreAttr.includes(key)) {
            continue;
        } else {
            json[key] = value;
        }
    }
}

/**
 * 将子节点转换为children的json
 * @param {JSON} json 
 * @param {Element} element 
 */
let parseChildren = function (json, element) {
    let children = element.children;
    let len = children.length;
    if (len === 0) {
        return;
    }
    let arr = new Array(len);
    for (let i = 0; i < len; i++) {
        let child = children[i];
        if (ignoreTag.includes(child.tagName.toLowerCase())) {
            child = child.children[0];
        }
        let son = {};
        if (child.tagName === 'V2EMPTY') {
            son = null;
        } else {
            parseAttribute(son, child);
            parseChildren(son, child);
        }
        arr.splice(i, 1, son);
    }
    json['children'] = arr;

}

/**
 * 将V2Container的html转换成json
 * @param {String} htmlStr 
 */
let html2json = function (htmlStr) {
    // debugger;
    let json = {};
    let jsonV2C = {};
    let root = document.createElement('v2c');
    root.innerHTML = htmlStr;
    let temp = root.firstElementChild;//<template>
    let eV2C = temp.content.children[0];
    //转换属性
    parseAttribute(jsonV2C, eV2C);
    //转换子节点
    parseChildren(jsonV2C, eV2C);
    json.structure = jsonV2C;
    return JSON.stringify(json);
}

//======================================================================================================================
exports.json2html = json2html;
exports.html2json = html2json;
