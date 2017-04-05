/*
  Implement the function asyncMap:

  asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
  Each of the tasks takes a separate callback and invokes that callback when complete.

  The callback passed to asyncMap is then performed once on the array of results of the callbacks of the tasks.

  The order of these results should be the same as the order of the tasks.
  It is important to note that this is not the order in which the tasks return,
  but the order in which they are passed to asyncMap.

  Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
  on the results array.

  I:  Take a tasks array, containing asynchronous functions, and a completion callback.
      Run each task.
      Generate a mapped results array collecting their respective results.
      When the array is filled with results, run the completion callback on the results array.
  O:  Invoke the completion callback once 
  C:  No limit to number of functions in tasks array.
  E:  Empty array. 
*/


/* Example usage

  asyncMap([
    function(cb){
      setTimeout(function(){
        cb('one');
      }, 200);
    },
    function(cb){
      setTimeout(function(){
        cb('two');
      }, 100);
    }
   ],
    function(results){
      // the results array will equal ['one','two'] even though
      // the second function had a shorter timeout.
      console.log(results); // ['one', 'two']
  });
*/


function asyncMap (tasksArr, done) {
  var results = new Array(tasksArr.length);
  var count = 0;

  for (var i = 0; i < tasksArr.length; i++) {

    (function(i){
      tasksArr[i](function(payload){
        results[i] = payload;
        count++;
        if (count === tasksArr.length) {
          done(results);
        }
      });
    })(i);
    
  }
}