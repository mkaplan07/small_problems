// input: '00:00', output: # mins before or after midnite

function before(time) {
  return (1440 - after(time)) % 1440; // % 1440 for "00:00" & "24:00"
}

function after(time) {
  let hr = Number(time.slice(0, 2));
  let min = Number(time.slice(3));

  return ((hr * 60) + min) % 1440; // % 1440 for "24:00"
}

let tests = ["00:00", "12:34", "24:00"];
tests.forEach(el => console.log(after(el), before(el)));
