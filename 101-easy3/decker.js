let rs = require('readline-sync');

function decker() {
  let bin = rs.question('Enter a binary:\n');
  let dec = 0;

  let arr = bin.split(''); // already a string (rs)
  let i = 1;
  while (arr.length > 0) {
    dec += arr.pop() * i;
    i *= 2;
  }

  return dec;
}
console.log(decker());

function deck2() {
  let bin = rs.question('Enter a binary:\n');
  let dec = 0;

  let i = 1;
  while (bin > 0) {
    dec += (bin % 10) * i;
    bin = Math.floor(bin / 10);
    i *= 2;
  }

  return dec;
}
console.log(deck2());
