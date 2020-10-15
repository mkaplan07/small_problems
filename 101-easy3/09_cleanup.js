// input: mixed string
// output: string of alphas only
// str.replace(/[^...]/, ' '), .split(' '), filter ''s, .join(' ')

let rs = require('readline-sync');

function get() {
  return rs.question('Enter a string:\n');
}

function cleaner(mixed) {
  let arr = mixed.replace(/[^a-z]/gi, ' ').split(' ');
  // replace non-alpha --> arr
  // if consecutive ' 's between words, 1st is sep, rest are ''s

  return arr.filter(el => el !== '').join(' ');
}
console.log(cleaner(get()));

/*
function reggie(mixed) {
  return mixed.replace(/[^a-z]/gi, ' ').replace(/\s+/g, ' ');
                                  // replaces solo & consecutive spaces w/ ' '
                                  // http://regexrenamer.sourceforge.net/help/regex_quickref.html
}
console.log(reggie(get()));
*/
