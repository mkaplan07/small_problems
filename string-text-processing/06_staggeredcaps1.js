// input: string, output: string w/ every other capitalized

// *  about *
// every other = evens capitalized, odds not
// .split('').map((char, idx), if idx % 2 === 0, return char.toUpperCase()

// *  Qs  *
// emptiness: '' or ' '? ignore non-alphas
// boundaries, repetition...
// str: case (checking), punctuation (ignore non-alphas)
// data type: always string? "takes a string as an argument"
// Log or return? "returns"

function staggerCaps(str) {
  return str.split('').map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

let examples = ['I Love Launch School!', 'ALL_CAPS', 'ignore 77 the 4444 numbers'];
examples.forEach(el => console.log(staggerCaps(el)));
