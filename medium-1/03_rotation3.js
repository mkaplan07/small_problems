// input: integer, output: integer – max rotation

// *  about *
// String(num) ... while (i < str.length), str = left + charFlip(right)

// *  questions   *
// emptiness: input negative or zero?
//  negative returns NaN --> Number('123-');
//  0 // 0
// boundaries: min (see above), max...
//  stopping condition: i < String(num).length;
// repetition...
// numbers: negative & zero (above), even/odds...
// data type: => "takes an integer as an argument"
// log or return? => return

function charFlip(str) {
  return str.slice(1).concat(str[0]);
}

function maxRotation(num) {
  let str = String(num);
  for (let i = 0; i < str.length; i += 1) {
    let left = str.slice(0, i);
    let right = str.slice(i);
    str = left + charFlip(right);
  }
  return Number(str);
}

let tests = [735291, 3, 35, 105, 8703529146, 0, -123];
tests.forEach(el => console.log(maxRotation(el)));
