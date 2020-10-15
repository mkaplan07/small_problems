/*
middle word, need an odd length. 1 is ok.
remove extra whitespace: /\S/.test(el);
even, idx (len / 2) - 1 (len 2: (2 / 2) - 1 = idx 0)
odd, idx Math.floor(len / 2)
*/

let rs = require('readline-sync');

function phraser() {
  let phrase = rs.question('phrase or sentence?\n');
  let words = phrase.split(' ');
  return words.filter(el => /\S/.test(el));
}

/*
bc I'm testing for < 1 vs. < 2 (to allow single-str entries),
I have to filter whitespace before testing len.
[''].length // 1
[''].filter(el => /\S/.test(el)) // [], length 0
*/

function mid(words) {
  while (words.length < 1) {
    words = phraser();
  }
  console.log(words); // to test

  if (words.length % 2 === 0) {
    return words[(words.length / 2) - 1];
    // idx just before middle
  } else {
    return words[Math.floor(words.length / 2)];
  }
}
console.log(mid(phraser()));
