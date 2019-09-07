import axios from 'axios';
import qs from 'qs';

const host = 'v1/ds/dvms/vda';
const signIn = 'loginController/signIn'
const apiList = 'visualDataModelController/queryTreeDataModels';
const dataPreview = 'visualDataModelController/dataPreview';
const panelSource = 'visualConfPanelController/info/panel';
const queryDmData = 'visualThemeController/queryDmData';
const queryNewDmData = 'visualThemeController/queryNewDmData';

const createPanelUrl = 'visualConfPanelController/save/panel'
const username = 'admin';
const password = 'agreexian!';

let token = '';


const fakeData = {
  '网点树': {
    "params": [{
      "requestid": "27CF0EDB-981B-4580-9A19-A23AADE92B64",
      "cols": [
        "_orgname"
      ]
    }],
    "content": {
      '27CF0EDB-981B-4580-9A19-A23AADE92B64': [
        { "_orgname": "渠道管理部" },
        { "_orgname": "平台管理部" },
        { "_orgname": "运行管理部" },
        { "_orgname": "系统应用管理部" },
        { "_orgname": "杭州分行" },
        { "_orgname": "杭州分行营业部" },
        { "_orgname": "市北分行" },
        { "_orgname": "杨浦支行" },
        { "_orgname": "杨浦支行营业部" },
        { "_orgname": "闸北支行" },
        { "_orgname": "零售业务部" }
      ]
    }
  },

  "开户趋势": {
    "params": [{
      "requestid": "518B3F39-B17B-486D-B799-779F0CD98FC5",
      "datatype": "1",
      "moduleid": "0f25a46ec83a38088909c16269edb30e",
      "statcontent": {},
      "filter": "",
      "modelfilter": "",
      "order": "",
      "cols": [
        "开会数昨日同比"
      ],
      "limit": ""
    }],
    "content": {
      "518B3F39-B17B-486D-B799-779F0CD98FC5": [
        { "_openAccountCount": 351 },
        { "_openAccountCount": 2 },
        { "_openAccountCount": 3666 },
        { "_openAccountCount": 1679 },
        { "_openAccountCount": 2244 },
        { "_openAccountCount": 180 },
        { "_openAccountCount": 682 },
        { "_openAccountCount": 5248 },
        { "_openAccountCount": 49 }
      ]
    }
  },
  "自助设备异常信息": {
    "params": [{
      "requestid": "323A3D01-6CA5-4C2C-9981-2B065AC9020B",
      "cols": [
        "_DID",
        "_DT",
        "_TBID",
        "_DSN",
        "TBN"
      ]
    }],
    "content": {
      "323A3D01-6CA5-4C2C-9981-2B065AC9020B": [
        { "_TBID": "CN0010121", "_DID": "18003055", "_DSN": "正常", "_TBN": "杨浦支行营业部", "_DT": "CDS" },
        { "_TBID": "CN0010413", "_DID": "18003054", "_DSN": "正常", "_TBN": "北站支行", "_DT": "CDS" },
        { "_TBID": "CN0010121", "_DID": "18003053", "_DSN": "正常", "_TBN": "杨浦支行营业部", "_DT": "CDS" },
        { "_TBID": "CN0010413", "_DID": "18003058", "_DSN": "离线", "_TBN": "北站支行", "_DT": "ATM" },
        { "_TBID": "CN0010413", "_DID": "18003057", "_DSN": "卡纸", "_TBN": "杨浦支行营业部", "_DT": "CDS" }
      ]
    }
  },
  '当前排队': {
    "params": [{
      "requestid": "0A7C1993-E24C-405F-AD67-24D860F5CBAD",
      "cols": [
        "_queuedCount"
      ]
    }],
    "content": {
      '0A7C1993-E24C-405F-AD67-24D860F5CBAD': [
        { "_queuedCount": 11 },
        { "_queuedCount": 11 },
        { "_queuedCount": 11 },
        { "_queuedCount": 11 },
        { "_queuedCount": 11 },
        { "_queuedCount": 11 }
      ]
    }
  },
  "已处理": {
    "params": [{
      "requestid": "F6B35B6C-3269-4ACB-941A-2C5E67B12D78",
      "cols": [
        "_calledCount"
      ]
    }],
    "content": {
      'F6B35B6C-3269-4ACB-941A-2C5E67B12D78': [
        { "_calledCount": 11 },
        { "_calledCount": 11 },
        { "_calledCount": 11 },
        { "_calledCount": 11 },
        { "_calledCount": 11 },
        { "_calledCount": 11 },
        { "_calledCount": 11 }
      ]
    }
  },
  "排队等待最长耗时": {
    "params": [{
      "requestid": "E33E1AC8-F5F8-4126-8F84-2615F9BE555A",
      "cols": [
        "_dailyTotalMaxQueuingWaiteTime"
      ]
    }],
    "content": {
      'E33E1AC8-F5F8-4126-8F84-2615F9BE555A': [
        { "_dailyTotalMaxQueuingWaiteTime": 886201 },
        { "_dailyTotalMaxQueuingWaiteTime": 886201 },
        { "_dailyTotalMaxQueuingWaiteTime": 886141 },
        { "_dailyTotalMaxQueuingWaiteTime": 886201 },
        { "_dailyTotalMaxQueuingWaiteTime": 886263 },
        { "_dailyTotalMaxQueuingWaiteTime": 886201 },
        { "_dailyTotalMaxQueuingWaiteTime": 886263 },
        { "_dailyTotalMaxQueuingWaiteTime": 886262 },
        { "_dailyTotalMaxQueuingWaiteTime": 886263 }
      ]
    }
  },
  "排队等待平均耗时": {
    "params": [{
      "requestid": "826FE05B-2702-442C-8705-776ABB8D6298",
      "cols": [
        "_dailyTotalAVGQueuingWaiteTime"
      ]
    }],
    "content": {
      'E33E1AC8-F5F8-4126-8F84-2615F9BE555A': [
        { "_dailyTotalAVGQueuingWaiteTime": 80564 },
        { "_dailyTotalAVGQueuingWaiteTime": 0 },
        { "_dailyTotalAVGQueuingWaiteTime": 0 },
        { "_dailyTotalAVGQueuingWaiteTime": 0 },
        { "_dailyTotalAVGQueuingWaiteTime": 0 },
        { "_dailyTotalAVGQueuingWaiteTime": 0 },
        { "_dailyTotalAVGQueuingWaiteTime": 0 },
        { "_dailyTotalAVGQueuingWaiteTime": 0 },
        { "_dailyTotalAVGQueuingWaiteTime": 0 },
        { "_dailyTotalAVGQueuingWaiteTime": 80558 },
        { "_dailyTotalAVGQueuingWaiteTime": 80558 }
      ]
    }
  },
  "处理等待平均耗时": {
    "params": [{
      "requestid": "D1EE5773-273C-4288-A8FB-D3695125813B",
      "cols": [
        "_dailyTotalCalledWaiteTime"
      ]
    }],
    "content": {
      'D1EE5773-273C-4288-A8FB-D3695125813B': [
        { "_dailyTotalCalledWaiteTime": "671" },
        { "_dailyTotalCalledWaiteTime": "2013" },
        { "_dailyTotalCalledWaiteTime": "3355" },
        { "_dailyTotalCalledWaiteTime": "2684" },
        { "_dailyTotalCalledWaiteTime": "3355" },
        { "_dailyTotalCalledWaiteTime": "2013" },
        { "_dailyTotalCalledWaiteTime": "2013" }
      ]
    }
  },
  "上月平均等待耗时": {
    "params": [{
      "requestid": "DCAA7FB8-E1A0-487A-A389-BB5BF773ED05",
      "cols": [
        "上月平均等待耗时"
      ]
    }],
    "content": {
      'D1EE5773-273C-4288-A8FB-D3695125813B': [
        { "上月平均等待耗时": 3237.0 }
      ]
    }
  },
  "自助设备信息":{
    "params": [{
      "requestid": "20711E8D-6E33-4102-8F26-D938249EF004",
      "cols": [
        "_count"
      ]
    },{
      "requestid": "158007AE-DD0F-475D-B82F-4154EAF90B22",
      "cols": [
        "总完好率"
      ]
    },{
      "requestid": "345F34BE-2A49-4222-A6CE-A2CB2A506C93",
      "cols": [
        "总开机率"
      ]
    },{
      "requestid": "DB4351D0-2F62-4D5E-996C-48103F640442",
      "cols": [
        "_normal"
      ]
    },{
      "requestid": "39BDC953-FC7C-4FBF-89DE-DF2A7FA326A5",
      "cols": [
        "_online"
      ]
    }],
    "content": {
      '20711E8D-6E33-4102-8F26-D938249EF004': [
        { "_count": 1557 },
        { "_count": 1552 },
        { "_count": 2502 },
        { "_count": 2498 },
      ],
      '158007AE-DD0F-475D-B82F-4154EAF90B22':[
        {"总完好率":98}
      ],
      '345F34BE-2A49-4222-A6CE-A2CB2A506C93':[
        {"总开机率":86}
      ],
      "39BDC953-FC7C-4FBF-89DE-DF2A7FA326A5":[
        {"_online":1335},
        {"_online":1330},
        {"_online":2145},
        {"_online":2141},
        {"_online":1933},
        {"_online":1930},
        {"_online":1183}
      ],
      "DB4351D0-2F62-4D5E-996C-48103F640442":[
        {"_normal":1335},
        {"_normal":1330},
        {"_normal":2145},
        {"_normal":2141},
        {"_normal":1933},
        {"_normal":1930},
        {"_normal":1183}
      ]
    }
  },
  "总数":{
    "params": [{
      "requestid": "ACB9639A-ABA2-4956-BA50-DD944D3EDF89",
      "cols": [
        "_dailyCount"
      ]
    }],
    "content": {
      'ACB9639A-ABA2-4956-BA50-DD944D3EDF89': [
        { "_dailyCount": 15222743 }
      ]
    }
  },
  "交易量":{
    "params": [{
      "requestid": "373CF19D-071B-482F-9CBE-64BC9217FB60",
      "cols": [
        "_dailyBusTransCount"
      ]
    }],
    "content": {
      '373CF19D-071B-482F-9CBE-64BC9217FB60': [
        { "_dailyBusTransCount": 221978 }
      ]
    }
  },
  "环比":{
    "params": [{
      "requestid": "B09EDAB7-FBBB-4C58-B677-0CF9DD1963C6",
      "cols": [
        "rate"
      ]
    }],
    "content": {
      'B09EDAB7-FBBB-4C58-B677-0CF9DD1963C6': [
        { "rate": -0.87 },
        { "rate": -0.79 },
        { "rate": -0.26 }
      ]
    }
  },
  "完好数":{
    "params": [{
      "requestid": "18CD6D40-92C6-410C-ABFD-77712BD883B0",
      "cols": [
        "_dailyNormal"
      ]
    }],
    "content": {
      '18CD6D40-92C6-410C-ABFD-77712BD883B0': [
        { "_dailyNormal": 5061500 },
        { "_dailyNormal": 15219348 },
        { "_dailyNormal": 10540 }
      ]
    }
  },
  "开机数":{
    "params": [{
      "requestid": "BE7C1AB5-CA0E-4FFB-A37F-160882FFAF4F",
      "cols": [
        "_dailyOnline"
      ]
    }],
    "content": {
      'BE7C1AB5-CA0E-4FFB-A37F-160882FFAF4F': [
        { "_dailyOnline": 5061500 },
        { "_dailyOnline": 15248152 },
        { "_dailyOnline": 10154477 }
      ]
    }
  },
  "完好率":{
    "params": [{
      "requestid": "F901CC51-DCF6-49D5-A4CB-DB9F4E6A3F0F",
      "cols": [
        "_dailyNormalRate"
      ]
    }],
    "content": {
      'F901CC51-DCF6-49D5-A4CB-DB9F4E6A3F0F': [
        { "_dailyNormalRate": 1 },
        { "_dailyNormalRate": 1 },
        { "_dailyNormalRate": 0 }
      ]
    }
  },
  "开机率":{
    "params": [{
      "requestid": "8F4A4321-89D9-4EFE-AC16-9C04F635D7AF",
      "cols": [
        "_dailyOnlineRate"
      ]
    }],
    "content": {
      '8F4A4321-89D9-4EFE-AC16-9C04F635D7AF': [
        { "_dailyOnlineRate": 1 },
        { "_dailyOnlineRate": 1 },
        { "_dailyOnlineRate": 1 }
      ]
    }
  }
};

