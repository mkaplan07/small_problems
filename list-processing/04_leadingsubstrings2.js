// input: str, output: all substrings, sorted from shortest

let rs = require('readline-sync');

function getStr(msg) {
  let input = rs.question(msg);
  if (!input) {
    input = getStr('Please enter a string:\n');
  }
  return input;
}

function findSubstrings() {
  let str = getStr('Enter a string:\n');
  let acc = '';
  return str.split('').map(el => acc += el);
}

console.log(findSubstrings());
