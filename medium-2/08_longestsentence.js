let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

// input: string, output: longest sentence (string) & wordcount (num)

// * about  *
// if ('.?!').includes(str[i]) {
//  lines.push(str.slice(start, i + 1)...); start = i + 1; }
//  ... .split(' ').filter(word => word !== '');
// sort b.length - a.length
// log [0] & wordcount

// *  questions *
// em: i) '', ' ' // TypeError for .length --> guard clause
//  o) n/a
// boundaries: len, m/m, sep, stop – 
//  if ('.?!').includes(str[i]), end at i + 1 to preserve punctuation
// repetition...
// string: case => as is, punctiation => as is
// log or return? "a program that prints"

function findLines(str) {
  let lines = [];
  let start = 0; // for .slice()

  for (let i = 0; i < str.length; i += 1) {
    if ('.?!'.includes(str[i])) {
      lines.push(str.slice(start, i + 1)
        .split(' ')
          .filter(word => word !== ''));
      start = i + 1;
    }
  }
  return lines;
}

function findLongestSentence(str) {
  let lines = findLines(str);

  lines.sort((a, b) => b.length - a.length);
  let longest = lines[0];
  console.log(longest.join(' '), 'wordcount:', longest.length);
}

function solution(str) {
  let lines = findLines(str);

  let longest = lines.reduce((obj, line) => {
    if (line.length > obj.length) {
      return { text: line.join(' '), length: line.length };
    } else {
      return obj;
    }
  }, { text: '', length: 0 });

  console.log(longest.text, 'wordcount:', longest.length);
}

let tests = [longText, longerText, "Where do you think you're going? What's up, Doc?", "To be or not to be! Is that the question?"];
// tests.forEach(el => findLongestSentence(el));
tests.forEach(el => solution(el));

// test
