/*
  fewestCoins

  Given an array of coin denominations and a target sum, 
  write a function that calculates the fewest number of coins to achieve that sum.
*/
function fewestCoins (coinsArray, targetSum) {
  let count = 0;
  let sumLeft = targetSum;
  coinsArray.sort((a,b) => { return a < b; });
  for (let i = 0; i < coinsArray.length; i++) {
    if (sumLeft) {
      count += parseInt(sumLeft/coinsArray[i]); 
      sumLeft -= parseInt(sumLeft/coinsArray[i]) * coinsArray[i];
    }
  }
  return count;
}

fewestCoins([1,5,10,25,50,100], 51); // 2
fewestCoins([1,5,10,25,50,100], 24); // 6
