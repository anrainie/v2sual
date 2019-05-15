const esprima = require("esprima");
const escodegen = require("escodegen");

/**
 * 将json转换成script
 * @param {String} htmlStr 
 */
let json2script = function(content){
    const logic = JSON.parse(content).logic;
    return `<script>export default${logic}</script>`
}

//======================================================================================================================
exports.json2script = json2script;
