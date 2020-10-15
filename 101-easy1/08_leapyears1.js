// input: Number(rlSync.question)
// output: boolean

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) { // non-400 100s are false
    return false;
  } else {
    return (year % 4 === 0); // if evenly divisible by 4...
  }
}

function leapCheck(arr) {
  arr.forEach(el => console.log(el, isLeapYear(el)));
}

let examples = [2016, 2015, 2100, 2400, 240000, 240001, 2000, 1900, 1752, 1700, 1, 100, 400];
leapCheck(examples);
