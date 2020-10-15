// on separate lines, log odds 1 - 99 (inclusive)

// for (let i = 1; i <= 99; i += 2) {
//   console.log(i);
// }

let rlSync = require('readline-sync');
function logOdds() {
  let min = Number(rlSync.question('What\'s your min?\n'));
  let max = Number(rlSync.question('What\'s your max?\n'));
  let i = min;
  while (i <= max) {
    console.log(i);
    i += 2;
  }
}
logOdds();

/*
Addt'l requirements:
- ensure that inputs are odd
– that max > min
*/
