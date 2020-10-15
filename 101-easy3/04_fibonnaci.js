// input: a place – as in 1s, 10s, 100s (integer)
// output: index of first el with that place
// fn to get place (watch for implicit coercion: > <)
// fn to convert place to 1, 10, 100, etc. (div)
// fn to populate an array (place * div) times
// fn to iterate in search of a number / place >= 1

let rs = require('readline-sync');

function get() {
  return rs.question('Enter an integer:\n');
}

function placer(place) {
  let div = 1;
  while (place > 1) { // 1s, 10s, 100s, etc. 
    div *= 10;
    place -= 1;
  }

  return div;
}

function fibber(int) {
  let arr = [0, 1]; // 0, 1 (vs. 1, 1) so i matches the sequence

  let i = 2;
  while (i < int) {
    arr.push(arr[i - 1] + arr[i - 2]);
    i += 1;
  }

  return arr;
}

function finder() {
  let div = placer(get());
  let arr = fibber(div); // can result in huge arrays

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] / div >= 1) {
      console.log(`${i}: ${arr[i]}, ${i - 1}: ${arr[i - 1]}`);
      return i;
    }
  }
  return -1;
}
console.log(finder());
