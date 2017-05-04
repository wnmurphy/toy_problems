// Detect a cycle in a linked list.

// Defines a basic linked list constructor.
var LinkedList = function (x) {
    this.head = null;
    this.tail = null;

    // Initialize list with one node containing value, if passed
    if (x) {
        this.addToTail(x)
    }
};

// Defines a node constructor.
LinkedList.prototype.Node = function (value, next) {
    this.value = value;
    this.next = next;
};

// Adds a node to the end of the list.
LinkedList.prototype.addToTail = function (x) {
  
  // Make a new node with the passed-in value.
  var n = new this.Node(x);
  
  // If this is an empty list, 
  if (this.head === null) {
    // make head and tail both point to the new node.
      this.head = n;
      this.tail = this.head;
  } else {
    // Otherwise, add the new node to the end and update the tail pointer.
      this.tail.next = n;
      this.tail = n;
  }
};

// Removes a node from the front of the list.
LinkedList.prototype.removeHead = function () {
    if (this.head === null) {         // handle empty list
      return null;
    } else {
      var oldHead = this.head;
      if (this.head === this.tail) {  // handle 1 node
          this.head = null;
          this.tail = null;
          return oldHead;
      } else {                        // handle 2+ nodes
          this.head = this.head.next;
          return oldHead;
      }
    }
};

// Returns true if the list contains a node with the passed in value, otherwise false.
LinkedList.prototype.contains = function (searchTerm) {
    var pointerAt = this.head;
    while (pointerAt) {
        if (pointerAt.value === searchTerm) {                
          return true;
        }
        pointerAt = pointerAt.next;
    }
    return false; 
};

LinkedList.prototype.hasCycle = function () {
  // Start both fast and slow pointers at the head.
  var fast = this.head.next;
  var slow = this.head.next;
  // Termination conditions are that either both pointers will enter the cycle and eventually 
  // have the same referent, or the fast pointer will reach the end of the list and equal null.
  while ( fast.next !== null && fast.next.next !== null ) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};