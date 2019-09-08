export default function (target, parmas) {
  let data = JSON.parse(JSON.stringify(target));
  let index = parmas[0];
  let outKey = parmas[1];
  let tempObj = {};

  let res;
  if (data[index]) {
    res = data[index];
  } else {
    res = data[0][index];
    if (outKey) {
      tempObj[outKey] = res;
      res = [tempObj]
    }
  }

  return res;
};
