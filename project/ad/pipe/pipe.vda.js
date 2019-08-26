import axios from 'axios';
import qs from 'qs';

const host = 'v1/ds/dvms/vda';
const signIn = 'loginController/signIn'
const apiList = 'visualDataModelController/queryTreeDataModels';
const dataPreview = 'visualDataModelController/dataPreview';
const panelSource = 'visualConfPanelController/info/panel';
const queryDmData = 'visualThemeController/queryDmData';
const username = 'admin';
const password = 'agreexian!';

let token = '';

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
        return axios.post(`${host}/${this.createPanel}`), qs.stringify({
            data: { 
                "treeData": { 
                    "treeNodeName": name, 
                    "treePNodeName": "AWEB测试" 
                },
                 "panelData": {
                      "name": name, 
                      "id": "", 
                      "visualConfPanelCharts": [] 
                } 
            },
            token: token
        })
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
    }
}