// Insertion Sort - O(n^2)

/*
  For every element j in an array arr starting at position 1,
    For every element i in array arr starting at position 0,
      While arr[i] < arr[j],
        Cut out arr[i].
        Splice in before arr[j].
*/

var insertionSort = function (arr) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
        var move = arr.splice(i, 1)[0];
        arr.splice(j, null, move);
      }
    }
  }
  return arr;
};