// Set
var emilySet = new Set();

var Set = function () {
  this.storage = {};
  // Accept set members on instantiation.
  for (var i = 0; i < arguments.length; i++) {
    this.storage[arguments[i]] = arguments[i];
  }
};

Set.prototype.contains = function (x) {
  if (x in this.storage) {
    return true
  }
  return false;
};

// Adds an item to the set if unique. O(N).
Set.prototype.add = function (x) {
  if ( !this.contains(x) ) {
    this.storage[x] = x;
    return this.list();
  } else {
    return "Item is already in this set.";
  }
};

// Removes an item from the set if present. O(N)
Set.prototype.remove = function (x) {
  if ( this.contains(x) ) {
    delete this.storage[x];
    return this.list();
  }
};

// Returns a list of the keys in the set. O(N)
Set.prototype.list = function () {
  return Object.keys(this.storage);
};

// Takes another set and returns an array representing the union of the two sets. O()
Set.prototype.union = function (set) {
  if ( Object.getPrototypeOf(set) === Object.getPrototypeOf(this) ) {
    var union = Object.keys(this.storage);
    for (var key in set.storage) {
      if ( !this.contains(key) ) {
        union.push(set.storage[key]);
      }
    }
    return union;
  } else {
    return "Union requires another set. Check argument type."
  }
};

// Takes another set and returns an array representing the intersection of the two sets.
Set.prototype.intersection = function (set) {
  if ( Object.getPrototypeOf(set) === Object.getPrototypeOf(this) ) {
    var intersection = [];
    for (var key in set.storage) {
      if ( this.contains(key) && set.contains(key) ) {
        intersection.push(key);
      }
    }
    return intersection;
  } else {
    return "Intersection requires another set. Check argument type."
  }
};


var mySet = new Set();
mySet.add("Neil");
mySet.add("Emily");
mySet.add("Steve");

var yourSet = new Set();
yourSet.add("Steve");
yourSet.add("Beve");