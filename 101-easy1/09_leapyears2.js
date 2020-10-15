// if year < 1752, return (year % 4 === 0)

let years = [2016, 2015, 2100, 2400, 240000, 240001, 2000, 1900, 1752, 1700, 1, 100, 400];

function isLeapYear(year) {
  if (year < 1752) {
    return year % 4 === 0; // no parens needed
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) { // the only true 100s are also divisible by 400
    return false;
  } else {
    return year % 4 === 0; // comparison returns bool
  }
}

years.forEach(el => console.log(el, isLeapYear(el)));
// last 4: true, false, true, true
