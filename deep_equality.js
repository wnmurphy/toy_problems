/*
  Write a function that, given two objects, returns whether or not the two are deeply equivalent.
  The structure of the two objects is the same, and so is the structure of each of their corresponding descendants.
  Do not use JSON.stringify to compare two strings.
*/

function deepEquals (a, b) {
  // Handle objects...
  // Make sure both a and b are both objects, or both not-objects.
  if ( a.toString() === "[object Object]" && b.toString() !== "[object Object]" || 
       a.toString() !== "[object Object]" && b.toString() === "[object Object]" ) {
    return false;
  // If both a and b are objects, compare them...
  } else if ( a.toString() === "[object Object]" && b.toString() === "[object Object]" ) {
    // Check that both objects have same number of keys...
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }
    // Check each property in a and b.
    for (var key in a) {
      // If both properties are nested objects, recurse.
      if (a[key].toString() === "[object Object]" && b[key].toString() === "[object Object]") {
        return deepEquals(a[key], b[key])
      // Otherwise, if one value is an object but the other isn't, return false.
      } else if ( a[key].toString() === "[object Object]" && b[key].toString() !== "[object Object]" || 
                  a[key].toString() !== "[object Object]" && b[key].toString() === "[object Object]" ) {
        return false;
      } else if (a[key] !== b[key]) {
        return false;
      }
    }
  // Otherwise, a and b are values. Compare them...
  } else {
    if (a !== b) {
      return false;
    }
  }
  return true;
}

// should be false
var c = { foo: 1, b: { c: 3 } };
var d = { foo: 1, b: { c:'potato' } };
deepEquals(c,d); // false

// should be false
var e = { foo: 1, b: { c: 'potato'} };
var f = { foo: 1, b: { c: 3 } };
deepEquals(e,f); // false

// should be true
var g = { foo: 1, b: { c: { d: { e: 'potato' } } } };
var h = { foo: 1, b: { c: { d: { e: 'potato' } } } };
deepEquals(g,h); // true

// should be true
var i = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
var j = { foo: 1, b: { c: { d: { e: 'potato' } } } };
deepEquals(i,j); // true

