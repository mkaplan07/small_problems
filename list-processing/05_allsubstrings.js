// input: string, output: all substrings – order of appearance (array)
// 1) trailing substrings: abc, bc, c
// 2) leading substrings: a, ab, abc, b, bc, c

function mapSubstrings(arr) {
  return arr.map((el, idx, src) => src.slice(0, idx + 1).join(''));
                                // don't need el = src.slice...
}

function findSubstrings(str) {
  let chars = str.split(''); // .split('') for mapSubstrings
  let result = [];

  for (let i = 0; i < chars.length; i += 1) {
    result = result.concat(mapSubstrings(chars.slice(i)));
  }

  return result;
}
console.log(findSubstrings('abcde'));

function loopSubstrings(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 1) {
    for (let j = 1; j <= str.length; j += 1) {
      result.push(str.slice(i, j));
    }
  }
  console.log('before filter:', result);
  return result.filter(el => el !== '');
}
console.log('loopSubstrings(abcde)');
console.log(loopSubstrings('abcde'));
