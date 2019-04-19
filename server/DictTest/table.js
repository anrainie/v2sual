const Result = require('../Result/Result');
const uuid4 = require('uuid/v4');

class Table {
  static getOption (ctx) {
    Result.success(ctx, {
      context: uuid4(),
      dict: [{
        PUBCODECNAME: 'ID',
        name: 'GTU_ID',
        description: 'ID',
        Parameter: {
          pname: '字段长度',
          pvalue: '50'
        },
        type: 'String',
        readonly: true,
        pk: true
      }, {
        PUBCODECNAME: '应用名称',
        name: 'APP_NAME',
        description: '应用名称',
        Parameter: {
          pname: '字段长度',
          pvalue: '50'
        },
        type: 'String',
        readonly: false,
        pk: true
      }, {
        PUBCODECNAME: '任务创建人',
        name: 'TASK_CREATE_USER',
        description: '任务创建人',
        Parameter: {
          pname: '字段长度',
          pvalue: '50'
        },
        type: 'String',
        readonly: false,
        pk: true
      }, {
        PUBCODECNAME: '用户类型',
        COLSCALE: '0',
        name: 'USR_USERTYPE',
        description: '用户类型，0:管理员，1:普通用户',
        Parameter: {
          pname: '字段长度',
          pvalue: '1'
        },
        type: 'String',
        source: [{
          name: '管理员',
          value: '0'
        }, {
          name: '普通用户',
          value: '1'
        }],
        readonly: false,
        pk: true
      }, {
        name: 'AMV_CREATE_TIME',
        PUBCODECNAME: '创建时间',
        Parameter: {
          'pname': '字段长度',
          'pvalue': '30'
        },
        readonly: false,
        pk: true,
        type: 'Date'
      }, {
        PUBCODECNAME: '总金币数',
        description: '总金币数',
        type: 'Integer',
        format: '$ 0,0.00',
        default: '0',
        name: 'COINS_NUM',
        Parameter: {
          pname: '字段长度',
          pvalue: '10'
        },
        readonly: false,
        pk: true
      }],
      filter: ['AMV_CREATE_TIME', 'TASK_CREATE_USER'],
      add: 'add',
      del: 'del',
      update: 'update',
      query: 'query',
      url: 'html/json'
    });
  }
}

module.exports = Table;
