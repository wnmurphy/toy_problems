// Find the index of element x in an sorted array arr, in O(log n) time.

// This could be recursive, but it would be simplest to make it iterative first.

function binarySearch (arr, x) {
  var leftPointer = 0;
  var rightPointer = arr.length;

  function recurse (leftRangeLimit, rightRangeLimit) {
    var middle = Math.floor(((rightRangeLimit-leftRangeLimit)/2)+leftRangeLimit);
    if (arr[middle] === x) { // target found
      return middle;
    } else if (leftRangeLimit === rightRangeLimit) { // exhausted range
      return -1;
    } else if (x < arr[middle]) { // 
      return recurse(leftRangeLimit, middle);
    } else if (x > arr[middle]) {
      return recurse(middle, rightRangeLimit);
    }
  }

  return recurse(leftPointer, rightPointer);
}

binarySearch([1,2,3,4,5,6,7,8,9,10], 1); // 0
binarySearch([1,2,3,4,5,6,7,8,9,10], 10); // 4
binarySearch([1,2,3,4,5,6,7,8,9,10], 10); // 9