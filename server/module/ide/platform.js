const config = require('../../config/config.base');

const io = require('socket.io-client');
const ExtListn = require('../../util/socketListener');
const fileUtil = require('../Reader/fileUtil');


const extListn = new ExtListn();
class Platform {
  constructor({
    ip,
    port
  }) {
    this.ip = ip;
    this.port = port;

    let ideType = config.server.type;
    let selfPort = config.webide.clientPort;
    let selfIP = config.webide.clientHost;
    let publicPort = config.webide.publicPort || 0;
    let id = config.server.id;
    let name = config.server.name || id;
    let preview = config.server.preview;

    let url = `${ip}${publicPort != 0 ? `:${publicPort}` : ''}?server=true&id=${id}&type=${ideType}&httpPort=${selfPort}&ip=${selfIP}&name=${name}&preview=${preview}`;
    console.log(`尝试连接${url}`);
    try {
      this.socket = io(url, {
        path: config.webide.path
      });

      this.socket.on('connect', r => console.log('连接成功'));
      this.socket.on('disconnect', r => console.log('断连', r));
      this.socket.on('connect_error', r => console.log('连接失败', r.message));
      this.socket.on('data', r => console.log(r));
      this.socket.on('error', r => console.log('连接错误', r));
      this.socket.on('previewPath', (res) => {
        console.log('previewRes', res)
      });

      this.init();
    } catch (e) {
      console.log(e)
    }
  }
  init() {
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
    console.error(error)
    this.send(req, {
      state: 'error',
      errorMsg: error ? error.toString() : null,
    });
  }

  send(req, result) {
    // console.log(req, result);
    this.socket.emit(req.callbackId, result);
  }
}


module.exports = Platform;
