// input: four strings (adj, n, v, adv)
// output: sentence
// fn to get the strings --> array
// fn to reduce the array

let rs = require('readline-sync');

function get() {
  let temp = ['adj', 'noun', 'verb', 'adv'];
  let arr = temp.map(el => rs.question(`${el}:\n`, {keepWhitespace: true}));
  return arr.filter(el => el !== '');
}

function stringer(arr) {
  let str = arr.reduce((acc, el) => {
    return acc += el.trim() + ' ';
  }, 'The ');
  return str.slice(0, -1) + '.';
}
console.log(stringer(get()));
