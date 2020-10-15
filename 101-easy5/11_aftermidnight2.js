// Sol

// const MPD = 1440;
//
// function clocker(input) {
//   if (input < 0) {
//     input = (input % MPD) + MPD; // (00:00 less 60 --> yesterday 22:00) + 1440
//   } else {
//     input = input % MPD;
//   }
//
//   let hr = Math.floor(input / 60);
//   let min = input % 60;
//
//   formatter(hr, min);
// }

function zero(n) {
  return n < 10 ? '0' + n : String(n);
}

function formatter(hr, min) {
  console.log(`${zero(hr)}:${zero(min)}`);
}
let tests = [0, -3, 35, -1437, 3000, 800, -4231];
// tests.forEach(el => clocker(el));

function alt(input) {
  let minutes = input % 1440;

  let hr = Math.floor(minutes / 60);
  let min = minutes % 60;

  if (input < 0) {
    formatter(24 + hr, 60 + min);
  } else {
    formatter(hr, min);
  }
}
tests.forEach(el => alt(el));
