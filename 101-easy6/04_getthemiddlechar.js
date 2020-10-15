// input: string, output: middle character(s)

let rs = require('readline-sync');

function getStr(msg) {
  let str = rs.question(msg);
  while (str === '') {
    str = rs.question('Pls enter a string:\n');
  }
  return str;
}

function printMiddleChar() {
  let str = getStr('Enter a string:\n');
  let mid = str.length / 2;

  if (str.length % 2 === 0) {
    return str.slice(mid - 1, mid + 1);
  } else {
    return str.slice(Math.floor(mid), Math.ceil(mid));
  }
}

console.log(printMiddleChar());
