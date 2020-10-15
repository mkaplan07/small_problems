// input: minutes (Number), output: '00:00' before/after midnight
let rs = require('readline-sync');

function jour(n) {
  let d = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
  return d[n];
}

function getMins(txt) {
  return rs.questionInt(txt);
}

const MID = new Date('8/30/2020 00:00');

function clocker() {
  console.log(`Midnite: ${jour(MID.getDay())} ${MID.toTimeString()}`);

  let mins = getMins('Mins before/after midnite:\n');
  MID.setMinutes(MID.getMinutes() + mins); // whether positive or negative

  console.log(`Nao: ${jour(MID.getDay())} ${MID.toTimeString()}`);
}
clocker();

// input: 'XX:XX' before or after midnight, output: # minutes
function getTime(txt) {
  let time = rs.question(txt);
  return new Date(time);
}

function after() {
  console.log(`Midnite: ${jour(MID.getDay())} ${MID.toTimeString()}`);

  let nao = getTime('Time after midnite, like \'8/30/2020 06:00\'\n');
  console.log(`Nao: ${jour(nao.getDay())} ${nao.toTimeString()}`);

  return (nao.getHours() * 60) + nao.getMinutes();
}
console.log(after());

function before() {
  console.log(`Midnite: ${jour(MID.getDay())} ${MID.toTimeString()}`);

  let nao = getTime('Time before midnite, like \'8/29/2020 23:55\'\n');
  console.log(`Nao: ${jour(nao.getDay())} ${nao.toTimeString()}`);

  return 1440 - ((nao.getHours() * 60) + nao.getMinutes());
}
console.log(before());
