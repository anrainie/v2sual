export default function (target, params) {
  let data = JSON.parse(JSON.stringify(target));
  let item;
  let res = 0;
  let str = params[0];

  if ($.isArray(data)) {
    for (item of data) {
      if(item[str]){
        res = res + parseFloat(item[str]);
      }
    }
    res = res/data.length;
  }
  return res;
};
