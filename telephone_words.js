/*
  Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number.
  Return all permutations, not only English words.
*/

function telephoneWords (digitString) {
  digitString = digitString.toUpperCase().split('');
  var keymap = {
    1: null,
    2: ["a","b","c"],
    3: ["d","e","f"],
    4: ["g","h","i"],
    5: ["j","k","l"],
    6: ["m","n","o"],
    7: ["p","q","r","s"],
    8: ["t","u","v"],
    9: ["w","x","y","z"],
    0: null
  };
  var combos = [];

  // Recursively build all alphanumeric combinations.
  function buildCombos (combo, i) {
    // Add to storage and exit if we've completed one combination.
    if (combo.length === digitString.length) {
      return combos.push(combo);
    }
    // For each digit in digitString, 
    for (; i < digitString.length; i++) {
      // If digit is either 0 or 1, add that to the string.
      if (keymap[digitString[i]] === null) {
        buildCombos(combo + digitString[i].toString(), i+1);
      } else {
        // Otherwise, start a recursive branch that replaces that digit for each of its alphanumerica options.
        for (var j = 0; j < keymap[digitString[i]].length; j++) {
          buildCombos(combo + keymap[digitString[i]][j], i+1);
        } 
      }
    }
  }
  // Start recursion.
  buildCombos("", 0);

  return combos;
}
