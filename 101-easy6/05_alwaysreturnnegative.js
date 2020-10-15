// input: number, output: if > -1, negative; else number

let rs = require('readline-sync');

function getNum(msg) {
  return rs.questionInt(msg, {limitMessage: 'An integer, pls.'});
  // parseInt() --> 3.3 // 3
}

function flipNegative() {
  let num = getNum('Enter a number:\n');
  return num > -1 ? -num : num;
  // return Math.abs(num) * -1;
}

console.log(flipNegative());
