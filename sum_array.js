/*
  Given an array of numbers, calculate the greatest contiguous sum of numbers in it. 
  A single array item will count as a contiguous sum.

  Examples

  [input] : output
  [ 1, 2, 3 ] : 6
  [ 4, -1, 5 ] : 8
  [ 10, -11, 11 ] : 11
  [ 1, 2, 3, -6, 4, 5, 6 ] : 15
*/

function arraySum (arr) {
  var sum = 0, sums = [];
  // Starting on each array element...
  for (var j = 0; j < arr.length; j++) {
  // Generate a sum of every subarray length, starting with 1.
    for (var k = 0; j+k < arr.length; k++) {
      sum += arr[j+k];
      sums.push(sum);
    }
    sum = 0;
  }

  function maxInArray (sumsArr) {
    var indexOfGreatestSoFar = 0;
    for (var l = 0; l < sumsArr.length; l++) {
      if (sumsArr[l] > sumsArr[indexOfGreatestSoFar]) {
        indexOfGreatestSoFar = l;
      }
    }
    return sumsArr[indexOfGreatestSoFar];
  }

  function sum (subarr) {
    var sum;
    for (var i = 0; i < subarr.length; i++) {
      sum += subarr[i];
    }
    return sum;
  }

  return maxInArray(sums);
}