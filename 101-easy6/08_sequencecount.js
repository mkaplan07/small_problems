// input: count, start
// output: array of count (#) vals – start * i

let rs = require('readline-sync');

function getCount(msg) {
  let input = rs.questionInt(msg, {limitMessage: 'Does not compute.'} );
  while (input < 0) {
    input = getCount('Positive integer, pls.\n');
  }
  return input;
}

function getStart(msg) {
  return rs.questionInt(msg, {limitMessage: 'Integer, pls.'});
}

function printSequence() {
  let count = getCount('Enter your count:\n');
  let start = getStart('And where to begin?\n');

  let resultArray = [];
  for (let i = 1; i <= count; i += 1) {
    resultArray.push(start * i);
  }
  return resultArray;
}

console.log(printSequence());
