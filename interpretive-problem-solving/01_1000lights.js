// i/o, rules, algorithm

// input: # of switches (count), output: array of "on" or "true" switches
// switches = [false, false, false, etc.]
// inner loop: for (let j = i; j < count; j += (i + 1)) {
//  switches[j] = !switches[j]
//    => 1st loop creates [true, true, true, etc.] from undefineds
// outer loop incremements i
// return switches.map((el, idx) => if (el) { return idx + 1 } else ''
//  .filter(el => el !== '')

let rs = require('readline-sync');

// side effects: reads
// RETURNS
function get(msg) {
  let input = rs.question(msg);
  if (!input || !Number.isInteger(Number(input))) {
    input = get('Integer pls.\n');
  }
  return input;
}

// side effects: writes
function printLights(switches) {
  let final = switches.reduce((acc, el, idx) => {
    if (el) { acc.push(idx + 1) }
    return acc;
  }, []);

  console.log(final);
}

// side effects: calls fn w/ side effects (gets, printLights)
// RETURNS
function lightsOn() {
  let count = get('How many switches?\n');
  let switches = [];

  for (let i = 0; i < count; i += 1) { // 'count' implicitly coerced to number
    for (let j = i; j < count; j += (i + 1)) {
      switches[j] = !switches[j]
    }
    // console.log(`after loop ${i}: ${switches}`);
  }

  return printLights(switches);
}

lightsOn();
