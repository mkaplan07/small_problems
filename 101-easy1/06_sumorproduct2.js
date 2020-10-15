// what if the input was an array of integers?
let rlSync = require('readline-sync');

function getArray() {
  let strings = Array.from(rlSync.question('Enter an array of integers > 0:\n'));
  // thx to rlSync, an array of strings
  let nums = strings.map(el => Number(el));

  // what about NaN and integers < 1?
  let fil = nums.filter(el => Number.isNaN(el) === false && el > 0);

  return fil.length > 0 ? fil : getArray();
}

function getSum(arr) {
  return arr.reduce((acc, el) => acc + el, 0); // no need for +=
}

function getProduct(arr) {
  return arr.reduce((acc, el) => acc * el, 1); // no need for *=
}

function sumOrProduct() {
  let arr = getArray();

  let op = rlSync.question('sum or product?\n');
  while (op !== 's' && op !== 'p') {
    op = rlSync.question('s or p?\n');
  }

  return op === 's' ? getSum(arr) : getProduct(arr);
}
console.log(sumOrProduct());
