// input: word (string), output: true/false
// i) loop thru chars, for each...
// j) loop thru blocks, if block.includes(char.toUpperCase()),
//  if used.includes(block) return false, else used.push(block)

let blocks = ['BO', 'GT', 'VI', 'XK', 'RE', 'LY', 'DQ', 'FS', 'ZM', 'CP', 'JW', 'NA', 'HU'];
let regs = [/B|O/gi, /X|K/gi, /D|Q/gi, /C|P/gi, /N|A/gi, /G|T/gi, /R|E/gi, /F|S/gi, /J|W/gi, /H|U/gi, /V|I/gi, /L|Y/gi, /Z|M/gi];

function checkBlocks(str) {
  let used = [];
  for (let i = 0; i < str.length; i += 1) {

    // check for non-alphas
    let match = blocks.filter(block => block.includes(str[i].toUpperCase()))[0];
    if (match === undefined) {
      console.log(`${str[i]} doesn't exist!`);
      return false;
    }

    for (let j = 0; j < blocks.length; j += 1) {
      if (blocks[j].includes(str[i].toUpperCase())) {
        if (used.includes(blocks[j])) {
          return false;
        } else {
          used.push(blocks[j]);
        }
      }
    }
  }
  return true;
}

let tests = ['BATCH', 'BUTCH', 'jest', 'Babs', 'A1'];

tests.forEach(el => console.log(checkBlocks(el)));

// doesn't cover non-alphas like 'A1'
function checkEveryBlock(str) {
  return regs.every(reg => (str.match(reg) || []).length < 2);
}

console.log('\nusing regex...');
tests.forEach(el => console.log(checkEveryBlock(el)));
