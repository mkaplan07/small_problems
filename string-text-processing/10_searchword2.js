// input: a) searchTerm, b) text
// output: text with each **SEARCHTERM** highlighted

// *  about *
// return text.split(' ').map(word => {
//  if word.toLowerCase() === searchTerm.toLowerCase()
//    return '**'+word.toUpperCase()+'**'
// .join('');

// *  Qs  *
// emptiness: same rules as previous exercise? "word and text inputs will always be provided"
//  what if searchTerm isn't found? => return text w/o highlights?
// boundaries: "all word breaks are spaces" ?
// repetition: checking...
// string: case? will assume INsensitive – on comparison, lowerCase() both
// data type: "word and text inputs will always be provided" ?
// Log or return? "returns the text"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Multi-line_strings
let text = `John William Coltrane was an American jazz saxophonist and
composer. Working in the bebop and hard bop idioms early in his career,
Coltrane helped pioneer the use of modes and was at the forefront of
free jazz. He led at least fifty recording sessions and appeared on
many albums by other musicians, including trumpeter Miles Davis and
pianist Thelonious Monk.`;

// let text2 = `John William Coltrane was an American jazz saxophonist and composer. Working in the bebop and hard bop idioms early in his career, Coltrane helped pioneer the use of modes and was at the forefront of free jazz. He led at least fifty recording sessions and appeared on many albums by other musicians, including trumpeter Miles Davis and pianist Thelonious Monk.`;

let terms = ['john', 'and', 'jazz', 'jazz.', 'Milt'];
// 'john' –> 1st word
// 'and' -> several
// 'jazz' -> first sentence
// 'jazz.' -> 'free jazz.'
// 'Milt' // text

function highlightMatches(searchTerm, text) {
  return text.split(' ').map(word => {
    if (word.toLowerCase() === searchTerm.toLowerCase()) {
      return '**'+word.toUpperCase()+'**';
    } else {
      return word;
    }
  }).join(' ');
}

terms.forEach(term => console.log(highlightMatches(term, text)));
