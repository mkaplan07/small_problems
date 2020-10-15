// input: string, output: ['cow 3', 'sheep 5']

// *  about *
// if !str, return [] ('' is falsy)
// .split(' ').map(el => el + ' ' + el.length);

// *  Qs  *
// emptiness: input ''? return []
//   => input ' '? not specified
// boundaries, repetition...
// string: case? n/a, punctuation? part of length
// data type: always string? "takes a string as an argument"
// Log or return? "returns an array"

function findLengths(str) {
  if (!str) { return []; } // for '' and undefined

  return str.split(' ').map(el => el + ' ' + el.length);
}

let examples = ['cow sheep chicken', 'baseball hot dogs and apple pie', "It ain't easy, is it?", 'Supercalifragilisticexpialidocious', ''];
examples.forEach(el => console.log(findLengths(el)));
console.log(findLengths());
