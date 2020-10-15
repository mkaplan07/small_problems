// input: string, output: obj of lowercase, uppercase & neither

function countCases(str) {
  let neither = str.match(/[^a-z]/gi) || [];
  let lower = str.match(/[a-z]/g) || [];
  let upper = str.match(/[A-Z]/g) || [];


  return {
    neither: neither.length,
    lower: lower.length,
    upper: upper.length
  };
}

let tests = ['abCdef 123', 'AbCd +Ef', '123', ''];
tests.forEach(test => console.log(countCases(test)));
