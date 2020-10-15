// input: 1 or more arrays
// output: merged array of non-duplicate vals

let rs = require('readline-sync');

function get() {
  let args = [];
  while (!rs.question('Vals? ')) {
    // Enter to continue
    args.push(rs.question('Sep. w/ spaces\n').split(' '));
  }
  console.log('args:', args);
  return args;
}

function merger() {
  /*
  let args = [...arguments]; // or Array.from(arguments)
  // can't call .reduce() on arguments
  */

  args = get();
  return args.reduce((acc, ray) => {
    ray.forEach(el => {
      if (!acc.includes(el)) {
        acc.push(el);
        console.log(acc);
      }
    });
    return acc;
  }, []);
}
console.log('finale:', merger());

// console.log(merger([1, 2, 3], [2, 3, 4], [7], [3, 5, 7])); // 1, 2, 3, 4, 7, 5
