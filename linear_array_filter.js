// Write a function which filters an input array to remove any value that's in a filter array
// Output should be a the input array with the values in filterArr filtered out
// This should be in better than O(n^2)

function linearArrayFilter (inputArr, filterArr) {
  var filterValues = {}, outputArr = [];
  for (var i = 0; i < filterArr.length; i++) {
    filterValues[filterArr[i]] = true;
  }
  for (var j = 0; j < inputArr.length; j++) {
    if (!(inputArr[j] in filterValues)) {
      outputArr.push(inputArr[j]);
    }
  }
  return outputArr;
}