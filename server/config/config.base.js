const path = require('path');
const config = require('./config.json');

//runtime
const base = path.resolve(process.cwd(), config.runtime.base);
const component = path.resolve(base, config.runtime.component);
const pipe = path.resolve(base, config.runtime.pipe);
const datadict = path.resolve(base, config.runtime.datadict);
const page=path.resolve(base,config.runtime.page);


module.exports = {
    ...config,

    runtime: {
        base,
        component,
        pipe,
        datadict,
        page
    },

    static: config.static.map(s => {
        return {
            router: s.router,
            dir: path.resolve(path.join(base, s.dir))
        }
    })
};