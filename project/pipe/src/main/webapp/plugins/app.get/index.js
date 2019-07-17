import axios from 'axios';


export default (url, params) => {
    return axios({
        url,
        params,
        method: 'GET'
    });
}