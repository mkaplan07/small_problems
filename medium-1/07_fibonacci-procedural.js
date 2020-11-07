// input: position in Fibonacci sequence, output: number in sequence
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// Exercise 6
function fibRecursive(nth) {
  if (nth <= 2) {
    return 1;
  }

  return fibRecursive(nth - 1) + fibRecursive(nth - 2);
}

// Exercise 7
function fibProcedural(nth) {
  let count = 2; // snapshot at 'count' or position 2
  let fib = 1;
  let previous = 1;

  while (count < nth) {
    count += 1;
    fib = fib + previous;
    previous = fib - previous;
  }

  return fib;
}

// for (let i = 1; i < 10; i += 1) {
//   console.log(`${i}: ${fibProcedural(i)}`);
// }

function timeFunction(fn, arg) {
  let start = Date.now();
  console.log(`result: ${fn(arg)}`);

  let fin = Date.now();
  console.log(`time elapsed: ${fin - start}ms`);
}

timeFunction(fibProcedural, 35);
timeFunction(fibRecursive, 35);

// function solution(nth) {
//   let fib = [1, 1];
//
//   for (let i = 2; i < nth; i += 1) {
//     fib = [fib[1], fib[0] + fib[1]];
//   }
//
//   return fib[1];
// }
