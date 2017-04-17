/*
  Each index in the hash table's array will store an array of tuples, where tuple[0] is a key and tuple[1] is a value:

  var exampleHashTable = [
    [
      [key, value], [key, value]
    ],
    [
      [key, value]
    ],
    [
      [key, value], [key, value], [key, value]
    ]
  ];
*/

var HashTable = function (size) {
  size = size || 10;
  this.storage = new Array(size);
  
  // Naive hashing function.
  function hash (k) {
    k = k.toString();
    var charCodeTotal = 0;
    for (var i = 0; i < k.length; i++) {
      charCodeTotal += k.charCodeAt(i)
    }
    return charCodeTotal % size;
  };

  this.insert = function (k, v) {
    var idx = hash(k);
    if (this.storage[idx] === undefined) {
      this.storage[idx] = [];
    }
    this.storage[idx].push([k, v]);
    return this.storage[idx][this.storage.length-1][1];
  };
  
  this.retrieve = function (k) {
    var idx = hash(k);
    for (var i = 0; i < this.storage[idx].length; i++) {
      if (this.storage[idx][i][0] === k) {
        return this.storage[idx][i][1];
      }
    }
    return undefined;
  };

  this.remove = function (k) {
    var idx = hash(k);
    for (var i = 0; i < this.storage[idx].length; i++) {
      if (this.storage[idx][i][0] === k) {
        this.storage[idx].splice(i, 1);
        return true;
      }
    }
    return false;
  };

  this.each = function (callback) {
    for (var i = 0; i < this.storage.length; i++) {
      callback(this.storage[i]);
    }
  };
};