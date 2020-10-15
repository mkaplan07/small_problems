// Solution

// input: number
// output: string
// use % 10 (and num / 10) to isolate each digit
// result = arr[digit] + result
// do/while loop for 0 (while num > 0)

let rs = require('readline-sync');

let strings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// can't use an object bc keys are strings

function stringer() {
  let num = Number(rs.question('Provide a number:\n'));

  let result = '';
  do {
    let rem = num % 10;
    result = strings[rem] + result; // like unsshift();
    num = Math.floor(num / 10); // decrement
  } while (num > 0);

  console.log(result, typeof result);
}
stringer();
