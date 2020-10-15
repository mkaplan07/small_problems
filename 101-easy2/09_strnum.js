// input str
// output number

let rs = require('readline-sync');

function toNum() {
  let str = rs.question('Type a number string:\n');
  console.log(str, typeof str);

  let arr = str.split(''); // ['4', '3', '2', '1']
  let result = 0;

  let i = 1;
  while (arr.length > 0) {
    result += (arr.pop() * i);
    i *= 10;
  }

  // 1 * 1 = 1, 2 * 10 = 20, 3 * 100 = 300, 4 * 1000 = 4000
  // 1 + 20 + 300 + 4000 = 4321

  console.log(result, typeof result);
  // return result;
}
toNum();
