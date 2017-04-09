// Fisher-Yates Shuffle
function shuffle (arr) {
  for (var i = 0; i < arr.length; i++) {
    swap(arr[i], arr[Math.floor(Math.random()*(arr.length-i))]);
  }
  function swap (from, to) {
    var hold;
    hold = arr[to];
    arr[to] = arr[from];
    arr[from] = hold;
  }
  return arr;
}
