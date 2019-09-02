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
        path: "card",
        name: "card",
        component: "main/main",
        meta: {
          title: "一卡通",
          icon: "el-icon-goods"
        },
        children:[
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
              title: "自助转账",
             
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
              title: "投资管理",
             
            }
          },
          {
            path: "creditCard",
            name: "creditCard",
            component: "main/main",
            meta: {
              title: "外汇业务",
             
            }
          },
          {
            path: "creditCard",
            name: "creditCard",
            component: "main/main",
            meta: {
              title: "贷款管理",
             
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
        children:[
          {
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
        children:[
          {
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
        children:[
          {
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