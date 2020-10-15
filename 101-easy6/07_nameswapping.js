// input: name (string), output: 'lastname, firstname'

let rs = require('readline-sync');

function getName(msg) {
  let input = rs.question(msg, {keepWhitespace : true});

  let spaces = 0;
  for (let i = 0; i < input.trim().length; i += 1) {
    if (input[i] === ' ') {
      spaces += 1;
    }
  }
  // console.log('spaces:', spaces);

  if (spaces !== 1) { 
      input = getName(msg);
  }

  return input;
}

function flipName() {
  let name = getName('Enter your \'firstname\' \'lastname\':\n');
  return name.split(' ').reverse().join(', ');
}

console.log(flipName());
