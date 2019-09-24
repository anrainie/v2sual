const WebideServlet = require('../../../gitmodule/webide-servlet')
const config = require('../../config/config.base')

const DelegateEmitterFunctions = [ "on", "emit", "off" ]

function checkLoaded(platform) {
  platform.loaded || console.warn("Unable to observe platform caused by un-loaded servlet")
  return platform.loaded
}

function delegateEmitterFunction(delegation) {
  DelegateEmitterFunctions.forEach(name => delegation[name] = function () {
    this.loaded ? this.provider[name].apply(this.provider, arguments) : this._callQueue.push({name: name, args: [...arguments]})
  })
}

class Platform {
  constructor(name) {
    this.loaded = false
    this.servlet = null
    this.provider = null
    // TODO
    this._callQueue = []
    this._listeners = []
    // 将Platform的emitter方法委托至provider上
    delegateEmitterFunction(this, this.provider)

    WebideServlet.load(name)
      .then(servlet => this._setUp(servlet))
      .catch(e => console.log("Failed to load servlet instance", e))
  }

  _setUp(servlet) {
    this.servlet = servlet
    this.provider = servlet.provide({ "id": config.server.id, "type": config.server.type })
    this.loaded = true

    // 处理还未加载前的调用
    let calls = this._callQueue.slice()
    for (let {name, args} of calls) {
      this[name].apply(this, args)
    }

    let listeners = this._listeners.slice()
    for (let listener of listeners) {
      listener.observe(this.provider)
    }

    delete this._listeners
    delete this._callQueue
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
    this.provider.emit(req.callbackId, result);
  }

  observe(listener) {
    checkLoaded(this) ? listener.observe(this.provider) : this._listeners.push(listener)
    return this
  }
}

module.exports = Platform;
