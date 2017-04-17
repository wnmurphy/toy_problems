/*
  Bubble Sort
  O(n^2)

  For each position i from the back of an array
    For each element at position j from the front of the array
      If array[j] is greater than array[j+1], then swap them
      Continue until you reach position i
    Decrement i since we only need to check one fewer position each time.
*/

function bubbleSort (arr) {
  var hold;
  for (var i = arr.length-1; i >=0; i--) {
    for (var j = 0; j <= i; j++) {
      if (arr[j] > arr[j+1]) {
        hold = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = hold;
      }
    }
  }
  return arr;
}