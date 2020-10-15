// input: three grades (numbers)
// output: average 'A' - 'F'

let rs = require('readline-sync');

function get() {
  let x = rs.questionInt('Enter the first grade:\n'); // uses parseInt()
  let y = rs.questionInt('Enter the second grade:\n');
  let z = rs.questionInt('Enter the third grade:\n');
  return (x + y + z) / 3;
}

function grader(avg) { // grader(get());
  console.log(avg);
  if (avg > 89) { return 'A' } // ignoring scores > 100
  if (avg > 79) { return 'B' }
  if (avg > 69) { return 'C' }
  if (avg > 59) { return 'D' }
  return 'F'
}

console.log(grader(get()));
