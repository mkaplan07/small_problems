// input: number (string), output: bool
// w/o using String(num) or '' +=, get # of places (i)
// num % 10 * i, which starts at Math.pow(10, # places - 1) & decrements
// return mir === Number(num)

let rs = require('readline-sync');

function get() {
  return num = rs.question('Enter a number:\n'); // string input
}

function pal(str) { // for leading zeros – can't coerce to Number
  return str === str.split('').reverse().join('');
}

function lenny(num) {
  let len = 0;

  while (num >= 1) {
    len += 1;
    num = Math.floor(num / 10);
  }

  return len;
}

function flip(len, num) {
  let mir = 0;

  let i = Math.pow(10, len - 1);

  while (i >= 1) {
    mir += num % 10 * i;
    num = Math.floor(num / 10);
    i /= 10;
  }

  console.log('mir:', mir);
  return mir;
}

function comp() {
  let num = get();
  if (num[0] === '0') {
    return pal(num);
  } else {
    let len = lenny(num);
    let mir = flip(len, num);

    return mir === Number(num); // Number(num) – entered as a string
  }
}
console.log(comp());

// let tests = [34543, 123210, 22, 5];
// tests.forEach(el => console.log(el + ':', comp(el)));
