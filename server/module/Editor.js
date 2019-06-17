const Util = require('../util/Util');
const readDir = require('recursive-readdir');
const fs = require('fs');
const path = require('path');

const config = require('../config/config.base');

const sorter = (a, b) => {
  if (a.index !== b.index) {
    if (!Number.isNaN(a.index) && !Number.isNaN(b.index)) {
      return a.index - b.index;
    } else if (!Number.isNaN(a.index)) {
      return 1;
    } else if (!Number.isNaN(b.index)) {
      return 1;
    }
  } else {
    if (a.name == null) {
      return -1;
    } else if (b.name == null) {
      return 1;
    }
  }

  return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
}

let editor = {
  'widget'(platform) {
    return async (req) => {
      try {
        let menu = [];
        //功能组件
        const components = (await readDir(config.runtime.component));

        components
          .filter(f => path.parse(f).base === 'package.json' && fs.existsSync(f))
          .forEach(f => {
            const contentStr = fs.readFileSync(f, 'utf8').toString();
            const content = JSON.parse(contentStr);

            if (content.docs) {
              menu.push({
                ...content.docs,
                main: content.main,
                index: content.index
              })
            }
          });


        // 自定义组件
        const customWidgets = await readDir(config.runtime.customWidget);

        customWidgets
          .forEach(f => {

            try {
              const info = path.parse(f);

              if (info.ext === '.def' && fs.existsSync(f)) {

                const str = fs.readFileSync(f).toString();
                const content = JSON.parse(str);

                const name = info.name.toLocaleLowerCase().replace(/\.vue$/, '');

                const item = {
                  name: name,
                  type: 'custom-widget',
                  href: `v2-component-${name}`,
                  cptpath: f.replace(config.runtime.page,'').replace(/\.def$/, ''),
                  option: [],
                  css: {},
                  icon: content.icon || 'icontongyong',
                  desp: content.desp || '',
                  main: ''
                };
                console.log(item);
                menu.push(item);
                
              }
            } catch (e) {
              console.log(e);
            }
          });
        platform.sendSuccessResult(req, menu.sort(sorter));
      } catch (e) {
        platform.sendErrorResult(req, e);
      }
    };
  },
  'dict'(platform) {
    return async (req) => {
      try {
        let target = config.runtime.datadict;
        let dir = await Util.readdir(target);
        let ret = {};
        for (let i = -1, item; item = dir[++i];) {
          let subFile = `${target}/${item}`;
          let statItem = await Util.stat(subFile);
          if (statItem.isFile() && path.extname(subFile) === '.json') {
            let dictData = await Util.readFile(subFile);
            dictData = JSON.parse(dictData);

            ret = {
              ...ret,
              ...dictData
            };;
          }
        }

        platform.sendSuccessResult(req, ret);
      } catch (e) {
        platform.sendErrorResult(req, e);
      }
    };
  }
};

module.exports = {
  consume(platform, consumption) {
    Object.keys(consumption).map(c => platform.socket.on(c, editor[consumption[c]](platform)));
  }
};
