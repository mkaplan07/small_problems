// input: array of numbers, output: sum of substrings

let rs = require('readline-sync');

function getArr(msg) {
  let input = rs.question(msg).split(' ').filter(el => el !== '').map(el => parseInt(el));
  // split by ' ', filter excess spaces (''), map to integers

  if (input.length < 1 || input.includes(NaN)) {
    // len bc 'enter' will be filtered, leaving []
    // NaN for alphas
    input = getArr(msg);
  }
  return input;
}

function sumOfSums() {
  let arr = getArr('Pls enter your els – separated by spaces\n');
  let sums = [];
  for (let i = 1; i <= arr.length; i += 1) {
    sums = sums.concat(arr.slice(0, i));
  }

  return sums.reduce((acc, el) => acc + el);
}

// let tests = [[3, 5, 2], [1, 5, 7, 3], [4], [1, 2, 3, 4, 5]];
// tests.forEach(el => console.log(sumOfSums(el)));
console.log(sumOfSums());
