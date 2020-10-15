// input: positive int, output: array of digits

let rs = require('readline-sync');

function get(txt) {
  return rs.questionInt(txt);
}

function dig() {
  let res = [];

  let int = get('Enter a positive integer:\n');
  do {
    res.unshift(int % 10);
    int = Math.floor(int / 10);
  } while (int > 0);

  return res;
}
console.log(dig());

// function sol() {
//   let int = get('Enter a positive integer:\n');
//
//   let chars = String(int).split(''); // arr chars
//   return chars.map(el => Number(el));
// }
// console.log(sol());
