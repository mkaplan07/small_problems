// A better way to deal with 'and' & other "end-of-line" words:
// avoid \n by splitting the text into an array (lines & words)

// text.split('\n') to nested array: [[line 0: 'word', 'word', 'word'], etc.]
// map each line per 2A
// subs.join(' '), outer.join('\n')

let text = `John William Coltrane was an American jazz saxophonist and
composer. Working in the bebop and hard bop idioms early in his career,
Coltrane helped pioneer the use of modes and was at the forefront of
free jazz. He led at least fifty recording sessions and appeared on
many albums by other musicians, including trumpeter Miles Davis and
pianist Thelonious Monk.`;

let terms = ['john', 'and', 'jazz', 'jazz.', 'Milt'];

function highlightMatches(searchTerm, text) {
  let lines = text.split('\n');

  let re = new RegExp(searchTerm, 'i');

  for (let i = 0; i < lines.length; i += 1) {
    lines[i] = lines[i].split(' ').map(word => {
      if (word.slice(-1) !== searchTerm.slice(-1)) {
        return word;
      } else if (word.match(re)) {
        return `**${searchTerm.toUpperCase()}**`;
      } else {
        return word;
      }
    }).join(' ');
  }

  return lines.join('\n');
}

terms.forEach(term => console.log(highlightMatches(term, text)));
