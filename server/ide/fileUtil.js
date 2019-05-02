const fs = require('fs')
const fileUtil = {
  getFileReader(path) {
    if (path) {
      let ext = this.getFileExtension(path)
      switch (ext) {
        case '.vue':
          return (path) => new Promise((res, rej) => {
            //针对vue文件，读取同名.def文件
            fs.readFile(path + '.def', 'utf8', function (err, data) {
              if (err)
                rej(err)
              res(data);
            });
          })
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
          return (p, content) => new Promise((res, rej) => {
            //针对vue文件，读取同名.def文件
            fs.writeFile(p+'.def', JSON.stringify(content), function (err) {
              if (err) rej(err);
              else res();
            });

          })
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
module.exports = fileUtil;
