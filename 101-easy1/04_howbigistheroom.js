// prompt for width & length in m
// log the area in m (square ft.)

let rlSync = require('readline-sync');

function area() {
  let w = parseFloat(rlSync.question('Width?\n'));
  let l = parseFloat(rlSync.question('Length?\n'));
  // parseFloat doesn't need a radix arg – it's decimal

  // dec * dec, set 2 places
  let sqm = (w * l).toFixed(2); // .toFixed() returns str, decimal places optional
  let sqf = (sqm * 10.7639).toFixed(2);

  console.log(`The area of the room is ${sqm} sqm (${sqf} sqf).`);
}
// area();

/*
console.log('Width?');
let w = rlSync.prompt(); // >
w = parseFloat(w);
*/

function area2() {
  console.log('m or f?');
  let ans = rlSync.prompt(); // >

  while (ans !== 'm' && ans !== 'f') {
    console.log('m or f?')
    ans = rlSync.prompt();
  }

  let w = parseFloat(rlSync.question('Width?\n'));
  let l = parseFloat(rlSync.question('Length?\n'));

  if (ans === 'm') {
    let sqm = (w * l).toFixed(2);
    let sqf = (sqm * 10.7639).toFixed(2);
    console.log(`The area of the room is ${sqm} sqm (${sqf} sqf).`);
  } else {
    let sqf = (w * l).toFixed(2);
    let sqm = (sqf / 10.7639).toFixed(2);
    console.log(`The area of the room is ${sqf} sqf (${sqm} sqm).`);
  }
}
area2();
