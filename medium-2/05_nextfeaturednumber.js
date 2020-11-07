// input: number, output: next featured number

// *  about   *
// isFeatured(n)
//  1) if n % 7 === 0, 2) if n % 2 === 1, 3) if (noRepeats(n))
//    --> String(n), if (str.lastIndexOf(str[i]) !== i) { return false; }
// main ––
//  let i = n + 1; i <= 9876543201; i += 1
//    if (isFeatured(i)) { return i }
//    return 'You people are all trying to achieve the impossible.'

// *  questions *
// emptiness: "takes an integer"
//  isFeatured(0) // false
//  o) error messages
// boundaries: len, m/m, sep, stop
//  max search (loop) & max input: 9876543201
//  min: what if input is negative?
// repetition...
// numbers: e/o (checking), negative??, zero (see em)
// log or return? "returns the next featured number greater than the integer"

function isFeatured(num) {
  if ((num % 7 === 0)
      && (num % 2 === 1)
        && (noRepeats(num))) {
    return true;
  }
  return false;
}

function noRepeats(num) {
  let digits = String(num);
  for (let i = 0; i < digits.length; i += 1) {
    if (digits.lastIndexOf(digits[i]) !== i) {
      return false;
    }
  }
  return true;
}

// main brain
function findNextFN(num) {
  let max = 9876543201;

  for (let i = num + 1; i <= max; i += 1) {
    if (isFeatured(i)) return i;
  }

  return 'You people are all trying to achieve the impossible.';
}

let tests = [12, 20, 21, 997, 1029, 999999, 999999987, 9876543200, 9876543201];
// tests.forEach(el => console.log(findNextFN(el)));

/*
For the solution, I can use noRepeats(), but I have to change isFeatured() to
checkMod() & add a second loop (+= 14) to the main function.
Then I'll time mine vs. the solution to see which is faster.
*/

function checkMod(num) {
  return (num % 7 === 0) && (num % 2 === 1);
}

function fastLoop(modd) {
  let i = modd;
  while (!noRepeats(i)) {
    i += 14;
  }
  return i;
}

// main brain
function solFN(num) {
  let max = 9876543201;

  for (let i = num + 1; i <= max; i += 1) {
    if (checkMod(i)) return fastLoop(i); // if multiple of 7 & odd
  }

  return 'You people are all trying to achieve the impossible.';
}
// tests.forEach(el => console.log(solFN(el)));

// timer function
function timer(num) {
  let start1 = Date.now();
  obj1[findNextFN(num)];
  let end1 = Date.now();
  obj1[findNextFN(num)] = end1 - start1;

  let start2 = Date.now();
  obj2[solFN(num)]; 
  let end2 = Date.now();
  obj2[solFN(num)] = end2 - start2;
}

let obj1 = {};
let obj2 = {};
tests.forEach(n => timer(n)); // test[1] overwrites test[0]
console.log(obj1, obj2);
