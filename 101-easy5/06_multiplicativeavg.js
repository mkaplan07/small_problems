// input: arr, output: 'quotient.xxx'
// arr.reduce(product) / len .toFixed(3)

let rs = require('readline-sync');

function get(txt) {
  return rs.question(txt).split(' ');
}

function multi(arr) {
  // let arr = get('Sep. w/ spaces:\n');

  let pro;
  try {
    pro = arr.reduce((acc, el) => acc *= el);
    // no initialValue --> TypeError on []
  } catch {
    pro = 1;
    console.log(`pro set to ${pro}`);
  }

  let quo = pro / arr.length;
  console.log('pro:', pro, 'arr.length:', arr.length, 'quo:', quo);
  return quo.toFixed(3);
}

console.log(multi([]));
