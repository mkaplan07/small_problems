// input: array, output: NEW array w/ 1st el last

// *  about *
// !Array.isArray, return undefined
// [] return []
// let copy = arr.slice(), let first = copy.shift(), copy.push(first)

// *  questions *
// emptiness: [] => return []
// boundaries: can't run .slice or .shift on numbers
//  [].shift, .push // [undefined]
//  => guard clause
// repetition...
// array: new or mutate? => new
// data type: => array, else return undefined
// log or return? => return

let tests = [[7, 3, 5, 2, 9, 1], ['a', 'b', 'c'], ['a'], [1, 'a', 3, 'c'], [{ a: 2 }, [1, 2], 3], [], 1];

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;

  if (arr.length) {
    let copy = arr.slice();
    let first = copy.shift();
    copy.push(first);
    return copy;
  } else {
    return arr;
  }
}

function rotateArraySolution(arr) {
  if (!Array.isArray(arr)) return undefined;

  if (arr.length) {
    return arr.slice(1).concat(arr[0]);
  } else {
    return arr;
  }
}

function rotateMap(arr) {
  if (!Array.isArray(arr)) return undefined;

  return arr.map((_, idx, src) => {
    if (idx === src.length - 1) {
      return src[0];
    } else {
      return src[idx + 1];
    }
  });
}
// [] // [] bc "map calls a provided callback function once for each element"

// tests.forEach(el => console.log(rotateArray(el)));
// tests.forEach(el => console.log(rotateArraySolution(el)));
tests.forEach(el => console.log(rotateMap(el)));

let original = [1, 2, 3, 4];
console.log(rotateMap(original), original);
