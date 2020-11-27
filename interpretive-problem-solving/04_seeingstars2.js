// Further exploration: make the code less repetitive

function letItSnow(n) {
  let lines = [];
  let left = 0;
  let between = (n - 3) / 2;

  while (lines.length < Math.floor(n / 2)) {
    let line = ' '.repeat(left) + ['*', '*', '*'].join(' '.repeat(between));
    lines.push(line);

    left += 1;
    between -= 1;
  }

  // less repetitive than original solution (LS)
  lines = lines.concat(lines.slice().reverse());

  // splice center
  lines.splice(lines.length / 2, 0, '*'.repeat(n));

  console.log(lines.join('\n'));
}

let tests = [7, 9];
tests.forEach(el => letItSnow(el));
