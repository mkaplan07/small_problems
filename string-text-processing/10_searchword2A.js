let text = `John William Coltrane was an American jazz saxophonist and
composer. Working in the bebop and hard bop idioms early in his career,
Coltrane helped pioneer the use of modes and was at the forefront of
free jazz. He led at least fifty recording sessions and appeared on
many albums by other musicians, including trumpeter Miles Davis and
pianist Thelonious Monk.`;

let text2 = `By late 1965, Coltrane was regularly augmenting his group
with Sanders and other free jazz musicians. Rashied Ali joined the group
as a second drummer. This was the end of the quartet. Claiming he was
unable to hear himself over the two drummers, Tyner left the band shortly
after the recording of Meditations. Jones left in early 1966, dissatisfied
by sharing drumming duties with Ali.`

let terms = ['john', 'and', 'jazz', 'jazz.', 'Milt'];
let terms2 = ['ali', 'was', 'drummer', 'drummer.', 'bebop'];

// function highlightMatches(searchTerm, text) {
//   let re = new RegExp(searchTerm, 'gi');
//   return text.replace(re, `**${searchTerm.toUpperCase()}**`);
// }

// 3) 'jazz' is highlighted twice

// 4) 'jazz.' is also highlighted twice
// the first time, it replaces 'jazz' with 'jazz.'

/*
The original highlightMatches function had trouble w/ cases 3 & 4, 'jazz'
and 'jazz.' Solved those issues w/ the first if statement. That caused
probems with end-of-line words –– followed by \n. See issue 2.
Solved that w/ oneLiner(). Then, to output multiple lines, formatLine().
*/

function highlightMatches(searchTerm, text) {
  let re = new RegExp(searchTerm, 'i');
  let line = oneLiner(text);

  let highlighted = line.split(' ').map(word => {
    // issues 3 & 4:
    if (word.slice(-1) !== searchTerm.slice(-1)) {
      return word;
      // original function, more or less
    } else if (word.match(re)) {
      return `**${searchTerm.toUpperCase()}**`;
    } else {
      return word;
    }
  }).join(' ');

  return formatLine(highlighted);
}

// 2) end-of-line 'and's not highlighted
// solved by oneLiner() & formatLine()
function oneLiner(text) {
  return text.replace(/\n/g, ' ');
}

function formatLine(line) {
  let lines = [];
  let words = line.split(' ');

  let charCount = 0;
  let temp = [];

  for (let i = 0; i < words.length; i += 1) {
    charCount += words[i].length;
    temp.push(words[i]); // to inner array

    if (charCount > 57) {
      lines.push(temp.join(' ')); // to outer array

      // reset counter & inner array
      charCount = 0;
      temp.length = 0;
    }
  }

  lines.push(temp.join(' '));
  return lines.join('\n');
}

/*
function formatLine(line) {
  // set up subarrays
  let formatted = [];
  for (let i = 0; i < line.length; i += 57) {
    formatted.push([]);
  }

  let words = line.split(' ');
  let charCount = 0;
  let sub = 0;

  // loop through words array --> subarrays
  for (let i = 0; i < words.length; i += 1) {
    charCount += words[i].length;
    if (charCount < 58) {
      formatted[sub].push(words[i]);
    } else {
      sub += 1;
      formatted[sub].push(words[i]);
      charCount = 0;
    }
  }

  // format subarrays into lines of text
  for (let i = 0; i < formatted.length; i += 1) {
    if (formatted[i].length) {
      formatted[i] = formatted[i].join(' ');
    } else {
      formatted.pop();
    }
  }

  return formatted.join('\n');
}
*/

terms.forEach(term => console.log(highlightMatches(term, text)));

/*
These helper fns are only necessary because I used regex –
for ignoreCase. I could have skipped regex, used replaceAll('str', 'newStr'),
and been more explicit in test cases 1 & 3:
['John', 'and', 'jazz ', 'jazz.', 'Milt']

10_searchword2.js doesn't use regex or String methods like match(),
replace(), replaceAll(), etc. It highlights the right searchTerms.
The only issue is test case 2, 'and', but that's fixable w/ oneLiner() & formatLine().
*/
