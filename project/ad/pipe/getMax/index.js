export default function (target, params) {
  let data = JSON.parse(JSON.stringify(target));
  let item;
  let res;
  let str = params[0];

  if ($.isArray(data)) {
    for (item of data) {
      if(item[str]){
        if(!res){
          res = parseFloat(item[str]);
        }else if(item[str]>res){
          res = parseFloat(item[str]);
        }
      }
    }
  }
  return res;
};
