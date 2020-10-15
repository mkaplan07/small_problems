// input: number
// output: sum of 3 + 5 plus multiples of 3 & 5 ... number
// find multiples of 5 and 3, then reduce

function finder(num) { // num = 15
  let result = []; // 15, 12, 10, 9, 6, 5, 3
  while (num > 2) {
    if (num % 5 === 0) {
      result.push(num);
      num -= 1;
    } else if (num % 3 === 0) {
      result.push(num);
      num -= 1;
    } else {
      num -= 1;
    }
  }
  return result;
}

function reducer(arr) {
  return arr.reduce((acc, el) => acc + el, 0);
}

let rlSync = require('readline-sync');
let x = Number(rlSync.question('Enter a number:\n'));
// need Number() else reducer() concatenates a string

console.log(reducer(finder(x)));
