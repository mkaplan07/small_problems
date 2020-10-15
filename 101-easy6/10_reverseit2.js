// input: string, output: string w/ chars reversed in words.length > 4

let rs = require('readline-sync');

function getString(msg) {
  let input = rs.question(msg);
  while (!input) {
    input = getString(msg);
  }
  return input;
}

// return a new string...
function reverseWords() {
  let words = getString('Enter a string:\n').split(' ');
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > 4) {
      words[i] = words[i].split('').reverse().join('');
    }
  }
  return words.join(' ');
}

function reverseMapper() {
  let words = getString('Enter a string:\n').split(' ');
  return words.map(word => {
    if (word.length > 4) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  }).join(' ');
}

console.log(reverseWords());
