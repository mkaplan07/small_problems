let rlSync = require('readline-sync');

/*
let multi = (a, b) => a * b;
let square = a => multi(a, a);

let numero = rlSync.question('number to square:\n'); // invokes rlSync

console.log(square(numero)); // invokes square, which invokes multi
*/

let multi = (a, b) => a * b;

let base = rlSync.question('base?\n');
let exp = rlSync.question('exponent?\n');

let power = (base, exp) => {
  let result = base;
  while (exp > 1) {
    result = multi(result, base);
    // each iteration is result (increasing) * base

    // easier to write this w/o multi:
    // result = 1, (exp > 0), result *= base;
    exp -= 1;
  }
  return result;
}

console.log(power(base, exp));
