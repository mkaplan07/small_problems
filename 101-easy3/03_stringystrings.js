// input: positive integer
// output: string of alternating 1s and 0s, length: integer

let rs = require('readline-sync');

function get() {
  return rs.question('Enter a positive integer:\n');
}

function stringer(int) {
  while (int < 1 || !Number.isInteger(Number(int))) {
                                    // can't run Number.isInteger() on a string
    int = get();
  }

  let result = '';
  let i = 0;
  while (i < int) { // again, comparison coerces to number
    result += (i % 2 === 0) ? 1 : 0;
                              // string concatenation
    i += 1;
  }
  return result;
}

console.log(stringer(get()));
