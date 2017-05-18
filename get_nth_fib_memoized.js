// Recursive implementation of function that returns the nth number in the Fibonacci sequence.
var getNthFib = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return getNthFib(n-1) + getNthFib(n-2)
  }
};

// This implementation generates 2 recursive calls to itself for every 1 input, resulting in a worst-case time complexity of O(2^n)

// getNthFib is a classic example of an expensive operation that can benefit from memoization.

var getNthFibMemo = function (n) {
  var alreadyDone = {};
  if (n <= 1) {
    return 1;
  } else {
    var result = getNthFibMemo(n-1) + getNthFibMemo(n-2);
    alreadyDone[n] = result;
    return result;
  }
}

// With this implementation, we're storing the result of every nth fib number, as well as all of those between n and 2 (inclusive), on the first run. Thus, subsequent runs for any input between 2 and n will result in a worst case time complexity of O(1).