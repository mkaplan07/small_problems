// input: positive int, output: array of ints – 1 to arg

let rs = require('readline-sync');

function getInt(msg) {
  let input = rs.questionInt(msg, {limitMessage: 'Does not compute.'});
                                    // can't be evaluated to an integer
  while (input < 0) {
    input = getInt('We need a positive integer:\n');
  }
  return input;
}

function printIntsArray() {
  let num = getInt('Enter a number:\n');

  let intsArray = [];
  for (let counter = 1; counter <= num; counter += 1) {
    intsArray.push(counter);
  }
  return intsArray;
}

console.log(printIntsArray());

// [...Array(3).keys()].map(el => ++el);

/*
Array(3) makes 3 iterable
[...Array(3)] // [undefined, undefined, undefined]
.keys() flips the undefineds to [0, 1, 2]
.map() +1s each key
*/

// for more on ..., see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// "Spread in array literals"
