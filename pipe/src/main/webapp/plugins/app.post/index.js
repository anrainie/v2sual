import axios from axios;

export default (url, data) => {
    axios({
        url,
        data,
        method:'POST'
    });
};