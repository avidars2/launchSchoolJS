{//Question 1
/**
 * What will the following code output? 
 * Try to determine the results without running the code.
 */

function func() {
  return this;
}

let context = func();

console.log(context); //The global object will be logged
//This is because when func is called, it returns 'this'
//'this' for the function declaration is implicitly bound to the global
//object and since the execution context is not set explicitly,
//The implicitly bound 'global' object is returned and logged
}

{//Question 2
/**
 * What will the following code output? 
 * Explain the difference, if any, 
 * between this output and that of problem 1.
 */
let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();

console.log(context);


//The object reference is returned
//This is because 'this' implicitly refers to the object
//'obj' points to as the anonymous function is a method
//of that object

//The difference between this and the previous output is that
//func is a method of 'obj', and so when it is invoked, the 
//execution context is implicitly set to 'obj'
//In the previous code, the function declaration was not a
//method of a user-defined object and when it was invoked
//No explicit execution context was set, nor was it invoked
//as a method of a specified object. As a result, it was
//implicitly bound by JS to the global object
}

{//Question 3
/**
 * What will the following code output?
 */
message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();

/**
 * The first call of deliver message will output 'Hello from the global scope!'
 * This is because the variable not declared with 'let, const, or var' is automatically added as a property
 * of the global scope. 
 * 
 * When deliver message is called, the evaluation of 'this' which through how the function
 * was invoked refers to the global object, will have it's 'message' property accessed and evaluated to
 * 'Hello from the global scope!', which then gets logged to the console.
 * 
 * The second call of 'deliverMessage' occurs after the reference to the deliverMessage function object
 * is added as a property to the 'foo' object. When 'deliverMessage' is later invoked as a method of 'foo',
 * 'this' now refers to the 'foo' object and will log the value associated with the 'message' property of 'foo'.
 * So 'Hello from the function scope!' is logged next.
 */
}

{//Question 4
/**
 * 2 methods were specified:
 * 1. call
 * 2. apply
 * 
 * Both functions allow you to pass an object as an argument
 * which will set the execution context for the function for the call
 * As a result, the functions 'this binding' will be to that object.
 */
}

{//Question 5
/**
 * Take a look at the following code snippet. 
 * Use call to invoke the add method but with foo as 
 * execution context. 
 * What will this return?
 * 
 * This will return '3' as the evaluation of 'this.a' and 'this.b'
 * being summed once the execution context of 'add' is set to 'foo'
 */
}
let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

console.log(bar.add.call(foo));