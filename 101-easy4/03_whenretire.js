// input: age & target age (tgt) – strings ok
// output: `It's ${yr}. You will retire in ${year + (tgt - age)}. ${tgt - age} years left!`
// let yr = new Date().getFullYear();

let rs = require('readline-sync');

function futuro() {
  let age = rs.question('How old are you?\n'); 
  let tgt = rs.question('At what age would you like to retire?\n');
  let dif = Math.round(tgt - age);

  let yr = new Date().getFullYear(); // w/o new, Date() returns str – vs. obj

  return `It's ${yr}. You will retire in ${yr + dif}. ${dif} years left!`;
}
console.log(futuro());
