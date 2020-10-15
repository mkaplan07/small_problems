// input: 2 arrays, output: merged array – no duplicates

let rs = require('readline-sync');

function get(text) {
  let strings = rs.question(text);
  return strings.split('').map(el => Number(el));
}

function merger() {
  let a = get('Enter the 1st set of numbers...\n');
  let b = get('Enter the 2nd set...\n');
  return a.concat(b.filter(el => !a.includes(el)))
}

console.log(merger());
