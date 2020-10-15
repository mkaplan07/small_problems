// input: number (string)
// output: if input is symmetrical (even), Number(input). Else input * 2
// Symmetrical?
// let len = str.length
// str.slice(0, len / 2) === str.slice(len / 2, len)

let rs = require('readline-sync');

function get() {
  let num = rs.question('Integer:\n');
  while (!num || Number.isNaN(num * 2)) {
    /*
    !num for '', which evals to 0 (0 * 2 // 0)
    str is a problem if it's not symmetrical: str * 2 // NaN
    strs: 'str', 'true', 'null', 'undefined'
    */
    num = rs.question('We need a number.\n');
  }
  return num;
}

function sym(num) { // sym(get());
  let len = num.length;
  if (num.slice(0, len / 2) === num.slice(len / 2)) {
    return Number(num);
  } else {
    return num * 2;
  }
}
console.log(sym(get()));

// let vals = ['37', '44', '334433', '444', '107', '103103', '3333', '7676'];
// vals.forEach(el => console.log(sym(el)));

// what about negative numbers?
