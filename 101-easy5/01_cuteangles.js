// input: number between 0 and 360
// output: number˚ % 1 * 60' % 1 * 60''
// parseInt() each
// to format ' & '', ('0' + result).slice(-2);

let rs = require('readline-sync');

function degrees() {
  let ang = rs.questionFloat('What\'s your angle?\n');
  let min = (ang % 1) * 60;
  let sec = (min % 1) * 60;
  console.log(`ang: ${ang}, min: ${min}, sec: ${sec}`);

  let deg = parseInt(ang) + '\xB0'// '°'  
  min = ('0' + parseInt(min)).slice(-2) + '\'';
  sec = ('0' + parseInt(sec)).slice(-2) + '\"';

  return deg + min + sec;
}
console.log(degrees());
