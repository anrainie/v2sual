import qs from 'qs';

export const requestLogin = params => {
  return global.$axios.post(
    `${global.$axios.server}/signIn.do`,
    qs.stringify(params), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  ).then(res => {
    return res;
  });
};

export const getRoutersList = params=>{
  var paramsObj = params||{};

  paramsObj.ctoken = window.localStorage.getItem('ctoken')||'';
  return global.$axios.get(`${global.$axios.server}/springmvc/menu/loadMenu.do`,{
    params:paramsObj
  })

}
//export  const requestLogin = params => {
//   return global.$axios.post(`${global.$axios.mock}/login`, params).then(res => res.data);
// };



// export const getRoutersList = params => {
//   return global.$axios.get(`${global.$axios.mock}/-/router/get`, {
//     params: params
//   });
// };

export const getUserList = params => {
  return global.$axios.get(`${global.$axios.mock}/-/user/list`, {
    params: params
  });
};

export const removeUser = params => {
  return global.$axios.get(`${global.$axios.mock}/-/user/remove`, {
    params: params
  });
};

export const editUser = params => {
  return global.$axios.get(`${global.$axios.mock}/-/user/edit`, {
    params: params
  });
};

export const addUser = params => {
  return global.$axios.get(`${global.$axios.mock}/-/user/add`, {
    params: params
  });
};

export const getUserListPage = params => {
  return global.$axios.get(`${global.$axios.mock}/-/user/listpage`, {
    params: params
  });
};

export const getMainList = params => {
  return global.$axios.get(`${global.$axios.mock}/-/getMainList`, {
    params: params
  });
};