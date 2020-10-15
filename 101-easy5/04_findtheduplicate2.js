// input: array, output: the duplicate el
// Solution

// run each el thru the array, +1 each appearance
function counter(arr, el) {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === el) {
      count += 1;
    }
  }
  return count;
}

function finder(arr) {
  return arr.find(el => counter(arr, el) === 2);
}

let tests = [[3, 3, 1, 2], [1, 2, 3], [], [2, 3, 2, 3]]
// first three: 3, undefined, undefined
// 4) returns 2 (vs. 2, 3) bc find runs '...until the callback returns a truthy value.'
tests.forEach(el => console.log(finder(el)));
