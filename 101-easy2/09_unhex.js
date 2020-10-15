// Further exploration

// input str with chars 0-9 a-f (lookup table)
// output number

let rs = require('readline-sync');
let nums = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7,
  8: 8, 9: 9, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };

function unhex() {
  let str = rs.question('Type a hex string:\n');
  let arr = str.toLowerCase().split('').map(el => nums[el]); // array str to array num

  let result = 0;
  let exp = 0; // exs increase right to left --> .pop()
  while (arr.length > 0) {
    result += (arr.pop() * Math.pow(16, exp));
    // (i * (b16, ex0)) + (i * (b16, ex1)), etc
    // https://www.rapidtables.com/convert/number/hex-to-decimal.html

    exp += 1;
  }

  console.log(result, typeof result);
}
unhex();
