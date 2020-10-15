// input: nested array of items & quantities
// output: array of items, quantities times each

function listOutTheItems(arr) {
  let list = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i][1]; j += 1) {
      list.push(arr[i][0]);
    }
  }
  return list;
}

let test = [['apple', 3], ['orange', 1], ['banana', 2]];
console.log(listOutTheItems(test));
