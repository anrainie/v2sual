const Result = require('../Result/Result');
const uuid4 = require('uuid/v4');
const Mock = require('mockjs');

let TestData = [];

for (let i = 0; i < 2; i++) {
  TestData.push(Mock.mock({
    GTU_ID: Mock.Random.guid(),
    APP_NAME: Mock.mock('@last'),
    TASK_CREATE_USER: Mock.Random.cname(),
    USR_USERTYPE: Mock.Random.integer(0, 1),
    AMV_CREATE_TIME: Mock.mock('@date("yyyy-MM-dd")'),
    COINS_NUM: Mock.mock({
      'number|100-1000.1-10': 1
    }).number
  }));
}

class Table {
  static getOption (ctx) {
    Result.success(ctx, {
      context: uuid4(),
      dict: [{
        __edm_collection: {
          PUBCODECNAME: 'ID',
          name: 'GTU_ID',
          description: 'ID',
          Parameter: {
            pname: '字段长度',
            pvalue: '50'
          },
          type: 'String'
        },
        edmKey: 'GTU_ID',
        readonly: true,
        pk: true // 前端用这个外键判断该数据项是否为id列
      }, {
        __edm_collection: {
          PUBCODECNAME: '应用名称',
          name: 'APP_NAME',
          description: '应用名称',
          Parameter: {
            pname: '字段长度',
            pvalue: '50'
          },
          type: 'String'
        },
        edmKey: 'APP_NAME',
        type: 'text',
        readonly: false

      }, {
        __edm_collection: {
          PUBCODECNAME: '任务创建人',
          name: 'TASK_CREATE_USER',
          description: '任务创建人',
          Parameter: {
            pname: '字段长度',
            pvalue: '50'
          },
          type: 'String'
        },
        edmKey: 'TASK_CREATE_USER',
        type: 'text',
        readonly: false

      }, {
        __edm_collection: {
          PUBCODECNAME: '用户类型',
          COLSCALE: '0',
          name: 'USR_USERTYPE',
          description: '用户类型，0:管理员，1:普通用户',
          Parameter: {
            pname: '字段长度',
            pvalue: '1'
          },
          type: 'String'
        },
        edmKey: 'USR_USERTYPE',
        type: 'dropdown',
        source: [{
          name: '管理员',
          value: '0'
        }, {
          name: '普通用户',
          value: '1'
        }],
        readonly: false

      }, {
        __edm_collection: {
          name: 'AMV_CREATE_TIME',
          PUBCODECNAME: '创建时间',
          Parameter: {
            'pname': '字段长度',
            'pvalue': '30'
          },
          type: 'Date'
        },
        edmKey: 'AMV_CREATE_TIME',
        type: 'date',
        dateFormat: 'YYYY-MM-DD',
        readonly: false
      }, {
        __edm_collection: {
          PUBCODECNAME: '总金币数',
          description: '总金币数',
          type: 'Integer',
          default: '0',
          name: 'COINS_NUM',
          Parameter: {
            pname: '字段长度',
            pvalue: '10'
          }
        },
        edmKey: 'COINS_NUM',
        type: 'numeric',
        format: '$ 0,0.00',
        readonly: false
      }],
      filter: ['AMV_CREATE_TIME', 'TASK_CREATE_USER'],
      add: 'add',
      del: 'del',
      update: 'update',
      query: 'query',
      url: '/v1/dictTest/tableOp'
    });
  }
  static tableOpera (ctx) {
    let {
      action
    } = ctx.request.query;
    console.log(ctx.request.query);

    switch (action) {
      case 'add':
        Table.addRow(ctx);
        break;
      case 'del':
        Table.deleteRow(ctx);
        break;
      case 'update':
        Table.updateRow(ctx);
        break;
      default:
        console.log(Table);
        Table.queryRow(ctx);
    }
  }
  static addRow (ctx) {
    let {
      APP_NAME,
      TASK_CREATE_USER,
      USR_USERTYPE,
      AMV_CREATE_TIME,
      COINS_NUM
    } = ctx.request.query;
    let uid = Mock.Random.guid();

    TestData.push({
      GTU_ID: uid,
      APP_NAME: APP_NAME,
      TASK_CREATE_USER: TASK_CREATE_USER,
      USR_USERTYPE: USR_USERTYPE,
      AMV_CREATE_TIME: AMV_CREATE_TIME,
      COINS_NUM: COINS_NUM
    });

    Result.success(ctx, {
      newId: uid
    });
  }
  static deleteRow (ctx) {
    let {
      id
    } = ctx.request.query;

    TestData = TestData.filter(u => u.GTU_ID !== id);

    Result.success(ctx, {
      msg: 'success'
    });
  }
  static updateRow (ctx) {
    let {
      GTU_ID,
      APP_NAME,
      TASK_CREATE_USER,
      USR_USERTYPE,
      AMV_CREATE_TIME,
      COINS_NUM
    } = ctx.request.query;

    TestData.some(u => {
      if (u.GTU_ID === GTU_ID) {
        u.APP_NAME = APP_NAME;
        u.TASK_CREATE_USER = TASK_CREATE_USER;
        u.USR_USERTYPE = USR_USERTYPE;
        u.AMV_CREATE_TIME = AMV_CREATE_TIME;
        u.COINS_NUM = COINS_NUM;
        return true;
      }
    });
    Result.success(ctx, {
      msg: 'success'
    });
  }
  static queryRow (ctx) {
    let {
      AMV_CREATE_TIME,
      TASK_CREATE_USER
    } = ctx.request.query;

    let mockTestData = TestData.filter(item => {
      if ((AMV_CREATE_TIME && item.AMV_CREATE_TIME.indexOf(AMV_CREATE_TIME) === -1) && (TASK_CREATE_USER && item.TASK_CREATE_USER.indexOf(TASK_CREATE_USER) === -1)) {
        return false;
      }
      return true;
    });
    Result.success(ctx, {
      data: mockTestData
    });
  }
}

module.exports = Table;
