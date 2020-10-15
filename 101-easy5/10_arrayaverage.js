// input: array of positive ints, output: average

let rs = require('readline-sync');

function get(txt) {
  return rs.question(txt).split(' ');
}

function avg() {
  let arr = get('Sep. w/ spaces:\n').map(el => Number(el));

  let sum = arr.reduce((acc, el) => acc += el); // initialValue not necessary
  return Math.floor(sum / arr.length);
}
console.log(avg());
