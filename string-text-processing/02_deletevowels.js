// input: array of strings, output: array of strings w/ vowels removed

// *  about *
// .map(str => str.replace(/[aeiou]/gi, '')) --> [] matches any character

// *  questions *
// emptiness: => what if I receive an empty array or subarray (str)?
// boundaries, repetition...
// obj: => new or mutate?
// data structure: see above
// => log or return?

// * answers  *
// 1) empty array/str returns empty array/str
// 2) new: "returns an array of the same values with all vowels removed"
// 3) return

let tests = [['abcdefghijklmnopqrstuvwxyz'],
  ['green', 'YELLOW', 'black', 'white'], ['ABC', 'AEIOU', 'XYZ'],
  [], ['abc', '', 'def']];

function removeVowels(arr) {
  return arr.map(str => str.replace(/[aeiou]/gi, ''));
}

tests.forEach(test => console.log(removeVowels(test)));
console.log('tests:', tests);

function solution(arr) {
  return arr.map(str => {
    str = str.split('');
    for (let i = 0; i < str.length; i += 1) {
      if ('aeiouAEIOU'.includes(str[i])) {
        str[i] = '';
      }
    }
    return str.join('');
  });
}

tests.forEach(test => console.log(solution(test)));
console.log('tests:', tests);
