const config = require('../../config/config.base');
const fs = require('fs')
//解决fs不支持递归删除问题
const rmdir = require('rimraf');
const nodejsPath = require('path');


const PageFlow = require('../PageFlow').PageFlow;

const pageFlow = new PageFlow(config.runtime.page);

const vueFileUtil = require('./vueFileUtil');

const logicFile = require('./logicFile');


const fileUtil = {
  getFileReader(path) {
    if (path) {
      let ext = this.getFileExtension(path)
      switch (ext) {
        case '.vue':
          return vueFileUtil.read;
        case '.flow':
          return (path) => pageFlow.content(this)(path.replace('.flow', '.vue'))
      }
    }
    return null;
  },
  getFileExtension(path) {
    return nodejsPath.parse(path).ext;
  },
  getFileContent(path) {
    let reader = this.getFileReader(path);
    return reader ? reader(path) : new Promise((res, rej) => {
      fs.readFile(path, 'utf8', function (err, data) {
        if (err)
          rej(err)
        res(data);
      });
    })
  },
  getFileWriter(path) {
    if (path) {
      let ext = this.getFileExtension(path)
      switch (ext) {
        case '.vue':
          return vueFileUtil.write;
      }
    }
    return null;
  },
  /**
   * 保存文件
   * @param {*} path 
   * @param {*} content 
   */
  saveFile(path, content, logicOptions) {
    let writer = this.getFileWriter(path);
    return writer ? writer(path, content) : new Promise((res, rej) => {
      fs.writeFileSync(path, content);
    });
  },
  /**
   * 创建新文件/文件夹
   */
  createFile({
    path,
    name,
    template,
    props,
  }) {
    if (path && name) {
      let ext = this.getFileExtension(name)
      switch (ext) {
        case '.vue':
          template = template || `<tempalte></tempalte>
<script></script>
<style></style>`;
          return vueFileUtil.createFile(arguments[0]);
        default:
      }
      return new Promise((res, rej) => {
        fs.writeFile(nodejsPath.join(path, name), template || '', {
          flag: 'wx+'
        }, (err) => {
          if (err) {
            rej(err);
          }
          res();
        });
      });
    }
  },
  createFolder({
    path,
    name,
  }) {
    return new Promise((res, rej) => {
      try {
        if (path && name)
          fs.mkdirSync(nodejsPath.join(path, name), {
            recursive: true
          });
        res();
      } catch (e) {
        rej(e);
      }
    });
  },
  deleteFile({
    path,
    isDirectory = false
  }) {

    let stat = fs.lstatSync(path);
    return new Promise((res, rej) => {
      try {
        if (stat.isDirectory()) {

          rmdir(path, function (error) {
            if (error)
              rej(error)
          });
        } else if (stat.isFile()) {
          fs.unlinkSync(path);
          fs.unlinkSync(path+'.def');
        } else {
          rej('非法的文件类型' + path);
          return;
        }
        res();
      } catch (e) {
        console.error(e)
        rej(e)
      }
    })
  }
};

const trans2absolute = p => {
  try {
    return nodejsPath.join(config.runtime.base, p);
  } catch (e) {
    p;
    return '';
  }
};
const reader = {
  getFile(platform) {
    return async req => {
      if (!req.data.path) {
        platform.sendErrorResult(req, 'path can\'t be null');
        console.trace();
        debugger;
        return;
      }
      let path = trans2absolute(req.data.path);

      fileUtil.getFileContent(path).then(content => {
        platform.sendSuccessResult(req, content);
      }).catch(e => {
        platform.sendErrorResult(req, e)
      })
    }
  },
  deleteFile(platform) {
    return async req => {
      let path = trans2absolute(req.data.path);
      try {
        fileUtil.deleteFile({
          path,
        }).then(() => {
          platform.sendSuccessResult(req, {});
        }).catch(e => {
          console.log(e)
          platform.sendErrorResult(req, e)
        })
      } catch (e) {
        console.log(e)
        platform.sendErrorResult(req, e);
      }
    }
  },
  createFile(platform) {
    return async req => {
      let path = trans2absolute(req.data.path);
      let name = req.data.name;
      let props = req.data.props;
      let template = req.data.template;
      try {
        fileUtil.createFile({
          path,
          name,
          template,
          props,
        }).then(() => {
          platform.sendSuccessResult(req, {
            path: nodejsPath.join(path, name)
          });
        }).catch(e => {
          platform.sendErrorResult(req, e)
        })
      } catch (e) {
        console.log(e);
        platform.sendErrorResult(req, e);
      }
    }
  },
  createFolder(platform) {
    return async req => {
      let path = trans2absolute(req.data.path);
      let name = req.data.name;
      try {
        fileUtil.createFolder({
          path,
          name,
        }).then(() => {
          platform.sendSuccessResult(req, {});
        }).catch(e => {
          platform.sendErrorResult(req, e)
        })
      } catch (e) {
        platform.sendErrorResult(req, e);
      }
    }
  },
  saveFile(platform) {
    return async req => {
      let path = trans2absolute(req.data.path);
      let content = req.data.content;
      let logicOptions = req.data.logicOptions;
      try {
        fileUtil.saveFile(path, content, logicOptions).then(() => {
          platform.sendSuccessResult(req, {});
        }).catch(e => {
          platform.sendErrorResult(req, e)
        })
      } catch (e) {
        platform.sendErrorResult(req, e);
      }
    }
  }
};

module.exports = {
  consume(platform, consumption) {
    Object.keys(consumption).map(c => platform.socket.on(c, reader[consumption[c]](platform)));
  },
  fileUtil,
};
