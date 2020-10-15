// input: array of strings, output: log str => #

let rs = require('readline-sync');

function get(txt) {
  return rs.question(txt).split(' ');
}

function objectify() {
  let arr = get('Sep. w/ spaces:\n').map(el => el.toLowerCase());

  let obj = {};
  arr.forEach(el => {
    obj[el] ? obj[el] += 1 : obj[el] = 1;
  });

  return obj;
}

function printer(obj) {
  for (let k in obj) {
    console.log(`${k} => ${obj[k]}`);
  }

}
printer(objectify());
