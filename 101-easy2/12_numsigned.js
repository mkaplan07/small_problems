// input: number, 0 or -,+
// output: string, 0 or preceded by -,+
// lookup array, '0'-'9'
// if (num < 0) { sign = '-', num = Math.abs(num) } (num > 0) { sign = '+' }

// let result = ''; do/while
// result = array[num % 10] + result, num = num / 10
// while num > 0

// return result !== '0' ? result = sign + result : result;

let rs = require('readline-sync');
let table = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function stringer(num) {
  let str = '';
  do {
    str = table[num % 10] + str;
    num = Math.floor(num/10);
  } while (num > 0);

  return str;
}

function signer() {
  let num = Number(rs.question('Enter a number:\n'));
  console.log(num, typeof num);

  let sign = '';
  if (Math.sign(num) === -1) {
    sign = `-${stringer(Math.abs(num))}`;
  } else if (Math.sign(num) === 1) {
    sign = '+' + stringer(num);
  } else {
    sign = stringer(num);
  }
  console.log(sign, typeof sign);
}
signer();
