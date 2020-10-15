// input: string (phrase)
// output: string (penultimate word)

let rs = require('readline-sync');

function phraser() {
  let phrase = rs.question('Provide a phrase.\n');
  return phrase.split(' ');
}

function pen(words) {
  while (words.length < 2) {
    words = phraser();
  }
  words = words.filter(el => /\S/.test(el));
    // removes extra whitespace or whitespace-only els

  return words[words.length - 2];
}
console.log(pen(phraser()));
