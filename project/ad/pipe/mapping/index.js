export default function (target, params) {
  let data = JSON.parse(JSON.stringify(target));
  let item, i;
  let tempObj = {};
  let res = [];

  if ($.isArray(data)) {
    for (item of data) {
      tempObj = {};
      for (i of params) {
        tempObj[i[0]] = item[i[1]];
      }
      res.push(tempObj);
    }
  }
  return res;
};
