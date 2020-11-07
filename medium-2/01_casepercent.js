// input: string, output: obj of %s { upper: , lower: , neither: }
// *  about *
// { upper = str.match(/[A-Z]/g), etc. }
// can't set vals to .length bc null.length // Error
// for (let k in obj), if (obj[k]) { .len / str.len, else 0 }
// *  Qs  *
// emptiness: => i) "the string will always contain at least one character"
//  o) see * about * for dealing w/ null (no length)
// boundaries: length is important –
//  match returns an array (w/ length)
//  match array / str.length
// repetition...
// string: case (upper/lower), punctuation (neither)
// data type: see emptiness
// log or return? => "returns an object"

function countCases(str) {
  let counts = {
    upper: str.match(/[A-Z]/g),
    lower: str.match(/[a-z]/g),
    neither: str.match(/[^a-z]/gi)
  }

  for (let k in counts) {
    if (counts[k]) {  // null has no length
      counts[k] = ((counts[k].length / str.length) * 100).toFixed(2);
    } else {
      counts[k] = 0;
    }
  }

  return counts;
}

let tests = ['abCdef 123', 'f 123', 'HARpo 55!'];
tests.forEach(el => console.log(countCases(el)));
