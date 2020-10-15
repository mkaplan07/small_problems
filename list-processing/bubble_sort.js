// https://humanwhocodes.com/blog/2009/05/26/computer-science-in-javascript-bubble-sort/

function checkSequence(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function bubbleSorter(arr) {
  let outer = 0;
  let inner = 0;
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < arr.length - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      inner += 1;
    }
    outer += 1;
    console.log(`after ${outer} x loops, we've y-looped ${inner} times.`);
    console.log(`and here's the array: ${arr}`);
    // if (checkSequence(arr)) break;
  }
  return arr;
}

console.log(bubbleSorter([6, 1, 5, 2, 4, 3]));
