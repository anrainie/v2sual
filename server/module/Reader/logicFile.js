const esprima = require("esprima");
const escodegen = require("escodegen");

/**
 * 将json转换成script
 * @param {String} htmlStr 
 */
let json2script = function(content){
    let logic = JSON.parse(content).logic,template;
    if(logic){
        return `<script>export default${logic}</script>`
    }else{
        template = `{data(){return{}},methods:{},watch:{}}`
        return `<script>export default${template}</script>`
    }
}

//======================================================================================================================
exports.json2script = json2script;
