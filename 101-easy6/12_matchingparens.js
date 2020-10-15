// input: str, output: bool
// true if zero parens or
// open === close && all pairs start w/ open '('

/*
My solution:
for loop... += 1 for open, += 1 for close
if (open + close === 0) return true;
return compareParens(open, close) ? return compareLastIndex(str) : false;

compareParens: return (open === close)
compareLastIndex: return str.lastIndexOf(')') > str.lastIndexOf('(')
*/

function matchParens(str) {
  let parens = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      parens += 1;
    } else if (str[i] === ')') {
      parens -= 1;
    }

    if (parens < 0) return false; // covers compareLastIndex()
  }
  return (parens === 0); // covers 'zero parens'
}

let tests = ["What (is) this?", "What is) this?", "What (is this?", "((What) (is this))?", "((What)) (is this))?", "Hey!", ")Hey!(", "What ((is))) up("];
tests.forEach(el => console.log(matchParens(el)));
