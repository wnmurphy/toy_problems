
function binaryGap (n) {
  // Break string of 1s and 0s into an array
  var arr = parseInt(n).toString(2).split(''),
  // Init tracker for longest streak of 0s
  longestGapSoFar = 0,
  // Init counter for current gap
  currentGap = 0,
  
  // Strip out leading 0s.
  pointer1At = 0;
  while (arr[pointer1At] !== "1") {
    pointer1At++;
  }
  arr = arr.splice(pointer1At, arr.length-pointer1At);

  // Strip out trailing 0s.
  var pointer2At = arr.length;
  while (arr[pointer2At] !== "1") {
    pointer2At--;
  }
  arr = arr.splice(0, pointer2At+1);

  // Create a loop counter.
  var i = arr.length-1;
  // Until we run out of characters in the array.
  while (arr[i]) {
    if (arr[i] === '0') {
      currentGap++;
    }
    if (arr[i] === '1') {
      if (currentGap > longestGapSoFar) {
        longestGapSoFar = currentGap;
        currentGap = 0;
      }
    }
    i--;
  }
  return longestGapSoFar;
}