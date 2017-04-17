/*
  Selection Sort
  O(n^2)

  Insertion sort: the inner (faster) loop iterates over sorted elements. "Where to INSERT?"
  Selection sort: the inner (faster) loop iterates over unsorted elements to 'select' the smallest. "Which to SELECT?"

  For each position i in an array.
    Find the smallest element in the rest of the array at position s
    Swap the element at s with the element at position i.
    Etc.
*/

var selectionSort = function (arr) {
  var s = 0, hold;
  // For each position i
  for (var i = 0; i < arr.length; i++) {
    // Find the index s of the smallest element in the rest of the array.
    for (var j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[s]) {
        s = j;
      }
    }
    // If smallest is less than current sorted element, swap.
    if (arr[s] < arr[i]) {
      hold = arr.splice(s, 1)[0];
      arr.splice(i, null, hold);
    }
  }
  return arr;
};
