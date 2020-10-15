// input: integer, # rows
// output: starry triangles
// let result = []
// while (int > 0) result.unshift(`${''.repeat(res.length)}${'*'.repeat(int)`}
// res.forEach(console.log(el));

let rs = require('readline-sync');

function righty() {
  let int = rs.question('Enter a positive integer:\n');

  let res = [];
  while (int > 0) {
    res.unshift(`${' '.repeat(res.length)}${'*'.repeat(int)}`); // .repeat() coerces strings
    int -= 1;
  }

  res.forEach(el => console.log(el));
}
righty();
