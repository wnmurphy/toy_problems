// Make an array method that can return whether or not a context array is a subset of an input array. 
// To simplify the problem, you can assume that both arrays will contain only strings.

// Normally I'd avoid monkeypatching, but it's in the spec for this problem, so...
Array.prototype.isSubsetOf = function (arr) {
  var subset = true;
  var elements = {};
  for (var i = 0; i < arr.length; i++) {
    elements[arr[i]] = true;
  }
  for (var j = 0; j < this.length; j++) {
    if (! (this[j] in elements) ) {
      subset = false;
    }
  }
  return subset;
};

// Example usage:
['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']); // true
['cat', 'doge', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']); // false