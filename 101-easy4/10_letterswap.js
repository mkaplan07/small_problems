// input: string, output: string w/ 1st & last char reversed (each word)
// 1) fn to flip 1st & last, 2) str.split(' '), 3) arr.map(el => flip(el)).join(' ');

function flip(word) {
  if (word.length > 1) {
    let a = word[0];
    let o = word[word.length - 1];
    return o + word.slice(1, - 1) + a;
  } else {
    return word;
  }
}

function letterSwap(str) {
  let arr = str.split(' ');
  return arr.map(el => flip(el)).join(' ');
}

let tests = ['Oh what a wonderful day it is', 'Abcde', 'a'];
tests.forEach(el => console.log(letterSwap(el)));
