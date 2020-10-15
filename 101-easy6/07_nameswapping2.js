// input: name (string), output: lastname, firstname, middlename(s)

let rs = require('readline-sync');

function getName(msg) {
  let input = rs.question(msg);
  while (input === '') {
    input = getName(msg);
  }
  return input;
}

function flipName() {
  let name = getName('Enter your \'firstname\' \'lastname\':\n');

  let arr = name.split(' ');
  if (arr.length > 2) {
    return arr.pop() + ', ' + arr.join(' ');
  } else {
    return arr.reverse().join(', ');
  }
}

console.log(flipName());
