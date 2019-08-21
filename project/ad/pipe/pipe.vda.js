import axios from 'axios';
import qs from 'qs';

const host = 'v1/ds/dvms/vda';
const signIn = 'loginController/signIn'
const apiList = 'visualDataModelController/queryTreeDataModels';
const dataPreview = 'visualDataModelController/dataPreview';
const username = 'admin';
const password = 'agreexian!';

let token = '';

const signInFn = () => {
    return new Promise(r => {
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
                    token = res.content.token
                }
                r(token);
            }).catch(e=>{
                debugger;
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
    }
}