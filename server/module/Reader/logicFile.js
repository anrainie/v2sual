const UglifyJS = require('uglify-es-web');

/**
 * 将json转换成script
 * @param {String} htmlStr 
 */
let json2script = function (content) {
    let logic = JSON.parse(content).logic,
        template;
    if (logic) {
        return `<script>${logic}</script>`
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
