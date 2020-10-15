// input: string, output: string w/ every other capitalized (default: skip non-alphas)

// *  about *
// let count = 0;
// .split('').map(char =>, if /[^a-z]/i.test(char) {
//    if (non) { count += 1 } // user chooses whether non-alphas count
//    return char;
// else if (count % 2 === 0) { return char.toUpperCase(); count += 1; }
// else { return char.toLowerCase(); count += 1; }
// .join('');

// *  Qs  *
// emptiness: input '' or ' '? '' non-char, ' ' non-alpha
// boundaries, repetition...
// str: case (checking), punctuation (non-alpha)
// data type: input always str? Yes
// Log or return? return

function staggerCaps(str, alsoNon = false) {
  let count = 0;
  return str.split('').map(char => {
    if (/[^a-z]/i.test(char)) {
      if (alsoNon) { count += 1 };
      return char;
    } else if (count % 2 === 0) {
      count += 1;
      return char.toUpperCase();
    } else {
      count += 1;
      return char.toLowerCase();
    }
  }).join('');
}

let examples = ['I Love Launch School!', 'ALL_CAPS', 'ignore 77 the 4444 numbers'];
examples.forEach(el => console.log(staggerCaps(el)));
examples.forEach(el => console.log(staggerCaps(el, true)));
