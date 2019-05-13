const fs = require('fs')


const path = require('path');
const RUNTIME_PATH = path.resolve(__dirname, '../../runtime/');
const PAGE_PATH = 'src/views';
const PageFlow = require('../PageFlow');

const pageFlow = new PageFlow(path.resolve(path.join(RUNTIME_PATH, PAGE_PATH)));

const vueFileUtil = require('./vueFileUtil');


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
    return path.substring(path.lastIndexOf('.'));
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
  saveFile(path, content) {
    let writer = this.getFileWriter(path);
    return writer ? writer(path, content) : new Promise((res, rej) => {
      fs.writeFileSync(path, content);
    });
  }
}
module.exports = {
  com(platfrom, consumption) {
    platfrom.socket.on('getFile', async req => {
      let path = req.data.path;

      fileUtil.getFileContent(path).then(content => {
        platfrom.sendSuccessResult(req, content);
      }).catch(e => {
        platfrom.sendErrorResult(e)
      })
    })

    platfrom.socket.on('saveFile', req => {
      let path = req.data.path;
      let content = req.data.content;
      fileUtil.saveFile(path, content).then(() => {
        platfrom.sendSuccessResult(req, {});
      }).catch(e => {
        platfrom.sendErrorResult(e)
      })
    })
  }
};
