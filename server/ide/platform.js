const io = require('socket.io-client'); //导入mysql模块
const runtimeFiles = require('../page/ideFiles');
const ExtListn = require('../external/socketListener');
const fileUtil = require('./fileUtil');

const extListn = new ExtListn();
class Platform {
  constructor({
    ip,
    port,
    preview
  }) {
    this.ip = ip;
    this.port = port;
    // console.log(`尝试连接IDE平台${ip}:${port}`);
    // this.socket = io.connect(ip, port);

    let ideType = 'v2sual';
    let selfPort = 3000;
    let selfIP = 'localhost';
    let id = 123123;

    let url = `http://${ip}:${port}?server=true&id=${id}&type=${ideType}&httpPort=${selfPort}&ip=${selfIP}`;
    console.log(`尝试连接${url}`);
    try {
      this.socket = io(url);

      this.socket.on('connect', r => {
        console.log('连接成功', r);
      });
      this.socket.on('disconnect', r => {
        console.log('断连', r);
      });
      this.socket.on('connect_error', r => {
        console.log('连接失败', r);
      })
      this.socket.on('data', r => {
        console.log(r);
      })

      this.init();
    } catch (e) {
      console.log(e)
    }
  }
  init() {
    this.socket.on('getNaviItems', req => {
      this.sendSuccessResult(req, runtimeFiles());
    })

    this.socket.on('getFile', req => {
      let path = req.data.path;
      fileUtil.getFileContent(path).then(content => {
        this.sendSuccessResult(req, content);
      }).catch(e => {
        this.sendErrorResult(e)
      })
    })

    this.socket.on('saveFile', req => {
      let path = req.data.path;
      let content = req.data.content;
      fileUtil.saveFile(path, content).then(() => {
        this.sendSuccessResult(req, {});
      }).catch(e => {
        this.sendErrorResult(e)
      })
    })

    //注册了画板相关的监听
    extListn.observe(this);
  }

  sendSuccessResult(req, data) {
    this.send(req, {
      state: 'success',
      data,
    });
  }

  sendErrorResult(req, error) {
    this.send(req, {
      state: 'fail',
      error,
    });
  }

  send(req, result) {
    console.log(req);
    this.socket.emit(req.callbackId, result);
  }
}


module.exports = Platform;
