// var afa = require('./proxy/proxy.afa.js')
var nodeServer = require('./proxy/proxy.node.js')
module.exports = {
    baseUrl: './',
    devServer: {
          open: true,
          host: '0.0.0.0',
          port: 7007,
          disableHostCheck: true,
          hotOnly: false,
            proxy: {
            //    ...afa,
               ...nodeServer
            }
        
    },
    productionSourceMap: false,
    filenameHashing: false,
    css: {
       
        modules: false,

       
        extract: false,

      
        sourceMap: false
    }
}