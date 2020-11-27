// solution & further exploration

let rs = require('readline-sync');

// side effects: reads
// RETURNS
function getMax(msg) {
  let max = rs.question(msg);
  if (!max || max % 2 !== 1) {
    max = getMax('Odd integer > 0, pls.\n');
  }
  return max;
}

// side effects: reads
// RETURNS
function getType(msg) {
  let type = rs.question(msg).slice(0, 1).toLowerCase();
                              // can't run .toLowerCase() on ''[0]
  if (type === 's') { return 'solid' }
  else if (type === 'h') { return 'hollow' }
  else {
    type = getType('Solid or hollow, pls.\n');
  }
}

// side effects: writes
function printSolid(counts, max) {
  counts.forEach(val => {
    console.log(' '.repeat((max - val) / 2) + '*'.repeat(val));
  });
}

// side effects: writes
function printHollow(counts, max) {
  counts = counts.map(val => {
    if (val === 1) { return ' '.repeat((max - val) / 2) + '*' }
    else { return ' '.repeat((max - val) / 2) + '*' + ' '.repeat(val - 2) + '*' }
  });

  console.log(counts.join('\n'));
}

// side effects: calls fns w/ side effects (getMax/Type, printSolid/Hollow)
// RETURNS
function calcDiamond() {
  let max = getMax('Pls enter your stars:\n');
  let type = getType('Solid or hollow?\n');

  let counts = [];
  let val = 1;
  let increment = 2;

  while (val > 0) {
    counts.push(val);
    if (val === Number(max)) {
      increment = -2;
    }
    val += increment;
  }

  return type === 'solid' ? printSolid(counts, max) : printHollow(counts, max);
}

calcDiamond();
