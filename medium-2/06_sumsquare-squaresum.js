// input: count (# of nums, in order)
// output: nums.reduce() ** 2 less nums.reduce(a + e ** 2, 0)

// *  about *
// count starts at 1
// let arr = [...Array(count)].map((el, idx) => el = idx + 1) // [1, 2, 3]
//  • Array(count) // [empty * 3]
//  • [...Array(count)] // [undefined, undefined, undefined]
// or
//  • [...Array(count).keys()].map()
// let min = arr.reduce((acc, el) => acc + el) ** 2
// let sub = arr.reduce((acc, el) => acc + (el ** 2))
// return min - sub;

// *  questions *
// emptiness: i) looks like input (count) will always be a positive integer
//  o) can subtraction result in a negative number? Does it matter?
// boundaries: len, m/m, sep, stop...
// repetition...
// numbers: e/o n/a, negative/zero => input always positive
// data type: input int, output diff. (number)
// log or return? "computes" => returns?

let rs = require('readline-sync');

function get(msg) {
  let input = parseInt(rs.question(msg));
  if (!input || input < 1) {
    input = get('Positive integer, pls:\n');
  }
  return input;
}

function computeDifference() {
  let count = get('Enter a positive integer:\n');

  let arr = [...Array(count)].map((el, idx) => el = idx + 1);
  let min = arr.reduce((acc, el) => acc + el) ** 2;
  let sub = arr.reduce((acc, el) => acc + (el ** 2));

  return min - sub;
}

console.log(computeDifference());

// Solution
function solution(count) {
  let sum = 0;
  let sumSquares = 0;

  for (let i = 1; i <= count; i += 1) {
    sum += i;
    sumSquares += i ** 2;
  }

  return Math.pow(sum, 2) - sumSquares;
}

console.log('& for the solution...');
console.log(solution(get()));
