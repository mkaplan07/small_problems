// input: n, an odd integer >= 7 representing # lines & max length (mid)
// output: snowflake

// from mid, which is '*'.repeat(n)
//  ' '.repeat(left) + ['*', '*', '*'].join(' '.repeat(between)));
//  left = (n - 3) / 2;
//  between = 0;
// while (lines.length < n) { lines.unshift(); lines.push(); left -= 1; between += 1 }
// console.log(lines.join('\n'));

function letItSnow(n) {
  let lines = [];
  lines.push('*'.repeat(n));

  let left = (n - 3) / 2;
  let between = 0;

  while (lines.length < n) {
    let line = ' '.repeat(left) + ['*', '*', '*'].join(' '.repeat(between));
    lines.unshift(line);
    lines.push(line);

    left -= 1;
    between += 1;
  }

  console.log(lines.join('\n'));
}

let lens = [7, 9];
lens.forEach(len => letItSnow(len));
