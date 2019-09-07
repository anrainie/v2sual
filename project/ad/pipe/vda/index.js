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
    "content":{
      "323A3D01-6CA5-4C2C-9981-2B065AC9020B":[
        {"_TBID":"CN0010121","_DID":"18003055","_DSN":"正常","_TBN":"杨浦支行营业部","_DT":"CDS"},
        {"_TBID":"CN0010413","_DID":"18003054","_DSN":"正常","_TBN":"北站支行","_DT":"CDS"},
        {"_TBID":"CN0010121","_DID":"18003053","_DSN":"正常","_TBN":"杨浦支行营业部","_DT":"CDS"},
        {"_TBID":"CN0010413","_DID":"18003058","_DSN":"离线","_TBN":"北站支行","_DT":"ATM"},
        {"_TBID":"CN0010413","_DID":"18003057","_DSN":"卡纸","_TBN":"杨浦支行营业部","_DT":"CDS"}
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