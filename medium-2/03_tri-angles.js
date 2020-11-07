// input: 3 args (array), output: classification – right, acute, obtuse, non

// * about  *
// let sum = angles.reduce((a, e) => a + e);
// reject sum !=== 180 or angle <= 0
// if (angles.filter(el => el === 90).length === 1) { return right; }
// else if (el => el < 90).length === 3 { return acute; }
// else return obtuse

// * questions  *
// emptiness: i) "all angles have integer values"
//  o) 'non'
// boundaries: len, m/m, sep, stop...
// repetition...
// numbers: e/o n/a, negative => 'non', zero => 'non'
// data type: see em
// log or return? "returns one of the following four strings"

function isValid(angles) {
  let sum = angles.reduce((acc, el) => acc + el);
  return sum === 180 && angles.every(n => n > 0);
}

function classifyTri(angles) {
  if (angles.some(n => n === 90)) { // sum 180, only 1 can equal 90
    return 'right';
  } else if (angles.every(n => n < 90)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

// main brain
function labelAngles(angles) {
  return isValid(angles) ? classifyTri(angles) : 'non';
}

let tests = [[60, 70, 50], [30, 90, 60], [120, 50, 10], [0, 90, 90], [50, 50, 50]];
tests.forEach(el => console.log(labelAngles(el)));
