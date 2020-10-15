// input: two arrays – eq. lengths, output: array of products

let rs = require('readline-sync');

function get(txt) {
  return rs.question(txt).split(' ');
}

function multi() {
  let a = get('arr1: sep w/ spaces:\n');
  let b = get('arr2: sep w/ spaces:\n');

  return a.map((el, i) => el *= b[i]);
}
console.log(multi());
