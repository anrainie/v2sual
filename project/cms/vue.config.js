
            module.exports = {
                baseUrl: './',
                devServer: {
                  port: 7007
                },
                productionSourceMap: false,
                filenameHashing: false,
                css: {
                    modules: false,
                    extract: false,
                    sourceMap: false,
                    loaderOptions: {
                      sass: {
                        // 向全局sass样式传入共享的全局变量
                        data: '@import "./element-variables.scss";'
                      }
                    }
                }
            }
          