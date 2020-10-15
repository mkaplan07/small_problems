// inputs: two strings
// output: one string (concatenate)
// check for ''
// use string.length

let rlSync = require('readline-sync');

function sls() {
  let a = rlSync.question('uno:\n');
  let b = rlSync.question('dos:\n');

  return a.length > b.length ? b + a + b : a + b + a;
  // "JS automatically coerces string primitives to String objects when needed"
}
console.log(sls());
