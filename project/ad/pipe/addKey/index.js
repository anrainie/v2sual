export default function (target, params) {
  let data = JSON.parse(JSON.stringify(target));
  let item,i;

  if ($.isArray(data)) {
    for (item of data) {
      if(params&&params.length){
        for(i of params){
          item[i[0]] = i[1];
        }
      }
    }
  }else if(typeof data==="object"){
    data = [data];
    for (item of data) {
      if(params&&params.length){
        for(i of params){
          item[i[0]] = i[1];
        }
      }
    }
  }
  return data;
};
