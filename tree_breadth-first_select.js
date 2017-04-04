
// var root1 = new Tree(1);
// var branch2 = root1.addChild(2);
// var branch3 = root1.addChild(3);
// var leaf4 = branch2.addChild(4);
// var leaf5 = branch2.addChild(5);
// var leaf6 = branch3.addChild(6);
// var leaf7 = branch3.addChild(7);

// root1.BFSelect(function (value, depth) {
//   return value % 2;
// }) //=> [1, 3, 5, 7]

// root1.BFSelect(function (value, depth) {
//   return depth === 2;
// }) //=> [2, 3]

// root1.BFSelect(function (value, depth) {
//   return depth === 3 && value === 4;
// }) //


myTree.BFSelect(function(null, 2){
  return depth === 2;
});


var queue = new Queue();

// This is the same as a Node
var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.BFSelect = function (filter, depth) {
  depth = depth || 0;

  // Check current node's value and push to queue if filter returns true.
//     if ( filter(this.value, depth) ) {
//       queue.enqueue(this.value);
//     }

  if (this.children) {
    // split filter from recursion
    for (var i = 0; i < this.children.length) {
      if ( filter(this.children[i]) ) {
        queue.enqueue(this.children[i]);
      }
    }  
    
    // Loop over this node's children, call search on each.
    for (var i = 0; i < this.children.length; i++){
      this.children[i].BFSelect(filter, depth + 1);
    }
  }
};




/**
 * You shouldn't need to change anything below here, but feel free to look.
 */

var Queue = function() {
  var storage = [];
  this.enqueue = function(item) {
    storage.push(item);
  };
  this.dequeue = function() {
    return storage.shift();
  };
};

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error('That node is not an immediate child of this tree');
  }
};
