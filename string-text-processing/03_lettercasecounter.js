// input: string, output: obj of lowercase, uppercase & neither
// loop thru str, if (/[^a-z]/i.test(str[i])) { obj.neither += 1 } ...

// *  questions *
// emptiness: input '' or ' '? '' ignored, ' ' // neither
// boundaries, repetition...
// str: case (checking...), punctuation // neither
// data type: "takes a string"
// Log or return? "returns"

function countCases(str) {
  let counts = {
    neither: 0,
    lowercase: 0,
    uppercase: 0
  };

  for (let i = 0; i < str.length; i += 1) {
    if (/[^a-z]/i.test(str[i])) {
      counts.neither += 1;
    } else if (str[i] === str[i].toLowerCase()) {
      counts.lowercase += 1;
    } else {
      counts.uppercase += 1;
    }
  }

  return counts;
}

let tests = ['abCdef 123', 'AbCd +Ef', '123', ''];
tests.forEach(test => console.log(countCases(test)));
