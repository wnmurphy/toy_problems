/* 
  Given a single input string,
  write a function that produces all possible anagrams of a string
  and outputs them as an array.

  If we iterate over the string 
  so we build a branch on each starting letter, and 
  pass the remaining letters in the string into the next recursive call as remaining options
  we should get every available combination.
*/

function allAnagrams (str) {
  var anagrams = {};
  var charsRemaining = str.split('');

  // Take a string accumulator in progress, and a list of remaining characters.
  function getAnagrams (buildString, charOptionsLeft) {
    // Base case; if we've finished a recursive branch, store char combination.
    if (buildString.length === str.length) {
      anagrams[buildString] = true;
      return;
    }
    // Loop over each available remaining character.
    for (var i = 0; i < charOptionsLeft.length; i++) {
      // Recurse down that character's branch, 
      // appending the current char to the string in progress, and
      // removing that character from the remaining options.
      getAnagrams(buildString+charOptionsLeft[i], charOptionsLeft.slice(0, i) + charOptionsLeft.slice(i+1));
    }
  }
  // Start building combinations from an empty string.
  getAnagrams("", str);
  return Object.keys(anagrams);
}
