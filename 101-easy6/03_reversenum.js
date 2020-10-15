// input: positive integer, output: digits reversed

function flipper1(num) {
  return Number(String(num).split('').reverse().join(''));
}

function flipper2(num) {
  let rev = '';
  while (num > 0) {
    rev += num % 10;
    num = Math.floor(num / 10);
  }
  return Number(rev);
}

let tests = [12345, 12213, 456, 12000, 1];
tests.forEach(el => console.log(flipper1(el)));
tests.forEach(el => console.log(flipper2(el)));
