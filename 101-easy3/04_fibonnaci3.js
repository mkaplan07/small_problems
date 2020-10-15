// input: an integer, number of places (1s, 10s, 100s, etc.)
// output: i in fib sequence

// 1) fn to convert input to a divisor (div)
// 2) fn to increment while (fib (a + b) / div) < 1
// return counter

let rs = require('readline-sync');

function get(text = 'Places please:\n') {
  return rs.question(text);
}

let falsos = ['false', '0', '', 'null', 'undefined', 'NaN'];

function placer(place) {
  while (falsos.includes(place)) {
    place = get('Enter a number greater than zero.\n')
    // there's no 0s place. Places start at 1 (index 1)
  }

  let div = 1;
  while (place > 1) { // implicit coercion to number
    div *= 10;
    place -= 1; // decrements
  }

  return div;
}

function fibber() {
  let div = placer(get());
  console.log('div:', div);

  let fib = 1;
  let a = 0;
  let b = 1;

  let counter = 1; // 1, so counter matches the sequence

  while ((fib / div) < 1) {
    fib = a + b;
    console.log('fib:', fib);
    a = b;
    b = fib;
    counter += 1;
  }

  console.log(`${counter}: ${fib}, ${counter - 1}: ${a}`)
  return counter;
}
console.log(fibber());
