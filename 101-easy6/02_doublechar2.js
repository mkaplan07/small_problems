// input: str, output: str w/ chars doubled
// exceptions: vowels, punctuation, spaces & 0-9

let ignores = ['a', 'e', 'i', 'o', 'u', ',', '.', '?', '!', '-', ' '];
function doubler(str) {
  let arr = str.split(''); // to arr for .splice()
  let i = 0;
  while (i < arr.length) {
    if (!ignores.includes(arr[i].toLowerCase()) && !/[0-9]/.test(arr[i])) {
      // in both cases, we want the condition to fail. Then ! for true.
      arr.splice(i, 0, arr[i]);
      i += 2;
    } else {
      i += 1;
    }
  }
  return arr.join('');
}

let cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
function sol(str) {
  let res = [];
  for (let i = 0; i < str.length; i += 1) {
    if (cons.includes(str[i].toLowerCase())) {
      res.push(str[i], str[i]);
    } else {
      res.push(str[i]);
    }
  }
  return res.join('');
}

let tests = ['String', 'Hello-World!', 'July 4th', 'Oberon', ''];
tests.forEach(el => console.log(doubler(el)));
tests.forEach(el => console.log(sol(el)));
