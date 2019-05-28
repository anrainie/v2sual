const UglifyJS = require('uglify-es-web');

/**
 * 将json转换成script
 * @param {String} htmlStr 
 */
let json2script = function (content) {
    let logic = JSON.parse(content).logic,
        data = JSON.parse(content).dataBasket.data,
        datares = {}, dataAst, dataAstContent, ast, dataTar, str, i, newData = {},
        template;
    if (logic) {
        dataAst = UglifyJS.parse("data=" + JSON.stringify(data));
        dataAstContent = dataAst.body[0].body.right.properties;

        ast = UglifyJS.parse(logic);
        dataTar = ast.body[0].exported_value.properties.filter(item => item.key && item.key.name === "data")[0];
        dataTar.value.body[0].value.properties = dataAstContent.map(item => {
            let ast;
            if(data[item.key]===''){
                 ast = UglifyJS.parse("data=''");
            }else{
                 ast = UglifyJS.parse("data=" + data[item.key]);
            }
                ast=ast.body[0].body.right;
            item.value = ast
            return item
        });
        str = ast.print_to_string({ beautify: true, comments: true });
        return `<script>${str}</script>`
    } else {
        template = `export default{data(){return{}},methods:{},watch:{}}`
        return `<script>${template}</script>`
    }
}
/**
 * 绑定datas
 * @param {String} htmlStr 
 */
let bindData = function (hook, structure) {
    let list = [], item, newHook=[],tabIndex=[],
        key = true;

    // 检查
    hook.value.body.map((item,index) => {
        if(item.start.comments_before.length){
            let start = item.start.comments_before.filter(item=>item.value==="*bind*");
            if(start.length)tabIndex.push(index);
        }
        if(item.end.comments_after.length){
            let end = item.end.comments_after.filter(item=>item.value==="*bind over*");
            if(end.length)tabIndex.push(index);
        }
    });
    hook.value.body = hook.value.body.filter((item,index)=>index<tabIndex[0]||index>tabIndex[1]);
    item = structure;
    while (key) {
        if (item && item.component !== "av-layout-colctn" && item.component !== "v2Container" && item.component !== "av-layout-rowctn" && item.mapping) {
            item.mapping.map(item => {
                newHook.push(`this.$store.commit("bind",{ vueObj:this, data:${item.dataValue}, dataStr:"${item.dataValue}", wid:${item.id}, modelKey:"${item.modelValue}" });`)
            })
        }
        if (item && item.children) list = list.concat(item.children);
        if (list.length) {
            item = list.pop();
        } else {
            key = false;
        };
    };
    let template = `data = {beforeMout() {
        /**bind**/ 
        ${newHook}
        /**bind over**/
     }}`;
     let tempAst = UglifyJS.parse(template);
     let bindItems = tempAst.body[0].body.right.properties[0].value.body;
     hook.value.body = hook.value.body.concat(bindItems);
     return hook;
}

/**
 * 修改def json内容
 * @param {String} htmlStr 
 */
let changeDef = function (content, logicOptions) {
    let logic = content.logic,
        name = logicOptions.name,
        code = logicOptions.code,
        type = logicOptions.type,
        ast, astContent, methods, watch, str, tempAst, hook, beforeCreate;

    ast = UglifyJS.parse(logic);
    astContent = ast.body[0].exported_value.properties;
    tempAst = UglifyJS.parse(`data={${code}}`);

    switch (type) {
        case "hook":
            hook = astContent.map(item => {
                if (item.key && item.key.name === name) {
                    return tempAst.body[0].body.right.properties[0];
                } else {
                    return item;
                }
            });
            ast.body[0].exported_value.properties = hook;
            break;
        case "watch":
            watch = astContent.filter(item => item.key && item.key === "watch")[0];
            watch.value.properties = watch.value.properties.map(item => {
                if (item.key.name === name) {
                    return tempAst.body[0].body.right.properties[0];
                } else {
                    return item;
                }
            });
            break;
        default:
            methods = astContent.filter(item => item.key && item.key === "methods")[0];
            methods.value.properties = methods.value.properties.map((item, index) => {
                if (item.key.name === name) {
                    return tempAst.body[0].body.right.properties[0];
                } else {
                    return item;
                }
            });
            break;
    };
    // 添加绑定数据
    beforeCreate = astContent.map(item => {
        if(item.key && item.key.name === "beforeCreate"){
            return bindData(item, content.structure);
        }else{
            return item;
        }
    });
    ast.body[0].exported_value.properties = beforeCreate;
    str = ast.print_to_string({ beautify: true, comments: true });

    content.logic = str;
    return content;
}

//======================================================================================================================
exports.json2script = json2script;
exports.changeDef = changeDef;
