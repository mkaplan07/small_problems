// input: array, output: sorted array
// *  about *
// outer loop (i) counts, inner (j) sorts
// after each inner, checkSequence(arr). If sorted, break.

// *  questions *
// em: i) "array as an argument... contains at least 2 els"
//  (let i = 1; i < arr.length) so len 0, len 1 returns w/o loop
// boundaries: len, m/m, sep, stop
//  outer: let i = 1; i < arr.length
//  inner: let j = 0; j < arr.length - i –> els set R to L
// repetition...
// array: new or mutate? => "function should mutate the array"
// data type: arr in, arr out
// log or return? .sort returns a reference to the original, which it mutated

function checkSequence(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function bubbleSorter(arr) {
  for (let i = 1; i < arr.length; i += 1) { // the outer loop is just a counter
    // console.log(`loop ${i}`);
    for (let j = 0; j < arr.length - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // console.log(`flip! new array: ${arr}`);
      }
    }
    if (checkSequence(arr)) break;
  }
  return arr;
}

let tests = [[5, 3], [6, 2, 7, 1, 4], ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']];
tests.forEach(arr => console.log(bubbleSorter(arr)));

function solution(arr) {
  while (true) {
    let sorted = true;
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        // console.log(`flip! new array: ${arr}`);
        sorted = false;
      }
    }
    if (sorted) break;
  }
  return arr;
}

let tests2 = [[5, 3], [6, 2, 7, 1, 4], ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']];
tests2.forEach(arr => console.log(solution(arr)));
