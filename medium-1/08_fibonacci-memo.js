// input: position in Fibonacci sequence, output: number in sequence
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

let memo = {};
function fibMemo(nth) {
  if (nth <= 2) {
    console.log(`${nth} returns 1`);
    return 1;
  } else if (memo[nth]) {
    console.log(`memo[${nth}]: ${memo[nth]}`);
    return memo[nth];
  } else {
    memo[nth] = fibMemo(nth - 1) + fibMemo(nth - 2);
    console.log('memo is', memo);
    return memo[nth];
  }
}

console.log(fibMemo(5));
/*
"...memoization saves calls to fibonacci(nth - 2) because the necessary values
  have already been computed by the recursive calls to fibonacci(nth - 1)."
  fibMemo(3): fM(2) + fM(1) --> 2 returns 1, 1 returns 1 --> memo[3] = 2
  fibMemo(4): fM(3) + fM(2) --> memo[3]: 2, 2 returns 1 --> memo[4] = 3
  fibMemo(5): fM(4) + fM(3) --> memo[4]: 3, memo[3]: 2
*/

// for (let i = 1; i < 10; i += 1) {
//   console.log(`${i}: ${fibMemo(i)}`);
// }
