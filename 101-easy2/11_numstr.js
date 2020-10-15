// input: number
// output: string representation of the input

rs = require('readline-sync');

function stringer() {
  let num = Number(rs.question('Provide a number:\n'));

  let temp;
  let sub = [];

  if (num === 0) {
    sub.unshift(num);
    let zero = sub.join('');

    console.log(zero, typeof zero);
    return zero;
  }

  while (num > 0) {
    temp = num % 10; // 1, 2, 3, 4
    sub.unshift(temp); // [4, 3, 2, 1]
    num = (num - temp) / 10; // 432, 43, 4, 0
    // 0 doesn't trigger if (num === 0) bc condition already failed
  }

  let result = sub.join('');
  console.log(result, typeof result);
}
stringer();
