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
    // console.log(`尝试连接IDE平台${ip}:${port}`);
    // this.socket = io.connect(ip, port);

    let ideType = config.server.name;
    let selfPort = config.server.port;
    let selfIP = config.server.host;
    let id = config.server.id;

    let url = `http://${ip}:${port}?server=true&id=${id}&type=${ideType}&httpPort=${selfPort}&ip=${selfIP}`;
    console.log(`尝试连接${url}`);
    try {
      this.socket = io(url);

      this.socket.on('connect', r => console.log('连接成功', r));
      this.socket.on('disconnect', r => console.log('断连', r));
      //this.socket.on('connect_error', r => console.log('连接失败', r));
      this.socket.on('data', r => console.log(r));

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
