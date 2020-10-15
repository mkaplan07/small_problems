// input: array
// output: array of (human) odd idxs, filter for (machine) even idxs

let rs = require('readline-sync');

function oddies() {
  let strings = rs.question('separate by spaces:\n');
  if (strings.length === 0) {
    return [];
  }
  /*
  Have to return the [] edge case before splitting strings.
  On .split(' '), an empty string becomes [''], length 1
  */

  let arr = strings.split(' ');
  return arr.filter((el, idx) => idx % 2 === 0);
}
console.log(oddies());

// Solution
function oddities(arr) {
  let odds = [];
  for (let i = 0; i < arr.length; i += 2) {
    odds.push(arr[i]);
  }
  return odds;
}
let ex = [[2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], ['abc', 'def'], [123], []]
ex.forEach(el => console.log(oddities(el)));
// [2, 4, 6], [1, 3, 5], ['abc'], [123], []
