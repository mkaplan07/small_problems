// Check whether the absolute value of an integer is odd
let nums = [2, 5, -17, -8, 0, 7];

function odder(arr) {
  for(let i = 0; i < arr.length; i += 1) {
    console.log(Math.abs(arr[i]) % 2 === 1);
    // Math.abs bc % takes the sign of the dividend, -1 === 1 // f
  }
}

// f t t f f t
(odder(nums));
