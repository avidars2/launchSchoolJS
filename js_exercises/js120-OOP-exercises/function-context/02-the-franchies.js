let franchise = {
  name: 'How to Train Your Dragon',
  // allMovies: function() {
  //   return [1, 2, 3].map(function(number) {
  //     return this.name + ' ' + number;
  //   });
  // },

  allMovies: function() {
    return [1, 2, 3].map((number) =>
       this.name + ' ' + number
    );
  },
};

console.log(franchise.allMovies())
/**
[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]
 * The above should be returned but won't.

This is because the function passed as an argument to the 'map'
method will be invoked by the 'map' method as a regular function
which causes the execution context to be lost.

'this' no longer refers to the object the method was invoked in, and
instead will be implicitly bound to the global object

To bind it to the same 'this' which 'allMovies' is bound to,

'this' may be passed as an additional argument to the 'map' method.

Or, an arrow function may be used instead since it will inherit the execution
context of the surrounding function.

Another solution is to assign 'self' or 'that' in the outer methods scope to 'this',
and then use 'self' for the inner function
 */