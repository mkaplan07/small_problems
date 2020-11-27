// Further exploration
// "How about the sentence with the longest word?"

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'propositionthatallmen are created equal. Now we are engaged in a ' +
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
  'that from these honoreddeadwetakeincreaseddevotiontothat ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

function findLongestWord(str) {
  let sents = str.match(/\w.*?[.?!]/g).map(sent => sent.split(' '));

  let longestWord = '';
  let sentence;

  for (let i = 0; i < sents.length; i += 1) {
    for (let j = 0; j < sents[i].length; j += 1) {
      if (sents[i][j].length > longestWord.length) {
        longestWord = sents[i][j];
        sentence = i;
      }
    }
  }

  console.log(`longestWord: ${longestWord},
                letterCount: ${longestWord.length},
                  sentence: ${sents[sentence].join(' ')}`);
}

let tests = [longText, longerText, "Where do you think you're going? What's up, Doc?", "To be or not to be! Is that the question?"];

tests.forEach(el => findLongestWord(el));
