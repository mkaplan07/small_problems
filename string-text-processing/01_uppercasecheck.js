// input: string, output: t/f
// if all alphabetic chars are uppercase, return true. Else false.

// *  questions *
// emptiness: => could input be '' or ' '?
// boundaries, repetition...
// str: case (checking), punctuation (ignore)
// data type: => will input always be a string && not '' or ' '?
// => RETURN or LOG?

// *  answers *
// 1) see examples: '' // true
//      so /[a-z]/.test(char) is not an option
// 2) "takes a string argument"
// 3) return

function isUpperCase(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[i].toUpperCase()) {
      return false;
    }
  }

  return true;
}

let tests = ['t', 'T', 'Four Score', 'FOUR SCORE', '4SCORE!', '', ' '];
tests.forEach(el => console.log(isUpperCase(el)));

// solution
function isUpperCaseSol(str) {
  return str === str.toUpperCase();
}

console.log('solution:');
tests.forEach(el => console.log(isUpperCaseSol(el)));
