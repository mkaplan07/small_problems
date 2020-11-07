// input: number, output: number w/ "count" digit last

// *  about *
// String(num).split('') then .splice(len - count, 1) & .push()
// or solution...
// String(num).slice(0, len - count), .slice(len - count)
//  helper fn: str.slice(1).concat(str[0]);

// *  questions   *
// emptiness: negative number or zero?
//  if num negative && (count - len === 1), NaN
//  if num 0, returns 0
//  count 0, solution returns NaN – bc charFlip:
//    ''[0] // undefined
// boundaries: min (see above), max...
// repetition...
// number: negative, zero (see above), even/odd...
// data type: will input always be a number?
// log or return?

let counts = [1, 2, 3, 4, 5, 6];

function rotateRight(num, count) {
  let narr = String(num).split('');
  let spliced = narr.splice(narr.length - count, 1);
  narr.push(spliced);
  return Number(narr.join(''));
}

function charFlip(str) {
  return str.slice(1).concat(str[0]);
}

function rotateRightSolution(num, count) {
  let str = String(num);
  let left = str.slice(0, str.length - count);
  let right = str.slice(str.length - count);

  return Number(left + charFlip(right));
}

counts.forEach(el => console.log(rotateRight(735291, el)));
console.log('solution...');
counts.forEach(el => console.log(rotateRightSolution(735291, el)));
