// input: str, output: bool
// str === str.split('').reverse().join('');

let rs = require('readline-sync');

function get() {
  return rs.question('Enter a string:\n');
}

function cleaner(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function pal(str) {
  return str === str.split('').reverse().join('');
}

let tests = ['madam', 'Madam', "Madam, I'm Adam", '356653', '356a653', '123ab321'];
tests.forEach(el => console.log(el + ':', pal(cleaner(el))));
