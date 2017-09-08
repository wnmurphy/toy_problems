// Take an N x N matrix.
// Return "sorted" if elements are sorted along all rows and columns, otherwise "unsorted".

function matrixIsSorted() {
  input = input.split('\n');
  for (let k = 0; k < input.length; k++) {
      input[k] = input[k].split(' ');
  }
  
  function rowsSorted (input) {
    let sorted = true;
    for (let i = 0; i < input.length; i++) { //row
      for (let j = 0; j < input.length-2; j++) { //col
        if (! (input[i][j] <= input[i][j+1]) ) {
          sorted = false;
        }
      }
    }
    return sorted;
  }
  
  function colsSorted (col) {
    let sorted = true;

    for (let j = 0; j < input.length; j++) { //col
      for (let i = 0; i < input.length-1; i++) { //row
        
        if (! (input[i][j] <= input[i+1][j]) ) {
          sorted = false;
        }

      }
    }

    return sorted;
  }
  
  let result = rowsSorted(input) && colsSorted(input) ? "sorted" : "not sorted";
  console.log(result);
}

input = "1 2 5\n2 3 6\n4 7 7"
matrixIsSorted(input);

/*

           j
      0    1    2
  0 ["1", "2", "5"]
i 1 ["2", "3", "6"]
  2 ["4", "7", "7"]


*/