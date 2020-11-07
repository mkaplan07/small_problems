// input: three arguments (numbers),
// output: type of triangle: EQ, iso, scalene, non

// *  about *
// let sides = [...arguments].sort((a, b) => a - b);
// if (neg(sides) || [0] + [1] <= [2]) return 'non'
//  fn neg (arr) { return arr.some(n => n <= 0) }
// [0] === [1] && [1] === [2] return 'EQ'
// [0] !== [1] && [1] !== [2] && [0] !== [2] return 'scalene'
// else return 'iso'

// * questions  *
// emptiness: i) "takes the lengths of the three sides"
//  o) 'non'
// boundaries: len, m/m, sep, stop...
// repetition...
// numbers: e/o n/a, zero => non, negative => non
// data type: see emptiness
// log or return? "returns one of the following four strings"

let rs = require('readline-sync');

function get(msg) {
  let input = rs.question(msg)
    .split(' ') // to array
    .filter(el => el !== '') // remove extra spaces
    .map(el => Number(el)); // to nums for validation & math

  if (input.includes(NaN) || input.length !== 3) {
    input = get('Pls enter 3 space-separated numbers:\n');
  }

  return input;
}

// main brain
function triangleSides() {
  let sides = get('Length for each side:\n');
  sides.sort((a, b) => a - b);

  if (isValid(sides)) {
    return getTriangleType(sides);
  } else {
    return 'non';
  }
}

function isValid(sides) {
  return sides[0] > 0 && sides[0] + sides[1] > sides[2];
}

function getTriangleType(sides) {
  if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return 'EQ';
  } else if (sides[0] !== sides[1] &&
              sides[1] !== sides[2] &&
                sides[0] !== sides[2]) {
    return 'scalene';
  } else {
    return 'iso';
  }
}

console.log(triangleSides());
