// input: a) search term, b) text (string)
// output: integer representing number of times a) appears in b)

// *  about *
// return text.split(' ').filter(word => word.toLowerCase() === term).length

// *  Qs  *
// emptiness: '', ' ' => "word and text inputs will always be provided"
// boundaries: "all word breaks are spaces"
// repetition: checking...
// string: case? => from test case 1, case INsensitive
//  punctuation? => "some words will include punctuation"
// data type: see emptiness
// Log or return? "returns an integer"

let text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'

let terms = ['sed', 'est', 'est,'];

function findFrequency(term, text) {
  return text.split(' ').filter(word => word.toLowerCase() === term).length;
}
terms.forEach(term => console.log(findFrequency(term, text))); // 4, 0, 2

// Solution
function findWordsInText(term, text) {
  let count = 0;

  let lcTerm = term.toLowerCase();
  let lcText = text.toLowerCase().split(' ');

  for (let i = 0; i < lcText.length; i += 1) {
    if (lcText[i] === lcTerm) {
      count += 1;
    }
  }

  return count;
}

console.log('Solution, using for loop...');
terms.forEach(term => console.log(findWordsInText(term, text)));
