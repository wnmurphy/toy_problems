/*
  Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number.
  Return all permutations, not only English words.
*/

function telephoneWords (fourDigitString) {
  fourDigitString = fourDigitString.toUpperCase().split('');
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
    if (combo.length === 4) {
      return combos.push(combo);
    }
    // For each digit in fourDigitString, 
    for (; i < fourDigitString.length; i++) {
      // If digit is either 0 or 1, add that to the string.
      if (keymap[fourDigitString[i]] === null) {
        buildCombos(combo + fourDigitString[i].toString(), i+1);
      } else {
        // Otherwise, start a recursive branch that replaces that digit for each of its alphanumerica options.
        for (var j = 0; j < keymap[fourDigitString[i]].length; j++) {
          buildCombos(combo + keymap[fourDigitString[i]][j], i+1);
        } 
      }
    }
  }
  // Start recursion.
  buildCombos("", 0);

  return combos;
}
