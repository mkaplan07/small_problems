// input: two arrays, output: array of products –
// arr1[i] * each arr2, arr1[i + 1] * each arr2, etc.

function multiplyAllPairs(arr1, arr2) {
  let products = [];
  arr1.forEach(el1 => {
    arr2.forEach(el2 => {
      products.push(el1 * el2);
    });
  });
  return products.sort((el1, el2) => el1 - el2);
}

console.log(multiplyAllPairs([4, 3, 1, 2], [2, 4]));

// original solution – for loop
function multiplyAllPairs1(arr1, arr2) {
  let products = [];
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      products.push(arr1[i] * arr2[j]);
    }
  }
  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs1([4, 3, 1, 2], [2, 4]));
