// input: number, output: sum of digits
// can't use loops

let rs = require('readline-sync');

function getNum(msg) {
  let input = rs.questionInt(msg, {limitMessage: 'Try again...'});
  if (input < 0) {
    input = getNum('Positive integer, please:\n');
  }
  return input;
}

function sumDigits() {
  let num = getNum('Enter a number:\n');

  let arr = String(num).split('');
  return arr.reduce((acc, digit) => acc + Number(digit), 0);
    // set acc to 0, otherwise Number(digit) concatenated w/ 1st char
}

console.log(sumDigits());
