// input: str, output: str w/ chars doubled 'aabbcc...'

function doubler(str) {
  let letters = str.split('');
  // to arr for .splice()... could have looped thru str, res.push(str[i], str[i])

  for (let i = 0; i < letters.length; i += 2) {
    letters.splice(i, 0, letters[i]);
  }
  return letters.join('');
}

function doubleMap(str) {
  return str.split('').map(el => el + el).join('');
                                  // concatenate
}

let tests = ['Hello', 'Good job!', ''];
tests.forEach(el => console.log('doubler:', doubler(el), 'doubleMap:', doubleMap(el)));
