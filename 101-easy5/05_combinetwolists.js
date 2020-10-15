// input: two arrays – non-empty, same length
// output: merged array (a1, b1, a2, b2...)

let rs = require('readline-sync');

function get(txt) {
  return rs.question(txt).split('');
}

function merger() {
  let a = get('Enter first set:\n');
  let b = get('Enter 2nd set:\n');

  for (let i = 1; i <= a.length; i += 2) {
    // begin at index 1 --> b[0] follows a[0]
    // i <= a.length for b[b.length -1]
    a.splice(i, 0, b.shift());
  }

  return a;
}
console.log(merger());
