// input: string, output: string w/ each Word Cased Like This

// .split(' ').map(word => word = word[0].toUpperCase() +
//  word.slice(1).toLowerCase()).join(' ');

// *  questions *
// emptiness: input '' or ' '?
//  ''.split(' ') // [''], ' '.split(' ') // ['', '']
//  ''[0] // TypeError
//  => reject input.trim() === ''
// boundaries, repetition...
// str: case (checking...), punctuation – "a word is any sequence of non-whitespace characters"
// data type: "takes a string as an argument"
// Log or return? "returns"

let rs = require('readline-sync');

function getInput(msg) {
  let input = rs.question(msg);

  if (input.trim() === '') {
    input = getInput('A word or phrase, please:\n')
  }

  return input;
}

function capitalizeWords() {
  let words = getInput('Word or phrase, pls:\n').split(' ');

  return words.map(word => word = word[0].toUpperCase() +
    word.slice(1).toLowerCase()).join(' ');
    // .slice(0, 1) & .slice(1), no issue w/ ''
}

console.log(capitalizeWords());
