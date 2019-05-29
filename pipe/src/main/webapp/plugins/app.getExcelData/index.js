import axios from 'axios';

export default (filterName, filterStr) => axios.get("/v1/ds/excel/get", { filterName, filterStr});