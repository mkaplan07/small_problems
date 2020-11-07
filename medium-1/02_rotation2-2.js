// "We could also use String.prototype.substring,
//  which would lead to different mental models, but similar algorithms."

let counts = [0, 1, 2, 3, 4, 5];

function charFlip(str) {
  return str.slice(1).concat(str[0]);
}

function rotateSubstring(num, count) {
  let str = String(num);
  let left = str.substring(0, str.length - count);
  let right = str.substring(str.length - count);
  return Number(left + charFlip(right));
}

counts.forEach(el => console.log(rotateSubstring(1234, el)));

// same as slice, count 0 returns NaN bc charFlip: .concat(''[0]) --> undefined
//  Number('1234' + undefined) // NaN

// unlike slice, count > len returns same as count === len
//  slice treats negatives as length + neg.
//  substring treats negatives as zero
