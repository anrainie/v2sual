/**
 * 用于v2container的json和template转换
 */
const jsdom = require('jsdom');
const JSDOM = jsdom.JSDOM;
var document = new JSDOM('').window.document;
const configBase = require('../../config/config.base');
const ideType = configBase.server.type;

//=================================================== json转html ===========================================================
const v2Layout = ['v2-layout-colctn','v2-layout-rowctn','v2-layout','v2Container'];//转为v2container
let dataBasket = [];//自定义组件的数据篮子
let dataBasketJson = {};//def文件中的dataBasket

let isNumber = function(val){
    var reg = new RegExp(/^[0-9]*$/);  
      
    return reg.test(val);
}
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
    }else if(child.component == 'v2-page'){
        //页面传参
        eCom =  document.createElement('v2-page');
        if(child.params && child.params.startsWith('$')){
            eCom.setAttribute(':params',child.params.substring('2',child.params.length -1));
        }else{
            eCom.setAttribute(':params',child.params);
        }
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
                //自定义组件的属性将$item换为scope._item
                if(child.dataBasket[item].startsWith('$item')){
                    component.setAttribute(':'+item,'scope._item.'+child.dataBasket[item].replace('$item.',''));
                }else{
                    component.setAttribute(':'+item,child.dataBasket[item]);
                }
                if(item != item.toLocaleLowerCase()){
                    //因为放到dom里面的属性只能为小写，最后需要替换，因此用一个数组记录需要替换的内容
                    let key = ':'+item.toLocaleLowerCase()+'="'+component.getAttribute(':'+item)+'"';
                    let value = ':'+item+'="'+component.getAttribute(':'+item)+'"';
                    dataBasket.push([key,value]);
                }
            }
        }
        //dom里面属性不能使用$,只能后来再替换
        let outerHtml = component.outerHTML.replace(':item',':$item').replace(':key',':$key');
        template.innerHTML = outerHtml;
        eCom.appendChild(template);
    }else{
        eCom =  document.createElement(child.component);
        child.wid = wid;
        eCom.setAttribute('class','V2Widget')
    }
    //自定义组件样式customClass
    if(child && child.customClass){
        let customClass = child.customClass;
        if(customClass.startsWith('$')){
            customClass = customClass.substring('2',customClass.length -1)
        }else{
            customClass = '['+customClass.split(',').map(item => {
                return '`'+item+'`';
            })+']';
        }
        eCom.setAttribute(':class',customClass);
    }
    //自定义组件设置:style="model.commonStyle",由外部传进
    if(child&&child.cptpath){
        let commonStyle = "";
        for(let key in child.commonStyle){
            commonStyle += key+":"+child.commonStyle[key]+";";
        }
        eCom.setAttribute(':style','`'+commonStyle+'`');
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
            //判断输入的类型
            let itemValue = child.dataBasket[item];
            if(dataBasketJson[itemValue] == undefined){
                //字符串类型：`字符串`
                if(itemValue.startsWith("'")||itemValue.startsWith('"')){
                    itemValue = '`'+itemValue.replace(/"/g,"").replace(/'/g,"")+'`';
                }else if(isNumber(itemValue)){
                    //数字暂时不作处理
                }else if(itemValue.startsWith('[')){
                    //数组暂时不做处理
                }else if(itemValue.startsWith('{')){
                    //json、map暂时不做处理
                }else {
                    itemValue = '`'+itemValue+'`';
                }
            }
            eCom.setAttribute(':'+item,itemValue);
            //在dom中:key只能为小写，故编译之后需要进行大小写的调整
            if(item != item.toLocaleLowerCase()){
                let key = ':'+item.toLocaleLowerCase()+'="'+eCom.getAttribute(':'+item)+'"';
                let value = ':'+item+'="'+eCom.getAttribute(':'+item)+'"';
                dataBasket.push([key,value]);
            }
        }
    }
    if(eCom.localName === 'v2-switchable'){
        //如果是可切换容器，就往下添加一个template
        let template = document.createElement('template');
        if(child.activeIndex) eCom.setAttribute('activeIndex',child.activeIndex);
        eCom.appendChild(template);
        appendChildren(child,template,isContainer);
    }else if(eCom.localName === 'v2container'){
        //判断父容器是否只包含一个元素,替换掉父容器
        if(v2Layout.includes(parent.component) && parent.children.length == 1){
            eCom = element.parentElement;
            eCom.removeChild(element);
            child.wid = parent.wid;
        }
        appendChildren(child,eCom,isContainer);
    } else{
        appendChildren(child,eCom,isContainer);
    }
    if(element.localName === 'template'){
        //如果是template，就往上判断是否为可切换容器
        if(element.parentElement.localName === 'v2-switchable'){
            //如果是可切换容器，添加v-if
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
        //非容器类，直接往下添加component
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
            //编译生成el-row和el-col
            let el = null;
            if(parentJson.direction === 'col'){
                el = document.createElement('el-col');
            }else{
                el = document.createElement('el-row');
            }
            let height = null;
            let width = null;
            el.setAttribute('class','V2ContainerBlock'+blockClass(i,parentJson));
            //自定义容器样式ctnClass
            if(parentJson.children[i] && parentJson.children[i].ctnClass){
                let ctnClass = parentJson.children[i].ctnClass;
                if(ctnClass.startsWith('$')){
                    ctnClass = ctnClass.substring('2',ctnClass.length -1)
                }else{
                    ctnClass = '['+ctnClass.split(',').map(item => {
                        return '`'+item+'`';
                    })+']';
                }
                el.setAttribute(':class',ctnClass);
            }
            //计算高度：layout[i]+realSize[i]如80+px,50+%
            if(realSize instanceof Array && realSize[i]){
                // 添加输入容器尺寸的功能 100px || calc(30% - 20px) ...
                let _realSize = realSize[i] === '输入' ? '' : realSize[i];
                // height = layout[i] + realSize[i];
                // width = layout[i] + realSize[i];
                height = layout[i] + _realSize;
                width = layout[i] + _realSize;

                debugger
            }else{
                height = layout instanceof Array ? layout[i] + '%' : '50%';
                width = layout instanceof Array ? layout[i] + '%' : '50%';
            }
            if(parentJson.ctnStyle && parentJson.ctnStyle[i]){
                let ctnCss = parentJson.ctnStyle[i];
                for(let name in ctnCss){
                    !ctnCss[name]&& delete ctnCss[name]
                }
                // 去掉容器的百分比尺寸
                if(parentJson.direction === 'col'){
                    // el.setAttribute('style','height:100%;width:'+ width+';'+JSON.stringify(ctnCss).replace(/[{}]/g,'').replace(/",/g,";").replace(/"/g,""));
                    el.setAttribute('style','width:'+ width+';'+JSON.stringify(ctnCss).replace(/[{}]/g,'').replace(/",/g,";").replace(/"/g,""));
                }else{
                    // el.setAttribute('style','height:'+ height + ';width:100%;'+JSON.stringify(ctnCss).replace(/[{}]/g,'').replace(/",/g,";").replace(/"/g,""));
                    el.setAttribute('style','height:'+ height + ';'+JSON.stringify(ctnCss).replace(/[{}]/g,'').replace(/",/g,";").replace(/"/g,""));
                }
            }else{
                // 去掉容器的百分比尺寸
                if(parentJson.direction === 'col'){
                    // el.setAttribute('style','height:100%;width:'+ width);
                    el.setAttribute('style','width:'+ width);
                }else{
                    // el.setAttribute('style','height:'+ height + ';width:100%;');
                    el.setAttribute('style','height:'+ height + ';');
                }
            }
            
            el.setAttribute('key',i);
            //往下遍历component
            element.appendChild(el);
            appendComponent(parentJson,i,el);
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
    dataBasketJson = json.dataBasket.data;
    if (isEmptyJson(jsonV2C)) {
        return '';
    }
    let root = document.createElement('v2c');
    let temp = document.createElement('template');
    let isAd = ideType ==='ad'
    let eV2C = isAd? document.createElement('v2-ctn-xy'):document.createElement('v2container');
    jsonV2C.wid = jsonV2C.id;
    eV2C.setAttribute(':wid', '`'+jsonV2C.wid+'`');
    //添加子节点
    appendChildren(jsonV2C,eV2C,!isAd);
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

//====================================================== json转scss  ========================================================
let json2scss = function (jsonStr) {
    let jsonObj = JSON.parse(jsonStr);
    let scss = jsonObj.scssCode;//json中的scssCode
    console.log(scss);
    let scssEle = document.createElement('scss');
    let styleEle = document.createElement('style');
    styleEle.setAttribute('lang','scss');
    styleEle.innerHTML = "\n"+ scss +"\n";
    scssEle.appendChild(styleEle);
    return scssEle.innerHTML;
}



//======================================================================================================================
exports.json2html = json2html;
exports.html2json = html2json;
exports.json2scss = json2scss;
