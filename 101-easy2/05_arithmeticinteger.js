// input: two numbers (Number(rlsync))
// output: numbers

let rs = require('readline-sync');

let int1 = () => parseInt(rs.question('first integer:\n'));
let int2 = () => parseInt(rs.question('second integer:\n'));

function mather(a, b) {
  while (a < 1) { // parseInt forces int. (a < 1) forces > 0
    a = int1();
  }
  while (b < 1) {
    b = int2();
  }

  console.log(a + b, a - b, a * b, Math.round(a / b), a % b, Math.pow(a,b));
}

mather(int1(), int2());