const signInFn = () => {
  return new Promise((r, j) => {
    axios.post(
      `${host}/${signIn}`,
      qs.stringify({
        username: username,
        password: password
      }),
      {
        headers: {
        }
      }).then(res => {
        if (res.status) {
          if (res.data) {
            token = res.data.content.token;
          } else {
            token = res.content.token
          }
        } else {
          j(res.errorMsg);
        }
        r(token);
      }).catch(e => {
        j(e);
      })
  })
}

export default {
  ready() {
    return token ? new Promise(r => r(token)) : signInFn();
  },
  list() {
    return axios.post(`${host}/${apiList}`, qs.stringify({
      token: token
    }));
  },
  data(id) {
    return axios.post(`${host}/${dataPreview}`, qs.stringify({
      token: token,
      dmUid: id
    }));
  },
  createPanel(name) {
    return axios.post(`${host}/${createPanelUrl}`, qs.stringify({
      data: JSON.stringify({ "treeData": { "treeNodeName": name, "treePNodeName": "AWEB测试" }, "panelData": { "name": name, "id": "", "visualConfPanelCharts": [] } }),
      token: token
    }))
  },
  //获取面板数据
  panel(panelName) {
    return axios.post(`${host}/${panelSource}`, qs.stringify({
      token: token,
      panelName
    }))
  },
  //获取配置数据
  paramAjax(params) {
    return axios.post(`${host}/${queryDmData}`, qs.stringify({
      token: token,
      request: JSON.stringify({
        userid: username,
        paras: params
      })
    }))
  },

  paramNewAjax(params, apiName) {
    return Promise(r => {
      r({
        content: fakeData[apiName].content
      });
    });

    // return axios.post(`${host}/${queryNewDmData}`, qs.stringify({
    //     token: token,
    //     request: JSON.stringify({
    //         userid: username,
    //         paras: params
    //     })
    // }));
  }
}