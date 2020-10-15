// input: two arrays – non-empty, same length
// output: merged array (a1, b1, a2, b2...)

// Solution & further exploration

let rs = require('readline-sync');

function sol(a, b) {
  let res = [];
  for (let i = 0; i < a.length; i += 1) {
    res.push(a[i], b[i]);
  }
  return res;
}

function eacher(a, b) {
  let res = [];
  a.forEach((el, i) => res.push(el, b[i]));
  // a.forEach(el => res.push(el, b.shift()));
  return res;
}
// b.shift() mutates b for mapper() & reducer()

function mapper(a, b) {
  return a.map((el, i) => el = [el, b[i]]).flat();
}

function reducer(a, b) {
  return a.reduce((acc, el, i) => {
    acc.push(el, b[i]);
    return acc;
    // return [...acc, el, b[i]]; // Raquel Mayumi Nishimoto
  }, []);
}
/*
from https://www.javascripttutorial.net/es6/javascript-spread/
let inits = ['a', 'b'];
let chars = [...inits, 'c', 'd'];
console.log(chars); // ['a', 'b', 'c', 'd']
*/

function get(txt) {
  return rs.question(txt).split('');
}

function caller() {
  let a = get('arr1: chars together:\n');
  let b = get('arr2: chars together:\n');
  console.log('sol:', sol(a, b));
  console.log('eacher:', eacher(a, b));
  console.log('mapper:', mapper(a, b));
  console.log('reducer:', reducer(a, b));
}
caller();
