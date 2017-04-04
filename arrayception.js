// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

// Examples
// [ [ 5 ], [ [ ] ] ] 2
// [ 10, 20, 30, 40 ] 1
// [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] 4
// [ ]  0
// [ [ [ ] ] ]  0

/*
  Input: Array containing arrays or any other values that are not arrays
  Output: An integer representing the deepest level of a non-array value in a nested array
  Constraints: Unlimited nested levels
  Edge cases: Non-array value inputs
  Base case: Find an element that is not an array
*/

function arrayception(nestedArray) {
  // define a counter
  var counter = 0;
  // write a separate recursive function
  function recurse (element, depth) {
    // base case: if the element is non-array value, set counter to depth and return
    if ( !Array.isArray(element) ) {
      counter = depth;
      return;
    } else if ( Array.isArray(element) ) {
      for (var i = 0; i < element.length; i++) {
        recurse(element[i], depth+1);
      }
    }
  }
  recurse(nestedArray, 0);
  return counter;
}