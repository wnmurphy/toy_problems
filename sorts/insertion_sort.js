/*
  Insertion Sort
  O(n^2)

  Insertion sort: the inner (faster) loop iterates over sorted elements. "Where to INSERT?"
  Selection sort: the inner (faster) loop iterates over unsorted elements to 'select' the smallest. "Which to SELECT?"

  Consider an array to consist of two subarrays, the left subarray sorted and the right unsorted.
  Start on the second element x of the array, since the first element can be considered a sorted subarray. 
  Loop over the left subarray to find the index in the left subarray where x belongs, and insert x.
*/

var insertionSort = function (arr) {
  var hold;
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
          move = arr.splice(i, 1)[0];
          arr.splice(j, null, move);
        }
      }
  }
  return arr;
};