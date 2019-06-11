const path = require('path');
const fs = require('fs');

const config = require('../config/config.base');
const listPath = config.runtime.page;

const NAVIGATOR = config.module.navigator;
const CATEGORY = NAVIGATOR.category;


const listDir = (dirPath = listPath) => {
  let treeNode = [];
  try {
    let files = fs.readdirSync(dirPath);
    for (let i = 0; i < files.length; i++) {
      let filePath = dirPath + path.sep + files[i];
      let stat = fs.lstatSync(dirPath + path.sep + files[i]);
      if (stat.isDirectory()) {
        let DirInfo = listDir(filePath);
        let name = path.basename(filePath);

        let folder = {
          name,
          label: name,
          path: filePath,
          resId: 'category',
          type: 'folder',
          category: 50,
          children: DirInfo
        };

        switch (name) {
          case CATEGORY.ENTRY.NAME:
            folder.entry = true;
            folder.label = CATEGORY.ENTRY.LABEL;
            folder.index = -2;
            break;
          case CATEGORY.CUSTOM_WIDGET.NAME:
            folder.label = CATEGORY.CUSTOM_WIDGET.LABEL;
            folder.index = -1;
            break;
          default:
            folder.index = 0;
        }
        treeNode.push(folder);
      } else {
        let nodeInfo = listFile(filePath);
        if (nodeInfo) {
          treeNode.push({
            name: nodeInfo,
            label: nodeInfo,
            resId: 'vue',
            icon: "ideicon iconyemian",
            type: 'file',
            category: 100,
            path: filePath
          });
        }
      }
    }
    treeNode.sort(sorter);
  } catch (e) {
    console.error(e);
  }

  return treeNode;
}

const sorter = (a, b) => {
  if (a.resId == b.resId) {
    if(a.index!==b.index){
      if (!Number.isNaN(a.index) && !Number.isNaN(b.index)) {
        return a.index - b.index;
      } else if (!Number.isNaN(a.index)) {
        return 1;
      } else if (!Number.isNaN(b.index)) {
        return 1;
      }
    }else{
      if (a.name == null) {
        return -1;
      } else if (b.name == null) {
        return 1;
      }
    }

    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  }
  return a.category > b.category ? 1 : -1;
}

const listFile = (pagePath) => {
  if (pagePath.endsWith('.vue')) {
    return path.basename(pagePath);
  }
}

const Navigator = {
  getRootItems(platform, dirPath, req) {
    try {
      const viewPath = listDir(dirPath);
      let flowPath = viewPath.filter(v => v.entry).map(e => e.children)[0];

      //rename flow
      let copy = JSON.parse(JSON.stringify(flowPath));
      let item;

      while (item = copy.pop()) {
        if (item.resId === 'vue') {
          item.resId = 'flow';
          item.path = item.path.replace(/\.vue$/, '.flow');
        }

        if (item.children && item.children.length) {
          copy = copy.concat(item.children);
        }
      }

      let ret = [{
        name: 'views',
        label: '页面',
        path: dirPath,
        resId: 'virtualPath',
        type: 'folder',
        children: viewPath
      }, {
        name: 'flows',
        label: '页面流',
        path: `${dirPath}\\_entry`,
        resId: 'pathFlow',
        type: 'folder',
        children: flowPath
      }];

      platform.sendSuccessResult(req, ret);
    } catch (e) {
      platform.sendErrorResult(req, e)
    }
  },
  getNaviItems(platform) {
    return async (req) => {
      try {
        let dirPath = req.data.path || req.data.end;
        switch (req.data.path) {
          case "\\":
          case null:
          case "/":
            //如果是根目录，则返回整理过的文件夹
            dirPath = listPath;
            this.getRootItems(platform, dirPath, req);
            break;
          default:
            //如果不是，则返回原始的
            const viewPath = listDir(dirPath);
            platform.sendSuccessResult(req, viewPath);
        }

      } catch (e) {
        platform.sendErrorResult(req, e)
      }
    }
  }
}

module.exports = {
  consume(platform, consumption) {
    Object.keys(consumption).map(c => platform.socket.on(c, Navigator[consumption[c]](platform)));
  }
};
