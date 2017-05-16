/*
  Implement Function#bind, first as a standalone function, then as a prototype method.
  Should support currying.
*/

var bind = function (method, context) {
  var args1 = Array.prototype.slice.call(arguments, 2, arguments.length);
  return function () {
    var args2 = args1.concat(Array.prototype.slice.call(arguments));
    return method.apply(context, args2);
  };
};

Function.prototype.bind = function (context) {
  var self = this;
  var args1 = Array.prototype.slice.call(arguments, 1, arguments.length);
  return function () {
    var args2 = args1.concat(Array.prototype.slice.call(arguments));
    return self.apply(context, args2);
  };
}