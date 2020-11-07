// input: string, output: obj w/ each % case { upper: , lower: , neither: }
// Solution

function getPercents(reg, str) {
  let matches = str.match(reg) || [];
  return (matches.length / str.length).toFixed(2) * 100;
          // no need for Number() bc * 100 (implicit)
}

function countCases(str) {
  return {
    upper: getPercents(/[A-Z]/g, str),
    lower: getPercents(/[a-z]/g, str),
    neither: getPercents(/[^a-z]/gi, str)
  }
}

let tests = ['abCdef 123', 'f 123', 'HARpo 55!'];
tests.forEach(el => console.log(countCases(el)));
