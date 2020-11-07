// input: string, output: string w/ number words replaced by digits
// *  about *
// 1) str.split(' ').map... if nums.includes(word), return nums.indexOf(word)
//     else if punctuation.includes(last) &&, return nums.indexOf(main) + last
// 2) solution – nums.forEach(n => let reg = ('\\b' + n + '\\b', 'gi'))
//     str = str.replace(reg, nums.indexOf(num))
// 3) further exp – w/o loop
//      let reg = /\w+/, g
//      return str.replace(reg, function(reg) {
//        return nums.includes(reg.toL()) ? nums.indexOf(reg.toL()) : reg
// *  Qs  *
// emptiness: will I receive an empty string? => assume not
// boundaries: len, m/m, sep, stop...
//   'where a "number word" is a part of another word' => \b
// repetition...
// strings: case => matters, punctuation => matters
// data type: "takes a sentence string as an argument"

let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
let punctuation = ',.?!';

function digitizer(str) {
  return str.split(' ').map(word => {
    let main = word.toLowerCase().slice(0, -1);
    let last = word.slice(-1);

    if (nums.includes(word.toLowerCase())) {
      return nums.indexOf(word.toLowerCase());
    } else if (punctuation.includes(last)
                && nums.includes(main)) {
      return nums.indexOf(main) + last;
    } else {
      return word;
    }
  }).join(' ');
}

let tests = ['Call at five five three.', 'Call at FIVE Three.', 'The weight is done.'];

console.log('my solution...');
tests.forEach(el => console.log(digitizer(el)));

function solution(str) {
  nums.forEach(num => {
    let reg = new RegExp('\\b' + num + '\\b', 'gi');
      // RegExp bc num is a variable; escape \b (backspace character)
    str = str.replace(reg, nums.indexOf(num));
  });
  return str;
}
console.log('\nsolution...');
tests.forEach(el => console.log(solution(el)));

function furtherExp(str) {
  let reg = new RegExp(/\w+/, 'g'); // strs of alphaNUMERICs, but that's ok
  return str.replace(reg, function(reg) {
    return nums.includes(reg.toLowerCase()) ? nums.indexOf(reg.toLowerCase()) : reg;
  });
}

console.log('\nfurther exploration...');
tests.forEach(el => console.log(furtherExp(el)));

// \b ensures matches w/ strings that are words
// why for #2 and not #s 1 & 3?
// bc #1 splits by ' ' & #3 uses \w+
