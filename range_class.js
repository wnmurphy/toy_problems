/*
  Build a class to represent a range of numbers that has:
    a beginning index
    an optional end index
      If there is no end index, the range should include only the passed-in start value.
    an optional step interval, defaulting to 1
      If step is negative, count backwards
      If no step passed, and start > end, count backwards

  The range should support the following utility functions:

  size(): return the number of items represented by the range
  each(callback(index)): iterate over the range, passing each value to a callback function
  includes(index): return whether or not the range includes the passed value
  
  Range should return null if we are given no start value.

  Range should not store the range as an array of numbers; it should work in constant space, including all methods.
*/

function Range (begin, end, step) {
  
  if (typeof begin === "undefined" || begin === null) {
    return null;
  }
  
  this.begin = begin;
  this.end = end;
  this.step = step;
  
  this.each = function (cb){
    this.generateRange(cb);
  };
  
  this.size = function () {
    var count = 0;
    this.each(function(){
      count++;
    })
    return count;
  };  
   
  this.includes = function (x){
    var included = false
    this.each(function(element){
      if (x === element) {
        included = true;
      }
    });
    return included;
  };
  
  this.generateRange = function (cb) {
    
    if (typeof this.end === "undefined" || this.end === null) {
      cb(this.begin);
      return this.begin;
    }
    
    if ( (typeof this.step === "undefined" || this.step === null) && this.begin > this.end ) {
      // loop backwards
      for (var i = this.begin; i > this.end - 1; i -= 1) {
        cb(i);
      }
    }
    
    if ( step && (this.begin > this.end ) ) {
      this.step = Math.abs(this.step);
      for (var j = this.begin; j > this.end - 1; j -= this.step) {
        cb(j);
      }
    }
    
    if (typeof this.step === "undefined" || this.step === null) {
      this.step = 1;
    }
    
    for (var k = this.begin; k < this.end + 1; k += this.step) {
      cb(k);
    }
  }
}
