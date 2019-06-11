const Util = require('../util/Util');
const readDir = require('recursive-readdir');
const fs = require('fs');
const path = require('path');

const config = require('../config/config.base');

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
                main: content.main
              })
            }
          });


        // 自定义组件
        const customWidgets = await readDir(config.runtime.customWidget);

        customWidgets
          .forEach(f => {
            const info = path.parse(f);

            if (info.ext === '.vue' && fs.existsSync(f)) {
              menu.push({
                name: info.name,
                type: 'customWidget',
                href: info.name,
                option: [],
                css: {},
                icon: 'iconyemian',
                main: ''
              })
            }
          });
        platform.sendSuccessResult(req, menu);
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
