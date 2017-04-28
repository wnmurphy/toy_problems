/*
Power Set

Return an array that contains the power set of a given string. 
The power set is a set of all the possible subsets, including the empty set.

All characters in a subset should be sorted alphabetically.
The array of subsets should be sorted alphabetically.
Sets of the same characters are considered duplicates regardless of order and count only once.
Duplicate characters in strings should be ignored.

Examples:
  "a" 
  [ "", "a" ]

  "ab"  
  [ "", "a", "ab", "b" ]

  "horse"
  "ehors"
  [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]
  e
  h


  "obama" 
  [ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]
*/

function powerSet (str) {
  var uniqueChars = {};
  var uniqueStrings = {};

  // Break string into chars and push into object to get uniques.
  str = str.split("");
  for (var i = 0; i < str.length; i++) {
    uniqueChars[str[i]] = true;
  }
  // Get a sorted array of unique chars.
  str = Object.keys(uniqueChars).sort();

  function recurse (strInProgress, currentChar, charsRemaining) {
    // Append current character and add string in progress to set.
    
    strInProgress += currentChar;
    uniqueStrings[strInProgress] = true;

    if (charsRemaining.length === 0) { // we still need this to run once if the condition is true
      return;
    } else {  
      // Recurse and pass down string in progress, current char, and remaining char options.
      for (var j = 0; j < charsRemaining.length; j++) {        
        recurse(strInProgress, charsRemaining[j], charsRemaining.slice(j+1, charsRemaining.length+1));
      }
    }
  }

  recurse("", "", str);
  return Object.keys(uniqueStrings).sort();
}
