// Given an array of unique words, find the word that contains the greatest number of other words. 
// A word must be at least two letters long.

function wordsWithinWords (words) {
  var matchCount = {};
  // Brute force solution w/ nested loops...
  for (var i = 0; i < words.length; i++) {
    matchCount[words[i]] = -1;
    for (var j = 0; j < words.length; j++) {
      if (words[i].match(words[j])) {
        matchCount[words[i]]++;
      }
    }
  }
  // Find the word with the greatest number of matches.
  var keyOfGreatestSoFar;
  for (var key in matchCount) {
    if (keyOfGreatestSoFar === undefined) { 
      keyOfGreatestSoFar = key;
    }
    if (matchCount[key] > matchCount[keyOfGreatestSoFar]) {
      keyOfGreatestSoFar = key;
    }
  }
  return keyOfGreatestSoFar;
}

wordsWithinWords([ "gray", "grays", "ray", "rays", "strays" ]); // grays
