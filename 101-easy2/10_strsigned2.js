// Solution

// input: string of numeric values, may begin with + or -
// output: number

let rs = require('readline-sync');

let nums = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

function toNum(str) {
  console.log(str, typeof str);

  let arr = str.split('').map(el => nums[el]); // array of numbers

  return arr.reduce((acc, el) => (acc * 10) + el, 0);
}

function signer() {
  let str = rs.question('Type a number string:\n');

  if (str[0] === '-') {
    return -toNum(str.slice(1));
  } else if (str[0] === '+') {
    return toNum(str.slice(1));
  } else {
    return toNum(str);
  }
}
console.log(signer());
