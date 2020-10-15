let rs = require('readline-sync');

function ted() {
  let min = rs.questionInt('min?\n');
  let max = rs.questionInt('max?\n');
  return calc(min, max);
}

function calc(min, max) {
  if (min > max) {
    // let args = Array.from(arguments);
    // min = args[1]; max = args[0];
    [min, max] = [max, min];
    console.log(`new min: ${min}, new max: ${max}`);
  }
  let age = Math.floor(Math.random() * (max - min + 1) + min);
  return `Teddy is ${age} years old!`;
}
console.log(ted())

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Swapping_variables
