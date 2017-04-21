function mergeSort (arr) {

  if (arr.length === 1) {
    return arr;
  } else {

    var left = arr.slice(0, arr.length/2);
    var right = arr.slice(arr.length/2, arr.length);    
    
    left = mergeSort(left);
    right = mergeSort(right)
    
    return merge(left, right);
  }

  function merge (left, right) {
    var sorted = [];

    // Handle comparison...
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }

    // Handle leftovers...
    while (left.length) {
      sorted.push(left.shift())
    }

    while (right.length) {
      sorted.push(right.shift())
    }

    return sorted;
  }
}
