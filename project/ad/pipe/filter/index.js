function transfer(data, item) {
  let res;
  switch (item[1]) {
    case '<':
      res = data.filter(i => i[item[0]] < item[2]);
      break;
    case '=':
      res = data.filter(i => i[item[0]] == item[2]);
      break;
    case '>':
      res = data.filter(i => i[item[0]] > item[2]);
      break;
    default:
      break;
  }
  return res;
};

function compare(state, res, temp) {
  let i, j, istr, jstr;
  let tempRes = [];

  if (state === '||') {
    // for i
    for (i of res) {
      istr = transToStr(i);
      // for j
      for (j of temp) {
        jstr = transToStr(j);
        if (istr !== jstr) {
          tempRes.push(j);
        };
      }
      tempRes.push(i);
    }
  } else if (state === '&&') {
    // for i
    for (i of res) {
      istr = transToStr(i);
      // for j
      for (j of temp) {
        jstr = transToStr(j);
        if (istr === jstr) {
          tempRes.push(j);
        };
      }
    }
  }
  return tempRes;
};

function transToStr(target) {
  let res;
  if ($.isArray(target)) {
    res = target.join(',');
  } else if (typeof target === 'object') {
    res = JSON.stringify(target);
  } else {
    res = Object.prototype.toString.call(target);
  }
  return res;
};

export default function (target, params) {
  let data = JSON.parse(JSON.stringify(target));
  let temp = [];
  let res = [];
  let state = '';

  if ($.isArray(params)) {
    for (let item of params) {
      temp = [];
      if (item.length === 1) {
        state = item[0];
      } else {
        temp = transfer(data, item);
        if (state === '') {
          res = temp;
        } else {
          res = compare(state, res, temp);
        }
      }
    }
  }
  return res;
};
