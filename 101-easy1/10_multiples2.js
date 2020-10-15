// solution

function isMultiple(x, div) {
  return x % div === 0;
}

function adder(num) {
  let sum = 0;
  for (let i = 3; i <= num; i += 1) {
    if (isMultiple(i, 3) || isMultiple(i, 5)) {
      sum += i;
    }
  }
  return sum;
}

let rlSync = require('readline-sync');
let numero = rlSync.question('Enter a number:\n');
// don't need Number() – numero coerced by i <= num

console.log(adder(numero));
