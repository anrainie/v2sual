const UglifyJS = require('uglify-es-web');

/**
 * 将json转换成script
 * @param {String} htmlStr 
 */
let json2script = function (content) {
    let logic = JSON.parse(content).logic,
        dataBasket = JSON.parse(content).dataBasket,
        datares = {},dataAst,dataAstContent,ast,dataTar,str,
        template;
    if (logic) {

        dataBasket.map(item => {
            let temp = {};
            item.item.map(tar => {
                let temp1 = {};
                if (tar.item) {
                    tar.item.map(tar1 => {
                        temp1[tar1.desp] = "";
                    });
                    temp[tar.desp] = temp1;
                } else {
                    temp[tar.desp] = "";
                }
            });
            datares[item.name] = temp;
        });
        dataAst = UglifyJS.parse("data=" + JSON.stringify(datares));
        dataAstContent = dataAst.body[0].body.right.properties;
        ast = UglifyJS.parse(logic);
        dataTar = ast.body[0].exported_value.properties.filter(item => item.key && item.key.name === "data")[0];
        dataTar.value.body[0].value.properties = dataAstContent;
        str = ast.print_to_string({ beautify: true, comments: true });
        return `<script>${str}</script>`
    } else {
        template = `export default{data(){return{}},methods:{},watch:{}}`
        return `<script>${template}</script>`
    }
}
/**
 * 修改def josn内容
 * @param {String} htmlStr 
 */
let changeDef = function (content, logicOptions) {
    let logic = content.logic,
        name = logicOptions.name,
        code = logicOptions.code,
        type = logicOptions.type,
        ast, astContent, methods, str, tempAst, hook;

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
        default:
            methods = astContent.filter(item => item.key && item.key === "methods")[0];
            methods.value.properties = methods.value.properties.map(item => {
                if (item.key.name === name) {
                    return tempAst.body[0].body.right.properties[0];
                } else {
                    return item;
                }
            });
            break;
    }
    str = ast.print_to_string({ beautify: true, comments: true });

    content.logic = str;
    return content;
}

//======================================================================================================================
exports.json2script = json2script;
exports.changeDef = changeDef;
