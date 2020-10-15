// input: array, output: reversed array
// reassign each element

/*
My first solution:
let copy = [], for loop... copy.push(arr[arr.length - (1 + i)]);
for loop... arr[i] = copy[i];
*/

let rs = require('readline-sync');

function getArray(msg) {
  return rs.question(msg).split(' ');
}

let input = getArray('Sep. w/ spaces:\n');

function reverseArray(input) {
  console.log('original input:', input);
  let copy = [];
  for (let i = 0; i < (input.length / 2); i += 1) {
    copy[i] = input[i];
    input[i] = input[input.length - (1 + i)]
    input[input.length - (1 + i)] = copy[i];
  }
  console.log('input reversed:', input);
  return input;
}

console.log(input === reverseArray(input));
