const config = require('../../config/config.base');
const fs = require('fs')

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
  saveFile(path, content, logicOptions) {
    content = logicFile.changeDef(content, logicOptions);
    let writer = this.getFileWriter(path);
    return writer ? writer(path, content) : new Promise((res, rej) => {
      fs.writeFileSync(path, content);
    });
  }
};


const reader = {
  getFile(platform) {
    return async req => {
      let path = req.data.path;

      fileUtil.getFileContent(path).then(content => {
        platform.sendSuccessResult(req, content);
      }).catch(e => {
        platform.sendErrorResult(e)
      })
    }
  },

  saveFile(platform) {
    return async req => {
      let path = req.data.path;
      let content = req.data.content;
      let logicOptions = req.data.logicOptions;
      try {
        fileUtil.saveFile(path, content, logicOptions).then(() => {
          platform.sendSuccessResult(req, {});
        }).catch(e => {
          platform.sendErrorResult(e)
        })
      } catch (e) {
        platform.sendErrorResult(e);
      }
    }
  }
};

module.exports = {
  consume(platform, consumption) {
    Object.keys(consumption).map(c => platform.socket.on(c, reader[consumption[c]](platform)));
  }
};
