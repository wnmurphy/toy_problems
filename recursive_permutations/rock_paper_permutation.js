// Rock Paper Permutation

// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

1 [ "r", "p", "s" ]
2 [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
0 [ ]

/*

  O: Array containing strings representing every combination of the letters "r", "p", and "s" for the number of rounds (chars).
  I: A number, representing the number of rounds, or character places for each string.
  C: None 
  E: n = 0, no maximum, wrong type

*/

function rpsPermutation (n) {
  // Create storage array to hold string permutations.
  var permutations = [];
  // Store component chars in another array, so we can refer to them by index.
  var chars = ["r", "p", "s"];
  // Recursive function
  var recurse = function (str) {
    // Base: If string is same length as n, push to storage array
    if (str.length === n) {
      permutations.push(str);
    } else {
      for (var i = 0; i < chars.length; i++) {
        recurse(str + chars[i]);
      }
    }
  };
  recurse("");
  return permutations;
}