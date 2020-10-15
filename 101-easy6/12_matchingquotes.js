// input: str, output: t/f (even # quotes)

let rs = require('readline-sync');

function getStr(msg) {
  return rs.question(msg);
}

function matchQuotes() {
  let str = getStr('Enter a string:\n');
  let quotes = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '\'') { // no escape for "
      quotes += 1;
    }
  }
  console.log('quotes:', quotes);
  return quotes % 2 === 0;
}

console.log(matchQuotes());
