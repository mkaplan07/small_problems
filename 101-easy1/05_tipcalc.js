// inputs from .prompt(): bill amount & tip rate – numbers
// outputs: log tip and total – numbers

let rlSync = require('readline-sync');

function tipCalc() {
  let bill = parseFloat(rlSync.question('How much is the bill?\n')); // num
  let perc = parseFloat(rlSync.question('And the tip percentage?\n')); // num

  let tip = bill * (perc / 100);
  // .toFixed(2) turns tip to str, concatenates in the 2nd console.log
  // $200 + 15% tip // '20030'

  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The bill is $${(bill + tip).toFixed(2)}`);
  // can only call .toFixed(2) bc tip & bill are numbers
}
tipCalc();
