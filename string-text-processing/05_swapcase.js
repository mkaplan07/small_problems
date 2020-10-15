// input: string, output: str w/ cases switched (skip non-alpha)

// *  about *
// .split('').map(char => {
//  if (/[^a-z]/i.test(char)) { return char } else if...

// *  questions *
// emptiness: '' or ' ' => skip, return char
// boundaries, repetition...
// str: case (checking); punctuation, return char
// data type: "takes a string as an argument"
// Log or return? "returns"

function swapCase(str) {
  return str.split('').map(char => {
    if (/[^a-z]/i.test(char)) {
      return char;
    } else if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
}

let examples = ['CamelCase', 'Tonight on XYZ-TV'];
examples.forEach(ex => console.log(swapCase(ex)));

function solution(str) {
  return str.split('').map(char => {
    if (char >= 'a' && char <= 'z') {
      return char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

examples.forEach(ex => console.log(swapCase(ex)));
