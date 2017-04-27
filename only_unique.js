// Given a string, remove any non-unique (repeating) characters from the string and return a string of the remaining chars in order.

function onlyUniques (str) {
  var uniques = "";
  var charsSoFar = {};
  for (var i = 0; i < str.length; i++) {
    if (charsSoFar[str[i]] === undefined ) {
      charsSoFar[str[i]] = 1;
    } else {
      charsSoFar[str[i]]++;
    }
  }
  for (var key in charsSoFar) {
    if (charsSoFar[key] === 1) {
      uniques += key;
    }
  }
  return uniques;
}
