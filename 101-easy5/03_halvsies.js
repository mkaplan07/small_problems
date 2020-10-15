// input: array, output: nested array – each half or 1 & 0, 2 & 1, etc.
// arr.splice(0, Math.ceil(len / 2)), arr

let rs = require('readline-sync');

function get(text) {
  return rs.question(text).split('');
}

function halfer() {
  let arr = get('Chars together:\n');

  let res = [];
  res.push(arr.splice(0, Math.ceil(arr.length / 2)), arr);
  // .splice() returns array of deleted els

  return res;
}
console.log(halfer());
