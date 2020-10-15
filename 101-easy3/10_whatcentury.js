// input: year (string ok), output: string – century + 'st', 'nd', 'rd', 'th'
// century? Math.ceil(year / 100);
// exceptions: 11th, 12th, 13th
// else { mod = cen % 10; switch 1st, 2nd, 3rd, default 'th' }

function center(year) {
  let cen = Math.ceil(year / 100); // Number
  return cen + suffix(cen); // suffix(cen) coerces to string
}

function suffix(cen) {
  let moda = cen % 100; // checks 1s & 10s
  if (moda === 11 || moda === 12 || moda === 13) {
    return 'th';
  } else {
    let mod = cen % 10; // checks 1s
    switch (mod) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
}

let tests = [0, 2000, 2001, 1965, 256, 5, 10103, 1052, 1127, 1201, 11100, 11101, 11201];
tests.forEach(el => console.log(el, center(el)));
