const path = require('path');
const fs = require('fs');

const config = require('../config/config.base');
const listPath = config.runtime.page;

const NAVIGATOR = config.module.navigator;
const CATEGORY = NAVIGATOR.category;
let EXCLUDE_MAP = {};

NAVIGATOR.exclude.forEach(e => EXCLUDE_MAP[path.resolve(listPath, e)] = {});

const trans2RelativePath = p => p.replace(config.runtime.base, '');
const trans2AbsolutePath = p => path.join(config.runtime.base, p);


const listDir = (dirPath = listPath) => {
  let treeNode = [];
  try {

    const stats = fs.lstatSync(dirPath);

    if (stats.isDirectory()) {
      let files = fs.readdirSync(dirPath);
      for (let i = 0; i < files.length; i++) {
        let filePath = path.join(dirPath, files[i]);
        let relativePath = trans2RelativePath(filePath);
        let stat = fs.lstatSync(dirPath + path.sep + files[i]);
        if (stat.isDirectory()) {
          let DirInfo = listDir(filePath);
          let name = path.basename(filePath);

          let folder = {
            name,
            label: name,
            path: relativePath,
            resId: 'category',
            type: 'folder',
            category: 50,
            children: DirInfo
          };

          //特殊处理某些文件夹
          switch (name) {
            case CATEGORY.ENTRY.NAME:
              folder.entry = true;
              folder.label = CATEGORY.ENTRY.LABEL;
              folder.index = -2;
              folder.icon = "ideicon iconrukouwenjianjia";
              break;
            case CATEGORY.CUSTOM_WIDGET.NAME:
              folder.label = CATEGORY.CUSTOM_WIDGET.LABEL;
              folder.index = -1;
              folder.icon = "ideicon iconzidingyizujianwenjianjia";

              break;
            default:
              folder.index = 0;
          }
          treeNode.push(folder);
        } else {
          if (path.extname(filePath) === '.vue' && !EXCLUDE_MAP[filePath]) {
            const nodeInfo = path.parse(filePath);
            let item = {
              name: nodeInfo.name,
              label: nodeInfo.name,
              resId: 'vue',
              icon: "ideicon iconyemian",
              type: 'file',
              category: 100,
              path: relativePath
            };

            try {
              const defStr = fs.readFileSync(`${filePath}.def`, {
                encoding: 'utf8'
              }).toString();
              const def = JSON.parse(defStr);

              if (def.display && def.display.desp) {
                item.desp = def.display.desp;
              }

            } catch (e) {

            }


            treeNode.push(item);
          } else if (path.extname(filePath) === '.png' || path.extname(filePath) === '.jpg') {
            const imgInfo = path.parse(filePath);
            let item = {
              name: imgInfo.base,
              label: imgInfo.base,
              resId: 'img',
              icon: "ideicon iconyemian",
              type: 'file',
              category: 100,
              path: relativePath
            };
            try {
              const defStr = fs.readFileSync(`${filePath}.def`, {
                encoding: 'utf8'
              }).toString();
              const def = JSON.parse(defStr);

              if (def.display && def.display.desp) {
                item.desp = def.display.desp;
              }

            } catch (e) {

            }
            treeNode.push(item);
          }
        }
        treeNode.sort(sorter);
      }
    }
  } catch (e) {
    console.error(e);
  }

  return treeNode;
}
const statisDir = () => {
  const stylePath = path.join(config.runtime.base, 'src', 'scss');
  const statisPath = path.join(config.runtime.base, 'public');
  const scssPath = path.join('/src', 'scss');
  const publicPath = path.join('/public');
  let treeNode = [{
      name: 'style',
      label: '自定义样式',
      path: scssPath,
      resId: 'category',
      desp: scssPath,
      type: 'folder',
      category: 50,
      children: []
    },
    {
      name: 'publicResources',
      label: '公共资源',
      path: publicPath,
      desp: publicPath,
      resId: 'category',
      type: 'folder',
      category: 50,
      children: []
    }
  ];
  //style
  try {
    const stats = fs.lstatSync(stylePath);
    if (stats.isDirectory()) {
      let files = fs.readdirSync(stylePath);
      for (let i = 0; i < files.length; i++) {
        let filePath = path.join(stylePath, files[i]);
        let relativePath = trans2RelativePath(filePath);
        let stat = fs.lstatSync(stylePath + path.sep + files[i]);
        if (path.extname(filePath) === '.scss') {
          let fileInfo = path.parse(filePath);
          let item = {
            name: fileInfo.base,
            label: fileInfo.base,
            resId: 'style',
            icon: "ideicon iconyemian",
            type: 'file',
            category: 100,
            path: relativePath
          };
          treeNode[0].children.push(item);
        }
      }
    }
    //statis
    treeNode[1].children = scanDir(statisPath);
  } catch (e) {
    console.error(e);
  }
  return treeNode;
}

