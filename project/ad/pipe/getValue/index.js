export default function (target, parmas) {
	let data = JSON.parse(JSON.stringify(target));
	let index = parmas[0];
	let res;
	if (data[index]) {
	  res = data[index];
	} else {
	  res = data[0][index];
	}
	return res;
  };
  