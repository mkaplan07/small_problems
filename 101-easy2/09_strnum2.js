// Solution

// input str
// split; map chars to obj[char]; for each, val + (10 * 0)
// output number

let rs = require('readline-sync');
let nums = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

function toNum() {
  let str = rs.question('Type a number string:\n');
  let arr = str.split('').map(el => nums[el]); // array str to array num

  let result = arr.reduce((acc, el) => acc = (10 * acc) + el, 0);

  console.log(result, typeof result);
}
toNum();
