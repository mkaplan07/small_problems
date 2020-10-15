// input: string w/ consecutive duplicates
// output: string – w/ consecutives collapses
// while (i < len), (str[i] !== [i - 1]) --> '' += str[i]

let rs = require('readline-sync');

function get(text) {
  return rs.question(text);
}

function collapso(str) {
  let result = '';

  let i = 0;
  while (i < str.length) { // no need to str.split()
    if (str[i] !== str[i - 1]) {
      result += str[i];
    }
    i += 1;
  }
  return result;
}

let tests = ['ddaaiillyy ddoouubbllee', '4444abcabccba', 'ggggggggggggggg', 'a', ''];
tests.forEach(el => console.log(collapso(el)));

// console.log(collapso(get('consecutor:\n')));

// negative lookahead: https://stackoverflow.com/questions/12210807/what-does-mean/12210820#12210820
// 'regex \1 meaning'
