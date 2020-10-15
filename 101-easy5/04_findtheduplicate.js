// input: array, output: the duplicate
// iterate thru checking whether lastIndexOf(el) > i

let rs = require('readline-sync');

function get(txt) {
  return rs.question(txt).split('');
}

// check for copies
function finder() {
  let arr = get('Chars together:\n');

  return arr.filter((el, i) => arr.lastIndexOf(el) > i);
}

// cops w/o copies
function reducer(arr) {
  return arr.reduce((acc, el) => {
    if (!acc.includes(el)) {
      acc.push(el);
    }
    return acc;
  }, []);
}

function result() {
  let cops = finder();

  if (cops.length) {
    cops = reducer(cops);
    return 'Copies: ' + cops.join(', ');
  } else {
    return 'No copies.';
  }
}

console.log(result());
