// input: odd integer representing # lines & max length
// output: starry diamond.join('\n') – string

// input will always be an odd integer
// what about negatives?
//  => .repeat must >= 0 else "Invalid count value"

let rs = require('readline-sync');

// side effects: reads
// RETURNS
function getInput(msg) {
  let input = rs.question(msg);
  if (!input || input % 2 !== 1) {
              // -3 % 2 === -1, fails
    input = getInput('Odd integer > 0, pls.\n');
  }
  return input;
}

// side effects: writes
function printDiamond(arr) {
  console.log(arr.join('\n'));
}

// side effects: calls fns w/ side effects (getInput, printDiamond)
// RETURNS
function buildDiamond() {
  let stars = getInput('Pls enter your stars.\n');
  let lines = [];
  lines.push('*'.repeat(stars));

  stars -= 2;
  space = 1;

  while (stars > 0) {
    lines.unshift(' '.repeat(space) + '*'.repeat(stars));
    lines.push(' '.repeat(space) + '*'.repeat(stars));

    stars -= 2;
    space += 1;
  }

  return printDiamond(lines);
}

buildDiamond();
