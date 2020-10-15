// input: string
// output: number, sum of ascii vals (each char)
// iterate over str, adding ascii vals to result

function ascii(str) {
  let result = 0;
  /*
  By initializing it to 0, ''.charCodeAt(0) is 0
  because ''.length is 0 ––> the loop doesn't run.

  Either way, undefined (let result;) += any number // NaN
  */

  for (let i = 0; i < str.length; i += 1) {
    result += str.charCodeAt(i);
  }
  return result;
}

let x = ['Four score', 'Launch School', 'a', ''];
x.forEach(el => console.log(ascii(el)));
