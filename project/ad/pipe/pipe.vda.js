import axios from 'axios';
import qs from 'qs';

const host = 'v1/ds/dvms/vda';
const signIn = 'loginController/signIn'
const apiList = 'visualDataModelController/queryTreeDataModels';
const dataPreview = 'visualDataModelController/dataPreview';
const panelSource = 'visualConfPanelController/info/panel';
const queryDmData = 'visualThemeController/queryDmData';
const createPanelUrl = 'visualConfPanelController/save/panel'
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
        return axios.post(`${host}/${createPanelUrl}`, qs.stringify({
            data: {
                "treeData": {
                    "treeNodeName": name,
                    "treePNodeName": "AWEB测试"
                },
                "panelData": {
                    "name": name,
                    "id": "",
                    "visualConfPanelCharts": [{ 
                        "id": "A599735F-CE75-4D22-AEE0-8911C46F2C0F", 
                        "name": "未命名组件", 
                        "type": "card", 
                        "config": "{\"row\":0,\"x\":0,\"col\":0,\"y\":0,\"sizex\":10,\"width\":10,\"sizey\":71,\"height\":10,\"uuid\":\"A599735F-CE75-4D22-AEE0-8911C46F2C0F\",\"type\":\"card\",\"name\":\"未命名组件\",\"componentInfo\":{\"option\":[{\"row\":0,\"x\":0,\"col\":0,\"y\":0,\"sizex\":48,\"width\":48,\"sizey\":57,\"height\":48,\"uuid\":\"338F1C59-9F3F-4995-9BCF-17283A62B869\",\"type\":null,\"name\":\"未命名组件\",\"componentInfo\":{\"option\":{},\"config\":{}}}],\"config\":{\"backgroundColor\":\"\"}}}", 
                        "pic": "" 
                    }]
                }
            },
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
    }
}