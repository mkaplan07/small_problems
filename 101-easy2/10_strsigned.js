// input: string, which may start with a + or -
// output: number

let rs = require('readline-sync');

function signer() {
  let flag = true;
  let str = rs.question('Type a number string:\n');
  console.log(str, typeof str);

  if (str[0] === '+') {
    str = str.slice(1);
  } else if (str[0] === '-') {
    str = str.slice(1);
    flag = false;
  }

  let arr = str.split('');

  let result = 0;
  let i = 1;
  while (arr.length > 0) {
    result += (arr.pop() * i);
    i *= 10;
  }

  if (flag === false) {
    result = result - (result * 2);
  }
  console.log(result, typeof result);

}
signer();
