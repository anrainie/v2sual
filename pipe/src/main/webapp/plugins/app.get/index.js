import axios from 'axios';


export default (url, data) => {
    return axios({
        url,
        data,
        method: 'GET'
    });
}