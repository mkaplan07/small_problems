// input: str, output: all substrings, sorted from shortest

let strings = ['abc', 'a', 'xyzzy'];

function findSubstrings(str) {
  let substrings = [];
  for (let i = 1; i <= str.length; i += 1) {
    substrings.push(str.slice(0, i));
  }
  return substrings;
}
strings.forEach(el => console.log(findSubstrings(el)));

function reduceSubstrings(str) {
  return str.split('').reduce((acc, _, idx, src) => {
    acc.push(src.slice(0, idx + 1).join(''));
    return acc;
  }, []);
}
console.log('with .reduce()');
strings.forEach(el => console.log(reduceSubstrings(el)));

function mapSubstrings(str) {
  return str.split('').map((el, idx, src) => el = src.slice(0, idx + 1).join(''));
}
console.log('with .map()');
strings.forEach(el => console.log(mapSubstrings(el)));
