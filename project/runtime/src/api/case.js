export const caseRouter=[
    {
        path: "index",
        name: "index",
        component: "spa/index",
        meta: {
          title: "首页",
          icon: "el-icon-goods"
        }
      },
      {
        path: "queryTransaction",
        name: "queryTransaction",
        component: "spa/queryTrade",
        meta: {
          title: "交易查询",
          icon: "el-icon-goods"
        }
      },
      {
        path: "pwdManager",
        name: "pwdManager",
        component: "XhqTest/tranfer",
        meta: {
          title: "转账汇款",
          icon: "el-icon-goods"
        }
      }
]