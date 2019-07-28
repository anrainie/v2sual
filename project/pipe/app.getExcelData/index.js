import axios from 'axios';

export default (filename, filter) => axios.get("/v1/ds/excel/get", {
  params: {
    filename: filename,
    filter: filter
  }
}).then(function (response) {
  if (response.data.status) {
    return response.data.content.content;
  }
  throw response.data.errorMsg;
})
