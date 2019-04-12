export const data = {
  structure: {
    id: "root",
    component: "v2Container",
    direction: "row",
    layout: [10, 10, 10, 10, 10, 10, 10, 10],
    style: {
      width: "100%",
      height: "100%"
    },
    data: {},
    children: [{
        id: "title1",
        component: "v2Title",
        style: {},
        data: "基本信息"
      },
      {
        id: "row1",
        component: "v2Container",
        direction: "col",
        layout: [33, 33, 33],
        style: {
          width: "100%",
          height: "100%"
        },
        data: {},
        children: [{
            id: "input_name",
            component: "v2LableInput",
            index: 0,
            data: "",
            label: "姓名",
            placeholder: "请输入姓名"
          },
          {
            id: "input_company",
            index: 1,
            component: "v2LableInput",
            data: "",
            label: "单位名称",
            placeholder: "请输入单位名称"
          },
          {
            id: "input_address",
            index: 2,
            component: "v2LableInput",
            data: "",
            label: "通讯地址",
            placeholder: "请输入通讯地址"
          }
        ]
      },
      {
        id: "row2",
        component: "v2Container",
        direction: "col",
        layout: [33, 33, 33],
        style: {
          width: "100%",
          height: "100%"
        },
        data: {},
        children: [{
            id: "input_tel",
            index: 3,
            component: "v2LableInput",
            data: "",
            label: "电话",
            placeholder: "请输入电话"
          },
          {
            id: "input_certificate",
            index: 4,
            component: "v2LableInput",
            data: "",
            label: "证件类型",
            placeholder: "请输入证件类型"
          },
          {
            id: "input_post",
            index: 5,
            component: "v2LableInput",
            data: "",
            label: "邮政编码",
            placeholder: "请输入邮政编码"
          }
        ]
      },
      {
        id: "title2",
        component: "v2Title",
        style: {},
        data: "管理员信息"
      },
      {
        id: "row3",
        component: "v2Container",
        direction: "col",
        layout: [33, 33, 33],
        style: {
          width: "100%",
          height: "100%"
        },
        data: {},
        children: [{
            id: "input_operator",
            index: 6,
            component: "v2LableInput",
            data: "",
            label: "管理员姓名",
            placeholder: "请输入管理员姓名"
          },
          {
            id: "input_operatorNum",
            index: 7,
            component: "v2LableInput",
            data: "",
            label: "管理员编号",
            placeholder: "请输入管理员编号"
          },
          {
            id: "input_apply",
            index: 8,
            component: "v2LableInput",
            data: "",
            label: "申请证书",
            placeholder: "请输入申请证书"
          }
        ]
      },
      {
        id: "title3",
        component: "v2Title",
        style: {},
        data: "账户信息"
      },
      {
        id: "row4",
        component: "v2Container",
        direction: "col",
        layout: [33, 33, 33],
        style: {
          width: "100%",
          height: "100%"
        },
        data: {},
        children: [{
            id: "input_account",
            index: 9,
            component: "v2LableInput",
            data: "",
            label: "账号",
            placeholder: "请输入账号"
          },
          {
            id: "input_bank",
            index: 10,
            component: "v2LableInput",
            data: "",
            label: "开户行名称",
            placeholder: "请输入开户行名称"
          },
          {
            id: "input_accontName",
            index: 11,
            component: "v2LableInput",
            data: "",
            label: "账户名称",
            placeholder: "请输入账户名称"
          }
        ]
      },
      {
        id: "row14",
        component: "v2Container",
        direction: "col",
        layout: [33, 33, 33],
        style: {
          width: "100%",
          height: "100%"
        },
        children: [{
            id: "complexComponent1",
            component: "v2ComplextWidget",
            layout: [30, 30],
            direction: "row",
            children: [{
                id: "input_bank1",
                index: 10,
                component: "v2LableInput",
                data: "",
                label: "开户行名称",
                placeholder: "请输入开户行名称"
              },
              {
                id: "input_accontName2",
                index: 11,
                component: "v2LableInput",
                data: "",
                label: "账户名称",
                placeholder: "请输入账户名称"
              }
            ]
          },
          null,
          null
        ]
      }
    ]
  }
}
