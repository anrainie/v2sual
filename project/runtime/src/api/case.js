export const caseRouter = [{
    path: "index",
    name: "index",
    component: "spa/index",
    meta: {
      title: "首页",
      icon: "el-icon-goods"
    }
  },
  {
    path: "card",
    name: "card",
    component: "spa/generalCard",
    meta: {
      title: "一卡通",
      icon: "el-icon-goods"
    },
    children: [

      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "账户管理",

        },
        children: [{
          path: "accIndex",
          name: "accIndex",
          component: "spa/indexs/accIndex",
          meta: {
            title: "账户首页",

          },
        }, {
          path: "queryTrade",
          name: "queryTrade",
          component: "spa/queryTrade",
          meta: {
            title: "账户查询"
          }
        }, {
          path: "accountOverview",
          name: "accountOverview",
          component: "spa/accountOverview",
          meta: {
            title: "账户总览"
          }
        }]
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "自助转账",

        },
        children: [{
          path: "transferIndex",
          name: "transferIndex",
          component: "spa/indexs/transferIndex",
          meta: {
            title: "转账首页",

          },
        }, {
          path: "tranfer",
          name: "tranfer",
          component: "XhqTest/tranfer",
          meta: {
            title: "转账汇款"
          }
        }, {
          path: "refund",
          name: "refund",
          component: "main/main",
          meta: {
            title: "信用卡还款"
          }
        }]
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "自助缴费",

        },
        children: [{
          path: "payIndex",
          name: "payIndex",
          component: "spa/indexs/payIndex",
          meta: {
            title: "缴费首页",

          },
        }, ]
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "投资管理",

        },
        children: [{
          path: "invertIndex",
          name: "invertIndex",
          component: "spa/indexs/invertIndex",
          meta: {
            title: "投资首页",

          },
        }, ]
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "外汇业务",

        },
        children: [{
          path: "outIndex",
          name: "outIndex",
          component: "spa/indexs/outIndex",
          meta: {
            title: "外汇首页",

          },
        }, ]
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "贷款管理",

        },
        children: [{
          path: "loanIndex",
          name: "loanIndex",
          component: "spa/indexs/loanIndex",
          meta: {
            title: "贷款首页",

          },
        }, {
          path: "queryLoan",
          name: "queryLoan",
          component: "spa/loan/queryLoan",
          meta: {
            title: "个人贷款查询",

          },
        }, ]
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "网上支付",

        },
        children: [{
          path: "webPayIndex",
          name: "webPayIndex",
          component: "spa/indexs/webPayIndex",
          meta: {
            title: "网上支付首页",

          },
        }, {
          path: "ebankPay",
          name: "ebankPay",
          component: "spa/onlinepay/ebankPay",
          meta: {
            title: "银联在线支付",

          },
        },{
          path: "queryProtocal",
          name: "queryProtocal",
          component: "spa/onlinepay/queryProtocal",
          meta: {
            title: "协议查询",

          },
        },{
          path: "quickPay",
          name: "quickPay",
          component: "spa/onlinepay/quickPay",
          meta: {
            title: "快捷支付",
          },
        }, ]
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "spa/certificateNeeded",
        meta: {
          title: "功能申请",

        }
      }
    ]
  },
  {
    path: "creditCard",
    name: "creditCard",
    component: "main/main",
    meta: {
      title: "信用卡",
      icon: "el-icon-goods"
    },
    children: [{
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "客户管理",

        }
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "账户管理",

        }
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "分期理财",

        }
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "还款管理",

        }
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "自助缴费",

        }
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "网上支付",

        }
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "卡片管理",

        }
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "积分管理",

        }
      }
    ]
  },
  {
    path: "super",
    name: "super",
    component: "main/main",
    meta: {
      title: "超级网银",
      icon: "el-icon-goods"
    },
    children: [{
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "本行代管账户",

        }
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "他行账户管理",

        }
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "他行账户转招行",

        }
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "还款管理",

        }
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "资金归集",

        }
      },
      {
        path: "creditCard",
        name: "creditCard",
        component: "main/main",
        meta: {
          title: "功能申请",

        }
      }
    ]

  },
  {
    path: "financial",
    name: "financial",
    component: "main/main",
    meta: {
      title: "财务管理",
      icon: "el-icon-goods"
    }
  },
  {
    path: "fiscard",
    name: "fiscard",
    meta: {
      title: "金融助手",
      icon: "el-icon-goods"
    },
    children: [{
        path: "finQuotation",
        name: "finQuotation",
        component: "spa/finhelper/finQuotation",
        meta: {
          title: "金融行情",

        }
      },
      {
        path: "proSupermarket",
        name: "proSupermarket",
        component: "spa/finhelper/proSupermarket",
        meta: {
          title: "产品超市",

        }
      },
      {
        path: "finCaculate",
        name: "finCaculate",
        component: "spa/finhelper/finCaculate",
        meta: {
          title: "理财计算器",

        }
      },
      {
        path: "today",
        name: "today",
        component: "spa/finhelper/today",
        meta: {
          title: "今日招行",

        }
      }
    ]
  }
]
