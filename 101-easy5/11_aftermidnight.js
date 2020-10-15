// input: number of minutes, output: '00:00'
// let hr = Math.floor(input / 60) % 24;
// let min = (input / 60) % hr; --> Math.abs() for rev()
//            Math.round(min * 60);
// for negatives 24 - hr, 60 - min
// format: if < 10, '0' + hr/min. Else hr/min

function fwd(input) {
  let hr = Math.floor(input / 60) % 24;
  let min;
  if (hr < 1) {
    min = (input / 60) * 60;
  } else {
    min = Math.round(((input / 60) % hr) * 60);
    // separates mins (multiplier) from hr
  }

  formatter(hr, min);
}

function rev(input) {
  let hr = 24 + Math.floor(input / 60) % 24; // 24 + negative
  if (hr === 24) { hr = 0; } // for -1437

  let sub = Math.abs(input) / 60;
  let min;
  if (sub < 1) {
    min = sub * 60;
  } else {
    min = Math.round((sub % Math.floor(sub)) * 60);
    // separates mins (multiplier) from sub
  }
  min = 60 - min;

  formatter(hr, min);
}

function zero(n) {
  return n < 10 ? n = '0' + n : n = String(n);
}

function formatter(hr, min) {
  console.log(`${zero(hr)}:${zero(min)}`);
}

function clocker(input) {
  return input < 0 ? rev(input) : fwd(input);
}

let tests = [0, -3, 35, -1437, 3000, 800, -4231];
tests.forEach(el => clocker(el));
