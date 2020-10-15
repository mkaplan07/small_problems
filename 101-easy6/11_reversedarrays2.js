// input: array, output: reversed array
// reassign each element

let rs = require('readline-sync');

function getArray(msg) {
  return rs.question(msg).split(' ');
}

let input = getArray('Sep. w/ spaces:\n');

// Solution
function reverseArray(input) {
  console.log('original input:', input);
  let leftIdx = 0;
  let rightIdx = input.length - 1;
  while (leftIdx < input.length / 2) {
    [input[leftIdx], input[rightIdx]] =
      [input[rightIdx], input[leftIdx]];
    leftIdx += 1;
    rightIdx -= 1;
  }
  console.log('input reversed:', input);
  return input;
}

console.log(input === reverseArray(input));