const scanDir = (dirPath) => {
  let treeNode = [];
  try {
    const stats = fs.lstatSync(dirPath);
    if (stats.isDirectory()) {
      let files = fs.readdirSync(dirPath);
      for (let i = 0; i < files.length; i++) {
        let filePath = path.join(dirPath, files[i]);
        let relativePath = trans2RelativePath(filePath);
        let stat = fs.lstatSync(dirPath + path.sep + files[i]);
        if (stat.isDirectory()) {
          let DirInfo = scanDir(filePath);
          let name = path.basename(filePath);

          let folder = {
            name,
            label: name,
            path: relativePath,
            resId: 'category',
            type: 'folder',
            category: 50,
            children: DirInfo
          };

          //特殊处理某些文件夹
          switch (name) {
            case CATEGORY.ENTRY.NAME:
              folder.entry = true;
              folder.label = CATEGORY.ENTRY.LABEL;
              folder.index = -2;
              folder.icon = "ideicon iconrukouwenjianjia";
              break;
            case CATEGORY.CUSTOM_WIDGET.NAME:
              folder.label = CATEGORY.CUSTOM_WIDGET.LABEL;
              folder.index = -1;
              folder.icon = "ideicon iconzidingyizujianwenjianjia";

              break;
            default:
              folder.index = 0;
          }
          treeNode.push(folder);
        } else {
          if (!EXCLUDE_MAP[filePath]) {
            const nodeInfo = path.parse(filePath);
            let item = {
              name: nodeInfo.base,
              label: nodeInfo.base,
              resId: 'statis',
              icon: "ideicon iconyemian",
              type: 'file',
              category: 100,
              path: relativePath
            };

            try {
              const defStr = fs.readFileSync(`${filePath}.def`, {
                encoding: 'utf8'
              }).toString();
              const def = JSON.parse(defStr);

              if (def.display && def.display.desp) {
                item.desp = def.display.desp;
              }

            } catch (e) {

            }


            treeNode.push(item);
          }
        }
        treeNode.sort(sorter);
      }
    }
  } catch (e) {
    console.error(e);
  }
  return treeNode;
}

const sorter = (a, b) => {
  if (a.resId == b.resId) {
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
  return a.category > b.category ? 1 : -1;
}


const Navigator = {
  getRootItems(platform, dirPath, req) {
    try {
      const viewPath = listDir(dirPath);
      const imgPath = path.join(config.runtime.base, '\\public\\img');
      // const imgList = listDir(imgPath);
      let flowPath = JSON.parse(JSON.stringify(viewPath.filter(v => v.entry).map(e => e.children)[0] || []));
      let imgList = statisDir();
      //rename flow
      let copy = [].concat(flowPath);
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
        path: trans2RelativePath(dirPath),
        resId: 'virtualPath',
        type: 'folder',
        children: viewPath
      }, {
        name: 'flows',
        label: '页面流',
        path: trans2RelativePath(path.join(dirPath, CATEGORY.ENTRY.NAME)),
        resId: 'pathFlow',
        type: 'folder',
        children: flowPath
      }, {
        name: 'statis',
        label: '项目资源',
        path: path.join(config.runtime.base, '\\public\\img'),
        resId: 'pathImg',
        type: 'folder',
        children: imgList
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
            //case listPath:
            //如果是根目录，则返回整理过的文件夹
            dirPath = listPath;
            this.getRootItems(platform, dirPath, req);
            break;
          default:
            //如果不是，则返回原始的
            const viewPath = listDir(trans2AbsolutePath(dirPath));
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
