// input: 5 numbers & a search term
// output: `${arr.join(', ')} ${arr.includes(search) ? 'does' : 'does not'} include ${search}.`
// 1) empty array. iterate 5x for rs.questionInt()
// 2) rs.questionInt('search term?'), check if array.includes(search)

let rs = require('readline-sync');
let lim = { limitMessage: 'We\'re looking for a number.' };

function ari() {
  let arr = [];
  for (let i = 0; i < 5; i += 1) {
    arr.push(rs.questionInt('Enter a number:\n', lim));
  }
  console.log(arr);
  return arr;
}

// function checker(arr) {
//   let search = rs.questionInt('Enter a search term:\n');
//   return `${arr.join(', ')} ${arr.includes(search) ? 'does' : 'does not'} include ${search}.`
// }

function gt(n) {
  return n > 25;
}

function checker(arr) {
  let bool = arr.some(el => gt(el));
  return `De ${arr.join(', ')}, ${bool ? 'some' : 'none'} > 25.`
}

console.log(checker(ari()));
