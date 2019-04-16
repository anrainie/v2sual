const Result = require('../Result/Result');
const uuid4 = require('uuid/v4');

class Table {
    static getOption(ctx) {
        Result.success(ctx, {
            context: uuid4(),
            dict: [{
                name: 'userId',
                desp: '用户名',
                readonly: true,
                pk: true,
                type: 'string'
            }],
            filter: ['userId'],
            add: 'add',
            del: 'del',
            update: 'update',
            query: 'query',
            url: 'html/json'
        });
    }
}

module.exports=Table;