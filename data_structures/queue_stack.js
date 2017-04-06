// Write a stack. Then implement a queue using two stacks. Do not create a storage array for your queue.

var Stack = function (arr) {
  this.storage = arr || [];
  this.peek = function () {
    return this.storage[storage.length-1];
  };
  this.push = function (x) {
    return this.storage.push(x);
  };
  this.pop = function () {
    return this.pop();
  };
  // I'm assuming shift and unshift aren't allowed in the solution, but a Stack should have 'em, so...
  this.unshift = function (x) {
    this.storage = [x].concat(this.storage);
    return this.storage;
  };
  this.shift = function () {
    return this.storage.splice(0, 1);
  };
};

  /*
    We can use the second stack to hold contents when we add or remove them to the bottom of the primary stack.
    Queue.enqueue, 
      while first.storage is not empty
        pop the first stack 
        push result onto the second stack.
      push the incoming element onto the first stack
      while second.storage is not empty
        pop the second stack
        push result onto the first stack
    Queue.dequeue
      first.pop
  */

var Queue = function () {
  this.first = new Stack();
  this.second = new Stack();
  this.enqueue = function (x) {
    while (this.first.storage.length !== 0) {
      this.second.push( this.first.pop() );
    }
    this.first.push(x);
    while (this.second.storage.length !== 0) {
      this.first.push( this.second.pop() );
    }
  };
  this.dequeue = function () {
    this.first.pop();
  };

};

