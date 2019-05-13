import axios from 'axios';

axios.defaults.withCredentials = true;
global.$axios = axios;

export default function(params){ 
    return axios.post(params.url?`${params.url}/${params.t}/${params.m}`:`/afa/${params.t}/${params.m}`,params.data); 
};