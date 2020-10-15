// Solution

let rs = require('readline-sync');

function fibby() {
  let len = rs.question('Enter a length:\n');

  let first = 0; 
  let second = 1;
  let fib = 1;
  let i = 1;

  while (String(fib).length < len) { // len implicitly coerced to number
    fib = first + second;
    first = second;
    second = fib;
    i += 1;
  }

  console.log(`${i}: ${fib}, ${i - 1}: ${first}`);
  return i;
}
console.log(fibby());
