// Solution

let rs = require('readline-sync');

function righty() {
  let rows = rs.question('Enter number of rows:\n');

  let stars = 1;
  while (rows > 0) {
    console.log(`${' '.repeat(rows - 1)}${'*'.repeat(stars)}`);
    rows -= 1;
    stars += 1;
  }
}
righty();
