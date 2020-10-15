// input: str, output: array of palindromic substrings (len > 1)
// 1) slice string into trailing substrings: abc, bc, c
// 2) slice subs into leading substrings: a, ab, abc... b, bc... c
// 3) check for len > 1 && isPalindrome

function transformSlice(str) {
  return str.split('').map((_, idx, src) => src.slice(0, idx + 1).join(''));
}

function getPalindromes(str) {
  let substrings = [];
  for (let i = 0; i < str.length; i += 1) {
    substrings = substrings.concat(transformSlice(str.slice(i)));
  }
  return substrings.filter(el => el.length > 1
    && el === el.split('').reverse().join(''));
    // could be abstracted to a function --> return substrings(isPalindrome);
}

let tests = ['abcd', 'madam', 'hello-madam-did-madam-goodbye', 'knitting cassettes'];
tests.forEach(el => console.log(getPalindromes(el)));
