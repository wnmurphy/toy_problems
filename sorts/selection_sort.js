/*
  Selection Sort
  O(n^2)
  Think: "Manually sorting a hand of playing cards."

  Consider an array to consist of two subarrays, the left subarray sorted and the right unsorted.
  Start on the second element x of the array, since the first element can be considered a sorted subarray. 
  Loop over the left subarray to find the index in the left subarray where x belongs, and insert x.

*/

var selectionSort = function (arr) {
  for (var i = 1; i < arr.length; i++) { // i is card to insert
    for (var j = 0; j < i; j++) { // j is position in left (sorted) subarray
      if (arr[i] <= arr[j]) {
        arr.splice(j,  null, arr.splice(i,1)[0] ); // remove i, insert before j
      } else {
        arr.splice(j+1,  null, arr.splice(i,1)[0] );
      }
    }
  }
  return arr;
};
