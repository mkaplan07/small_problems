// Solution
// splice instead of "used" array...
// loop thru string, for each letter
//  let match = localBlocks.filter(block => block.includes(str[i].toUpperCase()))[0];
//    if (match === undefined) return false
//    else localBlocks.splice(localBlocks.indexOf(match), 1);

let blocks = ['BO', 'GT', 'VI', 'XK', 'RE', 'LY', 'DQ', 'FS', 'ZM', 'CP', 'JW', 'NA', 'HU'];
let tests = ['BATCH', 'BUTCH', 'jest', 'Babs', 'A1'];

function checkBlocks(str) {
  let localBlocks = blocks.slice();
  for (let i = 0; i < str.length; i += 1) {
    let match = localBlocks.filter(block => block.includes(str[i].toUpperCase()))[0];
    // console.log(`loop ${i} for ${str[i]}: match === ${match}`);
    if (match === undefined) {
      return false;
    } else {
      localBlocks.splice(localBlocks.indexOf(match), 1);
    }
  }
  return true;
}

tests.forEach(el => console.log(checkBlocks(el)));
