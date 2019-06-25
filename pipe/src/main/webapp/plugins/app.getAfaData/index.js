import axios from 'axios';

// axios.defaults.withCredentials = true;
// global.$axios = axios;

export default function(params){ 
    return axios[params.type||'post'](params.url?`${params.url}/${params.t}/${params.m}`:`/v1/ds/afa/DatasourceAdapter/${params.t}/${params.m}`,params.data); 
};