// inputs: Number(int > zero) & str, 's' or 'p'
// if s, add int(s) to result, else * int(s) w/ result
// output: (number) the sum or product of 1... int

let rlSync = require('readline-sync');

function getSum(n) {
  let sum = 1;
  while (n > 1) {
    sum += n;
    n -= 1;
  }
  return `The sum is ${sum}!`;
}

function getProduct(n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n -= 1;
  }
  return `The product is ${product}!`;
}

function sumOrProduct() {
  let int = Number(rlSync.question('Enter an integer > 0:\n'));
  while (int < 1) {
    int = Number(rlSync.question('Enter an integer > 0:\n'));
  }
  // doesn't check for decimals or NaN

  let op = rlSync.question('sum or product?\n');
  while (op !== 's' && op !== 'p') {
    op = rlSync.question('s or p?\n');
  }

  return op === 's' ? getSum(int) : getProduct(int);
}
console.log(sumOrProduct());
