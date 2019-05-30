import axios from 'axios';

export default (filename, filter) => axios.get("/v1/ds/excel/get", { 
    params:{
        filename:filename,
        filter:filter
    }
}).then(function(response){
    return response.data.content.content;
})