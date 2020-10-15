// input: array of digits, output: digits sorted alphabetically

let rs = require('readline-sync');

let errorMsg = '=> A series of numbers, 0-9, separated by spaces.\n';
let alphas = ['zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'];

// side-effect: reads
// AND returns
function get(msg) {
  let input = rs.question(msg);
  if (input === '') {
    input = get(errorMsg);
  } else {
    input = input.replace(/\s+/g, ' ').split(' ').map(el => Number(el));
  }

  if (input.some(el => Number.isNaN(el)) ||
        input.some(el => el < 0) ||
          input.some(el => el > 9)) {
    input = get(errorMsg);
  }
  return input;
}

// side-effect: calls fn that reads
// AND returns
function sortDigits() {
  let digits = get('Sep. w/ spaces, 0 - 9:\n');

  return digits.sort((a, b) => {
    if (alphas[a] < alphas[b]) {
      return -1;
    } else if (alphas[a] > alphas[b]) {
      return 1;
    } else {
      return 0;
    }
  });
}

console.log(sortDigits());

// Nirvair Gill's solution
let digits = [0, 1, 2, 3, 4, 5, 6];
let alphas2 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];

let sortDigits2 = arr => {
  let table = {};
  for (let i = 0; i < digits.length; i += 1) {
    table[alphas2[i]] = digits[i];
  }
  return Object.keys(table).sort().map(key => table[key]);
}

console.log(sortDigits2(digits));

/*
if you don't want to use a compareFunction, you can also map digits
to words, sort the words, then map the sorted words to their indices
*/
