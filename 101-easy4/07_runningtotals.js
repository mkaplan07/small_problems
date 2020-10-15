// input: array, output: array of stepped-up els (running totals)

function rt(arr) {
  let res = [];
  let sub = 0;

  for (let i = 0; i < arr.length; i += 1) {
    // [].length is not < 0
    res.push(sub += arr[i]);
  }

  return res;
}

let tests = [[2, 5, 13], [14, 11, 7, 15, 20], [3], []];
tests.forEach(el => console.log(rt(el)));

function mapper(arr) {
  let sub = 0;
  return arr.map(el => {
    return el = sub += el;
  });
}
tests.forEach(el => console.log(mapper(el)));

// What types of problems do you think are well-suited for the Array.prototype.map method?
// transform els & return a new array

function reducer(arr) {
  let sub = 0;
  return arr.reduce((acc, el) => {
    acc.push(sub += el);
    return acc;
  }, []);
}
tests.forEach(el => console.log(reducer(el)));
