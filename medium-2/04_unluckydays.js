// input: year (number), output: # of Friday 13ths

// *  about   *
// for each i, let fecha = new Date(`${i}/13/${year}`)
//  if fecha.getDay() === 5, count += 1;

// *  questions   *
// emptiness: i) => "takes a year as an argument"
//  o) => apparently, all calendar years have at least 1 Friday 13th
// boundaries: len, m/m, sep, stop
//  => let i = 1, i <= 12 (Jan - Dec)
//  => year > 1752
//  => maxYear?
// repetition...
// number: e/o n/a, negative/zero => > 1752
// log or return? => "returns the number of Friday the 13ths"

function findFriday13ths(year) {
  let count = 0;
  for (let i = 0; i < 12; i += 1) {
    // January is month 0
    let fecha = new Date(`${i}/13/${year}`);

    if (fecha.getDay() === 5) {
      count += 1;
    }
  }

  return count;
}

let tests = [1986, 2015, 2017];
tests.forEach(year => console.log(findFriday13ths(year)));

// Further exploration – was .reduce() a good choice?
function findFriday13ths2(year) {
  let thirteenths = [];

  for (let i = 0; i < 12; i += 1) {
    thirteenths[i] = new Date(year, i, 13);
  }

  return thirteenths.filter(el => el.getDay() === 5).length;
}

console.log('\nFurther exploration...');
tests.forEach(year => console.log(findFriday13ths2(year)));
