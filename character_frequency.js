/*

Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

Examples:
  "aaabbc"  : [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
  "mississippi" : [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
  "missinnnnssippi" : [ [ "i", 4 ], [ "n", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
  "" :  [ ]
*/

function charFrequency (str) {
  var chars = {}, result = [];
  for (var i = 0; i < str.length; i++) {
    chars[str[i]] ? chars[str[i]]++ : chars[str[i]] = 1;
  }
  for (var key in chars) {
    result.push( [key, chars[key]] );
  }
  return result = result.sort(function(a, b){
    return a[1] < b[1];
  }).sort(function(a, b){
     if (a[1] === b[1]) {
       return a[0] > b[0];
     }
     return 0;
  });
}
