// input: string
// output: string in a box
// vars for each line \n, ${placeholders}

let rs = require('readline-sync');

function get(text) {
  return rs.question(text);
}
function maxer() {
  let input = Number(rs.question('Set a max:\n'));
  return (!input || input > 4) ? input : maxer();
}

function boxer(str, max) {
  max === 0 ? max = str.length + 4 : max; // You may assume no maximum if the second argument is omitted.

  let outer = `+${'-'.repeat(str.length + 2)}+`;
  let inner = `|${' '.repeat(str.length + 2)}|`;
  let mid = `| ${str} |`;
  if (str.length > max - 4) {
    // if max 0, str.length === max - 4
    // condition is for an explicit max
    outer = `+${'-'.repeat(max - 2)}+`;
    inner = `|${' '.repeat(max - 2)}|`;
    mid = '';

    // string to substrings
    let em = [];
    for (let i = 0; i < str.length; i += (max - 4)) {
      // (max - 4) leaves space for for '| ' & ' |'
      em.push(str.slice(i, (i + (max - 4))));
    }
    // right-size last substring
    em[em.length - 1] += ' '.repeat((max - 4) - em[em.length - 1].length);

    // append each substring to mid
    for (let i = 0; i < em.length; i += 1) {
      mid += `| ${em[i]} |\n`;
    }
    // chop final \n
    mid = mid.slice(0, -1);
  }
  console.log(`${outer}\n${inner}\n${mid}\n${inner}\n${outer}`);
}

boxer(get('enter a string:\n'), maxer());
