#!/usr/bin/env node

// Return a function which takes an input, calls each of those functions last to first (reduceRight) on the input, then returns the input
function compose () {
  args = Array.prototype.slice.call(arguments);
  // Return a function which takes an input x, calls each of those functions first to last (reduce) on the input, then returns the input
  return function (x) {
    return args.reduceRight(function(resultOfPreviousFn, currentFn){
      return currentFn( resultOfPreviousFn );
    }, x);
  };
}

var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}

var welcome = compose(greet, exclaim);
welcome('phillip'); //=> 'hi: PHILLIP!'


/*
  Pipe: 
    Take a list of functions of arbitrary length.
    Return a function that is the composition of those functions.
    Each function is called on the return value of the preceding function.
    Pipe moves left to right through it's arguments
*/
function pipe () {
  args = Array.prototype.slice.call(arguments);
  // Return a function which takes an input x, calls each of those functions first to last (reduce) on the input, then returns the input
  return function (x) {
    return args.reduce(function(resultOfPreviousFn, currentFn){
      return currentFn( resultOfPreviousFn );
    }, x);
  };
}
// Example
var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }

pipe(add2, multiplyBy3)(5) //=> 21
pipe(add2, multiplyBy3, multiplyBy3)(5) //=> 63