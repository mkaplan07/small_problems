// input: 2 strings – turn "falsy" strings F so it's either string (truthy) or F
// output: boolean
// falsy vals: 0, '', null, undefined, NaN

let rs = require('readline-sync');

function falser(str) {
  if (str.length === 0) { // first falsy value, ''
    return false;
  }
  /*
  '' !== empty str or str.length === 0 bc ''s automatic:
  '''' or ''  '' --> nothing to trim()

  readline-sync.question() automatically trims
  see keepWhitespace www.npmjs.com/package/readline-sync#basic_options
  */

  switch (str) { // false + other four
    case 'false':
    case '0':
    case 'null':
    case 'undefined':
    case 'NaN':
      return false;
    default:
      return str;
  }
}

function xor() {
  let a = rs.question('first operand:\n');
  let b = rs.question('second operand:\n');

  // console.log(a, typeof a);
  // console.log(b, typeof b);

  a = falser(a);
  b = falser(b);

  return ((a && !b) || (!a && b)) ? true : false;
}
// a && !b --> truthy && false true
// !a && b --> false true && truthy

console.log(xor());
