// input: prompt (string) – if .endsWith('!'), return CAPS
// output: string

let rlSync = require('readline-sync');

function greeter() {
  let name = rlSync.question('What\'s your name?\n');

  if (name.endsWith('!')) {
    return `Hi, ${name.slice(0, name.length - 1)}. Why are we screaming?`.toUpperCase();
    // for 'Bob!' w/ a length of 4, (0, -1) is 'Bob' --> 0, 1, 2, 3 (exclusive)
  } else {
    return `Hi, ${name}.`;
  }
}

console.log(greeter());

/*
Solution:
if (name[name.length - 1] === '!') {
  name = name.slice(0, -1);
  return `HI, ${name.toUpperCase()}. WHY ARE WE SCREAMING?`;
}
*/
