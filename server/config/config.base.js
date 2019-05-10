const path = require('path');
const config = require('./config.json');

//runtime
const base = path.resolve(process.cwd(), config.runtime.base);
const component = path.resolve(runtime, config.runtime.component);
const pipe = path.resolve(runtime, config.runtime.pipe);
const datadict = path.resolve(runtime, config.runtime.datadict);


module.exports = {
    ...config,

    runtime: {
        base,
        component,
        pipe,
        datadict
    },

    static: config.static.map(s => {
        return {
            router: s.router,
            dir: path.resolve(path.join(base, s.dir))
        }
    })
};