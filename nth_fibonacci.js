// Implement nthFibonacci without using recursion.

var nthFibonacci = function (n) {
  // 0 -> 0
  // 1 -> 1
  // 2 -> 1
  // 3 -> 2
  // 4 -> 3
  // 5 -> 5
  // 6 -> 8
  // 7 -> 13
  var fib = 0, count = 0, fibMinusOne = 0, fibMinusTwo = 0, temp;
  while (count <= n) {
    if (count === 1) {
      fib += 1;
      fibMinusOne = 1;
    } else {
      temp = fib;
      fib = fibMinusOne + fibMinusTwo;
      fibMinusTwo = fibMinusOne;
      fibMinusOne = fib;
    }
    count++;
  }
  return fib;
};
